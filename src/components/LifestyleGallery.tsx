import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600"
];

export const LifestyleGallery: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-slate-950 overflow-hidden border-b border-slate-900">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 brutal-border bg-slate-900">
              <span className="w-2 h-2 bg-velocity" />
              <span className="text-velocity uppercase tracking-[0.4em] text-[10px] font-mono font-bold">Global Network</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-white leading-[0.85]">
              AUTONOMOUS <br />
              <span className="text-velocity">INFRASTRUCTURE.</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-3 text-slate-100 font-bold text-[10px] uppercase tracking-[0.3em] hover:text-velocity transition-colors group"
          >
            <Instagram className="w-5 h-5" />
            Follow @VelocityAI
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-900 border border-slate-900">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group cursor-pointer bg-slate-950"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-velocity/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 brutal-border bg-slate-950 flex items-center justify-center">
                  <Instagram className="text-white w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
