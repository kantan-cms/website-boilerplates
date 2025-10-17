import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function WorkCTA() {
  return (
    <section className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="grid-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help your organization achieve
            transformational results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-primary bg-white text-blue-600 hover:bg-blue-50"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
