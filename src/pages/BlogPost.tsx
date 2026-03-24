import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, MessageSquare } from 'lucide-react';
import { Button } from '../components/Button';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-12 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <article>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase">
                Design
              </span>
              <span className="text-slate-400 text-sm flex items-center gap-1">
                <Calendar size={14} /> Mar 15, 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              The Future of Web Design in 2024: Trends and Predictions
            </h1>
            <div className="flex items-center gap-4 py-8 border-y border-slate-100">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Johnson" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Sarah Johnson</div>
                <div className="text-sm text-slate-500">Senior Product Designer</div>
              </div>
              <div className="ml-auto flex gap-2">
                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Share2 size={20} /></button>
                <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><MessageSquare size={20} /></button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-12 shadow-xl">
            <img 
              src="https://picsum.photos/seed/design/1200/700" 
              alt="Featured Image" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              As we move further into 2024, the landscape of web design continues to evolve at a breakneck pace. 
              From the integration of artificial intelligence to the resurgence of brutalist aesthetics, 
              the digital experiences we create are becoming more immersive, personal, and efficient.
            </p>
            <h2 className="text-3xl font-bold mb-6 mt-12">1. AI-Driven Personalization</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Artificial intelligence is no longer just a buzzword; it's a fundamental tool in the designer's toolkit. 
              In 2024, we're seeing websites that adapt in real-time to user behavior, preferences, and context. 
              This level of personalization goes beyond simple recommendations, affecting layout, color schemes, 
              and even the tone of the copy.
            </p>
            <blockquote className="border-l-4 border-indigo-600 pl-6 my-10 italic text-2xl text-slate-800 font-serif">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <h2 className="text-3xl font-bold mb-6 mt-12">2. The Return of Tactile Design</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              After years of flat design dominance, we're seeing a return to elements that feel tactile and physical. 
              Subtle shadows, glassmorphism, and organic textures are being used to create depth and hierarchy, 
              making digital interfaces feel more human and approachable.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              This trend is partly a response to the increasing time we spend in digital environments. 
              By incorporating elements that mimic the physical world, designers can create experiences 
              that feel more grounded and less fatiguing.
            </p>
          </div>

          <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-slate-600 mb-8">Subscribe to our newsletter to get the latest insights delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
