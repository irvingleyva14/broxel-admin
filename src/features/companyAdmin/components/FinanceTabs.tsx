// src/features/companyAdmin/components/FinanceTabs.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import QuickActions from "./QuickActions";
import AssistantPanel from "./AssistantPanel";
import ToolTab from "./ToolTab";
import { Badge } from "@/components/ui/badge";

type FinanceTabsProps = {
  company: any;
};

export default function FinanceTabs({ company }: FinanceTabsProps) {
  const tools = company.tools || { base: true };

  return (
    <Card className="rounded-2xl shadow-sm bg-slate-900 border border-slate-700 text-slate-200">
      <CardHeader className="pb-2 flex items-center justify-between">
        <CardTitle className="text-lg text-slate-100">
          Finanzas y herramientas
        </CardTitle>

        {/* Chips de módulos contratados */}
        <div className="flex flex-wrap gap-1 text-[11px]">
          <Badge className="rounded-full bg-slate-700 border border-slate-600 text-slate-200">
            Base
          </Badge>
          {tools.pred && (
            <Badge className="rounded-full bg-slate-700 border border-slate-600 text-slate-200">
              Predicción
            </Badge>
          )}
          {tools.fact && (
            <Badge className="rounded-full bg-slate-700 border border-slate-600 text-slate-200">
              Facturas
            </Badge>
          )}
          {tools.banca && (
            <Badge className="rounded-full bg-slate-700 border border-slate-600 text-slate-200">
              Banca
            </Badge>
          )}
          {tools.inv && (
            <Badge className="rounded-full bg-slate-700 border border-slate-600 text-slate-200">
              Inversiones
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="resumen" className="mt-2">

          {/* Lista de tabs */}
          <TabsList className="rounded-2xl bg-slate-900 border border-slate-700">
            <TabsTrigger
              value="resumen"
              className="rounded-2xl data-[state=active]:bg-slate-800 
                        data-[state=active]:text-teal-300"
            >
              Resumen
            </TabsTrigger>

            <TabsTrigger
              value="pred"
              className="rounded-2xl data-[state=active]:bg-slate-800 
                        data-[state=active]:text-teal-300 text-xs"
            >
              Predicción
            </TabsTrigger>

            <TabsTrigger
              value="fact"
              className="rounded-2xl data-[state=active]:bg-slate-800 
                        data-[state=active]:text-teal-300 text-xs"
            >
              Facturas
            </TabsTrigger>

            <TabsTrigger
              value="banca"
              className="rounded-2xl data-[state=active]:bg-slate-800 
                        data-[state=active]:text-teal-300 text-xs"
            >
              Banca
            </TabsTrigger>

            <TabsTrigger
              value="inv"
              className="rounded-2xl data-[state=active]:bg-slate-800 
                        data-[state=active]:text-teal-300 text-xs"
            >
              Inversiones
            </TabsTrigger>
          </TabsList>

          {/* --- SUBTABS --- */}

          {/* Resumen: QuickActions + Assistant */}
          <TabsContent value="resumen" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-1">
                <QuickActions company={company} />
              </div>

              <div className="lg:col-span-2">
                <AssistantPanel company={company} title={`Asistente ${company.nombre}`} />
              </div>
            </div>
          </TabsContent>

          {/* Predicción */}
          <TabsContent value="pred" className="mt-4">
            <ToolTab
              active={!!tools.pred}
              name="Predicción de gastos"
              subtitle="Forecast de gastos y precios en gastos comunes"
            />
          </TabsContent>

          {/* Facturas */}
          <TabsContent value="fact" className="mt-4">
            <ToolTab
              active={!!tools.fact}
              name="Facturas"
              subtitle="Facturaje y consumo de timbres"
              extra={`${company.facturasMes}/${company.cuotaMensualFacturas || "On-Demand"} facturas este mes`}
            />
          </TabsContent>

          {/* Banca */}
          <TabsContent value="banca" className="mt-4">
            <ToolTab
              active={!!tools.banca}
              name="Banca Broxel"
              subtitle="Manejo de cuenta limitada desde WhatsApp"
            />
          </TabsContent>

          {/* Inversiones */}
          <TabsContent value="inv" className="mt-4">
            <ToolTab
              active={!!tools.inv}
              name="Inversiones"
              subtitle="Resumen de posición e intereses"
            />
          </TabsContent>

        </Tabs>
      </CardContent>
    </Card>
  );
}
