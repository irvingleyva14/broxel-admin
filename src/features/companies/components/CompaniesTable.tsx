import { Company } from "../types/company.types";

type Props = {
  companies: Company[];
};

export default function CompaniesTable({ companies }: Props) {
  return (
    <table className="w-full border-collapse border border-slate-800">
      <thead className="bg-slate-900 text-slate-300">
        <tr>
          <th className="border border-slate-800 p-3">ID</th>
          <th className="border border-slate-800 p-3">Nombre</th>
          <th className="border border-slate-800 p-3">RFC</th>
          <th className="border border-slate-800 p-3">Giro</th>
          <th className="border border-slate-800 p-3">Estatus</th>
          <th className="border border-slate-800 p-3">Plan</th>
          <th className="border border-slate-800 p-3">Facturas Mes</th>
          <th className="border border-slate-800 p-3">Mensajes Mes</th>
          <th className="border border-slate-800 p-3">Alta</th>
        </tr>
      </thead>

      <tbody>
        {companies.map((c) => (
          <tr
            key={c.id}
            className="hover:bg-slate-800 cursor-pointer"
            onClick={() => (window.location.href = `/companies/${c.id}`)}
          >
            <td className="border border-slate-800 p-3">{c.id}</td>
            <td className="border border-slate-800 p-3">{c.nombre}</td>
            <td className="border border-slate-800 p-3">{c.rfc}</td>
            <td className="border border-slate-800 p-3">{c.giro}</td>
            <td className="border border-slate-800 p-3">
              <span
                className={
                  c.status === "activa"
                    ? "text-teal-400"
                    : "text-red-400"
                }
              >
                {c.status}
              </span>
            </td>
            <td className="border border-slate-800 p-3">{c.planName}</td>
            <td className="border border-slate-800 p-3">{c.facturasMes}</td>
            <td className="border border-slate-800 p-3">{c.mensajesMes}</td>
            <td className="border border-slate-800 p-3">{c.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}