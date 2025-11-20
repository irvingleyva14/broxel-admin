// src/features/companyAdmin/components/UsersList.tsx

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Search, Trash2, UserPlus } from "lucide-react";
import { MOCK_USERS } from "@/mocks/users";
import { initials } from "@/lib/helpers";

type UsersListProps = {
  companyId: string;
};

export default function UsersList({ companyId }: UsersListProps) {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [rol, setRol] = useState<
    "Administrador" | "Operador" | "Auditor"
  >("Operador");
  const [limite, setLimite] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [users, setUsers] = useState(() =>
    MOCK_USERS.filter((u) => u.empresaId === companyId)
  );

  const isPhoneTaken = (phone: string) =>
    MOCK_USERS.some((u) => u.telefono === phone && u.empresaId !== companyId);

  const addUser = () => {
    setError(null);

    if (!telefono.startsWith("+52") || telefono.replace(/\D/g, "").length < 12) {
      setError("Formato telefónico inválido (usa E.164)");
      return;
    }

    if (isPhoneTaken(telefono)) {
      setError("Este teléfono ya está asociado a otra empresa.");
      return;
    }

    const nuevo = {
      id: crypto.randomUUID(),
      nombre,
      telefono,
      rol,
      empresaId: companyId,
      estado: "activo" as const,
      limiteFacturas: limite ? Number(limite) : null,
    };

    MOCK_USERS.push(nuevo);
    setUsers(MOCK_USERS.filter((u) => u.empresaId === companyId));
    setOpen(false);

    setNombre("");
    setTelefono("");
    setRol("Operador");
    setLimite("");
  };

  const removeUser = (id: string) => {
    const idx = MOCK_USERS.findIndex((u) => u.id === id);
    if (idx >= 0) {
      MOCK_USERS.splice(idx, 1);
      setUsers(MOCK_USERS.filter((u) => u.empresaId === companyId));
    }
  };

  const updateLimit = (id: string, value: string) => {
    const lim = value ? Number(value) : null;
    const u = MOCK_USERS.find((x) => x.id === id);
    if (u) {
      u.limiteFacturas = lim;
      setUsers(MOCK_USERS.filter((u) => u.empresaId === companyId));
    }
  };

  return (
    <Card className="rounded-2xl shadow-sm bg-slate-900 border border-slate-700 text-slate-200">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl flex items-center gap-2 text-slate-100">
          <UserPlus className="h-5 w-5 text-teal-300" />
          Usuarios / Números
        </CardTitle>

        <div className="flex items-center gap-2">
          {/* Buscador */}
          <div className="relative hidden md:block">
            <Search className="h-4 w-4 absolute left-2 top-2.5 text-slate-400" />
            <Input
              placeholder="Buscar nombre o teléfono"
              className="pl-8 rounded-2xl bg-slate-800 border-slate-600 text-slate-200"
            />
          </div>

          {/* BOTÓN AGREGAR → CORREGIDO A OSCURO */}
          <Button
            className="rounded-2xl bg-slate-800 border border-slate-600 text-slate-200 hover:bg-slate-700"
            onClick={() => setOpen(true)}
          >
            <UserPlus className="h-4 w-4 mr-2 text-teal-300" />
            Agregar
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid md:grid-cols-2 gap-3">
          {users.map((u) => (
            <div
              key={u.id}
              className="flex items-center gap-3 p-3 rounded-2xl border border-slate-700 bg-slate-800"
            >
              {/* AVATAR → CORREGIDO A OSCURO */}
              <Avatar className="h-9 w-9 bg-slate-700 text-slate-200 border border-slate-600">
                <AvatarFallback className="bg-slate-700 text-slate-200">
                  {initials(u.nombre)}
                </AvatarFallback>
              </Avatar>

              {/* Información */}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-slate-100 truncate">
                  {u.nombre}
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  {u.telefono}
                </div>

                {/* Límite de facturas */}
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Límite de facturas:</span>

                  <input
                    type="number"
                    min={0}
                    value={u.limiteFacturas ?? ""}
                    onChange={(e) => updateLimit(u.id, e.target.value)}
                    placeholder="—"
                    className="border rounded-xl px-2 py-1 w-24 text-xs bg-slate-700 border-slate-600 text-slate-200"
                  />
                </div>
              </div>

              {/* Rol + Eliminar */}
              <div className="flex items-center gap-2">
                <Badge className="rounded-full bg-slate-700 text-slate-200 border border-slate-600">
                  {u.rol}
                </Badge>

                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-2xl text-red-400 hover:bg-red-900/30"
                  title="Eliminar"
                  onClick={() => removeUser(u.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {users.length === 0 && (
            <div className="text-sm text-slate-400">Sin usuarios registrados.</div>
          )}
        </div>
      </CardContent>

      {/* Modal agregar usuario */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-xl w-full max-w-lg p-5 text-slate-200">
            <div className="text-lg font-semibold mb-2">Agregar usuario / número</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-slate-300">Nombre</Label>
                <Input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre y apellidos"
                  className="bg-slate-800 border-slate-600 text-slate-200"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-slate-300">Teléfono (E.164)</Label>
                <Input
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="+52 55 0000 0000"
                  className="bg-slate-800 border-slate-600 text-slate-200"
                />
                <div className="text-xs text-slate-500">
                  Un teléfono sólo puede pertenecer a una empresa.
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-slate-300">Rol</Label>
                <Select value={rol} onValueChange={(v) => setRol(v as any)}>
                  <SelectTrigger className="rounded-2xl bg-slate-800 border-slate-600 text-slate-200">
                    <SelectValue placeholder="Rol" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border border-slate-700 text-slate-200">
                    <SelectItem value="Administrador">Administrador</SelectItem>
                    <SelectItem value="Operador">Operador</SelectItem>
                    <SelectItem value="Auditor">Auditor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label className="text-slate-300">Límite de facturas</Label>
                <Input
                  type="number"
                  min={0}
                  value={limite}
                  onChange={(e) => setLimite(e.target.value)}
                  placeholder="Ej. 150"
                  className="bg-slate-800 border-slate-600 text-slate-200"
                />
              </div>
            </div>

            {error && <div className="mt-2 text-sm text-red-400">{error}</div>}

            <div className="mt-4 flex items-center justify-end gap-2">
              <Button
                variant="outline"
                className="rounded-2xl bg-slate-800 border-slate-600 text-slate-200"
                onClick={() => {
                  setOpen(false);
                  setError(null);
                }}
              >
                Cancelar
              </Button>

              <Button
                onClick={addUser}
                className="rounded-2xl bg-teal-600 hover:bg-teal-500 text-white"
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
