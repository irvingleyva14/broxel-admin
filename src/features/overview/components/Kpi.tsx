import { Card, CardContent } from "@/components/ui/card";

export default function Kpi({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: any;
}) {
  return (
    <Card className="rounded-2xl shadow-sm bg-slate-900 border border-slate-700 text-slate-200">
      <CardContent className="p-4 flex items-center gap-3">
        
        {/* Icono con fondo oscuro */}
        <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
          <Icon className="h-5 w-5 text-slate-300" />
        </div>

        {/* Texto */}
        <div>
          <div className="text-xs text-slate-400">{label}</div>
          <div className="text-lg font-semibold text-slate-100">{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}
