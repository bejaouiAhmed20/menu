import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMenuService } from '../services/multilingualMenuService';
import { MenuGrid } from '../components/menu/MenuGrid';
import './Home.scss';

/**
 * Home page with hero section and featured menu items
 */
export const Home = () => {
  const { t } = useTranslation();
  const menuService = useMenuService();
  const featuredItems = menuService.getFeaturedItems();

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="home-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="home-section__hero"
          >
            <h1>
              {t('home.title')}{' '}
              <span className="highlight">
                {t('home.restaurant')}
              </span>
            </h1>
            <p>
              {t('home.subtitle')}
            </p>
            <button className="cta-button" onClick={scrollToMenu}>
              {t('home.cta')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('home.featured')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t('home.featuredSubtitle')}
            </motion.p>
          </div>
          <MenuGrid items={featuredItems} />
        </div>
      </section>
    </div>
  );
};