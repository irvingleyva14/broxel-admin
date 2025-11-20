// src/mocks/audit.ts
export const MOCK_AUDIT = [
  {
    ts: "2025-10-30 09:20",
    actor: "U-01",
    empresaId: "BRX-001",
    action: "Emisión de factura",
    meta: { folio: "F-2025-000987" },
  },
  {
    ts: "2025-11-07 18:44",
    actor: "U-01",
    empresaId: "BRX-001",
    action: "Regeneración API Key",
    meta: { kid: "k_live_8rZ..." },
  },
  {
    ts: "2025-11-10 12:03",
    actor: "U-02",
    empresaId: "SRV-773",
    action: "Alta de usuario",
    meta: { tel: "+52 999 123 7788" },
  },
];
