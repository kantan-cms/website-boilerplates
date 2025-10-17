import { Header, Footer } from '@/components';
import PageHero from '@/components/sections/PageHero';
import NewsGrid from '@/components/sections/NewsGrid';
import NewsletterCTA from '@/components/sections/NewsletterCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Insights | Corporate Consultancy',
  description: 'Latest insights, thought leadership, and industry trends from our expert consultants.',
};

export default function News() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="News & Insights"
          title="Thought Leadership &"
          titleAccent="Industry Insights"
          description="Stay informed with the latest trends, best practices, and expert perspectives from our team of experienced consultants."
        />
        <NewsGrid />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
