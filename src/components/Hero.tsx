
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
        filter: "brightness(0.4)"
       }}></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('hero_title')}</h1>
        <p className="text-xl md:text-2xl mb-8">{t('hero_subtitle')}</p>
        <button className="btn-primary">
          {t('hero_cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
