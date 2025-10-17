import { Target, Award, Users, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every engagement, delivering exceptional results that exceed expectations.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics and transparent communication.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as true partners, combining our expertise with your insights to achieve success.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We embrace innovative thinking and cutting-edge methodologies to solve complex challenges.',
  },
];

export default function MissionValues() {
  return (
    <section className="section bg-slate-50 dark:bg-slate-800">
      <div className="grid-container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-slate-900 dark:text-white mb-6">
            Our Mission & Values
          </h2>
          <p className="body-large text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We are committed to helping organizations achieve lasting success through
            strategic insight, operational excellence, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-3 text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
