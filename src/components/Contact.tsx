
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import IntersectionObserver from './IntersectionObserver';
import { Phone, Mail, Instagram, Mail as MailIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <IntersectionObserver>
          <h2 className="section-title">{t('contact_title')}</h2>
        </IntersectionObserver>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <IntersectionObserver threshold={0.2} className="md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="text-arnika-teal mr-4" />
                <div>
                  <a href="tel:+905551234567" className="hover:text-arnika-teal transition-colors">
                    +90 555 123 4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MailIcon className="text-arnika-teal mr-4" />
                <div>
                  <a href="mailto:info@arnika.com" className="hover:text-arnika-teal transition-colors">
                    info@arnika.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Instagram className="text-arnika-teal mr-4" />
                <div>
                  <a href="https://instagram.com/arnikatemizlik" target="_blank" rel="noopener noreferrer" className="hover:text-arnika-teal transition-colors">
                    @arnikatemizlik
                  </a>
                </div>
              </div>
            </div>
          </IntersectionObserver>
          
          <IntersectionObserver threshold={0.2} className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">{t('contact_name')}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:border-arnika-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">{t('contact_email')}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:border-arnika-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2">{t('contact_service')}</label>
                <select
                  id="service"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:border-arnika-teal"
                >
                  <option value="home">{t('service_1_title')}</option>
                  <option value="office">{t('service_2_title')}</option>
                  <option value="marble">{t('service_3_title')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">{t('contact_message')}</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 focus:outline-none focus:border-arnika-teal"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                {t('contact_submit')}
              </button>
            </form>
          </IntersectionObserver>
        </div>
      </div>
    </section>
  );
};

export default Contact;
