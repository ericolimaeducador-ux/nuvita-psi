import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Users, UserPlus } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { analyticsApi } from '@/api/resources';

// Todo gráfico aqui é uma série única (contagem por categoria) — por isso uma
// única cor (o azul primário do app), sem necessidade de paleta categórica.
// Ver skill `dataviz`: "uma série → uma cor (slot 1) para toda barra".
const BAR_COLOR = 'hsl(var(--primary))';
const GRID_COLOR = 'hsl(var(--border))';
const TICK_STYLE = { fill: 'hsl(var(--muted-foreground))', fontSize: 12 };

const MAX_REPRESENTANTES_EXIBIDOS = 8;

function StatTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-6">
        <div className="rounded-full bg-primary/10 p-3 text-primary">{icon}</div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function ChartCard({
  title,
  loading,
  empty,
  children,
}: {
  title: string;
  loading: boolean;
  empty: boolean;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-64 w-full" />
        ) : empty ? (
          <p className="py-16 text-center text-sm text-muted-foreground">Sem dados no período.</p>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
}

function tooltipStyle() {
  return {
    contentStyle: {
      background: 'hsl(var(--popover))',
      border: '1px solid hsl(var(--border))',
      borderRadius: 8,
      fontSize: 12,
    },
    cursor: { fill: 'hsl(var(--muted))' },
  };
}

export function RelatoriosGerenciaisPage() {
  // Sem valor inicial: o backend aplica a janela padrão (2 meses atrás até o
  // próximo mês) quando dataInicio/dataFim vêm vazios — mesmo padrão dos
  // relatórios que já existem.
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const periodo = { dataInicio: dataInicio || undefined, dataFim: dataFim || undefined };

  const pacientesQ = useQuery({
    queryKey: ['analytics', 'pacientes', periodo],
    queryFn: () => analyticsApi.pacientes(periodo),
  });
  const porRepresentanteQ = useQuery({
    queryKey: ['analytics', 'pacientes-por-representante'],
    queryFn: () => analyticsApi.pacientesPorRepresentante(),
  });

  // Mais de ~8 categorias num gráfico de barras vira ilegível — dobra a
  // cauda em "Outros" em vez de listar todo mundo (ver skill `dataviz`,
  // anti-padrão "cycling hues past 8" aplicado aqui a contagem de barras).
  const dadosRepresentante = useMemo(() => {
    const bruto = (porRepresentanteQ.data ?? []).map((d) => ({ nome: d._id, total: d.total }));
    if (bruto.length <= MAX_REPRESENTANTES_EXIBIDOS) return bruto;
    const principais = bruto.slice(0, MAX_REPRESENTANTES_EXIBIDOS);
    const outros = bruto.slice(MAX_REPRESENTANTES_EXIBIDOS).reduce((soma, d) => soma + d.total, 0);
    return [...principais, { nome: 'Outros', total: outros }];
  }, [porRepresentanteQ.data]);

  const novosNoPeriodo = (pacientesQ.data?.novosPorMes ?? []).reduce((soma, m) => soma + m.total, 0);

  return (
    <div className="p-6 space-y-6">
      <PageHeader
        title="Relatórios Gerenciais"
        subtitle="Visão consolidada de pacientes e representantes para a gestão da clínica"
      />

      <Card>
        <CardContent className="flex flex-wrap items-end gap-3 p-6">
          <div className="space-y-1">
            <Label htmlFor="relDataInicio">Período — de</Label>
            <Input id="relDataInicio" type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="relDataFim">até</Label>
            <Input id="relDataFim" type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
          </div>
          <p className="pb-2 text-xs text-muted-foreground">
            Afeta: novos pacientes no período. Os demais gráficos mostram o quadro atual.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <StatTile icon={<Users className="h-5 w-5" />} label="Pacientes ativos" value={pacientesQ.data?.totalAtivos ?? '—'} />
        <StatTile icon={<UserPlus className="h-5 w-5" />} label="Novos no período" value={novosNoPeriodo} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="Pacientes por representante" loading={porRepresentanteQ.isLoading} empty={dadosRepresentante.length === 0}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={dadosRepresentante} layout="vertical" margin={{ left: 24 }}>
              <CartesianGrid horizontal={false} stroke={GRID_COLOR} />
              <XAxis type="number" allowDecimals={false} tick={TICK_STYLE} axisLine={{ stroke: GRID_COLOR }} tickLine={false} />
              <YAxis type="category" dataKey="nome" width={140} tick={TICK_STYLE} axisLine={{ stroke: GRID_COLOR }} tickLine={false} />
              <Tooltip {...tooltipStyle()} />
              <Bar dataKey="total" name="Pacientes" fill={BAR_COLOR} radius={[0, 4, 4, 0]} maxBarSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
