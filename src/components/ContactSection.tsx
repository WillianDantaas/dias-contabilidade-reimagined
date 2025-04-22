
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-dias-gray">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-dias-blue mb-4">Entre em Contato</h2>
          <div className="h-1 w-20 bg-dias-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você e sua empresa. Entre em contato conosco para agendar uma consulta ou saber mais sobre nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 scale-on-scroll">
            <h3 className="text-xl font-semibold text-dias-blue mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dias-blue"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dias-blue"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dias-blue resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-dias-blue text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              >
                Enviar <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="slide-on-scroll">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold text-dias-blue mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-dias-blue/10 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-dias-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Telefone</h4>
                    <a href="tel:+551633611234" className="text-gray-600 hover:text-dias-blue transition-colors">
                      (16) 3361-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dias-blue/10 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-dias-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:contato@escritoriodiassjb.com.br" className="text-gray-600 hover:text-dias-blue transition-colors">
                      contato@escritoriodiassjb.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dias-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-dias-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Endereço</h4>
                    <address className="text-gray-600 not-italic">
                      Rua São Paulo, 123 - Centro<br />
                      São Joaquim da Barra/SP - CEP 14600-000
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded Map */}
            <div className="h-72 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.958834333702!2d-47.859518685062!3d-20.580917886243707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94badfe12c46f7db%3A0xc12fd5b8e50f8771!2sS%C3%A3o%20Joaquim%20da%20Barra%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1650305847987!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório Dias Contabilidade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
