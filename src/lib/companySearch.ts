export function matchCompany(company: any, query: string) {
  const q = query.toLowerCase();

  return (
    company.nombre.toLowerCase().includes(q) ||
    company.rfc.toLowerCase().includes(q) ||
    company.id.toLowerCase().includes(q) ||
    company.nombre.toLowerCase().replace(/\s/g, "").includes(q)
  );
}
