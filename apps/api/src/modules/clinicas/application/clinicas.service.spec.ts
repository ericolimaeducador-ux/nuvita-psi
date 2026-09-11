import { ConflictException, Logger } from '@nestjs/common';
import { Papel } from '../../../../../../packages/shared/src/auth';
import { AuditEvent } from '../../auth/domain/audit-event.enum';
import { PlanoClinica } from '../domain/clinica.entity';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { ClinicasService } from './clinicas.service';

jest.mock('bcrypt', () => ({ hash: jest.fn().mockResolvedValue('hash-bcrypt') }));

const dto: CreateClinicaDto = {
  nome: 'Clínica Teste',
  cnpj: '11222333000181',
  plano: PlanoClinica.BASICO,
  configuracoes: { fusoHorario: 'America/Sao_Paulo', duracaoConsultaPadrao: 50 },
  primeiroAdmin: { nome: 'Admin', email: 'Admin@Clinica.test', password: 'senhaGerada123' },
};

function makeService(overrides: {
  clinicas?: Record<string, jest.Mock>;
  users?: Record<string, jest.Mock>;
  auditLogs?: Record<string, jest.Mock>;
} = {}) {
  const clinicas = {
    findByCnpj: jest.fn().mockResolvedValue(null),
    findById: jest.fn(),
    create: jest.fn().mockResolvedValue({ id: 'cli-1', plano: 'basico' }),
    delete: jest.fn().mockResolvedValue(undefined),
    ...overrides.clinicas,
  };
  const users = {
    findByEmail: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue({
      id: 'adm-1',
      nome: 'Admin',
      email: 'admin@clinica.test',
      papel: Papel.ADMIN,
      clinicaId: 'cli-1',
    }),
    ...overrides.users,
  };
  const auditLogs = { create: jest.fn().mockResolvedValue(undefined), ...overrides.auditLogs };
  const configService = { getConfig: jest.fn().mockReturnValue({ bcryptRounds: 12, totpIssuer: 'Nuvita Psi' }) };

  const service = new ClinicasService(
    clinicas as never,
    users as never,
    auditLogs as never,
    configService as never,
  );
  return { service, clinicas, users, auditLogs };
}

const ctx = { ip: '127.0.0.1', userAgent: 'jest' };

describe('ClinicasService.onboard (Fase 7)', () => {
  it('cria clínica + admin e escreve CLINIC_CREATED', async () => {
    const { service, clinicas, users, auditLogs } = makeService();

    const res = await service.onboard(dto, ctx);

    expect(clinicas.create).toHaveBeenCalled();
    expect(users.create).toHaveBeenCalledWith(
      expect.objectContaining({ papel: Papel.ADMIN, clinicaId: 'cli-1' }),
    );
    expect(auditLogs.create).toHaveBeenCalledWith(
      expect.objectContaining({ event: AuditEvent.CLINIC_CREATED }),
    );
    expect(res.admin.id).toBe('adm-1');
  });

  it('CNPJ já cadastrado → ConflictException, nada é criado', async () => {
    const { service, clinicas, users } = makeService({
      clinicas: { findByCnpj: jest.fn().mockResolvedValue({ id: 'x' }) },
    });

    await expect(service.onboard(dto, ctx)).rejects.toThrow(ConflictException);
    expect(clinicas.create).not.toHaveBeenCalled();
    expect(users.create).not.toHaveBeenCalled();
  });

  it('e-mail do admin já cadastrado → ConflictException, nada é criado', async () => {
    const { service, clinicas } = makeService({
      users: { findByEmail: jest.fn().mockResolvedValue({ id: 'x' }) },
    });

    await expect(service.onboard(dto, ctx)).rejects.toThrow(ConflictException);
    expect(clinicas.create).not.toHaveBeenCalled();
  });

  it('falha ao criar o admin → compensa: apaga a clínica (sem órfã)', async () => {
    const { service, clinicas } = makeService({
      users: { create: jest.fn().mockRejectedValue(new Error('boom')) },
    });

    await expect(service.onboard(dto, ctx)).rejects.toThrow('boom');
    expect(clinicas.delete).toHaveBeenCalledWith('cli-1');
  });

  it('options.deveTrocarSenha=true → admin nasce com o flag', async () => {
    const { service, users } = makeService();

    await service.onboard(dto, ctx, { deveTrocarSenha: true });

    expect(users.create).toHaveBeenCalledWith(expect.objectContaining({ deveTrocarSenha: true }));
  });

  it('options.atorUserId → audit atribuído ao ator, admin no metadata', async () => {
    const { service, auditLogs } = makeService();

    await service.onboard(dto, ctx, { atorUserId: 'super-1' });

    expect(auditLogs.create).toHaveBeenCalledWith(
      expect.objectContaining({
        event: AuditEvent.CLINIC_CREATED,
        userId: 'super-1',
        metadata: expect.objectContaining({ adminId: 'adm-1' }),
      }),
    );
  });

  it('sem options (chamada estilo CLI) → admin sem flag, audit atribuído ao admin', async () => {
    const { service, users, auditLogs } = makeService();

    await service.onboard(dto, ctx);

    expect(users.create).toHaveBeenCalledWith(
      expect.not.objectContaining({ deveTrocarSenha: true }),
    );
    expect(auditLogs.create).toHaveBeenCalledWith(expect.objectContaining({ userId: 'adm-1' }));
  });
});

describe('ClinicasService.onboard — observabilidade (Fase 13)', () => {
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    errorSpy = jest.spyOn(Logger.prototype, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => errorSpy.mockRestore());

  function payloads() {
    return errorSpy.mock.calls.map((c) => JSON.parse(c[0] as string));
  }

  it('falha ao criar o admin → loga onboarding_partial_failure stage=create_admin', async () => {
    const { service } = makeService({
      users: { create: jest.fn().mockRejectedValue(new Error('boom')) },
    });

    await expect(service.onboard(dto, ctx, { atorUserId: 'super-1' })).rejects.toThrow('boom');

    expect(payloads()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          level: 'error',
          event: 'onboarding_partial_failure',
          stage: 'create_admin',
          clinicaId: 'cli-1',
          userId: 'super-1',
        }),
      ]),
    );
  });

  it('falha ao criar o admin E a compensação falha → loga stage=compensate_clinic', async () => {
    const { service } = makeService({
      users: { create: jest.fn().mockRejectedValue(new Error('boom')) },
      clinicas: {
        findByCnpj: jest.fn().mockResolvedValue(null),
        create: jest.fn().mockResolvedValue({ id: 'cli-1', plano: 'basico' }),
        delete: jest.fn().mockRejectedValue(new Error('delete down')),
      },
    });

    await expect(service.onboard(dto, ctx)).rejects.toThrow('boom');

    expect(payloads()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          level: 'error',
          event: 'onboarding_partial_failure',
          stage: 'compensate_clinic',
          clinicaId: 'cli-1',
        }),
      ]),
    );
  });

  it('onboarding bem-sucedido → nenhum evento de erro', async () => {
    const { service } = makeService();

    await service.onboard(dto, ctx, { atorUserId: 'super-1' });

    expect(errorSpy).not.toHaveBeenCalled();
  });
});
