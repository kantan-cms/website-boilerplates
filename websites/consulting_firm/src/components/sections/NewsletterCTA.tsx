export default function NewsletterCTA() {
  return (
    <section className="section bg-slate-50 dark:bg-slate-800">
      <div className="grid-container">
        <div className="max-w-4xl mx-auto text-center card-elevated p-12">
          <h2 className="heading-2 text-slate-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="body-large text-slate-600 dark:text-slate-300 mb-8">
            Subscribe to our newsletter for the latest insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
