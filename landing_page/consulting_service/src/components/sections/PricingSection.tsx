'use client';

import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Strategy Sprint',
    description: 'Quick wins and momentum building',
    price: '$15K',
    duration: '4 weeks',
    features: [
      'Strategic assessment & roadmap',
      'Quick-win identification',
      '2 implementation workshops',
      'Executive presentations',
      '30-day email support',
    ],
    cta: 'Start Sprint',
    popular: false,
  },
  {
    name: 'Growth Accelerator',
    description: 'Comprehensive transformation program',
    price: '$45K',
    duration: '12 weeks',
    features: [
      'Everything in Strategy Sprint',
      'Full diagnostic & analysis',
      'Custom strategy development',
      'Hands-on implementation support',
      'Weekly coaching sessions',
      'Team training & workshops',
      '90-day dedicated support',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise Partnership',
    description: 'Ongoing strategic partnership',
    price: 'Custom',
    duration: '6-12 months',
    features: [
      'Everything in Growth Accelerator',
      'Executive advisory board seat',
      'Unlimited consulting access',
      'Priority response time',
      'Quarterly strategic reviews',
      'Custom solution development',
      'Dedicated account team',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden scroll-snap-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold gradient-text">PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Investment That
            <br />
            <span className="gradient-text">Pays For Itself</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose the engagement model that fits your needs and timeline.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.popular ? 'glass-strong scale-105' : 'glass'
              } rounded-2xl p-8 hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {plan.description}
                </p>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {plan.price}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {plan.duration}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    : 'glass-strong text-slate-900 dark:text-white hover:scale-105'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            💯 <strong>100% Satisfaction Guarantee</strong> - If you're not completely satisfied after 30 days, we'll refund your investment.
          </p>
        </div>
      </div>
    </section>
  );
}
