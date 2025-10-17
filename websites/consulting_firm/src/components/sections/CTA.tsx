import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Free 30-minute consultation',
  'Customized strategy roadmap',
  'Expert industry insights',
  'No obligation required',
];

export default function CTA() {
  return (
    <section className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="grid-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform
              <span className="block">Your Business?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a consultation with our expert team and discover how we can
              help you achieve your strategic goals.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-elevated bg-white dark:bg-slate-800 p-8 lg:p-12">
            <h3 className="heading-3 text-slate-900 dark:text-white mb-6">
              Get Started Today
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Join hundreds of successful companies that have partnered with us
              to drive growth and innovation.
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 btn-primary group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="w-full inline-flex items-center justify-center gap-2 btn-secondary text-slate-900 dark:text-white border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
