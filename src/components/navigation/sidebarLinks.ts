// src/components/navigation/sidebarLinks.ts
import type { LucideIcon } from "lucide-react";
import { Home, BarChart, Building2 } from "lucide-react";

export type SidebarLink = {
  label: string;
  icon: LucideIcon;
  path: string;
};

export const sidebarLinks: SidebarLink[] = [
  {
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    label: "Overview",
    icon: BarChart,
    path: "/overview",
  },
  {
    label: "Empresas",
    icon: Building2,
    path: "/companies",
  },
];
