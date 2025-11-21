// src/layouts/MainLayout.tsx

import { Outlet, NavLink } from "react-router-dom";
import AppBreadcrumbs from "@/components/navigation/AppBreadcrumbs";
import TopBar from "@/components/navigation/TopBar";
import { sidebarLinks } from "@/components/navigation/sidebarLinks";
import { Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">

      {/* SIDEBAR COLAPSABLE */}
      <TooltipProvider delayDuration={150}>
        <aside
          className="
            group
            bg-slate-900
            border-r border-slate-800
            transition-all duration-300 ease-\[cubic-bezier(0.25,0.8,0.25,1)\]
            w-20 hover:w-64
            flex flex-col
            z-20
          "
        >
          {/* LOGO */}
          <div className="h-16 flex items-center border-b border-slate-800 px-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-teal-600 grid place-items-center text-slate-950 font-extrabold">
                BX
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-100 font-bold text-lg whitespace-nowrap">
                Broxel Admin
              </span>
            </div>
          </div>

          {/* LINKS */}
          <nav className="flex-1 px-2 py-6 space-y-2">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Tooltip key={link.path}>
                  <TooltipTrigger asChild>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `
                        flex items-center gap-4 p-3 rounded-xl 
                        transition-all duration-300
                        ${isActive
                          ? "bg-slate-800 text-teal-300"
                          : "text-slate-300 hover:bg-slate-800 hover:text-teal-200"}
                      `
                      }
                    >
                      <Icon className="w-5 h-5 shrink-0" />

                      {/* LABEL (solo visible cuando el sidebar está expandido) */}
                      <span
                        className="
                          whitespace-nowrap
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-200 delay-100
                          text-sm font-medium
                        "
                      >
                        {link.label}
                      </span>
                    </NavLink>
                  </TooltipTrigger>

                  {/* TOOLTIP (solo cuando el sidebar está colapsado) */}
                  <TooltipContent
                    side="right"
                    className="
                      group-hover:hidden
                      bg-slate-700 text-slate-100 border border-slate-600
                      px-3 py-1 rounded-md text-xs shadow-lg
                    "
                  >
                    {link.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </nav>

          {/* FOOTER (Settings) */}
          <div className="w-5 h-5 shrink-0">
            <button
              className="
                w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 
                hover:bg-slate-800 hover:text-teal-300 transition-all
              "
            >
              <Settings className="w-5 h-5" />
              <span
                className="
                  whitespace-nowrap opacity-0 group-hover:opacity-100 
                  transition-opacity text-sm
                "
              >
                Configuración
              </span>
            </button>
          </div>
        </aside>
      </TooltipProvider>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-10 bg-slate-950 space-y-6">
        {/* BREADCRUMBS */}
        <div className="mb-2">
          <AppBreadcrumbs />
        </div>

        {/* TOPBAR */}
        <div className="mb-6">
          <TopBar />
        </div>

        {/* CONTENIDO DE LA PÁGINA */}
        <Outlet />
      </main>
    </div>
  );
}
