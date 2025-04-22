
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dias-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Escritório Dias</h3>
            <p className="text-white/80 mb-4">
              Serviços contábeis personalizados para empresas e profissionais em São Joaquim da Barra e região.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-dias-yellow transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-dias-yellow transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-dias-yellow transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-dias-yellow transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-dias-yellow transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-dias-yellow transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-dias-yellow transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-dias-yellow transition-colors">Equipe</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-dias-yellow transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-dias-yellow transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Legal Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-white/80">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h (mediante agendamento)</li>
              <li>Domingo: Fechado</li>
            </ul>
            <div className="mt-4">
              <a 
                href="https://wa.me/5516999999999" 
                className="inline-flex items-center px-4 py-2 bg-green-600 rounded-md text-white font-medium hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale por WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Escritório Dias Contabilidade. Todos os direitos reservados.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a> | 
            <a href="#" className="hover:text-white transition-colors ml-2">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
