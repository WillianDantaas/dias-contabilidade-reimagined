
export default function PartnersSection() {
  const partnerLogos = [
    // Row 1
    { name: "Partner 1", logo: "https://via.placeholder.com/150x80?text=Partner+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x80?text=Partner+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x80?text=Partner+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150x80?text=Partner+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x80?text=Partner+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/150x80?text=Partner+6" },
    // Row 2
    { name: "Partner 7", logo: "https://via.placeholder.com/150x80?text=Partner+7" },
    { name: "Partner 8", logo: "https://via.placeholder.com/150x80?text=Partner+8" },
    { name: "Partner 9", logo: "https://via.placeholder.com/150x80?text=Partner+9" },
    { name: "Partner 10", logo: "https://via.placeholder.com/150x80?text=Partner+10" },
    { name: "Partner 11", logo: "https://via.placeholder.com/150x80?text=Partner+11" },
    { name: "Partner 12", logo: "https://via.placeholder.com/150x80?text=Partner+12" },
  ];

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-dias-blue mb-4">Nossos Parceiros</h2>
          <div className="h-1 w-20 bg-dias-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trabalhamos em parceria com empresas e instituições que compartilham nossos valores e ajudam a oferecer soluções completas aos nossos clientes.
          </p>
        </div>

        {/* Partners Carousel - Row 1 */}
        <div className="mb-8 overflow-hidden">
          <div className="flex space-x-8 animate-[scroll_30s_linear_infinite]">
            {partnerLogos.slice(0, 6).map((partner, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-none w-32 h-20 flex items-center justify-center rounded-md px-4 py-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
            {/* Duplicate logos for infinite scroll effect */}
            {partnerLogos.slice(0, 6).map((partner, index) => (
              <div 
                key={`row1-dup-${index}`} 
                className="flex-none w-32 h-20 flex items-center justify-center rounded-md px-4 py-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partners Carousel - Row 2 (reverse direction) */}
        <div className="overflow-hidden">
          <div className="flex space-x-8 animate-[scroll-reverse_30s_linear_infinite]">
            {partnerLogos.slice(6, 12).map((partner, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-none w-32 h-20 flex items-center justify-center rounded-md px-4 py-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
            {/* Duplicate logos for infinite scroll effect */}
            {partnerLogos.slice(6, 12).map((partner, index) => (
              <div 
                key={`row2-dup-${index}`} 
                className="flex-none w-32 h-20 flex items-center justify-center rounded-md px-4 py-2 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
