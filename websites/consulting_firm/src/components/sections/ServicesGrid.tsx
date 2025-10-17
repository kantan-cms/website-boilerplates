import { Lightbulb, Zap, TrendingUp, Shield, Users, Globe, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'strategy',
    icon: Lightbulb,
    title: 'Strategy Consulting',
    description: 'Develop winning strategies that drive sustainable competitive advantage.',
    features: [
      'Corporate strategy development',
      'Business model innovation',
      'Market entry strategy',
      'Competitive analysis',
      'Growth strategy planning',
    ],
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'digital',
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge technology and digital solutions.',
    features: [
      'Digital roadmap development',
      'Technology stack optimization',
      'Cloud migration strategy',
      'Data analytics & AI implementation',
      'Customer experience transformation',
    ],
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'operations',
    icon: TrendingUp,
    title: 'Operations Excellence',
    description: 'Optimize processes and drive efficiency across your organization.',
    features: [
      'Process optimization',
      'Supply chain management',
      'Performance improvement',
      'Lean Six Sigma implementation',
      'Cost reduction programs',
    ],
    color: 'from-green-500 to-green-700',
  },
  {
    id: 'risk',
    icon: Shield,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate business risks with proven frameworks.',
    features: [
      'Enterprise risk assessment',
      'Compliance & regulatory support',
      'Business continuity planning',
      'Cybersecurity strategy',
      'Crisis management',
    ],
    color: 'from-red-500 to-red-700',
  },
  {
    id: 'change',
    icon: Users,
    title: 'Change Management',
    description: 'Lead successful organizational transformation with structured programs.',
    features: [
      'Change readiness assessment',
      'Stakeholder engagement',
      'Communication planning',
      'Training & development',
      'Culture transformation',
    ],
    color: 'from-orange-500 to-orange-700',
  },
  {
    id: 'expansion',
    icon: Globe,
    title: 'Market Expansion',
    description: 'Enter new markets successfully with data-driven strategies.',
    features: [
      'Market analysis & research',
      'Go-to-market strategy',
      'Partnership development',
      'International expansion',
      'M&A due diligence',
    ],
    color: 'from-teal-500 to-teal-700',
  },
];

export default function ServicesGrid() {
  return (
    <section className="section bg-white dark:bg-slate-900">
      <div className="grid-container">
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="heading-2 text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="body-large text-slate-600 dark:text-slate-300 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex btn-primary"
                  >
                    Learn More
                  </Link>
                </div>

                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="card-elevated p-8">
                    <div className={`aspect-video bg-gradient-to-br ${service.color} rounded flex items-center justify-center`}>
                      <Icon className="w-24 h-24 text-white opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
