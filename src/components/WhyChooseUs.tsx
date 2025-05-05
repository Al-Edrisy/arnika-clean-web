
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';
import { CheckCircle, Award, ThumbsUp, Clock, Heart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const benefits = [
    { 
      icon: <CheckCircle className="text-arnika-teal mr-3" size={20} />,
      text: t('eco_friendly'),
      description: t('eco_friendly_desc', 'We use products that are safe for your family, pets, and the environment.')
    },
    { 
      icon: <Award className="text-arnika-teal mr-3" size={20} />,
      text: t('professional_team'),
      description: t('professional_team_desc', 'Our staff is trained, insured, and committed to providing excellent service.')
    },
    { 
      icon: <ThumbsUp className="text-arnika-teal mr-3" size={20} />,
      text: t('quality_guarantee'),
      description: t('quality_guarantee_desc', 'If you're not satisfied, we'll re-clean at no additional cost.')
    },
    { 
      icon: <Clock className="text-arnika-teal mr-3" size={20} />,
      text: t('affordable_prices'),
      description: t('affordable_prices_desc', 'Competitive rates with flexible packages to fit your budget.')
    },
    { 
      icon: <Heart className="text-arnika-teal mr-3" size={20} />,
      text: t('customer_centric', 'Customer-Centric'),
      description: t('customer_centric_desc', 'We tailor our services to meet your specific needs and preferences.')
    }
  ];

  const stats = [
    { 
      value: 500, 
      label: t('clients_count'),
      icon: "👥"
    },
    { 
      value: 1000, 
      label: t('projects_count'),
      icon: "✅"
    },
    { 
      value: 10, 
      label: t('experience_count'),
      icon: "🏆"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <IntersectionObserver>
          <h2 className="section-title">{t('why_choose_us_title')}</h2>
        </IntersectionObserver>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <IntersectionObserver threshold={0.2} className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-zinc-900 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div 
                    className="text-3xl md:text-4xl font-bold text-arnika-teal mb-2"
                  >
                    {stat.value}
                    {stat.value === 10 && '+'}
                  </div>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t('our_mission', 'Our Mission')}</h3>
              <p className="text-gray-300">
                {t('mission_statement', 'To provide exceptional cleaning services that enhance the quality of life for our clients while promoting environmental sustainability and customer satisfaction.')}
              </p>
            </div>
          </IntersectionObserver>
          
          <IntersectionObserver threshold={0.2} className="w-full md:w-1/2">
            <div className="flex flex-col gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zinc-900 p-5 rounded-lg hover:bg-zinc-800 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    {benefit.icon}
                    <h3 className="font-semibold">{benefit.text}</h3>
                  </div>
                  <p className="text-gray-300 pl-8">{benefit.description}</p>
                </div>
              ))}
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
