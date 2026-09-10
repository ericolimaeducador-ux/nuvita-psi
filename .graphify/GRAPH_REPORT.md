# Graph Report - .  (2026-09-10)

## Corpus Check
- 369 files · ~135.174 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1746 nodes · 2939 edges · 230 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 857 · imports: 719 · method: 517 · imports_from: 447 · calls: 358 · implements: 33 · inherits: 8


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 369 · Candidates: 411
- Excluded: 102 untracked · 58009 ignored · 12 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `0cb2bd9`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `PacienteMongoRepository` - 26 edges
2. `Button` - 23 edges
3. `cn()` - 23 edges
4. `TelemedicinaService` - 20 edges
5. `Toast` - 20 edges
6. `apiErrorMessage()` - 18 edges
7. `ProntuariosService` - 17 edges
8. `Card` - 17 edges
9. `CardContent` - 17 edges
10. `Label` - 17 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 229 - "Community 229"
Cohesion: 1.00
Nodes (1): AppModule

### Community 19 - "Community 19"
Cohesion: 0.13
Nodes (3): BootstrapAdminOptions, BootstrapAdminCommand, CommandRunner

### Community 138 - "Community 138"
Cohesion: 0.67
Nodes (1): BootstrapAdminModule

### Community 92 - "Community 92"
Cohesion: 0.40
Nodes (3): CID10_SCHEMA, Cid10Model, CID10_DATA

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (9): extractClientIp(), extractRequestMeta(), baseUser, CurrentClinicaId, CurrentUser, CreateClinicaUsuarioDto, CreateAdminUserDto, ListUsersQueryDto (+1 more)

### Community 12 - "Community 12"
Cohesion: 0.12
Nodes (13): RequestMeta, resolveTenantClinicaId(), RequestAuditContext, EXTENSAO_POR_MIME, DocumentoRequestContext, RequestAuditContext, LINHA_LABEL, IaClinicaRequestContext (+5 more)

### Community 63 - "Community 63"
Cohesion: 0.33
Nodes (3): RotasDeTeste, get(), statusEmSequencia()

### Community 144 - "Community 144"
Cohesion: 0.67
Nodes (2): GlobalThrottlerGuard, ThrottlerGuard

### Community 118 - "Community 118"
Cohesion: 0.50
Nodes (2): InvalidObjectIdFilter, BaseExceptionFilter

### Community 13 - "Community 13"
Cohesion: 0.12
Nodes (10): PLACEHOLDERS, SEGREDOS_COM_TAMANHO_MINIMO, SEGREDOS_SEM_PLACEHOLDER, ResultadoValidacao, validarForcaDosSegredos(), ConfigSource, resolveConfigSource(), resolveAllowPublicRegistration() (+2 more)

### Community 228 - "Community 228"
Cohesion: 1.00
Nodes (1): SecurityModule

### Community 135 - "Community 135"
Cohesion: 0.50
Nodes (2): TenancyModule, NestModule

### Community 76 - "Community 76"
Cohesion: 0.29
Nodes (1): TenantContextService

### Community 88 - "Community 88"
Cohesion: 0.33
Nodes (2): TenantRequiredGuard, CanActivate

### Community 77 - "Community 77"
Cohesion: 0.38
Nodes (2): TenantMiddleware, NestMiddleware

### Community 78 - "Community 78"
Cohesion: 0.33
Nodes (4): AuthProvider(), Toaster(), queryClient, AppRoutes()

### Community 155 - "Community 155"
Cohesion: 1.00
Nodes (1): AGENDAMENTO_REPOSITORY

### Community 156 - "Community 156"
Cohesion: 1.00
Nodes (1): AgendamentosModule

### Community 22 - "Community 22"
Cohesion: 0.33
Nodes (1): AgendamentosService

### Community 170 - "Community 170"
Cohesion: 1.00
Nodes (1): CancelAgendamentoDto

### Community 176 - "Community 176"
Cohesion: 1.00
Nodes (1): CreateAgendamentoDto

### Community 177 - "Community 177"
Cohesion: 1.00
Nodes (1): CreateBloqueioDto

### Community 190 - "Community 190"
Cohesion: 1.00
Nodes (1): ListAgendamentosQueryDto

### Community 191 - "Community 191"
Cohesion: 1.00
Nodes (1): ListBloqueiosQueryDto

### Community 203 - "Community 203"
Cohesion: 1.00
Nodes (1): UpdateAgendamentoDto

### Community 83 - "Community 83"
Cohesion: 0.33
Nodes (5): CreateAgendamentoInput, UpdateAgendamentoInput, ListAgendamentosInput, CreateBloqueioInput, AgendamentoRepository

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (18): StatusAgendamento, TipoAgendamento, Agendamento, BloqueioAgenda, RequestContext, AuthTokens, AuthResponse, AuthService (+10 more)

### Community 26 - "Community 26"
Cohesion: 0.21
Nodes (2): AgendamentoMongoRepository, AgendamentoRepository

### Community 64 - "Community 64"
Cohesion: 0.29
Nodes (6): AgendamentoDocument, AgendamentoMongo, AgendamentoSchema, BloqueioAgendaDocument, BloqueioAgendaMongo, BloqueioAgendaSchema

### Community 32 - "Community 32"
Cohesion: 0.30
Nodes (1): AgendamentosController

### Community 157 - "Community 157"
Cohesion: 1.00
Nodes (1): AnalyticsModule

