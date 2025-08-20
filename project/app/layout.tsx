import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arca Spots | Self Storage e Escritório Virtual em Porto Alegre',
  description: 'Oferecemos Escritório Virtual e Self Storage flexível em Porto Alegre, com segurança, praticidade e atendimento próximo. Solicite seu orçamento!',
  keywords: 'escritório virtual porto alegre, self storage porto alegre, endereço fiscal, boxes modulares, partenon',
  authors: [{ name: 'Arca Spots' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Arca Spots | Self Storage e Escritório Virtual Porto Alegre',
    description: 'Oferecemos Escritório Virtual e Self Storage flexível em Porto Alegre, com segurança, praticidade e atendimento próximo.',
    url: 'https://www.arcaspots.com.br',
    siteName: 'Arca Spots',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arca Spots - Self Storage e Escritório Virtual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arca Spots | Self Storage e Escritório Virtual Porto Alegre',
    description: 'Oferecemos Escritório Virtual e Self Storage flexível em Porto Alegre, com segurança, praticidade e atendimento próximo.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.arcaspots.com.br" />
        
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="ga4-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Arca Spots",
              "image": "https://www.arcaspots.com.br/logo.jpg",
              "description": "Self Storage e Escritório Virtual em Porto Alegre",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Monteiro Lobato, 422",
                "addressLocality": "Porto Alegre",
                "addressRegion": "RS",
                "postalCode": "90620-270",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -30.0677,
                "longitude": -51.1794
              },
              "url": "https://www.arcaspots.com.br",
              "telephone": "+5551997935945",
              "email": "contato@arcaspots.com.br",
              "openingHours": [
                "Mo-Fr 08:00-19:00",
                "Sa 09:00-15:00"
              ],
              "priceRange": "R$199-R$500",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "currenciesAccepted": "BRL"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {children}
      </body>
    </html>
  );
}