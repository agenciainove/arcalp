import { FileText, Home, ShoppingBag, Hammer, GraduationCap, Snowflake } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: <FileText className="text-[#0B3B5A]" size={32} />,
      title: "Arquivos e documentos",
      description: "Empresas e contábeis"
    },
    {
      icon: <Home className="text-[#F5C542]" size={32} />,
      title: "Móveis e reforma",
      description: "Obra/transição"
    },
    {
      icon: <ShoppingBag className="text-[#0B3B5A]" size={32} />,
      title: "E-commerce/estoque",
      description: "Lojistas/marketplace"
    },
    {
      icon: <Hammer className="text-[#F5C542]" size={32} />,
      title: "Materiais de obra",
      description: "Arquitetura/construção"
    },
    {
      icon: <GraduationCap className="text-[#0B3B5A]" size={32} />,
      title: "Estudantes",
      description: "Intercâmbio/mudança"
    },
    {
      icon: <Snowflake className="text-[#F5C542]" size={32} />,
      title: "Equipamentos sazonais",
      description: "Itens de uso específico"
    }
  ];

  return (
    <section id="casos-de-uso" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3B5A] mb-4">
            Casos de uso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos diversas necessidades de armazenamento e presença empresarial
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="mb-4 flex justify-center">
                {useCase.icon}
              </div>
              <h3 className="text-sm font-medium text-[#0B3B5A] mb-2">
                {useCase.title}
              </h3>
              <p className="text-xs text-gray-600">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;