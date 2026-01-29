import { MenuCard } from './MenuCard';
import './MenuGrid.scss';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

interface MenuGridProps {
  items: MenuItem[];
}

/**
 * Grid layout for menu items with SCSS styling
 */
export const MenuGrid = ({ items }: MenuGridProps) => {
  if (items.length === 0) {
    return (
      <div className="menu-grid__empty">
        <p>No items found</p>
      </div>
    );
  }

  return (
    <div className="menu-grid__container">
      {items.map((item, index) => (
        <MenuCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};