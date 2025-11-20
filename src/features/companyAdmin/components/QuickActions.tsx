// src/features/companyAdmin/components/QuickActions.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Activity, Settings, Phone, MessageSquare, ChevronRight } from "lucide-react";

type QuickActionsProps = {
  company: any;
};

export default function QuickActions({ company }: QuickActionsProps) {
  const items = [
    { label: "Emitir factura", desc: "Crear CFDI de ingresos rápido", icon: FileText },
    { label: "Ver consumo", desc: "Facturas, números y mensajes", icon: Activity },
    { label: "Descargar reporte", desc: "CSV de actividad del mes", icon: ChevronRight },
    { label: "Configurar paquete de facturas", desc: "Cambiar 200/500/1000/On-Demand", icon: Settings },
    { label: "Administrar números", desc: "Alta/Baja de asistentes", icon: Phone },
    { label: "Mensajes por número", desc: "Uso conversacional por línea", icon: MessageSquare },
  ];

  return (
    <Card className="rounded-2xl shadow-sm bg-slate-900 border border-slate-700 text-slate-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-slate-100">Atajos</CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-1 gap-2">
        {items.map((it, idx) => {
          const Icon = it.icon;

          return (
            <button
              key={idx}
              className="flex items-start gap-3 border border-slate-700 rounded-2xl p-3 text-left
                         hover:bg-slate-800 transition-colors"
            >
              <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                <Icon className="h-4 w-4 text-teal-300" />
              </div>

              <div className="leading-tight">
                <div className="font-medium text-slate-100">{it.label}</div>
                <div className="text-xs text-slate-400">{it.desc}</div>
              </div>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}
