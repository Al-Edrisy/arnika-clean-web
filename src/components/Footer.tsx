
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Instagram, Phone, Mail, MessageCircle, MapPin, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const phoneNumber = "+905321552868";
  const whatsappMessage = encodeURIComponent(t('whatsapp_message', 'Merhaba! Via Temizlik hizmetleri hakkında bilgi almak istiyorum.'));
  
  const getWhatsAppLink = () => {
    return isMobile 
      ? `whatsapp://send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber.replace('+', '')}&text=${whatsappMessage}`;
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <footer className="bg-zinc-900 py-12 px-4">
      <motion.div 
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
          <motion.div className="mb-6 md:mb-0" variants={itemVariants}>
            <h3 className="text-xl font-bold mb-2 text-arnika-teal">Via Temizlik</h3>
            <p className="text-sm text-gray-400 max-w-md">
              {t('footer_description', 'İzmir\'de ev ve işyerleri için kalite, güvenilirlik ve müşteri memnuniyeti odaklı profesyonel temizlik hizmetleri.')}
            </p>
            <div className="mt-4 p-4 bg-zinc-800 rounded-lg border border-zinc-700">
              <div className="flex items-center mb-2">
                <User size={16} className="text-arnika-teal mr-2" />
                <span className="text-gray-300 font-medium">KEZİBAN KEMENÇE</span>
                <span className="text-xs ml-2 text-gray-500">(Kurucu)</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                DALGIÇ GIDA TEMİZLİK ÜRÜNLERİ TAAHHÜT SANAYİ VE TİCARET LTD. ŞTİ.
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Vergi No: 631 044 4494 | Sicil No: 165424
              </div>
            </div>
          </motion.div>
          
          <motion.div className="flex flex-col space-y-3" variants={itemVariants}>
            <h4 className="font-semibold text-arnika-teal mb-2">{t('contact_us', 'İletişim')}</h4>
            <div className="flex items-center group">
              <Phone size={18} className="text-arnika-teal mr-3 group-hover:scale-110 transition-transform" />
              <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-white transition-colors">
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center group">
              <Mail size={18} className="text-arnika-teal mr-3 group-hover:scale-110 transition-transform" />
              <a href="mailto:info@via-cleaning.com" className="text-gray-400 hover:text-white transition-colors">
                info@via-cleaning.com
              </a>
            </div>
            <div className="flex items-start group">
              <MapPin size={18} className="text-arnika-teal mr-3 mt-1 group-hover:scale-110 transition-transform" />
              <span className="text-gray-400 text-sm">
                Mansuroğlu Mah., 286/3 Sok., No: 3/A, Bayraklı / İZMİR
              </span>
            </div>
          </motion.div>
          
          <motion.div className="flex flex-col space-y-3" variants={itemVariants}>
            <h4 className="font-semibold text-arnika-teal mb-2">{t('our_projects', 'Projelerimiz')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400 hover:text-white transition-colors">
                <span className="border-l-2 border-arnika-teal pl-2">Manavgat - TOKİ Konutları</span>
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                <span className="border-l-2 border-arnika-teal pl-2">Belek Beach</span>
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                <span className="border-l-2 border-arnika-teal pl-2">Antalya - Altıntaş</span>
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                <span className="border-l-2 border-arnika-teal pl-2">Arıtma Tesisleri</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <hr className="border-gray-800 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-gray-400 mb-4 md:mb-0"
            variants={itemVariants}
          >
            {t('footer_copyright')}
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            variants={itemVariants}
          >
            <a 
              href="https://instagram.com/viacleaning" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-arnika-teal hover:text-arnika-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href={getWhatsAppLink()}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-arnika-teal hover:text-arnika-blue transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="text-arnika-teal hover:text-arnika-blue transition-colors"
              aria-label="Phone"
            >
              <Phone size={22} className="hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:info@via-cleaning.com" 
              className="text-arnika-teal hover:text-arnika-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={22} className="hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
