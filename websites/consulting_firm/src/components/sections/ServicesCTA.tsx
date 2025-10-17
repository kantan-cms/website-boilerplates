import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="grid-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to discuss how our services can help
            your business achieve its strategic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary bg-white text-blue-600 hover:bg-blue-50"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/work"
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
