export default function JurisprudenciaCards() {
    const jurisprudencias = [
      {
        titulo: "STJ: Violação de domicílio e flagrante delito",
        resumo:
          "O STJ entendeu ser legítima a entrada em domicílio sem mandado judicial quando houver fundada suspeita de crime permanente, como o tráfico de drogas.",
        tribunal: "STJ",
        data: "Março de 2025",
      },
      {
        titulo: "STF: Uso de algemas em audiências",
        resumo:
          "O STF reafirmou a súmula vinculante nº 11, destacando que o uso de algemas deve ser justificado por risco à segurança ou à ordem pública, sendo proibido de forma genérica.",
        tribunal: "STF",
        data: "Fevereiro de 2025",
      },
      {
        titulo: "STJ: Prescrição retroativa e progressão de regime",
        resumo:
          "A Corte reconheceu a possibilidade de progressão de regime mesmo diante de prescrição da pretensão executória, quando houver cumprimento parcial da pena.",
        tribunal: "STJ",
        data: "Janeiro de 2025",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Jurisprudências Recentes
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jurisprudencias.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#400C0C] mb-2">
                  {item.titulo}
                </h3>
                <p className="text-gray-700 text-sm mb-3">{item.resumo}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span>{item.tribunal}</span>
                <span>{item.data}</span>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-center mt-10">
          <a
            href="/jurisprudencias-recentes"
            className="px-6 py-3 bg-[#400C0C] text-white rounded-lg hover:bg-[#BF9411] transition-all text-sm font-medium"
          >
            Veja mais jurisprudências
          </a>
        </div>
      </section>
    );
  }
  