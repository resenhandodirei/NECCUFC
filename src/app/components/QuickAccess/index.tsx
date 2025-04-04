"use client";
import { Book, FileText, Calendar, Mail } from "lucide-react";

export default function QuickAccess() {
  const items = [
    { icon: <Book className="w-5 h-5" />, label: "Jurisprudências" },
    { icon: <FileText className="w-5 h-5" />, label: "Artigos" },
    { icon: <Calendar className="w-5 h-5" />, label: "Eventos" },
    { icon: <Mail className="w-5 h-5" />, label: "Contato" },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md space-y-2">
      <h2 className="text-sm font-bold text-gray-800">⚡ Acesso Rápido</h2>
      <div className="grid grid-cols-2 gap-3 mt-2">
        {items.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
