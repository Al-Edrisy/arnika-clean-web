import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'tr' | 'en';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, defaultValue?: string) => string;
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
  "about_text_2": {
    tr: "Çevre dostu ürünler ve gelişmiş temizlik teknikleri kullanarak Ankara genelinde evler ve işletmeler için olağanüstü sonuçlar sunuyoruz.",
    en: "We use environmentally friendly products and advanced cleaning techniques to deliver exceptional results for homes and businesses throughout Ankara."
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
  "service_1_detail_1": {
    tr: "Detaylı oda oda temizlik",
    en: "Detailed room-by-room cleaning"
  },
  "service_1_detail_2": {
    tr: "Mutfak ve banyo dezenfeksiyonu",
    en: "Kitchen and bathroom sanitization"
  },
  "service_1_detail_3": {
    tr: "Zemin temizliği ve cilalama",
    en: "Floor cleaning and polishing"
  },
  "service_1_detail_4": {
    tr: "Toz alma ve yüzey temizliği",
    en: "Dusting and surface cleaning"
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
  "service_2_detail_1": {
    tr: "Çalışma alanı temizliği ve düzenleme",
    en: "Workspace cleaning and organization"
  },
  "service_2_detail_2": {
    tr: "Toplantı odası hazırlama",
    en: "Meeting room preparation"
  },
  "service_2_detail_3": {
    tr: "Ortak alanlar bakımı",
    en: "Common areas maintenance"
  },
  "service_2_detail_4": {
    tr: "Tuvalet dezenfeksiyonu",
    en: "Restroom sanitization"
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
  "service_3_detail_1": {
    tr: "Mermer cilalama ve restorasyon",
    en: "Marble polishing and restoration"
  },
  "service_3_detail_2": {
    tr: "Leke çıkarma işlemi",
    en: "Stain removal treatment"
  },
  "service_3_detail_3": {
    tr: "Yüzey koruma uygulaması",
    en: "Surface protection application"
  },
  "service_3_detail_4": {
    tr: "Uzun vadeli bakım planları",
    en: "Long-term maintenance plans"
  },
  "service_4_title": {
    tr: "Halı Temizliği",
    en: "Carpet Cleaning"
  },
  "service_4_desc": {
    tr: "Halılar ve kilimler için profesyonel derinlemesine temizlik",
    en: "Professional deep cleaning for carpets and rugs"
  },
  "service_4_benefit": {
    tr: "Lekeleri ve alerjenleri etkili bir şekilde giderin",
    en: "Remove stains and allergens effectively"
  },
  "service_4_detail_1": {
    tr: "Derin leke çıkarma",
    en: "Deep stain extraction"
  },
  "service_4_detail_2": {
    tr: "Alerjen giderme tedavisi",
    en: "Allergen removal treatment"
  },
  "service_4_detail_3": {
    tr: "Hızlı kuruma süreci",
    en: "Quick drying process"
  },
  "service_4_detail_4": {
    tr: "Koku giderme ve tazeleme",
    en: "Deodorizing and refreshing"
  },
  "service_5_title": {
    tr: "Cephe Temizliği",
    en: "Facade Cleaning"
  },
  "service_5_desc": {
    tr: "Profesyonel dış cephe temizlik hizmetleri",
    en: "Professional exterior cleaning services"
  },
  "service_5_benefit": {
    tr: "Binanızın görünümünü yenileyin",
    en: "Restore your building's appearance"
  },
  "service_5_detail_1": {
    tr: "Yüksek basınçlı yıkama",
    en: "High-pressure washing"
  },
  "service_5_detail_2": {
    tr: "Cam ve pencere temizliği",
    en: "Glass and window cleaning"
  },
  "service_5_detail_3": {
    tr: "Grafiti çıkarma",
    en: "Graffiti removal"
  },
  "service_5_detail_4": {
    tr: "Koruyucu kaplama uygulama",
    en: "Protective coating application"
  },
  "service_6_title": {
    tr: "Dezenfeksiyon",
    en: "Disinfection"
  },
  "service_6_desc": {
    tr: "Tam sanitasyon ve dezenfeksiyon hizmetleri",
    en: "Complete sanitization and disinfection services"
  },
  "service_6_benefit": {
    tr: "Güvenli ve sağlıklı bir ortam yaratın",
    en: "Create a safe and healthy environment"
  },
  "service_6_detail_1": {
    tr: "EPA onaylı dezenfektanlar",
    en: "EPA-approved disinfectants"
  },
  "service_6_detail_2": {
    tr: "Yüzey sanitasyonu",
    en: "Surface sanitization"
  },
  "service_6_detail_3": {
    tr: "Hava arıtma",
    en: "Air purification"
  },
  "service_6_detail_4": {
    tr: "Önleyici tedavi planları",
    en: "Preventive treatment plans"
  },
  "service_details": {
    tr: "Hizmet Detayları",
    en: "Service Details"
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
  "eco_friendly_desc": {
    tr: "Aileniz, evcil hayvanlarınız ve çevre için güvenli ürünler kullanıyoruz.",
    en: "We use products that are safe for your family, pets, and the environment."
  },
  "professional_team": {
    tr: "Profesyonel ekip",
    en: "Professional team"
  },
  "professional_team_desc": {
    tr: "Ekibimiz eğitimli, sigortalı ve mükemmel hizmet vermeyi taahhüt ediyor.",
    en: "Our staff is trained, insured, and committed to providing excellent service."
  },
  "quality_guarantee": {
    tr: "Kalite garantisi",
    en: "Quality guarantee"
  },
  "quality_guarantee_desc": {
    tr: "Memnun kalmazsanız, ek ücret ödemeden tekrar temizlik yapıyoruz.",
    en: "If you're not satisfied, we'll re-clean at no additional cost."
  },
  "affordable_prices": {
    tr: "Uygun fiyatlar",
    en: "Affordable prices"
  },
  "affordable_prices_desc": {
    tr: "Bütçenize uygun esnek paketlerle rekabetçi oranlar.",
    en: "Competitive rates with flexible packages to fit your budget."
  },
  "customer_centric": {
    tr: "Müşteri Odaklı",
    en: "Customer-Centric"
  },
  "customer_centric_desc": {
    tr: "Hizmetlerimizi özel ihtiyaç ve tercihlerinizi karşılayacak şekilde sunuyoruz.",
    en: "We tailor our services to meet your specific needs and preferences."
  },
  "our_mission": {
    tr: "Misyonumuz",
    en: "Our Mission"
  },
  "mission_statement": {
    tr: "Çevresel sürdürülebilirliği ve müşteri memnuniyetini teşvik ederek müşterilerimizin yaşam kalitesini artıran olağanüstü temizlik hizmetleri sunmak.",
    en: "To provide exceptional cleaning services that enhance the quality of life for our clients while promoting environmental sustainability and customer satisfaction."
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
  "testimonial_4": {
    tr: "Temizlik ekibi son derece kapsamlı ve profesyoneldi. Ofis alanımızı tamamen dönüştürdüler!",
    en: "The cleaning team was extremely thorough and professional. They transformed our office space completely!"
  },
  "testimonial_4_author": {
    tr: "Ahmet Y.",
    en: "Ahmet Y."
  },
  "testimonial_5": {
    tr: "Birçok temizlik hizmeti denedim, ancak Arnika açık ara en iyisi. Her ayrıntıya dikkat ediyorlar.",
    en: "I've tried many cleaning services, but Arnika is by far the best. They pay attention to every detail."
  },
  "testimonial_5_author": {
    tr: "Zeynep K.",
    en: "Zeynep K."
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
  "contact_whatsapp": {
    tr: "WhatsApp'ta Sohbet Et",
    en: "Chat on WhatsApp"
  },
  "select_service": {
    tr: "Bir hizmet seçin",
    en: "Select a service"
  },
  "whatsapp_message": {
    tr: "Merhaba! Temizlik hizmetleriniz hakkında bilgi almak istiyorum.",
    en: "Hello! I'd like to inquire about your cleaning services."
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

  const t = (key: string, defaultValue?: string): string => {
    if (translations[key]?.[language]) {
      return translations[key][language];
    }
    return defaultValue || key;
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
