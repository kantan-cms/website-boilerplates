'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'accent';
}

export default function CTASection({
  title,
  description,
  ctaText = 'Book Your Session',
  ctaLink = '/contact',
  variant = 'default',
}: CTASectionProps) {
  return (
    <section className="px-4 md:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className={`neu-card-lg p-12 md:p-16 text-center ${variant === 'accent' ? 'bg-accent/5' : ''}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <Link
            href={ctaLink}
            className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent inline-flex items-center group"
          >
            {ctaText}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
