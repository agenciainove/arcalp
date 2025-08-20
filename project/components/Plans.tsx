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
      price: "R$ 199",
      period: "/mês",
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

  const storageSizes = [
    { size: "1m³", use: "Caixas e documentos", icon: "📦" },
    { size: "2m²", use: "Arquivos e pequenos móveis", icon: "🗂️" },
    { size: "3m²", use: "Mudança leve/quarto pequeno", icon: "🛏️" },
    { size: "5m²", use: "Móveis + estoque e-commerce", icon: "📱" },
    { size: "7m²", use: "Móveis de apto/studio", icon: "🏠" }
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

        {/* Self Storage Sizes */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B3B5A] mb-4">
              Tamanhos Self Storage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Boxes moduláveis para diferentes necessidades. Altura até 3m. Preços sob consulta.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {storageSizes.map((item, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#0B3B5A] mb-2">
                    {item.size}
                  </h3>
                  <p className="text-sm text-gray-600">{item.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToContact}
              data-gtm="storage-sizes-cta"
              className="bg-[#F5C542] hover:bg-[#F5C542]/90 text-[#0B3B5A] px-6 py-3 font-semibold rounded-lg inline-flex items-center space-x-2"
            >
              <span>Verificar disponibilidade</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;