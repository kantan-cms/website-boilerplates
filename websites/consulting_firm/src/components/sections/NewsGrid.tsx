import { getSortedCollectionsData } from '@/libs/getSortedPostsData';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  category: string;
  author: string;
  readTime: string;
}

export default function NewsGrid() {
  const articles = getSortedCollectionsData('news', 'publishDate') as Article[];

  return (
    <section className="section bg-white dark:bg-slate-900">
      <div className="grid-container">
        {articles && articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="card overflow-hidden hover:elevation-4 transition-all duration-300 flex flex-col"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200 text-xs font-medium uppercase tracking-wider rounded">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow">
                  <h3 className="heading-3 text-slate-900 dark:text-white mb-3">
                    <Link
                      href={`/news/${article.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-slate-600 dark:text-slate-400">
              No articles available at this time. Check back soon for the latest insights!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
