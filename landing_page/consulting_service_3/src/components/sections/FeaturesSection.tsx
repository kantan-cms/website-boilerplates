import { Target, Zap, Shield, BarChart3, Users, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Comprehensive business strategy development aligned with your vision and market opportunities.',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Fast-track implementation with proven methodologies and dedicated support teams.',
  },
  {
    icon: BarChart3,
    title: 'Performance Optimization',
    description: 'Data-driven insights and continuous improvement to maximize operational efficiency.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Proactive identification and mitigation of business risks to protect your investments.',
  },
  {
    icon: Users,
    title: 'Team Development',
    description: 'Leadership coaching and organizational development to build high-performing teams.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Strategy',
    description: 'Foster innovation and competitive advantage through strategic technology adoption.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-snap-section">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="neuro-badge text-primary mb-6">
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Solutions for
            <span className="text-primary block mt-2">Business Excellence</span>
          </h2>
          <p className="text-xl text-muted">
            End-to-end consulting services tailored to your unique business challenges 
            and growth objectives.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="neuro-card p-8 group hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="neuro-icon w-14 h-14 mb-6 group-hover:animate-pulse-soft">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
