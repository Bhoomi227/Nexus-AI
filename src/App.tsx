import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal, ShoppingCart, Cpu } from 'lucide-react';
import { cn } from './lib/utils';

import { ProductSpotlight } from './components/ProductSpotlight';
import { Testimonials } from './components/Testimonials';
import { LifestyleGallery } from './components/LifestyleGallery';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

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

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const categories = ['All', 'Hardware', 'Software', 'Infrastructure'];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-velocity selection:text-white">
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        <Hero />

        {/* Infrastructure Showcase */}
        <section id="infrastructure" className="py-40 px-6 border-b border-slate-900">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 brutal-border bg-slate-900">
                  <span className="w-2 h-2 bg-velocity" />
                  <span className="text-velocity uppercase tracking-[0.5em] text-[10px] font-mono font-bold">System Components</span>
                </div>
                <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-12">
                  CORE <br />
                  <span className="text-velocity">INFRASTRUCTURE.</span>
                </h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  Deploy clinical-grade hardware and neural-optimized software to 
                  transform your logistics network into an autonomous ecosystem.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-8 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all brutal-border",
                      activeCategory === cat 
                        ? "bg-velocity text-white border-velocity" 
                        : "bg-slate-900 text-slate-500 hover:text-white hover:border-slate-700"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-900 border border-slate-900">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>
          </div>
        </section>

        <ProductSpotlight />

        {/* Performance Metrics */}
        <section id="performance" className="py-40 px-6 bg-slate-950 border-b border-slate-900 overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 brutal-border bg-slate-900">
                  <span className="w-2 h-2 bg-velocity" />
                  <span className="text-velocity uppercase tracking-[0.5em] text-[10px] font-mono font-bold">Performance Metrics</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-12 text-white">
                  REAL-TIME <br />
                  <span className="text-velocity">OPTIMIZATION.</span>
                </h2>
                <div className="space-y-12">
                  {[
                    { label: 'Throughput Increase', value: '+42%', desc: 'Average increase in warehouse sorting speed.' },
                    { label: 'Latency Reduction', value: '-85%', desc: 'Reduction in routing decision time.' },
                    { label: 'Energy Efficiency', value: '+30%', desc: 'Optimized asset movement reduces waste.' }
                  ].map((stat, i) => (
                    <div key={i} className="group">
                      <div className="flex items-end justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                        <span className="text-4xl font-display font-bold text-velocity">{stat.value}</span>
                      </div>
                      <div className="h-px w-full bg-slate-900 relative overflow-hidden">
                        <motion.div 
                          initial={{ x: '-100%' }}
                          whileInView={{ x: '0%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          className="absolute inset-0 bg-velocity w-full" 
                        />
                      </div>
                      <p className="mt-4 text-sm text-slate-500 font-light">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="relative">
                <div className="brutal-border bg-slate-900 p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" 
                       style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FF4F00 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-64 h-64 border-2 border-velocity/30 border-dashed rounded-full flex items-center justify-center"
                  >
                    <div className="w-48 h-48 border-2 border-velocity/50 border-dashed rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-velocity/20 rounded-full animate-pulse" />
                    </div>
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-display font-bold text-white mb-2">99.9%</div>
                      <div className="text-[10px] font-mono text-velocity uppercase tracking-widest">Uptime Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        <Testimonials />
        <LifestyleGallery />
        <FAQ />
        <CTA />
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
