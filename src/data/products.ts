import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Precision Sous Vide Immersion Circulator',
    description: 'Professional-grade temperature control for perfect results every time.',
    price: 199.99,
    category: 'smart',
    image: 'https://images.unsplash.com/photo-1614346413047-48139d55fd54?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 128,
    features: ['WiFi Connectivity', '0.1°C Precision', 'Waterproof IPX7']
  },
  {
    id: '2',
    name: 'Smart Multi-Cooker Pro',
    description: '10-in-1 programmable pressure cooker with built-in scale.',
    price: 249.50,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 342,
    features: ['OLED Display', 'Built-in Scale', 'Recipe App Sync']
  },
  {
    id: '3',
    name: 'Digital Kitchen Scale Elite',
    description: 'Ultra-thin tempered glass scale with high-precision sensors.',
    price: 45.00,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1594385208974-2e75f9d8ad48?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 89,
    features: ['Touch Controls', 'Rechargeable', 'Unit Conversion']
  },
  {
    id: '4',
    name: 'Professional Burr Coffee Grinder',
    description: '40 grind settings for the perfect espresso or pour-over.',
    price: 159.00,
    category: 'appliances',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 215,
    features: ['Conical Burrs', 'Anti-Static Tech', 'Dose Timer']
  },
  {
    id: '5',
    name: 'Smart Meat Thermometer Duo',
    description: 'Wireless dual-probe thermometer with 165ft range.',
    price: 89.99,
    category: 'smart',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 156,
    features: ['Bluetooth 5.0', 'Cloud Storage', 'Guided Cooking']
  },
  {
    id: '6',
    name: 'Electric Milk Frother & Steamer',
    description: 'Create barista-quality foam for lattes and cappuccinos.',
    price: 65.00,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 274,
    features: ['Silent Operation', 'Auto Shut-off', 'Non-stick Coating']
  }
];
