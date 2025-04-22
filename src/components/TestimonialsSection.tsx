
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Paula Santos",
    company: "Mercado São Paulo",
    text: "O Escritório Dias revolucionou nossa gestão contábil. Agora temos informações claras e podemos tomar decisões com mais segurança. A equipe é extremamente atenciosa e competente.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    company: "RM Soluções Tecnológicas",
    text: "Trabalhar com o Escritório Dias foi a melhor decisão que tomamos. Sua orientação nos ajudou a economizar significativamente em impostos e a manter nossa empresa em plena conformidade com a legislação.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
  },
  {
    id: 3,
    name: "Fernanda Oliveira",
    company: "Clínica Saúde Integral",
    text: "Como profissional de saúde, não tinha tempo para lidar com questões contábeis. O Escritório Dias simplificou tudo para mim, oferecendo um serviço que realmente entende as particularidades do meu negócio.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    company: "Construtora Horizonte",
    text: "A atenção aos detalhes e o conhecimento profundo sobre o setor de construção civil fazem do Escritório Dias um parceiro indispensável para nosso crescimento. Recomendo sem hesitar.",
    image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&auto=format&fit=crop&w=128&q=80",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-dias-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <div className="h-1 w-20 bg-dias-orange mx-auto mb-6"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            Conheça a experiência de nossos clientes com os serviços do Escritório Dias Contabilidade.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative">
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-dias-yellow opacity-20" />
                    
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-dias-yellow"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-white/70">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/90 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 focus:outline-none transition-colors duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 focus:outline-none transition-colors duration-300"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                  activeIndex === index ? "bg-dias-yellow" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
