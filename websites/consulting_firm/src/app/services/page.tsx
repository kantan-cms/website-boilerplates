import { Header, Footer } from '@/components';
import PageHero from '@/components/sections/PageHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ServicesCTA from '@/components/sections/ServicesCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Corporate Consultancy',
  description: 'Comprehensive consulting services including strategy, digital transformation, operations excellence, and risk management.',
};

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Our Services"
          title="Comprehensive Consulting"
          titleAccent="Solutions for Your Business"
          description="From strategy to execution, we provide end-to-end consulting services tailored to your unique business challenges and opportunities."
        />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
