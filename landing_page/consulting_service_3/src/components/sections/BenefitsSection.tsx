import { CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    stat: '6-12 Months',
    label: 'Time to ROI',
    description: 'See measurable returns on your consulting investment within the first year.',
  },
  {
    icon: DollarSign,
    stat: '300% Average',
    label: 'Revenue Growth',
    description: 'Our clients typically achieve 3x revenue growth within 18-24 months.',
  },
  {
    icon: TrendingUp,
    stat: '50% Faster',
    label: 'Market Entry',
    description: 'Accelerate time to market with streamlined processes and expert guidance.',
  },
  {
    icon: CheckCircle,
    stat: '95% Success',
    label: 'Project Completion',
    description: 'Industry-leading success rate for strategic initiative implementation.',
  },
];

const outcomes = [
  'Sustainable revenue growth and profitability',
  'Enhanced operational efficiency and cost reduction',
  'Stronger market position and competitive advantage',
  'Improved decision-making with data-driven insights',
  'Scalable processes and organizational alignment',
  'Increased employee engagement and retention',
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="scroll-snap-section">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="neuro-badge text-primary mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Deliver Measurable
            <span className="text-primary"> Business Impact</span>
          </h2>
          <p className="text-xl text-muted">
            We don't just provide advice—we partner with you to achieve tangible outcomes 
            that drive long-term success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="neuro-card p-8 text-center">
                <div className="neuro-icon w-16 h-16 mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {benefit.stat}
                </div>
                <div className="text-lg font-semibold mb-3">{benefit.label}</div>
                <p className="text-sm text-muted">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Outcomes Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="neuro-card p-10">
            <h3 className="text-2xl font-bold mb-6">Client Success Metrics</h3>
            <div className="space-y-6">
              {[
                { label: 'Q1 Growth', value: 82 },
                { label: 'Q2 Growth', value: 95 },
                { label: 'Q3 Growth', value: 88 },
                { label: 'Q4 Growth', value: 97 },
              ].map((metric, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{metric.label}</span>
                    <span className="text-primary">{metric.value}%</span>
                  </div>
                  <div className="neuro-inset h-3 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Outcomes List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">
              What You'll Achieve
            </h3>
            <div className="space-y-4">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="neuro-icon w-8 h-8 flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg">{outcome}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#pricing" className="btn-primary inline-flex items-center gap-2">
                View Our Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
