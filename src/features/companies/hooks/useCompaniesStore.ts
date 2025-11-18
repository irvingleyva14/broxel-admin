import { useState } from "react";
import { MOCK_COMPANIES } from "../../../mocks/companies";
import { Company } from "../types/company.types";

export function useCompaniesStore() {
  const [companies, setCompanies] = useState<Company[]>(MOCK_COMPANIES);

  const addCompany = (company: Company) => {
    setCompanies((prev) => [company, ...prev]);
  };

  const updateCompany = (updated: Company) => {
    setCompanies((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
  };

  const getById = (id: string) => {
    return companies.find((c) => c.id === id);
  };

  return {
    companies,
    addCompany,
    updateCompany,
    getById,
  };
}
