import { createContext, useContext, useState, ReactNode } from "react";
import { MOCK_COMPANIES } from "../../../mocks/companies";
import { Company } from "../types/company.types";

type CompaniesContextType = {
  companies: Company[];
  addCompany: (c: Company) => void;
  updateCompany: (c: Company) => void;
  getById: (id: string) => Company | undefined;
};

const CompaniesContext = createContext<CompaniesContextType | null>(null);

export function CompaniesProvider({ children }: { children: ReactNode }) {
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

  return (
    <CompaniesContext.Provider
      value={{ companies, addCompany, updateCompany, getById }}
    >
      {children}
    </CompaniesContext.Provider>
  );
}

export function useCompaniesStore() {
  const ctx = useContext(CompaniesContext);
  if (!ctx) {
    throw new Error("useCompaniesStore must be used inside CompaniesProvider");
  }
  return ctx;
}
