export default function ApproachSection() {
  const steps = [
    {
      title: 'Pre-Event Consultation',
      description: 'We take time to understand your vision, style preferences, and must-have shots.',
    },
    {
      title: 'Day-of Coverage',
      description: 'Professional, unobtrusive documentation of every important moment and emotion.',
    },
    {
      title: 'Post-Production',
      description: 'Careful editing and retouching to deliver polished, beautiful final images.',
    },
  ];

  return (
    <section className="px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="neu-card-lg p-2 lg:order-1">
            <div className="aspect-[4/3] bg-secondary/20 rounded-2xl overflow-hidden">
              <img
                src="/approach.jpg"
                alt="Our Approach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Approach
            </h2>

            <p className="text-lg text-secondary leading-relaxed">
              We believe that the best photographs come from authentic moments and genuine connections. Our approach is collaborative, unobtrusive, and focused on capturing the natural flow of your special day.
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="neu-card-sm p-6">
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
