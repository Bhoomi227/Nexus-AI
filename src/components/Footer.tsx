import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MapPin, Phone, Mail, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-40 pb-12 px-6 border-t border-slate-900">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-40">
          <div className="space-y-10">
            <a href="/" className="text-3xl font-display font-bold tracking-tighter flex items-center gap-3 group">
              <div className="w-10 h-10 bg-velocity flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                <div className="w-4 h-4 bg-white" />
              </div>
              <span className="text-white tracking-[0.2em]">VELOCITY</span>
            </a>
            <p className="text-slate-500 font-light leading-relaxed max-w-xs">
              Autonomous supply chain orchestration for the global enterprise. 
              Neural networks at the edge of commerce.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-velocity transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-velocity transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-velocity transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-velocity mb-12">Infrastructure</h3>
            <ul className="space-y-6 text-sm font-light text-slate-500">
              <li><a href="#" className="hover:text-velocity transition-colors">V-Core Nodes</a></li>
              <li><a href="#" className="hover:text-velocity transition-colors">Neural Rerouting</a></li>
              <li><a href="#" className="hover:text-velocity transition-colors">Edge Computing</a></li>
              <li><a href="#" className="hover:text-velocity transition-colors">Global Mesh</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-velocity mb-12">Resources</h3>
            <ul className="space-y-6 text-sm font-light text-slate-500">
              <li><a href="#" className="hover:text-velocity transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-velocity transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-velocity transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-velocity transition-colors">Security Whitepaper</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-velocity mb-12">Contact</h3>
            <ul className="space-y-8 text-sm font-light text-slate-500">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-velocity shrink-0" />
                <span className="leading-relaxed">One Infinite Loop, <br />Tech District, SF 94105</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-velocity shrink-0" />
                <span>+1 (800) VELOCITY</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-velocity shrink-0" />
                <span>ops@velocity.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© 2024 VELOCITY AI LOGISTICS. ALL SYSTEMS OPERATIONAL.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Data Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
