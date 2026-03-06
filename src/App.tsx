import React, { useState, useEffect } from 'react';
import { 
  Utensils, 
  Bed, 
  Smartphone, 
  MapPin, 
  Star, 
  ChevronRight, 
  ArrowRight, 
  Menu, 
  X, 
  Play, 
  Instagram, 
  Facebook, 
  Twitter,
  Calendar,
  Clock,
  Award,
  Coffee,
  Wine,
  Download
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

  const navLinks = [
    { name: 'The Hotel', href: '#hotel' },
    { name: 'Gastronomy', href: '#gastronomy' },
    { name: 'The App', href: '#app' },
    { name: 'Experiences', href: '#experiences' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-savor-900 rounded-lg flex items-center justify-center text-white">
            <Utensils size={24} />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">SAVOR</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold hover:text-savor-600 transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <button className="btn-primary py-3 px-6 text-sm">Book a Stay</button>
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-savor-900 text-white z-[60] p-10 flex flex-col"
          >
            <button className="self-end mb-12" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-4xl font-serif hover:italic"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button className="mt-auto w-full py-5 bg-white text-savor-900 rounded-full font-bold text-xl">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Dining" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-savor-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-savor-300/20 backdrop-blur-sm border border-savor-300/30 text-savor-300 text-xs font-bold uppercase tracking-[0.3em] mb-6">
            The Ultimate Gastro-Hotel
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Where Luxury <br /> <span className="italic font-light">Meets Flavor</span>
          </h1>
          <p className="text-xl text-savor-100/80 mb-10 leading-relaxed max-w-lg">
            Experience a new era of hospitality. A hotel designed around the plate, where every stay is a culinary journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary bg-white text-savor-900 hover:bg-savor-100">
              Explore Experiences
            </button>
            <button className="flex items-center gap-3 px-8 py-4 text-white font-bold hover:gap-5 transition-all">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                <Play size={20} fill="white" />
              </div>
              Watch the Film
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Info Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-12 hidden xl:block"
      >
        <div className="glass-card p-8 rounded-2xl max-w-xs">
          <div className="flex items-center gap-2 text-savor-600 mb-4">
            <Award size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Michelin Rated 2026</span>
          </div>
          <h3 className="text-xl font-serif mb-2">The Chef's Table</h3>
          <p className="text-sm text-savor-900/60 mb-4">A 12-course sensory journey curated by Chef Julian Vane.</p>
          <button className="text-savor-900 font-bold text-sm flex items-center gap-2">
            Reserve a Table <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const HotelSection = () => {
  const rooms = [
    {
      title: "The Vineyard Suite",
      desc: "Wake up overlooking our private organic vineyards.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Culinary Loft",
      desc: "Featuring a professional-grade kitchen and private sommelier.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="hotel" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-savor-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Stay</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Rest in the Heart of <br /> <span className="italic">Gastronomy</span></h2>
            <p className="text-lg text-savor-900/70 mb-12 leading-relaxed">
              Our rooms are more than just a place to sleep. They are sanctuaries of taste, featuring in-room fermentation labs, artisanal mini-bars, and views of our herb gardens.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-savor-100 rounded-xl flex items-center justify-center text-savor-900">
                  <Bed size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">42 Suites</h4>
                  <p className="text-xs text-savor-900/50">Bespoke design</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-savor-100 rounded-xl flex items-center justify-center text-savor-900">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Private Bar</h4>
                  <p className="text-xs text-savor-900/50">Artisanal spirits</p>
                </div>
              </div>
            </div>
            <button className="btn-primary">View All Suites</button>
          </div>

          <div className="grid gap-8">
            {rooms.map((room, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative group overflow-hidden rounded-3xl aspect-[16/9]"
              >
                <img src={room.image} alt={room.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-savor-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-serif mb-2">{room.title}</h3>
                  <p className="text-sm text-white/70">{room.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gastronomy = () => {
  const dishes = [
    { name: "Forest Foraged Tartare", price: "$32", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000" },
    { name: "Smoked Arctic Char", price: "$45", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000" },
    { name: "Truffle Infused Risotto", price: "$38", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=1000" }
  ];

  return (
    <section id="gastronomy" className="py-32 bg-savor-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-savor-300 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Cuisine</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-6">A Symphony of <span className="italic">Seasonal Flavors</span></h2>
          <p className="text-savor-100/60 max-w-2xl mx-auto text-lg">
            Our kitchen is a laboratory of taste. We work exclusively with local farmers to bring the freshest ingredients to your plate.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar">
          {dishes.map((dish, i) => (
            <motion.div 
              key={i}
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              <div className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-savor-300/20 group-hover:border-savor-300 transition-all duration-500">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-2">{dish.name}</h3>
                <p className="text-savor-300 font-bold">{dish.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <Wine className="mx-auto mb-6 text-savor-300" size={40} />
            <h4 className="text-xl font-serif mb-3">Private Cellar</h4>
            <p className="text-sm text-savor-100/50">Over 5,000 labels of rare and vintage wines.</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto mb-6 text-savor-300" size={40} />
            <h4 className="text-xl font-serif mb-3">24/7 Gastronomy</h4>
            <p className="text-sm text-savor-100/50">Gourmet dining available at any hour.</p>
          </div>
          <div className="text-center">
            <MapPin className="mx-auto mb-6 text-savor-300" size={40} />
            <h4 className="text-xl font-serif mb-3">Garden to Table</h4>
            <p className="text-sm text-savor-100/50">Ingredients harvested daily from our estate.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppSection = () => {
  return (
    <section id="app" className="py-32 bg-savor-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-sm mx-auto"
            >
              <div className="bg-savor-900 rounded-[3rem] p-4 shadow-2xl border-8 border-savor-900">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Savor App" 
                  className="rounded-[2rem] w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-savor-300/20 rounded-full -z-0 blur-3xl" />
          </div>

          <div>
            <span className="text-savor-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Technology</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Your Personal <br /> <span className="italic text-savor-600">Gastro-Concierge</span></h2>
            <p className="text-lg text-savor-900/70 mb-10 leading-relaxed">
              Order room service, book tasting sessions, and track the origin of your ingredients—all from the palm of your hand.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                { icon: <Smartphone size={20} />, title: "Instant Room Service", desc: "Order from our full menu with one tap." },
                { icon: <Calendar size={20} />, title: "Table Reservations", desc: "Real-time availability for all our dining venues." },
                { icon: <Clock size={20} />, title: "Live Prep Tracking", desc: "Watch your meal being prepared via live kitchen feed." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-savor-900 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-savor-900/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-savor-900 text-white px-6 py-3 rounded-xl hover:bg-savor-600 transition-all">
                <Download size={20} />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-60">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-savor-900 text-white px-6 py-3 rounded-xl hover:bg-savor-600 transition-all">
                <Play size={20} fill="white" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-savor-900 text-savor-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-savor-900">
                <Utensils size={18} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">SAVOR</span>
            </div>
            <p className="text-savor-100/50 max-w-xs leading-relaxed text-sm mb-8">
              A sanctuary for the senses. Luxury hospitality redefined through the lens of world-class gastronomy.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-savor-900 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white">Explore</h4>
            <ul className="space-y-4 text-sm text-savor-100/50">
              {['The Hotel', 'Dining', 'Wellness', 'Events'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white">The App</h4>
            <ul className="space-y-4 text-sm text-savor-100/50">
              {['Features', 'Download', 'Support', 'Privacy'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-savor-100/50">
              {['Reservations', 'General Inquiries', 'Press', 'Careers'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white">Location</h4>
            <p className="text-sm text-savor-100/50 leading-relaxed">
              124 Gastronomy Way,<br />
              Napa Valley, CA 94558
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-savor-100/30">
            © 2026 SAVOR Gastro-Hotel. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-savor-100/30">
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
    <div className="min-h-screen selection:bg-savor-300 selection:text-savor-900">
      <Navbar />
      <main>
        <Hero />
        <HotelSection />
        <Gastronomy />
        <AppSection />
      </main>
      <Footer />
    </div>
  );
}
