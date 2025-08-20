"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, ArrowUp } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  consent: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    consent: false
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!formData.subject) {
      newErrors.subject = 'Selecione um assunto';
    }

    if (!formData.consent) {
      newErrors.consent = 'Você deve autorizar o contato';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Track form submission
      if (typeof window !== 'undefined') {
        window.dataLayer?.push({
          event: 'lead_submit',
          form_name: 'contact_form',
          lead_type: formData.subject,
          user_email: formData.email
        });

        // GA4 fallback
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            event_category: 'form',
            event_label: formData.subject,
            value: formData.subject === 'Escritório Virtual' ? 199 : 350
          });
        }
      }

      // Create mailto link (can be easily replaced with Formspree)
      const mailtoBody = `
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}
Consentimento LGPD: ${formData.consent ? 'Sim' : 'Não'}

Enviado via formulário do site em ${new Date().toLocaleString('pt-BR')}
      `.trim();

      const mailtoUrl = `mailto:contato@arcaspots.com.br?subject=Novo contato: ${formData.subject}&body=${encodeURIComponent(mailtoBody)}`;
      
      // For production, replace with Formspree or similar service
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      window.location.href = mailtoUrl;
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Erro ao enviar formulário. Tente novamente ou entre em contato diretamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer?.push({
        event: 'click_whatsapp',
        click_text: 'Form Success WhatsApp',
        click_url: 'https://wa.me/5551997935945'
      });
    }
    window.open('https://wa.me/5551997935945?text=Ol%C3%A1!%20Acabei%20de%20enviar%20o%20formul%C3%A1rio%20do%20site.', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <Card className="sticky top-24 bg-green-50 border-green-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Proposta enviada com sucesso!
          </h3>
          <p className="text-green-700 mb-6">
            Entraremos em contato em breve com sua proposta personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
            </Button>
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white flex items-center justify-center space-x-2"
            >
              <ArrowUp size={18} />
              <span>Voltar ao topo</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card id="contato" className="sticky top-24 shadow-lg border-2 border-gray-100">
      <CardHeader className="bg-[#0B3B5A] text-white">
        <CardTitle className="text-lg">Solicite seu orçamento</CardTitle>
        <p className="text-blue-100 text-sm">Preencha os dados para receber uma proposta personalizada</p>
      </CardHeader>
      <CardContent className="p-5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">Nome completo *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? 'border-red-500' : ''}
              placeholder="Seu nome completo"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">E-mail *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? 'border-red-500' : ''}
              placeholder="seu@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">Telefone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) })}
              className={errors.phone ? 'border-red-500' : ''}
              placeholder="(51) 99999-9999"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="subject" className="text-sm font-medium">Assunto *</Label>
            <Select
              onValueChange={(value) => setFormData({ ...formData, subject: value })}
            >
              <SelectTrigger className={errors.subject ? 'border-red-500' : ''}>
                <SelectValue placeholder="Selecione o que você precisa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Escritório Virtual">Escritório Virtual</SelectItem>
                <SelectItem value="Self Storage">Self Storage</SelectItem>
                <SelectItem value="Coworking - Lista de Espera">Coworking — Lista de Espera</SelectItem>
              </SelectContent>
            </Select>
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: !!checked })}
            />
            <Label htmlFor="consent" className="text-sm leading-5">
              Autorizo contato para fins comerciais conforme a{' '}
              <a
                href="https://www.arcaspots.com.br/privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B3B5A] underline hover:text-[#0B3B5A]/80"
              >
                Política de Privacidade
              </a>
              . *
            </Label>
          </div>
          {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

          <Button
            type="submit"
            disabled={isLoading}
            data-gtm="form-submit"
            className="w-full bg-[#F5C542] hover:bg-[#F5C542]/90 text-[#0B3B5A] py-3 font-semibold rounded-lg mt-6"
          >
            {isLoading ? 'Enviando...' : 'Solicitar orçamento'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;