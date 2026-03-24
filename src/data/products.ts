import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'V-Core Compute Node',
    description: 'High-performance edge computing unit for real-time logistics processing.',
    price: 2499.00,
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 128,
    features: ['AI Acceleration', 'IP67 Rated', '5G Ready']
  },
  {
    id: '2',
    name: 'Velocity OS Enterprise',
    description: 'The operating system for modern supply chains. Full visibility and AI optimization.',
    price: 499.00,
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 850,
    features: ['Predictive Analytics', 'Multi-cloud Sync', 'API First']
  },
  {
    id: '3',
    name: 'Neural Route Optimizer',
    description: 'Advanced pathfinding algorithm that reduces fuel consumption by up to 30%.',
    price: 199.00,
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1580674271209-40b4b985fabf?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviews: 432,
    features: ['Dynamic Rerouting', 'Traffic Aware', 'Carbon Tracking']
  },
  {
    id: '4',
    name: 'V-Sensor Mesh (Pack of 10)',
    description: 'Ultra-low power IoT sensors for granular warehouse and asset tracking.',
    price: 899.00,
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviews: 215,
    features: ['5-Year Battery', 'LoRaWAN', 'Encryption']
  },
  {
    id: '5',
    name: 'Global Transit API',
    description: 'Unified API for tracking shipments across 500+ global carriers.',
    price: 299.00,
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviews: 1120,
    features: ['99.99% Uptime', 'Webhooks', 'SDKs Included']
  },
  {
    id: '6',
    name: 'V-Gateway Hub',
    description: 'Centralized communication hub for connecting all edge devices to the cloud.',
    price: 1200.00,
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviews: 84,
    features: ['Dual-band WiFi', 'Ethernet POE', 'Aluminum Chassis']
  }
];
