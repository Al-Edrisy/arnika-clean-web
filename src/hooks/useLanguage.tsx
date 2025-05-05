
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'tr' | 'en';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations: Record<string, Record<Language, string>> = {
  // Hero Section
  "hero_title": {
    tr: "Arnika Temizlik",
    en: "Arnika Cleaning"
  },
  "hero_subtitle": {
    tr: "Ankara'nın Profesyonel Temizlik Ekibi",
    en: "Ankara's Professional Cleaning Team"
  },
  "hero_cta": {
    tr: "Ücretsiz Teklif Al",
    en: "Get a Free Quote"
  },
  
  // About Section
  "about_title": {
    tr: "Hakkımızda",
    en: "About Us"
  },
  "about_text": {
    tr: "10 yılı aşkın tecrübemizle, inşaat sonrası temizlik, ofis sterilizasyonu ve özel yüzey bakımında Türkiye'nin güvenilir partneriyiz.",
    en: "With 10+ years of experience, we specialize in post-construction cleaning, office sterilization, and premium surface care in Turkey."
  },
  
  // Services Section
  "services_title": {
    tr: "Hizmetlerimiz",
    en: "Our Services"
  },
  "service_1_title": {
    tr: "Ev Temizliği",
    en: "Home Cleaning"
  },
  "service_1_desc": {
    tr: "Detaylı ve kapsamlı ev temizlik hizmetleri.",
    en: "Detailed and comprehensive home cleaning services."
  },
  "service_1_benefit": {
    tr: "Her köşe pırıl pırıl!",
    en: "Every corner spotless!"
  },
  "service_2_title": {
    tr: "Ofis Temizliği",
    en: "Office Cleaning"
  },
  "service_2_desc": {
    tr: "Profesyonel ofis sterilizasyon ve temizlik hizmetleri.",
    en: "Professional office sterilization and cleaning services."
  },
  "service_2_benefit": {
    tr: "Sağlıklı çalışma ortamı!",
    en: "Healthy work environment!"
  },
  "service_3_title": {
    tr: "Mermer Parlatma",
    en: "Marble Polishing"
  },
  "service_3_desc": {
    tr: "Özel ekipmanlarla mermer ve taş yüzeylerin parlatılması.",
    en: "Polishing marble and stone surfaces with specialized equipment."
  },
  "service_3_benefit": {
    tr: "İlk günkü parlaklık garantisi!",
    en: "Restored to original shine!"
  },
  
  // Why Choose Us Section
  "why_choose_us_title": {
    tr: "Neden Biz?",
    en: "Why Choose Us?"
  },
  "clients_count": {
    tr: "500+ Mutlu Müşteri",
    en: "500+ Happy Clients"
  },
  "projects_count": {
    tr: "1000+ Proje",
    en: "1000+ Projects"
  },
  "experience_count": {
    tr: "10+ Yıl Tecrübe",
    en: "10+ Years Experience"
  },
  "eco_friendly": {
    tr: "Ekolojik temizlik ürünleri",
    en: "Eco-friendly products"
  },
  "professional_team": {
    tr: "Profesyonel ekip",
    en: "Professional team"
  },
  "quality_guarantee": {
    tr: "Kalite garantisi",
    en: "Quality guarantee"
  },
  "affordable_prices": {
    tr: "Uygun fiyatlar",
    en: "Affordable prices"
  },
  
  // Testimonials Section
  "testimonials_title": {
    tr: "Referanslar",
    en: "Testimonials"
  },
  "testimonial_1": {
    tr: "Arnika'nın cam temizliği hizmeti muazzam!",
    en: "Arnika's window cleaning is flawless!"
  },
  "testimonial_1_author": {
    tr: "Ayşe K., Ankara",
    en: "Ayşe K., Ankara"
  },
  "testimonial_2": {
    tr: "Ofisimizin temizliğinden çok memnunuz. Kesinlikle tavsiye ediyorum.",
    en: "We're very satisfied with our office cleaning. Highly recommended!"
  },
  "testimonial_2_author": {
    tr: "Mehmet B., İş Sahibi",
    en: "Mehmet B., Business Owner"
  },
  "testimonial_3": {
    tr: "Mermer zeminlerimiz ilk günkü gibi parlak!",
    en: "Our marble floors shine like new!"
  },
  "testimonial_3_author": {
    tr: "John D., Expat",
    en: "John D., Expat"
  },
  
  // Contact Section
  "contact_title": {
    tr: "İletişim",
    en: "Contact"
  },
  "contact_name": {
    tr: "Ad Soyad",
    en: "Full Name"
  },
  "contact_email": {
    tr: "E-posta",
    en: "Email"
  },
  "contact_service": {
    tr: "Hizmet Türü",
    en: "Service Type"
  },
  "contact_message": {
    tr: "Mesajınız",
    en: "Your Message"
  },
  "contact_submit": {
    tr: "Gönder",
    en: "Submit"
  },
  
  // Footer
  "footer_copyright": {
    tr: "© 2025 Arnika Temizlik. Tüm hakları saklıdır.",
    en: "© 2025 Arnika Cleaning. All rights reserved."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
