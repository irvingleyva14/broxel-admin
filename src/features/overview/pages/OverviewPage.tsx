import TopConsumption from "../components/TopConsumption";
import OverviewCompaniesTable from "../components/OverviewCompaniesTable";

export default function OverviewPage() {
  return (
    <div className="space-y-8 text-slate-200">
      <h2 className="text-3xl font-bold mb-4 text-slate-100">
        Dashboard General
      </h2>

      <TopConsumption />

      <OverviewCompaniesTable />
    </div>
  );
}
