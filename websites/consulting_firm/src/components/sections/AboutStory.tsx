export default function AboutStory() {
  const stats = [
    { value: '28+', label: 'Years Experience' },
    { value: '500+', label: 'Client Companies' },
    { value: '150+', label: 'Expert Consultants' },
    { value: '45', label: 'Countries Served' },
  ];

  return (
    <section className="section bg-white dark:bg-slate-900">
      <div className="grid-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-2 text-slate-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-300">
              <p>
                Corporate Consultancy was founded on the belief that every business,
                regardless of size or industry, deserves access to world-class strategic
                guidance and operational expertise.
              </p>
              <p>
                What started as a small team of passionate consultants has grown into
                a global organization serving Fortune 500 companies and emerging market
                leaders across six continents.
              </p>
              <p>
                Our success is built on a simple principle: we succeed only when our
                clients succeed. This philosophy drives everything we do, from the way
                we structure our engagements to the metrics we use to measure impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
