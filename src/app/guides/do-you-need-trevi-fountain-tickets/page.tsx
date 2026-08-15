import { Metadata } from 'next';
import Link from 'next/link';
import { getGuideBySlug, guides } from '@/data/guides';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { GYG_LOCATION_ID, GYG_PARTNER_ID, SITE_URL } from '@/lib/constants';
import { displayCopy } from '@/lib/currency';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import LocalPrice from '@/components/LocalPrice';
import TopThreeCards from './TopThreeCards';
import { TOP_THREE } from './products';

const SLUG = 'do-you-need-trevi-fountain-tickets';
const PAGE_URL = `${SITE_URL}/guides/${SLUG}`;

const guide = getGuideBySlug(SLUG)!;

export const metadata: Metadata = {
  title: displayCopy(guide.metaTitle),
  description: displayCopy(guide.metaDescription),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: displayCopy(guide.metaTitle),
    description: displayCopy(guide.metaDescription),
    url: PAGE_URL,
    type: 'article',
  },
};

export default function TreviFountainTicketsPage() {
  const dedicated = TOP_THREE[0];
  const smallGroup = TOP_THREE[1];
  const district = TOP_THREE[2];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'best-vatican-tickets',
        'best-colosseum-tickets',
        'skip-the-line-rome',
        'best-walking-tours-rome-2026',
      ].includes(g.slug)
    );

  return (
    <>
      {[
        articleSchema(guide),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Guides', url: `${SITE_URL}/guides` },
          { name: guide.title, url: PAGE_URL },
        ]),
        faqSchema(guide.faqs),
      ]
        .filter(Boolean)
        .map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/guides' },
            { label: displayCopy(guide.title) },
          ]}
        />

        <article>
          <header className="mb-10">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {displayCopy(guide.title)}
            </h1>
            <div className="mt-5 rounded-xl border-l-4 border-green-600 bg-green-50 px-4 py-3 sm:px-5 sm:py-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-green-700">Quick answer</p>
              <p className="text-base leading-snug text-gray-800 sm:text-lg">
                {displayCopy(guide.excerpt.replace(/^Quick answer:\s*/i, ''))}
              </p>
            </div>
            <time className="mt-3 block text-sm text-gray-500" dateTime={guide.updatedDate}>
              Updated:{' '}
              {new Date(guide.updatedDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </header>

          <AffiliateDisclosure />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">The top 3 Trevi products people actually book</h2>
            <p className="mb-6 text-gray-700">
              Ranked from live GetYourGuide products, not from a made-up shortlist. Review counts, starting prices and
              product photos are taken from those listings. Prices below convert to your currency. The exact fare is
              confirmed on GetYourGuide at checkout.
            </p>
            <TopThreeCards />
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Do you need a ticket just to see it?</h2>
            <p className="mb-4 text-gray-700">
              No. Trevi Fountain stands in a public piazza. You can walk up, look at it, and leave without buying
              anything. There is no ticket desk, no timed entry, and no skip-the-line lane for the fountain itself.
              Products that sell a &quot;Trevi Fountain entry ticket&quot; are selling a guided stop at a free monument,
              or reserved entry to the archaeological rooms next door.
            </p>
            <p className="text-gray-700">
              The crowd is the real cost. Mid-morning to late afternoon the basin is packed. Early morning and late
              evening are calmer. If you only want the photograph, go at 7am and spend nothing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Which one should you book?</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>
                <strong>Book nothing</strong> if you only want to see the fountain. It is free from the piazza.
              </li>
              <li>
                <strong>Book the dedicated underground tour</strong> if you want a guide at the fountain plus Vicus
                Caprarius, from <LocalPrice amount={dedicated.gbpFrom} currency="GBP" />.
              </li>
              <li>
                <strong>Book the small-group underground</strong> if you want a tighter group in the aqueduct rooms,
                from <LocalPrice amount={smallGroup.gbpFrom} currency="GBP" />. That is not the cheapest option.
              </li>
              <li>
                <strong>Book the district tour with gelato</strong> if you want the extra, from{' '}
                <LocalPrice amount={district.gbpFrom} currency="GBP" />.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">The underground is a different site</h2>
            <p className="mb-4 text-gray-700">
              Vicus Caprarius, the &quot;City of Water&quot;, sits a few metres from the fountain and is ticketed. A
              guide takes you down to the remains of the Aqua Virgo aqueduct that still supplies Trevi, plus an imperial
              domus. That is a 40-minute visit, not a substitute for seeing the fountain, and it does not put you
              underneath the statues themselves.
            </p>
            <p className="text-gray-700">
              If you have already done the piazza and want one paid Trevi product, the dedicated underground tour is
              the one. The small-group and district products visit the same archaeological site. Some district options
              include official inner-perimeter access. That is an optional add-on, not a requirement to see the fountain
              from the square. The wider walking-tour picture is in the{' '}
              <Link href="/guides/best-walking-tours-rome-2026" className="font-semibold text-green-700 underline">
                best walking tours in Rome
              </Link>{' '}
              guide.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Small group or district extra?</h2>
            <p className="mb-4 text-gray-700">
              The small-group underground is the same Vicus Caprarius site in a tighter group. Live from-price is
              higher than the dedicated tour, so book it for the group size, not to save money.
            </p>
            <p className="text-gray-700">
              The district tour is the extra: a slightly longer underground visit with an optional gelato. It is the
              highest-rated of the well-reviewed Trevi products we compared. Most options include free cancellation up
              to 24 hours before.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick if you book one thing</p>
            <p className="mt-1 font-bold text-gray-900">{dedicated.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              The dedicated Trevi underground tour: aqueducts next to the fountain, {dedicated.duration}, rated{' '}
              {dedicated.rating.toFixed(1)} from {dedicated.reviewCount.toLocaleString('en-GB')} reviews. From{' '}
              <LocalPrice amount={dedicated.gbpFrom} currency="GBP" />. Book the{' '}
              <TrackedGYGLink
                href={district.href}
                tourName={district.shortName}
                section="trevi-which-ticket-bottom-alt"
                className="font-semibold text-green-700 underline"
              >
                {district.shortName}
              </TrackedGYGLink>{' '}
              instead if you want the gelato extra.
            </p>
            <TrackedGYGLink
              href={dedicated.href}
              tourName={dedicated.shortName}
              section="trevi-which-ticket-bottom-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book the Trevi underground tour
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Trevi dates on GetYourGuide</h2>
            <p className="mb-4 text-sm text-gray-600">
              Live availability in your currency. This widget is not locked to a display currency.
            </p>
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
              <div
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
                data-gyg-location-id={GYG_LOCATION_ID}
                data-gyg-locale-code="en-US"
                data-gyg-widget="activities"
                data-gyg-partner-id={GYG_PARTNER_ID}
                data-gyg-q="Trevi"
              />
            </div>
          </section>

          <FAQ faqs={guide.faqs} />

          {related.length > 0 && (
            <section className="mt-12 rounded-xl bg-gray-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">More Rome guides</h2>
              <ul className="space-y-3">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="font-medium text-green-700 hover:underline">
                      {displayCopy(g.title)}
                    </Link>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {displayCopy(g.excerpt.replace(/^Quick answer:\s*/i, ''))}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href="/guides" className="inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all guides
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}