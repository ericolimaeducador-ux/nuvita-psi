import { DecisaoUsoIa } from '../../domain/decisao-uso-ia.entity';

export interface DecisaoUsoIaRepository {
  create(data: Omit<DecisaoUsoIa, 'id' | 'decididoEm'>): Promise<DecisaoUsoIa>;
}
