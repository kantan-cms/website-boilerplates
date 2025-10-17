import { Metadata } from 'next';
import { getSortedCollectionsData } from '@/libs';
import { GallerySection, CTASection } from '@/components';

export const metadata: Metadata = {
  title: 'Portfolio | Artistry Photography',
  description: 'Explore our portfolio of wedding and event photography. Real weddings, real moments, real emotions.',
};

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  featuredImage: string;
  date: string;
  slug: string;
}

export default function WorkPage() {
  // Fetch portfolio items from CMS
  let portfolioItems: PortfolioItem[] = [];

  try {
    const items = getSortedCollectionsData('portfolio', 'date') as PortfolioItem[];
    portfolioItems = items;
  } catch (error) {
    console.log('Portfolio collection not found, using fallback data');
    // Fallback data for development
    portfolioItems = [
      {
        id: '1',
        title: 'Elegant Garden Wedding',
        category: 'Wedding',
        featuredImage: '/portfolio/wedding-1.jpg',
        date: '2024-06-15',
        slug: 'elegant-garden-wedding',
      },
      {
        id: '2',
        title: 'Sunset Beach Ceremony',
        category: 'Wedding',
        featuredImage: '/portfolio/wedding-2.jpg',
        date: '2024-05-20',
        slug: 'sunset-beach-ceremony',
      },
      {
        id: '3',
        title: 'Corporate Gala Event',
        category: 'Event',
        featuredImage: '/portfolio/event-1.jpg',
        date: '2024-04-10',
        slug: 'corporate-gala-event',
      },
      {
        id: '4',
        title: 'Rustic Barn Wedding',
        category: 'Wedding',
        featuredImage: '/portfolio/wedding-3.jpg',
        date: '2024-03-25',
        slug: 'rustic-barn-wedding',
      },
      {
        id: '5',
        title: 'Charity Fundraiser',
        category: 'Event',
        featuredImage: '/portfolio/event-2.jpg',
        date: '2024-02-14',
        slug: 'charity-fundraiser',
      },
      {
        id: '6',
        title: 'Modern City Wedding',
        category: 'Wedding',
        featuredImage: '/portfolio/wedding-4.jpg',
        date: '2024-01-30',
        slug: 'modern-city-wedding',
      },
    ];
  }

  // Transform data for GallerySection component
  const galleryItems = portfolioItems.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    imageSrc: item.featuredImage,
    slug: item.slug,
  }));

  // Filter by category
  const weddingItems = galleryItems.filter(item => item.category === 'Wedding');
  const eventItems = galleryItems.filter(item => item.category === 'Event');

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Our Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Stories We've Captured
          </h1>

          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Each wedding and event is unique, and we're honored to preserve these precious moments. Browse through our recent work and see the stories we've told.
          </p>
        </div>
      </section>

      {/* All Portfolio Items */}
      <GallerySection
        title="All Work"
        description="Explore our complete portfolio of weddings and events"
        items={galleryItems}
        columns={3}
      />

      {/* Wedding Portfolio */}
      {weddingItems.length > 0 && (
        <section className="px-4 md:px-8 py-20 bg-gradient-to-b from-transparent to-background/50">
          <GallerySection
            title="Wedding Photography"
            description="Celebrating love stories with elegance and artistry"
            items={weddingItems}
            columns={3}
          />
        </section>
      )}

      {/* Event Portfolio */}
      {eventItems.length > 0 && (
        <GallerySection
          title="Event Photography"
          description="Professional coverage for memorable occasions"
          items={eventItems}
          columns={3}
        />
      )}

      {/* Stats Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-5xl mx-auto neu-card-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Trusted by Hundreds of Clients
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-secondary">Weddings Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">300+</div>
              <div className="text-secondary">Events Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50K+</div>
              <div className="text-secondary">Photos Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-secondary">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Like What You See?"
        description="Let's create something beautiful together. Contact us to discuss your photography needs and check our availability."
        ctaText="Book Your Session"
        ctaLink="/contact"
      />
    </>
  );
}
