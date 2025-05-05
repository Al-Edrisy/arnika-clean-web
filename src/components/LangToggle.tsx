
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const LangToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button 
      onClick={toggleLanguage}
      variant="outline" 
      className="fixed top-5 right-5 z-50 bg-arnika-dark border-arnika-teal text-arnika-teal hover:bg-arnika-teal hover:text-arnika-white transition-all duration-300 rounded-md px-4 py-2"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </Button>
  );
};

export default LangToggle;
