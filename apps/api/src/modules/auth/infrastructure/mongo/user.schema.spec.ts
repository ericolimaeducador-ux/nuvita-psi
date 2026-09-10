import { UserSchema } from './user.schema';

/**
 * Testes sem banco: verificam a DEFINIÇÃO do schema (defaults, campos aninhados,
 * ausência de required no nível do documento). Não provam que o Mongoose aplica
 * as regras em runtime — a suíte não tem camada de banco. Ver §10 do TDD
 * (my_docs/tdd-clinic-onboarding-and-auth-gates.md, Fase 1).
 */
describe('users schema — campos dos auth gates (Fase 1)', () => {
  it('deveTrocarSenha existe e nasce com default false', () => {
    const path = UserSchema.path('deveTrocarSenha');
    expect(path).toBeDefined();
    expect(path.options.default).toBe(false);
  });

  it('termosAceitos é um campo aninhado opcional com versao + dataAceite', () => {
    const path = UserSchema.path('termosAceitos');
    expect(path).toBeDefined();

    const nested = (path as unknown as { schema?: { path(p: string): unknown } }).schema;
    expect(nested?.path('versao')).toBeDefined();
    expect(nested?.path('dataAceite')).toBeDefined();
  });

  it('migração aditiva: nenhum dos dois campos é required no nível do documento', () => {
    expect(UserSchema.path('deveTrocarSenha').options.required).toBeFalsy();
    expect(UserSchema.path('termosAceitos').options.required).toBeFalsy();
  });
});
