
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
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    document.title = "Via Temizlik Hizmetleri | Profesyonel Temizlik Ekibi";
    
    // Add meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Via Temizlik Hizmetleri - İzmir'in Profesyonel Temizlik Ekibi, ev, ofis ve özel temizlik hizmetleri sunmaktadır.");
    }
  }, []);
  
  return (
    <motion.div 
      className="min-h-screen bg-arnika-dark text-arnika-white font-montserrat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LangToggle />
      <FloatingWhatsApp />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
