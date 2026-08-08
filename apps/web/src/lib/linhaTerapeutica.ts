import { LinhaTerapeutica, type RegistroPsicologico } from '@/types';

/** Campos específicos de sessão por linha terapêutica — injetados no
 * formulário de Atendimento Psicológico quando o paciente tem uma linha
 * definida, e usados para exibir/imprimir esses campos quando presentes. */
export const CAMPOS_POR_LINHA: Record<
  LinhaTerapeutica,
  Array<{ key: keyof RegistroPsicologico; label: string; placeholder?: string }>
> = {
  [LinhaTerapeutica.TCC]: [
    { key: 'tccPensamentosAutomaticos', label: 'Pensamentos automáticos identificados' },
    { key: 'tccDistorcoesCognitivas', label: 'Distorções cognitivas trabalhadas' },
    { key: 'tccTarefaCasa', label: 'Tarefa de casa (exercício comportamental)' },
    { key: 'tccRegistroComportamental', label: 'Registro de comportamento-alvo / frequência' },
  ],
  [LinhaTerapeutica.PSICANALISE]: [
    { key: 'psicanaliseAssociacaoLivre', label: 'Material de associação livre' },
    { key: 'psicanaliseConteudoOnirico', label: 'Conteúdo onírico relatado (sonhos)' },
    { key: 'psicanaliseDinamicaTransferencial', label: 'Dinâmica transferencial / contratransferencial' },
    { key: 'psicanaliseRepeticoes', label: 'Repetições / padrões significantes identificados' },
  ],
  [LinhaTerapeutica.HUMANISTA]: [
    { key: 'humanistaCongruencia', label: 'Congruência autopercebida pelo paciente' },
    { key: 'humanistaAutorrealizacao', label: 'Movimento em direção à autorrealização' },
    { key: 'humanistaAcolhimento', label: 'Registro de acolhimento incondicional / escuta ativa' },
  ],
  [LinhaTerapeutica.GESTALT]: [
    { key: 'gestaltAwareness', label: 'Awareness no aqui-e-agora' },
    { key: 'gestaltFiguraFundo', label: 'Figura-fundo (necessidade emergente)' },
    { key: 'gestaltContatoFronteira', label: 'Fronteira de contato / ajustamento criativo' },
  ],
  [LinhaTerapeutica.JUNGUIANA]: [
    { key: 'junguianaSimbolosArquetipicos', label: 'Símbolos e conteúdos arquetípicos' },
    { key: 'junguianaMaterialOnirico', label: 'Material onírico (sonhos)' },
    { key: 'junguianaProcessoIndividuacao', label: 'Processo de individuação observado' },
  ],
};

/** Sugestões de cuidados por linha terapêutica — usadas na Prescrição de
 * Cuidados (documento clínico) para pré-carregar itens sugeridos. */
export const SUGESTOES_CUIDADOS_POR_LINHA: Record<LinhaTerapeutica, string[]> = {
  [LinhaTerapeutica.TCC]: [
    'Registro de pensamentos disfuncionais (diário)',
    'Exercícios de respiração/relaxamento',
    'Tarefa comportamental combinada em sessão',
  ],
  [LinhaTerapeutica.PSICANALISE]: [
    'Registro livre de sonhos e associações entre sessões',
    'Observação de repetições no cotidiano',
  ],
  [LinhaTerapeutica.HUMANISTA]: [
    'Diário de autopercepção e congruência',
    'Prática de autocuidado e escuta interna',
  ],
  [LinhaTerapeutica.GESTALT]: [
    'Exercícios de atenção plena / awareness no dia a dia',
    'Diário de necessidades emergentes',
  ],
  [LinhaTerapeutica.JUNGUIANA]: [
    'Diário de sonhos',
    'Registro de símbolos recorrentes',
  ],
};
