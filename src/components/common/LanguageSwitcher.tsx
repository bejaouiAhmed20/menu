import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExpandMore } from '@mui/icons-material';
import './LanguageSwitcher.scss';

const languages = [
  { code: 'en', name: 'English', flag: '/images/UK_flag.png' },
  { code: 'fr', name: 'Français', flag: '/images/france_flag.png' },
  { code: 'ar', name: 'العربية', flag: '/images/saudi-arabia-flag.png' }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    
    // Update document direction for RTL
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-switcher__trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={currentLanguage.flag} alt={currentLanguage.name} className="language-switcher__flag" />
        <span className="language-switcher__code">{currentLanguage.code.toUpperCase()}</span>
        <ExpandMore className={`language-switcher__arrow ${isOpen ? 'open' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div className="language-switcher__overlay" onClick={() => setIsOpen(false)} />
          <div className="language-switcher__dropdown">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`language-switcher__option ${
                  lang.code === i18n.language ? 'active' : ''
                }`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <img src={lang.flag} alt={lang.name} className="language-switcher__flag" />
                <span className="language-switcher__name">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};