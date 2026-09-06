import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistroUsoIa } from '../../domain/registro-uso-ia.entity';
import { RegistroUsoIaRepository } from '../../application/ports/registro-uso-ia.repository';
import { RegistroUsoIaDocument, RegistroUsoIaMongo } from './registro-uso-ia.schema';

@Injectable()
export class RegistroUsoIaMongoRepository implements RegistroUsoIaRepository {
  constructor(
    @InjectModel(RegistroUsoIaMongo.name) private readonly model: Model<RegistroUsoIaDocument>,
  ) {}

  async create(data: Omit<RegistroUsoIa, 'id' | 'criadoEm'>): Promise<RegistroUsoIa> {
    const doc = await this.model.create(data);
    return this.toEntity(doc.toObject() as unknown as Record<string, unknown>);
  }

  private toEntity(doc: Record<string, unknown>): RegistroUsoIa {
    const { _id, ...rest } = doc as Record<string, unknown> & { _id: { toString(): string } };
    return { id: _id.toString(), ...rest } as RegistroUsoIa;
  }
}
