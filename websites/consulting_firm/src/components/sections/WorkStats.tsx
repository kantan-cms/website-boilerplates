import { Building2, TrendingUp, DollarSign } from 'lucide-react';

export default function WorkStats() {
  const stats = [
    {
      icon: Building2,
      value: '500+',
      label: 'Projects Completed',
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Average ROI Improvement',
    },
    {
      icon: DollarSign,
      value: '$2.5B+',
      label: 'Value Generated',
    },
  ];

  return (
    <section className="section-compact bg-white dark:bg-slate-900">
      <div className="grid-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card p-8 text-center">
                <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400 uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
