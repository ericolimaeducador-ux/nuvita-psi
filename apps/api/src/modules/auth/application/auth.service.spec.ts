import { Papel } from '../../../../../../packages/shared/src/auth';
import { AuditLogRepository } from './ports/audit-log.repository';
import { UserRepository } from './ports/user.repository';
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

  return { service };
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
