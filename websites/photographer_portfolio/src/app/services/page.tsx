'use client';

import { CTASection } from '@/components';
import { Heart, Users, Camera, Sparkles, Calendar, Clock, Image, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Complete coverage of your special day from preparation to reception. We capture every emotion, detail, and celebration.',
      features: [
        'Pre-wedding consultation',
        'Full day coverage',
        'Professional editing',
        'Online gallery',
        'High-resolution images',
        'Print rights included',
      ],
      imageSrc: '/services/wedding.jpg',
    },
    {
      icon: Users,
      title: 'Event Photography',
      description: 'Professional documentation of corporate events, galas, parties, and special occasions with a focus on atmosphere and key moments.',
      features: [
        'Event planning support',
        'On-site printing options',
        'Candid and posed shots',
        'Fast turnaround',
        'Social media ready',
        'Branding integration',
      ],
      imageSrc: '/services/events.jpg',
    },
    {
      icon: Sparkles,
      title: 'Engagement Sessions',
      description: 'Romantic photography sessions that capture the excitement and love of your engagement in stunning locations.',
      features: [
        'Location scouting',
        '2-hour session',
        'Outfit changes',
        'Natural and posed',
        'Save-the-date images',
        'Perfect for invitations',
      ],
      imageSrc: '/services/engagement.jpg',
    },
    {
      icon: Camera,
      title: 'Portrait Photography',
      description: 'Professional portrait sessions for individuals, couples, and families that showcase personality and connection.',
      features: [
        'Studio or outdoor',
        'Professional lighting',
        'Posing guidance',
        'Wardrobe consultation',
        'Family-friendly',
        'Pet-friendly sessions',
      ],
      imageSrc: '/services/portraits.jpg',
    },
  ];

  const additionalServices = [
    {
      icon: Calendar,
      title: 'Pre-Wedding Shoots',
      description: 'Get comfortable in front of the camera before your big day.',
    },
    {
      icon: Clock,
      title: 'Hourly Coverage',
      description: 'Flexible hourly packages for smaller events and occasions.',
    },
    {
      icon: Image,
      title: 'Photo Albums',
      description: 'Custom-designed luxury albums to preserve your memories.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Our Services
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Photography Packages Tailored to You
          </h1>

          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            From intimate ceremonies to grand celebrations, we offer comprehensive photography services designed to capture your unique story with elegance and artistry.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index > 0 ? 'pt-12 border-t border-secondary/10' : ''
                }`}
              >
                {/* Image */}
                <div className={`neu-card-lg p-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[4/3] bg-secondary/20 rounded-2xl overflow-hidden">
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="neu-card-sm w-16 h-16 flex items-center justify-center">
                    <Icon size={32} className="text-accent" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {service.title}
                  </h2>

                  <p className="text-lg text-secondary leading-relaxed">
                    {service.description}
                  </p>

                  <div className="neu-card-inset p-6 space-y-3">
                    <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent inline-block"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-4 md:px-8 py-20 bg-gradient-to-b from-transparent to-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Enhance your photography experience with our additional offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`neu-card p-8 ${index === 1 ? 'md:-mt-6' : ''}`}
                >
                  <div className="neu-card-sm w-14 h-14 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-secondary">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-secondary">
              From booking to delivery, here's what you can expect
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We discuss your vision, preferences, and package options in a complimentary consultation.',
              },
              {
                step: '02',
                title: 'Planning & Preparation',
                description: 'Timeline creation, location scouting, and detailed planning to ensure smooth execution.',
              },
              {
                step: '03',
                title: 'Photography Session',
                description: 'Professional, unobtrusive coverage that captures authentic moments and emotions.',
              },
              {
                step: '04',
                title: 'Post-Production',
                description: 'Careful selection, editing, and retouching to deliver stunning final images.',
              },
              {
                step: '05',
                title: 'Delivery & Support',
                description: 'Online gallery delivery with print ordering options and ongoing support.',
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className={`neu-card p-8 ${index % 2 === 1 ? 'md:ml-12' : ''}`}
              >
                <div className="flex items-start gap-6">
                  <div className="neu-card-sm w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent">{item.step}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Book Your Session?"
        description="Let's discuss your photography needs and create a customized package that's perfect for your event."
        ctaText="Contact Us Today"
        ctaLink="/contact"
      />
    </>
  );
}
