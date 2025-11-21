import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { useLocation, Link, useParams } from "react-router-dom";
import { useCompaniesStore } from "@/features/companies/hooks/useCompaniesStore";

export default function AppBreadcrumbs() {
  const location = useLocation();
  const params = useParams();
  const { getById } = useCompaniesStore();

  const segments = location.pathname.split("/").filter(Boolean);

  // Detectar empresa si estamos en /companies/:id
  const company =
    params?.id && segments.includes("companies") ? getById(params.id) : null;

  const buildLabel = (seg: string) => {
    if (seg === "overview") return "Overview";
    if (seg === "companies") return "Empresas";
    if (seg === "admin") return "Administración";
    if (company && seg === company.id) return company.nombre;
    return seg;
  };

  const buildLink = (index: number) =>
    "/" + segments.slice(0, index + 1).join("/");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="text-slate-300 hover:text-teal-300">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((seg, index) => (
          <div key={index} className="flex items-center">
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to={buildLink(index)}
                  className="capitalize text-slate-300 hover:text-teal-300"
                >
                  {buildLabel(seg)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
