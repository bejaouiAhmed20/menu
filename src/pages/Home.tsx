import { motion } from 'framer-motion';
import { menuService } from '../services/menuService';
import { MenuGrid } from '../components/menu/MenuGrid';
import './Home.scss';

/**
 * Home page with hero section and featured menu items
 */
export const Home = () => {
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
              Welcome to{' '}
              <span className="highlight">
                Bella Vista
              </span>
            </h1>
            <p>
              Experience authentic Italian cuisine crafted with passion and the finest ingredients
            </p>
            <button className="cta-button" onClick={scrollToMenu}>
              View Our Menu
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
              Featured Dishes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Discover our chef's special recommendations
            </motion.p>
          </div>
          <MenuGrid items={featuredItems} />
        </div>
      </section>
    </div>
  );
};