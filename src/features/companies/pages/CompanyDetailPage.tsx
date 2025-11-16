import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Company } from "../types/company.types";

// ← IMPORTACIONES CORRECTAS
import CompanyModal from "../components/CompanyModal";
import EditCompanyForm from "../components/EditCompanyForm";
import { useCompaniesStore } from "../hooks/useCompaniesStore";


export default function CompanyDetailPage() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const { getById, updateCompany } = useCompaniesStore();
  const company: Company | undefined = getById(id!);

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
    <div className="space-y-6">
      <Link to="/companies" className="text-teal-400 underline">
        ← Volver a empresas
      </Link>

      {/* Título */}
      <h2 className="text-4xl font-bold">{company.nombre}</h2>

      {/* Botón Editar */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-white font-medium mt-4"
      >
        Editar Empresa
      </button>

      <div className="grid grid-cols-2 gap-6">
        {/* Información básica */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Información General</h3>

          <p><strong>ID:</strong> {company.id}</p>
          <p><strong>RFC:</strong> {company.rfc}</p>
          <p><strong>Giro:</strong> {company.giro}</p>

          <p className="mt-2">
            <strong>Estatus:</strong>{" "}
            <span
              className={
                company.status === "activa"
                  ? "text-teal-400"
                  : "text-red-400"
              }
            >
              {company.status}
            </span>
          </p>

          <p><strong>Fecha Alta:</strong> {company.createdAt}</p>
        </div>

        {/* Métricas */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Métricas</h3>

          <p><strong>Facturas este mes:</strong> {company.facturasMes}</p>
          <p><strong>Mensajes este mes:</strong> {company.mensajesMes}</p>

          <p className="mt-2">
            <strong>Slots telefónicos:</strong>{" "}
            {company.phoneSlotsUsed} / {company.phoneSlotsQuota}
          </p>

          <p><strong>Plan:</strong> {company.planName}</p>
        </div>

        {/* Herramientas */}
        <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl col-span-2">
          <h3 className="text-xl font-semibold mb-4">Herramientas activas</h3>

          <ul className="grid grid-cols-5 gap-4">
            {Object.entries(company.tools).map(([tool, active]) => (
              <li
                key={tool}
                className={`p-3 rounded-lg text-center border ${
                  active
                    ? "border-teal-500 text-teal-400"
                    : "border-slate-600 text-slate-500"
                }`}
              >
                {tool.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal Editar */}
      <CompanyModal
        open={open}
        onClose={() => setOpen(false)}
        title="Editar empresa"
      >
        <EditCompanyForm
          company={company}
          onSubmit={(updated) => {
            updateCompany(updated); // ← AQUI SE ACTUALIZA EN EL STORE
            setOpen(false);
          }}
        />
      </CompanyModal>
    </div>
  );
}
