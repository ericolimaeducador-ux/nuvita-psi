// Texto integral dos Termos de Uso do Nuvita Psi.
//
// O arquivo `termos-de-uso.md` ao lado é uma CÓPIA de `docs/legal/termos-de-uso.md`
// (fonte única), feita pelo script `apps/web/scripts/copy-legal.mjs` antes do
// build e do dev server. É gitignored — não editar aqui, editar em docs/legal/.
// Ver Fase 4 do TDD (my_docs/tdd-clinic-onboarding-and-auth-gates.md).
import termosDeUsoTexto from './termos-de-uso.md?raw';

/**
 * Versão vigente, extraída do cabeçalho `**Versão:** X` do próprio texto — o
 * .md é a fonte da verdade. O prebuild (`copy-legal.mjs`) garante que esse
 * cabeçalho bate com `TERMOS_DE_USO_VERSAO_ATUAL` de `packages/shared/src/termos`
 * (usado pela API); se divergirem, o build do web falha.
 */
const versaoMatch = termosDeUsoTexto.match(/\*\*Versão:\*\*\s*(\S+)/);
const vigenciaMatch = termosDeUsoTexto.match(/\*\*Data de publica[çc][ãa]o[^:]*:\*\*\s*(.+)/);

export const TERMOS_DE_USO_VERSAO_ATUAL: string = versaoMatch?.[1] ?? '';
export const TERMOS_DE_USO_VIGENCIA: string = vigenciaMatch?.[1]?.trim() ?? '';

export { termosDeUsoTexto };
