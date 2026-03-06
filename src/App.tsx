import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ArrowRight, 
  Heart, 
  Star, 
  BookOpen, 
  Bookmark,
  Instagram,
  Twitter,
  Facebook,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Mock Data ---

const CATEGORIES = [
  "Fiction", "Non-Fiction", "Art & Design", "Poetry", "Philosophy", "Rare Editions"
];

const BOOKS = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: "$24.00",
    rating: 4.8,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    isNew: true
  },
  {
    id: 2,
    title: "A Little Life",
    author: "Hanya Yanagihara",
    price: "$28.50",
    rating: 4.9,
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    isNew: false
  },
  {
    id: 3,
    title: "The Art of War",
    author: "Sun Tzu",
    price: "$18.00",
    rating: 4.7,
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    isNew: false
  },
  {
    id: 4,
    title: "Modern Architecture",
    author: "Kenneth Frampton",
    price: "$45.00",
    rating: 4.6,
    category: "Art & Design",
    image: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?auto=format&fit=crop&q=80&w=800",
    isNew: true
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-folio-paper/90 backdrop-blur-md py-4 border-b border-folio-border' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="/" className="text-3xl font-serif font-bold tracking-tighter">FOLIO</a>
          <div className="hidden lg:flex items-center gap-8">
            {['Shop', 'Collections', 'Journal', 'About'].map((item) => (
              <a key={item} href="#" className="text-xs uppercase tracking-widest font-semibold hover:text-folio-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-folio-border/30 rounded-sm border border-folio-border/50">
            <Search size={16} className="text-folio-muted" />
            <input 
              type="text" 
              placeholder="Search titles, authors..." 
              className="bg-transparent border-none outline-none text-xs w-48 placeholder:text-folio-muted"
            />
          </div>
          <button className="hover:text-folio-gold transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-folio-gold transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-folio-ink text-white text-[10px] flex items-center justify-center rounded-full">2</span>
          </button>
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-folio-paper z-[60] p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif font-bold tracking-tighter">FOLIO</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <div className="space-y-8">
              {['Shop All', 'Collections', 'Journal', 'Rare Editions', 'About Us'].map((item) => (
                <a key={item} href="#" className="block text-4xl font-serif hover:italic transition-all">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-folio-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Featured Collection
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[0.9]">
            The Art of <br /> <span className="italic font-light">Storytelling</span>
          </h1>
          <p className="text-lg text-folio-muted mb-10 leading-relaxed max-w-lg">
            Curated masterpieces from the world's most profound thinkers and dreamers. Discover your next journey within our digital shelves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-ink">Explore Shop</button>
            <button className="btn-outline">View Collections</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] relative z-10 overflow-hidden rounded-sm book-card-shadow">
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200" 
              alt="Featured Book" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-folio-ink/40 to-transparent" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-folio-gold/10 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-folio-gold/5 rounded-full blur-3xl -z-0" />
        </motion.div>
      </div>
    </section>
  );
};

const CategoryBar = () => {
  return (
    <div className="border-y border-folio-border py-6 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-12 whitespace-nowrap">
        {CATEGORIES.map((cat) => (
          <a key={cat} href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-folio-muted hover:text-folio-ink transition-colors">
            {cat}
          </a>
        ))}
      </div>
    </div>
  );
};

const BookGrid = ({ title, subtitle }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-folio-gold mb-4">{subtitle}</p>
            <h2 className="text-4xl md:text-5xl font-serif">{title}</h2>
          </div>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-folio-ink pb-1 hover:gap-4 transition-all">
            View All <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {BOOKS.map((book) => (
            <motion.div 
              key={book.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm book-card-shadow">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {book.isNew && (
                  <span className="absolute top-4 left-4 bg-folio-paper px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-folio-border">
                    New
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white">
                  <Heart size={16} strokeWidth={1.5} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-folio-ink text-white text-[10px] uppercase tracking-widest font-bold">
                    Add to Bag
                  </button>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-folio-muted mb-2">{book.category}</p>
              <h3 className="text-xl font-serif mb-1 group-hover:text-folio-gold transition-colors">{book.title}</h3>
              <p className="text-sm text-folio-muted mb-3">{book.author}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">{book.price}</span>
                <div className="flex items-center gap-1">
                  <Star size={12} fill="currentColor" className="text-folio-gold" />
                  <span className="text-xs font-medium">{book.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CuratedSection = () => {
  return (
    <section className="py-24 bg-folio-ink text-folio-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800" 
              className="aspect-[3/4] object-cover rounded-sm rotate-[-3deg]"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800" 
              className="aspect-[3/4] object-cover rounded-sm rotate-[3deg] mt-12"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div>
          <span className="text-folio-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 block">The Classics</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Timeless Works for the <br /> <span className="italic">Modern Mind</span></h2>
          <p className="text-folio-paper/60 text-lg mb-12 leading-relaxed">
            Rediscover the foundations of literature. Our curated collection of classics features exclusive cover designs and high-quality paper for a superior reading experience.
          </p>
          <div className="space-y-8 mb-12">
            {[
              { icon: <BookOpen size={20} />, title: "Premium Bindings", desc: "Hand-stitched leather and linen covers." },
              { icon: <Bookmark size={20} />, title: "Rare Editions", desc: "Limited print runs for the serious collector." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-folio-gold">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">{item.title}</h4>
                  <p className="text-sm text-folio-paper/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="px-10 py-4 bg-folio-paper text-folio-ink font-bold uppercase tracking-widest text-xs hover:bg-folio-gold hover:text-white transition-all">
            Shop The Collection
          </button>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-32 px-6 text-center paper-texture border-y border-folio-border">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">The Reader's Circle</h2>
        <p className="text-folio-muted mb-12 leading-relaxed">
          Join our community of bibliophiles. Receive monthly reading lists, author interviews, and early access to rare editions.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-grow bg-white border border-folio-border px-8 py-4 text-sm focus:outline-none focus:border-folio-ink transition-all"
          />
          <button className="btn-ink whitespace-nowrap">
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-folio-paper pt-24 pb-12 px-6 border-t border-folio-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 mb-24">
          <div className="col-span-2">
            <a href="/" className="text-3xl font-serif font-bold tracking-tighter mb-8 block">FOLIO</a>
            <p className="text-folio-muted max-w-xs leading-relaxed text-sm mb-8">
              A curated sanctuary for readers. Discover timeless classics and modern masterpieces in our beautifully crafted library.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-folio-border flex items-center justify-center hover:bg-folio-ink hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-folio-muted">
              {['All Books', 'New Arrivals', 'Bestsellers', 'Rare Editions'].map(item => (
                <li key={item}><a href="#" className="hover:text-folio-ink transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Collections</h4>
            <ul className="space-y-4 text-sm text-folio-muted">
              {['The Classics', 'Modern Art', 'Philosophy', 'Poetry'].map(item => (
                <li key={item}><a href="#" className="hover:text-folio-ink transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-folio-muted">
              {['Shipping', 'Returns', 'Gift Cards', 'Contact'].map(item => (
                <li key={item}><a href="#" className="hover:text-folio-ink transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Visit</h4>
            <p className="text-sm text-folio-muted leading-relaxed">
              42 Library Lane,<br />
              Oxford, OX1 2JD<br />
              United Kingdom
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-folio-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-folio-muted">
            © 2026 FOLIO Book Shop. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-folio-muted">
            <a href="#" className="hover:text-folio-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-folio-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-folio-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CategoryBar />
        <BookGrid title="New Arrivals" subtitle="Freshly Printed" />
        <CuratedSection />
        <BookGrid title="Bestsellers" subtitle="Most Loved" />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
