import { DecisaoUsoIA } from './registro-uso-ia.enum';

/**
 * Decisão humana (aceitar/descartar) sobre uma sugestão da IA, imutável e
 * ligada a um RegistroUsoIa. `registroUsoIaId` guarda o `_id` (string) do
 * registro de origem. No máximo uma decisão por registro.
 */
export interface DecisaoUsoIa {
  id: string;
  registroUsoIaId: string;
  usuarioId: string;
  decisao: DecisaoUsoIA;
  decididoEm: Date;
}