### Community 27 - "Community 27"
Cohesion: 0.15
Nodes (1): AnalyticsService

### Community 115 - "Community 115"
Cohesion: 0.50
Nodes (3): AnalyticsQueryDto, RelatorioPsicologiaQueryDto, HorariosVagosQueryDto

### Community 33 - "Community 33"
Cohesion: 0.23
Nodes (1): AnalyticsController

### Community 89 - "Community 89"
Cohesion: 0.40
Nodes (2): TERMOS, context

### Community 197 - "Community 197"
Cohesion: 1.00
Nodes (1): LoginDto

### Community 199 - "Community 199"
Cohesion: 1.00
Nodes (1): RegisterUserDto

### Community 149 - "Community 149"
Cohesion: 0.67
Nodes (2): CreateAuditLogInput, AuditLogRepository

### Community 105 - "Community 105"
Cohesion: 0.40
Nodes (4): CreateUserInput, UpdateUserInput, UserFilters, UserRepository

### Community 113 - "Community 113"
Cohesion: 0.50
Nodes (3): USER_REPOSITORY, AUDIT_LOG_REPOSITORY, REDIS_CLIENT

### Community 91 - "Community 91"
Cohesion: 0.40
Nodes (2): AuthModule, OnApplicationShutdown

### Community 165 - "Community 165"
Cohesion: 1.00
Nodes (1): AuditEvent

### Community 94 - "Community 94"
Cohesion: 0.40
Nodes (3): TermosAceitos, User, PublicUser

### Community 98 - "Community 98"
Cohesion: 0.40
Nodes (2): AuditLogMongoRepository, AuditLogRepository

### Community 145 - "Community 145"
Cohesion: 0.67
Nodes (2): CAMPOS_IMUTAVEIS, OPS_BLOQUEADAS

### Community 99 - "Community 99"
Cohesion: 0.40
Nodes (3): AuditLogDocument, AuditLogMongo, AuditLogSchema

### Community 29 - "Community 29"
Cohesion: 0.24
Nodes (2): UserMongoRepository, UserRepository

### Community 82 - "Community 82"
Cohesion: 0.33
Nodes (5): UserDocument, TermosAceitosMongo, TermosAceitosSchema, UserMongo, UserSchema

### Community 75 - "Community 75"
Cohesion: 0.43
Nodes (1): LoginRateLimiterService

### Community 225 - "Community 225"
Cohesion: 1.00
Nodes (1): redisProvider

### Community 56 - "Community 56"
Cohesion: 0.46
Nodes (1): AuthController

### Community 210 - "Community 210"
Cohesion: 1.00
Nodes (1): JwtAuthGuard

### Community 96 - "Community 96"
Cohesion: 0.40
Nodes (2): RolesGuard, CanActivate

### Community 116 - "Community 116"
Cohesion: 0.50
Nodes (2): SuperAdminGuard, CanActivate

### Community 44 - "Community 44"
Cohesion: 0.33
Nodes (3): OnboardingContext, ClinicAdminContext, ClinicasService

### Community 95 - "Community 95"
Cohesion: 0.40
Nodes (4): EnderecoClinicaDto, ConfiguracoesClinicaDto, PrimeiroAdminDto, CreateClinicaDto

### Community 128 - "Community 128"
Cohesion: 0.50
Nodes (3): CreateClinicaInput, UpdateClinicaInput, ClinicaRepository

### Community 158 - "Community 158"
Cohesion: 1.00
Nodes (1): CLINICA_REPOSITORY

### Community 159 - "Community 159"
Cohesion: 1.00
Nodes (1): ClinicasModule

### Community 60 - "Community 60"
Cohesion: 0.29
Nodes (6): PlanoClinica, EnderecoClinica, ConfiguracoesClinica, Clinica, PlanoLimites, LIMITES_POR_PLANO

### Community 37 - "Community 37"
Cohesion: 0.29
Nodes (2): ClinicaMongoRepository, ClinicaRepository

### Community 120 - "Community 120"
Cohesion: 0.50
Nodes (3): ClinicaDocument, ClinicaMongo, ClinicaSchema

### Community 131 - "Community 131"
Cohesion: 0.67
Nodes (1): ClinicasController

### Community 24 - "Community 24"
Cohesion: 0.31
Nodes (1): DocumentosService

### Community 184 - "Community 184"
Cohesion: 1.00
Nodes (1): CreateUploadUrlDto

### Community 192 - "Community 192"
Cohesion: 1.00
Nodes (1): ListDocumentosQueryDto

### Community 23 - "Community 23"
Cohesion: 0.22
Nodes (5): PresignedUploadInput, PresignedUploadOutput, DocumentStorage, S3DocumentStorageService, DocumentStorage

### Community 129 - "Community 129"
Cohesion: 0.50
Nodes (3): CreateDocumentoInput, ListDocumentoInput, DocumentoRepository

### Community 162 - "Community 162"
Cohesion: 1.00
Nodes (1): DOCUMENTO_REPOSITORY

### Community 163 - "Community 163"
Cohesion: 1.00
Nodes (1): DocumentosModule

### Community 93 - "Community 93"
Cohesion: 0.40
Nodes (4): TipoDocumento, ALLOWED_DOCUMENT_MIME_TYPES, AllowedDocumentMimeType, Documento

### Community 38 - "Community 38"
Cohesion: 0.24
Nodes (2): DocumentoMongoRepository, DocumentoRepository

