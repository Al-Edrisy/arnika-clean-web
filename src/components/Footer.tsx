
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Instagram, Phone, Mail, MessageCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const phoneNumber = "+905551234567";
  const whatsappMessage = encodeURIComponent(t('whatsapp_message'));
  
  const getWhatsAppLink = () => {
    return isMobile 
      ? `whatsapp://send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`;
  };
  
  return (
    <footer className="bg-zinc-900 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            {t('footer_copyright')}
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/arnikatemizlik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-arnika-teal hover:text-arnika-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={getWhatsAppLink()}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-arnika-teal hover:text-arnika-blue transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="text-arnika-teal hover:text-arnika-blue transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="mailto:info@arnika.com" 
              className="text-arnika-teal hover:text-arnika-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
