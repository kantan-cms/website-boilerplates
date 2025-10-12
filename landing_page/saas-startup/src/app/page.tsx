import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Stats from '@/components/sections/Stats';
import Pricing from '@/components/sections/Pricing';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}
