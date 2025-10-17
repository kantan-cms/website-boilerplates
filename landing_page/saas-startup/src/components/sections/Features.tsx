'use client';

import { Zap, Shield, BarChart3, Users, Clock, Rocket } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Automation',
    description: 'Automate repetitive tasks and save 20+ hours per week. Focus on growing your business, not managing it.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your data is encrypted and protected with enterprise-grade security. SOC 2 compliant and GDPR ready.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Make data-driven decisions with intuitive dashboards and actionable insights at your fingertips.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team. Share projects, assign tasks, and track progress in real-time.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Get help whenever you need it. Our expert support team is always ready to assist you.',
    color: 'from-red-400 to-rose-500',
  },
  {
    icon: Rocket,
    title: 'Scale Effortlessly',
    description: 'Start small and grow big. Our platform scales with your business without breaking the bank.',
    color: 'from-indigo-400 to-purple-500',
  },
];

export default function Features() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold gradient-text">FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Everything You Need to
            <br />
            <span className="gradient-text">Succeed Online</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Powerful features designed specifically for small business owners who want to compete with the big players.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
            Join thousands of businesses already growing with our platform
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
}
