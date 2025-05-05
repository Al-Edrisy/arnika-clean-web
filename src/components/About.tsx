
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <IntersectionObserver>
          <h2 className="section-title">{t('about_title')}</h2>
        </IntersectionObserver>
        
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <IntersectionObserver>
            <div className="md:w-3/5">
              <p className="text-lg font-opensans leading-relaxed">
                {t('about_text')}
              </p>
            </div>
          </IntersectionObserver>
          
          <IntersectionObserver>
            <div className="md:w-2/5">
              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                  alt="Cleaning Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  );
};

export default About;
