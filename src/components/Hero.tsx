
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
        filter: "brightness(0.3)"
       }}></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('hero_title')}</h1>
        <p className="text-xl md:text-2xl mb-8">{t('hero_subtitle')}</p>
        <Button 
          onClick={scrollToContact} 
          className="bg-arnika-teal hover:bg-arnika-blue text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-2"
        >
          <ScrollText size={18} />
          {t('hero_cta')}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