### Community 122 - "Community 122"
Cohesion: 0.50
Nodes (3): DocumentoDocument, DocumentoMongo, DocumentoSchema

### Community 57 - "Community 57"
Cohesion: 0.43
Nodes (1): DocumentosController

### Community 172 - "Community 172"
Cohesion: 1.00
Nodes (1): CobrarCicloDto

### Community 178 - "Community 178"
Cohesion: 1.00
Nodes (1): CreateLancamentoDto

### Community 188 - "Community 188"
Cohesion: 1.00
Nodes (1): FinancialDashboardQueryDto

### Community 193 - "Community 193"
Cohesion: 1.00
Nodes (1): ListLancamentosQueryDto

### Community 198 - "Community 198"
Cohesion: 1.00
Nodes (1): ReceiveLancamentoDto

### Community 201 - "Community 201"
Cohesion: 1.00
Nodes (1): SalvarConfigPsicologoDto

### Community 45 - "Community 45"
Cohesion: 0.44
Nodes (1): FinanceiroService

### Community 218 - "Community 218"
Cohesion: 1.00
Nodes (1): ConfigPsicologoRepository

### Community 104 - "Community 104"
Cohesion: 0.40
Nodes (4): CreateLancamentoInput, ListLancamentosInput, DashboardInput, LancamentoRepository

### Community 36 - "Community 36"
Cohesion: 0.38
Nodes (1): PsicologiaFinanceiroService

### Community 61 - "Community 61"
Cohesion: 0.29
Nodes (6): StatusLancamento, TipoLancamento, FormaPagamento, OrigemLancamento, Lancamento, DashboardFinanceiro

### Community 62 - "Community 62"
Cohesion: 0.29
Nodes (5): ConfigPsicologo, StatusCiclo, CobrancaCiclo, PacientePsicologia, PainelPsicologia

### Community 143 - "Community 143"
Cohesion: 0.67
Nodes (2): LANCAMENTO_REPOSITORY, CONFIG_PSICOLOGO_REPOSITORY

### Community 209 - "Community 209"
Cohesion: 1.00
Nodes (1): FinanceiroModule

### Community 65 - "Community 65"
Cohesion: 0.38
Nodes (2): ConfigPsicologoMongoRepository, ConfigPsicologoRepository

### Community 121 - "Community 121"
Cohesion: 0.50
Nodes (3): ConfigPsicologoDocument, ConfigPsicologoMongo, ConfigPsicologoSchema

### Community 47 - "Community 47"
Cohesion: 0.27
Nodes (2): LancamentoMongoRepository, LancamentoRepository

### Community 123 - "Community 123"
Cohesion: 0.50
Nodes (3): LancamentoDocument, LancamentoMongo, LancamentoSchema

### Community 50 - "Community 50"
Cohesion: 0.39
Nodes (1): FinanceiroController

### Community 58 - "Community 58"
Cohesion: 0.43
Nodes (1): PsicologiaFinanceiroController

### Community 117 - "Community 117"
Cohesion: 0.50
Nodes (1): HealthController

### Community 211 - "Community 211"
Cohesion: 1.00
Nodes (1): HealthModule

### Community 97 - "Community 97"
Cohesion: 0.40
Nodes (2): RedisHealthIndicator, HealthIndicator

### Community 189 - "Community 189"
Cohesion: 1.00
Nodes (1): GerarPrescricaoDto

### Community 200 - "Community 200"
Cohesion: 1.00
Nodes (1): RegistrarDecisaoDto

### Community 202 - "Community 202"
Cohesion: 1.00
Nodes (1): SugerirAbordagemDto

### Community 136 - "Community 136"
Cohesion: 0.67
Nodes (1): context

### Community 30 - "Community 30"
Cohesion: 0.30
Nodes (1): IaClinicaService

### Community 219 - "Community 219"
Cohesion: 1.00
Nodes (1): DecisaoUsoIaRepository

### Community 221 - "Community 221"
Cohesion: 1.00
Nodes (1): RegistroUsoIaRepository

### Community 166 - "Community 166"
Cohesion: 1.00
Nodes (1): DecisaoUsoIa

### Community 168 - "Community 168"
Cohesion: 1.00
Nodes (1): RegistroUsoIa

### Community 139 - "Community 139"
Cohesion: 0.67
Nodes (2): TipoUsoIA, DecisaoUsoIA

### Community 213 - "Community 213"
Cohesion: 1.00
Nodes (1): IaClinicaModule

### Community 119 - "Community 119"
Cohesion: 0.50
Nodes (1): AnthropicClient

### Community 80 - "Community 80"
Cohesion: 0.40
Nodes (1): IaUsoCryptoService

### Community 66 - "Community 66"
Cohesion: 0.33
Nodes (2): DecisaoUsoIaMongoRepository, DecisaoUsoIaRepository

### Community 146 - "Community 146"
Cohesion: 0.67
Nodes (2): CAMPOS_IMUTAVEIS, OPS_BLOQUEADAS

### Community 100 - "Community 100"
Cohesion: 0.40
Nodes (3): DecisaoUsoIaDocument, DecisaoUsoIaMongo, DecisaoUsoIaSchema

### Community 69 - "Community 69"
Cohesion: 0.38
Nodes (2): RegistroUsoIaMongoRepository, RegistroUsoIaRepository

