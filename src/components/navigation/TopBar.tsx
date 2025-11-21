// src/components/navigation/TopBar.tsx
import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

import { useNavigate } from "react-router-dom";
import { useCompaniesStore } from "@/features/companies/hooks/useCompaniesStore";
import { fuzzyMatch } from "@/lib/fuzzy";
import { highlight } from "@/lib/highlight";
import { matchAction } from "@/lib/actionSearch";

import { Bell, Search, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Building2, Sparkles, ArrowRight } from "lucide-react";
import { matchCompany } from "@/lib/companySearch";

export default function TopBar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const navigate = useNavigate();
    const { companies } = useCompaniesStore();
    const [query, setQuery] = useState("");
    const filteredCompanies = companies.filter((c) => matchCompany(c, query));

    const actionList = [
  { label: "Crear empresa", action: () => navigate("/companies") },
  { label: "Invitar usuario", action: () => navigate("/companies") },
  { label: "Ver logs", action: () => navigate("/companies") },
    ];

    const filteredActions = actionList.filter((a) =>
    matchAction(a.label, query)
    );


    // ⭐ Keyboard shortcut: Ctrl + K (Windows/Linux) / Cmd + K (Mac)
    useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);


  return (
    <>
      {/* TOPBAR MAIN */}
      <div className="flex items-center justify-between bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-xl shadow-sm backdrop-blur">

        {/* SEARCH BAR TRIGGER */}
        <button
          onClick={() => setSearchOpen(true)}
          className="
            flex items-center gap-2 px-3 py-1.5 rounded-lg
            bg-slate-800 text-slate-300
            hover:bg-slate-700 transition
            w-64
          "
        >
          <Search className="w-4 h-4 text-slate-400" />
          <span className="text-sm text-slate-400">Buscar…</span>

          {/* Keyboard hint */}
          <span className="ml-auto text-[10px] text-slate-500 border border-slate-600 rounded px-1">
            Ctrl + K
          </span>
        </button>

        {/* RIGHT SIDE: ACTIONS */}
        <div className="flex items-center gap-4">

          {/* QUICK ACTIONS MENU */}
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 hover:bg-slate-800 rounded-xl transition">
              <MoreHorizontal className="w-5 h-5 text-slate-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-slate-900 border border-slate-700 text-slate-300"
            >
              <DropdownMenuItem>Crear Empresa</DropdownMenuItem>
              <DropdownMenuItem>Invitar Usuario</DropdownMenuItem>
              <DropdownMenuItem>Ver Logs</DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* NOTIFICATIONS */}
          <button className="relative p-2 hover:bg-slate-800 rounded-xl transition">
            <Bell className="w-5 h-5 text-slate-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-teal-400 rounded-full"></span>
          </button>

          {/* USER MENU */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-9 w-9 border border-slate-700">
                <AvatarFallback>IL</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-slate-900 border border-slate-700 text-slate-300"
            >
              <DropdownMenuItem>Mi Perfil</DropdownMenuItem>
              <DropdownMenuItem>Preferencias</DropdownMenuItem>
              <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>

      {/* SPOTLIGHT SEARCH */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <Command className="bg-slate-900 text-slate-100 border border-slate-700">
          <CommandInput placeholder="Busca empresas, usuarios o acciones…" 
            value={query}
            onValueChange={setQuery}       
          />
          <CommandList>
            <CommandGroup heading="Acciones">
            {filteredActions.map((a, i) => (
                <CommandItem
                key={i}
                onSelect={() => {
                    a.action();
                    setSearchOpen(false);
                }}
                >
                <Sparkles className="w-4 h-4 text-purple-300 mr-2" />

                <span
                    dangerouslySetInnerHTML={{
                    __html: highlight(a.label, query),
                    }}
                />
                </CommandItem>
            ))}
            </CommandGroup>


            {/* NAVEGACION */}
            <CommandGroup heading="Navegación">
            <CommandItem onSelect={() => navigate("/")}>
                <ArrowRight className="w-4 h-4 text-sky-300 mr-2" />
                Home
            </CommandItem>

            <CommandItem onSelect={() => navigate("/overview")}>
                <ArrowRight className="w-4 h-4 text-sky-300 mr-2" />
                Overview
            </CommandItem>

            <CommandItem onSelect={() => navigate("/companies")}>
                <ArrowRight className="w-4 h-4 text-sky-300 mr-2" />
                Empresas
            </CommandItem>
            </CommandGroup>

            {/* EMPRESAS */}
            <CommandGroup heading="Empresas">
            {filteredCompanies.length === 0 && (
                <CommandItem disabled>No hay coincidencias</CommandItem>
            )}

            {filteredCompanies.map((company) => (
                <CommandItem
                key={company.id}
                onSelect={() => {
                    navigate(`/companies/${company.id}/admin`);
                    setSearchOpen(false);
                }}
                >
                <Building2 className="w-4 h-4 text-teal-300 mr-2" />

                {/* Nombre resaltado */}
                <span
                    dangerouslySetInnerHTML={{
                    __html: highlight(company.nombre, query),
                    }}
                />

                {/* RFC a la derecha */}
                <span
                    className="ml-auto text-xs text-slate-500"
                    dangerouslySetInnerHTML={{
                    __html: highlight(company.rfc, query),
                    }}
                />
                </CommandItem>
            ))}
            </CommandGroup>

            {/* ACCIONES RAPIDAS */}
            <CommandGroup heading="Acciones rápidas">
            <CommandItem onSelect={() => {
                navigate("/companies");
                setSearchOpen(false);
            }}>
                <Sparkles className="w-4 h-4 text-purple-300 mr-2" />
                Crear empresa
            </CommandItem>

            <CommandItem onSelect={() => {
                navigate("/overview");
                setSearchOpen(false);
            }}>
                <Sparkles className="w-4 h-4 text-purple-300 mr-2" />
                Métricas globales
            </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
