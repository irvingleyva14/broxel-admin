import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { FileText, Phone, Activity } from "lucide-react";

export default function CompanyOverview({ company }: { company: any }) {
  const pctFact = Math.round(
    (company.facturasMes / Math.max(1, company.cuotaMensualFacturas)) * 100
  );

  const pctPhones = Math.round(
    (company.phoneSlotsUsed / Math.max(1, company.phoneSlotsQuota)) * 100
  );

  const avgMsg = company.phoneSlotsUsed
    ? Math.round(company.mensajesMes / company.phoneSlotsUsed)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Facturas */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <FileText className="h-4 w-4 text-slate-300" />
            Facturación del mes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm">
            {company.facturasMes}/{company.cuotaMensualFacturas} facturas
          </div>
          <div className="text-xs text-slate-400 mt-1">{pctFact}% uso</div>
        </CardContent>
      </Card>

      {/* Phones */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-slate-300" />
            Números WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm">
            {company.phoneSlotsUsed}/{company.phoneSlotsQuota} activos
          </div>
          <div className="text-xs text-slate-400 mt-1">{pctPhones}% uso</div>
        </CardContent>
      </Card>

      {/* Mensajes */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Activity className="h-4 w-4 text-slate-300" />
            Mensajes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm">{company.mensajesMes} mensajes este mes</div>
          <div className="text-xs text-slate-400 mt-1">
            Promedio por número: {avgMsg}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
