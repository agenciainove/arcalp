import { MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer?.push({
        event: 'click_whatsapp',
        click_text: 'Footer WhatsApp',
        click_url: 'https://wa.me/5551997935945'
      });

      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'whatsapp_footer'
        });
      }
    }

    window.open('https://wa.me/5551997935945?text=Ol%C3%A1!%20Vim%20pelo%20Google%20Ads%20e%20quero%20ser%20atendido%20agora.', '_blank');
  };

  return (
    <footer className="bg-[#0B3B5A] text-white">
      {/* Final CTA Section */}
      <div className="py-12 bg-[#0B3B5A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Solicite seu orçamento agora
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Entre em contato e receba uma proposta personalizada para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              data-gtm="footer-cta-contact"
              className="bg-[#F5C542] hover:bg-[#F5C542]/90 text-[#0B3B5A] px-6 py-3 font-semibold rounded-lg"
            >
              Solicitar orçamento
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              data-gtm="whatsapp-footer"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0B3B5A] px-6 py-3 font-semibold rounded-lg flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-8 border-t border-blue-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Arca Spots</h3>
              <p className="text-blue-100 leading-relaxed">
                Self Storage e Escritório Virtual em Porto Alegre. Soluções práticas e seguras.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Links importantes</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.arcaspots.com.br/privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arcaspots.com.br/termos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <button
                    onClick={scrollToContact}
                    className="text-blue-100 hover:text-white transition-colors text-left"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contato</h4>
              <ul className="space-y-2 text-blue-100">
                <li>(51) 99793-5945</li>
                <li>contato@arcaspots.com.br</li>
                <li>
                  Rua Monteiro Lobato, 422<br />
                  Partenon, Porto Alegre – RS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 border-t border-blue-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-2 md:mb-0">
              © 2025 Arca Spots. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-xs text-blue-300">
                Seus dados são usados apenas para contato comercial.
              </p>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-blue-100 hover:text-white hover:bg-blue-800"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;