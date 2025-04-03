export default function HomeFeed() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Bem-vindo ao Feed</h1>
          
          <div className="space-y-8">
            {[1, 2, 3, 4].map((post) => (
              <div 
                key={post} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-800">Post {post}</h2>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Este é um exemplo de postagem no feed. Adicione aqui uma breve descrição para engajar os leitores.
                </p>
                <button className="mt-5 px-5 py-2 bg-[#400C0C] text-white font-medium rounded-lg hover:bg-[#BF9411] transition-all">
                  Leia mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }