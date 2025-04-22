
import { HeartHandshake, Lightbulb, GraduationCap } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl scale-on-scroll">
      <div className="rounded-full bg-dias-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-dias-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  const values = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-dias-blue" />,
      title: "Atendimento Humanizado",
      description: "Valorizamos relacionamentos duradouros, compreendendo as necessidades únicas de cada cliente."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-dias-blue" />,
      title: "Simplicidade",
      description: "Traduzimos a complexidade contábil em linguagem acessível, facilitando suas decisões empresariais."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-dias-blue" />,
      title: "Educação Fiscal",
      description: "Capacitamos nossos clientes com conhecimento, promovendo boas práticas de gestão financeira."
    }
  ];

  return (
    <section id="about" className="section-padding bg-dias-gray">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-dias-blue mb-4">Sobre Nós</h2>
          <div className="h-1 w-20 bg-dias-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Há mais de 15 anos, o Escritório Dias Contabilidade oferece serviços contábeis de qualidade em São Joaquim da Barra e região, 
            com foco em atendimento personalizado e soluções eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="slide-on-scroll">
            <h3 className="text-2xl font-semibold text-dias-blue mb-4">Nossa História</h3>
            <p className="text-gray-600 mb-4">
              Fundado em 2008, o Escritório Dias nasceu com a missão de oferecer serviços contábeis que vão além dos números. 
              Acreditamos que a contabilidade deve ser uma ferramenta de crescimento para nossos clientes.
            </p>
            <p className="text-gray-600">
              Com uma equipe qualificada e em constante atualização, estamos preparados para enfrentar os desafios fiscais e 
              contábeis do seu negócio, sempre com foco em resultados e conformidade legal.
            </p>
          </div>
          
          <div className="h-64 md:h-auto bg-cover bg-center rounded-lg shadow-lg scale-on-scroll" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-dias-blue text-center mb-8">Nossos Valores</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
