import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Strategic Assessment',
    price: '$10K',
    duration: '4 weeks',
    description: 'Perfect for companies looking to establish strategic direction and identify opportunities',
    features: [
      'Comprehensive business assessment',
      'Market analysis and competitive review',
      'Strategic recommendations report',
      'Executive presentation',
      '30-day email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth Accelerator',
    price: '$30K',
    duration: '3 months',
    description: 'Our most popular engagement for companies ready to scale and transform',
    features: [
      'Everything in Strategic Assessment',
      'Dedicated consulting team',
      'Weekly strategic sessions',
      'Implementation support',
      'Performance tracking dashboard',
      'Organizational development',
      'Change management support',
      '90-day priority support',
    ],
    cta: 'Start Growing',
    popular: true,
  },
  {
    name: 'Enterprise Partnership',
    price: 'Custom',
    duration: '6-12 months',
    description: 'Long-term strategic partnership for comprehensive business transformation',
    features: [
      'Everything in Growth Accelerator',
      'Executive advisory services',
      'Full organizational transformation',
      'Custom solution development',
      'Integration with your teams',
      'Board-level presentations',
      'M&A advisory support',
      'Unlimited consultation access',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-snap-section">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="neuro-badge text-primary mb-6">
            <Star className="w-4 h-4" />
            <span>Flexible Engagement</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose the Right
            <span className="text-primary"> Partnership Level</span>
          </h2>
          <p className="text-xl text-muted">
            Scalable consulting services designed to meet your business needs and budget. 
            All plans include our satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`neuro-card p-8 relative ${plan.popular ? 'ring-4 ring-blue-500 scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-8 pb-8 border-b border-gray-300">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-muted">/ {plan.duration}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <div className="neuro-icon w-6 h-6 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular ? 'btn-primary' : 'neuro-button'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="neuro-card p-8 text-center max-w-2xl mx-auto">
          <div className="neuro-icon w-16 h-16 mx-auto mb-4">
            <Check className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">100% Satisfaction Guarantee</h3>
          <p className="text-muted">
            We stand behind our work. If you're not satisfied within the first 30 days, 
            we'll refund your investment—no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
