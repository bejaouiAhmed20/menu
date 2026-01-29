import { motion } from 'framer-motion';
import './About.scss';

/**
 * About page with restaurant story and information
 */
export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Discover the passion behind Bella Vista
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
            <p>
              Founded in 1985 by the Rossi family, Bella Vista has been serving authentic 
              Italian cuisine for over three decades. Our commitment to traditional recipes 
              and fresh, high-quality ingredients has made us a beloved destination for 
              food lovers.
            </p>
            <p>
              Every dish is prepared with love and attention to detail, using recipes 
              passed down through generations. From our wood-fired pizzas to our 
              handmade pasta, we bring the authentic taste of Italy to your table.
            </p>
            <p>
              We believe that great food brings people together, and we're honored to 
              be part of your special moments and everyday celebrations.
            </p>
          </motion.div>

          <motion.div
            className="about-section__image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlJlc3RhdXJhbnQgSW50ZXJpb3I8L3RleHQ+PC9zdmc+"
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
            <p>Years of Excellence</p>
          </div>
          <div className="about-section__stat">
            <h3>50+</h3>
            <p>Signature Dishes</p>
          </div>
          <div className="about-section__stat">
            <h3>1000+</h3>
            <p>Happy Customers</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};