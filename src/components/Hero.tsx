import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="relative z-10 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 brutal-border bg-slate-900 mb-12">
              <span className="w-2 h-2 bg-velocity animate-ping" />
              <span className="text-velocity font-mono text-[10px] font-bold uppercase tracking-[0.4em]">
                System Status: Active // Global Node 01
              </span>
            </div>
            
            <h1 className="text-8xl md:text-[160px] font-display font-bold leading-[0.8] mb-12 tracking-tighter text-white">
              VELOCITY <br />
              <span className="text-velocity">LOGISTICS.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-xl font-light">
              Autonomous supply chain orchestration powered by neural networks. 
              We don't just move goods; we optimize global commerce in real-time.
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              <button className="bg-velocity text-white px-12 py-6 font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-slate-950 transition-all group shadow-2xl shadow-velocity/20">
                Deploy Infrastructure
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-4 text-slate-100 hover:text-velocity transition-colors group">
                <div className="w-14 h-14 brutal-border flex items-center justify-center group-hover:border-velocity transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">View Documentation</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 brutal-border overflow-hidden aspect-square bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
                alt="AI Logistics"
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Technical Overlays */}
              <div className="absolute top-8 left-8 p-4 bg-slate-950/80 backdrop-blur-md border border-velocity/30">
                <div className="text-[8px] font-mono text-velocity mb-1">DATA_STREAM_01</div>
                <div className="text-xs font-bold font-mono">LATENCY: 0.04ms</div>
              </div>
              <div className="absolute bottom-8 right-8 p-4 bg-slate-950/80 backdrop-blur-md border border-velocity/30">
                <div className="text-[8px] font-mono text-velocity mb-1">NODE_COORDINATES</div>
                <div className="text-xs font-bold font-mono">37.7749° N, 122.4194° W</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-velocity/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-800/20 rounded-full blur-[120px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Star } from 'lucide-react';
