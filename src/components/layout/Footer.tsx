import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

/**
 * Footer component with restaurant info and social links
 */
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Bella Vista</h3>
            <p>{t('footer.description')}</p>
          </div>
          
          <div className="footer__section">
            <h4>{t('footer.contact')}</h4>
            <p>{t('contact.details.street')}</p>
            <p>{t('contact.details.city')}</p>
            <p>{t('contact.details.phone')}</p>
          </div>
          
          <div className="footer__section">
            <h4>{t('footer.followUs')}</h4>
            <div className="footer__social">
              <IconButton className="social-icon">
                <Facebook />
              </IconButton>
              <IconButton className="social-icon">
                <Instagram />
              </IconButton>
              <IconButton className="social-icon">
                <Twitter />
              </IconButton>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};