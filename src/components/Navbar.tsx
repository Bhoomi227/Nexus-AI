import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Lumina</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-indigo-600',
                location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-medium py-2',
                location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};
