'use client';

import { TrendingUp, Users, Star, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Users',
    description: 'Small businesses trust us',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: TrendingUp,
    value: '250%',
    label: 'Average Growth',
    description: 'Revenue increase in year 1',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Customer Rating',
    description: 'Based on 2,000+ reviews',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Uptime',
    description: 'Rock-solid reliability',
    color: 'from-purple-400 to-pink-500',
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by Businesses
            <br />
            Around the World
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Join thousands of small businesses that have transformed their operations with our platform.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 text-center backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold mb-2 text-slate-700 dark:text-slate-200">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "This platform increased our sales by 300% in just 6 months. It's a game-changer!",
              author: "Sarah Chen",
              role: "CEO, TechStyle Boutique",
              avatar: "SC",
            },
            {
              quote: "The automation features saved us countless hours. We can finally focus on growth.",
              author: "Michael Rodriguez",
              role: "Founder, GrowthHub",
              avatar: "MR",
            },
            {
              quote: "Best investment we made this year. The ROI is incredible and support is amazing!",
              author: "Emily Thompson",
              role: "Owner, Craft & Co",
              avatar: "ET",
            },
          ].map((testimonial, index) => (
            <div key={index} className="glass-strong rounded-xl p-6 backdrop-blur-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-200 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
