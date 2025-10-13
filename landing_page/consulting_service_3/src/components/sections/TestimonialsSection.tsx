import { Quote, Star, Building2 } from 'lucide-react';

const testimonials = [
  {
    quote: "ProConsult transformed our business strategy completely. Their hands-on approach and deep industry knowledge helped us achieve 250% revenue growth in just 18 months. Truly exceptional partners.",
    author: "Robert Thompson",
    role: "CEO",
    company: "TechGrowth Solutions",
    rating: 5,
  },
  {
    quote: "The ROI has been outstanding. Not only did they help us streamline operations, but they also guided us through a successful market expansion. Their expertise was invaluable.",
    author: "Lisa Chen",
    role: "COO",
    company: "Enterprise Dynamics",
    rating: 5,
  },
  {
    quote: "What sets ProConsult apart is their commitment to our success. They didn't just deliver a strategy—they stayed with us through implementation and beyond. Results speak for themselves.",
    author: "David Morrison",
    role: "Founder & CEO",
    company: "Innovation Partners LLC",
    rating: 5,
  },
];

const metrics = [
  { value: '500+', label: 'Clients Served' },
  { value: '95%', label: 'Retention Rate' },
  { value: '$3B+', label: 'Value Created' },
  { value: '20 Years', label: 'Experience' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-snap-section">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="neuro-badge text-primary mb-6">
            <Building2 className="w-4 h-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by
            <span className="text-primary"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted">
            Hear from the executives who've transformed their businesses with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="neuro-card p-8 space-y-6">
              {/* Quote Icon */}
              <div className="neuro-icon w-12 h-12">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-300">
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-muted">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="neuro-card p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
