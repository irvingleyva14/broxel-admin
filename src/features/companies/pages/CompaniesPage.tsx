import { useState } from "react";
import CompaniesTable from "../components/CompaniesTable";
import CompaniesToolbar from "../components/CompaniesToolbar";
import { useCompanies } from "../hooks/useCompanies";
import CompanyModal from "../components/CompanyModal";
import NewCompanyForm from "../components/NewCompanyForm";
import { Company } from "../types/company.types";
import { useCompaniesStore } from "../hooks/useCompaniesStore";

export default function CompaniesPage() {
  const { companies, addCompany } = useCompaniesStore();
  const { search, setSearch, filtered } = useCompanies(companies);

  const [open, setOpen] = useState(false);

  const handleAdd = (data: any) => {
    const newCompany: Company = {
      ...data,
      id: "NEW-" + (companies.length + 1),
      createdAt: new Date().toISOString().split("T")[0],
      tools: {
        base: true,
        pred: false,
        fact: false,
        banca: false,
        inv: false,
      },
    };

    addCompany(newCompany);
    setOpen(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Empresas</h2>

      <CompaniesToolbar
        search={search}
        onSearchChange={setSearch}
        onAddCompany={() => setOpen(true)}
      />

      <CompaniesTable companies={filtered} />

      <CompanyModal
        open={open}
        onClose={() => setOpen(false)}
        title="Registrar nueva empresa"
      >
        <NewCompanyForm onSubmit={handleAdd} />
      </CompanyModal>
    </div>
  );
}
