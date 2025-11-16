export type CompanyTools = {
  base: boolean;
  pred: boolean;
  fact: boolean;
  banca: boolean;
  inv: boolean;
};

export type Company = {
  id: string;
  nombre: string;
  rfc: string;
  giro: string;
  status: "activa" | "suspendida";
  createdAt: string;
  facturasMes: number;
  cuotaMensualFacturas: number;
  phoneSlotsUsed: number;
  phoneSlotsQuota: number;
  mensajesMes: number;
  planName: string;
  tools: CompanyTools;
};
