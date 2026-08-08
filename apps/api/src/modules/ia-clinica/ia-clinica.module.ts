import { Module } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/presentation/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/presentation/guards/roles.guard';
import { IaClinicaService } from './application/ia-clinica.service';
import { AnthropicClient } from './infrastructure/anthropic.client';
import { IaClinicaController } from './presentation/ia-clinica.controller';

@Module({
  controllers: [IaClinicaController],
  providers: [IaClinicaService, AnthropicClient, JwtAuthGuard, RolesGuard],
})
export class IaClinicaModule {}
