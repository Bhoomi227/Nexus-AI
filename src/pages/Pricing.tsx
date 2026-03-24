import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '../components/Button';

const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '0',
      desc: 'Perfect for individuals and side projects.',
      features: ['Up to 3 projects', 'Basic analytics', 'Community support', '1GB storage'],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '29',
      desc: 'Ideal for growing teams and professionals.',
      features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '10GB storage', 'Custom domains'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '99',
      desc: 'For large organizations with custom needs.',
      features: ['Custom contracts', 'Dedicated manager', '24/7 phone support', 'Unlimited storage', 'SSO & Security'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="pt-32">
      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, transparent pricing</h1>
            <p className="text-lg text-slate-600">
              Choose the plan that's right for you. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <div 
                key={i} 
                className={`relative p-8 rounded-3xl border ${
                  tier.popular ? 'border-indigo-600 shadow-2xl scale-105 z-10 bg-white' : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                {tier.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <p className="text-slate-600 text-sm">{tier.desc}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={tier.popular ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time from your dashboard.' },
              { q: 'Is there a free trial?', a: 'We offer a 14-day free trial for our Pro plan. No credit card required.' },
              { q: 'Do you offer discounts for non-profits?', a: 'Absolutely! Contact our sales team to learn more about our non-profit pricing.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
