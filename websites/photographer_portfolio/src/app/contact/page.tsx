'use client';

import PageHeroSection from '@/components/sections/PageHeroSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import ContactFormComponent from '@/components/sections/ContactFormComponent';
import FAQSection from '@/components/sections/FAQSection';

export default function ContactPage() {
  return (
    <>
      <section className="min-h-[50vh] flex items-center px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Get in Touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Let's Capture Your Story
          </h1>

          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            We'd love to hear about your upcoming event. Fill out the form below or reach out directly, and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ContactInfoSection />
            <div className="lg:col-span-2">
              <ContactFormComponent />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
