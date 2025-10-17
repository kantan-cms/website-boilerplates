import { Metadata } from 'next';
import { getCollectionsRecord, getSortedCollectionsData } from '@/libs';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface NewsArticle {
  id?: string;
  slug: string;
  title: string;
  publishDate: string;
  excerpt: string;
  featuredImage?: string;
  category?: string;
  author?: string;
  content: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  try {
    const articles = getSortedCollectionsData('news', 'publishDate') as NewsArticle[];
    return articles.map((article) => ({
      slug: article.slug || article.id || '',
    }));
  } catch (error) {
    // Return empty array if collection doesn't exist
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getCollectionsRecord('news', slug) as NewsArticle | null;

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Artistry Photography`,
    description: article.excerpt || `Read ${article.title} on Artistry Photography blog`,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getCollectionsRecord('news', slug) as NewsArticle | null;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-secondary mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/news" className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent inline-block">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  // Get related articles
  let relatedArticles: NewsArticle[] = [];
  try {
    const allArticles = getSortedCollectionsData('news', 'publishDate') as NewsArticle[];
    relatedArticles = allArticles
      .filter(item => item.slug !== slug)
      .slice(0, 3);
  } catch (error) {
    console.log('Could not fetch related articles');
  }

  return (
    <>
      {/* Article Header */}
      <section className="px-4 md:px-8 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to News
          </Link>

          <div className="space-y-6">
            {article.category && (
              <span className="inline-block neu-card-sm px-4 py-2 text-sm font-medium text-accent">
                {article.category}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-secondary">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2 text-accent" />
                <span>
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              {article.author && (
                <div className="flex items-center">
                  <span className="mr-2">By</span>
                  <span className="font-semibold text-foreground">{article.author}</span>
                </div>
              )}

              <button
                className="neu-button p-2 hover:text-accent transition-colors ml-auto"
                aria-label="Share article"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.featuredImage && (
        <section className="px-4 md:px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="neu-card-lg p-2 overflow-hidden">
              <div className="aspect-[16/9] bg-secondary/20 rounded-2xl overflow-hidden">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="neu-card p-8 md:p-12">
            <div className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-p:text-secondary prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:text-secondary prose-ol:text-secondary
              prose-blockquote:border-l-accent prose-blockquote:text-secondary
              prose-img:rounded-xl prose-img:shadow-lg
            ">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="px-4 md:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.slug} href={`/news/${relatedArticle.slug}`}>
                  <div className="neu-card overflow-hidden group cursor-pointer h-full">
                    {/* Image */}
                    {relatedArticle.featuredImage && (
                      <div className="relative aspect-[16/10] bg-secondary/20">
                        <img
                          src={relatedArticle.featuredImage}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {relatedArticle.category && (
                          <div className="absolute top-4 left-4">
                            <span className="neu-card-sm px-3 py-1 text-xs font-medium text-accent">
                              {relatedArticle.category}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-secondary text-sm mb-3">
                        <Calendar size={14} className="mr-2" />
                        {new Date(relatedArticle.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>

                      <p className="text-secondary leading-relaxed line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto neu-card-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Book Your Session?
          </h2>

          <p className="text-lg text-secondary mb-8">
            Let's create beautiful memories together. Get in touch to discuss your photography needs.
          </p>

          <Link
            href="/contact"
            className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
