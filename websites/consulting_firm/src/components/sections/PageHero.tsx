interface PageHeroProps {
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
}

export default function PageHero({ badge, title, titleAccent, description }: PageHeroProps) {
  return (
    <section className="section bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="grid-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
              {badge}
            </span>
          </div>
          <h1 className="heading-1 text-slate-900 dark:text-white">
            {title}
            {titleAccent && (
              <span className="block text-blue-600 dark:text-blue-400">
                {titleAccent}
              </span>
            )}
          </h1>
          <p className="body-large text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
