import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Plans = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const virtualOfficeePlans = [
    {
      name: "Plano Fiscal",
      price: "Sob consulta",
      period: "",
      description: "Perfeito para quem precisa apenas de endereço fiscal",
      features: [
        "Endereço fiscal para CNPJ",
        "Emissão de documentos",
        "Atendimento comercial",
        "Suporte via WhatsApp"
      ],
      popular: true
    },
    {
      name: "Plano Fiscal + Postal",
      price: "Sob consulta",
      period: "",
      description: "Solução completa com gestão de correspondências",
      features: [
        "Endereço fiscal e postal",
        "Recebimento de correspondências",
        "Notificação de chegada",
        "Gestão personalizada",
        "Emissão de documentos"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Virtual Office Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B3B5A] mb-4">
              Planos Escritório Virtual
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para dar presença profissional à sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {virtualOfficeePlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular ? 'ring-2 ring-[#F5C542]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#F5C542] text-[#0B3B5A] px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-[#0B3B5A]">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-[#F5C542]">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={scrollToContact}
                    data-gtm={`plan-cta-${plan.name.toLowerCase().replace(/ /g, '-')}`}
                    className="w-full bg-[#0B3B5A] hover:bg-[#0B3B5A]/90 text-white py-3 rounded-lg font-semibold"
                  >
                    Ativar Escritório Virtual
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Self Storage */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B3B5A] mb-4">
              Self Storage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Boxes seguros e moduláveis para suas necessidades de armazenamento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Self Storage - Boxes organizados"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#0B3B5A] mb-2">Boxes Organizados</h3>
                <p className="text-sm text-gray-600">Espaços limpos e organizados para seus pertences</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/4246083/pexels-photo-4246083.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Self Storage - Segurança"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#0B3B5A] mb-2">Máxima Segurança</h3>
                <p className="text-sm text-gray-600">Sistema de segurança 24h e controle de acesso</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Self Storage - Facilidade de acesso"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#0B3B5A] mb-2">Fácil Acesso</h3>
                <p className="text-sm text-gray-600">Acesso facilitado aos seus boxes quando precisar</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToContact}
              data-gtm="storage-cta"
              className="bg-[#F5C542] hover:bg-[#F5C542]/90 text-[#0B3B5A] px-6 py-3 font-semibold rounded-lg inline-flex items-center space-x-2"
            >
              <span>Solicitar orçamento</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;