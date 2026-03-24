import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Velocity's neural routing reduced our global fuel consumption by 28% in the first quarter alone. It's not just software; it's a competitive advantage.",
    author: "David Chen",
    role: "VP of Operations, GlobalPort",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "The V-Core nodes provided us with sub-millisecond sorting accuracy. Our warehouse throughput has increased by 40% since deployment.",
    author: "Sarah Miller",
    role: "Director of Logistics, NexaFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Integrating the Velocity API was seamless. We now have real-time visibility across our entire multi-modal supply chain.",
    author: "James Wilson",
    role: "CTO, TransGlobal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-slate-950 border-b border-slate-900">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 brutal-border bg-slate-900">
            <span className="w-2 h-2 bg-velocity" />
            <span className="text-velocity uppercase tracking-[0.5em] text-[10px] font-mono font-bold">Global Partners</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-white leading-[0.85]">
            TRUSTED BY <br />
            <span className="text-velocity">INDUSTRY LEADERS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-900 border border-slate-900">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-16 bg-slate-950 hover:bg-slate-900 transition-colors duration-500 group"
            >
              <Quote className="w-12 h-12 text-velocity/10 absolute top-12 left-12 group-hover:text-velocity/20 transition-colors" />
              <p className="text-xl font-display font-medium leading-relaxed mb-12 relative z-10 text-slate-300">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-6">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-16 h-16 brutal-border object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-lg text-white">{t.author}</h4>
                  <p className="text-[10px] font-mono text-velocity uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
