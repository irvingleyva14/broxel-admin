// src/mocks/users.ts
export const MOCK_USERS = [
  {
    id: "U-01",
    nombre: "Admin Broxel",
    telefono: "+52 55 5555 0101",
    rol: "Administrador",
    empresaId: "BRX-001",
    estado: "activo",
    limiteFacturas: null,
  },
  {
    id: "U-02",
    nombre: "Sofía López",
    telefono: "+52 999 123 7788",
    rol: "Operador",
    empresaId: "SRV-773",
    estado: "activo",
    limiteFacturas: 120,
  },
  {
    id: "U-03",
    nombre: "Carlos Pérez",
    telefono: "+52 81 5555 9090",
    rol: "Auditor",
    empresaId: "BRX-001",
    estado: "activo",
    limiteFacturas: 60,
  },
];
