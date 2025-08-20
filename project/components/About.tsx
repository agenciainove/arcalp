import { Shield, Users, MapPin, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="text-[#0B3B5A]" size={24} />,
      title: "Segurança e proteção",
      description: "Seguro incluso e proteção contra raios para sua tranquilidade"
    },
    {
      icon: <Users className="text-[#F5C542]" size={24} />,
      title: "Atendimento próximo",
      description: "Equipe enxuta e dedicada: dono presente + secretária especializada"
    },
    {
      icon: <MapPin className="text-[#0B3B5A]" size={24} />,
      title: "Localização estratégica",
      description: "No coração do Partenon, com fácil acesso e estacionamento"
    },
    {
      icon: <Clock className="text-[#F5C542]" size={24} />,
      title: "Praticidade total",
      description: "Processos simplificados para você focar no que realmente importa"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0B3B5A] mb-6">
              Sobre a Arca Spots
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Oferecemos soluções profissionais de self storage e escritório virtual em Porto Alegre, 
              com foco em segurança, praticidade e atendimento personalizado.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nossa operação é enxuta e eficiente: equipe dedicada com o proprietário presente 
              e secretária especializada, garantindo atendimento próximo e personalizado para cada cliente.
            </p>
            <div className="bg-[#0B3B5A] text-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Nossos diferenciais:</h3>
              <p>
                Localização estratégica no Partenon, seguro incluso e proteção contra raios. 
                Detalhes que fazem a diferença na sua experiência.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-5 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-[#0B3B5A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;