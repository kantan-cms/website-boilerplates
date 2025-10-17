import { Metadata } from 'next';
import { CTASection } from '@/components';
import PageHeroSection from '@/components/sections/PageHeroSection';
import MissionSection from '@/components/sections/MissionSection';
import ValuesSection from '@/components/sections/ValuesSection';
import ApproachSection from '@/components/sections/ApproachSection';
import StatsSection from '@/components/sections/StatsSection';

export const metadata: Metadata = {
  title: 'About Us | Artistry Photography',
  description: 'Learn about our photography journey, approach, and the passion behind every image we create.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        badge="Our Story"
        title="Passionate About Visual Storytelling"
        description="Founded with a passion for capturing life's most precious moments, Artistry Photography has been serving couples and event planners for over a decade."
        imageSrc="/about-hero.jpg"
        imageAlt="About Artistry Photography"
      />

      <MissionSection
        title="Our Mission"
        primaryText="To create timeless photographs that tell authentic stories and preserve precious memories for generations to come. We believe in the power of imagery to evoke emotion, capture beauty, and celebrate life's most meaningful moments."
        secondaryText="Through a blend of technical expertise, artistic vision, and genuine care for our clients, we strive to deliver photography that exceeds expectations and stands the test of time."
      />

      <ValuesSection />

      <ApproachSection />

      <StatsSection />

      <CTASection
        title="Let's Create Beautiful Memories Together"
        description="Ready to work with us? We'd love to hear about your upcoming event and how we can capture your special moments."
        ctaText="Get Started"
        ctaLink="/contact"
      />
    </>
  );
}
