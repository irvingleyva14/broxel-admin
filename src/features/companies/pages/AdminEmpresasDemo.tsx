// src/features/companies/pages/AdminEmpresasDemo.tsx
import { MOCK_COMPANIES } from "@/mocks/companies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminEmpresasDemo() {
  const totalEmpresas = MOCK_COMPANIES.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      {/* Top bar simple por ahora */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-emerald-500 text-slate-950 grid place-items-center font-bold">
              BX
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-sm">Broxel · Admin Empresas</div>
              <div className="text-xs text-slate-400">
                Demo de arquitectura por features
              </div>
            </div>
          </div>
          <span className="text-xs text-slate-400">
            Total empresas: <span className="font-semibold text-emerald-400">{totalEmpresas}</span>
          </span>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-4">
        <Card className="bg-slate-900/70 border-slate-800 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">
              Panel Admin Empresas (esqueleto)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-2">
            <p>
              Aquí vamos a ir pegando, poco a poco, los módulos del panel:
            </p>
            <ul className="list-disc list-inside text-slate-400 text-xs space-y-1">
              <li>Resumen de consumo global</li>
              <li>Listado de empresas con KPIs</li>
              <li>Vista de "Administrar empresa"</li>
              <li>Usuarios / números por empresa</li>
              <li>Bitácora de acciones</li>
              <li>Chat del asistente financiero</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
