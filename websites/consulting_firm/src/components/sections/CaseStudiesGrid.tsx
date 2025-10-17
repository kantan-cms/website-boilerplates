import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Sample case studies - in production, these would come from Kantan CMS
const caseStudies = [
  {
    id: 1,
    title: 'Global Retail Transformation',
    client: 'Fortune 500 Retailer',
    industry: 'Retail',
    challenge: 'Digital transformation and omnichannel strategy',
    results: [
      '35% increase in online sales',
      '50% reduction in operational costs',
      '2.5x improvement in customer satisfaction',
    ],
    tags: ['Digital Transformation', 'Strategy', 'Operations'],
  },
  {
    id: 2,
    title: 'Financial Services Modernization',
    client: 'Major Banking Institution',
    industry: 'Financial Services',
    challenge: 'Legacy system modernization and regulatory compliance',
    results: [
      '60% faster transaction processing',
      '100% compliance achievement',
      '$50M annual cost savings',
    ],
    tags: ['Technology', 'Risk Management', 'Compliance'],
  },
  {
    id: 3,
    title: 'Manufacturing Excellence Program',
    client: 'Global Manufacturing Leader',
    industry: 'Manufacturing',
    challenge: 'Supply chain optimization and operational efficiency',
    results: [
      '40% reduction in lead times',
      '25% improvement in quality metrics',
      '$120M cost savings over 3 years',
    ],
    tags: ['Operations', 'Supply Chain', 'Lean Six Sigma'],
  },
  {
    id: 4,
    title: 'Healthcare System Integration',
    client: 'Regional Healthcare Provider',
    industry: 'Healthcare',
    challenge: 'Post-merger integration and system consolidation',
    results: [
      'Successful integration of 15 facilities',
      '30% improvement in patient outcomes',
      '$75M in synergy realization',
    ],
    tags: ['M&A', 'Change Management', 'Integration'],
  },
  {
    id: 5,
    title: 'Technology Scale-Up Strategy',
    client: 'SaaS Unicorn',
    industry: 'Technology',
    challenge: 'Rapid scaling and international expansion',
    results: [
      'Entry into 12 new markets',
      '300% revenue growth in 2 years',
      'IPO readiness achieved',
    ],
    tags: ['Strategy', 'Market Expansion', 'Growth'],
  },
  {
    id: 6,
    title: 'Energy Sector Sustainability',
    client: 'Energy Corporation',
    industry: 'Energy',
    challenge: 'Sustainability transformation and carbon reduction',
    results: [
      '45% reduction in carbon emissions',
      'New revenue streams from green energy',
      'Industry leadership in sustainability',
    ],
    tags: ['Sustainability', 'Strategy', 'Innovation'],
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="section bg-slate-50 dark:bg-slate-800">
      <div className="grid-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="card p-8 hover:elevation-4 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200 text-xs font-medium uppercase tracking-wider rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="heading-3 text-slate-900 dark:text-white mb-2">
                  {study.title}
                </h3>
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {study.client} • {study.industry}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Challenge
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {study.challenge}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Results
                </div>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
