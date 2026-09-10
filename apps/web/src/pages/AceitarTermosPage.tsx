import { useState } from 'react';
import { useAuth } from '@/auth/AuthContext';
import { authApi } from '@/api/resources';
import { apiErrorMessage } from '@/api/client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';
import {
  termosDeUsoTexto,
  TERMOS_DE_USO_VERSAO_ATUAL,
  TERMOS_DE_USO_VIGENCIA,
} from '@/legal/termos';

/**
 * Gate de aceite dos Termos de Uso (feature-terms-of-service-acceptance).
 * Mostra o texto integral da versão vigente; o aceite exige uma ação
 * explícita (checkbox não pré-marcado). Ao aceitar, o usuário local é
 * atualizado e a GateChain re-avalia (próximo gate ou app).
 */
export function AceitarTermosPage() {
  const { atualizarUsuario, logout } = useAuth();
  const [aceito, setAceito] = useState(false);
  const [enviando, setEnviando] = useState(false);

  async function confirmar() {
    setEnviando(true);
    try {
      const { user } = await authApi.aceitarTermos(TERMOS_DE_USO_VERSAO_ATUAL);
      atualizarUsuario(user);
      toast.success('Termos aceitos.');
    } catch (err) {
      toast.error('Não foi possível registrar o aceite', apiErrorMessage(err));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-background px-4 py-8">
      <div className="w-full max-w-2xl space-y-4">
        <header className="space-y-1">
          <h1 className="text-xl font-semibold">Termos de Uso — Nuvita Psi</h1>
          <p className="text-sm text-muted-foreground">
            Versão {TERMOS_DE_USO_VERSAO_ATUAL} · {TERMOS_DE_USO_VIGENCIA}. Para usar a plataforma,
            leia e aceite os termos abaixo.
          </p>
        </header>

        <article className="max-h-[55vh] overflow-y-auto rounded-lg border border-border bg-card p-4 text-sm">
          <TermosRenderizados texto={termosDeUsoTexto} />
        </article>

        <label className="flex items-start gap-2 text-sm cursor-pointer select-none">
          <Checkbox
            checked={aceito}
            onCheckedChange={(c) => setAceito(c === true)}
            aria-label="Li e aceito os Termos de Uso"
          />
          <span>Li e aceito os Termos de Uso do Nuvita Psi (versão {TERMOS_DE_USO_VERSAO_ATUAL}).</span>
        </label>

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className="text-sm underline text-muted-foreground"
            onClick={() => void logout()}
          >
            Sair
          </button>
          <Button type="button" disabled={!aceito || enviando} onClick={() => void confirmar()}>
            {enviando ? 'Registrando…' : 'Aceitar e continuar'}
          </Button>
        </div>
      </div>
    </div>
  );
}

/** Renderizador mínimo: só o que o termo usa (títulos `#`/`##`/`###` e `**negrito**`). */
function TermosRenderizados({ texto }: { texto: string }) {
  return (
    <>
      {texto.split('\n').map((linha, i) => {
        const titulo = linha.match(/^(#{1,3})\s+(.*)$/);
        if (titulo) {
          const nivel = titulo[1].length;
          const Tag = (['h2', 'h3', 'h4'] as const)[nivel - 1];
          return (
            <Tag key={i} className="font-semibold mt-3 mb-1">
              {inline(titulo[2])}
            </Tag>
          );
        }
        if (linha.trim() === '' || linha.trim() === '---') {
          return <div key={i} className="h-2" />;
        }
        const item = linha.match(/^\s*-\s+(.*)$/);
        if (item) {
          return (
            <p key={i} className="mb-1 leading-relaxed flex gap-2">
              <span aria-hidden>•</span>
              <span>{inline(item[1])}</span>
            </p>
          );
        }
        return (
          <p key={i} className="mb-1 leading-relaxed">
            {inline(linha)}
          </p>
        );
      })}
    </>
  );
}

function inline(texto: string) {
  return texto.split(/(\*\*[^*]+\*\*)/g).map((parte, i) =>
    parte.startsWith('**') && parte.endsWith('**') ? (
      <strong key={i}>{parte.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{parte}</span>
    ),
  );
}
