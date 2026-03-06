import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, Search, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12',
        isScrolled ? 'bg-white/80 backdrop-blur-2xl py-4 border-b border-brand-200' : 'bg-transparent py-8'
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-16">
          <a href="/" className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className={isScrolled ? 'text-brand-950' : 'text-white'}>KITCHPRO</span>
          </a>

          <div className={cn(
            "hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em]",
            isScrolled ? 'text-brand-950' : 'text-white/70'
          )}>
            <a href="#" className="hover:text-accent transition-colors">Appliances</a>
            <a href="#" className="hover:text-accent transition-colors">Smart Tech</a>
            <a href="#" className="hover:text-accent transition-colors">Tools</a>
            <a href="#" className="hover:text-accent transition-colors">Journal</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className={cn(
            "hidden sm:flex items-center gap-6",
            isScrolled ? 'text-brand-950' : 'text-white'
          )}>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
          
          <button 
            className={cn(
              "flex items-center gap-3 px-6 py-3 rounded-full transition-all",
              isScrolled 
                ? 'bg-brand-950 text-white hover:bg-accent' 
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
            )}
            onClick={onOpenCart}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Cart</span>
            {cartCount > 0 && (
              <span className="bg-accent text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className={cn(
              "lg:hidden p-2 rounded-full transition-colors",
              isScrolled ? 'text-brand-950 hover:bg-brand-100' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-50 lg:hidden p-8 flex flex-col gap-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6 text-lg font-serif">
                <a href="#" className="hover:text-brand-600">Appliances</a>
                <a href="#" className="hover:text-brand-600">Smart Tech</a>
                <a href="#" className="hover:text-brand-600">Tools</a>
                <a href="#" className="hover:text-brand-600">Accessories</a>
                <hr className="border-brand-100" />
                <a href="#" className="hover:text-brand-600">My Account</a>
                <a href="#" className="hover:text-brand-600">Support</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
