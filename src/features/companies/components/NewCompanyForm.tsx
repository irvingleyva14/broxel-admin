import { useState } from "react";
import { Company } from "../types/company.types";

type Props = {
  onSubmit: (data: Omit<Company, "id" | "createdAt" | "tools">) => void;
};

type FormState = {
  nombre: string;
  rfc: string;
  giro: string;
  planName: string;
};

type FormErrors = Partial<FormState>;

export default function NewCompanyForm({ onSubmit }: Props) {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    rfc: "",
    giro: "",
    planName: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (key: keyof FormState, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });

    // Limpiar error del campo que se está escribiendo
    if (errors[key]) {
      setErrors({
        ...errors,
        [key]: undefined,
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!form.rfc.trim()) {
      newErrors.rfc = "El RFC es obligatorio.";
    } else if (form.rfc.length < 10) {
      newErrors.rfc = "El RFC debe tener al menos 10 caracteres.";
    }

    if (!form.giro.trim()) {
      newErrors.giro = "El giro es obligatorio.";
    }

    if (!form.planName.trim()) {
      newErrors.planName = "El plan es obligatorio.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    onSubmit({
      ...form,
      facturasMes: 0,
      cuotaMensualFacturas: 0,
      phoneSlotsUsed: 0,
      phoneSlotsQuota: 0,
      mensajesMes: 0,
      status: "activa",
    });

    setIsSubmitting(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Nombre */}
      <div>
        <label className="block mb-1">Nombre</label>
        <input
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded"
          value={form.nombre}
          onChange={(e) => handleChange("nombre", e.target.value)}
        />
        {errors.nombre && (
          <p className="text-sm text-red-400 mt-1">{errors.nombre}</p>
        )}
      </div>

      {/* RFC */}
      <div>
        <label className="block mb-1">RFC</label>
        <input
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded uppercase"
          value={form.rfc}
          onChange={(e) => handleChange("rfc", e.target.value.toUpperCase())}
        />
        {errors.rfc && (
          <p className="text-sm text-red-400 mt-1">{errors.rfc}</p>
        )}
      </div>

      {/* Giro */}
      <div>
        <label className="block mb-1">Giro</label>
        <input
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded"
          value={form.giro}
          onChange={(e) => handleChange("giro", e.target.value)}
        />
        {errors.giro && (
          <p className="text-sm text-red-400 mt-1">{errors.giro}</p>
        )}
      </div>

      {/* Plan */}
      <div>
        <label className="block mb-1">Plan</label>
        <input
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded"
          value={form.planName}
          onChange={(e) => handleChange("planName", e.target.value)}
        />
        {errors.planName && (
          <p className="text-sm text-red-400 mt-1">{errors.planName}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded text-white font-medium"
      >
        {isSubmitting ? "Registrando..." : "Registrar Empresa"}
      </button>
    </form>
  );
}
