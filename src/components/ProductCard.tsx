import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Cpu, Zap, Layers } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-950 border-r border-b border-slate-900 overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-velocity/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-2 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[8px] font-mono text-velocity uppercase tracking-widest">
            {product.category}
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-0 left-0 right-0 bg-velocity text-white py-6 font-bold text-[10px] uppercase tracking-[0.3em] translate-y-full group-hover:translate-y-0 transition-transform duration-500 hover:bg-white hover:text-slate-950 flex items-center justify-center gap-3"
        >
          <ShoppingBag className="w-4 h-4" />
          Initialize Deployment
        </button>
      </div>

      <div className="p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-1.5 h-1.5 rotate-45",
                  i < Math.floor(product.rating) ? "bg-velocity" : "bg-slate-800"
                )} 
              />
            ))}
          </div>
          <span className="text-[10px] font-mono text-slate-500">REV_{product.reviews}</span>
        </div>
        
        <h3 className="text-2xl font-display font-bold group-hover:text-velocity transition-colors leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-end justify-between pt-4 border-t border-slate-900">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Unit Price</div>
          <div className="text-2xl font-display font-bold text-white">
            ${product.price.toLocaleString()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
