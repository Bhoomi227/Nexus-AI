import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

const Contact = () => {
  return (
    <div className="pt-32">
      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in touch</h1>
            <p className="text-lg text-slate-600">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-indigo-600 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span>hello@lumina.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <span>+1 (555) 000-0000</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <span>123 Design St, Creative City, CA 90210</span>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="font-bold mb-4">Support Hours</h4>
                <p className="text-slate-600 text-sm mb-2">Monday - Friday: 9am - 6pm EST</p>
                <p className="text-slate-600 text-sm">Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Sales</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button className="w-full gap-2 py-4">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
