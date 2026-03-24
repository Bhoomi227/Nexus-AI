import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32">
      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">We're on a mission to simplify design</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2024, Lumina was built on the belief that high-quality design 
              should be accessible to everyone, from solo founders to large enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/team/800/600" 
                alt="Our Team" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-slate-600 leading-relaxed">
                  What started as a small project to help friends build websites has grown into 
                   a global platform used by thousands. We're a remote-first team of designers, 
                   engineers, and dreamers.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">10k+</div>
                  <div className="text-sm text-slate-500">Active Users</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
                  <div className="text-sm text-slate-500">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', icon: <Target className="text-indigo-600" />, desc: 'Constantly pushing boundaries.' },
              { title: 'Empathy', icon: <Heart className="text-indigo-600" />, desc: 'Putting users at the heart of everything.' },
              { title: 'Transparency', icon: <Eye className="text-indigo-600" />, desc: 'Open communication, always.' },
              { title: 'Community', icon: <Users className="text-indigo-600" />, desc: 'Growing together with our users.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
