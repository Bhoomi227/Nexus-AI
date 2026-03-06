import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-brand-950">
      {/* Left Content Pane */}
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-20 py-32 lg:py-0 bg-brand-950 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">
              Est. 2024 • Premium Tech
            </span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] mb-10 tracking-tighter">
            KITCHEN <br />
            <span className="italic font-light text-brand-300">FUTURE</span>
          </h1>
          
          <p className="text-lg text-brand-400 mb-12 leading-relaxed max-w-md font-light">
            Redefining the culinary landscape with professional-grade electronics that blend seamless design with unmatched precision.
          </p>
          
          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-accent text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-accent/20 group">
              Explore Shop
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">Watch Film</span>
            </button>
          </div>
        </motion.div>

        {/* Vertical Rail Text */}
        <div className="absolute left-6 bottom-12 hidden lg:block">
          <div className="flex items-center gap-4 -rotate-90 origin-left translate-y-full">
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-600 font-bold whitespace-nowrap">
              Scroll to discover
            </span>
            <div className="w-20 h-px bg-brand-800" />
          </div>
        </div>
      </div>

      {/* Right Image Pane */}
      <div className="relative h-[50vh] lg:h-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Kitchen"
            className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-950/20 mix-blend-multiply" />
          
          {/* Floating Feature Tag */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl max-w-xs hidden md:block"
          >
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">New Release</span>
            <h3 className="text-white text-xl font-serif mb-3">Smart-Grind Pro</h3>
            <p className="text-brand-300 text-sm font-light leading-relaxed">
              The world's first AI-powered coffee grinder with micron-level precision.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
