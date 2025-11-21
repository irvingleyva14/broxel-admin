import TopConsumption from "../components/TopConsumption";
import SystemSummary from "../components/SystemSummary";
import OverviewCompaniesTable from "../components/OverviewCompaniesTable";

export default function OverviewPage() {
  return (
    <div className="space-y-10">

      {/* TITULO */}
      <div>
        <h1 className="text-3xl font-bold text-slate-100">Overview general</h1>
        <p className="text-slate-400 mt-1">
          Métricas globales del sistema y actividad de empresas.
        </p>
      </div>

      {/* KPIS GLOBALES */}
      <TopConsumption />

      {/* RESUMEN EJECUTIVO */}
      <SystemSummary />

      {/* TABLA */}
      <div className="pt-2">
        <OverviewCompaniesTable />
      </div>

    </div>
  );
}
