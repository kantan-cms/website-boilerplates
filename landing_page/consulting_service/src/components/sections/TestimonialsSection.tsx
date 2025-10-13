'use client';

const testimonials = [
  {
    quote: "Working with this team transformed our business. We saw 300% revenue growth in just 18 months and completely reshaped our market position.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechVision Corp",
    image: "👩‍💼",
  },
  {
    quote: "The strategic insights and hands-on support were game-changing. They didn't just consult—they partnered with us to ensure success.",
    author: "Michael Rodriguez",
    role: "COO",
    company: "Global Solutions Inc",
    image: "👨‍💼",
  },
  {
    quote: "Best investment we've made. The ROI was immediate and the long-term value continues to compound. Our team is aligned and executing flawlessly.",
    author: "Jennifer Park",
    role: "Founder",
    company: "Innovate Labs",
    image: "👩‍🔬",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 px-4 scroll-snap-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block glass rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold gradient-text">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Trusted by Industry
            <br />
            <span className="gradient-text">Leaders Nationwide</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <span className="text-6xl text-indigo-600 dark:text-indigo-400 opacity-20">"</span>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Clients Served' },
            { value: '98%', label: 'Client Retention' },
            { value: '$2.5B+', label: 'Value Created' },
            { value: '3x', label: 'Avg ROI Increase' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
