import { CheckCircle2, TrendingUp, Clock, DollarSign } from 'lucide-react';

const benefits = [
  {
    stat: '3-6 months',
    label: 'Time to Value',
    description: 'See measurable results within your first quarter of engagement.',
  },
  {
    stat: '5x Average',
    label: 'Return on Investment',
    description: 'Our clients typically see 5x ROI within the first year.',
  },
  {
    stat: '45% Faster',
    label: 'Implementation Speed',
    description: 'Accelerated execution with our proven methodologies.',
  },
  {
    stat: '92% Success',
    label: 'Project Completion',
    description: 'Industry-leading success rate for strategic initiatives.',
  },
];

const outcomes = [
  'Revenue growth and market expansion',
  'Operational efficiency and cost optimization',
  'Enhanced decision-making with data insights',
  'Competitive advantage through innovation',
  'Scalable systems and processes',
  'Strong organizational culture and alignment',
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="scroll-snap-section bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent dark:via-emerald-950/10">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-button px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Delivering
            <span className="gradient-text"> Measurable Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We don't just provide advice—we partner with you to drive tangible business outcomes 
            that matter to your bottom line.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="glass-card p-8 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {benefit.stat}
              </div>
              <div className="text-lg font-semibold mb-3">{benefit.label}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Outcomes Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="glass-card p-10">
              <div className="space-y-4">
                {[85, 92, 78, 95].map((value, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>Q{idx + 1} Growth</span>
                      <span className="gradient-text">{value}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-accent transition-all duration-1000"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 gradient-accent rounded-3xl opacity-10 blur-3xl"></div>
          </div>

          {/* Right: Outcomes List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">
              What You'll Achieve
            </h3>
            <div className="space-y-4">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg">{outcome}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#pricing" className="btn-primary inline-flex items-center gap-2">
                View Pricing Options
                <DollarSign className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
