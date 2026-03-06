import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white pt-32 pb-12 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-8">
            <a href="/" className="text-3xl font-serif font-bold tracking-tighter flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
              </div>
              <span>KITCHPRO</span>
            </a>
            <p className="text-brand-400 font-light leading-relaxed max-w-xs">
              Pioneering the next generation of culinary technology. Designed for the modern home, engineered for professional precision.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-brand-500 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-500 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-500 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-600 mb-10">Shop</h3>
            <ul className="space-y-6 text-sm font-light text-brand-300">
              <li><a href="#" className="hover:text-accent transition-colors">All Appliances</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Smart Technology</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Precision Tools</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-600 mb-10">Company</h3>
            <ul className="space-y-6 text-sm font-light text-brand-300">
              <li><a href="#" className="hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-600 mb-10">Contact</h3>
            <ul className="space-y-6 text-sm font-light text-brand-300">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="leading-relaxed">123 Innovation Way, <br />Tech District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@kitchpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">
          <p>© 2024 KITCHPRO ELECTRONICS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
