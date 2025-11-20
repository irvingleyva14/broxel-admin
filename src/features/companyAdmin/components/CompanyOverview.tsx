// src/features/companyAdmin/components/CompanyOverview.tsx

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { FileText, Phone, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { num } from "@/lib/helpers";

export default function CompanyOverview({ company }: { company: any }) {
  const pctFacturas = Math.min(
    100,
    (company.facturasMes / Math.max(1, company.cuotaMensualFacturas)) * 100
  );

  const pctPhones = Math.min(
    100,
    (company.phoneSlotsUsed / Math.max(1, company.phoneSlotsQuota)) * 100
  );

  const avgMsg = company.phoneSlotsUsed
    ? Math.round(company.mensajesMes / company.phoneSlotsUsed)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Facturación */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-200">
        <CardHeader className="pb-2 flex items-center justify-between">
          <CardTitle className="text-sm flex items-center gap-2">
            <FileText className="h-4 w-4 text-teal-300" />
            Facturación del mes
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="text-sm">
            {company.facturasMes}/{company.cuotaMensualFacturas || "On-Demand"} facturas
          </div>

          <Progress value={pctFacturas} className="h-2 bg-slate-800" />
          <div className="text-xs text-slate-400">Uso: {Math.round(pctFacturas)}%</div>
        </CardContent>
      </Card>

      {/* Números WA */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Phone className="h-4 w-4 text-teal-300" />
            Números WhatsApp
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="text-sm">
            {company.phoneSlotsUsed}/{company.phoneSlotsQuota} activos
          </div>

          <Progress value={pctPhones} className="h-2 bg-slate-800" />
          <div className="text-xs text-slate-400">
            Utilización: {Math.round(pctPhones)}%
          </div>
        </CardContent>
      </Card>

      {/* Mensajes */}
      <Card className="rounded-2xl bg-slate-900 border border-slate-700 text-slate-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity className="h-4 w-4 text-teal-300" />
            Mensajes
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="text-sm">
            {num.format(company.mensajesMes)} mensajes este mes
          </div>

          <div className="text-xs text-slate-400">
            Promedio por número: {avgMsg}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
