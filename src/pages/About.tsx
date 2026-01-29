import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './About.scss';

/**
 * About page with restaurant story and information
 */
export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('about.subtitle')}
          </motion.p>
        </div>

        <div className="about-section__content">
          <motion.div
            className="about-section__text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>{t('about.text1')}</p>
            <p>{t('about.text2')}</p>
            <p>{t('about.text3')}</p>
          </motion.div>

          <motion.div
            className="about-section__image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/src/assets/images/restaurant_interior.jpg"
              alt="Restaurant Interior"
            />
          </motion.div>
        </div>

        <motion.div
          className="about-section__stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-section__stat">
            <h3>35+</h3>
            <p>{t('about.stats.years')}</p>
          </div>
          <div className="about-section__stat">
            <h3>50+</h3>
            <p>{t('about.stats.dishes')}</p>
          </div>
          <div className="about-section__stat">
            <h3>1000+</h3>
            <p>{t('about.stats.customers')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};