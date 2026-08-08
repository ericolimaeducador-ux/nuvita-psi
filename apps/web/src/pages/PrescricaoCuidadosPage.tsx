import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { PageHeader } from '@/components/PageHeader';
import { DocumentoClinicoLayout } from '@/components/DocumentoClinicoLayout';
import { useAuth } from '@/auth/AuthContext';
import { pacientesApi } from '@/api/resources';
import { SUGESTOES_CUIDADOS_POR_LINHA } from '@/lib/linhaTerapeutica';
import { LINHA_TERAPEUTICA_LABEL } from '@/types';

const CHECKLIST_FIXO = [
  'Exercícios de respiração/relaxamento',
  'Diário comportamental',
  'Leituras/filmes indicados',
  'Encaminhamento a outro profissional (se necessário)',
];

export function PrescricaoCuidadosPage() {
  const { id: pacienteId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [modo, setModo] = useState<'compor' | 'imprimir'>('compor');
  const [checklist, setChecklist] = useState<string[]>([]);
  const [textoLivre, setTextoLivre] = useState('');
  const [crp, setCrp] = useState('');

  const pacienteQ = useQuery({
    queryKey: ['paciente', pacienteId],
    queryFn: () => pacientesApi.get(pacienteId!),
    enabled: !!pacienteId,
  });
  const paciente = pacienteQ.data;
  const sugestoes = paciente?.linhaTerapeutica ? SUGESTOES_CUIDADOS_POR_LINHA[paciente.linhaTerapeutica] : [];

  useEffect(() => {
    setCrp(user?.registroProfissional ?? '');
  }, [user?.registroProfissional]);

  function toggleChecklist(item: string) {
    setChecklist((cur) => (cur.includes(item) ? cur.filter((i) => i !== item) : [...cur, item]));
  }

  function adicionarSugestao(sugestao: string) {
    setTextoLivre((cur) => (cur.includes(sugestao) ? cur : cur ? `${cur}\n- ${sugestao}` : `- ${sugestao}`));
  }

  if (modo === 'imprimir') {
    return (
      <DocumentoClinicoLayout rotulo="Prescrição de Cuidados" onVoltar={() => setModo('compor')}>
        <div className="flex items-center justify-between border-b-2 border-gray-800 pb-4 mb-6">
          <h1 className="text-base font-bold uppercase tracking-wide">Prescrição de Cuidados em Psicologia</h1>
          <p className="text-xs text-gray-500">{dayjs().format('DD/MM/YYYY')}</p>
        </div>

        <p className="text-xs text-gray-500 mb-4">Paciente: <strong className="text-gray-800">{paciente?.nome}</strong></p>

        {checklist.length > 0 && (
          <ul className="list-disc list-inside space-y-1 mb-4">
            {checklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}

        {textoLivre.trim() && (
          <p className="whitespace-pre-wrap leading-relaxed">{textoLivre}</p>
        )}

        <div className="mt-16 flex flex-col items-center gap-1 text-sm">
          <p>_____________________________________</p>
          <p className="font-semibold">{user?.nome ?? 'Psicólogo(a) responsável'}</p>
          <p className="text-gray-600">{crp ? `Psicólogo(a) — CRP ${crp}` : 'Psicólogo(a)'}</p>
        </div>
      </DocumentoClinicoLayout>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <PageHeader
        title="Prescrição de Cuidados em Psicologia"
        subtitle={paciente ? `Paciente: ${paciente.nome}` : 'Carregando…'}
        extra={
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
          </Button>
        }
      />

      {pacienteQ.isLoading ? (
        <Skeleton className="h-64 w-full" />
      ) : (
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <Label>Checklist de cuidados</Label>
              <div className="space-y-2">
                {CHECKLIST_FIXO.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={`chk-${item}`}
                      checked={checklist.includes(item)}
                      onCheckedChange={() => toggleChecklist(item)}
                    />
                    <Label htmlFor={`chk-${item}`} className="cursor-pointer font-normal">{item}</Label>
                  </div>
                ))}
              </div>
            </div>

            {paciente?.linhaTerapeutica && sugestoes.length > 0 && (
              <div className="space-y-2">
                <Label>Sugestões — {LINHA_TERAPEUTICA_LABEL[paciente.linhaTerapeutica]}</Label>
                <div className="flex flex-wrap gap-2">
                  {sugestoes.map((s) => (
                    <Badge key={s} variant="secondary" className="cursor-pointer" onClick={() => adicionarSugestao(s)}>
                      + {s}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="textoLivre">Orientações adicionais</Label>
              <Textarea
                id="textoLivre" rows={8} value={textoLivre} onChange={(e) => setTextoLivre(e.target.value)}
                placeholder="Clique nas sugestões acima para adicionar, ou escreva livremente."
              />
            </div>

            <Button onClick={() => setModo('imprimir')} disabled={checklist.length === 0 && !textoLivre.trim()}>
              <FileText className="mr-2 h-4 w-4" /> Gerar prescrição
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
