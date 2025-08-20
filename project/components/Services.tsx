import { Building2, Package, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Building2 className="text-[#0B3B5A]" size={32} />,
      title: "Escritório Virtual",
      description: "Endereço fiscal e postal para sua empresa com gestão completa de correspondências",
      price: "A partir de R$199/mês",
      available: true,
      features: [
        "Endereço fiscal e postal",
        "Recebimento de correspondências",
        "Gestão de encomendas",
        "Suporte especializado"
      ]
    },
    {
      icon: <Package className="text-[#0B3B5A]" size={32} />,
      title: "Self Storage",
      description: "Boxes seguros e moduláveis para diferentes necessidades de armazenamento",
      price: "Preço sob consulta",
      available: true,
      features: [
        "Boxes de 1m³ a 7m²",
        "Altura até 3 metros",
        "Seguro incluso",
        "Proteção contra raios"
      ]
    },
    {
      icon: <Briefcase className="text-gray-400" size={32} />,
      title: "Coworking",
      description: "Espaços de trabalho compartilhados com infraestrutura completa",
      price: "Em reforma",
      available: false,
      features: [
        "Estações de trabalho",
        "Salas de reunião",
        "Internet alta velocidade",
        "Ambiente profissional"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3B5A] mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções profissionais para empresas e pessoas físicas em Porto Alegre
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 ${
                !service.available ? 'opacity-75' : 'hover:-translate-y-1'
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-[#0B3B5A] mb-2">
                  {service.title}
                </CardTitle>
                {!service.available && (
                  <div className="mx-auto mb-3 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Em reforma
                  </div>
                )}
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-[#F5C542]">
                    {service.price}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <ArrowRight className="text-[#F5C542] mr-2 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  data-gtm={`service-cta-${service.title.toLowerCase().replace(' ', '-')}`}
                  className={`w-full rounded-lg font-semibold ${
                    service.available
                      ? 'bg-[#0B3B5A] hover:bg-[#0B3B5A]/90 text-white'
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  {service.available 
                    ? 'Solicitar orçamento'
                    : 'Entrar na lista de espera'
                  }
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;