import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Wand2, 
  Sparkles, 
  Video, 
  Zap, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel rounded-none border-x-0 border-t-0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
              <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Lumina</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-text-muted hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-sm text-text-muted hover:text-white transition-colors">Showcase</a>
            <a href="#pricing" className="text-sm text-text-muted hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-text-muted hover:text-white transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-muted hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-x-0 border-b-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-text-muted hover:text-white">Features</a>
            <a href="#showcase" className="block px-3 py-2 text-base font-medium text-text-muted hover:text-white">Showcase</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-text-muted hover:text-white">Pricing</a>
            <div className="mt-4 flex flex-col gap-2 px-3">
              <button className="w-full px-4 py-2 text-sm font-medium border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                Log in
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 border-accent-primary/30"
        >
          <Sparkles className="w-4 h-4 text-accent-primary" />
          <span className="text-sm font-medium text-accent-primary">Lumina AI 2.0 is now live</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          Turn text into <br className="hidden md:block" />
          <span className="text-gradient">stunning videos</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10"
        >
          The most advanced AI video generator for creators and marketing teams. 
          Type your prompt and watch cinematic visuals come to life in seconds.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-panel p-2 flex flex-col sm:flex-row gap-2 glow-effect">
            <div className="relative flex-grow">
              <Wand2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input 
                type="text" 
                placeholder="A cinematic shot of a neon city in the rain, 4k resolution..." 
                className="w-full bg-transparent border-none text-white placeholder-text-muted focus:ring-0 py-4 pl-12 pr-4 outline-none"
              />
            </div>
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
              Generate Video
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-text-muted mt-4">No credit card required. Free 14-day trial.</p>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6 text-accent-primary" />,
      title: "Text to Cinematic Video",
      description: "Our proprietary diffusion model understands complex prompts to generate photorealistic, 4K video clips."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent-secondary" />,
      title: "Real-time Rendering",
      description: "Stop waiting hours for renders. Lumina generates 10-second clips in under 30 seconds."
    },
    {
      icon: <Layers className="w-6 h-6 text-accent-tertiary" />,
      title: "Multi-style Control",
      description: "Switch between cinematic, anime, 3D render, and illustrative styles with a single click."
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Limitless creativity, <br />zero technical skills.</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Everything you need to scale your video production without scaling your budget.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  const videos = [
    { url: "https://picsum.photos/seed/cyberpunk/800/600", title: "Cyberpunk Cityscape" },
    { url: "https://picsum.photos/seed/nature/800/600", title: "Macro Nature" },
    { url: "https://picsum.photos/seed/space/800/600", title: "Deep Space Nebula" },
    { url: "https://picsum.photos/seed/abstract/800/600", title: "Abstract Fluid Dynamics" }
  ];

  return (
    <section id="showcase" className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Made with Lumina</h2>
            <p className="text-text-muted text-lg max-w-xl">Explore what our community is creating. All videos generated entirely from text prompts.</p>
          </div>
          <button className="px-6 py-3 glass-panel hover:bg-white/10 transition-colors flex items-center gap-2">
            View Gallery <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-base-surface cursor-pointer"
            >
              <img 
                src={video.url} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                </div>
                <p className="text-sm font-medium text-accent-tertiary mb-1">Prompt</p>
                <p className="text-white font-medium">"{video.title}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Start for free, upgrade when you need more power.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <div className="glass-panel p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Creator</h3>
            <p className="text-text-muted mb-6">Perfect for individuals and hobbyists.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$19</span>
              <span className="text-text-muted">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['100 video generations/mo', '720p resolution', 'Standard rendering speed', 'Community support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 glass-panel hover:bg-white/10 transition-colors font-medium">
              Start Free Trial
            </button>
          </div>

          {/* Pro Plan */}
          <div className="glass-panel p-8 flex flex-col relative overflow-hidden border-accent-primary/50 glow-effect">
            <div className="absolute top-0 right-0 bg-accent-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-text-muted mb-6">For professionals and marketing teams.</p>
            <div className="mb-8">
              <span className="text-5xl font-bold">$49</span>
              <span className="text-text-muted">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {['Unlimited video generations', '4K resolution', 'Priority rendering speed', 'Commercial rights', 'API access'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-secondary" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-white text-black hover:bg-gray-200 transition-colors font-medium rounded-xl">
              Get Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/50 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <Play className="w-3 h-3 text-white ml-0.5" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">Lumina</span>
            </div>
            <p className="text-text-muted max-w-sm">
              Empowering creators to tell their stories through the magic of AI video generation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© 2026 Lumina AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-base-bg text-text-main font-sans selection:bg-accent-primary selection:text-white relative">
      {/* Global Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern mask-radial pointer-events-none opacity-40" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
