type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  onAddCompany: () => void;
};

export default function CompaniesToolbar({
  search,
  onSearchChange,
  onAddCompany,
}: Props) {
  return (
    <div className="mb-6 flex items-center justify-between">
      {/* Search input */}
      <input
        type="text"
        placeholder="Buscar empresa (nombre / RFC / giro)"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-80 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      {/* Button */}
      <button
        onClick={onAddCompany}
        className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-white font-medium"
      >
        + Agregar Empresa
      </button>
    </div>
  );
}
