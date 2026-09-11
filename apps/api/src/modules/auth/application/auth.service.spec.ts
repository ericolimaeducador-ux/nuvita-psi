import { BadRequestException, ConflictException, Logger } from '@nestjs/common';
import { Papel } from '../../../../../../packages/shared/src/auth';
import { TERMOS_DE_USO_VERSAO_ATUAL } from '../../../../../../packages/shared/src/termos';
import { AuditLogRepository } from './ports/audit-log.repository';
import { UserRepository } from './ports/user.repository';
import { AuditEvent } from '../domain/audit-event.enum';
import { User } from '../domain/user.entity';
import { AuthService } from './auth.service';

jest.mock('bcrypt', () => ({
  compare: jest.fn().mockResolvedValue(true),
  hash: jest.fn().mockResolvedValue('hash'),
}));

const TERMOS = { versao: '1.0', dataAceite: new Date('2026-09-10T12:00:00.000Z') };

function makeUser(overrides: Partial<User> = {}): User {
  return {
    id: 'u1',
    nome: 'Fulana',
    email: 'fulana@nuvita.test',
    passwordHash: 'hash-bcrypt',
    papel: Papel.SECRETARIA,
    clinicaId: 'c1',
    ativo: true,
    criadoEm: new Date('2026-09-10T00:00:00.000Z'),
    deveTrocarSenha: false,
    termosAceitos: null,
    ...overrides,
  };
}

function makeService(user: User) {
  const users = {
    findByEmailWithSecrets: jest.fn().mockResolvedValue(user),
    findById: jest.fn().mockResolvedValue(user),
    update: jest.fn().mockImplementation((_id: string, patch: Partial<User>) =>
      Promise.resolve({ ...user, ...patch }),
    ),
  } as unknown as UserRepository;

  const auditLogs = { create: jest.fn().mockResolvedValue(undefined) } as unknown as AuditLogRepository;

  const jwtService = {
    signAsync: jest.fn().mockResolvedValue('signed-token'),
    verifyAsync: jest.fn().mockResolvedValue({
      typ: 'refresh',
      jti: 'refresh-jti',
      sub: user.id,
      email: user.email,
      papel: user.papel,
    }),
  };

  const configService = {
    getConfig: jest.fn().mockReturnValue({
      bcryptRounds: 12,
      jwtAccessSecret: 'access-secret',
      jwtRefreshSecret: 'refresh-secret',
    }),
  };

  const loginRateLimiter = {
    assertAllowed: jest.fn().mockResolvedValue(undefined),
    clear: jest.fn().mockResolvedValue(undefined),
    recordFailure: jest.fn().mockResolvedValue(undefined),
  };

  const tokenRevocation = {
    isRevoked: jest.fn().mockResolvedValue(false),
    revoke: jest.fn().mockResolvedValue(undefined),
  };

  const service = new AuthService(
    users,
    auditLogs,
    jwtService as never,
    configService as never,
    loginRateLimiter as never,
    tokenRevocation as never,
  );

  return { service, users, auditLogs };
}

const context = { ip: '127.0.0.1', userAgent: 'jest' };

describe('AuthService — contrato do user na resposta (Fase 2)', () => {
  it('login expõe deveTrocarSenha e termosAceitos no user quando setados', async () => {
    const user = makeUser({ deveTrocarSenha: true, termosAceitos: TERMOS });
    const { service } = makeService(user);

    const res = await service.login({ email: user.email, password: 'x' }, context);

    expect(res.user.deveTrocarSenha).toBe(true);
    expect(res.user.termosAceitos).toEqual(TERMOS);
  });

  it('login expõe deveTrocarSenha=false e termosAceitos=null para conta comum', async () => {
    const user = makeUser({ deveTrocarSenha: false, termosAceitos: null });
    const { service } = makeService(user);

    const res = await service.login({ email: user.email, password: 'x' }, context);

    expect(res.user.deveTrocarSenha).toBe(false);
    expect(res.user.termosAceitos ?? null).toBeNull();
  });

  it('refresh expõe os dois campos no user', async () => {
    const user = makeUser({
      papel: Papel.PSICOLOGO,
      deveTrocarSenha: true,
      termosAceitos: TERMOS,
    });
    const { service } = makeService(user);

    const res = await service.refresh('refresh-token', context);

    expect(res.user.deveTrocarSenha).toBe(true);
    expect(res.user.termosAceitos).toEqual(TERMOS);
  });

  it('a resposta nunca vaza passwordHash nem twoFactorSecret', async () => {
    const user = makeUser({ twoFactorSecret: 'BASE32' });
    const { service } = makeService(user);

    const res = await service.login({ email: user.email, password: 'x' }, context);
    const asRecord = res.user as unknown as Record<string, unknown>;

    expect(asRecord.passwordHash).toBeUndefined();
    expect(asRecord.twoFactorSecret).toBeUndefined();
  });
});

