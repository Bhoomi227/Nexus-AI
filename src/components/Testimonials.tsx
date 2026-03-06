import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The precision of KitchPro tools has completely transformed my home cooking. It's like having a sous-chef in the kitchen.",
    author: "Elena Rodriguez",
    role: "Executive Chef, L'Avenir",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Finally, kitchen electronics that look as good as they perform. The Smart-Grind Pro is a masterpiece of design.",
    author: "Marcus Thorne",
    role: "Architect & Home Enthusiast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "I've tried every high-end brand, but KitchPro's attention to detail is unmatched. Their support team is also incredible.",
    author: "Sarah Jenkins",
    role: "Culinary Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Voices of Excellence</span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">
            TRUSTED BY <br />
            <span className="italic font-light">THE BEST</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-12 border border-brand-100 hover:border-brand-950 transition-colors group"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-8 left-8 group-hover:text-accent/40 transition-colors" />
              <p className="text-xl font-serif italic leading-relaxed mb-10 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">{t.author}</h4>
                  <p className="text-[10px] text-brand-400 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
