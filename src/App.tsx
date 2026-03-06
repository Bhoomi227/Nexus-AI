import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  Heart, 
  Instagram, 
  Twitter, 
  Facebook,
  ChevronRight,
  Clock,
  User,
  ChefHat,
  Flame,
  Palette,
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kitchen-bg/80 backdrop-blur-md py-6 border-b border-kitchen-dark/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ChefHat size={24} className="text-kitchen-dark" />
          <span className="text-xl font-display font-extrabold tracking-tighter">WOW KITCHEN</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {['Appliances', 'Cookware', 'Cook Tools', 'Recipes'].map((item) => (
            <a key={item} href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-kitchen-muted transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-[10px] uppercase tracking-widest font-bold">Sign In</button>
          <button className="relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-kitchen-dark text-white text-[8px] flex items-center justify-center rounded-full">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="diagonal-text top-40 left-20">SAJON</div>
      <div className="diagonal-text top-80 right-40">ONIX</div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-8xl leading-[0.9] mb-10">
            Set Out <br /> Life <span className="bg-kitchen-dark text-white px-4 py-1">Beautiful</span> <br /> Through Cooking.
          </h1>
          <button className="btn-kitchen-outline">Shop Full Collection</button>
          
          <div className="mt-16 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-kitchen-dark flex items-center justify-center text-white">
              <Star size={20} />
            </div>
            <div>
              <p className="text-2xl font-display font-extrabold">+7.5k</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-kitchen-muted">Happy Customers</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-sm overflow-hidden border-8 border-white/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
              alt="Chef Cooking" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-kitchen-dark text-white rounded-full flex flex-col items-center justify-center text-center p-2 border-4 border-kitchen-bg">
            <span className="text-[10px] uppercase font-bold leading-tight">Top Choice</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureHighlights = () => {
  return (
    <section className="py-20 px-6 bg-kitchen-accent/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-kitchen-card p-10 flex gap-8 items-center border border-kitchen-dark/5">
          <div className="w-1/3 aspect-square bg-kitchen-bg rounded-sm flex items-center justify-center p-4">
            <img src="https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=400" alt="Pots" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="w-2/3">
            <h3 className="text-xl mb-4 leading-tight">Best Selling 10pc Pro Non-Stick Cookware Set in Matte</h3>
            <button className="text-[10px] uppercase tracking-widest font-bold border-b border-kitchen-dark pb-1">See Offers</button>
          </div>
        </div>

        <div className="bg-kitchen-card p-10 flex gap-8 items-center border border-kitchen-dark/5">
          <div className="w-1/3 aspect-square bg-kitchen-bg rounded-sm flex items-center justify-center p-4">
            <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400" alt="Kettle" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="w-2/3">
            <h3 className="text-xl mb-4 leading-tight">1.5L Electric Programmable Temperature with Touch Activated Display</h3>
            <button className="text-[10px] uppercase tracking-widest font-bold border-b border-kitchen-dark pb-1">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ColorShowcase = () => {
  const products = [
    { name: "Toaster", image: "https://images.unsplash.com/photo-1584913761644-c7939977a49b?auto=format&fit=crop&q=80&w=400" },
    { name: "Oven", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Coffee Maker", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
          <h2 className="text-6xl leading-none">A <span className="bg-kitchen-dark text-white px-4 py-1">Color</span> For <br /> Every Counter</h2>
          <p className="text-kitchen-muted text-sm leading-relaxed max-w-md">
            Our appliances offer iconic timeless form with modern tech. With everything from toaster ovens and coffee makers to mixers and more. High-performance appliances for every kitchen counter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-kitchen-card aspect-square flex flex-col items-center justify-center p-12 border border-kitchen-dark/5">
              <img src={p.image} alt={p.name} className="w-full h-auto object-contain mb-8 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <button className="text-[10px] uppercase tracking-widest font-bold border-b border-kitchen-dark pb-1">Explore {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyWowKitchen = () => {
  const items = [
    { icon: <Flame size={24} />, title: "Innovative Touch Activated Display", desc: "Modern tech at your fingertips." },
    { icon: <ChefHat size={24} />, title: "Thoughtfully Designed Modern Silhouette", desc: "Crafted for the modern kitchen." },
    { icon: <Shield size={24} />, title: "High Quality Durable Construction", desc: "Made to last a lifetime." },
    { icon: <Palette size={24} />, title: "Contemporary Colors", desc: "A palette for every style." }
  ];

  return (
    <section className="py-32 px-6 bg-kitchen-accent/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-1">
        <div className="bg-kitchen-bg p-20 flex flex-col justify-center border border-kitchen-dark/5">
          <h2 className="text-5xl mb-8 leading-tight">Why you'll love <br /> Wow Kitchen</h2>
          <p className="text-kitchen-muted text-sm leading-relaxed mb-12">
            WOW Kitchen products are designed and manufactured to ensure the highest style and quality. They are built to last and look great in any kitchen.
          </p>
          <button className="btn-kitchen-outline self-start">Learn More</button>
        </div>

        <div className="grid grid-cols-2 gap-1">
          {items.map((item, i) => (
            <div key={i} className={`p-10 flex flex-col justify-center border border-kitchen-dark/5 ${i === 3 ? 'bg-kitchen-dark text-white' : 'bg-kitchen-card'}`}>
              <div className={`mb-6 ${i === 3 ? 'text-white' : 'text-kitchen-dark'}`}>{item.icon}</div>
              <h4 className="text-lg mb-2 leading-tight">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState('Cookware');
  const products = [
    { name: "Essential Stock Pot", price: "$45.00", image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=400" },
    { name: "Essential Fry Pan", price: "$35.00", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400" },
    { name: "Essential Sauté Pan", price: "$40.00", image: "https://images.unsplash.com/photo-1584913761644-c7939977a49b?auto=format&fit=crop&q=80&w=400" },
    { name: "Essential Chef Pan", price: "$50.00", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl mb-12">Best Sellers</h2>
          <div className="flex justify-center gap-4">
            {['Cookware', 'Cook Tools', 'Appliances', 'Offers'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pill-tab ${activeTab === tab ? 'pill-tab-active' : 'pill-tab-inactive'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-kitchen-card aspect-[3/4] p-8 flex items-center justify-center border border-kitchen-dark/5 mb-6 group cursor-pointer overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="text-center">
                <h3 className="text-lg mb-1">{p.name}</h3>
                <p className="text-kitchen-muted text-sm mb-4">{p.price}</p>
                <button className="text-[10px] uppercase tracking-widest font-bold border-b border-kitchen-dark pb-1">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecipesSection = () => {
  return (
    <section className="py-32 px-6 bg-kitchen-accent/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="aspect-video bg-kitchen-card overflow-hidden border-8 border-white/20 shadow-xl">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" alt="Recipe" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-6xl mb-8">Recipes</h2>
          <p className="text-kitchen-muted text-xs uppercase tracking-widest font-bold mb-4">Quick Vegan Fried Breakfast Sandwich</p>
          <p className="text-kitchen-muted text-sm mb-8">By Tina Simmons</p>
          
          <div className="flex gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-xs font-bold uppercase">15 Min</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="text-xs font-bold uppercase">Serves 2-4</span>
            </div>
          </div>

          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Products Used</h4>
          <div className="flex gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-20 h-20 bg-kitchen-card border border-kitchen-dark/5 p-4 flex items-center justify-center">
                <img src={`https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=100`} className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SoulSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-1">
        <div className="bg-kitchen-dark text-white p-20 flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-8">Passion For Cooking</p>
          <h2 className="text-6xl mb-12 leading-tight">Create Food <br /> For The Soul.</h2>
          
          <div className="space-y-6 mb-12">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest font-bold">Product Details</span>
              <ChevronRight size={16} />
            </div>
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest font-bold">Specifications</span>
              <ChevronRight size={16} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <Flame size={20} className="text-white/40" />
              <p className="text-[10px] uppercase font-bold leading-relaxed">Durable and Scratch Resistant for your daily cooking.</p>
            </div>
            <div className="flex items-start gap-4">
              <Shield size={20} className="text-white/40" />
              <p className="text-[10px] uppercase font-bold leading-relaxed">Dishwasher Safe for Easy Cleaning.</p>
            </div>
          </div>

          <button className="bg-kitchen-card text-kitchen-dark px-12 py-4 font-bold uppercase tracking-widest text-xs self-start hover:bg-white transition-all">
            Shop Now
          </button>
        </div>

        <div className="aspect-square bg-kitchen-card overflow-hidden">
          <img src="https://images.unsplash.com/photo-1556910110-ad5270ff383c?auto=format&fit=crop&q=80&w=1000" alt="Soul Food" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-32 px-6 text-center border-y border-kitchen-dark/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <h2 className="text-5xl text-left leading-tight">Stay Up To Date On All <br /> News And OFFERS.</h2>
        <div className="flex-grow max-w-md w-full flex gap-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-grow bg-transparent border-b border-kitchen-dark py-4 text-sm focus:outline-none"
          />
          <button className="w-12 h-12 bg-kitchen-dark text-white flex items-center justify-center">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-kitchen-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
          <div className="bg-kitchen-card p-12 border border-kitchen-dark/5 mb-8 flex flex-col items-center justify-center aspect-video">
            <ChefHat size={40} className="mb-4" />
            <span className="text-2xl font-display font-extrabold tracking-tighter">WOW KITCHEN</span>
          </div>
          <p className="text-kitchen-muted text-sm leading-relaxed">
            Set out life beautiful through cooking. High-performance kitchen appliances and cookware.
          </p>
        </div>

        <div>
          <h4 className="text-4xl mb-8">Contact us</h4>
          <div className="space-y-4 text-sm">
            <p className="text-kitchen-muted">Contact@Wowkitchen.com</p>
            <p className="font-bold">Call us: (123) 456-7890</p>
            <p className="font-bold">Visit us: (987) 654-3210</p>
            <p className="text-kitchen-muted mt-8">123 Brooklyn Street, <br /> New York, NY 10001</p>
          </div>
        </div>

        <div>
          <div className="aspect-video bg-kitchen-card overflow-hidden border border-kitchen-dark/5 mb-8">
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Follow us</h4>
          <div className="flex gap-6">
            <Instagram size={20} />
            <Twitter size={20} />
            <Facebook size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const AccessoriesSection = () => {
  const accessories = [
    { name: "Marble Rolling Pin", price: "$28.00", image: "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?auto=format&fit=crop&q=80&w=400" },
    { name: "Artisan Wood Spoons", price: "$15.00", image: "https://images.unsplash.com/photo-1591196702597-062a172d8fd7?auto=format&fit=crop&q=80&w=400" },
    { name: "Ceramic Salt Cellar", price: "$22.00", image: "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?auto=format&fit=crop&q=80&w=400" },
    { name: "Linen Apron", price: "$35.00", image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-32 px-6 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-kitchen-muted font-bold mb-4">The Essentials</p>
            <h2 className="text-5xl md:text-6xl leading-tight">Cooking <br /> <span className="bg-kitchen-dark text-white px-4 py-1">Accessories</span></h2>
          </div>
          <p className="text-kitchen-muted text-sm leading-relaxed max-w-xs">
            The small details that make a big difference. Hand-picked tools for the discerning chef.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((acc, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-kitchen-card aspect-square p-8 flex items-center justify-center border border-kitchen-dark/5 mb-6 overflow-hidden">
                <img src={acc.image} alt={acc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-sm font-bold mb-1">{acc.name}</h3>
              <p className="text-kitchen-muted text-xs mb-4">{acc.price}</p>
              <button className="text-[10px] uppercase tracking-widest font-bold border-b border-kitchen-dark pb-1 opacity-0 group-hover:opacity-100 transition-opacity">Add to Bag</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-kitchen-dark selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureHighlights />
        <ColorShowcase />
        <WhyWowKitchen />
        <BestSellers />
        <AccessoriesSection />
        <RecipesSection />
        <SoulSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
