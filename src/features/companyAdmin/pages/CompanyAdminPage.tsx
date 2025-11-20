// src/features/companyAdmin/pages/CompanyAdminPage.tsx

import { useParams, Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { useCompaniesStore } from "../../companies/hooks/useCompaniesStore";

// Componentes del módulo Company Admin
import CompanyHeader from "../components/CompanyHeader";
import CompanyOverview from "../components/CompanyOverview";
import FinanceTabs from "../components/FinanceTabs";
import UsersList from "../components/UsersList";
import AuditLog from "../components/AuditLog";

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

      {/* Overview con KPIs */}
      <CompanyOverview company={company} />

      {/* Tabs principales */}
      <div className="mt-4">
        <Tabs defaultValue="finanzas" className="w-full">

          <TabsList className="rounded-2xl bg-slate-900 border border-slate-700">
            <TabsTrigger
              value="finanzas"
              className="rounded-2xl data-[state=active]:bg-slate-800 
                         data-[state=active]:text-teal-300"
            >
              Finanzas
            </TabsTrigger>

            <TabsTrigger
              value="usuarios"
              className="rounded-2xl data-[state=active]:bg-slate-800 
                         data-[state=active]:text-teal-300"
            >
              Usuarios
            </TabsTrigger>

            <TabsTrigger
              value="bitacora"
              className="rounded-2xl data-[state=active]:bg-slate-800 
                         data-[state=active]:text-teal-300"
            >
              Bitácora
            </TabsTrigger>
          </TabsList>

          {/* FINANZAS */}
          <TabsContent value="finanzas" className="mt-4">
            <FinanceTabs company={company} />
          </TabsContent>

          {/* USUARIOS */}
          <TabsContent value="usuarios" className="mt-4">
            <UsersList companyId={company.id} />
          </TabsContent>

          {/* BITÁCORA */}
          <TabsContent value="bitacora" className="mt-4">
            <AuditLog companyId={company.id} />
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
