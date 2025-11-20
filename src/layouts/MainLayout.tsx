import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AppBreadcrumbs from "@/components/navigation/AppBreadcrumbs";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">

      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">

        {/* Breadcrumbs */}
        <AppBreadcrumbs />

        {/* Contenido */}
        <Outlet />
      </main>
    </div>
  );
}
