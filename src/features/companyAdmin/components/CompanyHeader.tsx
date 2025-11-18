import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Settings, Globe } from "lucide-react";

export default function CompanyHeader({ company }: { company: any }) {
  return (
    <div className="flex items-center justify-between bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <Link
          to="/companies"
          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm text-slate-200"
        >
          ← Volver
        </Link>

        <div className="leading-tight">
          <div className="text-xl font-semibold">{company.nombre}</div>
          <div className="text-xs text-slate-400">
            ID {company.id} · RFC {company.rfc} · {company.giro}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <Badge
          variant={company.status === "activa" ? "default" : "destructive"}
          className="rounded-full"
        >
          {company.status}
        </Badge>

        <button className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm flex items-center gap-1">
          <Globe className="h-4 w-4" />
          Portal
        </button>

        <button className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm flex items-center gap-1">
          <Settings className="h-4 w-4" />
          Ajustes
        </button>
      </div>
    </div>
  );
}
