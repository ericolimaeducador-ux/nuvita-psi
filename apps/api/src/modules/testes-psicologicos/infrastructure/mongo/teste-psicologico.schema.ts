import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TestePsicologicoDocument = HydratedDocument<TestePsicologicoMongo>;

// Esqueleto de testes psicológicos aplicados — sem catálogo de testes ainda
// (nomeTeste é texto livre digitado pelo psicólogo). Estrutura pronta para
// receber um catálogo/pontuação padronizados numa fase futura.
@Schema({ collection: 'testes_psicologicos', versionKey: false })
export class TestePsicologicoMongo {
  @Prop({ required: true, index: true })
  clinicaId!: string;

  @Prop({ required: true, index: true })
  pacienteId!: string;

  @Prop({ required: true, trim: true })
  nomeTeste!: string;

  @Prop({ required: true })
  dataAplicacao!: Date;

  @Prop()
  resultado?: string;

  @Prop({ required: true })
  aplicadoPor!: string;

  @Prop({ default: Date.now, immutable: true })
  criadoEm!: Date;
}

export const TestePsicologicoSchema = SchemaFactory.createForClass(TestePsicologicoMongo);
TestePsicologicoSchema.index({ clinicaId: 1, pacienteId: 1, dataAplicacao: -1 });
