"use client";
import React from "react";
import SidebarPartners from "../SidebarPartners";

const highlights = [
  {
    title: "Novo artigo sobre LGPD",
    description: "Entenda os principais pontos da Lei Geral de Proteção de Dados.",
  },
  {
    title: "Evento: Semana da Privacidade",
    description: "Participe das palestras gratuitas e ganhe certificado.",
  },
  {
    title: "Atualização no Marco Civil",
    description: "Confira as mudanças propostas no novo PL de regulamentação da internet.",
  },
];

export default function SidebarHighlights() {
  return (
    <aside className="w-full max-w-xs p-4 bg-white rounded-2xl shadow-lg space-y-4">
      <h2 className="text-lg font-bold text-gray-800">📌 Destaques</h2>
      <ul className="space-y-3">
        {highlights.map((item, index) => (
          <li key={index} className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
