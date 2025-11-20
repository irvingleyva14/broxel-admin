// src/features/companyAdmin/components/AssistantPanel.tsx

import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Bot } from "lucide-react";
import { useChatbot } from "@/lib/chatbot";

type AssistantPanelProps = {
  company: any;
  title: string;
};

export default function AssistantPanel({ company, title }: AssistantPanelProps) {
  const { messages, send } = useChatbot(company);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Card className="rounded-2xl shadow-sm bg-slate-900 border border-slate-700 text-slate-200 h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2 text-slate-100">
          <Bot className="h-5 w-5 text-teal-300" />
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`
                max-w-[85%] rounded-2xl p-3 text-sm
                ${m.who === "assistant"
                  ? "bg-slate-800 border border-slate-700 text-slate-200"
                  : "bg-teal-700 text-white ml-auto"}
              `}
            >
              <div className="opacity-60 text-[11px] mb-1">
                {new Date(m.ts).toLocaleString()}
              </div>

              <div>{m.text}</div>
            </div>
          ))}

          <div ref={endRef} />
        </div>

        {/* Caja de texto */}
        <div className="mt-3 flex items-center gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe tu mensaje…"
            className="rounded-2xl bg-slate-800 border-slate-600 text-slate-200"
          />

          <Button
            onClick={() => {
              if (!text.trim()) return;
              send(text.trim());
              setText("");
            }}
            className="rounded-2xl bg-teal-600 hover:bg-teal-500"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Enviar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
