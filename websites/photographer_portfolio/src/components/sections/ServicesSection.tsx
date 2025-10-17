'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  title: string;
  description?: string;
  services: Service[];
}

export default function ServicesSection({
  title,
  description,
  services,
}: ServicesSectionProps) {
  return (
    <section className="px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Services Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  neu-card p-8
                  ${index % 4 === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                  ${index === 1 ? 'lg:mt-12' : ''}
                  ${index === 2 ? 'lg:-mt-6' : ''}
                `}
              >
                <div className="neu-card-sm w-16 h-16 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-accent" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
