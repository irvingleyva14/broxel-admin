// src/lib/chatbot.ts
import { useState } from "react";
import { num, pct } from "./helpers";

export type ChatMsg = {
  id: string;
  who: "user" | "assistant";
  text: string;
  ts: string;
};

export function useChatbot(selectedCompany?: any) {
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      id: "m1",
      who: "assistant",
      text: "Hola, soy tu asistente financiero. Puedo mostrar consumo y ayudarte con facturas.",
      ts: new Date().toISOString(),
    },
  ]);

  const send = (text: string) => {
    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    // Mensaje del usuario
    setMessages((m) => [...m, { id, who: "user", text, ts: now }]);

    // Respuesta mock
    let reply = "Usa: 'consumo', 'facturas', 'números'.";

    const t = text.toLowerCase();

    if (selectedCompany) {
      if (t.includes("consumo"))
        reply =
          `Facturas: ${selectedCompany.facturasMes}/${selectedCompany.cuotaMensualFacturas} (${pct(selectedCompany.facturasMes, selectedCompany.cuotaMensualFacturas)}%). ` +
          `Números activos: ${selectedCompany.phoneSlotsUsed}/${selectedCompany.phoneSlotsQuota}. ` +
          `Mensajes: ${num.format(selectedCompany.mensajesMes)}.`;

      if (t.includes("factura"))
        reply = `Llevas ${selectedCompany.facturasMes}/${selectedCompany.cuotaMensualFacturas}.`;

      if (t.includes("número") || t.includes("whatsapp"))
        reply = `Números activos: ${selectedCompany.phoneSlotsUsed}/${selectedCompany.phoneSlotsQuota}.`;
    }

    setMessages((m) => [
      ...m,
      {
        id: crypto.randomUUID(),
        who: "assistant",
        text: reply,
        ts: new Date().toISOString(),
      },
    ]);
  };

  return { messages, send };
}
