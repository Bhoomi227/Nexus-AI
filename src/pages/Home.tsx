import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Shield, Rocket } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl opacity-50" />
        </div>
        
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
              New: Lumina 2.0 is here
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Build your next big idea <br />
              <span className="text-indigo-600">faster than ever</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              The ultimate website template for startups, agencies, and creators. 
              Beautifully designed, fully responsive, and ready to launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Get Started Free <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Demo
              </Button>
            </div>
          </motion.div>

          {/* Hero Image / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dashboard/1200/800" 
                alt="Product Dashboard" 
                className="rounded-xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container-custom">
          <p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">
            Trusted by world-class teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {['Stripe', 'Airbnb', 'Slack', 'Intercom', 'Framer'].map((brand) => (
              <span key={brand} className="text-2xl font-bold text-slate-400">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-slate-600">
              Powerful tools and features designed to help you grow your business and reach your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'High Performance',
                desc: 'Blazing fast load times and optimized performance for the best user experience.',
                icon: <Rocket className="w-6 h-6 text-indigo-600" />
              },
              {
                title: 'Secure by Design',
                desc: 'Enterprise-grade security protocols to keep your data and users safe at all times.',
                icon: <Shield className="w-6 h-6 text-indigo-600" />
              },
              {
                title: 'Team Collaboration',
                desc: 'Built-in tools for seamless teamwork and real-time communication across your org.',
                icon: <Users className="w-6 h-6 text-indigo-600" />
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your workflow?</h2>
            <p className="text-indigo-100/80 text-lg mb-10 max-w-2xl mx-auto">
              Join over 10,000+ teams who are already using Lumina to build better products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 w-full sm:w-auto">
                Start Your Free Trial
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 w-full sm:w-auto">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
