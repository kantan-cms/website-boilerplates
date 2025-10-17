import { Metadata } from 'next';
import { getSortedCollectionsData } from '@/libs';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Updates | Artistry Photography',
  description: 'Latest news, photography tips, and behind-the-scenes insights from Artistry Photography.',
};

interface NewsArticle {
  id: string;
  title: string;
  publishDate: string;
  excerpt: string;
  featuredImage?: string;
  category?: string;
  slug: string;
}

export default function NewsPage() {
  // Fetch news articles from CMS
  let articles: NewsArticle[] = [];

  try {
    const items = getSortedCollectionsData('news', 'publishDate') as NewsArticle[];
    articles = items;
  } catch (error) {
    console.log('News collection not found, using fallback data');
    // Fallback data for development
    articles = [
      {
        id: '1',
        title: 'Top 10 Tips for Perfect Wedding Photos',
        publishDate: '2024-09-15',
        excerpt: 'Discover the essential tips and tricks that will help you prepare for your wedding photography session and ensure stunning results.',
        featuredImage: '/news/tips.jpg',
        category: 'Tips & Advice',
        slug: 'top-10-tips-wedding-photos',
      },
      {
        id: '2',
        title: 'Behind the Scenes: Summer Wedding Season',
        publishDate: '2024-08-20',
        excerpt: 'Take a look behind the scenes of our busiest wedding season yet. See how we prepare and what goes into creating magical moments.',
        featuredImage: '/news/behind-scenes.jpg',
        category: 'Behind the Scenes',
        slug: 'behind-scenes-summer-wedding',
      },
      {
        id: '3',
        title: 'Choosing the Perfect Wedding Photographer',
        publishDate: '2024-07-10',
        excerpt: 'A comprehensive guide to selecting the right photographer for your special day. Learn what questions to ask and what to look for.',
        featuredImage: '/news/choosing.jpg',
        category: 'Tips & Advice',
        slug: 'choosing-perfect-photographer',
      },
      {
        id: '4',
        title: 'Featured: Sarah and Michael Garden Wedding',
        publishDate: '2024-06-05',
        excerpt: 'We are thrilled to share highlights from Sarah and Michael beautiful garden wedding. A day filled with love, laughter, and stunning florals.',
        featuredImage: '/news/featured-wedding.jpg',
        category: 'Featured Work',
        slug: 'sarah-michael-garden-wedding',
      },
      {
        id: '5',
        title: 'New Equipment: Elevating Our Photography',
        publishDate: '2024-05-15',
        excerpt: 'Exciting news! We have upgraded our equipment to bring you even better image quality and creative possibilities.',
        featuredImage: '/news/equipment.jpg',
        category: 'Studio Updates',
        slug: 'new-equipment-update',
      },
      {
        id: '6',
        title: 'Planning Your Engagement Photo Session',
        publishDate: '2024-04-20',
        excerpt: 'Everything you need to know about planning the perfect engagement photo session, from location ideas to outfit suggestions.',
        featuredImage: '/news/engagement.jpg',
        category: 'Tips & Advice',
        slug: 'planning-engagement-session',
      },
    ];
  }

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            News & Updates
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Latest from Our Studio
          </h1>

          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Photography tips, behind-the-scenes stories, featured work, and studio updates to inspire and inform.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {articles.length > 0 && (
        <section className="px-4 md:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <Link href={`/news/${articles[0].slug}`}>
              <div className="neu-card-lg overflow-hidden group cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto bg-secondary/20">
                    <img
                      src={articles[0].featuredImage || '/placeholder.jpg'}
                      alt={articles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {articles[0].category && (
                      <div className="absolute top-6 left-6">
                        <span className="neu-card-sm px-4 py-2 text-sm font-medium text-accent">
                          {articles[0].category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center text-secondary text-sm mb-4">
                      <Calendar size={16} className="mr-2" />
                      {new Date(articles[0].publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {articles[0].title}
                    </h2>

                    <p className="text-lg text-secondary leading-relaxed mb-6">
                      {articles[0].excerpt}
                    </p>

                    <div className="inline-flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                      Read More
                      <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      {articles.length > 1 && (
        <section className="px-4 md:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Recent Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <Link key={article.id} href={`/news/${article.slug}`}>
                  <div className={`neu-card overflow-hidden group cursor-pointer h-full ${
                    index % 4 === 1 ? 'md:mt-8' : ''
                  }`}>
                    {/* Image */}
                    <div className="relative aspect-[16/10] bg-secondary/20">
                      <img
                        src={article.featuredImage || '/placeholder.jpg'}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {article.category && (
                        <div className="absolute top-4 left-4">
                          <span className="neu-card-sm px-3 py-1 text-xs font-medium text-accent">
                            {article.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-secondary text-sm mb-3">
                        <Calendar size={14} className="mr-2" />
                        {new Date(article.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-secondary leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="inline-flex items-center text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto neu-card-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>

          <p className="text-lg text-secondary mb-8">
            Subscribe to our newsletter for photography tips, special offers, and studio updates delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="neu-card-inset flex-1 px-6 py-4 text-foreground placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
              required
            />
            <button
              type="submit"
              className="neu-button px-8 py-4 font-semibold text-primary hover:text-accent whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
