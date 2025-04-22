import { useState } from "react";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Carlos Dias",
    role: "Contador-Chefe",
    bio: "Mais de 20 anos de experiência em contabilidade tributária. Especialista em planejamento tributário para pequenas e médias empresas. Formado em Ciências Contábeis com MBA em Gestão Tributária.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Mariana Silva",
    role: "Contadora Sênior",
    bio: "Especialista em contabilidade digital e processos de automação. Com 10 anos de experiência, lidera projetos de transformação digital em empresas de diversos segmentos.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Roberto Oliveira",
    role: "Consultor Tributário",
    bio: "Especialista em consultoria tributária com ênfase em impostos indiretos. Possui vasta experiência em planejamento fiscal e atendimento a fiscalizações.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    name: "Ana Pereira",
    role: "Analista Contábil",
    bio: "Especialista em análise contábil e elaboração de demonstrações financeiras. Trabalha com foco em fornecer informações precisas para a tomada de decisões.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 5,
    name: "Paulo Mendes",
    role: "Departamento Pessoal",
    bio: "Especialista em rotinas de departamento pessoal e legislação trabalhista. Atua com foco na conformidade e otimização de processos relacionados à gestão de pessoas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="team" className="section-padding bg-dias-gray">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-dias-blue mb-4">Nossa Equipe</h2>
          <div className="h-1 w-20 bg-dias-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais dedicados que fazem parte da nossa equipe. Contamos com especialistas em diversas áreas para melhor atender às necessidades do seu negócio.
          </p>
        </div>

        <div className="relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem 
                  key={member.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div 
                    className="scale-on-scroll cursor-pointer"
                    onClick={() => openModal(member)}
                  >
                    <div className="group relative">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-full bg-gray-200">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-semibold text-dias-blue">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden animate-scale-in">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  aria-label="Fechar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-dias-blue">{selectedMember.name}</h3>
                    <p className="text-gray-600">{selectedMember.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-700">{selectedMember.bio}</p>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-dias-blue text-white rounded hover:bg-opacity-90 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
