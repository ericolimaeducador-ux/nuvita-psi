import { Papel } from '../../../../../../packages/shared/src/auth';
import { TERMOS_DE_USO_VERSAO_ATUAL } from '../../../../../../packages/shared/src/termos';
import { gatePendente } from './auth-gates';

describe('gatePendente — predicado da cadeia de gates pós-login (Fase 2b)', () => {
  it('deveTrocarSenha=true => gate pendente, independente do papel', () => {
    expect(gatePendente({ papel: Papel.SECRETARIA, deveTrocarSenha: true })).toBe(true);
    expect(gatePendente({ papel: Papel.PSICOLOGO, deveTrocarSenha: true })).toBe(true);
    expect(gatePendente({ papel: Papel.SUPER_ADMIN, deveTrocarSenha: true })).toBe(true);
  });

  it('PSICOLOGO sem termosAceitos => gate pendente', () => {
    expect(gatePendente({ papel: Papel.PSICOLOGO, termosAceitos: null })).toBe(true);
    expect(gatePendente({ papel: Papel.PSICOLOGO })).toBe(true);
  });

  it('PSICOLOGO com versão de termo defasada => gate pendente', () => {
    expect(
      gatePendente({
        papel: Papel.PSICOLOGO,
        termosAceitos: { versao: '0.9', dataAceite: new Date('2026-01-01') },
      }),
    ).toBe(true);
  });

  it('PSICOLOGO com a versão atual aceita => nenhum gate pendente', () => {
    expect(
      gatePendente({
        papel: Papel.PSICOLOGO,
        deveTrocarSenha: false,
        termosAceitos: { versao: TERMOS_DE_USO_VERSAO_ATUAL, dataAceite: new Date() },
      }),
    ).toBe(false);
  });

  it('o gate de termos é só para PSICOLOGO — outros papéis nunca são barrados por termo', () => {
    expect(gatePendente({ papel: Papel.SECRETARIA, termosAceitos: null })).toBe(false);
    expect(gatePendente({ papel: Papel.ADMIN, termosAceitos: null })).toBe(false);
    expect(gatePendente({ papel: Papel.PACIENTE, termosAceitos: null })).toBe(false);
  });

  it('conta comum sem nada pendente => false', () => {
    expect(
      gatePendente({ papel: Papel.SECRETARIA, deveTrocarSenha: false, termosAceitos: null }),
    ).toBe(false);
  });
});
