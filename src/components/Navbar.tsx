import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className={cn(
        "max-w-[1600px] mx-auto transition-all duration-500 flex items-center justify-between px-8 py-4 border",
        isScrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        <div className="flex items-center gap-16">
          <a href="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-3 group">
            <div className="w-10 h-10 bg-velocity flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
              <div className="w-4 h-4 bg-white" />
            </div>
            <span className="text-white tracking-[0.2em]">VELOCITY</span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Infrastructure', 'Software', 'Hardware', 'Network'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-velocity transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden md:block text-slate-400 hover:text-velocity transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenCart}
            className="relative p-2 text-slate-100 hover:text-velocity transition-colors group"
          >
            <ShoppingCart className="w-6 h-6" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-velocity text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-lg"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            className="lg:hidden text-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="absolute top-full left-6 right-6 mt-4 bg-slate-900 border border-slate-800 p-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-8">
              {['Infrastructure', 'Software', 'Hardware', 'Network'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-display font-bold text-slate-100 hover:text-velocity transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
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
