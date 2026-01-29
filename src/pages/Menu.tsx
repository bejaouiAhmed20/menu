import { useState, useMemo } from 'react';
import { CategoryTabs } from '../components/menu/CategoryTabs';
import { MenuSearch } from '../components/menu/MenuSearch';
import { MenuGrid } from '../components/menu/MenuGrid';
import { menuService } from '../services/menuService';
import './Menu.scss';

type MenuCategory = 'Pizza' | 'Burgers' | 'Pasta' | 'Drinks' | 'Desserts';

/**
 * Menu page with category filtering and search functionality
 */
export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = menuService.getCategories();
  const allItems = menuService.getAllItems();

  const filteredItems = useMemo(() => {
    let items = allItems;

    // Filter by category
    if (activeCategory !== 'All') {
      items = menuService.getItemsByCategory(activeCategory as MenuCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return items;
  }, [activeCategory, searchQuery, allItems]);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Menu</h2>
          <p>Explore our delicious selection of authentic Italian dishes</p>
        </div>
        
        <div className="menu-section__controls">
          <MenuSearch 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <MenuGrid items={filteredItems} />
      </div>
    </section>
  );
};