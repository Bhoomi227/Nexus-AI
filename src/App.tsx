import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bot, 
  Palette, 
  Cpu, 
  Wrench, 
  Star, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Rocket, 
  Shield, 
  Lightbulb 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-text-dark">TinkerBots</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
            <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
            <a href="#benefits" className="hover:text-secondary transition-colors">Why Us</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Parents Say</a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="btn-primary px-6 py-2 text-base">
              Enroll Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#programs" className="block text-xl font-bold text-slate-600">Programs</a>
            <a href="#benefits" className="block text-xl font-bold text-slate-600">Why Us</a>
            <a href="#reviews" className="block text-xl font-bold text-slate-600">Parents Say</a>
            <button className="btn-primary w-full mt-4">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6 text-primary font-bold">
              <Star className="w-5 h-5 fill-primary" />
              <span>Fall 2026 Registration Now Open!</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-text-dark mb-6 leading-tight">
              Where <span className="text-secondary">Art</span> Meets <br/>
              <span className="text-primary relative inline-block">
                Engineering.
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-accent opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 font-medium max-w-lg leading-relaxed">
              Hands-on robotics and crafts classes for kids ages 4-12. We blend creativity with STEM to build the innovators of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Explore Classes
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary bg-white text-slate-700 border-2 border-slate-200 shadow-none hover:bg-slate-50 hover:shadow-lg">
                <Calendar className="w-5 h-5" />
                View Schedule
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm font-bold text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Parent" className="w-8 h-8 rounded-full border-2 border-white" />
                ))}
              </div>
              <p>Trusted by 500+ local parents</p>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="relative mx-auto lg:ml-auto w-full max-w-lg"
          >
            {/* Organic Blob Background */}
            <div className="absolute inset-0 bg-secondary/20 blob-shape scale-110 -z-10" />
            <div className="absolute inset-0 bg-primary/10 blob-shape-2 scale-105 -z-10" />
            
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-square">
              <img 
                src="https://picsum.photos/seed/robotics-kids/800/800" 
                alt="Kids building robots" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badges */}
              <div className="absolute top-6 -left-4 bg-white px-4 py-2 rounded-2xl shadow-xl font-bold text-primary flex items-center gap-2 transform -rotate-6">
                <Palette className="w-5 h-5" /> Creative
              </div>
              <div className="absolute bottom-10 -right-4 bg-white px-4 py-2 rounded-2xl shadow-xl font-bold text-secondary flex items-center gap-2 transform rotate-6">
                <Cpu className="w-5 h-5" /> Technical
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Creative Problem Solving",
      description: "Kids learn to approach challenges from multiple angles, combining logic with artistic expression.",
      color: "bg-indigo-50"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Collaborative Teamwork",
      description: "Group projects teach communication, sharing ideas, and working together to build amazing things.",
      color: "bg-amber-50"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Safe & Supportive",
      description: "Our expert instructors provide a nurturing environment where it's safe to experiment and make mistakes.",
      color: "bg-emerald-50"
    }
  ];

  return (
    <section id="benefits" className="py-24 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why TinkerBots?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            We don't just build robots; we build confidence. Our unique curriculum blends STEM education with arts and crafts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="kid-card"
            >
              <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      age: "Ages 4-6",
      title: "Mini Makers",
      icon: <Palette className="w-10 h-10 text-white" />,
      color: "bg-secondary",
      description: "Introduction to building and simple circuits using playdough, cardboard, and safe craft materials.",
      features: ["Playdough Circuits", "Cardboard Bots", "Motorized Art"]
    },
    {
      age: "Ages 7-9",
      title: "Tech Tinkerers",
      icon: <Wrench className="w-10 h-10 text-white" />,
      color: "bg-primary",
      description: "Diving into mechanics and basic coding. Kids build moving robots using Lego and craft supplies.",
      features: ["Lego Robotics", "Block Coding", "Sensors & Motors"]
    },
    {
      age: "Ages 10-12",
      title: "Future Engineers",
      icon: <Cpu className="w-10 h-10 text-white" />,
      color: "bg-accent",
      description: "Advanced projects combining 3D printing, Arduino microcontrollers, and custom chassis design.",
      features: ["Arduino Basics", "3D Printing", "Python Intro"]
    }
  ];

  return (
    <section id="programs" className="py-24 relative bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Classes for Every Age</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Curriculums designed specifically for developmental milestones, ensuring every child is challenged and engaged.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="kid-card flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center shadow-lg`}>
                  {program.icon}
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{program.age}</span>
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                </div>
              </div>
              
              <p className="text-slate-600 font-medium mb-8 flex-grow">
                {program.description}
              </p>

              <ul className="space-y-3 mb-8">
                {program.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 font-bold text-slate-700">
                    <CheckCircle2 className={`w-5 h-5 ${program.color.replace('bg-', 'text-')}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold text-white transition-transform hover:scale-105 active:scale-95 ${program.color}`}>
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Happy Parents, Happy Kids</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Parent of Leo (7)", text: "Leo used to just play video games, now he's building his own motorized cars out of cardboard and motors. The instructors are amazing!" },
            { name: "David Chen", role: "Parent of Mia (5)", text: "The Mini Makers class is perfect. Mia comes home covered in glitter and talking about circuits. It's the highlight of her week." },
            { name: "Elena Rodriguez", role: "Parent of Sam (11)", text: "Sam learned more about coding and engineering here in one semester than he did all year in school. Highly recommend the Future Engineers program." }
          ].map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 relative"
            >
              <div className="absolute -top-5 left-8 text-6xl text-primary/20 font-serif">"</div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-lg font-medium text-slate-700 mb-6 relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-text-dark">{review.name}</p>
                  <p className="text-sm text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative bg-bg-main overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Decorative background elements inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          
          <Rocket className="w-16 h-16 text-secondary mx-auto mb-6 transform -rotate-12" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start building?</h2>
          <p className="text-xl font-medium text-white/80 mb-10 max-w-2xl mx-auto">
            Spots are filling up fast for our upcoming semester. Give your child the gift of creativity and technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-secondary text-white rounded-full px-10 py-5 text-xl font-bold shadow-lg shadow-secondary/30 transition-all hover:scale-105 active:scale-95">
              Enroll for Fall 2026
            </button>
            <button className="bg-white/10 text-white border-2 border-white/20 rounded-full px-10 py-5 text-xl font-bold transition-all hover:bg-white/20 active:scale-95">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t-[12px] border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">TinkerBots</span>
            </div>
            <p className="font-medium max-w-sm leading-relaxed">
              Empowering the next generation of innovators through hands-on robotics and creative crafts.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="hover:text-secondary transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 font-medium">
              <li>123 Maker Street</li>
              <li>Innovation City, IC 90210</li>
              <li>hello@tinkerbots.edu</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 font-medium text-sm">
          <p>© 2026 TinkerBots Academy. All rights reserved.</p>
          <div className="flex gap-6">
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
    <div className="min-h-screen bg-bg-main text-text-dark font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Programs />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

