
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';
import { Home, Briefcase, Star, ChevronDown, ChevronUp, Eraser, Building, Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  const services = [
    {
      icon: <Home className="service-icon" />,
      title: t('service_1_title'),
      description: t('service_1_desc'),
      benefit: t('service_1_benefit'),
      details: [
        t('service_1_detail_1'),
        t('service_1_detail_2'),
        t('service_1_detail_3'),
        t('service_1_detail_4')
      ]
    },
    {
      icon: <Briefcase className="service-icon" />,
      title: t('service_2_title'),
      description: t('service_2_desc'),
      benefit: t('service_2_benefit'),
      details: [
        t('service_2_detail_1'),
        t('service_2_detail_2'),
        t('service_2_detail_3'),
        t('service_2_detail_4')
      ]
    },
    {
      icon: <Star className="service-icon" />,
      title: t('service_3_title'),
      description: t('service_3_desc'),
      benefit: t('service_3_benefit'),
      details: [
        t('service_3_detail_1'),
        t('service_3_detail_2'),
        t('service_3_detail_3'),
        t('service_3_detail_4')
      ]
    },
    {
      icon: <Eraser className="service-icon" />,
      title: t('service_4_title'),
      description: t('service_4_desc'),
      benefit: t('service_4_benefit'),
      details: [
        t('service_4_detail_1'),
        t('service_4_detail_2'),
        t('service_4_detail_3'),
        t('service_4_detail_4')
      ]
    },
    {
      icon: <Building className="service-icon" />,
      title: t('service_5_title'),
      description: t('service_5_desc'),
      benefit: t('service_5_benefit'),
      details: [
        t('service_5_detail_1'),
        t('service_5_detail_2'),
        t('service_5_detail_3'),
        t('service_5_detail_4')
      ]
    },
    {
      icon: <Droplets className="service-icon" />,
      title: t('service_6_title'),
      description: t('service_6_desc'),
      benefit: t('service_6_benefit'),
      details: [
        t('service_6_detail_1'),
        t('service_6_detail_2'),
        t('service_6_detail_3'),
        t('service_6_detail_4')
      ]
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
              <div className="bg-zinc-800 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-arnika-teal/20">
                <div className="cursor-pointer" onClick={() => toggleService(index)}>
                  {service.icon}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    {expandedService === index ? 
                      <ChevronUp className="text-arnika-teal" size={20} /> : 
                      <ChevronDown className="text-arnika-teal" size={20} />
                    }
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <p className="text-arnika-teal font-semibold">{service.benefit}</p>
                </div>
                
                <div 
                  className={cn(
                    "mt-4 overflow-hidden transition-all duration-300", 
                    expandedService === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <hr className="my-4 border-zinc-700" />
                  <h4 className="font-semibold mb-2">{t('service_details')}:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </IntersectionObserver>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
