import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navItem = (to: string, label: string, Icon: any) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-xl text-sm transition-colors
         ${
           isActive
             ? "bg-slate-800 text-teal-300 font-semibold"
             : "text-slate-300 hover:bg-slate-800 hover:text-teal-300"
         }`
      }
    >
      <Icon className="h-4 w-4" />
      {label}
    </NavLink>
  );

  return (
    <aside
      className="w-60 h-screen bg-slate-900 border-r border-slate-800
                 text-slate-200 flex flex-col py-6"
    >
      {/* Logo */}
      <div className="px-6 mb-6 flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-slate-800 text-white grid place-items-center font-bold">
          BX
        </div>
        <span className="text-lg font-semibold text-slate-100">Broxel Admin</span>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-1 px-2">
        {navItem("/overview", "Dashboard", LayoutDashboard)}
        {navItem("/companies", "Empresas", Building2)}
        {navItem("/settings", "Ajustes", Settings)}
      </nav>

      {/* Logout */}
      <div className="mt-auto px-2">
        <button
          className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm
                     text-red-300 hover:bg-red-900/30 hover:text-red-200"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