describe('AuthService.validateAccessPayload — enriquece request.user (Fase 2b)', () => {
  const accessPayload = {
    typ: 'access' as const,
    jti: 'access-jti',
    sub: 'u1',
    email: 'fulana@nuvita.test',
    papel: Papel.PSICOLOGO,
  };

  it('anexa deveTrocarSenha e termosAceitos ao que retorna', async () => {
    const termos = { versao: '1.0', dataAceite: new Date('2026-09-10T12:00:00.000Z') };
    const user = makeUser({ papel: Papel.PSICOLOGO, deveTrocarSenha: true, termosAceitos: termos });
    const { service } = makeService(user);

    const result = await service.validateAccessPayload(accessPayload);

    expect(result.deveTrocarSenha).toBe(true);
    expect(result.termosAceitos).toEqual(termos);
    expect(result.sub).toBe('u1');
    expect(result.typ).toBe('access');
  });

  it('normaliza ausência para false / null', async () => {
    const user = makeUser({ deveTrocarSenha: false, termosAceitos: null });
    const { service } = makeService(user);

    const result = await service.validateAccessPayload(accessPayload);

    expect(result.deveTrocarSenha).toBe(false);
    expect(result.termosAceitos).toBeNull();
  });
});

describe('AuthService.aceitarTermos (Fase 5)', () => {
  const context = { ip: '127.0.0.1', userAgent: 'jest' };

  it('rejeita versão diferente da vigente com 400', async () => {
    const { service } = makeService(makeUser({ papel: Papel.PSICOLOGO }));

    await expect(service.aceitarTermos('u1', '0.9', context)).rejects.toThrow(BadRequestException);
  });

  it('registra termosAceitos { versao, dataAceite } e escreve TERMS_ACCEPTED', async () => {
    const user = makeUser({ papel: Papel.PSICOLOGO, termosAceitos: null });
    const { service, users, auditLogs } = makeService(user);

    const res = await service.aceitarTermos('u1', TERMOS_DE_USO_VERSAO_ATUAL, context);

    expect(users.update).toHaveBeenCalledWith(
      'u1',
      expect.objectContaining({
        termosAceitos: expect.objectContaining({ versao: TERMOS_DE_USO_VERSAO_ATUAL, dataAceite: expect.any(Date) }),
      }),
    );
    expect(auditLogs.create).toHaveBeenCalledWith(
      expect.objectContaining({ event: AuditEvent.TERMS_ACCEPTED, metadata: { versao: TERMOS_DE_USO_VERSAO_ATUAL } }),
    );
    expect(res.user.termosAceitos?.versao).toBe(TERMOS_DE_USO_VERSAO_ATUAL);
  });

  it('é idempotente: aceitar de novo a mesma versão não regrava nem re-audita', async () => {
    const user = makeUser({
      papel: Papel.PSICOLOGO,
      termosAceitos: { versao: TERMOS_DE_USO_VERSAO_ATUAL, dataAceite: new Date('2026-09-10') },
    });
    const { service, users, auditLogs } = makeService(user);

    const res = await service.aceitarTermos('u1', TERMOS_DE_USO_VERSAO_ATUAL, context);

    expect(users.update).not.toHaveBeenCalled();
    expect(auditLogs.create).not.toHaveBeenCalled();
    expect(res.user.termosAceitos?.versao).toBe(TERMOS_DE_USO_VERSAO_ATUAL);
  });

  it('não vaza passwordHash/twoFactorSecret na resposta', async () => {
    const user = makeUser({ papel: Papel.PSICOLOGO, twoFactorSecret: 'BASE32', termosAceitos: null });
    const { service } = makeService(user);

    const res = await service.aceitarTermos('u1', TERMOS_DE_USO_VERSAO_ATUAL, context);
    const asRecord = res.user as unknown as Record<string, unknown>;

    expect(asRecord.passwordHash).toBeUndefined();
    expect(asRecord.twoFactorSecret).toBeUndefined();
  });
});

