const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Weddings' },
  { value: '300+', label: 'Events' },
  { value: '100%', label: 'Satisfaction' },
];

export default function StatsSection() {
  return (
    <section className="px-4 md:px-8 py-20">
      <div className="max-w-5xl mx-auto neu-card-lg p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          A Decade of Excellence
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
