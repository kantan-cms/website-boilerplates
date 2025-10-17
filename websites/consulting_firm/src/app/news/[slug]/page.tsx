import { Header, Footer } from '@/components';
import { getCollectionsRecord } from '@/libs/getCollectionsRecord';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Article {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  publishDate: string;
  category: string;
  author: string;
  readTime: string;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getCollectionsRecord('news', slug) as Article | null;

  if (!article) {
    return {
      title: 'Article Not Found | Corporate Consultancy',
    };
  }

  return {
    title: `${article.title} | Corporate Consultancy`,
    description: article.excerpt,
  };
}

export default async function NewsArticle({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const article = getCollectionsRecord('news', slug) as Article | null;

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="section-compact bg-slate-50 dark:bg-slate-800">
          <div className="grid-container">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="section-compact bg-white dark:bg-slate-900">
          <div className="grid-container">
            <article className="max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200 text-xs font-medium uppercase tracking-wider rounded mb-6">
                  {article.category}
                </span>
                <h1 className="heading-1 text-slate-900 dark:text-white mb-6">
                  {article.title}
                </h1>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 pb-8 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(article.publishDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg prose-slate dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                  prose-p:text-slate-600 dark:prose-p:text-slate-300
                  prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 dark:prose-strong:text-white
                  prose-ul:text-slate-600 dark:prose-ul:text-slate-300
                  prose-ol:text-slate-600 dark:prose-ol:text-slate-300"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Articles
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="grid-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Want to Learn More?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us to discuss how our expertise can help your organization.
              </p>
              <Link
                href="/contact"
                className="inline-flex btn-primary bg-white text-blue-600 hover:bg-blue-50"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
