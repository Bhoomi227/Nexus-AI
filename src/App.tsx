import React, { useState, useEffect } from 'react';
import { 
  Terminal, TrendingUp, Code2, Search, Zap, BarChart, 
  ArrowUpRight, Github, Linkedin, Twitter, Mail, Menu, X,
  CheckCircle2, Globe, Database, Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base-bg/80 backdrop-blur-md border-b border-base-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal size={24} className="text-accent-primary" />
          <span className="text-xl font-bold tracking-tight">Alex<span className="text-accent-primary">.</span>SEO</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Expertise', 'Case Studies', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-text-muted hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="bg-white text-black px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
            Available for Hire <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-base-surface border-b border-base-border p-6 md:hidden flex flex-col gap-4"
          >
            {['Expertise', 'Case Studies', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-medium text-text-muted hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <div className="h-px bg-base-border my-2" />
            <a href="#contact" className="bg-white text-black px-5 py-3 rounded-sm text-sm font-semibold flex items-center justify-center gap-2 w-full">
              Available for Hire <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 mask-radial pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-glow border border-accent-primary/20 text-xs font-mono text-accent-primary mb-8">
            <Code2 size={14} /> Senior Technical SEO Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            I engineer <br />
            <span className="text-accent-primary">organic growth.</span>
          </h1>
          <p className="text-lg text-text-muted mb-10 max-w-lg leading-relaxed">
            Bridging the gap between code and search engines. I build high-performance web architectures that rank #1 and convert traffic into revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#work" className="bg-white text-black px-8 py-4 rounded-sm text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              View Case Studies <ArrowUpRight size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-base-surface border border-base-border text-white px-8 py-4 rounded-sm text-sm font-semibold hover:bg-base-border transition-colors flex items-center justify-center gap-2">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Code/Terminal Window Graphic */}
          <div className="w-full max-w-lg mx-auto bg-[#0D0D0D] rounded-xl border border-base-border shadow-2xl overflow-hidden font-mono text-sm">
            <div className="flex items-center justify-between px-4 py-3 border-b border-base-border bg-[#111]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-text-muted text-xs">audit.js</div>
            </div>
            <div className="p-6 text-gray-300 leading-relaxed">
              <p><span className="text-accent-primary">~</span> npm run analyze --url=client-site.com</p>
              <p className="text-text-muted mt-2">Running Lighthouse & Technical Audit...</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Performance</span>
                  <span className="text-accent-primary">100</span>
                </div>
                <div className="w-full bg-base-border h-1.5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, delay: 1 }} className="h-full bg-accent-primary" />
                </div>
                
                <div className="flex justify-between mt-4">
                  <span>Accessibility</span>
                  <span className="text-accent-primary">100</span>
                </div>
                <div className="w-full bg-base-border h-1.5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, delay: 1.2 }} className="h-full bg-accent-primary" />
                </div>

                <div className="flex justify-between mt-4">
                  <span>Best Practices</span>
                  <span className="text-accent-primary">100</span>
                </div>
                <div className="w-full bg-base-border h-1.5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, delay: 1.4 }} className="h-full bg-accent-primary" />
                </div>

                <div className="flex justify-between mt-4">
                  <span>SEO</span>
                  <span className="text-accent-primary">100</span>
                </div>
                <div className="w-full bg-base-border h-1.5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, delay: 1.6 }} className="h-full bg-accent-primary" />
                </div>
              </div>
              <p className="text-accent-primary mt-6">✓ Audit passed. Core Web Vitals optimized.</p>
            </div>
          </div>
          
          {/* Floating Stat */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-10 top-1/3 bg-base-surface border border-base-border p-4 rounded-lg shadow-xl flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent-glow flex items-center justify-center">
              <TrendingUp size={24} className="text-accent-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">+340%</p>
              <p className="text-xs text-text-muted font-mono">Organic Traffic YoY</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Page 1 Rankings", value: "10k+" },
    { label: "Revenue Generated", value: "$50M+" },
    { label: "Lighthouse Scores", value: "100/100" }
  ];

  return (
    <section className="border-y border-base-border bg-base-surface/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-base-border/50">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? 'pl-8' : ''}`}>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm font-mono text-text-muted uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: "Technical SEO Architecture",
      desc: "Server-side rendering (SSR), static site generation (SSG) with Next.js/Nuxt, dynamic rendering, and crawl budget optimization."
    },
    {
      icon: <Zap size={24} />,
      title: "Core Web Vitals",
      desc: "Deep performance profiling. Optimizing LCP, INP, and CLS through code splitting, edge caching, and asset optimization."
    },
    {
      icon: <Database size={24} />,
      title: "Structured Data & Schema",
      desc: "Advanced JSON-LD implementation for rich snippets, knowledge graphs, and semantic entity relationships."
    },
    {
      icon: <BarChart size={24} />,
      title: "Data Analytics & Tracking",
      desc: "Custom GTM server-side tagging, GA4 configuration, log file analysis, and custom Looker Studio dashboards."
    }
  ];

  return (
    <section id="expertise" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-mono text-accent-primary mb-4 uppercase tracking-widest">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Where Marketing Meets Engineering.</h3>
          <p className="text-lg text-text-muted">I don't just recommend SEO fixes; I write the code to implement them. Bridging the gap between marketing goals and technical execution.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-base-surface border border-base-border p-8 rounded-xl hover:border-accent-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-base-bg border border-base-border flex items-center justify-center mb-6 text-white group-hover:text-accent-primary transition-colors">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
              <p className="text-text-muted leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      client: "FinTech Startup",
      metric: "+450%",
      metricLabel: "Non-Branded Organic Traffic",
      title: "Next.js Migration & Programmatic SEO",
      desc: "Migrated a legacy SPA to Next.js, implementing a programmatic SEO strategy that generated 10,000+ localized landing pages with dynamic structured data.",
      tags: ["Next.js", "Programmatic SEO", "JSON-LD"]
    },
    {
      client: "Global E-Commerce",
      metric: "-2.4s",
      metricLabel: "Largest Contentful Paint (LCP)",
      title: "Core Web Vitals Overhaul",
      desc: "Refactored the critical rendering path, implemented edge caching via Cloudflare Workers, and optimized image delivery, resulting in a 40% increase in conversion rate.",
      tags: ["Performance", "Cloudflare", "React"]
    }
  ];

  return (
    <section id="case-studies" className="py-32 px-6 bg-base-surface/30 border-y border-base-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-accent-primary mb-4 uppercase tracking-widest">Featured Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gradient">Proof is in the data.</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-base-bg border border-base-border rounded-xl overflow-hidden group"
            >
              {/* Metric Header */}
              <div className="p-8 border-b border-base-border bg-gradient-to-br from-accent-glow to-transparent">
                <p className="text-sm font-mono text-text-muted mb-2">{study.client}</p>
                <div className="flex items-baseline gap-3">
                  <h4 className="text-6xl font-bold text-accent-primary">{study.metric}</h4>
                  <span className="text-sm font-bold uppercase tracking-wider text-white">{study.metricLabel}</span>
                </div>
              </div>
              
              {/* Details */}
              <div className="p-8">
                <h5 className="text-2xl font-bold mb-4">{study.title}</h5>
                <p className="text-text-muted mb-8 leading-relaxed">{study.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-base-surface border border-base-border text-xs font-mono text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const jobs = [
    {
      role: "Lead SEO Engineer",
      company: "TechGrowth Agency",
      period: "2023 - Present",
      desc: "Leading a team of 4 developers to implement technical SEO architectures for Fortune 500 clients. Built internal tools for log file analysis."
    },
    {
      role: "Senior Frontend Developer (SEO Focus)",
      company: "E-Commerce Giant",
      period: "2020 - 2023",
      desc: "Spearheaded the migration to a headless commerce architecture. Improved Core Web Vitals across 2M+ URLs, directly impacting organic revenue."
    },
    {
      role: "Technical SEO Specialist",
      company: "Digital Marketing Co.",
      period: "2017 - 2020",
      desc: "Conducted deep technical audits, managed crawl budgets, and implemented complex schema markups for enterprise clients."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-accent-primary mb-4 uppercase tracking-widest text-center">Timeline</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient">Career Experience</h3>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-base-border before:to-transparent">
          {jobs.map((job, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-base-bg bg-base-surface text-accent-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CheckCircle2 size={16} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-base-surface border border-base-border p-6 rounded-xl shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="font-bold text-lg text-white">{job.role}</h4>
                  <span className="text-xs font-mono text-accent-primary">{job.period}</span>
                </div>
                <p className="text-sm font-medium text-text-muted mb-4">{job.company}</p>
                <p className="text-sm text-text-muted leading-relaxed">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-base-surface/50 border-t border-base-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gradient">Let's build something <br /> that ranks.</h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Currently accepting freelance projects and consulting roles for Q3. Let's discuss your technical SEO challenges.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:hello@example.com" className="bg-white text-black px-8 py-4 rounded-sm text-base font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <Mail size={18} /> Email Me
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-base-surface border border-base-border text-white px-8 py-4 rounded-sm text-base font-semibold hover:bg-base-border transition-colors flex items-center justify-center gap-2">
            <Linkedin size={18} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-base-bg border-t border-base-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Terminal size={20} className="text-accent-primary" />
          <span className="text-lg font-bold tracking-tight">Alex<span className="text-accent-primary">.</span>SEO</span>
        </div>
        
        <p className="text-sm text-text-muted font-mono">
          © {new Date().getFullYear()} Alex Dev. Built with React & Tailwind.
        </p>

        <div className="flex gap-4">
          <a href="#" className="text-text-muted hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-text-muted hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-text-muted hover:text-white transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-base-bg text-text-main font-sans selection:bg-accent-primary selection:text-base-bg">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Expertise />
        <CaseStudies />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
