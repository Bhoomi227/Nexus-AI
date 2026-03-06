export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appliances' | 'tools' | 'smart' | 'accessories';
  image: string;
  rating: number;
  reviews: number;
  features: string[];
}

export type CartItem = Product & { quantity: number };
