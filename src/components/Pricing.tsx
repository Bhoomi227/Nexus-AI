import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Standard Node",
    price: "1,200",
    description: "Essential edge computing for small-scale warehouse operations.",
    features: ["Real-time Tracking", "Basic Route Optimization", "Standard API Access", "Email Support"],
    accent: false
  },
  {
    name: "Enterprise Core",
    price: "4,500",
    description: "Full-scale neural supply chain orchestration for global enterprises.",
    features: ["Predictive AI Analytics", "Dynamic Neural Rerouting", "Priority API Access", "24/7 Dedicated Support", "Custom Hardware Integration"],
    accent: true
  },
  {
    name: "Global Network",
    price: "Custom",
    description: "Bespoke infrastructure for multi-national logistics networks.",
    features: ["Multi-region Data Sync", "Private Cloud Deployment", "On-site Hardware Support", "Unlimited API Calls", "Strategic Consulting"],
    accent: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-slate-950 border-b border-slate-900">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 brutal-border bg-slate-900">
            <span className="w-2 h-2 bg-velocity" />
            <span className="text-velocity uppercase tracking-[0.5em] text-[10px] font-mono font-bold">Deployment Tiers</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-white leading-[0.85]">
            SCALE YOUR <br />
            <span className="text-velocity">OPERATIONS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-900 border border-slate-900">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-16 bg-slate-950 group hover:bg-slate-900 transition-colors duration-500 ${
                plan.accent ? 'z-10' : ''
              }`}
            >
              {plan.accent && (
                <div className="absolute top-0 left-0 w-full h-1 bg-velocity" />
              )}
              
              <div className="mb-16">
                <div className="text-[10px] font-mono text-velocity uppercase tracking-[0.4em] mb-4">Tier_0{i + 1}</div>
                <h3 className="text-3xl font-display font-bold mb-6 text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-display font-bold text-white">
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">/ node / mo</span>
                  )}
                </div>
                <p className="text-slate-500 font-light leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-6 mb-16">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-light text-slate-300">
                    <div className="w-1.5 h-1.5 bg-velocity rotate-45 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-6 font-bold text-[10px] uppercase tracking-[0.3em] transition-all border ${
                plan.accent 
                  ? 'bg-velocity border-velocity text-white hover:bg-white hover:text-slate-950' 
                  : 'bg-transparent border-slate-800 text-slate-100 hover:border-velocity hover:text-velocity'
              }`}>
                Initialize Deployment
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
