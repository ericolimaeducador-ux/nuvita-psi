import { RegistroUsoIa } from '../../domain/registro-uso-ia.entity';

export interface RegistroUsoIaRepository {
  create(data: Omit<RegistroUsoIa, 'id' | 'criadoEm'>): Promise<RegistroUsoIa>;
}
