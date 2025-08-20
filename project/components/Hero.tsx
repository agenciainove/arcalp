import { Shield, Zap, MapPin, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer?.push({
        event: 'click_whatsapp',
        click_text: 'Hero WhatsApp',
        click_url: 'https://wa.me/5551997935945'
      });

      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'whatsapp_hero'
        });
      }
    }

    window.open('https://wa.me/5551997935945?text=Ol%C3%A1!%20Vim%20pelo%20Google%20Ads%20e%20quero%20um%20or%C3%A7amento.', '_blank');
  };

  return (
    <div className="py-12 lg:py-16">
      {/* Coworking Notice */}
      <div className="mb-6 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3">
        <p className="text-sm text-orange-800">
          <span className="font-medium">Coworking em reforma</span> — deixe seu contato para a lista de espera
        </p>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B3B5A] leading-tight mb-4">
        Escritório Virtual e Self Storage flexível em Porto Alegre
      </h1>
      
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Endereço fiscal/postal para sua empresa e boxes seguros para armazenamento. 
        Seguro incluso e proteção contra raios.
      </p>

      {/* Key Differentials */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <Shield className="text-[#0B3B5A]" size={24} />
          <span className="text-sm text-gray-700">Seguro incluso</span>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <Zap className="text-[#F5C542]" size={24} />
          <span className="text-sm text-gray-700">Proteção contra raios</span>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <Package className="text-[#0B3B5A]" size={24} />
          <span className="text-sm text-gray-700">Planos combinados</span>
        </div>
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <MapPin className="text-[#F5C542]" size={24} />
          <span className="text-sm text-gray-700">Partenon, Porto Alegre</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={scrollToContact}
          data-gtm="cta-hero-orcamento"
          className="bg-[#0B3B5A] hover:bg-[#0B3B5A]/90 text-white px-6 py-3 font-semibold rounded-lg transition-all"
        >
          Solicitar orçamento
        </Button>
        <Button
          onClick={handleWhatsAppClick}
          data-gtm="whatsapp-hero"
          variant="outline"
          className="border-2 border-[#0B3B5A] text-[#0B3B5A] hover:bg-[#0B3B5A] hover:text-white px-6 py-3 font-semibold rounded-lg transition-all"
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default Hero;