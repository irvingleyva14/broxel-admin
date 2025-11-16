import { MOCK_COMPANIES } from "../../../mocks/companies";
import CompaniesTable from "../components/CompaniesTable";
import CompaniesToolbar from "../components/CompaniesToolbar";
import { useCompanies } from "../hooks/useCompanies";

export default function CompaniesPage() {
  const { search, setSearch, filtered } = useCompanies(MOCK_COMPANIES);

  const handleAdd = () => {
    alert("Aquí luego abriremos un modal para registrar una empresa.");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Empresas</h2>

      <CompaniesToolbar
        search={search}
        onSearchChange={setSearch}
        onAddCompany={handleAdd}
      />

      <CompaniesTable companies={filtered} />
    </div>
  );
}
