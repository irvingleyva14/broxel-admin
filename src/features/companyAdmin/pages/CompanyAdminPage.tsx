import { useParams, Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useCompaniesStore } from "../../companies/hooks/useCompaniesStore";
import CompanyHeader from "../components/CompanyHeader";
import CompanyOverview from "../components/CompanyOverview";

export default function CompanyAdminPage() {
  const { id } = useParams();
  const { getById } = useCompaniesStore();

  const company = getById(id!);

  if (!company) {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">Empresa no encontrada</h2>
        <Link to="/companies" className="text-teal-400 underline">
          Volver a empresas
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Encabezado */}
      <CompanyHeader company={company} />

      {/* Overview de métricas */}
      <CompanyOverview company={company} />

      {/* Tabs principales */}
      <div className="mt-4">
        <Tabs defaultValue="finanzas" className="w-full">
          <TabsList className="rounded-2xl bg-slate-900 border border-slate-700">
            <TabsTrigger
              value="finanzas"
              className="rounded-2xl data-[state=active]:bg-slate-800 data-[state=active]:text-teal-300"
            >
              Finanzas
            </TabsTrigger>

            <TabsTrigger
              value="usuarios"
              className="rounded-2xl data-[state=active]:bg-slate-800 data-[state=active]:text-teal-300"
            >
              Usuarios
            </TabsTrigger>

            <TabsTrigger
              value="bitacora"
              className="rounded-2xl data-[state=active]:bg-slate-800 data-[state=active]:text-teal-300"
            >
              Bitácora
            </TabsTrigger>
          </TabsList>

          {/* Contenido de cada tab (por ahora, placeholders) */}
          <TabsContent value="finanzas" className="mt-4">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200">
              Aquí irá el módulo de Finanzas (asistente, tools, facturas, etc.).
            </div>
          </TabsContent>

          <TabsContent value="usuarios" className="mt-4">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200">
              Aquí irá el módulo de Usuarios / Números (UsersList).
            </div>
          </TabsContent>

          <TabsContent value="bitacora" className="mt-4">
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 text-slate-200">
              Aquí irá el módulo de Bitácora (AuditLog).
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
