
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  const phoneNumber = "+905321552868";
  const whatsappMessage = encodeURIComponent(t('whatsapp_message', "Merhaba! Via Temizlik hizmetleri hakkında bilgi almak istiyorum."));
  
  const getWhatsAppLink = () => {
    return isMobile 
      ? `whatsapp://send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`;
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div 
            className="mb-3 bg-white dark:bg-zinc-800 text-black dark:text-white p-4 rounded-lg shadow-lg max-w-xs"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">KEZİBAN KEMENÇE</div>
              <button 
                onClick={() => setIsTooltipVisible(false)} 
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{t('whatsapp_tooltip')}</p>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center bg-[#25D366] text-white py-2 px-4 rounded font-medium hover:bg-[#128C7E] transition-colors"
            >
              {t('contact_whatsapp')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.a 
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] p-4 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsTooltipVisible(true)}
        aria-label="WhatsApp Contact"
      >
        <MessageCircle size={28} className="text-white" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
