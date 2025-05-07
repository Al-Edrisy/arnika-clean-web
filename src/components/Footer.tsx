
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Instagram, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const phoneNumber = "+905551234567";
  const whatsappMessage = encodeURIComponent(t('whatsapp_message', 'Hello! I\'d like to inquire about your cleaning services.'));
  
  const getWhatsAppLink = () => {
    return isMobile 
      ? `whatsapp://send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`;
  };
  
  return (
    <footer className="bg-zinc-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-arnika-teal">Via Cleaning</h3>
            <p className="text-sm text-gray-400 max-w-md">
              {t('footer_description', 'Professional cleaning services for homes and businesses in İzmir with a focus on quality, reliability and customer satisfaction.')}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              DALGIÇ GIDA TEMİZLİK ÜRÜNLERİ TAAHHÜT SANAYİ VE TİCARET LTD. ŞTİ.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Vergi No: 631 044 4494 | Sicil No: 165424
            </p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-arnika-teal mb-2">{t('contact_us', 'Contact Us')}</h4>
            <div className="flex items-center">
              <Phone size={16} className="text-arnika-teal mr-2" />
              <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-white transition-colors">
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="text-arnika-teal mr-2" />
              <a href="mailto:info@via-cleaning.com" className="text-gray-400 hover:text-white transition-colors">
                info@via-cleaning.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="text-arnika-teal mr-2" />
              <span className="text-gray-400 text-sm">
                Mansuroğlu Mah., 286/3 Sok., No: 3/A, Bayraklı / İZMİR
              </span>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            {t('footer_copyright')}
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/viacleaning" 
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
              href="mailto:info@via-cleaning.com" 
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
