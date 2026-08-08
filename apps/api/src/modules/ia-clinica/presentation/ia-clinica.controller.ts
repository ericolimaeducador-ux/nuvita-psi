import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { Papel } from '../../../../../../packages/shared/src/auth';
import { Roles } from '../../auth/presentation/decorators/roles.decorator';
import { JwtAuthGuard } from '../../auth/presentation/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/presentation/guards/roles.guard';
import { TenantRequiredGuard } from '../../../common/tenancy/tenant-required.guard';
import { IaClinicaService } from '../application/ia-clinica.service';
import { SugerirAbordagemDto } from '../application/dto/sugerir-abordagem.dto';
import { GerarPrescricaoDto } from '../application/dto/gerar-prescricao.dto';

// Só o psicólogo aciona a IA — mesmo padrão de acesso dos documentos
// clínicos. Throttle apertado: são chamadas pagas a um provedor externo,
// o limite é uma trava de custo/abuso, não uma questão de segurança.
@Controller('ia-clinica')
@UseGuards(JwtAuthGuard, TenantRequiredGuard, RolesGuard, ThrottlerGuard)
@Roles(Papel.PSICOLOGO)
@Throttle({ default: { ttl: 60_000, limit: 10 } })
export class IaClinicaController {
  constructor(private readonly service: IaClinicaService) {}

  @Post('sugerir-abordagem')
  sugerirAbordagem(@Body() dto: SugerirAbordagemDto) {
    return this.service.sugerirAbordagem(dto);
  }

  @Post('gerar-prescricao')
  gerarPrescricao(@Body() dto: GerarPrescricaoDto) {
    return this.service.gerarPrescricao(dto);
  }
}
