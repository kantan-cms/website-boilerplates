'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  slug: string;
}

interface GallerySectionProps {
  title: string;
  description?: string;
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
}

export default function GallerySection({
  title,
  description,
  items,
  columns = 3,
}: GallerySectionProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

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

        {/* Asymmetrical Gallery Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index % 11 === 0 ? 'md:col-start-2' : ''}
              `}
            >
              <Link href={`/work/${item.slug}`}>
                <div className="neu-card overflow-hidden group cursor-pointer h-full">
                  <div className={`
                    relative overflow-hidden
                    ${index % 7 === 0 ? 'aspect-square' : 'aspect-[4/5]'}
                  `}>
                    <div className="absolute inset-0 bg-secondary/20">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-accent text-sm font-medium mb-1">
                          {item.category}
                        </p>
                        <h3 className="text-white text-xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
