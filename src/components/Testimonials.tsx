
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';
import { ArrowLeft, ArrowRight, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const testimonials = [
    {
      text: t('testimonial_1'),
      author: t('testimonial_1_author'),
      company: "ABC Holding",
      platform: "WhatsApp",
      platformIcon: <MessageCircle size={16} className="text-green-500" />,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      text: t('testimonial_2'),
      author: t('testimonial_2_author'),
      company: "XYZ Corporation",
      platform: "Instagram",
      platformIcon: <Instagram size={16} className="text-pink-500" />,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      text: t('testimonial_3'),
      author: t('testimonial_3_author'),
      company: "Global Tech Solutions",
      platform: "Facebook",
      platformIcon: <Facebook size={16} className="text-blue-500" />,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      text: t('testimonial_4', "The cleaning team was extremely thorough and professional. They transformed our office space completely!"),
      author: t('testimonial_4_author', "Ahmet Y."),
      company: "Tech Innovate",
      platform: "WhatsApp",
      platformIcon: <MessageCircle size={16} className="text-green-500" />,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      text: t('testimonial_5', "I've tried many cleaning services, but Arnika is by far the best. They pay attention to every detail."),
      author: t('testimonial_5_author', "Zeynep K."),
      company: "Creative Design Studio",
      platform: "Instagram",
      platformIcon: <Instagram size={16} className="text-pink-500" />,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 px-4 md:px-10 lg:px-20 bg-zinc-900">
      <div className="container mx-auto">
        <IntersectionObserver>
          <h2 className="section-title">{t('testimonials_title')}</h2>
        </IntersectionObserver>
        
        <div className="mt-12">
          <IntersectionObserver threshold={0.2}>
            <Carousel 
              className="w-full" 
              opts={{ 
                loop: true,
                align: "start",
              }}
              ref={carouselRef}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-zinc-800 p-6 rounded-lg h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-gray-400">{testimonial.company}</p>
                          <div className="flex items-center mt-1">
                            {testimonial.platformIcon}
                            <span className="text-xs ml-1">{testimonial.platform}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 font-opensans italic flex-grow">"{testimonial.text}"</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static translate-y-0 left-0 mr-2" />
                <CarouselNext className="relative static translate-y-0 right-0" />
              </div>
            </Carousel>
            
            <div className="flex justify-center mt-4 space-x-2">
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
