import { useMemo, useState } from "react";
import { MOCK_COMPANIES } from "../../../mocks/companies";
import { Badge } from "@/components/ui/badge";
import { Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

function pct(a: number, b: number) {
  return Math.round((a / Math.max(1, b)) * 100);
}

export default function OverviewCompaniesTable() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.toLowerCase();
    return MOCK_COMPANIES.filter(
      (c) =>
        c.nombre.toLowerCase().includes(term) ||
        c.rfc.toLowerCase().includes(term) ||
        c.id.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <Card className="rounded-2xl shadow-sm bg-slate-900 border border-slate-700 text-slate-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl flex items-center gap-2">
          <span>Empresas</span>
        </CardTitle>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-2 top-2.5 opacity-60" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar nombre, RFC o ID"
              className="pl-8 rounded-xl w-64 bg-slate-800 border-slate-700 text-slate-200"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-muted-foreground">
            <tr className="text-left border-b border-slate-700">
              <th className="py-2">Empresa</th>
              <th>Estatus</th>
              <th>Consumo</th>
              <th className="text-right pr-3">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => {
              const chips = (
                <div className="flex flex-wrap gap-2">
                  {/* Badges oscuros */}
                  <Badge
                    className="
                      rounded-full px-2 py-1
                      bg-slate-800 border border-slate-600
                      text-slate-300
                    "
                  >
                    Fac {pct(c.facturasMes, c.cuotaMensualFacturas)}%
                  </Badge>

                  <Badge
                    className="
                      rounded-full px-2 py-1
                      bg-slate-800 border border-slate-600
                      text-slate-300
                    "
                  >
                    WA {pct(c.phoneSlotsUsed, c.phoneSlotsQuota)}%
                  </Badge>

                  <Badge
                    className="
                      rounded-full px-2 py-1
                      bg-slate-800 border border-slate-600
                      text-slate-300
                    "
                  >
                    Msg{" "}
                    {c.phoneSlotsUsed
                      ? Math.round(c.mensajesMes / c.phoneSlotsUsed)
                      : 0}
                  </Badge>
                </div>
              );

              return (
                <tr
                  key={c.id}
                  className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                >
                  <td className="py-3 max-w-[360px]">
                    <div className="font-medium truncate">{c.nombre}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      RFC {c.rfc} · {c.giro}
                    </div>
                  </td>

                  <td>
                    <Badge
                      variant={
                        c.status === "activa" ? "default" : "destructive"
                      }
                      className="rounded-full"
                    >
                      {c.status}
                    </Badge>
                  </td>

                  <td>{chips}</td>

                  <td className="text-right pr-3">
                    <Button
                      variant="outline"
                      className="
                        rounded-xl text-xs
                        border-slate-600
                        bg-slate-900
                        text-slate-300
                        hover:bg-slate-800
                        hover:text-teal-300
                      "
                      onClick={() => console.log('TODO: Ir a admin', c.id)}
                    >
                      <Settings className="h-3 w-3 mr-2 text-slate-400" />
                      Administrar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
