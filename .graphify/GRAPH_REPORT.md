# Graph Report - .  (2026-09-10)

## Corpus Check
- 372 files · ~137.248 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1758 nodes · 2952 edges · 239 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 865 · imports: 719 · method: 519 · imports_from: 449 · calls: 359 · implements: 33 · inherits: 8


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 372 · Candidates: 414
- Excluded: 101 untracked · 58023 ignored · 12 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `d8d1afa`
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
Nodes (75): agendaApi, analyticsApi, AnalyticsPeriodParams, CobrancaResumo, CobrancasPsicologia, CobrarCicloPayload, CreateAgendamentoPayload, CreateSalaPayload (+67 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (37): clinicasApi, Logo(), LogoIcon(), LogoIconProps, LogoProps, ESTADO_CONEXAO_LABEL, EstadoConexao, Fase (+29 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (33): documentosApi, observacoesPacienteApi, PacienteSort, TestePsicologico, testesPsicologicosApi, NovoDocumentoDialog(), CAMPOS_LINHA_TODAS, EXAME_SEGMENTAR_CAMPOS (+25 more)

### Community 3 - "Community 3"
Cohesion: 0.14
Nodes (30): PageHeader(), PageHeaderProps, DashboardData, RelatoriosGerenciaisPage(), TICK_STYLE, tooltipStyle(), Paciente, STATUS_AGENDAMENTO_LABEL (+22 more)

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (14): CursorPaginationInput, CursorPaginationResult, COLLATION_PT, DecodedCursor, PacienteMongoRepository, PacienteRepository, CreatePacienteInput, CursorPaginationInput (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.10
Nodes (9): CurrentClinicaId, CurrentUser, baseUser, CreateAdminUserDto, CreateClinicaUsuarioDto, ListUsersQueryDto, UpdateUserDto, extractClientIp() (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (9): NotificacaoDispatcherService, NotificacaoSender, SendNotificacaoInput, EmailSender, NotificacaoSender, NotificacaoSender, SmsSender, NotificacaoSender (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.09
Nodes (15): iaClinicaApi, CAMPOS_POR_LINHA, SUGESTOES_CUIDADOS_POR_LINHA, RegistroSessao(), STATUS_BADGE, ultimoValor(), CHECKLIST_FIXO, PrescricaoCuidadosPage() (+7 more)

### Community 8 - "Community 8"
Cohesion: 0.17
Nodes (19): pacientesApi, prontuariosApi, useAuth(), DocumentoClinicoLayout(), DocumentoRodape(), DocumentoTimbre(), brand, montarRascunho() (+11 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (26): ClinicaAdmin, CreateAdminUserPayload, superAdminApi, TwoFactorSetup, UpdateUsuarioPayload, ClinicaForm, clinicaSchema, CreateForm (+18 more)

### Community 10 - "Community 10"
Cohesion: 0.09
Nodes (20): psicoFinanceiroApi, CICLO_BADGE, FORMA_PAGAMENTO_LABEL, FormaPagamento, PacientePsicologia, PainelPsicologia, rotuloProximaSessao(), STATUS_CICLO_LABEL (+12 more)

### Community 11 - "Community 11"
Cohesion: 0.12
Nodes (10): AppConfig, AppConfigService, ConfigSource, resolveAllowPublicRegistration(), resolveConfigSource(), PLACEHOLDERS, ResultadoValidacao, SEGREDOS_COM_TAMANHO_MINIMO (+2 more)

### Community 12 - "Community 12"
Cohesion: 0.10
Nodes (20): ProtectedRoute(), SalaVideo(), AppLayout(), AgendaPage(), AtendimentoPsicologicoPage(), AtendimentoTelemedicinaPage(), AtestadoComparecimentoPage(), DashboardPage() (+12 more)

### Community 13 - "Community 13"
Cohesion: 0.13
Nodes (11): RequestAuditContext, RequestAuditContext, IaClinicaRequestContext, LINHA_LABEL, PromptIA, NotificacaoRequestContext, RequestAuditContext, RequestAuditContext (+3 more)

### Community 14 - "Community 14"
Cohesion: 0.19
Nodes (1): TelemedicinaService

### Community 15 - "Community 15"
Cohesion: 0.25
Nodes (2): ProntuarioRequestContext, ProntuariosService

### Community 16 - "Community 16"
Cohesion: 0.11
Nodes (4): NotificacaoMongoRepository, NotificacaoPreferenciaMongoRepository, NotificacaoPreferenciaRepository, NotificacaoRepository

### Community 17 - "Community 17"
Cohesion: 0.15
Nodes (4): Cid10MongoRepository, Cid10Repository, ProntuarioMongoRepository, ProntuarioRepository

### Community 18 - "Community 18"
Cohesion: 0.13
Nodes (3): BootstrapAdminCommand, BootstrapAdminOptions, CommandRunner

### Community 19 - "Community 19"
Cohesion: 0.17
Nodes (13): api, apiErrorMessage(), avisar403(), doRefresh(), getClinicaAtiva(), getToken(), setClinicaAtiva(), setToken() (+5 more)

### Community 20 - "Community 20"
Cohesion: 0.32
Nodes (1): PacientesService

### Community 21 - "Community 21"
Cohesion: 0.33
Nodes (1): AgendamentosService

### Community 22 - "Community 22"
Cohesion: 0.31
Nodes (1): DocumentosService

### Community 23 - "Community 23"
Cohesion: 0.14
Nodes (13): ArquivoProntuario, AssinaturaProntuario, Avaliacao, Cid10, ExameSegmentar, Objetivo, Plano, Prontuario (+5 more)

### Community 24 - "Community 24"
Cohesion: 0.21
Nodes (2): AgendamentoMongoRepository, AgendamentoRepository

### Community 25 - "Community 25"
Cohesion: 0.15
Nodes (1): AnalyticsService

### Community 26 - "Community 26"
Cohesion: 0.15
Nodes (10): AssinaturaMongo, Cid10Document, Cid10Mongo, Cid10Schema, ProntuarioAddendumDocument, ProntuarioAddendumMongo, ProntuarioAddendumSchema, ProntuarioDocument (+2 more)

### Community 27 - "Community 27"
Cohesion: 0.24
Nodes (2): UserMongoRepository, UserRepository

### Community 28 - "Community 28"
Cohesion: 0.26
Nodes (1): AuthService

### Community 29 - "Community 29"
Cohesion: 0.30
Nodes (1): IaClinicaService

### Community 30 - "Community 30"
Cohesion: 0.26
Nodes (1): PacienteCryptoService

### Community 31 - "Community 31"
Cohesion: 0.30
Nodes (1): AgendamentosController

### Community 32 - "Community 32"
Cohesion: 0.23
Nodes (1): AnalyticsController

### Community 33 - "Community 33"
Cohesion: 0.21
Nodes (1): SuperAdminService

### Community 34 - "Community 34"
Cohesion: 0.17
Nodes (9): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+1 more)

### Community 35 - "Community 35"
Cohesion: 0.38
Nodes (1): PsicologiaFinanceiroService

### Community 36 - "Community 36"
Cohesion: 0.29
Nodes (2): ClinicaMongoRepository, ClinicaRepository

### Community 37 - "Community 37"
Cohesion: 0.24
Nodes (2): DocumentoMongoRepository, DocumentoRepository

### Community 38 - "Community 38"
Cohesion: 0.27
Nodes (2): SalaTelemedicinaMongoRepository, SalaTelemedicinaRepository

### Community 39 - "Community 39"
Cohesion: 0.31
Nodes (1): PacientesController

### Community 40 - "Community 40"
Cohesion: 0.33
Nodes (1): ProntuariosController

### Community 41 - "Community 41"
Cohesion: 0.18
Nodes (8): { AppConfigService }, arquivo, distConfig, googleSecretsStub, { Logger }, raiz, require, { vars, linhasInvalidas }

### Community 42 - "Community 42"
Cohesion: 0.18
Nodes (1): SuperAdminController

### Community 43 - "Community 43"
Cohesion: 0.33
Nodes (3): ClinicAdminContext, ClinicasService, OnboardingContext

### Community 44 - "Community 44"
Cohesion: 0.44
Nodes (1): FinanceiroService

### Community 45 - "Community 45"
Cohesion: 0.20
Nodes (6): Agendamento, BloqueioAgenda, StatusAgendamento, TipoAgendamento, SalaTelemedicina, StatusSala

### Community 46 - "Community 46"
Cohesion: 0.20
Nodes (9): ArquivoProntuarioDto, ArquivosProntuarioDto, AvaliacaoDto, ExameSegmentarDto, ObjetivoDto, PlanoDto, RegistroPsicologicoDto, SinaisVitaisDto (+1 more)

### Community 47 - "Community 47"
Cohesion: 0.27
Nodes (2): LancamentoMongoRepository, LancamentoRepository

### Community 48 - "Community 48"
Cohesion: 0.36
Nodes (1): TelemedicinaController

### Community 49 - "Community 49"
Cohesion: 0.33
Nodes (2): DocumentStorage, S3DocumentStorageService

### Community 50 - "Community 50"
Cohesion: 0.44
Nodes (1): NotificacoesService

### Community 51 - "Community 51"
Cohesion: 0.42
Nodes (1): AuthController

### Community 52 - "Community 52"
Cohesion: 0.39
Nodes (1): FinanceiroController

### Community 53 - "Community 53"
Cohesion: 0.22
Nodes (4): NotificacaoWorker, OnModuleDestroy, OnModuleInit, SendJobData

### Community 54 - "Community 54"
Cohesion: 0.28
Nodes (8): bcrypt, EMAIL, fail(), hostDaUri(), main(), require, ROUNDS, speakeasy

### Community 55 - "Community 55"
Cohesion: 0.39
Nodes (4): AuthResponse, AuthTokens, RequestContext, AuthenticatedUser

### Community 56 - "Community 56"
Cohesion: 0.39
Nodes (5): DocumentoRequestContext, EXTENSAO_POR_MIME, DocumentStorage, PresignedUploadInput, PresignedUploadOutput

### Community 57 - "Community 57"
Cohesion: 0.25
Nodes (7): CanalNotificacao, ConteudoNotificacao, ErroNotificacao, Notificacao, PreferenciaNotificacao, StatusNotificacao, TipoNotificacao

### Community 58 - "Community 58"
Cohesion: 0.25
Nodes (7): ConsentimentoLGPD, Convenio, Endereco, LinhaTerapeutica, Paciente, ProjetoPaciente, Sexo

### Community 59 - "Community 59"
Cohesion: 0.32
Nodes (4): EnqueueNotificacaoInput, NotificacaoQueue, BullMqNotificacaoQueueService, NotificacaoQueue

### Community 60 - "Community 60"
Cohesion: 0.43
Nodes (1): DocumentosController

### Community 61 - "Community 61"
Cohesion: 0.43
Nodes (1): PsicologiaFinanceiroController

### Community 62 - "Community 62"
Cohesion: 0.29
Nodes (4): Modulo, MODULO_LABEL, PERMISSOES_PADRAO_POR_PAPEL, TODOS_MODULOS

### Community 63 - "Community 63"
Cohesion: 0.29
Nodes (6): Clinica, ConfiguracoesClinica, EnderecoClinica, LIMITES_POR_PLANO, PlanoClinica, PlanoLimites

### Community 64 - "Community 64"
Cohesion: 0.29
Nodes (6): DashboardFinanceiro, FormaPagamento, Lancamento, OrigemLancamento, StatusLancamento, TipoLancamento

### Community 65 - "Community 65"
Cohesion: 0.29
Nodes (5): CobrancaCiclo, ConfigPsicologo, PacientePsicologia, PainelPsicologia, StatusCiclo

### Community 66 - "Community 66"
Cohesion: 0.33
Nodes (3): get(), RotasDeTeste, statusEmSequencia()

### Community 67 - "Community 67"
Cohesion: 0.29
Nodes (6): AgendamentoDocument, AgendamentoMongo, AgendamentoSchema, BloqueioAgendaDocument, BloqueioAgendaMongo, BloqueioAgendaSchema

### Community 68 - "Community 68"
Cohesion: 0.38
Nodes (2): ConfigPsicologoMongoRepository, ConfigPsicologoRepository

### Community 69 - "Community 69"
Cohesion: 0.33
Nodes (2): DecisaoUsoIaMongoRepository, DecisaoUsoIaRepository

### Community 70 - "Community 70"
Cohesion: 0.29
Nodes (6): NotificacaoDocument, NotificacaoMongo, NotificacaoPreferenciaDocument, NotificacaoPreferenciaMongo, NotificacaoPreferenciaSchema, NotificacaoSchema

### Community 71 - "Community 71"
Cohesion: 0.33
Nodes (2): ObservacaoPacienteMongoRepository, ObservacaoPacienteRepository

### Community 72 - "Community 72"
Cohesion: 0.38
Nodes (2): RegistroUsoIaMongoRepository, RegistroUsoIaRepository

### Community 73 - "Community 73"
Cohesion: 0.33
Nodes (2): SalaEventoMongoRepository, SalaEventoRepository

### Community 74 - "Community 74"
Cohesion: 0.33
Nodes (2): SinalSalaMongoRepository, SinalSalaRepository

### Community 75 - "Community 75"
Cohesion: 0.33
Nodes (2): TestePsicologicoMongoRepository, TestePsicologicoRepository

### Community 76 - "Community 76"
Cohesion: 0.29
Nodes (6): Cid10Repository, CreateProntuarioInput, ProntuarioRepository, ResumoSessoesPaciente, SignProntuarioInput, UpdateProntuarioInput

### Community 77 - "Community 77"
Cohesion: 0.29
Nodes (1): TelemedicinaAcessoController

### Community 78 - "Community 78"
Cohesion: 0.43
Nodes (1): LoginRateLimiterService

### Community 79 - "Community 79"
Cohesion: 0.29
Nodes (5): DEST, here, repoRoot, SHARED_TERMOS, SRC

### Community 80 - "Community 80"
Cohesion: 0.29
Nodes (1): TenantContextService

### Community 81 - "Community 81"
Cohesion: 0.38
Nodes (2): NestMiddleware, TenantMiddleware

### Community 82 - "Community 82"
Cohesion: 0.33
Nodes (4): AuthProvider(), queryClient, AppRoutes(), Toaster()

### Community 83 - "Community 83"
Cohesion: 0.33
Nodes (3): PAPEIS_COM_2FA_OBRIGATORIO, PAPEIS_PROFISSIONAIS, Papel

### Community 84 - "Community 84"
Cohesion: 0.40
Nodes (1): IaUsoCryptoService

### Community 85 - "Community 85"
Cohesion: 0.33
Nodes (5): ConsentimentoLGPDMongo, ConsentimentoLGPDSchema, PacienteDocument, PacienteMongo, PacienteSchema

### Community 86 - "Community 86"
Cohesion: 0.33
Nodes (5): TermosAceitosMongo, TermosAceitosSchema, UserDocument, UserMongo, UserSchema

### Community 87 - "Community 87"
Cohesion: 0.33
Nodes (5): AgendamentoRepository, CreateAgendamentoInput, CreateBloqueioInput, ListAgendamentosInput, UpdateAgendamentoInput

### Community 88 - "Community 88"
Cohesion: 0.33
Nodes (5): CreateNotificacaoInput, NotificacaoDashboardFilter, NotificacaoDashboardResult, NotificacaoPreferenciaRepository, NotificacaoRepository

### Community 89 - "Community 89"
Cohesion: 0.53
Nodes (1): IaClinicaController

### Community 90 - "Community 90"
Cohesion: 0.53
Nodes (1): NotificacoesController

### Community 91 - "Community 91"
Cohesion: 0.60
Nodes (5): gerarCpf(), iso(), main(), maisMin(), req()

### Community 92 - "Community 92"
Cohesion: 0.33
Nodes (2): CanActivate, TenantRequiredGuard

### Community 93 - "Community 93"
Cohesion: 0.40
Nodes (2): context, TERMOS

### Community 94 - "Community 94"
Cohesion: 0.60
Nodes (1): NotificacaoWindowService

### Community 95 - "Community 95"
Cohesion: 0.40
Nodes (2): AuthModule, OnApplicationShutdown

### Community 96 - "Community 96"
Cohesion: 0.40
Nodes (3): CID10_DATA, CID10_SCHEMA, Cid10Model

### Community 97 - "Community 97"
Cohesion: 0.60
Nodes (2): GateAvaliavel, gatePendente()

### Community 98 - "Community 98"
Cohesion: 0.40
Nodes (4): ALLOWED_DOCUMENT_MIME_TYPES, AllowedDocumentMimeType, Documento, TipoDocumento

### Community 99 - "Community 99"
Cohesion: 0.40
Nodes (3): PublicUser, TermosAceitos, User

### Community 100 - "Community 100"
Cohesion: 0.40
Nodes (4): ConfiguracoesClinicaDto, CreateClinicaDto, EnderecoClinicaDto, PrimeiroAdminDto

### Community 101 - "Community 101"
Cohesion: 0.40
Nodes (2): clearUser, gatedUser

### Community 102 - "Community 102"
Cohesion: 0.40
Nodes (2): CanActivate, RolesGuard

### Community 103 - "Community 103"
Cohesion: 0.40
Nodes (2): HealthIndicator, RedisHealthIndicator

### Community 104 - "Community 104"
Cohesion: 0.40
Nodes (2): AuditLogMongoRepository, AuditLogRepository

### Community 105 - "Community 105"
Cohesion: 0.40
Nodes (3): AuditLogDocument, AuditLogMongo, AuditLogSchema

### Community 106 - "Community 106"
Cohesion: 0.40
Nodes (3): DecisaoUsoIaDocument, DecisaoUsoIaMongo, DecisaoUsoIaSchema

### Community 107 - "Community 107"
Cohesion: 0.40
Nodes (3): ObservacaoPacienteDocument, ObservacaoPacienteMongo, ObservacaoPacienteSchema

### Community 108 - "Community 108"
Cohesion: 0.40
Nodes (3): RegistroUsoIaDocument, RegistroUsoIaMongo, RegistroUsoIaSchema

### Community 109 - "Community 109"
Cohesion: 0.40
Nodes (3): TestePsicologicoDocument, TestePsicologicoMongo, TestePsicologicoSchema

### Community 110 - "Community 110"
Cohesion: 0.40
Nodes (4): CreateLancamentoInput, DashboardInput, LancamentoRepository, ListLancamentosInput

### Community 111 - "Community 111"
Cohesion: 0.40
Nodes (4): CreateUserInput, UpdateUserInput, UserFilters, UserRepository

### Community 112 - "Community 112"
Cohesion: 0.40
Nodes (1): ObservacoesPacienteController

### Community 113 - "Community 113"
Cohesion: 0.40
Nodes (1): TestesPsicologicosController

### Community 114 - "Community 114"
Cohesion: 0.50
Nodes (2): NotificacaoTemplateService, TEMPLATES

### Community 115 - "Community 115"
Cohesion: 0.50
Nodes (1): ObservacoesPacienteService

### Community 116 - "Community 116"
Cohesion: 0.50
Nodes (2): basePaciente, context

### Community 117 - "Community 117"
Cohesion: 0.50
Nodes (1): TestesPsicologicosService

### Community 118 - "Community 118"
Cohesion: 0.50
Nodes (3): ModalidadeAtendimento, MODALIDADES_ATENDIMENTO, ROTULO_MODALIDADE

### Community 119 - "Community 119"
Cohesion: 0.50
Nodes (3): AUDIT_LOG_REPOSITORY, REDIS_CLIENT, USER_REPOSITORY

### Community 120 - "Community 120"
Cohesion: 0.50
Nodes (3): PapelSala, SalaEvento, TipoEventoSala

### Community 121 - "Community 121"
Cohesion: 0.50
Nodes (3): AnalyticsQueryDto, HorariosVagosQueryDto, RelatorioPsicologiaQueryDto

### Community 122 - "Community 122"
Cohesion: 0.50
Nodes (2): AuthGatesGuard, CanActivate

### Community 123 - "Community 123"
Cohesion: 0.50
Nodes (2): CanActivate, SuperAdminGuard

### Community 124 - "Community 124"
Cohesion: 0.50
Nodes (1): HealthController

### Community 125 - "Community 125"
Cohesion: 0.50
Nodes (2): BaseExceptionFilter, InvalidObjectIdFilter

### Community 126 - "Community 126"
Cohesion: 0.50
Nodes (1): AnthropicClient

### Community 127 - "Community 127"
Cohesion: 0.50
Nodes (3): ClinicaDocument, ClinicaMongo, ClinicaSchema

### Community 128 - "Community 128"
Cohesion: 0.50
Nodes (3): ConfigPsicologoDocument, ConfigPsicologoMongo, ConfigPsicologoSchema

### Community 129 - "Community 129"
Cohesion: 0.50
Nodes (3): DocumentoDocument, DocumentoMongo, DocumentoSchema

### Community 130 - "Community 130"
Cohesion: 0.50
Nodes (3): LancamentoDocument, LancamentoMongo, LancamentoSchema

### Community 131 - "Community 131"
Cohesion: 0.50
Nodes (3): SalaEventoDocument, SalaEventoMongo, SalaEventoSchema

### Community 132 - "Community 132"
Cohesion: 0.50
Nodes (3): SalaTelemedicinaDocument, SalaTelemedicinaMongo, SalaTelemedicinaSchema

### Community 133 - "Community 133"
Cohesion: 0.50
Nodes (3): SinalSalaDocument, SinalSalaMongo, SinalSalaSchema

### Community 134 - "Community 134"
Cohesion: 0.50
Nodes (3): NOTIFICACAO_PREFERENCIA_REPOSITORY, NOTIFICACAO_QUEUE, NOTIFICACAO_REPOSITORY

### Community 135 - "Community 135"
Cohesion: 0.50
Nodes (3): ClinicaRepository, CreateClinicaInput, UpdateClinicaInput

### Community 136 - "Community 136"
Cohesion: 0.50
Nodes (3): CreateDocumentoInput, DocumentoRepository, ListDocumentoInput

### Community 137 - "Community 137"
Cohesion: 0.50
Nodes (3): CreateSalaInput, FindAllSalasFiltro, SalaTelemedicinaRepository

### Community 138 - "Community 138"
Cohesion: 0.67
Nodes (1): ClinicasController

### Community 139 - "Community 139"
Cohesion: 0.50
Nodes (2): bcrypt, require

### Community 140 - "Community 140"
Cohesion: 0.83
Nodes (3): main(), pickItems(), req()

### Community 141 - "Community 141"
Cohesion: 0.50
Nodes (3): SALA_EVENTO_REPOSITORY, SALA_TELEMEDICINA_REPOSITORY, SINAL_SALA_REPOSITORY

### Community 142 - "Community 142"
Cohesion: 0.50
Nodes (2): NestModule, TenancyModule

### Community 143 - "Community 143"
Cohesion: 0.67
Nodes (1): context

### Community 144 - "Community 144"
Cohesion: 0.67
Nodes (1): agendamentosServiceStub

### Community 145 - "Community 145"
Cohesion: 0.67
Nodes (1): BootstrapAdminModule

### Community 146 - "Community 146"
Cohesion: 0.67
Nodes (2): DecisaoUsoIA, TipoUsoIA

### Community 147 - "Community 147"
Cohesion: 0.67
Nodes (2): SinalSala, TipoSinal

### Community 148 - "Community 148"
Cohesion: 0.67
Nodes (1): CreateProntuarioDto

### Community 149 - "Community 149"
Cohesion: 0.67
Nodes (2): EVENTOS_REPORTAVEIS, RegistrarEventoDto

### Community 150 - "Community 150"
Cohesion: 0.67
Nodes (2): CONFIG_PSICOLOGO_REPOSITORY, LANCAMENTO_REPOSITORY

### Community 151 - "Community 151"
Cohesion: 0.67
Nodes (1): JwtStrategy

### Community 152 - "Community 152"
Cohesion: 0.67
Nodes (2): GlobalThrottlerGuard, ThrottlerGuard

### Community 153 - "Community 153"
Cohesion: 0.67
Nodes (2): versaoMatch, vigenciaMatch

### Community 154 - "Community 154"
Cohesion: 0.67
Nodes (2): CAMPOS_IMUTAVEIS, OPS_BLOQUEADAS

### Community 155 - "Community 155"
Cohesion: 0.67
Nodes (2): CAMPOS_IMUTAVEIS, OPS_BLOQUEADAS

### Community 156 - "Community 156"
Cohesion: 0.67
Nodes (2): CAMPOS_IMUTAVEIS, OPS_BLOQUEADAS

### Community 157 - "Community 157"
Cohesion: 0.67
Nodes (3): duracaoAtendimento(), SalaCard(), salaVariant()

### Community 158 - "Community 158"
Cohesion: 0.67
Nodes (2): AuditLogRepository, CreateAuditLogInput

### Community 159 - "Community 159"
Cohesion: 0.67
Nodes (2): CreateSalaEventoInput, SalaEventoRepository

### Community 160 - "Community 160"
Cohesion: 0.67
Nodes (2): CreateSinalInput, SinalSalaRepository

### Community 161 - "Community 161"
Cohesion: 0.67
Nodes (2): CID10_REPOSITORY, PRONTUARIO_REPOSITORY

### Community 162 - "Community 162"
Cohesion: 0.67
Nodes (1): dryRun

### Community 163 - "Community 163"
Cohesion: 0.67
Nodes (1): totpCode

### Community 164 - "Community 164"
Cohesion: 1.00
Nodes (1): AGENDAMENTO_REPOSITORY

### Community 165 - "Community 165"
Cohesion: 1.00
Nodes (1): AgendamentosModule

### Community 166 - "Community 166"
Cohesion: 1.00
Nodes (1): AnalyticsModule

### Community 167 - "Community 167"
Cohesion: 1.00
Nodes (1): CLINICA_REPOSITORY

### Community 168 - "Community 168"
Cohesion: 1.00
Nodes (1): ClinicasModule

### Community 171 - "Community 171"
Cohesion: 1.00
Nodes (1): DOCUMENTO_REPOSITORY

### Community 172 - "Community 172"
Cohesion: 1.00
Nodes (1): DocumentosModule

### Community 174 - "Community 174"
Cohesion: 1.00
Nodes (1): AuditEvent

### Community 175 - "Community 175"
Cohesion: 1.00
Nodes (1): DecisaoUsoIa

### Community 176 - "Community 176"
Cohesion: 1.00
Nodes (1): ObservacaoPaciente

### Community 177 - "Community 177"
Cohesion: 1.00
Nodes (1): RegistroUsoIa

### Community 178 - "Community 178"
Cohesion: 1.00
Nodes (1): TestePsicologico

### Community 179 - "Community 179"
Cohesion: 1.00
Nodes (1): CancelAgendamentoDto

### Community 180 - "Community 180"
Cohesion: 1.00
Nodes (1): Cid10QueryDto

### Community 181 - "Community 181"
Cohesion: 1.00
Nodes (1): CobrarCicloDto

### Community 182 - "Community 182"
Cohesion: 1.00
Nodes (1): ConsentimentoLGpdDto

### Community 183 - "Community 183"
Cohesion: 1.00
Nodes (1): ConvenioDto

### Community 184 - "Community 184"
Cohesion: 1.00
Nodes (1): CreateAddendumDto

### Community 185 - "Community 185"
Cohesion: 1.00
Nodes (1): CreateAgendamentoDto

### Community 186 - "Community 186"
Cohesion: 1.00
Nodes (1): CreateBloqueioDto

### Community 187 - "Community 187"
Cohesion: 1.00
Nodes (1): CreateLancamentoDto

### Community 188 - "Community 188"
Cohesion: 1.00
Nodes (1): CreateNotificacaoDto

### Community 189 - "Community 189"
Cohesion: 1.00
Nodes (1): CreateObservacaoPacienteDto

### Community 190 - "Community 190"
Cohesion: 1.00
Nodes (1): CreatePacienteDto

### Community 191 - "Community 191"
Cohesion: 1.00
Nodes (1): CreateSalaDto

### Community 192 - "Community 192"
Cohesion: 1.00
Nodes (1): CreateTestePsicologicoDto

### Community 193 - "Community 193"
Cohesion: 1.00
Nodes (1): CreateUploadUrlDto

### Community 194 - "Community 194"
Cohesion: 1.00
Nodes (1): DashboardNotificacoesQueryDto

### Community 195 - "Community 195"
Cohesion: 1.00
Nodes (1): EnderecoDto

### Community 196 - "Community 196"
Cohesion: 1.00
Nodes (1): EnviarSinalDto

### Community 197 - "Community 197"
Cohesion: 1.00
Nodes (1): FinancialDashboardQueryDto

### Community 198 - "Community 198"
Cohesion: 1.00
Nodes (1): GerarPrescricaoDto

### Community 199 - "Community 199"
Cohesion: 1.00
Nodes (1): ListAgendamentosQueryDto

### Community 200 - "Community 200"
Cohesion: 1.00
Nodes (1): ListBloqueiosQueryDto

### Community 201 - "Community 201"
Cohesion: 1.00
Nodes (1): ListDocumentosQueryDto

### Community 202 - "Community 202"
Cohesion: 1.00
Nodes (1): ListLancamentosQueryDto

### Community 203 - "Community 203"
Cohesion: 1.00
Nodes (1): ListPacientesQueryDto

### Community 204 - "Community 204"
Cohesion: 1.00
Nodes (1): ListProntuariosQueryDto

### Community 205 - "Community 205"
Cohesion: 1.00
Nodes (1): ListSalasQueryDto

### Community 206 - "Community 206"
Cohesion: 1.00
Nodes (1): LoginDto

### Community 207 - "Community 207"
Cohesion: 1.00
Nodes (1): ReceiveLancamentoDto

### Community 208 - "Community 208"
Cohesion: 1.00
Nodes (1): RegisterUserDto

### Community 209 - "Community 209"
Cohesion: 1.00
Nodes (1): RegistrarDecisaoDto

### Community 210 - "Community 210"
Cohesion: 1.00
Nodes (1): SalvarConfigPsicologoDto

### Community 211 - "Community 211"
Cohesion: 1.00
Nodes (1): SugerirAbordagemDto

### Community 212 - "Community 212"
Cohesion: 1.00
Nodes (1): UpdateAgendamentoDto

### Community 213 - "Community 213"
Cohesion: 1.00
Nodes (1): UpdateClinicaDto

### Community 214 - "Community 214"
Cohesion: 1.00
Nodes (1): UpdateObservacoesPacienteDto

### Community 215 - "Community 215"
Cohesion: 1.00
Nodes (1): UpdateOptOutDto

### Community 216 - "Community 216"
Cohesion: 1.00
Nodes (1): UpdatePacienteDto

### Community 217 - "Community 217"
Cohesion: 1.00
Nodes (1): UpdateProntuarioDto

### Community 218 - "Community 218"
Cohesion: 1.00
Nodes (1): FinanceiroModule

### Community 219 - "Community 219"
Cohesion: 1.00
Nodes (1): JwtAuthGuard

### Community 220 - "Community 220"
Cohesion: 1.00
Nodes (1): HealthModule

### Community 222 - "Community 222"
Cohesion: 1.00
Nodes (1): IaClinicaModule

### Community 223 - "Community 223"
Cohesion: 1.00
Nodes (1): NotificacoesModule

### Community 224 - "Community 224"
Cohesion: 1.00
Nodes (1): ObservacoesPacienteModule

### Community 225 - "Community 225"
Cohesion: 1.00
Nodes (1): PACIENTE_REPOSITORY

### Community 226 - "Community 226"
Cohesion: 1.00
Nodes (1): PacientesModule

### Community 227 - "Community 227"
Cohesion: 1.00
Nodes (1): ConfigPsicologoRepository

### Community 228 - "Community 228"
Cohesion: 1.00
Nodes (1): DecisaoUsoIaRepository

### Community 229 - "Community 229"
Cohesion: 1.00
Nodes (1): ObservacaoPacienteRepository

### Community 230 - "Community 230"
Cohesion: 1.00
Nodes (1): RegistroUsoIaRepository

### Community 231 - "Community 231"
Cohesion: 1.00
Nodes (1): TestePsicologicoRepository

### Community 232 - "Community 232"
Cohesion: 1.00
Nodes (1): ProntuariosModule

### Community 233 - "Community 233"
Cohesion: 1.00
Nodes (1): notificacaoQueueProvider

### Community 234 - "Community 234"
Cohesion: 1.00
Nodes (1): redisProvider

### Community 236 - "Community 236"
Cohesion: 1.00
Nodes (1): code

### Community 237 - "Community 237"
Cohesion: 1.00
Nodes (1): SecurityModule

### Community 238 - "Community 238"
Cohesion: 1.00
Nodes (1): AppModule

### Community 239 - "Community 239"
Cohesion: 1.00
Nodes (1): SuperAdminModule

### Community 240 - "Community 240"
Cohesion: 1.00
Nodes (1): TelemedicinaModule

### Community 241 - "Community 241"
Cohesion: 1.00
Nodes (1): TestesPsicologicosModule

### Community 242 - "Community 242"
Cohesion: 1.00
Nodes (1): apiProxy

### Community 251 - "Community 251"
Cohesion: 1.00
Nodes (1): ThrottlerGuard

## Knowledge Gaps
- **481 isolated node(s):** `AppModule`, `BootstrapAdminOptions`, `BootstrapAdminModule`, `CID10_SCHEMA`, `Cid10Model` (+476 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 14`** (1 nodes): `TelemedicinaService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `ProntuarioRequestContext`, `ProntuariosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `PacientesService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `AgendamentosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `DocumentosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (2 nodes): `AgendamentoMongoRepository`, `AgendamentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (1 nodes): `AnalyticsService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (2 nodes): `UserMongoRepository`, `UserRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `AuthService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (1 nodes): `IaClinicaService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (1 nodes): `PacienteCryptoService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (1 nodes): `AgendamentosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (1 nodes): `AnalyticsController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (1 nodes): `SuperAdminService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (1 nodes): `PsicologiaFinanceiroService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (2 nodes): `ClinicaMongoRepository`, `ClinicaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (2 nodes): `DocumentoMongoRepository`, `DocumentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (2 nodes): `SalaTelemedicinaMongoRepository`, `SalaTelemedicinaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `PacientesController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `ProntuariosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `SuperAdminController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `FinanceiroService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (2 nodes): `LancamentoMongoRepository`, `LancamentoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `TelemedicinaController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (2 nodes): `DocumentStorage`, `S3DocumentStorageService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `NotificacoesService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `AuthController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `FinanceiroController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `DocumentosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (1 nodes): `PsicologiaFinanceiroController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (2 nodes): `ConfigPsicologoMongoRepository`, `ConfigPsicologoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (2 nodes): `DecisaoUsoIaMongoRepository`, `DecisaoUsoIaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (2 nodes): `ObservacaoPacienteMongoRepository`, `ObservacaoPacienteRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (2 nodes): `RegistroUsoIaMongoRepository`, `RegistroUsoIaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (2 nodes): `SalaEventoMongoRepository`, `SalaEventoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (2 nodes): `SinalSalaMongoRepository`, `SinalSalaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (2 nodes): `TestePsicologicoMongoRepository`, `TestePsicologicoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (1 nodes): `TelemedicinaAcessoController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (1 nodes): `LoginRateLimiterService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `TenantContextService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 81`** (2 nodes): `NestMiddleware`, `TenantMiddleware`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 84`** (1 nodes): `IaUsoCryptoService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 89`** (1 nodes): `IaClinicaController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 90`** (1 nodes): `NotificacoesController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 92`** (2 nodes): `CanActivate`, `TenantRequiredGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 93`** (2 nodes): `context`, `TERMOS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 94`** (1 nodes): `NotificacaoWindowService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 95`** (2 nodes): `AuthModule`, `OnApplicationShutdown`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (2 nodes): `GateAvaliavel`, `gatePendente()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 101`** (2 nodes): `clearUser`, `gatedUser`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 102`** (2 nodes): `CanActivate`, `RolesGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 103`** (2 nodes): `HealthIndicator`, `RedisHealthIndicator`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (2 nodes): `AuditLogMongoRepository`, `AuditLogRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 112`** (1 nodes): `ObservacoesPacienteController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 113`** (1 nodes): `TestesPsicologicosController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 114`** (2 nodes): `NotificacaoTemplateService`, `TEMPLATES`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 115`** (1 nodes): `ObservacoesPacienteService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (2 nodes): `basePaciente`, `context`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 117`** (1 nodes): `TestesPsicologicosService`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 122`** (2 nodes): `AuthGatesGuard`, `CanActivate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 123`** (2 nodes): `CanActivate`, `SuperAdminGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 124`** (1 nodes): `HealthController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 125`** (2 nodes): `BaseExceptionFilter`, `InvalidObjectIdFilter`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 126`** (1 nodes): `AnthropicClient`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 138`** (1 nodes): `ClinicasController`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 139`** (2 nodes): `bcrypt`, `require`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 142`** (2 nodes): `NestModule`, `TenancyModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 143`** (1 nodes): `context`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 144`** (1 nodes): `agendamentosServiceStub`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 145`** (1 nodes): `BootstrapAdminModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 146`** (2 nodes): `DecisaoUsoIA`, `TipoUsoIA`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 147`** (2 nodes): `SinalSala`, `TipoSinal`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 148`** (1 nodes): `CreateProntuarioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 149`** (2 nodes): `EVENTOS_REPORTAVEIS`, `RegistrarEventoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 150`** (2 nodes): `CONFIG_PSICOLOGO_REPOSITORY`, `LANCAMENTO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 151`** (1 nodes): `JwtStrategy`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 152`** (2 nodes): `GlobalThrottlerGuard`, `ThrottlerGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 153`** (2 nodes): `versaoMatch`, `vigenciaMatch`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 154`** (2 nodes): `CAMPOS_IMUTAVEIS`, `OPS_BLOQUEADAS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 155`** (2 nodes): `CAMPOS_IMUTAVEIS`, `OPS_BLOQUEADAS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 156`** (2 nodes): `CAMPOS_IMUTAVEIS`, `OPS_BLOQUEADAS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 158`** (2 nodes): `AuditLogRepository`, `CreateAuditLogInput`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 159`** (2 nodes): `CreateSalaEventoInput`, `SalaEventoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 160`** (2 nodes): `CreateSinalInput`, `SinalSalaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 161`** (2 nodes): `CID10_REPOSITORY`, `PRONTUARIO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 162`** (1 nodes): `dryRun`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 163`** (1 nodes): `totpCode`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 164`** (1 nodes): `AGENDAMENTO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 165`** (1 nodes): `AgendamentosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 166`** (1 nodes): `AnalyticsModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 167`** (1 nodes): `CLINICA_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 168`** (1 nodes): `ClinicasModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 171`** (1 nodes): `DOCUMENTO_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 172`** (1 nodes): `DocumentosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 174`** (1 nodes): `AuditEvent`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 175`** (1 nodes): `DecisaoUsoIa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 176`** (1 nodes): `ObservacaoPaciente`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 177`** (1 nodes): `RegistroUsoIa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 178`** (1 nodes): `TestePsicologico`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 179`** (1 nodes): `CancelAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 180`** (1 nodes): `Cid10QueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 181`** (1 nodes): `CobrarCicloDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 182`** (1 nodes): `ConsentimentoLGpdDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 183`** (1 nodes): `ConvenioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 184`** (1 nodes): `CreateAddendumDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 185`** (1 nodes): `CreateAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 186`** (1 nodes): `CreateBloqueioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 187`** (1 nodes): `CreateLancamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 188`** (1 nodes): `CreateNotificacaoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 189`** (1 nodes): `CreateObservacaoPacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 190`** (1 nodes): `CreatePacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 191`** (1 nodes): `CreateSalaDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 192`** (1 nodes): `CreateTestePsicologicoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 193`** (1 nodes): `CreateUploadUrlDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 194`** (1 nodes): `DashboardNotificacoesQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 195`** (1 nodes): `EnderecoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 196`** (1 nodes): `EnviarSinalDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 197`** (1 nodes): `FinancialDashboardQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 198`** (1 nodes): `GerarPrescricaoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 199`** (1 nodes): `ListAgendamentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 200`** (1 nodes): `ListBloqueiosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 201`** (1 nodes): `ListDocumentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 202`** (1 nodes): `ListLancamentosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 203`** (1 nodes): `ListPacientesQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 204`** (1 nodes): `ListProntuariosQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 205`** (1 nodes): `ListSalasQueryDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 206`** (1 nodes): `LoginDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 207`** (1 nodes): `ReceiveLancamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 208`** (1 nodes): `RegisterUserDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 209`** (1 nodes): `RegistrarDecisaoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 210`** (1 nodes): `SalvarConfigPsicologoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 211`** (1 nodes): `SugerirAbordagemDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 212`** (1 nodes): `UpdateAgendamentoDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 213`** (1 nodes): `UpdateClinicaDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 214`** (1 nodes): `UpdateObservacoesPacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 215`** (1 nodes): `UpdateOptOutDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 216`** (1 nodes): `UpdatePacienteDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 217`** (1 nodes): `UpdateProntuarioDto`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 218`** (1 nodes): `FinanceiroModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 219`** (1 nodes): `JwtAuthGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 220`** (1 nodes): `HealthModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 222`** (1 nodes): `IaClinicaModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 223`** (1 nodes): `NotificacoesModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 224`** (1 nodes): `ObservacoesPacienteModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 225`** (1 nodes): `PACIENTE_REPOSITORY`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 226`** (1 nodes): `PacientesModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 227`** (1 nodes): `ConfigPsicologoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 228`** (1 nodes): `DecisaoUsoIaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 229`** (1 nodes): `ObservacaoPacienteRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 230`** (1 nodes): `RegistroUsoIaRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 231`** (1 nodes): `TestePsicologicoRepository`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 232`** (1 nodes): `ProntuariosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 233`** (1 nodes): `notificacaoQueueProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 234`** (1 nodes): `redisProvider`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 236`** (1 nodes): `code`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 237`** (1 nodes): `SecurityModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 238`** (1 nodes): `AppModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 239`** (1 nodes): `SuperAdminModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 240`** (1 nodes): `TelemedicinaModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 241`** (1 nodes): `TestesPsicologicosModule`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 242`** (1 nodes): `apiProxy`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 251`** (1 nodes): `ThrottlerGuard`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `TelemedicinaService` connect `Community 14` to `Community 13`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `PacientesService` connect `Community 20` to `Community 13`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `AppModule`, `BootstrapAdminOptions`, `BootstrapAdminModule` to the rest of the system?**
  _481 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.03643480879253237 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.0700354609929078 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.13526570048309178 - nodes in this community are weakly interconnected._