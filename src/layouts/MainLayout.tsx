import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">

      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6">
        <h1 className="text-xl font-bold mb-8">Broxel Admin</h1>

        <nav className="space-y-4">
          <Link to="/" className="block hover:text-teal-400">Home</Link>
          <Link to="/overview" className="block hover:text-teal-400">Overview</Link>
          <Link to="/companies" className="block hover:text-teal-400">Empresas</Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
