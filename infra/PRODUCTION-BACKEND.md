# Nuvita Psi — Guia de execução para produção (backend)

Passo a passo dos achados de `AUDITORIA-2026-08-08.md`. Cada seção diz o que
já está **resolvido no código** e o que ainda **depende de execução na nuvem**
— a divisão importa, porque nenhuma quantidade de código conserta um secret que
não existe no GitHub.

Complementa (não substitui) `PRODUCTION-CHECKLIST.md`, que tem o inventário de
segredos, DNS e domínio. Aqui é a ordem de execução e a verificação.

| Achado | O que é | Estado |
|---|---|---|
| C1 | Secrets do CI ausentes | ⏳ **Você executa** — seções 1 e 2 |
| C2 | Sem rate limiting global | ✅ Código — seção 6 |
| C3 | Vulnerabilidades de dependência | 🟡 Parcial — seção 9 |
| C4 | Redis fora do health check | ✅ Código — seção 4 (+ HA na seção 8) |
| M1 | Segredos sem validação de força | ✅ Código — seção 3 |
| M2 | Extração de IP atrás do LB | ⏳ **Medir no 1º deploy** — seção 7 |
| M3 | `autoIndex` ligado em produção | ✅ Código — seção 5 |
| M4 | Sem `enableShutdownHooks` | ✅ Código — seção 5 |
| M5 | Rate limiter de login fail-open | ✅ Por decisão — alerta na seção 8 |
| M6 | Chave da Anthropic comprometida | ⏳ **Você executa** — seção 2 |

---

## 1. Secrets do CI — o bloqueio real (C1)

100% dos deploys falharam desde 2026-08-07 porque `gh secret list` está vazio.
O produto existe só em dev local e no repositório.

Em **Settings > Secrets and variables > Actions** do repo `nuvita-psi`:

| Secret | Valor | Usado por |
|---|---|---|
| `GCP_PROJECT_ID` | `nuvita-499800` | `deploy-api.yml` |
| `GCP_WIF_PROVIDER` | `projects/<num>/locations/global/workloadIdentityPools/<pool>/providers/<prov>` | `deploy-api.yml` |
| `GCP_SA_EMAIL` | SA de deploy (ver checklist item 2) | `deploy-api.yml` |
| `CLOUDRUN_ENV_YAML` | saída de `node scripts/gen-cloudrun-env.cjs` | `deploy-api.yml` |
| `VITE_API_URL` | `https://api-psi.nuvita.app.br` | `deploy-pages.yml` |

O inventário de quais segredos entram no `cloudrun.env.yaml` está no
`PRODUCTION-CHECKLIST.md`, item 1. **Gere segredos próprios do nuvita-psi** —
não reaproveite os do Nuvita original, mesmo compartilhando o projeto GCP.

### Antes de colar o `CLOUDRUN_ENV_YAML`, valide localmente

Desde a seção 3, um segredo fraco impede o boot. Sem pré-checagem, isso só
apareceria no log do Cloud Run — depois do build da imagem e do deploy, que é
justamente quando você não sabe se o erro é seu ou da infra:

```bash
npm run build --workspace=apps/api     # o check valida contra o código compilado
node scripts/gen-cloudrun-env.cjs
npm run check:cloudrun-env             # exit 0 = a API sobe com esse arquivo
```

O script roda o **mesmo `AppConfigService.initialize()`** que a API roda ao
subir — não reimplementa as regras de validação. Se reimplementasse, as duas
cópias divergiriam na primeira vez que alguém mexesse numa delas, e o script
passaria a mentir exatamente quando você mais depende dele.

Verificação:

```bash
gh secret list --repo ericolimaeducador-ux/nuvita-psi   # 5 linhas
gh workflow run deploy-api.yml --repo ericolimaeducador-ux/nuvita-psi
gh run watch --repo ericolimaeducador-ux/nuvita-psi
```

---

## 2. Rotação da chave da Anthropic (M6)

A `ANTHROPIC_API_KEY` em uso foi compartilhada em conversa de chat. Ela **nunca
foi commitada** (`apps/api/.env` é gitignored, verificado no histórico inteiro),
mas uma chave que passou por canal não confiável é uma chave comprometida.

