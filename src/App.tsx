import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal, ShoppingCart } from 'lucide-react';
import { cn } from './lib/utils';

import { ProductSpotlight } from './components/ProductSpotlight';
import { Testimonials } from './components/Testimonials';
import { LifestyleGallery } from './components/LifestyleGallery';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const categories = ['all', 'appliances', 'smart', 'accessories'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        <Hero />

        {/* Trending Now Section */}
        <section className="py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Curated Selection</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif leading-tight tracking-tighter">
                  TRENDING <br />
                  <span className="italic font-light">COLLECTIONS</span>
                </h2>
              </div>
              
              <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap border",
                      activeCategory === cat
                        ? 'bg-brand-950 text-white border-brand-950 shadow-2xl shadow-brand-950/20'
                        : 'bg-transparent text-brand-400 border-brand-200 hover:border-brand-950 hover:text-brand-950'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-32 text-center">
                <p className="text-brand-400 font-serif text-2xl italic font-light">The collection is currently being updated.</p>
              </div>
            )}
          </div>
        </section>

        <ProductSpotlight />

        {/* Why Choose Us Section - Modern Bento Style */}
        <section className="py-32 px-6 bg-brand-950 text-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-3xl flex flex-col justify-between">
                <div>
                  <SlidersHorizontal className="w-10 h-10 text-accent mb-8" />
                  <h3 className="text-3xl font-serif mb-6">Precision <br />Engineering</h3>
                  <p className="text-brand-400 font-light leading-relaxed">
                    Every device is calibrated to professional standards, ensuring consistent results for every recipe.
                  </p>
                </div>
                <div className="mt-12 text-accent font-bold text-[10px] uppercase tracking-widest">01 / Innovation</div>
              </div>
              
              <div className="lg:col-span-4 bg-accent p-12 rounded-3xl flex flex-col justify-between text-white">
                <div>
                  <Filter className="w-10 h-10 text-white mb-8" />
                  <h3 className="text-3xl font-serif mb-6">Curated <br />Excellence</h3>
                  <p className="text-white/80 font-light leading-relaxed">
                    We hand-select only the most innovative tools that meet our rigorous performance and design criteria.
                  </p>
                </div>
                <div className="mt-12 text-white/50 font-bold text-[10px] uppercase tracking-widest">02 / Curation</div>
              </div>

              <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-3xl flex flex-col justify-between">
                <div>
                  <ShoppingCart className="w-10 h-10 text-accent mb-8" />
                  <h3 className="text-3xl font-serif mb-6">Culinary <br />Support</h3>
                  <p className="text-brand-400 font-light leading-relaxed">
                    Our team of chefs and tech experts are available 24/7 to help you master your new equipment.
                  </p>
                </div>
                <div className="mt-12 text-accent font-bold text-[10px] uppercase tracking-widest">03 / Service</div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <LifestyleGallery />
        <FAQ />

        {/* Newsletter Section */}
        <section className="bg-brand-100 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Join the Culinary Elite</h2>
            <p className="text-brand-600 mb-10 max-w-lg mx-auto leading-relaxed">
              Subscribe to receive exclusive offers, early access to new releases, and professional cooking tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full bg-white border border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-all"
              />
              <button className="bg-brand-950 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-800 transition-all shadow-md">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
