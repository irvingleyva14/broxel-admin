import { useState } from "react";
import { Company } from "../types/company.types";

type Props = {
  onSubmit: (data: Omit<Company, "id" | "createdAt" | "tools">) => void;
};

export default function NewCompanyForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    nombre: "",
    rfc: "",
    giro: "",
    planName: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre.trim() || !form.rfc.trim() || !form.giro.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    onSubmit({
      ...form,
      facturasMes: 0,
      cuotaMensualFacturas: 0,
      phoneSlotsUsed: 0,
      phoneSlotsQuota: 0,
      mensajesMes: 0,
      status: "activa",
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1">Nombre</label>
        <input
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded"
          value={form.nombre}
          onChange={(e) => handleChange("nombre", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1">RFC</label>
        <input
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded"
          value={form.rfc}
          onChange={(e) => handleChange("rfc", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1">Giro</label>
        <input
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded"
          value={form.giro}
          onChange={(e) => handleChange("giro", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1">Plan</label>
        <input
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded"
          value={form.planName}
          onChange={(e) => handleChange("planName", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded text-white font-medium"
      >
        Registrar Empresa
      </button>
    </form>
  );
}
