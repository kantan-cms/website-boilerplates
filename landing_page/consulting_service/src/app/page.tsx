import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="scroll-snap-container">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