### Community 147 - "Community 147"
Cohesion: 0.67
Nodes (2): CAMPOS_IMUTAVEIS, OPS_BLOQUEADAS

### Community 102 - "Community 102"
Cohesion: 0.40
Nodes (3): RegistroUsoIaDocument, RegistroUsoIaMongo, RegistroUsoIaSchema

### Community 85 - "Community 85"
Cohesion: 0.53
Nodes (1): IaClinicaController

### Community 179 - "Community 179"
Cohesion: 1.00
Nodes (1): CreateNotificacaoDto

### Community 185 - "Community 185"
Cohesion: 1.00
Nodes (1): DashboardNotificacoesQueryDto

### Community 206 - "Community 206"
Cohesion: 1.00
Nodes (1): UpdateOptOutDto

### Community 7 - "Community 7"
Cohesion: 0.09
Nodes (9): NotificacaoDispatcherService, SendNotificacaoInput, NotificacaoSender, EmailSender, NotificacaoSender, SmsSender, NotificacaoSender, WhatsAppSender (+1 more)

### Community 90 - "Community 90"
Cohesion: 0.60
Nodes (1): NotificacaoWindowService

### Community 49 - "Community 49"
Cohesion: 0.44
Nodes (1): NotificacoesService

### Community 55 - "Community 55"
Cohesion: 0.32
Nodes (4): EnqueueNotificacaoInput, NotificacaoQueue, BullMqNotificacaoQueueService, NotificacaoQueue

### Community 84 - "Community 84"
Cohesion: 0.33
Nodes (5): CreateNotificacaoInput, NotificacaoDashboardFilter, NotificacaoDashboardResult, NotificacaoRepository, NotificacaoPreferenciaRepository

### Community 108 - "Community 108"
Cohesion: 0.50
Nodes (2): TEMPLATES, NotificacaoTemplateService

### Community 53 - "Community 53"
Cohesion: 0.25
Nodes (7): CanalNotificacao, StatusNotificacao, TipoNotificacao, ConteudoNotificacao, ErroNotificacao, Notificacao, PreferenciaNotificacao

### Community 17 - "Community 17"
Cohesion: 0.11
Nodes (4): NotificacaoMongoRepository, NotificacaoRepository, NotificacaoPreferenciaMongoRepository, NotificacaoPreferenciaRepository

### Community 67 - "Community 67"
Cohesion: 0.29
Nodes (6): NotificacaoDocument, NotificacaoPreferenciaDocument, NotificacaoMongo, NotificacaoSchema, NotificacaoPreferenciaMongo, NotificacaoPreferenciaSchema

### Community 224 - "Community 224"
Cohesion: 1.00
Nodes (1): notificacaoQueueProvider

### Community 51 - "Community 51"
Cohesion: 0.22
Nodes (4): SendJobData, NotificacaoWorker, OnModuleInit, OnModuleDestroy

### Community 127 - "Community 127"
Cohesion: 0.50
Nodes (3): NOTIFICACAO_REPOSITORY, NOTIFICACAO_PREFERENCIA_REPOSITORY, NOTIFICACAO_QUEUE

### Community 214 - "Community 214"
Cohesion: 1.00
Nodes (1): NotificacoesModule

### Community 86 - "Community 86"
Cohesion: 0.53
Nodes (1): NotificacoesController

### Community 180 - "Community 180"
Cohesion: 1.00
Nodes (1): CreateObservacaoPacienteDto

### Community 109 - "Community 109"
Cohesion: 0.50
Nodes (1): ObservacoesPacienteService

### Community 220 - "Community 220"
Cohesion: 1.00
Nodes (1): ObservacaoPacienteRepository

### Community 167 - "Community 167"
Cohesion: 1.00
Nodes (1): ObservacaoPaciente

### Community 68 - "Community 68"
Cohesion: 0.33
Nodes (2): ObservacaoPacienteMongoRepository, ObservacaoPacienteRepository

### Community 101 - "Community 101"
Cohesion: 0.40
Nodes (3): ObservacaoPacienteDocument, ObservacaoPacienteMongo, ObservacaoPacienteSchema

### Community 215 - "Community 215"
Cohesion: 1.00
Nodes (1): ObservacoesPacienteModule

### Community 106 - "Community 106"
Cohesion: 0.40
Nodes (1): ObservacoesPacienteController

### Community 173 - "Community 173"
Cohesion: 1.00
Nodes (1): ConsentimentoLGpdDto

### Community 174 - "Community 174"
Cohesion: 1.00
Nodes (1): ConvenioDto

### Community 181 - "Community 181"
Cohesion: 1.00
Nodes (1): CreatePacienteDto

### Community 186 - "Community 186"
Cohesion: 1.00
Nodes (1): EnderecoDto

### Community 194 - "Community 194"
Cohesion: 1.00
Nodes (1): ListPacientesQueryDto

### Community 205 - "Community 205"
Cohesion: 1.00
Nodes (1): UpdateObservacoesPacienteDto

### Community 207 - "Community 207"
Cohesion: 1.00
Nodes (1): UpdatePacienteDto

### Community 110 - "Community 110"
Cohesion: 0.50
Nodes (2): context, basePaciente

### Community 21 - "Community 21"
Cohesion: 0.32
Nodes (1): PacientesService

