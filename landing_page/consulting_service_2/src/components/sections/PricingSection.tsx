import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Strategic Foundation',
    price: '$12K',
    duration: '6 weeks',
    description: 'Perfect for companies looking to establish strategic direction',
    features: [
      'Business assessment and analysis',
      'Strategic roadmap development',
      'Market opportunity identification',
      'Competitive analysis',
      'Implementation planning',
      'Monthly progress reviews',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth Partnership',
    price: '$35K',
    duration: '3 months',
    description: 'Comprehensive engagement for rapid growth and transformation',
    features: [
      'Everything in Strategic Foundation',
      'Dedicated consulting team',
      'Weekly strategy sessions',
      'Operational optimization',
      'Performance dashboard',
      'Change management support',
      'Executive coaching',
      'Priority support access',
    ],
    cta: 'Start Transforming',
    highlight: true,
  },
  {
    name: 'Enterprise Excellence',
    price: 'Custom',
    duration: '6-12 months',
    description: 'Long-term strategic partnership for sustained excellence',
    features: [
      'Everything in Growth Partnership',
      'C-suite advisory services',
      'Organization-wide transformation',
      'Custom solution development',
      'Integration with your team',
      'Industry-specific expertise',
      'M&A advisory support',
      'Unlimited consultation',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-snap-section bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent dark:via-cyan-950/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-button px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold">Investment Plans</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your
            <span className="gradient-text"> Growth Path</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Flexible engagement models designed to fit your business needs and budget. 
            All plans include our 100% satisfaction guarantee.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="glass-card p-8"
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-accent px-6 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-600 dark:text-gray-400">
                      / {plan.duration}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold btn-primary"
              >
                {plan.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3">100% Satisfaction Guarantee</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We're confident in our ability to deliver results. If you're not completely satisfied 
            within the first 30 days, we'll refund your investment—no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
