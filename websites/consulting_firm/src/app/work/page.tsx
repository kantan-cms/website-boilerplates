import { Header, Footer } from '@/components';
import PageHero from '@/components/sections/PageHero';
import WorkStats from '@/components/sections/WorkStats';
import CaseStudiesGrid from '@/components/sections/CaseStudiesGrid';
import WorkCTA from '@/components/sections/WorkCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Corporate Consultancy',
  description: 'Explore our portfolio of successful consulting engagements and client success stories.',
};

export default function Work() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="Our Work"
          title="Proven Results Across"
          titleAccent="Industries & Markets"
          description="Explore our portfolio of successful engagements and discover how we've helped leading organizations achieve transformational results."
        />
        <WorkStats />
        <CaseStudiesGrid />
        <WorkCTA />
      </main>
      <Footer />
    </>
  );
}
