import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBreadcrumbs from "@/components/navigation/AppBreadcrumbs";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">

      {/* SIDEBAR */}
      <aside className="w-64 border-r border-slate-800 p-6 bg-slate-900">
        <h1 className="text-xl font-bold mb-8">Broxel Admin</h1>

        <nav className="space-y-4">
          <Link to="/" className="block hover:text-teal-400">
            Home
          </Link>
          <Link to="/overview" className="block hover:text-teal-400">
            Overview
          </Link>
          <Link to="/companies" className="block hover:text-teal-400">
            Empresas
          </Link>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-10 bg-slate-950 space-y-6">

        {/* BREADCRUMBS */}
        <div className="mb-2">
          <AppBreadcrumbs />
        </div>

        {/* CONTENIDO DE LA PÁGINA */}
        <Outlet />
      </main>
    </div>
  );
}
