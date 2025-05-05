
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';
import { Home, Briefcase, Star } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Home className="service-icon" />,
      title: t('service_1_title'),
      description: t('service_1_desc'),
      benefit: t('service_1_benefit')
    },
    {
      icon: <Briefcase className="service-icon" />,
      title: t('service_2_title'),
      description: t('service_2_desc'),
      benefit: t('service_2_benefit')
    },
    {
      icon: <Star className="service-icon" />,
      title: t('service_3_title'),
      description: t('service_3_desc'),
      benefit: t('service_3_benefit')
    }
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-10 lg:px-20 bg-zinc-900">
      <div className="container mx-auto">
        <IntersectionObserver>
          <h2 className="section-title">{t('services_title')}</h2>
        </IntersectionObserver>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <IntersectionObserver key={index} threshold={0.2}>
              <div className="bg-zinc-800 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-arnika-teal/20 hover:translate-y-[-5px]">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-arnika-teal font-semibold">{service.benefit}</p>
              </div>
            </IntersectionObserver>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
