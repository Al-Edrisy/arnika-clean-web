
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
        
        <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
          <IntersectionObserver threshold={0.2} className="w-full md:w-1/2">
            <div className="prose prose-lg text-gray-100 max-w-none">
              <p className="text-lg font-opensans leading-relaxed">
                {t('about_text')}
              </p>
              <p className="text-lg font-opensans leading-relaxed mt-4">
                {t('about_text_2', 'We use environmentally friendly products and advanced cleaning techniques to deliver exceptional results for homes and businesses throughout Ankara.')}
              </p>
            </div>
          </IntersectionObserver>
          
          <IntersectionObserver threshold={0.2} className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden h-80 md:h-96 w-full shadow-lg shadow-arnika-teal/20">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
                alt="Cleaning Team" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  );
};

export default About;
