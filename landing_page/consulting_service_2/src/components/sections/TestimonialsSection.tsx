import { Quote, Star, Building2 } from 'lucide-react';

const testimonials = [
  {
    quote: "Elite transformed our approach to growth. Their strategic insights and hands-on support helped us triple our revenue in 18 months. Exceptional team, exceptional results.",
    author: "Sarah Martinez",
    role: "CEO",
    company: "TechVentures Inc",
    rating: 5,
  },
  {
    quote: "The ROI was immediate and sustained. They didn't just give us a plan—they worked alongside our team to execute it. Our operational efficiency improved by 60% within 6 months.",
    author: "Michael Chen",
    role: "COO",
    company: "GrowthScale Partners",
    rating: 5,
  },
  {
    quote: "What impressed me most was their deep understanding of our industry and challenges. They brought fresh perspectives and proven methodologies that drove real change.",
    author: "Jennifer Brooks",
    role: "Founder",
    company: "Horizon Dynamics",
    rating: 5,
  },
];

const metrics = [
  { value: '750+', label: 'Companies Served' },
  { value: '92%', label: 'Client Retention' },
  { value: '$5B+', label: 'Value Generated' },
  { value: '15 Years', label: 'Industry Experience' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-snap-section">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-button px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold">Client Success</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by
            <span className="gradient-text"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See what our clients have to say about their transformation journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="glass-card p-8 space-y-6 relative">
              {/* Quote Icon */}
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="gradient-border p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
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
