import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MOCK_COMPANIES } from "@/mocks/companies";

function pct(a: number, b: number) {
  return Math.round((a / Math.max(1, b)) * 100);
}

export default function OverviewCompaniesTable() {
  const empresas = MOCK_COMPANIES;

  return (
    <Card className="rounded-2xl bg-slate-900 border border-slate-700">
      <CardHeader>
        <CardTitle className="text-slate-100 flex items-center justify-between">
          Empresas registradas
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-left">
                <th className="py-2">Empresa</th>
                <th className="py-2">Consumo</th>
                <th className="py-2">Plan</th>
                <th className="py-2 text-right">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {empresas.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-slate-800 hover:bg-slate-800/40"
                >
                  {/* Empresa */}
                  <td className="py-3">
                    <div className="font-medium text-slate-100 truncate max-w-[320px]">
                      {c.nombre}
                    </div>

                    <div className="text-xs text-slate-400 truncate">
                      RFC {c.rfc} · {c.giro}
                    </div>
                  </td>

                  {/* Chips de consumo */}
                  <td className="py-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="rounded-full bg-slate-800 text-slate-300 border-slate-700"
                      >
                        Fac {pct(c.facturasMes, c.cuotaMensualFacturas)}%
                      </Badge>

                      <Badge
                        variant="secondary"
                        className="rounded-full bg-slate-800 text-slate-300 border-slate-700"
                      >
                        WA {pct(c.phoneSlotsUsed, c.phoneSlotsQuota)}%
                      </Badge>

                      <Badge
                        variant="secondary"
                        className="rounded-full bg-slate-800 text-slate-300 border-slate-700"
                      >
                        Msg {c.phoneSlotsUsed ? Math.round(c.mensajesMes / c.phoneSlotsUsed) : 0}
                        /num
                      </Badge>
                    </div>
                  </td>

                  {/* Plan */}
                  <td className="py-3">
                    <Badge
                      variant="outline"
                      className="rounded-full border-slate-600 text-slate-300"
                    >
                      {c.planName}
                    </Badge>
                  </td>

                  {/* Acciones */}
                  <td className="py-3 text-right">
                    <Link to={`/companies/${c.id}/admin`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-2xl border-slate-600 text-slate-200 hover:bg-slate-800"
                      >
                        Admin
                        <Settings className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>

                    <Link to={`/companies/${c.id}`}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-2xl text-slate-300 hover:text-teal-300 hover:bg-slate-800 ml-2"
                      >
                        Ver
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}

              {empresas.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-slate-500">
                    No hay empresas registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
