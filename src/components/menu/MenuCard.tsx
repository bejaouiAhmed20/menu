import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './MenuCard.scss';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

/**
 * Horizontal menu item card with SCSS styling
 */
export const MenuCard = ({ item, index }: MenuCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="menu-card"
    >
      <div className="menu-card__container">
        <div className="menu-card__content">
          {/* Image Section */}
          <div className="menu-card__image">
            <img
              src={item.image}
              alt={item.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
            {item.featured && (
              <div className="menu-card__featured-badge" />
            )}
          </div>

          {/* Content Section */}
          <div className="menu-card__details">
            <div className="menu-card__header">
              <h3 className="menu-card__title">
                {item.name}
              </h3>
              <span className="menu-card__price">
                ${item.price}
              </span>
            </div>
            
            <p className="menu-card__description">
              {item.description}
            </p>
            
            <span className="menu-card__category">
              {item.category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};