import { useTranslation } from 'react-i18next';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

type MenuCategory = 'Pizza' | 'Burgers' | 'Pasta' | 'Drinks' | 'Desserts';

const menuItems = [
  { id: 1, key: 'margherita', price: 12, image: '/src/assets/images/pizza.jpg', category: 'Pizza', featured: true },
  { id: 2, key: 'pepperoni', price: 14, image: '/src/assets/images/pizza.webp', category: 'Pizza' },
  { id: 3, key: 'classicBurger', price: 10, image: '/src/assets/images/burger.jpg', category: 'Burgers', featured: true },
  { id: 4, key: 'chickenBurger', price: 11, image: '/src/assets/images/burger.jpg', category: 'Burgers' },
  { id: 5, key: 'carbonara', price: 13, image: '/src/assets/images/pasta.jpg', category: 'Pasta', featured: true },
  { id: 6, key: 'arrabbiata', price: 11, image: '/src/assets/images/pasta.jpg', category: 'Pasta' },
  { id: 7, key: 'cola', price: 3, image: '/src/assets/images/cocaCola.jpeg', category: 'Drinks' },
  { id: 8, key: 'orangeJuice', price: 4, image: '/src/assets/images/orange_juice.jpg', category: 'Drinks' },
  { id: 9, key: 'chocolateCake', price: 6, image: '/src/assets/images/chocolate_cake.jpg', category: 'Desserts' },
  { id: 10, key: 'tiramisu', price: 7, image: '/src/assets/images/tiramisu.jpg', category: 'Desserts' }
];

export const useMenuService = () => {
  const { t } = useTranslation();

  const getTranslatedItems = (): MenuItem[] => {
    return menuItems.map(item => ({
      ...item,
      name: t(`menu.items.${item.key}.name`),
      description: t(`menu.items.${item.key}.description`)
    }));
  };

  return {
    getAllItems: getTranslatedItems,
    getItemsByCategory: (category: MenuCategory): MenuItem[] => 
      getTranslatedItems().filter(item => item.category === category),
    getFeaturedItems: (): MenuItem[] => 
      getTranslatedItems().filter(item => item.featured),
    getCategories: (): MenuCategory[] => 
      ['Pizza', 'Burgers', 'Pasta', 'Drinks', 'Desserts'],
    searchItems: (query: string): MenuItem[] => 
      getTranslatedItems().filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
  };
};