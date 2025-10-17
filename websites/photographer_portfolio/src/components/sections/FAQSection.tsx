const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 6-12 months in advance for weddings, especially for peak season dates. For other events, 3-6 months notice is ideal.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve the California area but are available for travel throughout the US and internationally for destination weddings.',
  },
  {
    question: 'How many photos will I receive?',
    answer: 'The number varies by package, but you can typically expect 50-100 edited photos per hour of coverage.',
  },
  {
    question: 'What is your editing style?',
    answer: 'We focus on natural, timeless editing that enhances the beauty of each moment while maintaining authentic colors and emotions.',
  },
];

export default function FAQSection() {
  return (
    <section className="px-4 md:px-8 py-20 bg-gradient-to-b from-transparent to-background/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="neu-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
