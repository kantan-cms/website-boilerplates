'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText = 'View Our Work',
  ctaLink = '/work',
  imageSrc = '/hero-placeholder.jpg',
}: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Asymmetrical grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text content - offset for asymmetry */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:col-start-1 space-y-6"
          >
            {subtitle && (
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                {subtitle}
              </p>
            )}

            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={ctaLink}
                className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent inline-flex items-center justify-center group"
              >
                {ctaText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              <Link
                href="/contact"
                className="neu-button px-8 py-4 font-semibold text-secondary hover:text-accent inline-flex items-center justify-center"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Image - offset and overlapping for asymmetry */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="neu-card-lg p-2 overflow-hidden">
              <div className="aspect-[3/4] bg-secondary/20 rounded-2xl overflow-hidden">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
