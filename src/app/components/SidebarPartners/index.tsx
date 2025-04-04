import { Briefcase, GraduationCap, Gavel } from "lucide-react";

export default function SidebarPartners() {
  const partners = [
    {
      nome: "Instituto JusFuturo",
      descricao: "Pesquisas em Direito e Inovação.",
      icon: <GraduationCap className="w-6 h-6 text-[#400C0C]" />,
    },
    {
      nome: "LegalTech Alliance",
      descricao: "Tecnologia aplicada à Justiça.",
      icon: <Briefcase className="w-6 h-6 text-[#400C0C]" />,
    },
    {
      nome: "Escritório Penal & Cia",
      descricao: "Especialistas em Ciências Criminais.",
      icon: <Gavel className="w-6 h-6 text-[#400C0C]" />,
    },
  ];

  return (
    <aside className="w-full max-w-xs mt-20 px-4">
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold text-[#400C0C] mb-4">
          Nossos Parceiros
        </h2>
        <ul className="space-y-4">
          {partners.map((partner, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="mt-1">{partner.icon}</div>
              <div>
                <p className="font-semibold text-gray-800">{partner.nome}</p>
                <p className="text-sm text-gray-600">{partner.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
