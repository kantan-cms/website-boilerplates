import { Header, Footer, Hero, Expertise, CTA } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
