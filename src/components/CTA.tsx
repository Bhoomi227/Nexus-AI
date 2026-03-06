import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-slate-950">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative overflow-hidden bg-velocity p-20 md:p-40 text-center">
          {/* Background Grid Overlay */}
          <div className="absolute inset-0 z-0 opacity-20" 
               style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center gap-3 mb-12 px-6 py-2 border-2 border-white bg-white/10 backdrop-blur-md">
                <span className="text-white uppercase tracking-[0.6em] text-[10px] font-mono font-bold">Network Expansion</span>
              </div>
              
              <h2 className="text-6xl md:text-[140px] font-display font-bold text-white leading-[0.8] tracking-tighter mb-16">
                READY TO <br />
                <span className="text-slate-950">ACCELERATE?</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-20 leading-relaxed font-light max-w-2xl mx-auto">
                Join the global network of enterprises redefining logistics with Velocity AI. 
                Deploy your first node today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button className="w-full sm:w-auto bg-slate-950 text-white px-16 py-8 font-bold text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-4 group">
                  Deploy Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto border-2 border-white text-white px-16 py-8 font-bold text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-slate-950 transition-all">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
