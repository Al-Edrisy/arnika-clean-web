
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';
import { MessageCircle, Instagram, Facebook, Building, Hotel, Droplets, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const testimonials = [
    {
      text: t('testimonial_1'),
      author: t('testimonial_1_author'),
      company: "AYK İnşaat",
      projectType: "construction",
      projectTypeIcon: <Building size={20} className="text-cyan-400" />,
      projectName: "TOKİ Konutları, Manavgat",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5
    },
    {
      text: t('testimonial_2'),
      author: t('testimonial_2_author'),
      company: "NEVA İnşaat",
      projectType: "construction",
      projectTypeIcon: <Building size={20} className="text-cyan-400" />,
      projectName: "Altıntaş Projesi, Antalya",
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5
    },
    {
      text: t('testimonial_3'),
      author: t('testimonial_3_author'),
      company: "TÜMAŞ",
      projectType: "tourism",
      projectTypeIcon: <Hotel size={20} className="text-yellow-400" />,
      projectName: "Belek Beach",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5
    },
    {
      text: t('testimonial_4'),
      author: t('testimonial_4_author'),
      company: "TÜMAŞ",
      projectType: "tourism",
      projectTypeIcon: <Hotel size={20} className="text-yellow-400" />,
      projectName: "Kadriye Beach",
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 4
    },
    {
      text: t('testimonial_5'),
      author: t('testimonial_5_author'),
      company: "Turizm Bakanlığı",
      projectType: "waterTreatment",
      projectTypeIcon: <Droplets size={20} className="text-blue-400" />,
      projectName: "Serik-Belek Arıtma Tesisleri",
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000); // Change every 7 seconds
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
      />
    ));
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-10 lg:px-20 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto">
        <IntersectionObserver>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title inline-block mx-auto">{t('testimonials_title')}</h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              {t('testimonials_subtitle')}
            </p>
          </motion.div>
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
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-2">
                    <motion.div
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-zinc-800 p-6 rounded-lg shadow-lg h-full flex flex-col border border-zinc-700 hover:border-arnika-teal transition-all duration-300 hover:shadow-arnika-teal/20 hover:shadow-lg"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-arnika-teal">
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
                            {testimonial.projectTypeIcon}
                            <span className="text-xs ml-1">{testimonial.projectName}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-300 font-opensans italic flex-grow">"{testimonial.text}"</p>
                      <div className="mt-4 pt-4 border-t border-zinc-700">
                        <div className="text-xs text-gray-500">
                          {t('verified_client')}
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="relative static translate-y-0 left-0 mr-2 bg-arnika-teal hover:bg-arnika-teal/80 border-0" />
                <CarouselNext className="relative static translate-y-0 right-0 bg-arnika-teal hover:bg-arnika-teal/80 border-0" />
              </div>
            </Carousel>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-arnika-teal w-6' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
