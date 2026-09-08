# Pendências do projeto

Itens conhecidos, fora do escopo da tarefa em que foram achados, que não podem
cair no esquecimento. Complementa `infra/DEPENDENCIAS-PENDENTES.md` (esse é só
para dívida de dependências / CVEs).

---

## 1. `audit-log.schema.ts` — falta 1 dos 6 pre-hooks de imutabilidade

**Achado:** durante a Fase 4 de `feature-ai-usage-audit-trail` (2026-09-06).

`apps/api/src/modules/auth/infrastructure/mongo/audit-log.schema.ts` registra
pre-hooks de imutabilidade só para `updateOne`, `findOneAndUpdate`,
`updateMany`, `deleteOne`, `deleteMany` — **falta `pre('findOneAndDelete')`**.

O padrão completo de 6 hooks é o usado em `observacoes-paciente`,
`testes-psicologicos` e agora `registros_uso_ia` / `decisoes_uso_ia`. `audit_logs`
é a coleção de trilha de auditoria mais crítica do sistema e é a única com essa
lacuna: hoje um `Model.findOneAndDelete()` direto contra `audit_logs` não seria
bloqueado pelo schema.

**Fix:** mecânico — 1 linha, mesmo padrão dos outros 5 hooks
(`AuditLogSchema.pre('findOneAndDelete', rejectAuditLogMutation)`). Mesma
categoria do achado anterior em `testes-psicologicos`, mas no módulo que
deveria ser o mais protegido de todos.

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
