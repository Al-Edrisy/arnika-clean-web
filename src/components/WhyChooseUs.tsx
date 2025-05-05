
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  
  const benefits = [
    t('eco_friendly'),
    t('professional_team'),
    t('quality_guarantee'),
    t('affordable_prices')
  ];

  const stats = [
    { value: 500, label: t('clients_count') },
    { value: 1000, label: t('projects_count') },
    { value: 10, label: t('experience_count') }
  ];

  return (
    <section id="why-choose-us" className="py-20 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <IntersectionObserver>
          <h2 className="section-title">{t('why_choose_us_title')}</h2>
        </IntersectionObserver>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <IntersectionObserver threshold={0.2}>
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-zinc-900 p-6 rounded-lg text-center">
                    <div 
                      className="counter-box mb-2"
                      style={{ '--num': stat.value } as React.CSSProperties}
                    >
                      {stat.value}
                      {stat.value === 10 && '+'}
                    </div>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </IntersectionObserver>
          
          <IntersectionObserver threshold={0.2}>
            <div className="md:w-1/2">
              <div className="flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-arnika-teal mr-3" size={20} />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
