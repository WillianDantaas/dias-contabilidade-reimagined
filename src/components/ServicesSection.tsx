
import { useState } from "react";
import { Calculator, FileText, Building, Smartphone, ChevronRight } from "lucide-react";

// Service categories and items
const serviceCategories = [
  { id: "all", label: "Todos" },
  { id: "tax", label: "Fiscal" },
  { id: "accounting", label: "Contábil" },
  { id: "corporate", label: "Empresarial" },
  { id: "digital", label: "Digital" },
];

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string[];
}

const services: Service[] = [
  {
    id: "tax-planning",
    title: "Planejamento Tributário",
    description: "Análise da melhor forma de tributação para sua empresa, reduzindo legalmente a carga tributária.",
    icon: <Calculator className="w-8 h-8 text-dias-blue" />,
    category: ["tax"],
  },
  {
    id: "fiscal-advisory",
    title: "Consultoria Fiscal",
    description: "Orientação sobre obrigações fiscais e acompanhamento de procedimentos junto às autoridades fiscais.",
    icon: <FileText className="w-8 h-8 text-dias-blue" />,
    category: ["tax", "accounting"],
  },
  {
    id: "accounting-records",
    title: "Escrituração Contábil",
    description: "Registro e análise de todas as movimentações financeiras da sua empresa, garantindo conformidade legal.",
    icon: <FileText className="w-8 h-8 text-dias-blue" />,
    category: ["accounting"],
  },
  {
    id: "company-opening",
    title: "Abertura de Empresas",
    description: "Assessoria completa para a constituição da sua empresa, desde o registro até as licenças necessárias.",
    icon: <Building className="w-8 h-8 text-dias-blue" />,
    category: ["corporate"],
  },
  {
    id: "business-restructuring",
    title: "Reestruturação Societária",
    description: "Análise e implementação de alterações na estrutura societária da sua empresa.",
    icon: <Building className="w-8 h-8 text-dias-blue" />,
    category: ["corporate"],
  },
  {
    id: "digital-certification",
    title: "Certificação Digital",
    description: "Emissão e renovação de certificados digitais para pessoas físicas e jurídicas.",
    icon: <Smartphone className="w-8 h-8 text-dias-blue" />,
    category: ["digital"],
  },
  {
    id: "payroll",
    title: "Departamento Pessoal",
    description: "Administração completa da folha de pagamento, admissão, demissão e obrigações trabalhistas.",
    icon: <FileText className="w-8 h-8 text-dias-blue" />,
    category: ["accounting"],
  },
  {
    id: "nfe",
    title: "Emissão de NFe",
    description: "Configuração e suporte para emissão de notas fiscais eletrônicas.",
    icon: <Smartphone className="w-8 h-8 text-dias-blue" />,
    category: ["digital", "tax"],
  },
  {
    id: "company-closing",
    title: "Encerramento de Empresas",
    description: "Assessoria completa para o encerramento legal de atividades empresariais.",
    icon: <Building className="w-8 h-8 text-dias-blue" />,
    category: ["corporate"],
  },
];

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category.includes(selectedCategory));

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-dias-blue mb-4">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-dias-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções contábeis completas, adaptadas às necessidades do seu negócio. 
            Conheça nossos principais serviços:
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-dias-blue text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 scale-on-scroll group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-dias-blue mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm font-medium text-dias-blue opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Saiba mais <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
