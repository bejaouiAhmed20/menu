import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const allCategories = ['All', ...categories];

  const getCategoryLabel = (category: string) => {
    if (category === 'All') return t('menu.categories.all');
    return t(`menu.categories.${category.toLowerCase()}`);
  };

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
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};