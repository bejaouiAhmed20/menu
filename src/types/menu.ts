export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export type MenuCategory = 'Pizza' | 'Burgers' | 'Pasta' | 'Drinks' | 'Desserts';