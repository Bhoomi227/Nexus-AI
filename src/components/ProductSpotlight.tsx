import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Zap, ShieldCheck } from 'lucide-react';

export const ProductSpotlight: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-brand-50 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=1200"
                alt="Smart-Grind Pro Detail"
                className="w-full h-full object-cover aspect-square lg:aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-950/5 rounded-full blur-3xl" />
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Flagship Release</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight tracking-tighter mb-8">
                SMART-GRIND <br />
                <span className="italic font-light">PRO SERIES</span>
              </h2>
              <p className="text-lg text-brand-500 font-light leading-relaxed max-w-lg">
                Experience the pinnacle of coffee engineering. Our patented AI-Grind technology analyzes bean density in real-time to deliver the perfect extraction, every single time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-200 flex items-center justify-center shrink-0 shadow-sm">
                  <Cpu className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">AI Calibration</h4>
                  <p className="text-xs text-brand-400 leading-relaxed">Automatic adjustment based on roast profile and humidity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-200 flex items-center justify-center shrink-0 shadow-sm">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Ultra-Quiet</h4>
                  <p className="text-xs text-brand-400 leading-relaxed">Silent-Drive™ motor technology for a peaceful morning ritual.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-200 flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Lifetime Burrs</h4>
                  <p className="text-xs text-brand-400 leading-relaxed">Titanium-coated ceramic burrs guaranteed for 10,000 grinds.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="bg-brand-950 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-accent transition-all group">
                Pre-order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
