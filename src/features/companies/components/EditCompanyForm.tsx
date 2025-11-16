import { useState } from "react";
import { Company } from "../types/company.types";

type Props = {
  company: Company;
  onSubmit: (data: Company) => void;
};

type FormErrors = {
  nombre?: string;
  rfc?: string;
  giro?: string;
  planName?: string;
};

export default function EditCompanyForm({ company, onSubmit }: Props) {
  const [form, setForm] = useState<Company>({ ...company });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (key: keyof Company, value: any) => {
    setForm({
      ...form,
      [key]: value,
    });

    if (key in errors) {
      setErrors({
        ...errors,
        [key]: undefined,
      });
    }
  };

  const handleToolChange = (key: keyof Company["tools"]) => {
    setForm({
      ...form,
      tools: {
        ...form.tools,
        [key]: !form.tools[key],
      },
    });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!form.rfc.trim()) {
      newErrors.rfc = "El RFC es obligatorio.";
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
    onSubmit(form);
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

      {/* Estado */}
      <div>
        <label className="block mb-1">Estado</label>
        <select
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded"
          value={form.status}
          onChange={(e) => handleChange("status", e.target.value)}
        >
          <option value="activa">Activa</option>
          <option value="suspendida">Suspendida</option>
        </select>
      </div>

      {/* Herramientas */}
      <div>
        <label className="block mb-1">Herramientas</label>
        <div className="grid grid-cols-5 gap-2">
          {Object.entries(form.tools).map(([tool, active]) => (
            <button
              type="button"
              key={tool}
              onClick={() => handleToolChange(tool as keyof Company["tools"])}
              className={`px-2 py-2 rounded border ${
                active
                  ? "border-teal-500 text-teal-400"
                  : "border-slate-500 text-slate-500"
              }`}
            >
              {tool.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded text-white font-medium"
      >
        {isSubmitting ? "Guardando..." : "Guardar Cambios"}
      </button>
    </form>
  );
}
