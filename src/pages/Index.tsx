
import React, { useEffect } from 'react';
import LangToggle from '@/components/LangToggle';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  useEffect(() => {
    document.title = "Via Cleaning Services | Professional Cleaning Team";
    
    // Add meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Via Cleaning Services - İzmir's Professional Cleaning Team offering home, office, and specialized cleaning services.");
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-arnika-dark text-arnika-white font-montserrat">
      <LangToggle />
      <FloatingWhatsApp />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
