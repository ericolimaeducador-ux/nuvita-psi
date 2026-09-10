import { Papel } from '../../../../../packages/shared/src/auth';
import { PlanoClinica } from '../clinicas/domain/clinica.entity';
import { CriarClinicaDto } from './application/dto/criar-clinica.dto';
import { SuperAdminService } from './super-admin.service';

const dto: CriarClinicaDto = {
  clinica: {
    nome: 'Clínica Nova',
    cnpj: '11222333000181',
    plano: PlanoClinica.BASICO,
    fusoHorario: 'America/Sao_Paulo',
    duracaoConsultaPadrao: 50,
  },
  primeiroAdmin: { nome: 'Admin da Clínica', email: 'admin@clinicanova.test' },
};

const ctx = { ip: '127.0.0.1', userAgent: 'jest', userId: 'super-1' };

function makeService() {
  const onboard = jest.fn().mockImplementation((onboardDto) =>
    Promise.resolve({
      clinica: { id: 'cli-1', nome: onboardDto.nome, plano: onboardDto.plano },
      admin: { id: 'adm-1', nome: onboardDto.primeiroAdmin.nome, email: onboardDto.primeiroAdmin.email, papel: Papel.ADMIN, clinicaId: 'cli-1' },
      limites: {},
      twoFactorSetup: { required: true, otpauthUrl: 'otpauth://x', base32: 'BASE32SECRET' },
    }),
  );
  const clinicasService = { onboard } as never;

  const service = new SuperAdminService(
    {} as never, // users
    {} as never, // clinicas repo
    {} as never, // configService
    clinicasService,
  );
  return { service, onboard };
}

describe('SuperAdminService.criarClinica (Fase 7)', () => {
  it('gera senha temporária, chama onboard com deveTrocarSenha=true e ator = super admin', async () => {
    const { service, onboard } = makeService();

    const res = await service.criarClinica(dto, ctx);

    const [onboardDto, onboardCtx, onboardOptions] = onboard.mock.calls[0];
    expect(onboardDto.primeiroAdmin.password).toEqual(res.senhaTemporaria);
    expect(onboardDto.primeiroAdmin.password.length).toBeGreaterThanOrEqual(16);
    expect(onboardCtx).toEqual(expect.objectContaining({ ip: '127.0.0.1' }));
    expect(onboardOptions).toEqual({ deveTrocarSenha: true, atorUserId: 'super-1' });
  });

  it('mapeia fusoHorario/duracao para configuracoes do CreateClinicaDto', async () => {
    const { service, onboard } = makeService();

    await service.criarClinica(dto, ctx);

    const [onboardDto] = onboard.mock.calls[0];
    expect(onboardDto.configuracoes).toEqual({
      fusoHorario: 'America/Sao_Paulo',
      duracaoConsultaPadrao: 50,
    });
  });

  it('retorna clínica, admin, senhaTemporaria (uma vez) e só o base32 do 2FA', async () => {
    const { service } = makeService();

    const res = await service.criarClinica(dto, ctx);

    expect(res.clinica.id).toBe('cli-1');
    expect(res.admin.id).toBe('adm-1');
    expect(typeof res.senhaTemporaria).toBe('string');
    expect(res.twoFactorSetup).toEqual({ base32: 'BASE32SECRET' });
  });
});
