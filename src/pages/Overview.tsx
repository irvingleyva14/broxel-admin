export default function Overview() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Overview</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 shadow">
          <h3 className="text-lg font-bold">Empresas Registradas</h3>
          <p className="text-3xl mt-3 text-teal-400">42</p>
        </div>

        <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 shadow">
          <h3 className="text-lg font-bold">Usuarios Activos</h3>
          <p className="text-3xl mt-3 text-teal-400">129</p>
        </div>

        <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 shadow">
          <h3 className="text-lg font-bold">Transacciones</h3>
          <p className="text-3xl mt-3 text-teal-400">$54,900</p>
        </div>
      </div>
    </div>
  );
}
