import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getToursByCategory } from '@/data/tours';
import { categorySchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SITE_URL, SITE_CITY } from '@/lib/constants';
import { formatPrice, displayCopy } from '@/lib/currency';
import TourCard from '@/components/ui/TourCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import FAQ from '@/components/ui/FAQ';

// Answer-first blocks rendered below the tour grid. Each block is a real question
// searchers ask, answered in the opening sentence, with an internal link to the
// guide or decision post that covers it in full.
type SeoBlock = { heading: string; html: string };
const gbp = (amount: number) => formatPrice(amount, 'GBP');
const categorySeoBlocks: Record<string, SeoBlock[]> = {
  'skip-the-line': [
    {
      heading: 'Combo tours: are they worth it?',
      html: `<p>Yes in peak season, and the maths is simple. A Rome skip-the-line combo tour bundles neighbouring sites onto one ticket with one guide, so instead of buying the Colosseum on its own you get the Colosseum, the Roman Forum and Palatine Hill together from ${gbp(42)}. The Vatican equivalent threads the Museums, the Sistine Chapel and St Peter's Basilica into a single skip-the-line route from ${gbp(51)}, using the internal passage between the Sistine Chapel and the Basilica so you never rejoin the outdoor security line.</p>
<p>The premium over a plain timed ticket is usually small, and the queues it saves are not: the Colosseum standby line regularly runs to ninety minutes in July, with no shade. The full breakdown, including when a cheaper timed entry with an audio guide is the smarter buy, is in our guide to whether a <a href="/blog/rome-skip-the-line-combo-tour-worth-it">Rome skip-the-line combo tour</a> is worth it.</p>`,
    },
    {
      heading: 'Private skip-the-line options in Rome',
      html: `<p>Fully private skip-the-line tours exist in Rome, but they are the exception rather than the rule and they carry a real premium. In our ranked list the closest equivalents are small-group and VIP formats rather than one-to-one private guiding: the Colosseum with Arena Floor tours and ticket options from ${gbp(107)} runs a VIP arena visit in a group capped at ten, and the Rome VIP Private Golf Cart Experience from ${gbp(68)} is genuinely private, with a customised route, though it is a city sightseeing tour rather than a fast-track museum ticket.</p>
<p>If your reason for wanting private is speed rather than exclusivity, a standard skip-the-line ticket already does most of the work, since the queue-jump is built into the ticket and not into the group size. Weigh it up in the <a href="/blog/rome-skip-the-line-combo-tour-worth-it">Rome skip-the-line combo tour</a> verdict, or read the practical, attraction-by-attraction walkthrough in our guide to <a href="/guides/skip-the-line-rome">skip-the-line tickets in Rome</a>.</p>`,
    },
  ],
  'guided-tours': [
    {
      heading: 'How much does a guided tour of Rome cost?',
      html: `<p>Guided tours in Rome start from around ${gbp(15)} for a budget group tour of the Colosseum, Roman Forum and Palatine Hill, sit at roughly ${gbp(42)} to ${gbp(59)} for the standard guided tours of the Colosseum and the Vatican, and rise to ${gbp(98)} to ${gbp(107)} for VIP small-group formats with arena floor or underground access. The guide is what you are paying for, and at the big sites it is the difference between a stone shell and a working arena.</p>
<p>We compare group, small-group and private formats side by side, with prices and who each one suits, in our guide to the <a href="/guides/best-guided-tours-in-rome">best guided tours in Rome</a>.</p>`,
    },
  ],
};

const categorySeoContent: Record<string, { paragraphs: string[]; relatedGuides: { slug: string; title: string }[] }> = {
  'guided-tours': {
    paragraphs: [],
    relatedGuides: [
      { slug: 'best-guided-tours-in-rome', title: 'Best guided tours in Rome: group vs private vs small-group' },
      { slug: 'best-walking-tours-rome-2026', title: 'Best walking tours in Rome' },
    ],
  },
  'skip-the-line': {
    paragraphs: [],
    relatedGuides: [
      { slug: 'skip-the-line-rome', title: 'How to skip the line in Rome: tickets and tips' },
      { slug: 'best-rome-tours-2026', title: 'Best Rome tours in 2026: top-rated picks' },
    ],
  },
};

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `${SITE_URL}/category/${category.slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${SITE_URL}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTours = getToursByCategory(category.slug);

  return (
    <>
      {[
        categorySchema(category),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: category.title, url: `${SITE_URL}/category/${category.slug}` },
        ]),
        faqSchema(category.faqs),
      ].filter(Boolean).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: category.title },
          ]}
        />

        <AffiliateDisclosure />

        <div className="mb-8">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{category.title}</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        {/* Answer-first blocks: combo, private, cost */}
        {categorySeoBlocks[category.slug] && (
          <section className="mt-12 space-y-8">
            {categorySeoBlocks[category.slug].map((block) => (
              <div key={block.heading} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{block.heading}</h2>
                <div
                  className="text-gray-700 leading-relaxed space-y-3 [&_a]:text-green-700 [&_a]:font-medium [&_a:hover]:underline"
                  dangerouslySetInnerHTML={{ __html: displayCopy(block.html) }}
                />
              </div>
            ))}
          </section>
        )}

        <FAQ faqs={category.faqs} />

        {/* Other Categories */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Browse Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.filter(c => c.slug !== category.slug).map(cat => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:border-green-300 hover:shadow-sm transition-all duration-300"
              >
                {cat.icon} {cat.title}
              </Link>
            ))}
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:border-green-300 hover:shadow-sm transition-all duration-300"
            >
              All {SITE_CITY} Tours
            </Link>
          </div>
        </section>

        {/* SEO Content Section */}
        {categorySeoContent[category.slug] && (
          <section className="mt-12 border-t border-gray-200 pt-10">
            {categorySeoContent[category.slug].paragraphs.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {category.title} in {SITE_CITY}</h2>
                <div className="prose max-w-none text-gray-700 space-y-4">
                  {categorySeoContent[category.slug].paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </>
            )}

            {categorySeoContent[category.slug].relatedGuides.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
                <ul className="space-y-2">
                  {categorySeoContent[category.slug].relatedGuides.map((guide) => (
                    <li key={guide.slug}>
                      <Link href={`/guides/${guide.slug}`} className="text-blue-900 hover:underline">
                        {guide.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
        {/* Internal links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides" className="text-blue-900 hover:underline font-medium">Travel Guides</Link>
          </div>
        </section>
      </div>
    </>
  );
}
