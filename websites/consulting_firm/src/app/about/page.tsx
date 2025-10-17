import { Header, Footer } from '@/components';
import PageHero from '@/components/sections/PageHero';
import AboutStory from '@/components/sections/AboutStory';
import MissionValues from '@/components/sections/MissionValues';
import LeadershipQuote from '@/components/sections/LeadershipQuote';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Corporate Consultancy',
  description: 'Learn about our mission, values, and commitment to helping enterprises achieve excellence.',
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge="About Us"
          title="Driving Business Excellence"
          titleAccent="Since 1995"
          description="For nearly three decades, we've been helping enterprise leaders navigate complex challenges, seize opportunities, and achieve transformational results."
        />
        <AboutStory />
        <MissionValues />
        <LeadershipQuote />
      </main>
      <Footer />
    </>
  );
}
