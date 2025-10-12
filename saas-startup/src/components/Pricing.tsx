'use client';

import { Check, ArrowRight, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for solo entrepreneurs',
    features: [
      'Up to 1,000 customers',
      'Basic analytics',
      'Email support',
      '5 team members',
      '10 GB storage',
      'Mobile app access',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '79',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 10,000 customers',
      'Advanced analytics',
      'Priority support',
      'Unlimited team members',
      '100 GB storage',
      'Mobile app access',
      'Custom integrations',
      'API access',
    ],
    highlighted: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For established businesses',
    features: [
      'Unlimited customers',
      'Custom analytics',
      '24/7 phone support',
      'Unlimited team members',
      'Unlimited storage',
      'Mobile app access',
      'Custom integrations',
      'API access',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold gradient-text">PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'glass-strong scale-105 shadow-2xl border-2 border-purple-500'
                  : 'glass hover:glass-strong hover:scale-105'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-slate-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">/month</span>
                </div>
              </div>

              {/* CTA button */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-6 flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'glass-strong hover:glass text-slate-700 dark:text-slate-200'
                }`}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {[
              {
                question: 'Can I change plans later?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
              },
              {
                question: 'Is there a long-term contract?',
                answer: 'No contracts. Pay month-to-month and cancel anytime. No questions asked.',
              },
            ].map((faq, index) => (
              <div key={index} className="glass-strong rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                  {faq.question}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center glass-strong rounded-2xl p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Still have questions?
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Our team is here to help you choose the right plan for your business.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}
