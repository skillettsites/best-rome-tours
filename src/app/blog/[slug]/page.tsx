import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import { getTourBySlug } from '@/data/tours';
import { blogArticleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SITE_URL, SITE_CITY } from '@/lib/constants';
import { displayCopy } from '@/lib/currency';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';
import InlineTourCTA from '@/components/ui/InlineTourCTA';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: displayCopy(post.metaTitle),
    description: displayCopy(post.metaDescription),
    alternates: { canonical: url },
    openGraph: {
      title: displayCopy(post.metaTitle),
      description: displayCopy(post.metaDescription),
      url,
      type: 'article',
      images: [{ url: post.heroImage, alt: post.heroImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayCopy(post.metaTitle),
      description: displayCopy(post.metaDescription),
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedTours = post.relatedTourSlugs
    .map((s) => getTourBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  const relatedPosts = post.relatedBlogSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 3);

  return (
    <>
      {[
        blogArticleSchema(post),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ]),
        faqSchema(post.faqs),
      ]
        .filter(Boolean)
        .map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <header className="mt-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{displayCopy(post.title)}</h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{displayCopy(post.excerpt)}</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
            <span>
              Published{' '}
              {new Date(post.publishedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            {post.updatedDate !== post.publishedDate && (
              <>
                <span>&middot;</span>
                <span>
                  Updated{' '}
                  {new Date(post.updatedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </>
            )}
          </div>
          <div className="mt-4">
            <AffiliateDisclosure />
          </div>
        </header>

        {/* Hero image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Top pick booking CTA */}
        {relatedTours.length > 0 && <InlineTourCTA tours={relatedTours.slice(0, 1)} />}

        {/* Blog content */}
        <div className="guide-content" dangerouslySetInnerHTML={{ __html: displayCopy(post.content) }} />

        {/* Recommended tours referenced in this post */}
        {relatedTours.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tours mentioned in this guide</h2>
            <InlineTourCTA tours={relatedTours} />
          </section>
        )}

        {/* FAQ */}
        <FAQ faqs={post.faqs} />

        {/* Related blog posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">More {SITE_CITY} decision guides</h2>
            <ul className="space-y-3">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-green-700 font-semibold hover:underline">
                    {displayCopy(p.title)}
                  </Link>
                  <p className="text-sm text-gray-500 mt-0.5">{displayCopy(p.excerpt)}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-800 p-6 sm:p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Not sure which {SITE_CITY} tour to book?</h2>
          <p className="text-green-100 mb-6 max-w-lg mx-auto">
            Browse every {SITE_CITY} tour and ticket, ranked by real ratings and verified reviews, with free
            cancellation on most options.
          </p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold text-base px-8 py-3.5 rounded-xl hover:bg-green-50 transition-colors"
          >
            See all {SITE_CITY} tours &rarr;
          </Link>
        </div>
      </article>
    </>
  );
}
