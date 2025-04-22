
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          filter: "brightness(0.3)"
        }}
      ></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl animate-on-scroll">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sua contabilidade de forma <span className="text-dias-yellow">simples</span> e <span className="text-dias-orange">humana</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Oferecemos soluções contábeis personalizadas para você e sua empresa em São Joaquim da Barra e região.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-dias-blue text-white font-medium transition-all hover:bg-opacity-90 hover:translate-y-[-2px] shadow-lg"
            >
              Já tenho uma empresa
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-dias-orange text-white font-medium transition-all hover:bg-opacity-90 hover:translate-y-[-2px] shadow-lg"
            >
              Abrir uma empresa
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
    </section>
  );
}
