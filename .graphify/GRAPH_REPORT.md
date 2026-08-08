# Graph Report - .  (2026-08-08)

## Corpus Check
- 322 files · ~89.877 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1599 nodes · 2769 edges · 210 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 784 · imports: 702 · method: 485 · imports_from: 424 · calls: 338 · implements: 29 · inherits: 7


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 322 · Candidates: 361
- Excluded: 0 untracked · 57660 ignored · 10 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `532d4fe`
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

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (76): analyticsApi, AnalyticsPeriodParams, CobrancaResumo, CobrancasPsicologia, CobrarCicloPayload, CreateAgendamentoPayload, CreateSalaPayload, CriarUsuarioPayload (+68 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (32): iaClinicaApi, pacientesApi, prontuariosApi, useAuth(), DocumentoClinicoLayout(), DocumentoRodape(), DocumentoTimbre(), brand (+24 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (36): clinicasApi, Logo(), LogoIcon(), LogoIconProps, LogoProps, ESTADO_CONEXAO_LABEL, EstadoConexao, Fase (+28 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (35): documentosApi, observacoesPacienteApi, PacienteSort, TestePsicologico, testesPsicologicosApi, NovoDocumentoDialog(), CAMPOS_LINHA_TODAS, EXAME_SEGMENTAR_CAMPOS (+27 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (35): agendaApi, psicoFinanceiroApi, PageHeader(), PageHeaderProps, DashboardPage(), DashboardData, RelatoriosGerenciaisPage(), TICK_STYLE (+27 more)

### Community 5 - "Community 5"
Cohesion: 0.09
Nodes (14): CursorPaginationInput, CursorPaginationResult, COLLATION_PT, DecodedCursor, PacienteMongoRepository, PacienteRepository, CreatePacienteInput, CursorPaginationInput (+6 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (9): NotificacaoDispatcherService, NotificacaoSender, SendNotificacaoInput, EmailSender, NotificacaoSender, NotificacaoSender, SmsSender, NotificacaoSender (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (8): CurrentClinicaId, CurrentUser, CreateAdminUserDto, CreateClinicaUsuarioDto, ListUsersQueryDto, UpdateUserDto, extractClientIp(), extractRequestMeta()

### Community 8 - "Community 8"
Cohesion: 0.08
Nodes (26): ClinicaAdmin, CreateAdminUserPayload, superAdminApi, TwoFactorSetup, UpdateUsuarioPayload, ClinicaForm, clinicaSchema, CreateForm (+18 more)

### Community 9 - "Community 9"
Cohesion: 0.10
Nodes (20): ProtectedRoute(), SalaVideo(), AppLayout(), AgendaPage(), AtendimentoPsicologicoPage(), AtendimentoTelemedicinaPage(), AtestadoComparecimentoPage(), DocumentosPage() (+12 more)

### Community 10 - "Community 10"
Cohesion: 0.10
Nodes (16): CICLO_BADGE, FORMA_PAGAMENTO_LABEL, FormaPagamento, PacientePsicologia, PainelPsicologia, StatusLancamento, formatBRL(), Separator (+8 more)

### Community 11 - "Community 11"
Cohesion: 0.13
Nodes (9): RequestAuditContext, RequestAuditContext, NotificacaoRequestContext, ObservacoesPacienteService, RequestAuditContext, RequestAuditContext, SalaAcessoView, RequestMeta (+1 more)

### Community 12 - "Community 12"
Cohesion: 0.19
Nodes (1): TelemedicinaService

### Community 13 - "Community 13"
Cohesion: 0.25
Nodes (2): ProntuarioRequestContext, ProntuariosService

### Community 14 - "Community 14"
Cohesion: 0.11
Nodes (4): NotificacaoMongoRepository, NotificacaoPreferenciaMongoRepository, NotificacaoPreferenciaRepository, NotificacaoRepository

### Community 15 - "Community 15"
Cohesion: 0.15
Nodes (4): Cid10MongoRepository, Cid10Repository, ProntuarioMongoRepository, ProntuarioRepository

### Community 16 - "Community 16"
Cohesion: 0.13
Nodes (3): BootstrapAdminCommand, BootstrapAdminOptions, CommandRunner

### Community 17 - "Community 17"
Cohesion: 0.17
Nodes (13): api, apiErrorMessage(), avisar403(), doRefresh(), getClinicaAtiva(), getToken(), setClinicaAtiva(), setToken() (+5 more)

### Community 18 - "Community 18"
Cohesion: 0.32
Nodes (1): PacientesService

### Community 19 - "Community 19"
Cohesion: 0.33
Nodes (1): AgendamentosService

### Community 20 - "Community 20"
Cohesion: 0.20
Nodes (4): AuthResponse, AuthService, AuthTokens, RequestContext

### Community 21 - "Community 21"
Cohesion: 0.31
Nodes (1): DocumentosService

### Community 22 - "Community 22"
Cohesion: 0.14
Nodes (13): ArquivoProntuario, AssinaturaProntuario, Avaliacao, Cid10, ExameSegmentar, Objetivo, Plano, Prontuario (+5 more)

### Community 23 - "Community 23"
Cohesion: 0.21
Nodes (2): AgendamentoMongoRepository, AgendamentoRepository

### Community 24 - "Community 24"
Cohesion: 0.15
Nodes (1): AnalyticsService

### Community 25 - "Community 25"
Cohesion: 0.15
Nodes (10): AssinaturaMongo, Cid10Document, Cid10Mongo, Cid10Schema, ProntuarioAddendumDocument, ProntuarioAddendumMongo, ProntuarioAddendumSchema, ProntuarioDocument (+2 more)

### Community 26 - "Community 26"
Cohesion: 0.24
Nodes (2): UserMongoRepository, UserRepository

### Community 27 - "Community 27"
Cohesion: 0.24
Nodes (5): AppConfig, AppConfigService, ConfigSource, resolveAllowPublicRegistration(), resolveConfigSource()

### Community 28 - "Community 28"
Cohesion: 0.26
Nodes (1): PacienteCryptoService

### Community 29 - "Community 29"
Cohesion: 0.30
Nodes (1): AgendamentosController

### Community 30 - "Community 30"
Cohesion: 0.23
Nodes (1): AnalyticsController

### Community 31 - "Community 31"
Cohesion: 0.21
Nodes (1): SuperAdminService

### Community 32 - "Community 32"
Cohesion: 0.17
Nodes (9): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+1 more)

### Community 33 - "Community 33"
Cohesion: 0.38
Nodes (1): PsicologiaFinanceiroService

### Community 34 - "Community 34"
Cohesion: 0.29
Nodes (2): ClinicaMongoRepository, ClinicaRepository

### Community 35 - "Community 35"
Cohesion: 0.24
Nodes (2): DocumentoMongoRepository, DocumentoRepository

### Community 36 - "Community 36"
Cohesion: 0.27
Nodes (2): SalaTelemedicinaMongoRepository, SalaTelemedicinaRepository

### Community 37 - "Community 37"
Cohesion: 0.31
Nodes (1): PacientesController

### Community 38 - "Community 38"
Cohesion: 0.33
Nodes (1): ProntuariosController

### Community 39 - "Community 39"
Cohesion: 0.18
Nodes (1): SuperAdminController

### Community 40 - "Community 40"
Cohesion: 0.33
Nodes (3): ClinicAdminContext, ClinicasService, OnboardingContext

### Community 41 - "Community 41"
Cohesion: 0.44
Nodes (1): FinanceiroService

### Community 42 - "Community 42"
Cohesion: 0.20
Nodes (6): Agendamento, BloqueioAgenda, StatusAgendamento, TipoAgendamento, SalaTelemedicina, StatusSala

### Community 43 - "Community 43"
Cohesion: 0.20
Nodes (9): ArquivoProntuarioDto, ArquivosProntuarioDto, AvaliacaoDto, ExameSegmentarDto, ObjetivoDto, PlanoDto, RegistroPsicologicoDto, SinaisVitaisDto (+1 more)

### Community 44 - "Community 44"
Cohesion: 0.27
Nodes (2): LancamentoMongoRepository, LancamentoRepository

### Community 45 - "Community 45"
Cohesion: 0.36
Nodes (1): TelemedicinaController

### Community 46 - "Community 46"
Cohesion: 0.33
Nodes (2): DocumentStorage, S3DocumentStorageService

### Community 47 - "Community 47"
Cohesion: 0.44
Nodes (1): NotificacoesService

### Community 48 - "Community 48"
Cohesion: 0.39
Nodes (1): FinanceiroController

### Community 49 - "Community 49"
Cohesion: 0.22
Nodes (4): NotificacaoWorker, OnModuleDestroy, OnModuleInit, SendJobData

### Community 50 - "Community 50"
Cohesion: 0.39
Nodes (5): DocumentoRequestContext, EXTENSAO_POR_MIME, DocumentStorage, PresignedUploadInput, PresignedUploadOutput

### Community 51 - "Community 51"
Cohesion: 0.25
Nodes (7): CanalNotificacao, ConteudoNotificacao, ErroNotificacao, Notificacao, PreferenciaNotificacao, StatusNotificacao, TipoNotificacao

### Community 52 - "Community 52"
Cohesion: 0.25
Nodes (7): ConsentimentoLGPD, Convenio, Endereco, LinhaTerapeutica, Paciente, ProjetoPaciente, Sexo

### Community 53 - "Community 53"
Cohesion: 0.32
Nodes (4): EnqueueNotificacaoInput, NotificacaoQueue, BullMqNotificacaoQueueService, NotificacaoQueue

### Community 54 - "Community 54"
Cohesion: 0.46
Nodes (1): AuthController

### Community 55 - "Community 55"
Cohesion: 0.43
Nodes (1): DocumentosController

### Community 56 - "Community 56"
Cohesion: 0.43
Nodes (1): PsicologiaFinanceiroController

### Community 57 - "Community 57"
Cohesion: 0.25
Nodes (5): bcrypt, EMAIL, require, ROUNDS, speakeasy

### Community 58 - "Community 58"
Cohesion: 0.29
Nodes (4): Modulo, MODULO_LABEL, PERMISSOES_PADRAO_POR_PAPEL, TODOS_MODULOS

### Community 59 - "Community 59"
Cohesion: 0.29
Nodes (6): Clinica, ConfiguracoesClinica, EnderecoClinica, LIMITES_POR_PLANO, PlanoClinica, PlanoLimites

### Community 60 - "Community 60"
Cohesion: 0.29
Nodes (6): DashboardFinanceiro, FormaPagamento, Lancamento, OrigemLancamento, StatusLancamento, TipoLancamento

### Community 61 - "Community 61"
Cohesion: 0.29
Nodes (5): CobrancaCiclo, ConfigPsicologo, PacientePsicologia, PainelPsicologia, StatusCiclo

### Community 62 - "Community 62"
Cohesion: 0.29
Nodes (6): AgendamentoDocument, AgendamentoMongo, AgendamentoSchema, BloqueioAgendaDocument, BloqueioAgendaMongo, BloqueioAgendaSchema

### Community 63 - "Community 63"
Cohesion: 0.38
Nodes (2): ConfigPsicologoMongoRepository, ConfigPsicologoRepository

### Community 64 - "Community 64"
Cohesion: 0.29
Nodes (6): NotificacaoDocument, NotificacaoMongo, NotificacaoPreferenciaDocument, NotificacaoPreferenciaMongo, NotificacaoPreferenciaSchema, NotificacaoSchema

### Community 65 - "Community 65"
Cohesion: 0.33
Nodes (2): ObservacaoPacienteMongoRepository, ObservacaoPacienteRepository

### Community 66 - "Community 66"
Cohesion: 0.33
Nodes (2): SalaEventoMongoRepository, SalaEventoRepository

### Community 67 - "Community 67"
Cohesion: 0.33
Nodes (2): SinalSalaMongoRepository, SinalSalaRepository

### Community 68 - "Community 68"
Cohesion: 0.33
Nodes (2): TestePsicologicoMongoRepository, TestePsicologicoRepository

### Community 69 - "Community 69"
Cohesion: 0.29
Nodes (6): Cid10Repository, CreateProntuarioInput, ProntuarioRepository, ResumoSessoesPaciente, SignProntuarioInput, UpdateProntuarioInput

### Community 70 - "Community 70"
Cohesion: 0.29
Nodes (1): TelemedicinaAcessoController

### Community 71 - "Community 71"
Cohesion: 0.43
Nodes (1): LoginRateLimiterService

### Community 72 - "Community 72"
Cohesion: 0.29
Nodes (1): TenantContextService

### Community 73 - "Community 73"
Cohesion: 0.38
Nodes (2): NestMiddleware, TenantMiddleware

### Community 74 - "Community 74"
Cohesion: 0.33
Nodes (2): IaClinicaService, LINHA_LABEL

### Community 75 - "Community 75"
Cohesion: 0.33
Nodes (4): AuthProvider(), queryClient, AppRoutes(), Toaster()

### Community 76 - "Community 76"
Cohesion: 0.33
Nodes (3): PAPEIS_COM_2FA_OBRIGATORIO, PAPEIS_PROFISSIONAIS, Papel

### Community 77 - "Community 77"
Cohesion: 0.33
Nodes (5): ConsentimentoLGPDMongo, ConsentimentoLGPDSchema, PacienteDocument, PacienteMongo, PacienteSchema

### Community 78 - "Community 78"
Cohesion: 0.33
Nodes (5): AgendamentoRepository, CreateAgendamentoInput, CreateBloqueioInput, ListAgendamentosInput, UpdateAgendamentoInput

### Community 79 - "Community 79"
Cohesion: 0.33
Nodes (5): CreateNotificacaoInput, NotificacaoDashboardFilter, NotificacaoDashboardResult, NotificacaoPreferenciaRepository, NotificacaoRepository

### Community 80 - "Community 80"
Cohesion: 0.53
Nodes (1): NotificacoesController

### Community 81 - "Community 81"
Cohesion: 0.60
Nodes (5): gerarCpf(), iso(), main(), maisMin(), req()

### Community 82 - "Community 82"
Cohesion: 0.33
Nodes (2): CanActivate, TenantRequiredGuard

### Community 83 - "Community 83"
Cohesion: 0.60
Nodes (1): NotificacaoWindowService

### Community 84 - "Community 84"
Cohesion: 0.40
Nodes (3): CID10_DATA, CID10_SCHEMA, Cid10Model

### Community 85 - "Community 85"
Cohesion: 0.40
Nodes (4): ALLOWED_DOCUMENT_MIME_TYPES, AllowedDocumentMimeType, Documento, TipoDocumento

### Community 86 - "Community 86"
Cohesion: 0.40
Nodes (4): ConfiguracoesClinicaDto, CreateClinicaDto, EnderecoClinicaDto, PrimeiroAdminDto

### Community 87 - "Community 87"
Cohesion: 0.40
Nodes (2): CanActivate, RolesGuard

### Community 88 - "Community 88"
Cohesion: 0.40
Nodes (2): AuditLogMongoRepository, AuditLogRepository

### Community 89 - "Community 89"
Cohesion: 0.40
Nodes (3): AuditLogDocument, AuditLogMongo, AuditLogSchema

### Community 90 - "Community 90"
Cohesion: 0.40
Nodes (3): ObservacaoPacienteDocument, ObservacaoPacienteMongo, ObservacaoPacienteSchema

### Community 91 - "Community 91"
Cohesion: 0.40
Nodes (4): CreateLancamentoInput, DashboardInput, LancamentoRepository, ListLancamentosInput

### Community 92 - "Community 92"
Cohesion: 0.40
Nodes (4): CreateUserInput, UpdateUserInput, UserFilters, UserRepository

### Community 93 - "Community 93"
Cohesion: 0.40
Nodes (1): IaClinicaController

### Community 94 - "Community 94"
Cohesion: 0.40
Nodes (1): ObservacoesPacienteController

### Community 95 - "Community 95"
Cohesion: 0.40
Nodes (1): TestesPsicologicosController

### Community 96 - "Community 96"
Cohesion: 0.50
Nodes (2): NotificacaoTemplateService, TEMPLATES

### Community 97 - "Community 97"
Cohesion: 0.50
Nodes (2): basePaciente, context

### Community 98 - "Community 98"
Cohesion: 0.50
Nodes (1): TestesPsicologicosService

### Community 99 - "Community 99"
Cohesion: 0.50
Nodes (3): ModalidadeAtendimento, MODALIDADES_ATENDIMENTO, ROTULO_MODALIDADE

### Community 100 - "Community 100"
Cohesion: 0.50
Nodes (3): AUDIT_LOG_REPOSITORY, REDIS_CLIENT, USER_REPOSITORY

### Community 101 - "Community 101"
Cohesion: 0.50
Nodes (3): PapelSala, SalaEvento, TipoEventoSala

### Community 102 - "Community 102"
Cohesion: 0.50
Nodes (2): PublicUser, User

### Community 103 - "Community 103"
Cohesion: 0.50
Nodes (3): AnalyticsQueryDto, HorariosVagosQueryDto, RelatorioPsicologiaQueryDto

### Community 104 - "Community 104"
Cohesion: 0.50
Nodes (1): JwtStrategy

### Community 105 - "Community 105"
Cohesion: 0.50
Nodes (2): CanActivate, SuperAdminGuard

### Community 106 - "Community 106"
Cohesion: 0.50
Nodes (1): HealthController

### Community 107 - "Community 107"
Cohesion: 0.50
Nodes (2): BaseExceptionFilter, InvalidObjectIdFilter

### Community 108 - "Community 108"
Cohesion: 0.50
Nodes (1): AnthropicClient

### Community 109 - "Community 109"
Cohesion: 0.50
Nodes (3): ClinicaDocument, ClinicaMongo, ClinicaSchema

### Community 110 - "Community 110"
Cohesion: 0.50
Nodes (3): ConfigPsicologoDocument, ConfigPsicologoMongo, ConfigPsicologoSchema

### Community 111 - "Community 111"
Cohesion: 0.50
Nodes (3): DocumentoDocument, DocumentoMongo, DocumentoSchema

### Community 112 - "Community 112"
Cohesion: 0.50
Nodes (3): LancamentoDocument, LancamentoMongo, LancamentoSchema

### Community 113 - "Community 113"
Cohesion: 0.50
Nodes (3): SalaEventoDocument, SalaEventoMongo, SalaEventoSchema

### Community 114 - "Community 114"
Cohesion: 0.50
Nodes (3): SalaTelemedicinaDocument, SalaTelemedicinaMongo, SalaTelemedicinaSchema

### Community 115 - "Community 115"
Cohesion: 0.50
Nodes (3): SinalSalaDocument, SinalSalaMongo, SinalSalaSchema

### Community 116 - "Community 116"
Cohesion: 0.50
Nodes (3): TestePsicologicoDocument, TestePsicologicoMongo, TestePsicologicoSchema

### Community 117 - "Community 117"
Cohesion: 0.50
Nodes (3): UserDocument, UserMongo, UserSchema

### Community 118 - "Community 118"
Cohesion: 0.50
Nodes (3): NOTIFICACAO_PREFERENCIA_REPOSITORY, NOTIFICACAO_QUEUE, NOTIFICACAO_REPOSITORY

### Community 119 - "Community 119"
Cohesion: 0.50
Nodes (3): ClinicaRepository, CreateClinicaInput, UpdateClinicaInput

### Community 120 - "Community 120"
Cohesion: 0.50
Nodes (3): CreateDocumentoInput, DocumentoRepository, ListDocumentoInput

### Community 121 - "Community 121"
Cohesion: 0.50
Nodes (3): CreateSalaInput, FindAllSalasFiltro, SalaTelemedicinaRepository

### Community 122 - "Community 122"
Cohesion: 0.67
Nodes (1): ClinicasController

### Community 123 - "Community 123"
Cohesion: 0.50
Nodes (2): bcrypt, require

### Community 124 - "Community 124"
Cohesion: 0.83
Nodes (3): main(), pickItems(), req()

### Community 125 - "Community 125"
Cohesion: 0.50
Nodes (3): SALA_EVENTO_REPOSITORY, SALA_TELEMEDICINA_REPOSITORY, SINAL_SALA_REPOSITORY

### Community 126 - "Community 126"
Cohesion: 0.50
Nodes (2): NestModule, TenancyModule

### Community 127 - "Community 127"
Cohesion: 0.67
Nodes (1): agendamentosServiceStub

### Community 128 - "Community 128"
Cohesion: 0.67
Nodes (1): BootstrapAdminModule

### Community 129 - "Community 129"
Cohesion: 0.67
Nodes (2): SinalSala, TipoSinal

### Community 130 - "Community 130"
Cohesion: 0.67
Nodes (1): CreateProntuarioDto

### Community 131 - "Community 131"
Cohesion: 0.67
Nodes (2): EVENTOS_REPORTAVEIS, RegistrarEventoDto

### Community 132 - "Community 132"
Cohesion: 0.67
Nodes (2): CONFIG_PSICOLOGO_REPOSITORY, LANCAMENTO_REPOSITORY

### Community 133 - "Community 133"
Cohesion: 0.67
Nodes (2): AuthThrottlerGuard, ThrottlerGuard

### Community 134 - "Community 134"
Cohesion: 0.67
Nodes (2): AuditLogRepository, CreateAuditLogInput

### Community 135 - "Community 135"
Cohesion: 0.67
Nodes (2): CreateSalaEventoInput, SalaEventoRepository

### Community 136 - "Community 136"
Cohesion: 0.67
Nodes (2): CreateSinalInput, SinalSalaRepository

### Community 137 - "Community 137"
Cohesion: 0.67
Nodes (2): CID10_REPOSITORY, PRONTUARIO_REPOSITORY

### Community 138 - "Community 138"
Cohesion: 0.67
Nodes (1): dryRun

### Community 139 - "Community 139"
Cohesion: 0.67
Nodes (1): totpCode

### Community 140 - "Community 140"
Cohesion: 1.00
Nodes (1): AGENDAMENTO_REPOSITORY

### Community 141 - "Community 141"
Cohesion: 1.00
Nodes (1): AgendamentosModule

### Community 142 - "Community 142"
Cohesion: 1.00
Nodes (1): AnalyticsModule

### Community 143 - "Community 143"
Cohesion: 1.00
Nodes (1): AuthModule

### Community 144 - "Community 144"
Cohesion: 1.00
Nodes (1): CLINICA_REPOSITORY

### Community 145 - "Community 145"
Cohesion: 1.00
Nodes (1): ClinicasModule

### Community 146 - "Community 146"
Cohesion: 1.00
Nodes (1): DOCUMENTO_REPOSITORY

### Community 147 - "Community 147"
Cohesion: 1.00
Nodes (1): DocumentosModule

### Community 148 - "Community 148"
Cohesion: 1.00
Nodes (1): AuditEvent

### Community 149 - "Community 149"
Cohesion: 1.00
Nodes (1): ObservacaoPaciente

### Community 150 - "Community 150"
Cohesion: 1.00
Nodes (1): TestePsicologico

### Community 151 - "Community 151"
Cohesion: 1.00
Nodes (1): CancelAgendamentoDto

### Community 152 - "Community 152"
Cohesion: 1.00
Nodes (1): Cid10QueryDto

### Community 153 - "Community 153"
Cohesion: 1.00
Nodes (1): CobrarCicloDto

### Community 154 - "Community 154"
Cohesion: 1.00
Nodes (1): ConsentimentoLGpdDto

### Community 155 - "Community 155"
Cohesion: 1.00
Nodes (1): ConvenioDto

### Community 156 - "Community 156"
Cohesion: 1.00
Nodes (1): CreateAddendumDto

### Community 157 - "Community 157"
Cohesion: 1.00
Nodes (1): CreateAgendamentoDto

### Community 158 - "Community 158"
Cohesion: 1.00
Nodes (1): CreateBloqueioDto

### Community 159 - "Community 159"
Cohesion: 1.00
Nodes (1): CreateLancamentoDto

### Community 160 - "Community 160"
Cohesion: 1.00
Nodes (1): CreateNotificacaoDto

### Community 161 - "Community 161"
Cohesion: 1.00
Nodes (1): CreateObservacaoPacienteDto

### Community 162 - "Community 162"
Cohesion: 1.00
Nodes (1): CreatePacienteDto

### Community 163 - "Community 163"
Cohesion: 1.00
Nodes (1): CreateSalaDto

### Community 164 - "Community 164"
Cohesion: 1.00
Nodes (1): CreateTestePsicologicoDto

### Community 165 - "Community 165"
Cohesion: 1.00
Nodes (1): CreateUploadUrlDto

### Community 166 - "Community 166"
Cohesion: 1.00
Nodes (1): DashboardNotificacoesQueryDto

### Community 167 - "Community 167"
Cohesion: 1.00
Nodes (1): EnderecoDto

### Community 168 - "Community 168"
Cohesion: 1.00
Nodes (1): EnviarSinalDto

### Community 169 - "Community 169"
Cohesion: 1.00
Nodes (1): FinancialDashboardQueryDto

### Community 170 - "Community 170"
Cohesion: 1.00
Nodes (1): GerarPrescricaoDto

### Community 171 - "Community 171"
Cohesion: 1.00
Nodes (1): ListAgendamentosQueryDto

### Community 172 - "Community 172"
Cohesion: 1.00
Nodes (1): ListBloqueiosQueryDto

### Community 173 - "Community 173"
Cohesion: 1.00
Nodes (1): ListDocumentosQueryDto

### Community 174 - "Community 174"
Cohesion: 1.00
Nodes (1): ListLancamentosQueryDto

### Community 175 - "Community 175"
Cohesion: 1.00
Nodes (1): ListPacientesQueryDto

### Community 176 - "Community 176"
Cohesion: 1.00
Nodes (1): ListProntuariosQueryDto

### Community 177 - "Community 177"
Cohesion: 1.00
Nodes (1): ListSalasQueryDto

### Community 178 - "Community 178"
Cohesion: 1.00
Nodes (1): LoginDto

### Community 179 - "Community 179"
Cohesion: 1.00
Nodes (1): ReceiveLancamentoDto

### Community 180 - "Community 180"
Cohesion: 1.00
Nodes (1): RegisterUserDto

### Community 181 - "Community 181"
Cohesion: 1.00
Nodes (1): SalvarConfigPsicologoDto

### Community 182 - "Community 182"
Cohesion: 1.00
Nodes (1): SugerirAbordagemDto

### Community 183 - "Community 183"
Cohesion: 1.00
Nodes (1): UpdateAgendamentoDto

### Community 184 - "Community 184"
Cohesion: 1.00
Nodes (1): UpdateClinicaDto

### Community 185 - "Community 185"
Cohesion: 1.00
Nodes (1): UpdateObservacoesPacienteDto

### Community 186 - "Community 186"
Cohesion: 1.00
Nodes (1): UpdateOptOutDto

### Community 187 - "Community 187"
Cohesion: 1.00
Nodes (1): UpdatePacienteDto

### Community 188 - "Community 188"
Cohesion: 1.00
Nodes (1): UpdateProntuarioDto

### Community 189 - "Community 189"
Cohesion: 1.00
Nodes (1): FinanceiroModule

### Community 190 - "Community 190"
Cohesion: 1.00
Nodes (1): JwtAuthGuard

### Community 191 - "Community 191"
Cohesion: 1.00
Nodes (1): HealthModule

### Community 192 - "Community 192"
Cohesion: 1.00
Nodes (1): IaClinicaModule

### Community 193 - "Community 193"
Cohesion: 1.00
Nodes (1): NotificacoesModule

### Community 194 - "Community 194"
Cohesion: 1.00
Nodes (1): ObservacoesPacienteModule

### Community 195 - "Community 195"
Cohesion: 1.00
Nodes (1): PACIENTE_REPOSITORY

### Community 196 - "Community 196"
Cohesion: 1.00
Nodes (1): PacientesModule

### Community 197 - "Community 197"
Cohesion: 1.00
Nodes (1): ConfigPsicologoRepository

### Community 198 - "Community 198"
Cohesion: 1.00
Nodes (1): ObservacaoPacienteRepository

### Community 199 - "Community 199"
Cohesion: 1.00
Nodes (1): TestePsicologicoRepository

### Community 200 - "Community 200"
Cohesion: 1.00
Nodes (1): ProntuariosModule

### Community 201 - "Community 201"
Cohesion: 1.00
Nodes (1): notificacaoQueueProvider

### Community 202 - "Community 202"
Cohesion: 1.00
Nodes (1): redisProvider

### Community 204 - "Community 204"
Cohesion: 1.00
Nodes (1): code

### Community 205 - "Community 205"
Cohesion: 1.00
Nodes (1): SecurityModule

### Community 206 - "Community 206"
Cohesion: 1.00
Nodes (1): AppModule

### Community 207 - "Community 207"
Cohesion: 1.00
Nodes (1): SuperAdminModule

### Community 208 - "Community 208"
Cohesion: 1.00
Nodes (1): TelemedicinaModule

### Community 209 - "Community 209"
Cohesion: 1.00
Nodes (1): TestesPsicologicosModule

### Community 210 - "Community 210"
Cohesion: 1.00
Nodes (1): apiProxy

## Knowledge Gaps
- **431 isolated node(s):** `AppModule`, `BootstrapAdminOptions`, `BootstrapAdminModule`, `CID10_SCHEMA`, `Cid10Model` (+426 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 12`** (1 nodes): `TelemedicinaService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `ProntuarioRequestContext`, `ProntuariosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `PacientesService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `AgendamentosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `DocumentosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (2 nodes): `AgendamentoMongoRepository`, `AgendamentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `AnalyticsService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (2 nodes): `UserMongoRepository`, `UserRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `PacienteCryptoService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (1 nodes): `AgendamentosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (1 nodes): `AnalyticsController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (1 nodes): `SuperAdminService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (1 nodes): `PsicologiaFinanceiroService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (2 nodes): `ClinicaMongoRepository`, `ClinicaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (2 nodes): `DocumentoMongoRepository`, `DocumentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (2 nodes): `SalaTelemedicinaMongoRepository`, `SalaTelemedicinaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `PacientesController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `ProntuariosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `SuperAdminController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `FinanceiroService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (2 nodes): `LancamentoMongoRepository`, `LancamentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `TelemedicinaController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (2 nodes): `DocumentStorage`, `S3DocumentStorageService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `NotificacoesService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `FinanceiroController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `AuthController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `DocumentosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `PsicologiaFinanceiroController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (2 nodes): `ConfigPsicologoMongoRepository`, `ConfigPsicologoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (2 nodes): `ObservacaoPacienteMongoRepository`, `ObservacaoPacienteRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (2 nodes): `SalaEventoMongoRepository`, `SalaEventoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (2 nodes): `SinalSalaMongoRepository`, `SinalSalaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (2 nodes): `TestePsicologicoMongoRepository`, `TestePsicologicoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (1 nodes): `TelemedicinaAcessoController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (1 nodes): `LoginRateLimiterService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `TenantContextService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (2 nodes): `NestMiddleware`, `TenantMiddleware`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (2 nodes): `IaClinicaService`, `LINHA_LABEL`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `NotificacoesController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (2 nodes): `CanActivate`, `TenantRequiredGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 83`** (1 nodes): `NotificacaoWindowService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 87`** (2 nodes): `CanActivate`, `RolesGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 88`** (2 nodes): `AuditLogMongoRepository`, `AuditLogRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 93`** (1 nodes): `IaClinicaController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (1 nodes): `ObservacoesPacienteController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 95`** (1 nodes): `TestesPsicologicosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 96`** (2 nodes): `NotificacaoTemplateService`, `TEMPLATES`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (2 nodes): `basePaciente`, `context`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 98`** (1 nodes): `TestesPsicologicosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 102`** (2 nodes): `PublicUser`, `User`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (1 nodes): `JwtStrategy`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 105`** (2 nodes): `CanActivate`, `SuperAdminGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (1 nodes): `HealthController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (2 nodes): `BaseExceptionFilter`, `InvalidObjectIdFilter`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (1 nodes): `AnthropicClient`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 122`** (1 nodes): `ClinicasController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 123`** (2 nodes): `bcrypt`, `require`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 126`** (2 nodes): `NestModule`, `TenancyModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 127`** (1 nodes): `agendamentosServiceStub`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 128`** (1 nodes): `BootstrapAdminModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 129`** (2 nodes): `SinalSala`, `TipoSinal`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 130`** (1 nodes): `CreateProntuarioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 131`** (2 nodes): `EVENTOS_REPORTAVEIS`, `RegistrarEventoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 132`** (2 nodes): `CONFIG_PSICOLOGO_REPOSITORY`, `LANCAMENTO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 133`** (2 nodes): `AuthThrottlerGuard`, `ThrottlerGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 134`** (2 nodes): `AuditLogRepository`, `CreateAuditLogInput`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 135`** (2 nodes): `CreateSalaEventoInput`, `SalaEventoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 136`** (2 nodes): `CreateSinalInput`, `SinalSalaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 137`** (2 nodes): `CID10_REPOSITORY`, `PRONTUARIO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 138`** (1 nodes): `dryRun`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 139`** (1 nodes): `totpCode`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 140`** (1 nodes): `AGENDAMENTO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 141`** (1 nodes): `AgendamentosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 142`** (1 nodes): `AnalyticsModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 143`** (1 nodes): `AuthModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 144`** (1 nodes): `CLINICA_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 145`** (1 nodes): `ClinicasModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 146`** (1 nodes): `DOCUMENTO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 147`** (1 nodes): `DocumentosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 148`** (1 nodes): `AuditEvent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 149`** (1 nodes): `ObservacaoPaciente`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 150`** (1 nodes): `TestePsicologico`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 151`** (1 nodes): `CancelAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 152`** (1 nodes): `Cid10QueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 153`** (1 nodes): `CobrarCicloDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 154`** (1 nodes): `ConsentimentoLGpdDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 155`** (1 nodes): `ConvenioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 156`** (1 nodes): `CreateAddendumDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 157`** (1 nodes): `CreateAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 158`** (1 nodes): `CreateBloqueioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 159`** (1 nodes): `CreateLancamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 160`** (1 nodes): `CreateNotificacaoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 161`** (1 nodes): `CreateObservacaoPacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 162`** (1 nodes): `CreatePacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 163`** (1 nodes): `CreateSalaDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 164`** (1 nodes): `CreateTestePsicologicoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 165`** (1 nodes): `CreateUploadUrlDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 166`** (1 nodes): `DashboardNotificacoesQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 167`** (1 nodes): `EnderecoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 168`** (1 nodes): `EnviarSinalDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 169`** (1 nodes): `FinancialDashboardQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 170`** (1 nodes): `GerarPrescricaoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 171`** (1 nodes): `ListAgendamentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 172`** (1 nodes): `ListBloqueiosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 173`** (1 nodes): `ListDocumentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 174`** (1 nodes): `ListLancamentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 175`** (1 nodes): `ListPacientesQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 176`** (1 nodes): `ListProntuariosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 177`** (1 nodes): `ListSalasQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 178`** (1 nodes): `LoginDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 179`** (1 nodes): `ReceiveLancamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 180`** (1 nodes): `RegisterUserDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 181`** (1 nodes): `SalvarConfigPsicologoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 182`** (1 nodes): `SugerirAbordagemDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 183`** (1 nodes): `UpdateAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 184`** (1 nodes): `UpdateClinicaDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 185`** (1 nodes): `UpdateObservacoesPacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 186`** (1 nodes): `UpdateOptOutDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 187`** (1 nodes): `UpdatePacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 188`** (1 nodes): `UpdateProntuarioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 189`** (1 nodes): `FinanceiroModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 190`** (1 nodes): `JwtAuthGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 191`** (1 nodes): `HealthModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 192`** (1 nodes): `IaClinicaModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 193`** (1 nodes): `NotificacoesModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 194`** (1 nodes): `ObservacoesPacienteModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 195`** (1 nodes): `PACIENTE_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 196`** (1 nodes): `PacientesModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 197`** (1 nodes): `ConfigPsicologoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 198`** (1 nodes): `ObservacaoPacienteRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 199`** (1 nodes): `TestePsicologicoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 200`** (1 nodes): `ProntuariosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 201`** (1 nodes): `notificacaoQueueProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 202`** (1 nodes): `redisProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 204`** (1 nodes): `code`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 205`** (1 nodes): `SecurityModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 206`** (1 nodes): `AppModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 207`** (1 nodes): `SuperAdminModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 208`** (1 nodes): `TelemedicinaModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 209`** (1 nodes): `TestesPsicologicosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 210`** (1 nodes): `apiProxy`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `TelemedicinaService` connect `Community 12` to `Community 11`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `PacientesService` connect `Community 18` to `Community 11`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `AppModule`, `BootstrapAdminOptions`, `BootstrapAdminModule` to the rest of the system?**
  _431 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.03555686159271231 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08458646616541353 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.061683599419448475 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.06745098039215686 - nodes in this community are weakly interconnected._