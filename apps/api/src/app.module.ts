import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { SecurityModule } from './common/security/security.module';
import { TenancyModule } from './common/tenancy/tenancy.module';
import { AppConfigService } from './common/security/config.service';
import { AgendamentosModule } from './modules/agendamentos/agendamentos.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health/health.module';
import { ClinicasModule } from './modules/clinicas/clinicas.module';
import { DocumentosModule } from './modules/documentos/documentos.module';
import { FinanceiroModule } from './modules/financeiro/financeiro.module';
import { NotificacoesModule } from './modules/notificacoes/notificacoes.module';
import { PacientesModule } from './modules/pacientes/pacientes.module';
import { ProntuariosModule } from './modules/prontuarios/prontuarios.module';
import { TelemedicinaModule } from './modules/telemedicina/telemedicina.module';
import { SuperAdminModule } from './modules/super-admin/super-admin.module';
import { ObservacoesPacienteModule } from './modules/observacoes-paciente/observacoes-paciente.module';
import { TestesPsicologicosModule } from './modules/testes-psicologicos/testes-psicologicos.module';
import { IaClinicaModule } from './modules/ia-clinica/ia-clinica.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    SecurityModule,
    TenancyModule,
    // Limite padrão para onde o AuthThrottlerGuard for aplicado (hoje, só as
    // rotas de /auth). Rotas específicas apertam com @Throttle().
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 30 }]),
    MongooseModule.forRootAsync({
      imports: [SecurityModule],
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => ({
        uri: config.getConfig().mongodbUri,
      }),
    }),
    AuthModule,
    ClinicasModule,
    PacientesModule,
    ProntuariosModule,
    DocumentosModule,
    NotificacoesModule,
    AgendamentosModule,
    FinanceiroModule,
    TelemedicinaModule,
    AnalyticsModule,
    HealthModule,
    SuperAdminModule,
    ObservacoesPacienteModule,
    TestesPsicologicosModule,
    IaClinicaModule,
  ],
})
export class AppModule {}