### Community 5 - "Community 5"
Cohesion: 0.09
Nodes (14): CreatePacienteInput, UpdatePacienteInput, PACIENTE_SORTS, PacienteSort, ListPacientesInput, CursorPaginationInput, SearchPacientesByNameInput, PacienteRepository (+6 more)

### Community 54 - "Community 54"
Cohesion: 0.25
Nodes (7): Sexo, ProjetoPaciente, LinhaTerapeutica, Endereco, Convenio, ConsentimentoLGPD, Paciente

### Community 31 - "Community 31"
Cohesion: 0.26
Nodes (1): PacienteCryptoService

### Community 81 - "Community 81"
Cohesion: 0.33
Nodes (5): PacienteDocument, ConsentimentoLGPDMongo, ConsentimentoLGPDSchema, PacienteMongo, PacienteSchema

### Community 216 - "Community 216"
Cohesion: 1.00
Nodes (1): PACIENTE_REPOSITORY

### Community 217 - "Community 217"
Cohesion: 1.00
Nodes (1): PacientesModule

### Community 40 - "Community 40"
Cohesion: 0.31
Nodes (1): PacientesController

### Community 171 - "Community 171"
Cohesion: 1.00
Nodes (1): Cid10QueryDto

### Community 175 - "Community 175"
Cohesion: 1.00
Nodes (1): CreateAddendumDto

### Community 141 - "Community 141"
Cohesion: 0.67
Nodes (1): CreateProntuarioDto

### Community 195 - "Community 195"
Cohesion: 1.00
Nodes (1): ListProntuariosQueryDto

### Community 46 - "Community 46"
Cohesion: 0.20
Nodes (9): SubjetivoDto, SinaisVitaisDto, ExameSegmentarDto, ObjetivoDto, AvaliacaoDto, PlanoDto, ArquivoProntuarioDto, ArquivosProntuarioDto (+1 more)

### Community 208 - "Community 208"
Cohesion: 1.00
Nodes (1): UpdateProntuarioDto

### Community 73 - "Community 73"
Cohesion: 0.29
Nodes (6): CreateProntuarioInput, UpdateProntuarioInput, SignProntuarioInput, ResumoSessoesPaciente, ProntuarioRepository, Cid10Repository

### Community 137 - "Community 137"
Cohesion: 0.67
Nodes (1): agendamentosServiceStub

### Community 16 - "Community 16"
Cohesion: 0.25
Nodes (2): ProntuarioRequestContext, ProntuariosService

### Community 25 - "Community 25"
Cohesion: 0.14
Nodes (13): TipoAtendimento, Subjetivo, SinaisVitais, ExameSegmentar, Objetivo, Avaliacao, Plano, RegistroPsicologico (+5 more)

### Community 18 - "Community 18"
Cohesion: 0.15
Nodes (4): ProntuarioMongoRepository, ProntuarioRepository, Cid10MongoRepository, Cid10Repository

### Community 28 - "Community 28"
Cohesion: 0.15
Nodes (10): ProntuarioDocument, ProntuarioAddendumDocument, Cid10Document, AssinaturaMongo, ProntuarioMongo, ProntuarioSchema, ProntuarioAddendumMongo, ProntuarioAddendumSchema (+2 more)

### Community 41 - "Community 41"
Cohesion: 0.33
Nodes (1): ProntuariosController

### Community 152 - "Community 152"
Cohesion: 0.67
Nodes (2): PRONTUARIO_REPOSITORY, CID10_REPOSITORY

### Community 223 - "Community 223"
Cohesion: 1.00
Nodes (1): ProntuariosModule

### Community 204 - "Community 204"
Cohesion: 1.00
Nodes (1): UpdateClinicaDto

### Community 43 - "Community 43"
Cohesion: 0.18
Nodes (1): SuperAdminController

### Community 230 - "Community 230"
Cohesion: 1.00
Nodes (1): SuperAdminModule

### Community 34 - "Community 34"
Cohesion: 0.21
Nodes (1): SuperAdminService

### Community 182 - "Community 182"
Cohesion: 1.00
Nodes (1): CreateSalaDto

### Community 187 - "Community 187"
Cohesion: 1.00
Nodes (1): EnviarSinalDto

### Community 196 - "Community 196"
Cohesion: 1.00
Nodes (1): ListSalasQueryDto

### Community 142 - "Community 142"
Cohesion: 0.67
Nodes (2): EVENTOS_REPORTAVEIS, RegistrarEventoDto

### Community 150 - "Community 150"
Cohesion: 0.67
Nodes (2): CreateSalaEventoInput, SalaEventoRepository

### Community 130 - "Community 130"
Cohesion: 0.50
Nodes (3): CreateSalaInput, FindAllSalasFiltro, SalaTelemedicinaRepository

### Community 151 - "Community 151"
Cohesion: 0.67
Nodes (2): CreateSinalInput, SinalSalaRepository

### Community 15 - "Community 15"
Cohesion: 0.19
Nodes (1): TelemedicinaService

### Community 114 - "Community 114"
Cohesion: 0.50
Nodes (3): PapelSala, TipoEventoSala, SalaEvento

### Community 140 - "Community 140"
Cohesion: 0.67
Nodes (2): TipoSinal, SinalSala

### Community 70 - "Community 70"
Cohesion: 0.33
Nodes (2): SalaEventoMongoRepository, SalaEventoRepository

### Community 124 - "Community 124"
Cohesion: 0.50
Nodes (3): SalaEventoDocument, SalaEventoMongo, SalaEventoSchema

