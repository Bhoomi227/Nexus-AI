import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-slate-950 z-[70] shadow-2xl flex flex-col border-l border-slate-800"
          >
            <div className="p-8 border-b border-slate-800 flex items-center justify-between bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-velocity flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-white uppercase tracking-wider">Deployment Queue</h2>
                  <p className="text-[10px] font-mono text-velocity uppercase tracking-widest mt-1">
                    {items.length} Active Modules
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-800 text-slate-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 brutal-border bg-slate-900 flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">Queue is Empty</h3>
                    <p className="text-slate-500 text-sm font-light">No modules selected for deployment.</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-velocity text-white px-10 py-4 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-colors"
                  >
                    Browse Infrastructure
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-24 brutal-border overflow-hidden flex-shrink-0 bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-display font-bold text-lg text-white leading-tight">{item.name}</h4>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-slate-600 hover:text-velocity transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-velocity text-[8px] font-mono mt-2 uppercase tracking-[0.2em]">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center brutal-border bg-slate-900 px-3 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 text-slate-400 hover:text-velocity disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-10 text-center text-xs font-mono font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 text-slate-400 hover:text-velocity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-mono font-bold text-white">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-slate-900 border-t border-slate-800 space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span className="font-bold text-white">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span>Deployment Fee</span>
                    <span className="text-velocity font-bold">Calculated at checkout</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xl font-display font-bold text-white uppercase tracking-wider">Total Est.</span>
                  <span className="text-3xl font-display font-bold text-white">${subtotal.toLocaleString()}</span>
                </div>
                <button className="w-full bg-velocity text-white py-6 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-slate-950 transition-all shadow-lg active:scale-[0.98]">
                  Confirm Deployment
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
