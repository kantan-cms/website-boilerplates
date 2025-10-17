import { Lightbulb, Users, TrendingUp, Shield, Globe, Zap } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Lightbulb,
    title: 'Strategy Consulting',
    description: 'Develop comprehensive business strategies that drive long-term growth and competitive advantage in your industry.',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize operations with cutting-edge technology solutions and digital-first approaches.',
  },
  {
    icon: TrendingUp,
    title: 'Operations Excellence',
    description: 'Optimize processes, reduce costs, and improve efficiency across your entire organization.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate business risks with proven frameworks and methodologies.',
  },
  {
    icon: Users,
    title: 'Change Management',
    description: 'Lead organizational transformation with structured change management programs.',
  },
  {
    icon: Globe,
    title: 'Market Expansion',
    description: 'Enter new markets successfully with data-driven market analysis and strategic planning.',
  },
];

export default function Expertise() {
  return (
    <section className="section bg-white dark:bg-slate-900">
      <div className="grid-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
              Our Expertise
            </span>
          </div>
          <h2 className="heading-2 text-slate-900 dark:text-white">
            Comprehensive Consulting Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end consulting services
            tailored to your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="card p-8 hover:elevation-4 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-3 text-slate-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
