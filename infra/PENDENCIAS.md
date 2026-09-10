# Pendências do projeto

Itens conhecidos, fora do escopo da tarefa em que foram achados, que não podem
cair no esquecimento. Complementa `infra/DEPENDENCIAS-PENDENTES.md` (esse é só
para dívida de dependências / CVEs).

---

## 1. `audit-log.schema.ts` — falta 1 dos 6 pre-hooks de imutabilidade

**Achado:** durante a Fase 4 de `feature-ai-usage-audit-trail` (2026-09-06).

**FECHADO** — branch `fix/audit-log-immutability-gap`, 2026-09-08.

`apps/api/src/modules/auth/infrastructure/mongo/audit-log.schema.ts` registrava
pre-hooks de imutabilidade só para `updateOne`, `findOneAndUpdate`,
`updateMany`, `deleteOne`, `deleteMany` — faltava `pre('findOneAndDelete')`.
Um `Model.findOneAndDelete()` direto contra `audit_logs` não era bloqueado.

- Adicionado `AuditLogSchema.pre('findOneAndDelete', rejectAuditLogMutation)`
  (mesmo `rejectAuditLogMutation` e mensagem dos outros 5). Agora 6 hooks,
  igual a `observacoes-paciente`, `testes-psicologicos`, `registros_uso_ia` e
  `decisoes_uso_ia`.
- Criado `audit-log.schema.spec.ts` (formato no-DB de
  `registro-uso-ia.schema.spec.ts` / `decisao-uso-ia.schema.spec.ts` —
  inspeção via API interna do Mongoose, sem `mongodb-memory-server`),
  cobrindo os 6 hooks, imutabilidade dos campos, default do timestamp e o
  índice de tenant. Era o schema mais crítico do sistema e o único sem
  nenhum teste. Não fecha o item 4 (segue sem camada de banco), mas dá
  regressão de definição a este schema.

---

## 2. Confirmação antes de assinar prontuário / cancelar agendamento + fallback de segredo entre domínios

**FEITO** — branch `fix/confirmacoes-e-fallback-secrets` (a partir de
`hardening/aplica-auditoria-2026-08-08`), 2026-09-07. 4 commits.

**Portão de revisão: APROVADO** (2026-09-08) — Dev1/Dev2/Dev3 + Conselho de
Design, todos [Aprovado]. Não bloqueia a branch. Pendência antes de produção:
`PATIENT_DATA_HASH_KEY` provisionada em todo `.env` local + Secret Manager de
produção antes do 1º deploy.

- **`6912a0d` — `apps/web/src/components/ProntuarioDialogs.tsx`**: botão
  "Assinar prontuário" agora abre Dialog de confirmação (ação irreversível).
- **`6d8735a` — `apps/web/src/pages/AgendaPage.tsx`**: botão "Cancelar" agora
  abre Dialog de confirmação (resumo com paciente + data/hora).
- **`a86a783` — `prontuarios.service.ts`**: removido `?? jwtAccessSecret` de
  `prontuarioSignatureSecret` (era código morto — o segredo já é obrigatório e
  fail-fast em todo ambiente).
- **`fix(secrets)` — `paciente-crypto.service.ts` + `config.service.ts` +
  `config-validation.ts` + `.env.example` + `scripts/init-gcp-secrets.mjs`**:
  removido `?? patientDataEncryptionKey` de `patientDataHashKey`;
  `PATIENT_DATA_HASH_KEY` agora é obrigatório (tipo, `requiredVars` do loader
  `.env`, `getSecretOrThrow` no loader GCP, `optional: true` removido do
  `init-gcp-secrets`). Momento escolhido: antes do 1º deploy — sem migração
  de `cpfHash`.

### ⚠️ Breaking change de configuração local (commit `fix(secrets)`)

`PATIENT_DATA_HASH_KEY` deixou de ser opcional. **Todo dev precisa rodar o
setup de env de novo após este commit**: gerar um valor de 32 bytes
*distinto* de `PATIENT_DATA_ENCRYPTION_KEY` e adicioná-lo ao próprio
`apps/api/.env` — sem ele a API não sobe (`Missing required environment
variables: PATIENT_DATA_HASH_KEY`). Gere com
`node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`.

### Teste pré-existente ajustado (autorizado pelo usuário)

`apps/api/src/common/security/config-validation.spec.ts` — o `configValida()`
foi ajustado no commit `fix(secrets)` para montar um `AppConfig` válido com
`patientDataHashKey`. O caso `it('ignora segredo opcional ausente')` foi
renomeado para `it('ignora anthropicApiKey ausente')` (rename só do título,
sem reescrita), já que `anthropicApiKey` é o único segredo opcional coberto
por ele. Rename autorizado explicitamente pelo usuário (exceção à regra
`persisted-tester`), commit `test(config)` separado.

Não passou pelo gate de feature (`all-for-harness.md`) — correção de
comportamento existente, sem schema/endpoint/domínio novo.

---

## 3. `nest-conventions.md` ponto 6 (`class` vs `interface`) diverge da prática

A regra pede objetos de domínio como `class`; ~15 módulos existentes usam
`interface` para entities e ports. `feature-ai-usage-audit-trail` seguiu a
prática existente (`interface`) por consistência de leitura. Decisão separada:
atualizar a regra para bater com a prática, ou migrar os módulos de propósito.
(Também em `my_docs/tdd-feature-ai-usage-audit-trail.md` §14, linha 7.)

---

## 5. Segredo obrigatório: `?` no tipo vs. obrigatório só no loader

Dois commits aprovados separadamente trataram "segredo obrigatório" de formas
opostas em `apps/api/src/common/security/config.service.ts` (`interface
AppConfig`):

