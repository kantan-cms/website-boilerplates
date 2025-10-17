'use client';

import { HeroSection, GallerySection, ServicesSection, CTASection } from '@/components';
import { Camera, Heart, Users, Sparkles } from 'lucide-react';

export default function Home() {
  // Sample portfolio items for homepage preview
  const featuredWork = [
    {
      id: '1',
      title: 'Sunset Wedding',
      category: 'Wedding',
      imageSrc: '/portfolio/wedding-1.jpg',
      slug: 'sunset-wedding',
    },
    {
      id: '2',
      title: 'Corporate Gala',
      category: 'Event',
      imageSrc: '/portfolio/event-1.jpg',
      slug: 'corporate-gala',
    },
    {
      id: '3',
      title: 'Intimate Ceremony',
      category: 'Wedding',
      imageSrc: '/portfolio/wedding-2.jpg',
      slug: 'intimate-ceremony',
    },
    {
      id: '4',
      title: 'Garden Party',
      category: 'Event',
      imageSrc: '/portfolio/event-2.jpg',
      slug: 'garden-party',
    },
    {
      id: '5',
      title: 'Beach Wedding',
      category: 'Wedding',
      imageSrc: '/portfolio/wedding-3.jpg',
      slug: 'beach-wedding',
    },
    {
      id: '6',
      title: 'Anniversary Celebration',
      category: 'Event',
      imageSrc: '/portfolio/event-3.jpg',
      slug: 'anniversary-celebration',
    },
  ];

  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Capturing every precious moment of your special day with artistic elegance and attention to detail.',
    },
    {
      icon: Users,
      title: 'Event Photography',
      description: 'Professional coverage for corporate events, parties, and special occasions that tell your story.',
    },
    {
      icon: Camera,
      title: 'Portrait Sessions',
      description: 'Intimate portrait photography that reveals personality and creates timeless memories.',
    },
    {
      icon: Sparkles,
      title: 'Engagement Shoots',
      description: 'Romantic and creative engagement photography that celebrates your love story.',
    },
  ];

  return (
    <>
      <HeroSection
        subtitle="Professional Photography"
        title="Capturing Moments That Last Forever"
        description="Elegant wedding and event photography that tells your unique story. We specialize in creating timeless images filled with emotion, beauty, and authenticity."
        ctaText="View Portfolio"
        ctaLink="/work"
      />

      <ServicesSection
        title="Our Services"
        description="Professional photography tailored to your vision and needs"
        services={services}
      />

      <GallerySection
        title="Featured Work"
        description="A glimpse into our recent projects and the stories we've had the privilege to capture"
        items={featuredWork}
        columns={3}
      />

      <section className="px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="neu-card-lg p-2 lg:order-2">
              <div className="aspect-square bg-secondary/20 rounded-2xl overflow-hidden">
                <img
                  src="/about-preview.jpg"
                  alt="About Artistry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 lg:order-1">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                About Us
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Visual Storytelling Through Art
              </h2>

              <p className="text-lg text-secondary leading-relaxed">
                With over a decade of experience, we believe that every moment deserves to be captured with artistic vision and genuine emotion. Our approach combines technical excellence with creative storytelling to create images that resonate for a lifetime.
              </p>

              <p className="text-lg text-secondary leading-relaxed">
                Whether it's an intimate wedding ceremony or a grand event, we're dedicated to preserving the authentic moments that make your story unique.
              </p>

              <a
                href="/about"
                className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent inline-block"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Capture Your Story?"
        description="Let's create beautiful memories together. Get in touch to discuss your photography needs and how we can bring your vision to life."
        ctaText="Book a Consultation"
        ctaLink="/contact"
      />
    </>
  );
}
