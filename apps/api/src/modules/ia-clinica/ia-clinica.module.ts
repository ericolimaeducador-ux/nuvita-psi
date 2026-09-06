import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtAuthGuard } from '../auth/presentation/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/presentation/guards/roles.guard';
import { IaClinicaService } from './application/ia-clinica.service';
import { AnthropicClient } from './infrastructure/anthropic.client';
import { DecisaoUsoIaMongoRepository } from './infrastructure/mongo/decisao-uso-ia-mongo.repository';
import { DecisaoUsoIaMongo, DecisaoUsoIaSchema } from './infrastructure/mongo/decisao-uso-ia.schema';
import { RegistroUsoIaMongoRepository } from './infrastructure/mongo/registro-uso-ia-mongo.repository';
import { RegistroUsoIaMongo, RegistroUsoIaSchema } from './infrastructure/mongo/registro-uso-ia.schema';
import { DECISAO_USO_IA_REPOSITORY, REGISTRO_USO_IA_REPOSITORY } from './ia-clinica.constants';
import { IaClinicaController } from './presentation/ia-clinica.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RegistroUsoIaMongo.name, schema: RegistroUsoIaSchema },
      { name: DecisaoUsoIaMongo.name, schema: DecisaoUsoIaSchema },
    ]),
  ],
  controllers: [IaClinicaController],
  providers: [
    IaClinicaService,
    AnthropicClient,
    JwtAuthGuard,
    RolesGuard,
    { provide: REGISTRO_USO_IA_REPOSITORY, useClass: RegistroUsoIaMongoRepository },
    { provide: DECISAO_USO_IA_REPOSITORY, useClass: DecisaoUsoIaMongoRepository },
  ],
})
export class IaClinicaModule {}
