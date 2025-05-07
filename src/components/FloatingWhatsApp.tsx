
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const phoneNumber = "+905551234567";
  const whatsappMessage = encodeURIComponent(t('whatsapp_message', "Hello! I'd like to inquire about Via's cleaning services."));
  
  const getWhatsAppLink = () => {
    return isMobile 
      ? `whatsapp://send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`;
  };

  return (
    <a 
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="WhatsApp Contact"
    >
      <MessageCircle size={24} className="text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
