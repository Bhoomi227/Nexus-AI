import React from 'react';
import { Code, Layout, Smartphone, Globe, BarChart, Search } from 'lucide-react';
import { Button } from '../components/Button';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Custom, responsive websites built with the latest technologies for maximum performance.',
      icon: <Globe className="w-8 h-8 text-indigo-600" />
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centric design that focuses on creating intuitive and engaging digital experiences.',
      icon: <Layout className="w-8 h-8 text-indigo-600" />
    },
    {
      title: 'Mobile Apps',
      desc: 'Native and cross-platform mobile applications that bring your ideas to life on any device.',
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />
    },
    {
      title: 'SEO Optimization',
      desc: 'Strategic optimization to improve your search rankings and drive organic traffic.',
      icon: <Search className="w-8 h-8 text-indigo-600" />
    },
    {
      title: 'Digital Marketing',
      desc: 'Data-driven marketing campaigns that help you reach your audience and grow your brand.',
      icon: <BarChart className="w-8 h-8 text-indigo-600" />
    },
    {
      title: 'Custom Software',
      desc: 'Tailored software solutions designed to solve your unique business challenges.',
      icon: <Code className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <div className="pt-32">
      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-slate-600">
              We offer a wide range of digital services to help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Discovery', desc: 'We start by understanding your goals and requirements.' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed roadmap and strategy for success.' },
              { step: '03', title: 'Execution', desc: 'Our experts bring your vision to life with precision.' },
              { step: '04', title: 'Delivery', desc: 'Launching your project and providing ongoing support.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-white/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
