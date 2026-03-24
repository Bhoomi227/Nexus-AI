import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Puzzle, 
  Download, 
  Star, 
  Trophy, 
  Brain, 
  Zap, 
  Menu,
  X,
  Smartphone,
  Gamepad2
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-main/90 backdrop-blur-md border-b-4 border-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary border-4 border-text-dark flex items-center justify-center transform -rotate-6">
              <Puzzle className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-text-dark">ChromaShift</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-bold">
            <a href="#features" className="text-text-dark hover:text-primary transition-colors">Features</a>
            <a href="#reviews" className="text-text-dark hover:text-secondary transition-colors">Reviews</a>
            <a href="#trailer" className="text-text-dark hover:text-accent transition-colors">Trailer</a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="btn-primary px-6 py-2 text-base">
              <Download className="w-5 h-5" />
              Get Game
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-dark">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-4 border-text-dark">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#features" className="block text-xl font-bold text-text-dark">Features</a>
            <a href="#reviews" className="block text-xl font-bold text-text-dark">Reviews</a>
            <a href="#trailer" className="block text-xl font-bold text-text-dark">Trailer</a>
            <button className="btn-primary w-full mt-4">
              <Download className="w-5 h-5" />
              Download Now
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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      
      {/* Floating Shapes */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-accent border-4 border-text-dark rounded-2xl animate-float opacity-80 rotate-12" />
      <div className="absolute top-60 right-20 w-16 h-16 bg-primary border-4 border-text-dark rounded-full animate-float-delayed opacity-80" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary border-4 border-text-dark rounded-3xl animate-float opacity-80 -rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-4 border-text-dark mb-6 transform -rotate-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-bold text-text-dark">#1 Puzzle Game of 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-text-dark mb-6 leading-tight">
              Match. Merge. <br/>
              <span className="text-primary relative inline-block">
                Master.
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-accent" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-dark/80 mb-10 font-medium max-w-lg">
              Shift colors, solve mind-bending puzzles, and save the realm in the most addictive game of the year.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                <Smartphone className="w-6 h-6" />
                App Store
              </button>
              <button className="btn-secondary">
                <Gamepad2 className="w-6 h-6" />
                Google Play
              </button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="relative mx-auto lg:ml-auto w-full max-w-[320px]"
          >
            <div className="relative w-full aspect-[1/2] bg-text-dark rounded-[3rem] border-8 border-text-dark shadow-2xl overflow-hidden animate-float">
              {/* Screen Content - Placeholder for gameplay */}
              <div className="absolute inset-0 bg-secondary">
                <img 
                  src="https://picsum.photos/seed/puzzle-game/400/800" 
                  alt="Gameplay Preview" 
                  className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
                {/* Fake UI Overlay */}
                <div className="absolute top-6 left-0 w-full px-6 flex justify-between items-center">
                  <div className="bg-white/90 px-3 py-1 rounded-full font-bold text-sm">Score: 14,020</div>
                  <div className="bg-white/90 px-3 py-1 rounded-full font-bold text-sm">Lvl 42</div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-1/2 grid grid-cols-4 gap-2 p-2 bg-white/20 rounded-2xl backdrop-blur-sm">
                  {/* Fake puzzle grid */}
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className={`rounded-lg border-2 border-text-dark/20 ${
                      i % 3 === 0 ? 'bg-primary' : i % 2 === 0 ? 'bg-accent' : 'bg-secondary'
                    }`} />
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative elements behind phone */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-accent rounded-full blur-[80px] opacity-40" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10 text-white" />,
      title: "Brain-Bending Levels",
      description: "Over 500 handcrafted puzzles that will test your logic and spatial reasoning.",
      color: "bg-primary"
    },
    {
      icon: <Zap className="w-10 h-10 text-white" />,
      title: "Daily Challenges",
      description: "New unique puzzles every day. Compete with friends for the fastest solve time.",
      color: "bg-secondary"
    },
    {
      icon: <Trophy className="w-10 h-10 text-text-dark" />,
      title: "Global Leaderboards",
      description: "Climb the ranks and show the world who the true ChromaShift master is.",
      color: "bg-accent"
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10 bg-white border-y-4 border-text-dark">
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Why you'll love it</h2>
          <p className="text-xl text-text-dark/70 max-w-2xl mx-auto font-medium">
            Simple to learn, impossible to master. Discover the mechanics that make ChromaShift so addictive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="fun-card group"
            >
              <div className={`w-20 h-20 rounded-2xl ${feature.color} border-4 border-text-dark flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg text-text-dark/80 font-medium leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 relative bg-secondary overflow-hidden border-b-4 border-text-dark">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full mix-blend-multiply opacity-50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ textShadow: '4px 4px 0 #2D3047' }}>
            Players are obsessed
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "PuzzleMaster99", text: "I downloaded this to kill 5 minutes and ended up playing for 3 hours. Send help.", rating: 5 },
            { name: "Sarah J.", text: "The color shifting mechanic is brilliant. Best puzzle game I've played since Tetris.", rating: 5 },
            { name: "CasualGamer", text: "Level 42 is driving me crazy but I can't stop trying. The animations are so satisfying!", rating: 5 }
          ].map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border-4 border-text-dark rounded-3xl p-8"
              style={{ boxShadow: '6px 6px 0 0 #2D3047' }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-xl font-bold mb-6">"{review.text}"</p>
              <p className="text-text-dark/60 font-bold uppercase tracking-wider">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 relative bg-bg-main overflow-hidden">
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent border-4 border-text-dark rounded-[3rem] p-12 md:p-20"
          style={{ boxShadow: '12px 12px 0 0 #2D3047' }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to test your brain?</h2>
          <p className="text-2xl font-medium mb-10 max-w-2xl mx-auto">
            Join over 2 million players worldwide. Free to download, impossible to put down.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-primary text-xl px-10 py-5">
              <Smartphone className="w-8 h-8" />
              App Store
            </button>
            <button className="btn-secondary text-xl px-10 py-5">
              <Gamepad2 className="w-8 h-8" />
              Google Play
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white py-12 border-t-8 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Puzzle className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">ChromaShift</span>
          </div>
          
          <div className="flex gap-8 font-bold text-white/70">
            <a href="#" className="hover:text-accent transition-colors">Support</a>
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Press Kit</a>
          </div>
        </div>
        <div className="mt-12 text-center text-white/40 font-medium">
          <p>© 2026 ChromaShift Games. All rights reserved.</p>
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
        <Features />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