### Community 39 - "Community 39"
Cohesion: 0.27
Nodes (2): SalaTelemedicinaMongoRepository, SalaTelemedicinaRepository

### Community 125 - "Community 125"
Cohesion: 0.50
Nodes (3): SalaTelemedicinaDocument, SalaTelemedicinaMongo, SalaTelemedicinaSchema

### Community 71 - "Community 71"
Cohesion: 0.33
Nodes (2): SinalSalaMongoRepository, SinalSalaRepository

### Community 126 - "Community 126"
Cohesion: 0.50
Nodes (3): SinalSalaDocument, SinalSalaMongo, SinalSalaSchema

### Community 74 - "Community 74"
Cohesion: 0.29
Nodes (1): TelemedicinaAcessoController

### Community 48 - "Community 48"
Cohesion: 0.36
Nodes (1): TelemedicinaController

### Community 134 - "Community 134"
Cohesion: 0.50
Nodes (3): SALA_TELEMEDICINA_REPOSITORY, SALA_EVENTO_REPOSITORY, SINAL_SALA_REPOSITORY

### Community 231 - "Community 231"
Cohesion: 1.00
Nodes (1): TelemedicinaModule

### Community 183 - "Community 183"
Cohesion: 1.00
Nodes (1): CreateTestePsicologicoDto

### Community 222 - "Community 222"
Cohesion: 1.00
Nodes (1): TestePsicologicoRepository

### Community 111 - "Community 111"
Cohesion: 0.50
Nodes (1): TestesPsicologicosService

### Community 169 - "Community 169"
Cohesion: 1.00
Nodes (1): TestePsicologico

### Community 72 - "Community 72"
Cohesion: 0.33
Nodes (2): TestePsicologicoMongoRepository, TestePsicologicoRepository

### Community 103 - "Community 103"
Cohesion: 0.40
Nodes (3): TestePsicologicoDocument, TestePsicologicoMongo, TestePsicologicoSchema

### Community 107 - "Community 107"
Cohesion: 0.40
Nodes (1): TestesPsicologicosController

### Community 232 - "Community 232"
Cohesion: 1.00
Nodes (1): TestesPsicologicosModule

