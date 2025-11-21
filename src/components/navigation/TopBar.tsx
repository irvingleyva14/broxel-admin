// src/components/navigation/TopBar.tsx

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Bell, User } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-2 backdrop-blur-sm">

      {/* BUSCADOR */}
      <div className="relative w-1/2">
        <Search className="h-4 w-4 absolute top-2.5 left-3 text-slate-400" />
        <Input
          placeholder="Buscar empresas, usuarios, facturas..."
          className="bg-slate-800 border-slate-700 pl-10 text-slate-200 placeholder:text-slate-500 rounded-xl"
        />
      </div>

      {/* ICONOS DERECHA */}
      <div className="flex items-center gap-3">

        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl text-slate-300 hover:text-teal-300 hover:bg-slate-800"
        >
          <Bell className="h-5 w-5" />
        </Button>

        {/* AVATAR */}
        <div className="h-9 w-9 rounded-xl bg-teal-600 text-white grid place-items-center font-semibold cursor-pointer hover:bg-teal-500">
          <User className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
