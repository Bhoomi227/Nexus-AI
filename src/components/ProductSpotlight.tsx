import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProductSpotlight: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-slate-950 text-white overflow-hidden relative border-b border-slate-900">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(45deg, #FF4F00 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 brutal-border bg-slate-900">
                <span className="w-2 h-2 bg-velocity" />
                <span className="text-velocity uppercase tracking-[0.5em] text-[10px] font-mono font-bold">Hardware Spotlight</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-10">
                V-CORE <br />
                <span className="text-velocity">NODE 01</span>
              </h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                The world's most powerful edge computing unit for logistics. 
                Equipped with custom neural processing units (NPUs), it handles 
                millions of routing decisions per second directly at the warehouse edge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 brutal-border bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-velocity transition-colors">
                  <Cpu className="w-8 h-8 text-velocity group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-mono font-bold text-xs uppercase tracking-widest mb-3">Neural Engine</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Dedicated NPU for real-time pathfinding and inventory prediction.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 brutal-border bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-velocity transition-colors">
                  <Zap className="w-8 h-8 text-velocity group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-mono font-bold text-xs uppercase tracking-widest mb-3">Zero Latency</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Sub-millisecond response times for autonomous sorting systems.</p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button className="bg-velocity text-white px-12 py-6 font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-slate-950 transition-all group shadow-2xl shadow-velocity/20">
                Request Technical Specs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-10 brutal-border overflow-hidden bg-slate-900 aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200"
                alt="V-Core Node"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12">
                <div className="text-4xl font-display font-bold text-white mb-2">REV_04</div>
                <div className="text-[10px] font-mono text-velocity uppercase tracking-[0.4em]">Production Ready</div>
              </div>
            </motion.div>
            
            {/* Technical HUD Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 brutal-border bg-slate-950/80 backdrop-blur-xl p-4 hidden xl:block">
              <div className="text-[8px] font-mono text-slate-500 mb-2">THERMAL_LOAD</div>
              <div className="h-1 w-full bg-slate-800 mb-4">
                <div className="h-full bg-velocity w-[45%]" />
              </div>
              <div className="text-xl font-mono font-bold">42°C</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
