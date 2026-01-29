import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './Footer.scss';

/**
 * Footer component with restaurant info and social links
 */
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Bella Vista</h3>
            <p>Authentic Italian cuisine in the heart of the city</p>
          </div>
          
          <div className="footer__section">
            <h4>Contact</h4>
            <p>123 Restaurant Street</p>
            <p>City, State 12345</p>
            <p>(555) 123-4567</p>
          </div>
          
          <div className="footer__section">
            <h4>Follow Us</h4>
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
          <p>© 2024 Bella Vista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};