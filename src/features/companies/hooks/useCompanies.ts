import { useMemo, useState } from "react";
import { Company } from "../types/company.types";

export function useCompanies(companies: Company[]) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return companies;

    const s = search.toLowerCase();

    return companies.filter((c) => {
      return (
        c.nombre.toLowerCase().includes(s) ||
        c.rfc.toLowerCase().includes(s) ||
        c.giro.toLowerCase().includes(s)
      );
    });
  }, [search, companies]);

  return {
    search,
    setSearch,
    filtered,
  };
}
