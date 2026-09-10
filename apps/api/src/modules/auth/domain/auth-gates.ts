import { Papel } from '../../../../../../packages/shared/src/auth';
import { TERMOS_DE_USO_VERSAO_ATUAL } from '../../../../../../packages/shared/src/termos';
import { TermosAceitos } from './user.entity';

/** Subconjunto de AuthenticatedUser que o predicado da cadeia de gates avalia. */
export interface GateAvaliavel {
  papel: Papel;
  deveTrocarSenha?: boolean;
  termosAceitos?: TermosAceitos | null;
}

/**
 * `true` quando há algum gate pós-login pendente para este usuário.
 *
 * O frontend decide QUAL tela mostrar (ordem definida: termos → senha); o
 * backend (AuthGatesGuard) só precisa saber que HÁ um gate pendente para
 * barrar toda rota não marcada com @GateExempt().
 *
 * Gates:
 * - troca de senha obrigatória: `deveTrocarSenha === true`, qualquer papel
 *   (feature-forced-password-change)
 * - aceite dos Termos de Uso: só PSICOLOGO, quando a versão aceita difere da
 *   vigente — inclui "nunca aceitou" (feature-terms-of-service-acceptance)
 */
export function gatePendente(user: GateAvaliavel): boolean {
  if (user.deveTrocarSenha === true) {
    return true;
  }

  if (user.papel === Papel.PSICOLOGO) {
    return user.termosAceitos?.versao !== TERMOS_DE_USO_VERSAO_ATUAL;
  }

  return false;
}
