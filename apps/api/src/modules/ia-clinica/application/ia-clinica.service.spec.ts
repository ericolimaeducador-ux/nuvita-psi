import { Papel } from '../../../../../../packages/shared/src/auth';
import { AuditLogRepository } from '../../auth/application/ports/audit-log.repository';
import { AuditEvent } from '../../auth/domain/audit-event.enum';
import { AppConfigService } from '../../../common/security/config.service';
import { TipoUsoIA } from '../domain/registro-uso-ia.enum';
import { AnthropicClient } from '../infrastructure/anthropic.client';
import { IaUsoCryptoService } from '../infrastructure/crypto/ia-uso-crypto.service';
import { RegistroUsoIaRepository } from './ports/registro-uso-ia.repository';
import { SugerirAbordagemDto } from './dto/sugerir-abordagem.dto';
import { GerarPrescricaoDto } from './dto/gerar-prescricao.dto';
import { IaClinicaService } from './ia-clinica.service';

const context = {
  ip: '127.0.0.1',
  userAgent: 'jest',
  user: {
    sub: 'psi-1',
    email: 'psi@nuvita.test',
    papel: Papel.PSICOLOGO,
    clinicaId: 'clinica-1',
    jti: 'jti',
    typ: 'access' as const,
  },
};

function makeService(overrides: {
  registros?: Partial<RegistroUsoIaRepository>;
  auditLogs?: Partial<AuditLogRepository>;
} = {}) {
  const anthropic = {
    gerarTexto: jest.fn().mockResolvedValue('SUGESTAO DA IA'),
  } as unknown as AnthropicClient;

  const crypto = {
    encrypt: jest.fn((texto: string) => ({ cifrado: `cif:${texto.length}`, iv: 'iv', authTag: 'tag' })),
  } as unknown as IaUsoCryptoService;

  const registros = {
    create: jest.fn().mockResolvedValue({ id: 'registro-1' }),
    ...overrides.registros,
  } as unknown as RegistroUsoIaRepository;

  const auditLogs = {
    create: jest.fn().mockResolvedValue(undefined),
    ...overrides.auditLogs,
  } as unknown as AuditLogRepository;

  const configService = {
    getConfig: () => ({ anthropicModel: 'claude-sonnet-5' }),
  } as unknown as AppConfigService;

  const service = new IaClinicaService(anthropic, crypto, registros, auditLogs, configService);
  return { service, anthropic, crypto, registros, auditLogs };
}

describe('IaClinicaService — trilha de uso de IA', () => {
  it('sugerirAbordagem cifra input e output, persiste um RegistroUsoIa e devolve o id', async () => {
    const { service, crypto, registros } = makeService();
    const dto: SugerirAbordagemDto = { motivoAtendimento: 'ansiedade' };

    const out = await service.sugerirAbordagem(dto, context);

    expect(out).toEqual({ sugestao: 'SUGESTAO DA IA', registroUsoIaId: 'registro-1' });
    expect(crypto.encrypt).toHaveBeenCalledWith(JSON.stringify(dto));
    expect(crypto.encrypt).toHaveBeenCalledWith('SUGESTAO DA IA');
    expect(registros.create).toHaveBeenCalledWith(
      expect.objectContaining({
        clinicaId: 'clinica-1',
        usuarioId: 'psi-1',
        tipo: TipoUsoIA.SUGESTAO_ABORDAGEM,
        modelo: 'claude-sonnet-5',
        inputCifrado: expect.any(String),
        inputIv: expect.any(String),
        inputAuthTag: expect.any(String),
        outputCifrado: expect.any(String),
        outputIv: expect.any(String),
        outputAuthTag: expect.any(String),
      }),
    );
  });

  it('gerarPrescricao persiste com tipo PRESCRICAO_CUIDADOS e devolve prescricao + id', async () => {
    const { service, registros } = makeService();
    const dto: GerarPrescricaoDto = { contextoClinico: 'x' };

    const out = await service.gerarPrescricao(dto, context);

    expect(out).toEqual({ prescricao: 'SUGESTAO DA IA', registroUsoIaId: 'registro-1' });
    expect(registros.create).toHaveBeenCalledWith(
      expect.objectContaining({ tipo: TipoUsoIA.PRESCRICAO_CUIDADOS }),
    );
  });

  it('grava AI_SUGGESTION_GENERATED no audit log com tipo e registroUsoIaId', async () => {
    const { service, auditLogs } = makeService();

    await service.sugerirAbordagem({ motivoAtendimento: 'ansiedade' }, context);

    expect(auditLogs.create).toHaveBeenCalledWith(
      expect.objectContaining({
        event: AuditEvent.AI_SUGGESTION_GENERATED,
        userId: 'psi-1',
        ip: '127.0.0.1',
        userAgent: 'jest',
        metadata: {
          clinicaId: 'clinica-1',
          tipo: TipoUsoIA.SUGESTAO_ABORDAGEM,
          registroUsoIaId: 'registro-1',
        },
      }),
    );
  });

  it('fail-closed: se a persistência do registro falha, não devolve a sugestão', async () => {
    const { service } = makeService({
      registros: { create: jest.fn().mockRejectedValue(new Error('mongo down')) },
    });

    await expect(
      service.sugerirAbordagem({ motivoAtendimento: 'ansiedade' }, context),
    ).rejects.toThrow('mongo down');
  });

  it('fail-closed: se o audit log falha, não devolve a sugestão', async () => {
    const { service } = makeService({
      auditLogs: { create: jest.fn().mockRejectedValue(new Error('audit down')) },
    });

    await expect(
      service.sugerirAbordagem({ motivoAtendimento: 'ansiedade' }, context),
    ).rejects.toThrow('audit down');
  });

  it('sem clinicaId no contexto: lança e não chama a IA nem persiste registro', async () => {
    const { service, anthropic, registros } = makeService();
    const semClinica = { ...context, user: { ...context.user, clinicaId: undefined } };

    await expect(
      service.sugerirAbordagem({ motivoAtendimento: 'ansiedade' }, semClinica),
    ).rejects.toThrow();

    expect(anthropic.gerarTexto).not.toHaveBeenCalled();
    expect(registros.create).not.toHaveBeenCalled();
  });
});
