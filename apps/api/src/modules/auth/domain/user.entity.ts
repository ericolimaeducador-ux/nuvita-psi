import { Modulo, Papel, resolvePermissoes } from '../../../../../../packages/shared/src/auth';

/** Aceite dos Termos de Uso do profissional (feature-terms-of-service-acceptance). */
export interface TermosAceitos {
  versao: string;
  dataAceite: Date;
}

export interface User {
  id: string;
  nome: string;
  email: string;
  passwordHash: string;
  papel: Papel;
  clinicaId?: string | null;
  twoFactorSecret?: string;
  /** Registro do conselho profissional: CRM (médico), COREN (enfermeiro). */
  registroProfissional?: string;
  ativo: boolean;
  criadoEm: Date;
  /** Troca de senha obrigatória no próximo login (feature-forced-password-change). Ausente = false. */
  deveTrocarSenha: boolean;
  /** Aceite dos Termos de Uso (feature-terms-of-service-acceptance). null/ausente = não aceito. */
  termosAceitos?: TermosAceitos | null;
  /** Exceções por usuário sobre o padrão do papel (ver resolvePermissoes). */
  modulosConcedidos?: Modulo[];
  modulosRevogados?: Modulo[];
}

export type PublicUser = Omit<User, 'passwordHash' | 'twoFactorSecret'> & {
  /** Permissões efetivas (padrão do papel ∪ concedidas − revogadas). */
  permissoes: Modulo[];
};

export function toPublicUser(user: User): PublicUser {
  const { passwordHash: _passwordHash, twoFactorSecret: _twoFactorSecret, ...safeUser } = user;
  return {
    ...safeUser,
    permissoes: resolvePermissoes(user.papel, user.modulosConcedidos, user.modulosRevogados),
  };
}
