import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronLeft,
  ChevronRight,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-aura-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Links */}
        <div className="hidden lg:flex items-center gap-10">
          {['Shop', 'Collections', 'Journal', 'About'].map((item) => (
            <a key={item} href="#" className="text-[13px] uppercase tracking-[0.2em] font-medium nav-link-underline">
              {item}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" className="text-3xl md:text-4xl font-serif tracking-[0.1em] font-light">AURA</a>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block hover:opacity-50 transition-opacity">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:opacity-50 transition-opacity relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-aura-900 text-white text-[10px] flex items-center justify-center rounded-full">0</span>
          </button>
          <button 
            className="lg:hidden hover:opacity-50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-aura-900/40 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-aura-50 p-12 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-8 right-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} strokeWidth={1} />
              </button>
              
              <div className="mt-20 space-y-8">
                {['Shop All', 'New Arrivals', 'Collections', 'Journal', 'Our Story'].map((item) => (
                  <a key={item} href="#" className="block text-3xl font-serif hover:italic transition-all">
                    {item}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-aura-200">
                <p className="text-xs uppercase tracking-widest text-aura-300 mb-4">Follow Us</p>
                <div className="flex gap-6">
                  <Instagram size={20} strokeWidth={1.5} />
                  <Twitter size={20} strokeWidth={1.5} />
                  <Facebook size={20} strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-aura-200">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2070" 
          alt="Fashion Editorial" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white text-xs uppercase tracking-[0.4em] mb-6 font-medium"
        >
          Spring / Summer 2026
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-white text-6xl md:text-8xl lg:text-9xl font-serif font-light mb-12"
        >
          The Art of <br /> <span className="italic">Simplicity</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <button className="group relative px-12 py-4 bg-white text-aura-900 text-xs uppercase tracking-widest font-bold overflow-hidden transition-all hover:bg-aura-900 hover:text-white">
            <span className="relative z-10">Explore Collection</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Silk Slip Dress",
      price: "$240",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000",
      category: "Dresses"
    },
    {
      id: 2,
      name: "Linen Blazer",
      price: "$310",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000",
      category: "Outerwear"
    },
    {
      id: 3,
      name: "Cashmere Sweater",
      price: "$195",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000",
      category: "Knitwear"
    },
    {
      id: 4,
      name: "Tailored Trousers",
      price: "$180",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1000",
      category: "Bottoms"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-aura-300 mb-4">Curated Selection</p>
            <h2 className="text-4xl md:text-5xl font-serif">New Arrivals</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-aura-900 pb-1 hover:opacity-50 transition-opacity">
            View All <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-aura-100 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                  <Heart size={18} strokeWidth={1.5} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-aura-900 text-white text-[10px] uppercase tracking-widest font-bold">
                    Quick Add
                  </button>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-aura-300 mb-2">{product.category}</p>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-serif">{product.name}</h3>
                <span className="text-sm font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EditorialSection = () => {
  return (
    <section className="bg-aura-100 py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1000" 
              alt="Editorial" 
              className="w-full h-full object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-12 -right-12 w-2/3 aspect-square hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000" 
              alt="Editorial Detail" 
              className="w-full h-full object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-aura-300 mb-8">Our Philosophy</p>
          <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
            Conscious Craftsmanship <br /> & <span className="italic">Timeless Design</span>
          </h2>
          <p className="text-lg text-aura-900/70 mb-12 leading-relaxed">
            We believe in clothing that lasts beyond seasons. Our pieces are ethically sourced and meticulously crafted from the finest natural fibers, designed to be the foundation of a modern, conscious wardrobe.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-serif mb-2 italic">100%</h4>
              <p className="text-xs uppercase tracking-widest text-aura-300">Organic Materials</p>
            </div>
            <div>
              <h4 className="text-2xl font-serif mb-2 italic">Zero</h4>
              <p className="text-xs uppercase tracking-widest text-aura-300">Waste Policy</p>
            </div>
          </div>
          <button className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold border-b border-aura-900 pb-2 hover:gap-6 transition-all">
            Read Our Story <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Collections = () => {
  const collections = [
    {
      title: "The Linen Series",
      subtitle: "Breathable Essentials",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000",
      size: "large"
    },
    {
      title: "Silk & Satin",
      subtitle: "Evening Grace",
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=1000",
      size: "small"
    },
    {
      title: "Organic Cotton",
      subtitle: "Daily Comfort",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000",
      size: "small"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-aura-300 mb-4">Explore</p>
          <h2 className="text-5xl font-serif italic">Featured Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[800px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative group overflow-hidden cursor-pointer"
          >
            <img src={collections[0].image} alt={collections[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-12 left-12 text-white">
              <p className="text-xs uppercase tracking-widest mb-2">{collections[0].subtitle}</p>
              <h3 className="text-4xl font-serif mb-6">{collections[0].title}</h3>
              <button className="text-xs uppercase tracking-widest font-bold border-b border-white pb-1">Shop Collection</button>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-8">
            {collections.slice(1).map((col, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex-1 relative group overflow-hidden cursor-pointer"
              >
                <img src={col.image} alt={col.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-[10px] uppercase tracking-widest mb-1">{col.subtitle}</p>
                  <h3 className="text-2xl font-serif mb-4">{col.title}</h3>
                  <button className="text-[10px] uppercase tracking-widest font-bold border-b border-white pb-1">View</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryShowcase = () => {
  const categories = [
    { name: "Womenswear", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000" },
    { name: "Menswear", image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=1000" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1000" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-aura-50">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-aura-900/10 group-hover:bg-transparent transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">{cat.name}</h3>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs uppercase tracking-[0.3em] font-medium group-hover:hidden">
              {cat.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Materials = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <p className="text-xs uppercase tracking-[0.4em] text-aura-300 mb-8">The Foundation</p>
          <h2 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">Superior Materials, <br /><span className="italic">Ethically Sourced</span></h2>
          
          <div className="space-y-12">
            {[
              { title: "Pure Mulberry Silk", desc: "Known for its natural sheen and incredible strength, our silk is sourced from sustainable farms." },
              { title: "Belgian Linen", desc: "A timeless fabric that grows softer with every wash, perfect for effortless summer elegance." },
              { title: "Recycled Cashmere", desc: "Luxurious warmth with a reduced environmental footprint, repurposed from premium fibers." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="border-l border-aura-200 pl-8"
              >
                <h4 className="text-xl font-serif mb-3">{item.title}</h4>
                <p className="text-aura-900/60 text-sm leading-relaxed max-w-md">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=1000" 
              className="w-full aspect-[3/4] object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
            <motion.img 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000" 
              className="w-full aspect-[3/4] object-cover rounded-sm mt-12"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Journal = () => {
  const posts = [
    {
      title: "The Art of Minimalist Living",
      date: "March 12, 2026",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
      category: "Lifestyle"
    },
    {
      title: "Sustainable Fibers: A Deep Dive",
      date: "February 28, 2026",
      image: "https://images.unsplash.com/photo-1558444479-c84829091c22?auto=format&fit=crop&q=80&w=1000",
      category: "Sustainability"
    },
    {
      title: "Spring Palette: Earthy Tones",
      date: "February 15, 2026",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=1000",
      category: "Design"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-aura-50">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-aura-300 mb-4">The Journal</p>
            <h2 className="text-4xl md:text-5xl font-serif italic">Stories & Insights</h2>
          </div>
          <button className="text-xs uppercase tracking-widest font-bold border-b border-aura-900 pb-1">Read All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-aura-300 mb-3">{post.category} — {post.date}</p>
              <h3 className="text-2xl font-serif group-hover:italic transition-all">{post.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialFeed = () => {
  const images = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.4em] text-aura-300 mb-4">Follow Us</p>
        <h3 className="text-2xl font-serif italic">@aura_minimalist</h3>
      </div>
      
      <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-64 aspect-square relative group cursor-pointer">
            <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white" size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-32 px-6 text-center bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Join the AURA Journal</h2>
        <p className="text-aura-900/60 mb-12 leading-relaxed">
          Subscribe to receive early access to new collections, editorial stories, and exclusive invitations.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-grow bg-aura-100 px-8 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-aura-900 transition-all"
          />
          <button className="px-12 py-4 bg-aura-900 text-white text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-aura-900 text-aura-100 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 mb-24">
          <div className="col-span-2">
            <a href="/" className="text-4xl font-serif tracking-widest mb-8 block">AURA</a>
            <p className="text-aura-100/50 max-w-xs leading-relaxed text-sm">
              Elevating the everyday through minimalist design and conscious craftsmanship.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-aura-100/60">
              {['New Arrivals', 'Best Sellers', 'Collections', 'Accessories'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-aura-100/60">
              {['Shipping', 'Returns', 'Size Guide', 'Contact Us'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-aura-100/60">
              {['Our Story', 'Journal', 'Sustainability', 'Stockists'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Follow</h4>
            <ul className="space-y-4 text-sm text-aura-100/60">
              {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-aura-100/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-aura-100/40">
            © 2026 AURA Minimalist Fashion. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-aura-100/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-aura-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <NewArrivals />
        <Collections />
        <CategoryShowcase />
        <EditorialSection />
        <Materials />
        <Journal />
        <SocialFeed />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
