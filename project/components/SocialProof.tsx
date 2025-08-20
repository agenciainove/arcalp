import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "E-commerce",
      content: "Excelente localização e atendimento. Uso o escritório virtual há 8 meses e o self storage para meu estoque. Recomendo!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Contador",
      content: "Perfeito para arquivos de clientes. Seguro e com ótimo custo-benefício. A equipe sempre solicita e atenciosa.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Arquiteta",
      content: "Durante minha mudança, o self storage foi essencial. Boxes limpos, seguros e com proteção contra raios. Nota 10!",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "Cliente A", placeholder: true },
    { name: "Cliente B", placeholder: true },
    { name: "Cliente C", placeholder: true },
    { name: "Cliente D", placeholder: true }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="text-[#F5C542] fill-current" size={16} />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B3B5A] mb-4">
            Depoimentos de clientes
          </h2>
          <p className="text-lg text-gray-600">
            Mais de 150 clientes atendidos em Porto Alegre
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <Quote className="text-[#F5C542] mb-4" size={24} />
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#0B3B5A]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="font-semibold text-[#0B3B5A] mb-6">
            Empresas que confiam em nossos serviços:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-50">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center"
              >
                <span className="text-xs text-gray-500">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;