- `iaUsoEncryptionKey?: string` — opcional no tipo, presença exigida só no
  loader (`requiredVars` / `getSecretOrThrow`). A feature de IA fez assim para
  não editar o spec protegido (`config-validation.spec.ts`, regra
  `persisted-tester`).
- `patientDataHashKey: string` — obrigatório no próprio tipo; o `fix(secrets)`
  foi na direção oposta e editou o spec (com autorização explícita do usuário).

Não é bug: a obrigatoriedade real está no loader nos dois casos. É divergência
de estilo. Decisão separada: padronizar num dos dois padrões (tipo sempre
reflete a obrigatoriedade, ou tipo sempre opcional + loader como única
autoridade) e alinhar os campos existentes. Achado ao resolver o conflito de
rebase da branch `fix/confirmacoes-e-fallback-secrets` sobre a feature de IA
(2026-09-08).

---

## 4. Rigor de teste de schema/repositório (projeto inteiro)

A suíte `apps/api` não tem camada de banco (real nem in-memory). Hooks de
imutabilidade e índices únicos são confiados por inspeção em todos os módulos
(`audit_logs`, `observacoes_paciente`, `registros_uso_ia`, ...). Introduzir um
MongoDB in-memory é decisão de infraestrutura de CI, item próprio e bancado —
não encaixar de lado numa feature. (Também em `my_docs/tdd-feature-ai-usage-audit-trail.md`
§14, linha 6.)

---

## 6. Credenciais do R2 (`nuvita-psi-documentos`) expostas em conversa de IA

**Achado:** durante o provisionamento do 1º deploy do nuvita-psi (2026-09-08).

`DOCUMENT_STORAGE_ACCESS_KEY_ID` e `DOCUMENT_STORAGE_SECRET_ACCESS_KEY` do
bucket R2 `nuvita-psi-documentos` passaram pelo chat do usuário com Claude.ai
antes de serem aplicadas ao `apps/api/.env.production` — decisão consciente do
usuário, não seguiu o mesmo protocolo "gerar/colar só na máquina" das outras
chaves desta sessão.

**Baixa urgência, não bloqueante.** É rastro de decisão: uma credencial que
passou por canal de IA deve ser tratada como potencialmente comprometida.
Considerar rotação futura no console do Cloudflare R2 — mesmo padrão do achado
M6 (`ANTHROPIC_API_KEY`) em `PRODUCTION-BACKEND.md §2`.

---

## 7. `nuvita-psi-builder@` órfã após migração pra build no runner

**Achado:** ao migrar o `deploy-api.yml` pra Opção C (2026-09-08).

Criada na Parte B do C1 pro `--build-service-account` do caminho
`gcloud run deploy --source` / Cloud Build. A Opção C passou a buildar a
imagem no runner do GitHub Actions (`docker build` + push pro Artifact
Registry) e removeu o Cloud Build do desenho, então a SA
`nuvita-psi-builder@nuvita-499800.iam.gserviceaccount.com` ficou sem uso:

- `roles/run.builder` no projeto — sem referência.
- binding `roles/iam.serviceAccountUser` que `nuvita-psi-deployer@` tinha
  nela — sem uso.

**Não bloqueante.** Decidir: deletar a SA + o binding, ou manter caso um dia
se volte pro `--source`/Cloud Build. Nada mais no projeto depende dela.

---

## 8. Import não usado em `agendamentos.service.ts` (lint quebra em `main`)

**Achado:** durante a Fase 2b de `feature/clinic-onboarding-and-auth-gates`
(2026-09-10), ao rodar `npm run lint` na branch.

`apps/api/src/modules/agendamentos/application/agendamentos.service.ts:9`
importa `TipoAgendamento` de `../domain/agendamento.entity` mas não usa —
`@typescript-eslint/no-unused-vars` faz `npm run lint` (workspace `api`) sair
com erro. Presente em `main` desde o commit `471d67c`
(`wip(papel): remove Papel.MEDICO do backend/shared/telas principais`), não é
regressão da branch de auth.

**Trivial, não bloqueante.** Remover `TipoAgendamento` da linha de import (ou
prefixar `_` se for mantido de propósito). Registrado aqui porque a branch de
auth achou mas não é dona do arquivo — disciplina de não tocar código de outro
escopo sem pedido.

---

## 9. `apps/web` não tem runner de teste

**Achado:** durante a Fase 4 de `feature/clinic-onboarding-and-auth-gates`
(2026-09-10).

O `apps/web` não tem Vitest, Jest, `@testing-library` nem equivalente — os
scripts são só `dev`, `build`, `preview`, `typecheck`, `lint` (`lint` é alias
de `tsc --noEmit`). Nenhum `.spec`/`.test` em todo o `apps/web`.

Nas Fases 4 e 9–12 desta feature (frontend) o ciclo Red/Green foi feito **a
nível de build**: Red = `typecheck`/`build` falha por import/componente
ausente; Green = `typecheck` + `build` passam. Lógica pura testável (predicado
de gate, versão do termo) fica coberta pelos testes Jest do
backend/`packages/shared`, não duplicada no front.

**Mesmo padrão de decisão já usado 2x** na feature `feature-ai-usage-audit-trail`:
"sem teste de controller" (Fase 8) e "sem `mongodb-memory-server`" (item 5
acima) — não introduzir a primeira peça de infra de teste do repositório no
meio de uma feature de produto.

**Não bloqueante.** Avaliar como item próprio (qual runner, convenção de teste,
cobertura mínima esperada) quando o volume de UI justificar.
