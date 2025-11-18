import Kpi from "./Kpi";
import { Phone, ShieldCheck, FileText, Activity } from "lucide-react";
import { MOCK_COMPANIES } from "../../../mocks/companies";

const num = new Intl.NumberFormat("es-MX");

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
      <Kpi label="# Números activos" value={String(activos)} icon={Phone} />
      <Kpi label="Utilización WA" value={`${waUtil}%`} icon={ShieldCheck} />
      <Kpi
        label="Facturas (mes)"
        value={`${num.format(facturasUsadas)} · ${factUtil}%`}
        icon={FileText}
      />
      <Kpi
        label="Mensajes/mes (avg/num)"
        value={`${num.format(mensajes)} · ${avgMsgPorNumero}`}
        icon={Activity}
      />
    </div>
  );
}
