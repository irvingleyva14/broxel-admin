// src/features/companyAdmin/components/ToolTab.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ToolTabProps = {
  active: boolean;
  name: string;
  subtitle: string;
  extra?: string;
};

export default function ToolTab({ active, name, subtitle, extra }: ToolTabProps) {
  if (!active) {
    return (
      <div className="border rounded-2xl p-4 flex flex-col gap-2 bg-slate-800 border-slate-700 text-slate-300">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-slate-400">
          Módulo no contratado. Puedes activarlo en tu plan para verlo aquí.
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Módulo principal */}
      <Card className="rounded-2xl shadow-sm bg-slate-900 border-slate-700 text-slate-200 md:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-slate-100">{name}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 text-sm">
          <div className="text-xs text-slate-400">{subtitle}</div>
          {extra && <div className="mt-1 text-sm text-slate-100">{extra}</div>}

          <div className="mt-2 text-xs text-slate-500">
            (Aquí irán gráficos y métricas de uso detalladas.)
          </div>
        </CardContent>
      </Card>

      {/* Acciones rápidas */}
      <Card className="rounded-2xl shadow-sm bg-slate-900 border-slate-700 text-slate-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-slate-100">Acciones rápidas</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 text-xs">
          <Button
            size="sm"
            className="w-full rounded-2xl bg-slate-800 border border-slate-600 text-slate-200 hover:bg-slate-700"
            variant="outline"
          >
            Ver reporte de uso
          </Button>

          <Button
            size="sm"
            className="w-full rounded-2xl bg-slate-800 border border-slate-600 text-slate-200 hover:bg-slate-700"
            variant="outline"
          >
            Configurar límites
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
