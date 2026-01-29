import { useState } from 'react';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import './Navbar.scss';

/**
 * Responsive navigation bar with mobile drawer and language switcher
 */
export const Navbar = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.menu'), href: '#menu' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar__content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="navbar__logo"
            >
              Bella Vista
            </motion.div>

            {/* Desktop Navigation */}
            <div className="navbar__nav">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="navbar__actions">
              <LanguageSwitcher />
              
              {/* Mobile Menu Button */}
              <button
                className="navbar__menu-btn"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div 
        className={`navbar__overlay ${mobileOpen ? 'open' : ''}`}
        onClick={handleDrawerToggle}
      />

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="close-btn">
          <button onClick={handleDrawerToggle}>
            <CloseIcon />
          </button>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};