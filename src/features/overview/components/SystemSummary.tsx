import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Phone, Activity } from "lucide-react";
import { MOCK_COMPANIES } from "@/mocks/companies";

export default function SystemSummary() {
  const empresas = MOCK_COMPANIES;

  const facturasUsadas = empresas.reduce((a, c) => a + c.facturasMes, 0);
  const facturasQuota = empresas.reduce(
    (a, c) => a + c.cuotaMensualFacturas,
    0
  );
  const pctFact = Math.round((facturasUsadas / Math.max(1, facturasQuota)) * 100);

  const activos = empresas.reduce((a, c) => a + c.phoneSlotsUsed, 0);
  const cupo = empresas.reduce((a, c) => a + c.phoneSlotsQuota, 0);
  const pctPhones = Math.round((activos / Math.max(1, cupo)) * 100);

  const mensajes = empresas.reduce((a, c) => a + c.mensajesMes, 0);
  const avgMsg = activos ? Math.round(mensajes / activos) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Facturación */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-100">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <FileText className="h-4 w-4 text-slate-300" />
            Facturación total del mes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-base">
            {facturasUsadas}/{facturasQuota} facturas
          </div>
          <div className="text-xs text-slate-400">{pctFact}% uso</div>
        </CardContent>
      </Card>

      {/* WhatsApp */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-100">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Phone className="h-4 w-4 text-slate-300" />
            Números WhatsApp activos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-base">
            {activos}/{cupo} activos
          </div>
          <div className="text-xs text-slate-400">{pctPhones}% uso</div>
        </CardContent>
      </Card>

      {/* Mensajes */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-100">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity className="h-4 w-4 text-slate-300" />
            Mensajes del mes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-base">{mensajes} mensajes</div>
          <div className="text-xs text-slate-400">
            Promedio por número: {avgMsg}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
