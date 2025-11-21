import { Card, CardContent } from "@/components/ui/card";
import { Phone, FileText, Activity, ShieldCheck } from "lucide-react";
import { MOCK_COMPANIES } from "@/mocks/companies";

function KpiItem({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: any;
}) {
  return (
    <Card className="rounded-2xl bg-slate-900 border border-slate-700">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <div className="text-xs text-slate-400">{label}</div>
          <div className="text-lg font-semibold text-slate-100">{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TopConsumption() {
  const empresas = MOCK_COMPANIES;

  const activos = empresas.reduce((a, c) => a + c.phoneSlotsUsed, 0);
  const cupo = empresas.reduce((a, c) => a + c.phoneSlotsQuota, 0);
  const waUtil = cupo ? Math.round((activos / cupo) * 100) : 0;

  const facturasUsadas = empresas.reduce((a, c) => a + c.facturasMes, 0);
  const facturasQuota = empresas.reduce(
    (a, c) => a + c.cuotaMensualFacturas,
    0
  );
  const factUtil = facturasQuota
    ? Math.round((facturasUsadas / facturasQuota) * 100)
    : 0;

  const mensajes = empresas.reduce((a, c) => a + c.mensajesMes, 0);
  const avgMsgPorNumero = activos ? Math.round(mensajes / activos) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <KpiItem label="# Números activos" value={activos} icon={Phone} />
      <KpiItem label="Utilización WA" value={`${waUtil}%`} icon={ShieldCheck} />
      <KpiItem
        label="Facturas (mes)"
        value={`${facturasUsadas} · ${factUtil}%`}
        icon={FileText}
      />
      <KpiItem
        label="Mensajes promedio"
        value={avgMsgPorNumero}
        icon={Activity}
      />
    </div>
  );
}
