import { Zap, Shield, Target, Rocket, BarChart3, HeadphonesIcon, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Data-driven strategies aligned with your business objectives and market opportunities.',
  },
  {
    icon: Rocket,
    title: 'Growth Acceleration',
    description: 'Proven frameworks to scale operations and capture market share rapidly.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time insights and KPI tracking to measure success and optimize continuously.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies to protect your investments.',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modern technology adoption and process automation to enhance efficiency.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: '24/7 expert guidance and hands-on assistance throughout your transformation journey.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-snap-section">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-button px-4 py-2 mb-6">
            <span className="text-sm font-semibold gradient-text">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Solutions for
            <span className="gradient-text block mt-2">Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From strategy to execution, we provide end-to-end consulting services 
            tailored to your unique challenges and growth objectives.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="gradient-border p-8 group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Discuss Your Needs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