1. Revogar e gerar outra no console da Anthropic.
2. Cadastrar a nova **só** no Secret Manager (`anthropic-api-key`), nunca no CI
   nem no `.env` de qualquer máquina compartilhada.
3. Conferir consumo residual da chave antiga no console antes de revogar — se
   houver chamada que você não reconhece, isso vira incidente, não rotação.

O boot agora rejeita a chave placeholder do `.env.example` em produção (seção 3),
mas ele **não tem como saber** que uma chave válida vazou. Este passo é manual.

---

## 3. Fail-fast de segredos fracos (M1) — ✅ implementado

`common/security/config-validation.ts`, chamado por `AppConfigService.validate()`.
Em `production`/`staging` o processo **não sobe** se:

- `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `PRONTUARIO_SIGNATURE_SECRET` ou
  `BOOTSTRAP_SECRET` tiverem menos de 32 caracteres;
- qualquer segredo estiver com o valor literal do `.env.example`
  (era possível subir com `change-me-access-secret-min-32-chars` — 36 caracteres,
  passava em qualquer teste de tamanho);
- `JWT_ACCESS_SECRET` for igual ao `JWT_REFRESH_SECRET`.

Fora de produção nada é validado, senão copiar o `.env.example` deixaria de
funcionar como primeiro passo de quem clona o repo.

`ALLOW_PUBLIC_REGISTRATION=true` em produção gera **aviso**, não erro: só fica
ligado com a variável explícita, ou seja, alguém já decidiu — o valor é o rastro
no log.

Gerar segredos: `openssl rand -base64 48` ou
`node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`.

---

## 4. Redis no health check (C4) — ✅ implementado

`modules/health/redis.health.ts`. O `/health` agora falha quando o Redis cai.

Por que era crítico: `AuthService.validateAccessToken` consulta
`TokenRevocationService.isRevoked` a **cada requisição autenticada**, e esse
serviço é fail-closed de propósito (na dúvida, nega). Redis fora ⇒ API inteira
inutilizável para usuário logado — enquanto o `/health` respondia 200 e o Cloud
Run mantinha tráfego numa instância que não servia ninguém.

O PING corre contra um timeout de 2s: health check que trava é tão ruim quanto
health check que mente.

Configure o probe para agir sobre isso (sem isso o check só enfeita o log):

```bash
gcloud run services update nuvita-psi-api \
  --project nuvita-499800 --region southamerica-east1 \
  --liveness-probe httpGet.path=/health,initialDelaySeconds=15,periodSeconds=30,failureThreshold=3
