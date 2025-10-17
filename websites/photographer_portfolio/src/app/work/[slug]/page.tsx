import { Metadata } from 'next';
import { getCollectionsRecord, getSortedCollectionsData } from '@/libs';
import { CTASection } from '@/components';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface PortfolioItem {
  id?: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  location?: string;
  client?: string;
  featuredImage: string;
  description: string;
  content: string;
  gallery?: string[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  try {
    const items = getSortedCollectionsData('portfolio', 'date') as PortfolioItem[];
    return items.map((item) => ({
      slug: item.slug || item.id || '',
    }));
  } catch (error) {
    // Return empty array if collection doesn't exist
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCollectionsRecord('portfolio', slug) as PortfolioItem | null;

  if (!item) {
    return {
      title: 'Portfolio Item Not Found',
    };
  }

  return {
    title: `${item.title} | Artistry Photography`,
    description: item.description || `View ${item.title} in our photography portfolio`,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCollectionsRecord('portfolio', slug) as PortfolioItem | null;

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Portfolio Item Not Found</h1>
          <p className="text-secondary mb-8">The portfolio item you're looking for doesn't exist.</p>
          <Link href="/work" className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent inline-block">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Sample gallery images if not provided
  const galleryImages = item.gallery || [
    item.featuredImage,
    '/placeholder-1.jpg',
    '/placeholder-2.jpg',
    '/placeholder-3.jpg',
    '/placeholder-4.jpg',
    '/placeholder-5.jpg',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="px-4 md:px-8 pt-32 pb-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block neu-card-sm px-4 py-2 text-sm font-medium text-accent">
                {item.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {item.title}
              </h1>

              {item.description && (
                <p className="text-xl text-secondary leading-relaxed">
                  {item.description}
                </p>
              )}

              <div className="flex flex-wrap gap-6 pt-4">
                {item.date && (
                  <div className="flex items-center text-secondary">
                    <Calendar size={20} className="mr-2 text-accent" />
                    <span>{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                )}

                {item.location && (
                  <div className="flex items-center text-secondary">
                    <MapPin size={20} className="mr-2 text-accent" />
                    <span>{item.location}</span>
                  </div>
                )}

                {item.client && (
                  <div className="flex items-center text-secondary">
                    <Users size={20} className="mr-2 text-accent" />
                    <span>{item.client}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="neu-card-lg p-2">
              <div className="aspect-[4/5] bg-secondary/20 rounded-2xl overflow-hidden">
                <img
                  src={item.featuredImage}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {item.content && (
        <section className="px-4 md:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="neu-card p-8 md:p-12 prose prose-lg max-w-none">
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`neu-card overflow-hidden ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`
                  relative bg-secondary/20
                  ${index % 5 === 0 ? 'aspect-square' : 'aspect-[4/5]'}
                `}>
                  <img
                    src={image}
                    alt={`${item.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/work"
            className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent inline-block"
          >
            View More Work
          </Link>
        </div>
      </section>

      <CTASection
        title="Inspired by This Work?"
        description="Let's create something equally beautiful for your special day. Get in touch to discuss your photography needs."
        ctaText="Start Your Project"
        ctaLink="/contact"
      />
    </>
  );
}
