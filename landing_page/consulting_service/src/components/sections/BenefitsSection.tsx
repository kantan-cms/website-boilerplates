'use client';

import { TrendingUp, Target, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Accelerated Growth',
    description: 'Proven strategies that drive 3x faster revenue growth and market expansion.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Strategic Clarity',
    description: 'Clear roadmaps and actionable plans aligned with your business objectives.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Quick wins and momentum-building initiatives that deliver immediate impact.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Identify and eliminate blind spots before they become costly problems.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Team Alignment',
    description: 'Get your entire organization rowing in the same direction.',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Measurable Results',
    description: 'Data-driven insights and KPIs that prove ROI and track progress.',
    color: 'from-red-400 to-rose-500',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-24 px-4 overflow-hidden scroll-snap-section">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold gradient-text">BENEFITS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Why Top Executives
            <br />
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We deliver tangible results that impact your bottom line and position you for long-term success.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
            Ready to see these results in your organization?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
