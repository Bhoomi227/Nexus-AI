import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the Neural Route Optimizer handle real-time traffic?",
    answer: "Our optimizer uses a distributed neural network that processes live data from millions of nodes. It predicts congestion before it happens and reroutes assets with sub-second latency."
  },
  {
    question: "What is the deployment time for V-Core infrastructure?",
    answer: "Standard node deployment typically takes 48-72 hours. Enterprise-scale infrastructure can be fully operational within 14 business days, including hardware integration and API mapping."
  },
  {
    question: "Does Velocity support multi-modal logistics?",
    answer: "Yes. Our platform is designed for seamless orchestration across sea, air, rail, and road transport, providing a unified source of truth for your entire supply chain."
  },
  {
    question: "How secure is the data transmitted between nodes?",
    answer: "All data is encrypted using post-quantum cryptographic standards. Each V-Core node features a dedicated secure element for hardware-level key management."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-40 px-6 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 brutal-border bg-slate-900">
            <span className="w-2 h-2 bg-velocity" />
            <span className="text-velocity uppercase tracking-[0.4em] text-[10px] font-mono font-bold">Technical Support</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-white leading-[0.85]">
            SYSTEM <br />
            <span className="text-velocity">QUERY.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-slate-900 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-10 flex items-center justify-between text-left group"
              >
                <span className="text-2xl font-display font-bold text-slate-100 group-hover:text-velocity transition-colors">
                  {faq.question}
                </span>
                <div className="w-10 h-10 brutal-border flex items-center justify-center group-hover:border-velocity transition-colors">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-velocity" />
                  ) : (
                    <Plus className="w-4 h-4 text-slate-500" />
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
                    <p className="pb-10 text-slate-400 font-light leading-relaxed max-w-2xl">
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
