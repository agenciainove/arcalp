"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer?.push({
        event: 'click_whatsapp',
        click_text: 'Header WhatsApp',
        click_url: 'https://wa.me/5551997935945'
      });

      // GA4 fallback
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'whatsapp_header'
        });
      }
    }

    window.open('https://wa.me/5551997935945?text=Ol%C3%A1!%20Vim%20pelo%20Google%20Ads%20e%20quero%20um%20or%C3%A7amento.', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer?.push({
        event: 'click_tel',
        click_text: 'Header Phone',
        phone_number: '+5551997935945'
      });

      // GA4 fallback
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'phone_header'
        });
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Serviços', id: 'servicos' },
    { label: 'Planos & Tamanhos', id: 'planos' },
    { label: 'Casos de Uso', id: 'casos-de-uso' },
    { label: 'Quem Somos', id: 'sobre' },
    { label: 'Localização', id: 'localizacao' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-2xl font-bold text-[#0B3B5A] hover:opacity-80 transition-opacity"
          >
            Arca Spots
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-[#0B3B5A] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={handleWhatsAppClick}
              data-gtm="whatsapp-header"
              className="bg-[#0B3B5A] hover:bg-[#0B3B5A]/90 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
            </Button>
            <Button
              onClick={handlePhoneClick}
              data-gtm="phone-header"
              variant="outline"
              className="border-[#0B3B5A] text-[#0B3B5A] hover:bg-[#0B3B5A] hover:text-white px-6 py-2 rounded-lg flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>(51) 99793-5945</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#0B3B5A] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[#0B3B5A] hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 space-y-3 border-t border-gray-100">
                <Button
                  onClick={handleWhatsAppClick}
                  data-gtm="whatsapp-header-mobile"
                  className="w-full bg-[#0B3B5A] hover:bg-[#0B3B5A]/90 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>Falar no WhatsApp</span>
                </Button>
                <Button
                  onClick={handlePhoneClick}
                  data-gtm="phone-header-mobile"
                  variant="outline"
                  className="w-full border-[#0B3B5A] text-[#0B3B5A] hover:bg-[#0B3B5A] hover:text-white py-3 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>(51) 99793-5945</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;