```

Verificação — derrube o Redis local e confirme que o `/health` responde 503:

```bash
docker compose stop redis && curl -i localhost:3000/health   # 503 + "redis":"down"
docker compose start redis && curl -i localhost:3000/health   # 200
```

---

## 5. Ciclo de vida da instância (M3, M4) — ✅ implementado

**`autoIndex` desligado fora de dev** (`app.module.ts`). O default do Mongoose é
`true` inclusive em produção: toda subida tentava construir todos os índices dos
schemas. Inofensivo com as collections de hoje; com `pacientes`/`prontuarios`
grandes, estoura o timeout de startup do Cloud Run e derruba o deploy.

⚠️ **Consequência operacional:** índice novo não nasce mais sozinho em produção.
Ao adicionar um índice num schema, crie-o explicitamente:

```js
db.pacientes.createIndex({ campoNovo: 1 }, { background: true })
```

**Shutdown gracioso** (`main.ts` + `AuthModule.onApplicationShutdown`). O Cloud
Run manda SIGTERM e espera ~10s antes do SIGKILL. Sem os hooks, requisição em
voo era cortada no meio e as conexões não fechavam limpas — erro no cliente a
cada deploy/scale-down e conexão órfã acumulando no Atlas.

O `redisProvider` é um `useFactory` que devolve um `new Redis(...)` cru, e
provider de fábrica não tem ciclo de vida próprio no Nest: o `quit()` precisou
ser pendurado no módulo à mão. **Se algum dia outro recurso externo entrar por
`useFactory`, ele precisa do mesmo tratamento** — não é automático.

---

## 6. Rate limiting global (C2) — ✅ implementado

Antes: `ThrottlerModule.forRoot()` registrado, mas **sem `APP_GUARD`**. O limite
só valia em dois controllers que declaravam o guard à mão. Todo o resto rodava
sem limite — inclusive `telemedicina/acesso`, público e sem autenticação.

Agora `GlobalThrottlerGuard` (`common/http/global-throttler.guard.ts`) é
`APP_GUARD`. Teto padrão **300 req/min por IP**; rotas sensíveis apertam:

| Rota | Limite/min | Por quê |
|---|---|---|
| `POST /auth/register` | 5 | anti brute-force |
| `POST /auth/login` | 10 | anti brute-force de senha/TOTP |
| `POST /ia-clinica/*` | 10 | chamada paga a provedor externo |
| `GET /telemedicina/acesso/:token` | 20 | uma vez por abertura de link |
| `POST .../entrar` | 20 | uma vez por sessão + reentradas |
| `POST .../sinais` | 120 | rajada de sinalização WebRTC |
| `GET .../sinais` | 150 | **polling**: `SalaVideo.tsx` a cada 1200ms = 50/min por participante; 3x de margem |
| `POST .../eventos` | 30 | poucos por atendimento |
| `GET /health` | — | `@SkipThrottle`: 429 no probe = instância derrubada |

O tracker é `extractClientIp` (última entrada de `X-Forwarded-For`) e não o
`req.ip` cru — ver seção 7.

Os 300/min do padrão são deliberadamente altos: o limite é **por IP**, e uma
clínica inteira atrás de um NAT compartilha o bucket. Apertar isso sem antes
resolver a seção 7 tranca usuário legítimo.

⚠️ **Limitação conhecida:** o storage do `@nestjs/throttler` é em memória, então
o limite vale **por instância** do Cloud Run — com N instâncias o teto efetivo é
N × limite. Isso protege a CPU de cada instância (que é o risco do polling), mas
não é um limite global. Para limite global, plugar storage no Redis
(`@nest-lab/throttler-storage-redis`) — não foi feito porque adiciona
dependência e acopla o throttling à disponibilidade do Redis, o que merece
decisão explícita.

### Nota sobre o modelo de ameaça de `telemedicina/acesso`

Os tokens são UUIDv4 (122 bits de entropia): enumeração por força bruta é
inviável. O risco nessas rotas é **abuso de recurso** (CPU, custo de Cloud Run,
crescimento indefinido das collections de sinais/eventos), não acesso indevido
à sala. Os limites acima são dimensionados para isso.

---

## 7. Verificar a extração de IP no primeiro deploy (M2) — ⏳ pendente

`common/http/client-ip.ts` usa a **última** entrada de `X-Forwarded-For`, com o
argumento correto de que a primeira é controlada pelo cliente.

Atrás de um **Application Load Balancer do GCP** o formato é
`<ip-do-cliente>, <ip-da-forwarding-rule>` — a última entrada é o balanceador,
**constante para todos os usuários**. Se for esse o caso, todo o rate limiting
(agora global, portanto toda a API) passa a compartilhar um único bucket: ou
trava todo mundo, ou não trava ninguém.

Isso **depende da topologia real** e não dá para determinar sem medir. Cloud Run
direto e Cloud Run atrás de LB se comportam de forma diferente.

**Como medir**, logo após o primeiro deploy:

```bash
gcloud logging read \
  'resource.labels.service_name="nuvita-psi-api" AND httpRequest.requestUrl:"/auth/login"' \
  --project nuvita-499800 --limit 20 \
  --format='value(httpRequest.remoteIp, jsonPayload.ip)'
```

Acesse de duas redes diferentes (ex.: casa e 4G do celular) e compare:

- **IPs diferentes** ⇒ está correto, nada a fazer.
- **IP idêntico** ⇒ é o balanceador. Corrija trocando a heurística por
  "n-ésima entrada a partir do fim", com N = número de proxies confiáveis, ou
  passe a confiar no header `X-Envoy-External-Address` que o Cloud Run popula.
  **Não** volte para a primeira entrada: ela é falsificável pelo cliente.

Enquanto isso não for medido, trate os limites da seção 6 como não verificados.

---

## 8. Redis em HA e alertas (C4, M5)

O Redis é ponto único de falha da autenticação — a seção 4 fez o health check
contar a verdade, mas não removeu a dependência.

**Memorystore com réplica:**

```bash
gcloud redis instances create nuvita-psi-cache \
  --project nuvita-499800 --region southamerica-east1 \
  --tier standard --size 1 --redis-version redis_7_0 \
  --replica-count 1 --read-replicas-mode READ_REPLICAS_ENABLED
```

`--tier standard` é o que dá failover automático; `basic` é instância única e
não resolve nada aqui.

**Alertas** (Cloud Monitoring):

1. **`/health` em 503** — uptime check no endpoint. É o sinal de que Mongo ou
   Redis caiu; só passou a ser confiável depois da seção 4.
2. **Log do rate limiter de login fail-open** — `LoginRateLimiterService` captura
   falha do Redis e **segue em frente** (`login-rate-limiter.service.ts:23`),
   com log de warning. É um tradeoff deliberado e documentado (disponibilidade
   acima de proteção), mas significa que uma queda de Redis remove
   silenciosamente a proteção contra força bruta de senha e TOTP. Alerte sobre
   esse log específico:

   ```
   resource.type="cloud_run_revision"
   resource.labels.service_name="nuvita-psi-api"
   severity="WARNING"
   textPayload:"rate limiter"
   ```

   **Não mude o comportamento para fail-closed sem decisão de produto**: isso
   transformaria uma queda de Redis em "ninguém consegue logar".

---

## 9. Gate de vulnerabilidades no CI (C3) — 🟡 parcial

**Feito:** `ci.yml` roda `npm audit --omit=dev --audit-level=critical`.
`--omit=dev` porque o que interessa é o que vai para o container, não o
ferramental de build.

**Resolvido nesta rodada** (33 → 28 vulnerabilidades, **1 crítica → 0**):

- `bcrypt` 5.1.1 → **6.0.0** — a versão 6 abandonou `@mapbox/node-pre-gyp`
  (e com ele o `tar`, origem da única crítica) em favor de `node-gyp-build`.
  A API é idêntica e o formato de hash continua `$2b$`, então **as senhas
  existentes seguem validando** — verificado, não presumido.
- `sharp` 0.33.5 → **0.35.3** — corrige CVEs herdadas do libvips. Vale mais que
  as outras porque o `sharp` processa **documento enviado por usuário**
  (`s3-document-storage.service.ts:81`), ou seja, é superfície real.
- `postcss` → 8.5.26 e overrides de `brace-expansion` / `nanoid` no
  `package.json` da raiz.

**Restam 5 highs, todas presas na migração Nest 10 → 11:**

| Pacote | Chega por | Natureza |
|---|---|---|
| `multer` | `@nestjs/platform-express` | DoS no upload |
| `js-yaml`, `lodash` | `@nestjs/swagger` | prototype pollution / DoS |
| `postcss` (aninhado) | `@tailwindcss/postcss` | build-time apenas |

O gate ficou em `critical` e não em `high` de propósito: com 5 highs sem
correção disponível, `high` deixaria o CI **permanentemente vermelho**, e um
gate que está sempre vermelho é um gate que todo mundo aprende a ignorar.

**Aperte para `--audit-level=high` no mesmo PR da migração Nest 11** — essa
migração é trabalho próprio (breaking changes em toda a stack `@nestjs/*`), não
cabia dentro de um ciclo de hardening.

Enquanto isso, o `multer` merece atenção específica: as CVEs são de DoS por
upload malformado, e o endpoint de documentos aceita arquivo de usuário
autenticado. O rate limiting da seção 6 reduz a exposição, mas não elimina.

---

## Ordem de execução

1. **Seção 1** — sem os secrets, nada vai ao ar.
2. **Seção 2** — rotacionar a chave da Anthropic antes de o serviço subir.
3. **Seção 4 (probe) e 8 (Memorystore HA)** — antes de usuário real tocar o sistema.
4. **Seção 7** — medir no primeiro deploy, com tráfego real; sem isso os limites
   da seção 6 são teoria.
5. **Seção 9** — migração Nest 11 num ciclo próprio.

As seções 3, 5 e 6 já estão no código e sobem junto com o próximo deploy.
