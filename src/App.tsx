import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  Pause, 
  Volume2, 
  Bluetooth, 
  Battery, 
  Droplets, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  ChevronRight,
  Plus,
  Zap,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Speakers', href: '#speakers' },
    { name: 'Technology', href: '#tech' },
    { name: 'Experience', href: '#experience' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sonic-accent rounded-full flex items-center justify-center">
            <Volume2 size={18} className="text-sonic-black" />
          </div>
          <a href="/" className="text-2xl font-display font-bold tracking-tighter">SONIC</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.2em] font-black hover:text-sonic-accent transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-6 ml-6 border-l border-white/10 pl-10">
            <button className="hover:text-sonic-accent transition-colors">
              <Search size={20} />
            </button>
            <button className="hover:text-sonic-accent transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-sonic-accent text-sonic-black text-[10px] font-black flex items-center justify-center rounded-full">2</span>
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-sonic-black text-sonic-white z-[60] p-12 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-display font-bold tracking-tighter">SONIC</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-5xl font-display font-bold hover:text-sonic-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex gap-8">
              <Instagram size={24} />
              <Twitter size={24} />
              <Youtube size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sonic-accent/10 rounded-full blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="glow-dot" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-sonic-accent">New Release: Titan X</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-display font-bold mb-10 leading-[0.85] tracking-tighter">
            UNLEASH <br /> <span className="text-sonic-accent text-glow">PURE</span> <br /> SOUND
          </h1>
          <p className="text-lg text-sonic-muted mb-12 leading-relaxed max-w-md">
            The ultimate portable powerhouse. 360° immersive audio, 24-hour battery life, and military-grade durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-sonic">Shop Titan X</button>
            <button className="btn-sonic-outline">Watch Demo</button>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1, scale }}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=1000" 
            alt="Titan X Speaker" 
            className="w-full h-auto drop-shadow-[0_0_50px_rgba(0,255,102,0.2)]"
            referrerPolicy="no-referrer"
          />
          {/* Floating Specs */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 bg-sonic-gray/80 backdrop-blur-md p-6 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 text-sonic-accent mb-2">
              <Zap size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">120W Peak</span>
            </div>
            <p className="text-[10px] text-white/50 uppercase tracking-widest">Unrivaled Power</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-1/2 bg-sonic-accent"
          />
        </div>
      </div>
    </section>
  );
};

const ProductGrid = () => {
  const products = [
    {
      name: "Sonic Mini",
      price: "$129",
      tag: "Ultra Portable",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=1000",
      color: "Cyan"
    },
    {
      name: "Pulse Party",
      price: "$299",
      tag: "RGB Lighting",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000",
      color: "Black"
    },
    {
      name: "Outdoor Pro",
      price: "$199",
      tag: "IPX7 Waterproof",
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=1000",
      color: "Sand"
    },
    {
      name: "Studio Go",
      price: "$249",
      tag: "Hi-Res Audio",
      image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&q=80&w=1000",
      color: "Silver"
    }
  ];

  return (
    <section id="speakers" className="py-32 bg-sonic-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-sonic-accent font-bold mb-4">The Lineup</p>
            <h2 className="text-5xl md:text-6xl font-display font-bold">CHOOSE YOUR <br /> VIBE</h2>
          </div>
          <button className="hidden md:flex items-center gap-3 text-xs font-black uppercase tracking-widest border-b-2 border-sonic-accent pb-2 hover:gap-6 transition-all">
            View All Series <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="product-card group cursor-pointer"
            >
              <div className="aspect-square relative mb-8 overflow-hidden rounded-2xl bg-black/20">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-sonic-accent text-sonic-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {product.tag}
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2 group-hover:text-sonic-accent transition-colors">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-black">{product.price}</span>
                <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sonic-accent hover:text-sonic-black transition-all">
                  <Plus size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechSection = () => {
  const specs = [
    { icon: <Bluetooth size={32} />, title: "Bluetooth 5.3", desc: "Ultra-stable connection up to 100ft range." },
    { icon: <Battery size={32} />, title: "24H Battery", desc: "Power that lasts through the longest adventures." },
    { icon: <Droplets size={32} />, title: "IPX7 Rated", desc: "Fully waterproof. It even floats in water." },
    { icon: <ShieldCheck size={32} />, title: "Rugged Build", desc: "Drop-proof casing for extreme conditions." }
  ];

  return (
    <section id="tech" className="py-32 bg-sonic-gray relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-display font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        TECHNOLOGY TECHNOLOGY TECHNOLOGY
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-sonic-accent font-bold mb-8">Engineered for Excellence</p>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-12">BUILT TO <br /> <span className="text-sonic-accent">ENDURE</span></h2>
            <div className="grid sm:grid-cols-2 gap-12">
              {specs.map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-sonic-accent mb-6">{spec.icon}</div>
                  <h4 className="text-xl font-display font-bold mb-3">{spec.title}</h4>
                  <p className="text-sm text-sonic-muted leading-relaxed">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-sonic-accent/5 rounded-full flex items-center justify-center border border-sonic-accent/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech Detail" 
                className="w-2/3 h-auto drop-shadow-[0_0_30px_rgba(0,255,102,0.3)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=2070" 
          alt="Atmospheric Sound" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sonic-black via-transparent to-sonic-black" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-9xl font-display font-bold mb-12 tracking-tighter">FEEL THE <br /> <span className="text-sonic-accent text-glow">RHYTHM</span></h2>
          <button className="w-24 h-24 bg-sonic-accent rounded-full flex items-center justify-center text-sonic-black hover:scale-110 transition-transform shadow-[0_0_40px_rgba(0,255,102,0.5)]">
            <Play size={32} fill="currentColor" />
          </button>
          <p className="mt-12 text-xs uppercase tracking-[0.5em] font-black">Experience Sonic 3D Audio</p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="support" className="bg-sonic-black pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-sonic-accent rounded-full flex items-center justify-center">
                <Volume2 size={18} className="text-sonic-black" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">SONIC</span>
            </div>
            <p className="text-sonic-muted max-w-xs leading-relaxed text-sm mb-10">
              Pushing the boundaries of portable audio. Designed for those who live life out loud.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-sonic-gray flex items-center justify-center hover:bg-sonic-accent hover:text-sonic-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-black mb-8 text-sonic-accent">Shop</h4>
            <ul className="space-y-4 text-sm text-sonic-muted">
              {['All Speakers', 'New Arrivals', 'Best Sellers', 'Accessories'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-black mb-8 text-sonic-accent">Technology</h4>
            <ul className="space-y-4 text-sm text-sonic-muted">
              {['Sonic 3D', 'Titan Series', 'Sustainability', 'App Control'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-black mb-8 text-sonic-accent">Support</h4>
            <ul className="space-y-4 text-sm text-sonic-muted">
              {['Help Center', 'Shipping', 'Returns', 'Warranty'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-black mb-8 text-sonic-accent">Contact</h4>
            <p className="text-sm text-sonic-muted leading-relaxed">
              100 Sound Ave,<br />
              San Francisco, CA<br />
              hello@sonic.audio
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-sonic-muted font-bold">
            © 2026 SONIC Audio. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-sonic-muted font-bold">
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
    <div className="min-h-screen selection:bg-sonic-accent selection:text-sonic-black">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <TechSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
