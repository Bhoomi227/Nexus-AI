import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-indigo-600 fill-indigo-600" />
              <span className="text-xl font-bold tracking-tight">Lumina</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering modern businesses with cutting-edge digital solutions and premium design templates.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/services" className="hover:text-indigo-600">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-600">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-600">Resources</Link></li>
              <li><a href="#" className="hover:text-indigo-600">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-indigo-600">About Us</Link></li>
              <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
              <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
              <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Subscribe to get the latest updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {currentYear} Lumina Template. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600">Terms</a>
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
