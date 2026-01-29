import { motion } from 'framer-motion';
import './CategoryTabs.scss';

type MenuCategory = 'Pizza' | 'Burgers' | 'Pasta' | 'Drinks' | 'Desserts';

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

/**
 * Category tabs for filtering menu items
 */
export const CategoryTabs = ({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const allCategories = ['All', ...categories];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="category-tabs"
    >
      <div className="category-tabs__container">
        <div className="category-tabs__list">
          {allCategories.map((category) => (
            <button
              key={category}
              className={`category-tabs__tab ${
                activeCategory === category ? 'category-tabs__tab--active' : ''
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};