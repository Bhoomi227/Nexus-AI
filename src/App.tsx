import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-axis-white/90 backdrop-blur-md py-4 border-b border-axis-black/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="text-3xl font-display font-bold tracking-tighter">AXIS</a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-axis-accent transition-colors">
              {link.name}
            </a>
          ))}
          <button className="btn-axis py-3 px-8 text-[10px]">Start Project</button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-axis-black text-axis-white z-[60] p-12 flex flex-col"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-3xl font-display font-bold tracking-tighter">AXIS</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="space-y-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-5xl font-display font-bold hover:text-axis-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex gap-8">
              <Instagram size={24} />
              <Twitter size={24} />
              <Linkedin size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-axis-gray-100">
      {/* Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="grid-line-v left-1/4" />
        <div className="grid-line-v left-1/2" />
        <div className="grid-line-v left-3/4" />
        <div className="grid-line-h top-1/3" />
        <div className="grid-line-h top-2/3" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-axis-accent font-bold mb-8">Architecture & Design Studio</p>
          <h1 className="text-7xl md:text-9xl font-display font-bold mb-12 leading-[0.85] tracking-tighter">
            Shaping <br /> <span className="text-axis-accent">Future</span> <br /> Spaces
          </h1>
          <p className="text-lg text-axis-black/60 mb-12 leading-relaxed max-w-md">
            We transform visionary concepts into structural masterpieces. Sustainable, minimalist, and human-centric architecture for the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-axis">View Projects</button>
            <button className="btn-axis-outline">Our Philosophy</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-12 left-12 bg-axis-white p-8 max-w-xs">
            <h3 className="text-xl font-display font-bold mb-2">The Monolith</h3>
            <p className="text-xs text-axis-black/50 uppercase tracking-widest mb-4">Berlin, Germany — 2025</p>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-axis-black pb-1">
              Explore Project <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-axis-black" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Explore</span>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Obsidian House",
      location: "Reykjavik, Iceland",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      category: "Residential"
    },
    {
      id: "02",
      title: "Skyline Pavilion",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000",
      category: "Commercial"
    },
    {
      id: "03",
      title: "The Glass Atrium",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
      category: "Public Space"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-axis-white">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-axis-accent font-bold mb-4">Selected Works</p>
            <h2 className="text-5xl md:text-7xl font-display font-bold">Featured <br /> Projects</h2>
          </div>
          <button className="btn-axis-outline">All Projects</button>
        </div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="lg:w-3/5 relative group overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 left-0 project-number">{project.id}</div>
              </div>
              <div className="lg:w-2/5">
                <p className="text-xs uppercase tracking-widest text-axis-accent font-bold mb-4">{project.category}</p>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">{project.title}</h3>
                <p className="text-sm text-axis-black/50 uppercase tracking-widest mb-8">{project.location}</p>
                <p className="text-axis-black/60 mb-10 leading-relaxed">
                  A study in light and materiality. This project explores the boundaries between internal and external environments using sustainable glass and recycled steel.
                </p>
                <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] border-b border-axis-black pb-2 hover:gap-8 transition-all">
                  View Case Study <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Architectural Design", desc: "Conceptualizing and developing structural plans that balance form and function." },
    { title: "Urban Planning", desc: "Designing sustainable urban environments that foster community and growth." },
    { title: "Interior Architecture", desc: "Crafting internal spaces that reflect the soul of the building and its inhabitants." },
    { title: "Sustainability Consulting", desc: "Implementing green technologies and materials to minimize environmental impact." }
  ];

  return (
    <section id="services" className="py-32 bg-axis-black text-axis-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-axis-accent font-bold mb-8">What We Do</p>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-12">Our <br /> Expertise</h2>
            <p className="text-axis-white/60 text-lg leading-relaxed max-w-md mb-12">
              We provide comprehensive design solutions across various scales, from private residences to large-scale urban developments.
            </p>
            <button className="btn-axis bg-axis-white text-axis-black hover:bg-axis-accent hover:text-axis-white">Download Portfolio</button>
          </div>

          <div className="grid gap-1">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-axis-white/10 py-12 flex justify-between items-start cursor-pointer hover:bg-axis-white/5 px-8 transition-colors"
              >
                <div className="max-w-md">
                  <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-axis-accent transition-colors">{service.title}</h4>
                  <p className="text-sm text-axis-white/40 leading-relaxed">{service.desc}</p>
                </div>
                <Plus size={24} className="group-hover:rotate-45 transition-transform text-axis-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 bg-axis-gray-100">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.5em] text-axis-accent font-bold mb-8">The Philosophy</p>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-12">Less is <br /> <span className="italic">Everything</span></h2>
            <p className="text-axis-black/60 text-lg leading-relaxed mb-12">
              Our design philosophy is rooted in the principles of modern minimalism. We believe that by stripping away the unnecessary, we reveal the true essence of a space.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-4xl font-display font-bold mb-2">15+</h4>
                <p className="text-[10px] uppercase tracking-widest text-axis-black/40 font-bold">Years of Innovation</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold mb-2">120</h4>
                <p className="text-[10px] uppercase tracking-widest text-axis-black/40 font-bold">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-12 -left-12 bg-axis-accent p-12 text-axis-white hidden md:block">
              <p className="text-4xl font-display font-bold italic">"Architecture is the learned game, correct and magnificent, of forms assembled in the light."</p>
              <p className="mt-8 text-xs uppercase tracking-widest font-bold">— Le Corbusier</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-axis-white pt-32 pb-12 px-6 md:px-12 border-t border-axis-black/5">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tighter mb-12">Let's Build <br /> <span className="text-axis-accent">Together</span></h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-axis-gray-100 rounded-full flex items-center justify-center text-axis-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-axis-black/40 font-bold">Studio</p>
                  <p className="font-bold">128 Bauhaus Blvd, Berlin, DE</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-axis-gray-100 rounded-full flex items-center justify-center text-axis-black">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-axis-black/40 font-bold">Call</p>
                  <p className="font-bold">+49 30 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-axis-gray-100 rounded-full flex items-center justify-center text-axis-black">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-axis-black/40 font-bold">Email</p>
                  <p className="font-bold">hello@axis-arch.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-axis-gray-100 p-12">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-axis-black/40">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-axis-black/10 py-4 focus:outline-none focus:border-axis-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-axis-black/40">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-axis-black/10 py-4 focus:outline-none focus:border-axis-accent transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-axis-black/40">Project Type</label>
                <select className="w-full bg-transparent border-b border-axis-black/10 py-4 focus:outline-none focus:border-axis-accent transition-colors appearance-none">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Public Space</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-axis-black/40">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-axis-black/10 py-4 focus:outline-none focus:border-axis-accent transition-colors" />
              </div>
              <button className="btn-axis w-full">Send Inquiry</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-axis-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-display font-bold tracking-tighter">AXIS</span>
            <p className="text-[10px] uppercase tracking-widest text-axis-black/40 font-bold">
              © 2026 AXIS Architecture. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-8">
            {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map(item => (
              <a key={item} href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-axis-accent transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-axis-accent selection:text-axis-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
