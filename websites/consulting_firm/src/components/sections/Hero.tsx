import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="grid-container section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-200 uppercase tracking-wide">
                Trusted by Fortune 500 Companies
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Transform Your Business
              <span className="block text-blue-600 dark:text-blue-400">
                With Expert Guidance
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              We partner with enterprise executives and decision makers to drive innovation,
              optimize operations, and achieve sustainable growth through data-driven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 btn-primary group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 btn-secondary"
              >
                View Case Studies
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  250+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  98%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  $2.5B+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Value Generated
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative card-elevated p-8 bg-white dark:bg-slate-800">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-bold mb-4">85%</div>
                  <div className="text-xl font-medium">
                    Average ROI Improvement
                  </div>
                  <div className="text-sm opacity-90 mt-2">
                    Within first 12 months
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 dark:bg-blue-900 rounded-full opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-800 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
