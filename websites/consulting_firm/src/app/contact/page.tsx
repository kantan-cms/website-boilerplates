'use client';

import { Header, Footer } from '@/components';
import PageHero from '@/components/sections/PageHero';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactFormSection from '@/components/sections/ContactFormSection';

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Contact Us"
          title="Let's Start a"
          titleAccent="Conversation"
          description="Ready to transform your business? Get in touch with our expert team to discuss your challenges and explore solutions."
        />

        <section className="section bg-white dark:bg-slate-900">
          <div className="grid-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="mb-8">
                  <h2 className="heading-3 text-slate-900 dark:text-white mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-8">
                    We're here to help. Reach out to us through any of these channels.
                  </p>
                </div>
                <ContactInfo />
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactFormSection />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