describe('AuthService.trocarSenhaObrigatoria (Fase 6)', () => {
  const context = { ip: '127.0.0.1', userAgent: 'jest' };

  it('rejeita com 409 quando deveTrocarSenha já é false', async () => {
    const { service } = makeService(makeUser({ deveTrocarSenha: false }));

    await expect(
      service.trocarSenhaObrigatoria('u1', 'novaSenhaSegura123', context),
    ).rejects.toThrow(ConflictException);
  });

  it('atualiza o hash, zera deveTrocarSenha e escreve FORCED_PASSWORD_CHANGED', async () => {
    const user = makeUser({ deveTrocarSenha: true });
    const { service, users, auditLogs } = makeService(user);

    const res = await service.trocarSenhaObrigatoria('u1', 'novaSenhaSegura123', context);

    expect(users.update).toHaveBeenCalledWith(
      'u1',
      expect.objectContaining({ passwordHash: expect.any(String), deveTrocarSenha: false }),
    );
    expect(auditLogs.create).toHaveBeenCalledWith(
      expect.objectContaining({ event: AuditEvent.FORCED_PASSWORD_CHANGED }),
    );
    expect(res.user.deveTrocarSenha).toBe(false);
  });

  it('o passwordHash gravado não é a senha em claro', async () => {
    const user = makeUser({ deveTrocarSenha: true });
    const { service, users } = makeService(user);

    await service.trocarSenhaObrigatoria('u1', 'novaSenhaSegura123', context);

    const patch = (users.update as jest.Mock).mock.calls[0][1];
    expect(patch.passwordHash).not.toBe('novaSenhaSegura123');
  });

  it('não vaza passwordHash/twoFactorSecret na resposta', async () => {
    const user = makeUser({ deveTrocarSenha: true, twoFactorSecret: 'BASE32' });
    const { service } = makeService(user);

    const res = await service.trocarSenhaObrigatoria('u1', 'novaSenhaSegura123', context);
    const asRecord = res.user as unknown as Record<string, unknown>;

    expect(asRecord.passwordHash).toBeUndefined();
    expect(asRecord.twoFactorSecret).toBeUndefined();
  });
});

describe('AuthService — observabilidade dos gates (Fase 13)', () => {
  const context = { ip: '127.0.0.1', userAgent: 'jest' };
  let errorSpy: jest.SpyInstance;
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    errorSpy = jest.spyOn(Logger.prototype, 'error').mockImplementation(() => undefined);
    warnSpy = jest.spyOn(Logger.prototype, 'warn').mockImplementation(() => undefined);
  });

  afterEach(() => {
    errorSpy.mockRestore();
    warnSpy.mockRestore();
  });

  const payloadsOf = (spy: jest.SpyInstance) =>
    spy.mock.calls.map((c) => JSON.parse(c[0] as string));

  it('aceitarTermos: versão inválida → warn gate_endpoint_4xx status=400 gate=terms', async () => {
    const { service } = makeService(makeUser({ papel: Papel.PSICOLOGO }));

    await expect(service.aceitarTermos('u1', '0.9', context)).rejects.toThrow(BadRequestException);

    expect(payloadsOf(warnSpy)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          level: 'warn',
          event: 'gate_endpoint_4xx',
          status: 400,
          gate: 'terms',
          userId: 'u1',
        }),
      ]),
    );
  });

  it('trocarSenhaObrigatoria: flag já false → warn gate_endpoint_4xx status=409 gate=password', async () => {
    const { service } = makeService(makeUser({ deveTrocarSenha: false }));

    await expect(
      service.trocarSenhaObrigatoria('u1', 'novaSenhaSegura123', context),
    ).rejects.toThrow(ConflictException);

    expect(payloadsOf(warnSpy)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          level: 'warn',
          event: 'gate_endpoint_4xx',
          status: 409,
          gate: 'password',
          userId: 'u1',
        }),
      ]),
    );
  });

  it('aceitarTermos: falha ao persistir → error auth_gate_persist_failure gate=terms', async () => {
    const user = makeUser({ papel: Papel.PSICOLOGO, termosAceitos: null });
    const { service, users } = makeService(user);
    (users.update as jest.Mock).mockRejectedValueOnce(new Error('mongo down'));

    await expect(
      service.aceitarTermos('u1', TERMOS_DE_USO_VERSAO_ATUAL, context),
    ).rejects.toThrow('mongo down');

    expect(payloadsOf(errorSpy)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          level: 'error',
          event: 'auth_gate_persist_failure',
          gate: 'terms',
          userId: 'u1',
        }),
      ]),
    );
  });

  it('trocarSenhaObrigatoria: falha ao persistir → error auth_gate_persist_failure gate=password', async () => {
    const user = makeUser({ deveTrocarSenha: true });
    const { service, users } = makeService(user);
    (users.update as jest.Mock).mockRejectedValueOnce(new Error('mongo down'));

    await expect(
      service.trocarSenhaObrigatoria('u1', 'novaSenhaSegura123', context),
    ).rejects.toThrow('mongo down');

    expect(payloadsOf(errorSpy)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          level: 'error',
          event: 'auth_gate_persist_failure',
          gate: 'password',
          userId: 'u1',
        }),
      ]),
    );
  });

  it('caminho feliz de cada gate → nenhum evento de erro/warn', async () => {
    const psi = makeService(makeUser({ papel: Papel.PSICOLOGO, termosAceitos: null }));
    await psi.service.aceitarTermos('u1', TERMOS_DE_USO_VERSAO_ATUAL, context);

    const pwd = makeService(makeUser({ deveTrocarSenha: true }));
    await pwd.service.trocarSenhaObrigatoria('u1', 'novaSenhaSegura123', context);

    expect(errorSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
  });
});
