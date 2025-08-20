import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Location = () => {
  return (
    <section id="localizacao" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3B5A] mb-4">
            Localização
          </h2>
          <p className="text-lg text-gray-600">
            Perto de você no Partenon, Porto Alegre
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#F5C542] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0B3B5A] mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Monteiro Lobato, 422<br />
                      Partenon, Porto Alegre – RS<br />
                      CEP: 90620-270
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-[#F5C542] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0B3B5A] mb-1">Telefone</h3>
                    <a 
                      href="tel:+5551997935945"
                      className="text-gray-600 hover:text-[#0B3B5A] transition-colors"
                    >
                      (51) 99793-5945
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="text-[#F5C542] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0B3B5A] mb-1">Horário de funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda à Sexta: 08:00 – 19:00<br />
                      Sábado: 09:00 – 15:00<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-[#F5C542] mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#0B3B5A] mb-1">E-mail</h3>
                    <a 
                      href="mailto:contato@arcaspots.com.br"
                      className="text-gray-600 hover:text-[#0B3B5A] transition-colors"
                    >
                      contato@arcaspots.com.br
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Rua%20Monteiro%20Lobato%2C%20422%20-%20Partenon%2C%20Porto%20Alegre%20-%20RS&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Arca Spots"
              ></iframe>
            </div>
            <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded shadow-md">
              <p className="text-sm font-medium text-[#0B3B5A]">Arca Spots</p>
              <p className="text-xs text-gray-600">Porto Alegre, RS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;