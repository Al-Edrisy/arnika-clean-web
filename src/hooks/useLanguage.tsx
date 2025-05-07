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
    tr: "Via Temizlik",
    en: "Via Cleaning"
  },
  "hero_subtitle": {
    tr: "Antalya ve KKTC'nin Profesyonel Temizlik Ekibi",
    en: "Professional Cleaning Team in Antalya and North Cyprus"
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
    tr: "2015 yılından beri tecrübemizle, inşaat sonrası temizlik, ofis sterilizasyonu ve özel yüzey bakımında Antalya ve KKTC'nin güvenilir partneriyiz.",
    en: "Since 2015, we specialize in post-construction cleaning, office sterilization, and premium surface care in Antalya and North Cyprus."
  },
  "about_text_2": {
    tr: "Çevre dostu ürünler ve gelişmiş temizlik teknikleri kullanarak Antalya ve KKTC genelinde evler ve işletmeler için olağanüstü sonuçlar sunuyoruz.",
    en: "We use environmentally friendly products and advanced cleaning techniques to deliver exceptional results for homes and businesses throughout Antalya and North Cyprus."
  },
  
  // Services Section
  "services_title": {
    tr: "Hizmetlerimiz",
    en: "Our Services"
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
    tr: "8+ Yıl Tecrübe",
    en: "8+ Years Experience"
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
    tr: "Referanslarımız",
    en: "Our References"
  },
  "testimonials_subtitle": {
    tr: "Farklı sektörlerden müşterilerimizin Via Temizlik tecrübesi hakkında söyledikleri",
    en: "What our clients from various industries say about their Via Cleaning experience"
  },
  "verified_client": {
    tr: "Doğrulanmış Müşteri",
    en: "Verified Client"
  },
  "testimonial_1": {
    tr: "Via Temizlik ekibi, Manavgat'taki TOKİ konutları projemizde muhteşem bir iş çıkardı. İnşaat sonrası temizliğin ne kadar kritik olduğunu biliyoruz ve sonuçtan son derece memnunuz. Özellikle detaylara gösterilen özen ve profesyonel yaklaşımları takdire şayan.",
    en: "Via Cleaning team did an amazing job on our TOKİ housing project in Manavgat. We know how critical post-construction cleaning is, and we are extremely satisfied with the results. Their attention to detail and professional approach is commendable."
  },
  "testimonial_1_author": {
    tr: "Ahmet Yılmaz",
    en: "Ahmet Yılmaz"
  },
  "testimonial_2": {
    tr: "Antalya Altıntaş'taki projemizin teslim öncesi temizliğinde Via Temizlik'i tercih ettik ve kesinlikle doğru bir karar vermişiz. Tüm yüzeyler, camlar, mermerler profesyonelce temizlendi. Müşterilerimiz teslimat sırasında temizlikten çok etkilendiler. Teşekkürler Via!",
    en: "We chose Via Cleaning for the pre-delivery cleaning of our project in Antalya Altıntaş, and it was definitely the right decision. All surfaces, windows, and marbles were professionally cleaned. Our customers were very impressed with the cleanliness during delivery. Thank you Via!"
  },
  "testimonial_2_author": {
    tr: "Mehmet Özcan",
    en: "Mehmet Özcan"
  },
  "testimonial_3": {
    tr: "Belek Plajı'ndaki tesislerimizin sezon öncesi temizliğinde Via Temizlik'in hijyen standartları ve profesyonel ekibi gerçekten fark yaratıyor. Dört yıldır birlikte çalışıyoruz ve her seferinde aynı kaliteli hizmeti alıyoruz. Turizm sektöründe temizlik olmazsa olmaz!",
    en: "Via Cleaning's hygiene standards and professional team really make a difference in the pre-season cleaning of our facilities at Belek Beach. We've been working together for four years and receive the same high-quality service every time. In tourism, cleanliness is non-negotiable!"
  },
  "testimonial_3_author": {
    tr: "Osman Aydın",
    en: "Osman Aydın"
  },
  "testimonial_4": {
    tr: "Kadriye Plajı tesislerimizde düzenli olarak Via Temizlik hizmetlerinden faydalanıyoruz. Özellikle yoğun sezonda, hassas temizlik gereksinimlerimizi her zaman yüksek standartlarda karşılıyorlar. Çevre dostu ürünleri ve eğitimli personeli ile kesinlikle tavsiye ediyoruz.",
    en: "We regularly use Via Cleaning services at our Kadriye Beach facilities. Especially during the peak season, they always meet our sensitive cleaning requirements to high standards. With their environmentally friendly products and trained staff, we definitely recommend them."
  },
  "testimonial_4_author": {
    tr: "Ali Kaya",
    en: "Ali Kaya"
  },
  "testimonial_5": {
    tr: "Serik-Belek Arıtma Tesislerimizin kritik alanlarının temizliğinde Via Temizlik'e güveniyoruz. Özel kimyasallar gerektiren bu hassas iş için gerekli sertifikalara ve uzmanlığa sahip olmaları bizim için çok değerli. İş güvenliği konusundaki hassasiyetleri de ayrıca takdire şayan.",
    en: "We trust Via Cleaning for cleaning the critical areas of our Serik-Belek Water Treatment Facilities. Their certifications and expertise for this sensitive job requiring special chemicals are invaluable to us. Their sensitivity to occupational safety is also commendable."
  },
  "testimonial_5_author": {
    tr: "Prof. Dr. Hakan Şentürk",
    en: "Prof. Dr. Hakan Şentürk"
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
    tr: "© 2025 Via Temizlik. Tüm hakları saklıdır.",
    en: "© 2025 Via Cleaning. All rights reserved."
  },
  "footer_description": {
    tr: "Antalya ve KKTC'de ev ve işyerleri için kalite, güvenilirlik ve müşteri memnuniyeti odaklı profesyonel temizlik hizmetleri.",
    en: "Professional cleaning services for homes and businesses in Antalya and North Cyprus with a focus on quality, reliability and customer satisfaction."
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
