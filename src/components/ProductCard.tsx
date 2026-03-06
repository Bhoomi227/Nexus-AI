import React from 'react';
import { Star, Plus, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-brand-200 hover:border-brand-950 transition-all duration-500 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Category Tag */}
        <div className="absolute top-6 left-6">
          <span className="bg-brand-950 text-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">
            {product.category}
          </span>
        </div>

        {/* Quick Add Button - Appears on Hover */}
        <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/10 transition-colors duration-500 flex items-center justify-center">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-white text-brand-950 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent hover:text-white"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-serif font-medium mb-1 group-hover:underline underline-offset-4 decoration-accent">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2.5 h-2.5 ${
                      i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-brand-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-brand-400 font-bold uppercase tracking-widest">
                {product.reviews} Reviews
              </span>
            </div>
          </div>
          <span className="text-lg font-medium text-brand-950">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-brand-500 font-light leading-relaxed mb-6 line-clamp-2">
          {product.description}
        </p>

        <button 
          onClick={() => onAddToCart(product)}
          className="w-full py-4 border border-brand-200 text-brand-950 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-950 hover:text-white hover:border-brand-950 transition-all flex items-center justify-center gap-2 group/btn"
        >
          Add to Collection
          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
        </button>
      </div>
    </motion.div>
  );
};
