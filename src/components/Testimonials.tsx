
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: t('testimonial_1'),
      author: t('testimonial_1_author'),
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      text: t('testimonial_2'),
      author: t('testimonial_2_author'),
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      text: t('testimonial_3'),
      author: t('testimonial_3_author'),
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-10 lg:px-20 bg-zinc-900">
      <div className="container mx-auto">
        <IntersectionObserver>
          <h2 className="section-title">{t('testimonials_title')}</h2>
        </IntersectionObserver>
        
        <div className="max-w-3xl mx-auto mt-12">
          <IntersectionObserver threshold={0.2}>
            <div className="relative px-10">
              <button 
                onClick={handlePrev} 
                className="absolute left-0 top-1/2 -translate-y-1/2 text-arnika-teal hover:text-arnika-blue transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={24} />
              </button>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-opensans italic mb-6">"{testimonials[activeIndex].text}"</p>
                <p className="text-arnika-teal">— {testimonials[activeIndex].author}</p>
              </div>
              
              <button 
                onClick={handleNext} 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-arnika-teal hover:text-arnika-blue transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === activeIndex ? 'bg-arnika-teal' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
