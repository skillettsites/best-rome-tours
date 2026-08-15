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

const SLUG = 'best-vatican-tickets';
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

export default function BestVaticanTicketsPage() {
  const top = TOP_THREE[0];
  const guided = TOP_THREE[1];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'best-colosseum-tickets',
        'skip-the-line-rome',
        'first-time-in-rome',
        'best-guided-tours-in-rome',
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
            <h2 className="mb-6 text-2xl font-bold text-gray-900">The top 3 Vatican tickets people actually book</h2>
            <p className="mb-6 text-gray-700">
              Ranked from live GetYourGuide products, not from a made-up shortlist. Review counts, starting prices and
              product photos are taken from those listings. Prices below convert to your currency. The exact fare is
              confirmed on GetYourGuide at checkout.
            </p>
            <TopThreeCards />
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Which one should you book?</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>
                <strong>Book the Museums and Sistine ticket</strong> if you are happy going at your own pace and do not
                need St Peter&apos;s on the same booking. It is the cheapest useful Vatican ticket and the one with the
                most reviews.
              </li>
              <li>
                <strong>Book the guided Museums, Sistine and Basilica tour</strong> if it is your first visit and you
                want the art explained plus the internal route into St Peter&apos;s. That is the all-rounder.
              </li>
              <li>
                <strong>Book the St Peter&apos;s dome and underground tour</strong> if the Basilica is the point, or you
                have already done the Museums. A museum ticket does not include the dome.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">The Museums and St Peter&apos;s are separate sites</h2>
            <p className="mb-4 text-gray-700">
              This is the mix-up that wastes a morning. The Vatican Museums and Sistine Chapel sit on one ticketed
              circuit. St Peter&apos;s Basilica is a different building, with its own security line on the square. A
              Museums ticket does not get you into the Basilica, and a Basilica ticket does not get you into the
              Sistine Chapel.
            </p>
            <p className="text-gray-700">
              The guided combo is worth the extra because the group uses the internal passage from the Sistine Chapel
              into St Peter&apos;s, so you skip the outdoor security queue. If you buy the entrance ticket only, plan a
              separate Basilica visit or accept the square line. The longer comparison is in{' '}
              <Link href="/blog/vatican-vs-st-peters-basilica-which-tour" className="font-semibold text-green-700 underline">
                Vatican vs St Peter&apos;s: which tour
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Guided tour or ticket only?</h2>
            <p className="mb-4 text-gray-700">
              A live guide is the difference between walking through gilded rooms and knowing why they matter. The
              Museums have little useful signage once you are past the first galleries, and you cannot talk inside the
              Sistine Chapel, so a good guide explains Michelangelo before you enter.
            </p>
            <p className="text-gray-700">
              The entrance ticket from <LocalPrice amount={top.gbpFrom} currency="GBP" /> is genuinely enough if you
              already know the collection or want to move at your own speed. The guided combo from{' '}
              <LocalPrice amount={guided.gbpFrom} currency="GBP" /> is the one to book on a first visit. That is the
              same verdict as{' '}
              <Link href="/blog/is-a-vatican-museums-tour-worth-it" className="font-semibold text-green-700 underline">
                is a Vatican Museums tour worth it
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Booking, dress code and timing</h2>
            <p className="mb-4 text-gray-700">
              Vatican slots sell out days ahead in summer. Book the earliest morning you can: the Museums get louder
              by the hour and the Sistine Chapel is calmest right after opening. Arrive fifteen minutes before your
              slot for security, which exists on every ticket.
            </p>
            <p className="mb-4 text-gray-700">
              St Peter&apos;s enforces a dress code regardless of which ticket you hold: shoulders and knees covered,
              or you are turned away at the door. The dome climb has a narrow spiral staircase and is not a good pick
              if you dislike heights or tight spaces.
            </p>
            <p className="text-gray-700">
              For the wider queue picture across Rome, read the{' '}
              <Link href="/guides/skip-the-line-rome" className="font-semibold text-green-700 underline">
                skip the line in Rome guide
              </Link>
              . Most options include free cancellation up to 24 hours before.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Skip-the-ticket-line Museums and Sistine Chapel entry, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From <LocalPrice amount={top.gbpFrom} currency="GBP" />
              . Book the{' '}
              <TrackedGYGLink
                href={guided.href}
                tourName={guided.shortName}
                section="vatican-which-ticket-bottom-alt"
                className="font-semibold text-green-700 underline"
              >
                {guided.shortName}
              </TrackedGYGLink>{' '}
              instead if you want St Peter&apos;s on the same ticket.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="vatican-which-ticket-bottom-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book the Museums & Sistine ticket
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Vatican dates on GetYourGuide</h2>
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
                data-gyg-q="Vatican"
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
