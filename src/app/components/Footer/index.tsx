export default function Footer() {
    return (
      <footer className="bg-[#400C0C] text-white py-6 mt-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Início</a>
            <a href="#" className="hover:text-gray-400">Sobre</a>
            <a href="#" className="hover:text-gray-400">Contato</a>
          </nav>
        </div>
      </footer>
    );
  }
  