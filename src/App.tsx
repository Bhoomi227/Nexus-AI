import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  ArrowRight, 
  Check, 
  Star, 
  Globe, 
  Cpu,
  Layers,
  MessageSquare,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight">Nexus AI</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <button className="text-sm font-semibold text-slate-700 hover:text-brand-600 px-4 py-2 transition-colors">
                Log in
              </button>
              <button className="bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-lg font-medium text-slate-700 hover:text-brand-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full py-3 text-center font-semibold text-slate-700 border border-slate-200 rounded-xl">
                  Log in
                </button>
                <button className="w-full py-3 text-center font-semibold text-white bg-brand-600 rounded-xl shadow-lg shadow-brand-500/20">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              v2.0 is now live
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] mb-8"
          >
            Scale your business with <br />
            <span className="text-gradient">Intelligent Automation</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Nexus AI empowers modern teams to automate workflows, analyze data in real-time, and deliver exceptional customer experiences at scale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 group">
              Start Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <Play size={18} fill="currentColor" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 p-2">
              <img 
                src="https://picsum.photos/seed/dashboard/1600/900" 
                alt="Nexus AI Dashboard" 
                className="rounded-xl w-full h-auto shadow-inner"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements around the image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-400/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-400/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="text-brand-500" />,
      title: "Lightning Fast",
      description: "Optimized for speed. Get real-time insights and automated actions in milliseconds."
    },
    {
      icon: <Shield className="text-brand-500" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC2 compliance to keep your data safe and secure."
    },
    {
      icon: <BarChart3 className="text-brand-500" />,
      title: "Advanced Analytics",
      description: "Deep dive into your performance metrics with customizable dashboards and reports."
    },
    {
      icon: <Users className="text-brand-500" />,
      title: "Team Collaboration",
      description: "Built for teams of all sizes. Share insights, assign tasks, and collaborate seamlessly."
    },
    {
      icon: <Globe className="text-brand-500" />,
      title: "Global Infrastructure",
      description: "Deploy and scale globally with our distributed network of high-performance nodes."
    },
    {
      icon: <Cpu className="text-brand-500" />,
      title: "AI-Powered Engine",
      description: "Proprietary machine learning models that adapt to your specific business needs."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">Features</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mb-4">Everything you need to scale</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Powerful tools designed to help you build, grow, and manage your business more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  return (
    <section id="solutions" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">Intelligent Workflows</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold font-display text-slate-900 mb-6 leading-tight">
              Automate the mundane, <br />focus on the <span className="text-brand-600">extraordinary</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our visual workflow builder allows you to connect over 500+ apps and create complex automation sequences without writing a single line of code.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Visual drag-and-drop workflow builder",
                "Pre-built automation templates for every industry",
                "Advanced conditional logic and branching",
                "Real-time monitoring and error handling"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-100 text-brand-600 rounded-full p-1">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all">
              Explore our solutions <ChevronRight size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 glass p-4 rounded-3xl shadow-2xl border-slate-200">
              <img 
                src="https://picsum.photos/seed/workflow/1200/1000" 
                alt="Workflow Builder" 
                className="rounded-2xl shadow-lg w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-50 rounded-full -z-10 blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO at TechFlow",
      content: "Nexus AI has completely transformed how our engineering team handles deployment cycles. We've seen a 40% increase in productivity since switching.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Michael Chen",
      role: "Head of Growth at ScaleUp",
      content: "The analytics engine is second to none. Being able to visualize our entire funnel in real-time has allowed us to make much faster data-driven decisions.",
      avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder of Bloom",
      content: "As a non-technical founder, the ease of use was a game-changer. I was able to set up our entire customer support automation in just one afternoon.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-400 font-bold text-sm uppercase tracking-widest mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Trusted by innovative teams</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#38bdf8" className="text-brand-400" />
                ))}
              </div>
              <p className="text-slate-300 text-lg italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-500/30" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-slate-400 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo placeholders */}
          <div className="text-2xl font-bold font-display tracking-tighter">TECHFLOW</div>
          <div className="text-2xl font-bold font-display tracking-tighter">SCALEUP</div>
          <div className="text-2xl font-bold font-display tracking-tighter">BLOOM</div>
          <div className="text-2xl font-bold font-display tracking-tighter">NEXUS</div>
          <div className="text-2xl font-bold font-display tracking-tighter">QUANTUM</div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for side projects and small experiments.",
      features: ["Up to 3 projects", "Basic analytics", "Community support", "1GB storage"],
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Pro",
      price: "49",
      description: "Everything you need to grow your business.",
      features: ["Unlimited projects", "Advanced analytics", "Priority email support", "50GB storage", "Custom domains", "Team collaboration"],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced features for large-scale operations.",
      features: ["Dedicated account manager", "24/7 phone support", "Custom integrations", "Unlimited storage", "SLA guarantees", "On-premise deployment"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 mb-4">Simple, transparent pricing</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choose the plan that's right for your business. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-brand-500 shadow-2xl shadow-brand-500/10 scale-105 z-10' : 'border-slate-100 shadow-sm'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 font-medium">/mo</span>}
                </div>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check size={16} className="text-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] bg-brand-600 overflow-hidden p-12 md:p-20 text-center text-white shadow-2xl shadow-brand-500/30">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-6 leading-tight">
              Ready to supercharge your workflow?
            </h2>
            <p className="text-xl text-brand-100 mb-10 leading-relaxed">
              Join over 10,000+ teams who are already using Nexus AI to build the future. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-600 rounded-full font-bold text-lg hover:bg-brand-50 transition-all shadow-xl">
                Get Started for Free
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-brand-700/50 text-white border border-brand-400/30 rounded-full font-bold text-lg hover:bg-brand-700 transition-all backdrop-blur-sm">
                Schedule a Demo
              </button>
            </div>
            <p className="mt-8 text-brand-200 text-sm font-medium">
              No credit card required • Cancel anytime • 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">Nexus AI</span>
            </div>
            <p className="text-slate-500 max-w-xs mb-8 leading-relaxed">
              The intelligent automation platform for modern teams. Build faster, scale smarter, and deliver more.
            </p>
            <div className="flex gap-4">
              {['twitter', 'github', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-600 transition-all">
                  <Globe size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4">
              {['Features', 'Solutions', 'Pricing', 'Updates', 'Security'].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Careers', 'Blog', 'Press', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy', 'Terms', 'Cookie Policy', 'Licenses', 'Settings'].map((item) => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Nexus AI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm">Status</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm">Help Center</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm">API Docs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
