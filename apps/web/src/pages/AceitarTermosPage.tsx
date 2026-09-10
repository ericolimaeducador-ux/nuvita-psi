import { useAuth } from '@/auth/AuthContext';

// Stub da Fase 9 — a tela de aceite (texto do termo + ação explícita + chamada
// ao endpoint) é construída na Fase 10.
export function AceitarTermosPage() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-lg font-semibold">Termos de Uso</h1>
        <p className="text-sm text-muted-foreground">
          Você precisa aceitar os Termos de Uso para continuar. (Tela em construção — Fase 10.)
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
