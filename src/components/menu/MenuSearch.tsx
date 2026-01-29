import { Search as SearchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './MenuSearch.scss';

interface MenuSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

/**
 * Search input component for filtering menu items
 */
export const MenuSearch = ({ searchQuery, onSearchChange }: MenuSearchProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="menu-search"
    >
      <div className="menu-search__container">
        <SearchIcon className="menu-search__icon" />
        <input
          type="text"
          placeholder={t('menu.search')}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="menu-search__input"
        />
      </div>
    </motion.div>
  );
};