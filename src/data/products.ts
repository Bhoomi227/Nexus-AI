import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Precision Sous Vide Immersion Circulator',
    description: 'Professional-grade temperature control for perfect results every time.',
    price: 199.99,
    category: 'smart',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1591130901921-3f0652bb3915?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 274,
    features: ['Silent Operation', 'Auto Shut-off', 'Non-stick Coating']
  }
];
