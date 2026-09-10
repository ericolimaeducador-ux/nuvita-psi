import { useAuth } from '@/auth/AuthContext';

// Stub da Fase 9 — a tela de troca (campo de senha + chamada ao endpoint +
// erros de política) é construída na Fase 11.
export function DefinirSenhaObrigatoriaPage() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-lg font-semibold">Defina sua senha</h1>
        <p className="text-sm text-muted-foreground">
          Sua senha atual é temporária. Defina uma senha própria para continuar.
          (Tela em construção — Fase 11.)
        </p>
        <button
          type="button"
          className="text-sm underline text-muted-foreground"
          onClick={() => void logout()}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
