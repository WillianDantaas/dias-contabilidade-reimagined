
import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Briefcase, Users, Award, MessageSquare, Phone } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home", icon: <Home className="w-4 h-4 mr-1" /> },
  { name: "Sobre", href: "#about", icon: <Info className="w-4 h-4 mr-1" /> },
  { name: "Serviços", href: "#services", icon: <Briefcase className="w-4 h-4 mr-1" /> },
  { name: "Equipe", href: "#team", icon: <Users className="w-4 h-4 mr-1" /> },
  { name: "Parceiros", href: "#partners", icon: <Award className="w-4 h-4 mr-1" /> },
  { name: "Depoimentos", href: "#testimonials", icon: <MessageSquare className="w-4 h-4 mr-1" /> },
  { name: "Contato", href: "#contact", icon: <Phone className="w-4 h-4 mr-1" /> },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center">
            <span className="text-xl font-bold text-dias-blue font-poppins">
              Escritório Dias<span className="text-dias-orange">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="flex items-center text-sm font-medium px-2 py-1 rounded transition-colors hover:text-dias-blue group"
              >
                <span className="group-hover:opacity-100">{link.icon}</span>
                {link.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-dias-blue mt-0.5"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-3 px-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center text-sm font-medium p-2 rounded hover:bg-dias-gray transition-colors"
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