### Community 20 - "Community 20"
Cohesion: 0.17
Nodes (13): getToken(), setToken(), getClinicaAtiva(), setClinicaAtiva(), api, avisar403(), doRefresh(), apiErrorMessage() (+5 more)

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (75): CriarUsuarioPayload, ListPacientesParams, ListAgendamentosParams, CreateAgendamentoPayload, agendaApi, notificacoesApi, CobrarCicloPayload, CreateSalaPayload (+67 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (37): clinicasApi, LogoProps, Logo(), LogoIconProps, LogoIcon(), Fase, EstadoConexao, ESTADO_CONEXAO_LABEL (+29 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (33): PacienteSort, documentosApi, observacoesPacienteApi, TestePsicologico, testesPsicologicosApi, NovoDocumentoDialog(), CAMPOS_LINHA_TODAS, EXAME_SEGMENTAR_CAMPOS (+25 more)

### Community 9 - "Community 9"
Cohesion: 0.17
Nodes (19): pacientesApi, prontuariosApi, useAuth(), DocumentoClinicoLayout(), DocumentoTimbre(), DocumentoRodape(), Button, Label (+11 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (20): psicoFinanceiroApi, Separator, ToastVariant, Toast, ToastState, listeners, memoryState, dispatch() (+12 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (15): iaClinicaApi, Checkbox, CAMPOS_POR_LINHA, SUGESTOES_CUIDADOS_POR_LINHA, ultimoValor(), RegistroSessao(), STATUS_BADGE, CHECKLIST_FIXO (+7 more)

### Community 10 - "Community 10"
Cohesion: 0.08
Nodes (26): UpdateUsuarioPayload, CreateAdminUserPayload, TwoFactorSetup, ClinicaAdmin, superAdminApi, TabsList, TabsTrigger, TabsContent (+18 more)

### Community 14 - "Community 14"
Cohesion: 0.10
Nodes (20): ProtectedRoute(), SalaVideo(), AppLayout(), AgendaPage(), AtendimentoPsicologicoPage(), AtendimentoTelemedicinaPage(), AtestadoComparecimentoPage(), DashboardPage() (+12 more)

### Community 4 - "Community 4"
Cohesion: 0.14
Nodes (30): PageHeaderProps, PageHeader(), badgeVariants, BadgeProps, Badge(), Card, CardHeader, CardTitle (+22 more)

### Community 35 - "Community 35"
Cohesion: 0.17
Nodes (9): FormFieldContextValue, FormFieldContext, FormItemContextValue, FormItemContext, FormItem, FormLabel, FormControl, FormDescription (+1 more)

### Community 148 - "Community 148"
Cohesion: 0.67
Nodes (3): salaVariant(), duracaoAtendimento(), SalaCard()

### Community 233 - "Community 233"
Cohesion: 1.00
Nodes (1): apiProxy

### Community 112 - "Community 112"
Cohesion: 0.50
Nodes (3): ModalidadeAtendimento, MODALIDADES_ATENDIMENTO, ROTULO_MODALIDADE

### Community 79 - "Community 79"
Cohesion: 0.33
Nodes (3): Papel, PAPEIS_PROFISSIONAIS, PAPEIS_COM_2FA_OBRIGATORIO

### Community 59 - "Community 59"
Cohesion: 0.29
Nodes (4): Modulo, TODOS_MODULOS, MODULO_LABEL, PERMISSOES_PADRAO_POR_PAPEL

### Community 132 - "Community 132"
Cohesion: 0.50
Nodes (2): require, bcrypt

### Community 42 - "Community 42"
Cohesion: 0.18
Nodes (8): require, raiz, arquivo, distConfig, { vars, linhasInvalidas }, { Logger }, { AppConfigService }, googleSecretsStub

### Community 52 - "Community 52"
Cohesion: 0.28
Nodes (8): require, bcrypt, speakeasy, EMAIL, ROUNDS, fail(), hostDaUri(), main()

### Community 153 - "Community 153"
Cohesion: 0.67
Nodes (1): dryRun

### Community 87 - "Community 87"
Cohesion: 0.60
Nodes (5): req(), gerarCpf(), iso(), maisMin(), main()

### Community 133 - "Community 133"
Cohesion: 0.83
Nodes (3): req(), pickItems(), main()

### Community 154 - "Community 154"
Cohesion: 0.67
Nodes (1): totpCode

### Community 227 - "Community 227"
Cohesion: 1.00
Nodes (1): code

### Community 242 - "Community 242"
Cohesion: 1.00
Nodes (1): ThrottlerGuard

## Knowledge Gaps
- **474 isolated node(s):** `AppModule`, `BootstrapAdminOptions`, `BootstrapAdminModule`, `CID10_SCHEMA`, `Cid10Model` (+469 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 229`** (1 nodes): `AppModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 138`** (1 nodes): `BootstrapAdminModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 144`** (2 nodes): `GlobalThrottlerGuard`, `ThrottlerGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 118`** (2 nodes): `InvalidObjectIdFilter`, `BaseExceptionFilter`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 228`** (1 nodes): `SecurityModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 135`** (2 nodes): `TenancyModule`, `NestModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `TenantContextService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 88`** (2 nodes): `TenantRequiredGuard`, `CanActivate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (2 nodes): `TenantMiddleware`, `NestMiddleware`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 155`** (1 nodes): `AGENDAMENTO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 156`** (1 nodes): `AgendamentosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `AgendamentosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 170`** (1 nodes): `CancelAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 176`** (1 nodes): `CreateAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 177`** (1 nodes): `CreateBloqueioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 190`** (1 nodes): `ListAgendamentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 191`** (1 nodes): `ListBloqueiosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 203`** (1 nodes): `UpdateAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (2 nodes): `AgendamentoMongoRepository`, `AgendamentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (1 nodes): `AgendamentosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 157`** (1 nodes): `AnalyticsModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (1 nodes): `AnalyticsService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (1 nodes): `AnalyticsController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 89`** (2 nodes): `TERMOS`, `context`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 197`** (1 nodes): `LoginDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 199`** (1 nodes): `RegisterUserDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 149`** (2 nodes): `CreateAuditLogInput`, `AuditLogRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 91`** (2 nodes): `AuthModule`, `OnApplicationShutdown`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 165`** (1 nodes): `AuditEvent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 98`** (2 nodes): `AuditLogMongoRepository`, `AuditLogRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 145`** (2 nodes): `CAMPOS_IMUTAVEIS`, `OPS_BLOQUEADAS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (2 nodes): `UserMongoRepository`, `UserRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `LoginRateLimiterService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 225`** (1 nodes): `redisProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `AuthController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 210`** (1 nodes): `JwtAuthGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 96`** (2 nodes): `RolesGuard`, `CanActivate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (2 nodes): `SuperAdminGuard`, `CanActivate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 158`** (1 nodes): `CLINICA_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 159`** (1 nodes): `ClinicasModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (2 nodes): `ClinicaMongoRepository`, `ClinicaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 131`** (1 nodes): `ClinicasController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `DocumentosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 184`** (1 nodes): `CreateUploadUrlDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 192`** (1 nodes): `ListDocumentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 162`** (1 nodes): `DOCUMENTO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 163`** (1 nodes): `DocumentosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (2 nodes): `DocumentoMongoRepository`, `DocumentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `DocumentosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 172`** (1 nodes): `CobrarCicloDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 178`** (1 nodes): `CreateLancamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 188`** (1 nodes): `FinancialDashboardQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 193`** (1 nodes): `ListLancamentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 198`** (1 nodes): `ReceiveLancamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 201`** (1 nodes): `SalvarConfigPsicologoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `FinanceiroService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 218`** (1 nodes): `ConfigPsicologoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `PsicologiaFinanceiroService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 143`** (2 nodes): `LANCAMENTO_REPOSITORY`, `CONFIG_PSICOLOGO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 209`** (1 nodes): `FinanceiroModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (2 nodes): `ConfigPsicologoMongoRepository`, `ConfigPsicologoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (2 nodes): `LancamentoMongoRepository`, `LancamentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `FinanceiroController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `PsicologiaFinanceiroController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 117`** (1 nodes): `HealthController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 211`** (1 nodes): `HealthModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (2 nodes): `RedisHealthIndicator`, `HealthIndicator`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 189`** (1 nodes): `GerarPrescricaoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 200`** (1 nodes): `RegistrarDecisaoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 202`** (1 nodes): `SugerirAbordagemDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 136`** (1 nodes): `context`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (1 nodes): `IaClinicaService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 219`** (1 nodes): `DecisaoUsoIaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 221`** (1 nodes): `RegistroUsoIaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 166`** (1 nodes): `DecisaoUsoIa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 168`** (1 nodes): `RegistroUsoIa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 139`** (2 nodes): `TipoUsoIA`, `DecisaoUsoIA`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 213`** (1 nodes): `IaClinicaModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 119`** (1 nodes): `AnthropicClient`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `IaUsoCryptoService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (2 nodes): `DecisaoUsoIaMongoRepository`, `DecisaoUsoIaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 146`** (2 nodes): `CAMPOS_IMUTAVEIS`, `OPS_BLOQUEADAS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (2 nodes): `RegistroUsoIaMongoRepository`, `RegistroUsoIaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 147`** (2 nodes): `CAMPOS_IMUTAVEIS`, `OPS_BLOQUEADAS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 85`** (1 nodes): `IaClinicaController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 179`** (1 nodes): `CreateNotificacaoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 185`** (1 nodes): `DashboardNotificacoesQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 206`** (1 nodes): `UpdateOptOutDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 90`** (1 nodes): `NotificacaoWindowService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `NotificacoesService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (2 nodes): `TEMPLATES`, `NotificacaoTemplateService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 224`** (1 nodes): `notificacaoQueueProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 214`** (1 nodes): `NotificacoesModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 86`** (1 nodes): `NotificacoesController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 180`** (1 nodes): `CreateObservacaoPacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 109`** (1 nodes): `ObservacoesPacienteService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 220`** (1 nodes): `ObservacaoPacienteRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 167`** (1 nodes): `ObservacaoPaciente`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (2 nodes): `ObservacaoPacienteMongoRepository`, `ObservacaoPacienteRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 215`** (1 nodes): `ObservacoesPacienteModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (1 nodes): `ObservacoesPacienteController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 173`** (1 nodes): `ConsentimentoLGpdDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 174`** (1 nodes): `ConvenioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 181`** (1 nodes): `CreatePacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 186`** (1 nodes): `EnderecoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 194`** (1 nodes): `ListPacientesQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 205`** (1 nodes): `UpdateObservacoesPacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 207`** (1 nodes): `UpdatePacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 110`** (2 nodes): `context`, `basePaciente`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `PacientesService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (1 nodes): `PacienteCryptoService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 216`** (1 nodes): `PACIENTE_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 217`** (1 nodes): `PacientesModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `PacientesController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 171`** (1 nodes): `Cid10QueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 175`** (1 nodes): `CreateAddendumDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 141`** (1 nodes): `CreateProntuarioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 195`** (1 nodes): `ListProntuariosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 208`** (1 nodes): `UpdateProntuarioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 137`** (1 nodes): `agendamentosServiceStub`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `ProntuarioRequestContext`, `ProntuariosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `ProntuariosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 152`** (2 nodes): `PRONTUARIO_REPOSITORY`, `CID10_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 223`** (1 nodes): `ProntuariosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 204`** (1 nodes): `UpdateClinicaDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `SuperAdminController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 230`** (1 nodes): `SuperAdminModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (1 nodes): `SuperAdminService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 182`** (1 nodes): `CreateSalaDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 187`** (1 nodes): `EnviarSinalDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 196`** (1 nodes): `ListSalasQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 142`** (2 nodes): `EVENTOS_REPORTAVEIS`, `RegistrarEventoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 150`** (2 nodes): `CreateSalaEventoInput`, `SalaEventoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 151`** (2 nodes): `CreateSinalInput`, `SinalSalaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (1 nodes): `TelemedicinaService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 140`** (2 nodes): `TipoSinal`, `SinalSala`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (2 nodes): `SalaEventoMongoRepository`, `SalaEventoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (2 nodes): `SalaTelemedicinaMongoRepository`, `SalaTelemedicinaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (2 nodes): `SinalSalaMongoRepository`, `SinalSalaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `TelemedicinaAcessoController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `TelemedicinaController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 231`** (1 nodes): `TelemedicinaModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 183`** (1 nodes): `CreateTestePsicologicoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 222`** (1 nodes): `TestePsicologicoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 111`** (1 nodes): `TestesPsicologicosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 169`** (1 nodes): `TestePsicologico`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (2 nodes): `TestePsicologicoMongoRepository`, `TestePsicologicoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (1 nodes): `TestesPsicologicosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 232`** (1 nodes): `TestesPsicologicosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 233`** (1 nodes): `apiProxy`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 132`** (2 nodes): `require`, `bcrypt`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 153`** (1 nodes): `dryRun`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 154`** (1 nodes): `totpCode`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 227`** (1 nodes): `code`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 242`** (1 nodes): `ThrottlerGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `TelemedicinaService` connect `Community 15` to `Community 12`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `PacientesService` connect `Community 21` to `Community 12`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `AppModule`, `BootstrapAdminOptions`, `BootstrapAdminModule` to the rest of the system?**
  _474 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 19` be split into smaller, more focused modules?**
  _Cohesion score 0.1323529411764706 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.09747899159663866 - nodes in this community are weakly interconnected._
- **Should `Community 12` be split into smaller, more focused modules?**
  _Cohesion score 0.11666666666666667 - nodes in this community are weakly interconnected._
- **Should `Community 13` be split into smaller, more focused modules?**
  _Cohesion score 0.12318840579710146 - nodes in this community are weakly interconnected._