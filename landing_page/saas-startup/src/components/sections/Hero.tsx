'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900" />

      {/* Decorative circles for glassmorphism effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 hover:glass-strong transition-all duration-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Trusted by 10,000+ small businesses
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-slate-900 dark:text-white">Grow Your Business</span>
          <br />
          <span className="gradient-text">10x Faster</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          The all-in-one platform that helps small business owners automate operations,
          boost sales, and scale effortlessly. No technical skills required.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="group w-full sm:w-auto px-8 py-4 glass-strong hover:glass text-slate-700 dark:text-slate-200 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            Get in Touch
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="font-medium">4.9/5 rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-600" />
          <span className="font-medium">No credit card required</span>
          <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-600" />
          <span className="font-medium">14-day free trial</span>
        </div>

        {/* Dashboard preview with glassmorphism */}
        <div className="mt-16 glass-strong rounded-2xl p-2 max-w-5xl mx-auto shadow-2xl">
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2" />
            <div className="p-8">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded" />
              </div>
              <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">Dashboard Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
