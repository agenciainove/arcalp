"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "O endereço do Escritório Virtual é aceito para abertura de empresa?",
      answer: "Sim, nosso endereço é totalmente aceito para abertura de CNPJ e uso como endereço fiscal da sua empresa. Fornecemos toda a documentação necessária."
    },
    {
      question: "Como recebo minhas correspondências?",
      answer: "Recebemos suas correspondências e notificamos por WhatsApp ou e-mail sobre a chegada. Você pode retirar pessoalmente ou solicitar reenvio para outro endereço."
    },
    {
      question: "Qual o prazo de ativação do Escritório Virtual?",
      answer: "O prazo de ativação é de até 24 horas úteis após a aprovação da documentação e pagamento da primeira mensalidade."
    },
    {
      question: "O Self Storage tem seguro?",
      answer: "Sim! Todos os nossos boxes incluem seguro contra roubo, furto e danos. Além disso, temos proteção contra raios, um diferencial único na região."
    },
    {
      question: "Quais tamanhos de box estão disponíveis?",
      answer: "Oferecemos boxes de 1m³ a 7m² com altura de até 3 metros. A disponibilidade varia conforme a demanda. Consulte em tempo real através do nosso formulário."
    },
    {
      question: "O Coworking está funcionando?",
      answer: "No momento o coworking está em reforma para melhor atendê-lo. Deixe seus dados no formulário para entrar na lista de espera e ser avisado assim que reabrir."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <>
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B3B5A] mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-[#0B3B5A] pr-4">
                      {item.question}
                    </span>
                    {openItem === index ? (
                      <Minus className="text-[#F5C542] flex-shrink-0" size={20} />
                    ) : (
                      <Plus className="text-[#F5C542] flex-shrink-0" size={20} />
                    )}
                  </button>
                  
                  {openItem === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </>
  );
};

export default FAQ;