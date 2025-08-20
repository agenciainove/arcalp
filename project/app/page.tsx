"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';
import Plans from '@/components/Plans';
import UseCases from '@/components/UseCases';
import About from '@/components/About';
import SocialProof from '@/components/SocialProof';
import Location from '@/components/Location';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize GTM dataLayer
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="inicio" className="pt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Hero />
              <div className="lg:order-first">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Plans />
        <UseCases />
        <About />
        <SocialProof />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}