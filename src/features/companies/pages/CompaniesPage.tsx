import { useState } from "react";
import CompaniesTable from "../components/CompaniesTable";
import CompaniesToolbar from "../components/CompaniesToolbar";
import { useCompanies } from "../hooks/useCompanies";
import CompanyModal from "../components/CompanyModal";
import NewCompanyForm from "../components/NewCompanyForm";
import { Company } from "../types/company.types";
//import { useCompaniesStore } from "../hooks/useCompaniesStore";
import { useCompaniesStore } from "../context/CompaniesContext";

export default function CompaniesPage() {
  const { companies, addCompany } = useCompaniesStore();
  const { search, setSearch, filtered } = useCompanies(companies);

  const [open, setOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);


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
    setSuccessMsg("Empresa registrada correctamente.");
    setTimeout(() => setSuccessMsg(null), 3000);
    setOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {successMsg && (
        <div className="mb-4 rounded-lg border border-teal-500 bg-teal-900/40 px-4 py-2 text-sm text-teal-200">
          {successMsg}
        </div>
      )}

            {/* TÍTULO */}
      <div className="space-y-2 mb-6">
        <h1 className="text-3xl font-bold text-slate-100">Empresas</h1>
        <p className="text-slate-400">Administración de empresas registradas en el sistema.</p>
      </div>

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