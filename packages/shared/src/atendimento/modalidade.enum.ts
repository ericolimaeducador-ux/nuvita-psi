/**
 * Modalidade do atendimento prestado pela clinica.
 * O sistema atende duas frentes de trabalho:
 * - MEDICO: consultas e procedimentos clinicos
 * - PSICOLOGIA: atendimento psicologico / psicoterapia (extra do sistema)
 */
export enum ModalidadeAtendimento {
  MEDICO = 'medico',
  PSICOLOGIA = 'psicologia',
}

export const MODALIDADES_ATENDIMENTO = Object.values(ModalidadeAtendimento);

export const ROTULO_MODALIDADE: Record<ModalidadeAtendimento, string> = {
  [ModalidadeAtendimento.MEDICO]: 'Atendimento Medico',
  [ModalidadeAtendimento.PSICOLOGIA]: 'Atendimento Psicologico',
};
