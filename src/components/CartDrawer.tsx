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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-50 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-bottom border-brand-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-brand-600" />
                <h2 className="text-2xl font-serif font-bold">Your Cart</h2>
                <span className="bg-brand-100 text-brand-600 text-xs font-bold px-2 py-1 rounded-full">
                  {items.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-brand-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-brand-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Cart is empty</h3>
                    <p className="text-brand-500 text-sm">Looks like you haven't added anything yet.</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-brand-950 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-800 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-brand-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif font-bold text-lg leading-tight">{item.name}</h4>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-brand-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-brand-500 text-xs mt-1 uppercase tracking-widest">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-brand-200 rounded-full px-2 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-brand-600 disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-brand-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-brand-950">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-brand-200 space-y-4">
                <div className="flex justify-between items-center text-sm text-brand-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-brand-950">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-brand-500">
                  <span>Shipping</span>
                  <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px]">Calculated at checkout</span>
                </div>
                <div className="pt-4 border-t border-brand-100 flex justify-between items-center">
                  <span className="text-lg font-serif font-bold">Total</span>
                  <span className="text-2xl font-bold text-brand-950">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-brand-950 text-white py-4 rounded-full font-bold text-lg hover:bg-brand-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                  Checkout Now
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
