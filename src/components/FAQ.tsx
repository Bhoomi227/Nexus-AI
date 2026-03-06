import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the warranty on KitchPro electronics?",
    answer: "All our professional-grade electronics come with a standard 2-year international warranty. Our Pro Series items often include a lifetime warranty on core components like motors and heating elements."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping times vary by location, but typically range from 3-7 business days for express delivery."
  },
  {
    question: "Can I return a product if I'm not satisfied?",
    answer: "We offer a 30-day 'Culinary Satisfaction' guarantee. If you're not completely happy with your purchase, you can return it for a full refund, no questions asked."
  },
  {
    question: "How do I clean and maintain my Smart-Grind Pro?",
    answer: "Maintenance is simple. The burrs are self-cleaning to an extent, but we recommend a deep clean every 3 months using our specialized cleaning tablets."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-brand-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent" />
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Support Center</span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">
            COMMON <br />
            <span className="italic font-light">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-brand-200 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-serif group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full border border-brand-200 flex items-center justify-center group-hover:border-accent transition-colors">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-accent" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-brand-500 font-light leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
