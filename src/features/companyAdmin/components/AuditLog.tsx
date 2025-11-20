// src/features/companyAdmin/components/AuditLog.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";
import { MOCK_AUDIT } from "@/mocks/audit";

type AuditLogProps = {
  companyId: string;
};

export default function AuditLog({ companyId }: AuditLogProps) {
  const rows = MOCK_AUDIT.filter((a) => a.empresaId === companyId);

  return (
    <Card className="rounded-2xl shadow-sm bg-slate-900 border border-slate-700 text-slate-200">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2 text-slate-100">
          <Lock className="h-5 w-5 text-teal-300" />
          Bitácora
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {rows.map((r, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200"
          >
            {/* Información principal */}
            <div className="text-sm">
              <div className="font-medium text-slate-100">{r.action}</div>
              <div className="text-xs text-slate-400">
                {r.ts} · actor {r.actor}
              </div>
            </div>

            {/* Metadata compacta */}
            <Badge
            variant="secondary"
            className="
                rounded-full font-mono text-[11px]
                bg-slate-700 text-slate-300 border border-slate-600
                hover:bg-slate-700 hover:text-slate-300
            "
            >

              {Object.entries(r.meta)
                .map(([k, v]) => `${k}:${v}`)
                .join(" · ")}
            </Badge>
          </div>
        ))}

        {rows.length === 0 && (
          <div className="text-sm text-slate-400">Sin eventos.</div>
        )}
      </CardContent>
    </Card>
  );
}
