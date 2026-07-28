import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { hubMonths } from '@/data/rome-months';
import { romeClimate, MONTH_ORDER } from '@/data/rome-climate';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import {
  SEASON_BASE_YEAR,
  SEASON_PUBLISHED,
  SEASON_UPDATED,
  HUB_PATH,
  CLIMATE_SOURCE,
  DAYLIGHT_SOURCE,
  VATICAN_SOURCE,
} from '@/lib/season';

const TITLE = `Best Time to Visit Rome: Month by Month Guide ${SEASON_BASE_YEAR} to ${SEASON_BASE_YEAR + 1}`;
const DESCRIPTION =
  'The best time to visit Rome, month by month, with real climate figures, the closure dates that catch people out and a ranked tour list for every month. Verified sources throughout.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${HUB_PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${HUB_PATH}`,
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the best month to visit Rome?',
    answer:
      'May and September are the two strongest months. May has the best raw numbers of the year, with 23.3C average highs, only six rain days and over fourteen hours of daylight, while September drops to 26.5C from the August peak and is the only month with no Italian public holiday and no fixed Vatican Museums closure at all. Both are peak-price months.',
  },
  {
    question: 'What is the cheapest time to visit Rome?',
    answer:
      'The second half of January and the whole of February. Rome empties from about 8 January once the Epiphany holiday has passed, and hotel rates in the historic centre reach their annual floor. February keeps almost all of that pricing while adding an extra hour of daylight and a degree of warmth, with average highs of 13C.',
  },
  {
    question: 'What is the worst month to visit Rome?',
    answer:
      'November on the weather and August on the heat. November is the wettest month of the year at 108mm across nine days, with under ten hours of daylight. August is the hottest at 31.4C average highs and carries a three-day Vatican Museums closure in the middle of the month. Both work if you plan around the constraint.',
  },
  {
    question: 'Which month has the most closures in Rome?',
    answer:
      'December. The Vatican Museums close on three separate dates, 8, 25 and 26 December, more than any other month, on top of the usual Sunday closures. January is next with two, on 1 and 6 January. September and October are the only two months in this window with no fixed Vatican closure and no national public holiday.',
  },
  {
    question: 'When are the Vatican Museums free?',
    answer:
      'On the last Sunday of each month, from 09:00 to 14:00 with last entry at 12:30. The Vatican cancels that free opening when the last Sunday coincides with Easter Sunday, 29 June, 25 December, 26 December or 31 December. This year the last Sunday of March is Easter Sunday, so that free morning does not run and the Museums are closed.',
  },
  {
    question: 'When is the hottest month in Rome?',
    answer:
      'August, with an average high of 31.4C and an average low of 19.8C, just ahead of July at 31C. August is also the driest-feeling month in practice, with only two rain days, and the Tyrrhenian sea off the Roman coast peaks at 26C. Individual afternoons above 35C are common.',
  },
];

export default function BestTimeToVisitRomePage() {
  const pageUrl = `${SITE_URL}${HUB_PATH}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The best time to visit Rome, month by month',
    description: DESCRIPTION,
    url: pageUrl,
    inLanguage: 'en-GB',
    datePublished: SEASON_PUBLISHED,
    dateModified: SEASON_UPDATED,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Rome month by month',
    numberOfItems: hubMonths.length,
    itemListElement: hubMonths.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Rome in ${m.month}`,
      url: m.hasPage ? `${SITE_URL}${m.href}` : `${pageUrl}#${m.key}`,
    })),
  };

  return (
    <>
      {[articleSchema, faqPageSchema, itemListSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Best time to visit Rome' }]} />

        <article>
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              The best time to visit Rome, month by month
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Written and checked by the {SITE_NAME} editorial team.{' '}
              <time dateTime={SEASON_UPDATED}>
                Updated{' '}
                {new Date(SEASON_UPDATED).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              .
            </p>
            <p className="mt-3 text-[17px] leading-relaxed text-gray-800 bg-blue-50/60 border-l-4 border-blue-900/70 rounded-r-lg px-4 py-3">
              May and September are the best months to visit Rome, with average highs of 23.3C and 26.5C and
              the fewest constraints. January and February are the cheapest. The month most people get wrong is
              August, when the Vatican Museums close for three consecutive days in the middle of the month.
            </p>
          </header>

          <section aria-labelledby="at-a-glance" className="mt-8">
            <h2 id="at-a-glance" className="text-xl font-bold text-gray-900">
              Rome at a glance, all twelve months
            </h2>
            <div className="mt-3 overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">Rome climate and verdict for each month of the year</caption>
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Month</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg high</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg low</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Rain days</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Daylight</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MONTH_ORDER.map((key) => {
                    const c = romeClimate[key];
                    const hub = hubMonths.find((h) => h.key === key)!;
                    return (
                      <tr key={key} className="align-top">
                        <th scope="row" className="px-3 py-2.5 font-medium">
                          <Link href={hub.href} className="text-blue-900 hover:underline">{c.month}</Link>
                        </th>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgHighC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgLowC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.rainDays}</td>
                        <td className="px-3 py-2.5 text-gray-800 whitespace-nowrap">{c.daylight}</td>
                        <td className="px-3 py-2.5 text-gray-700">{hub.verdict}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Temperature and rain days:{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {CLIMATE_SOURCE.label}
              </a>
              . Daylight is the length of day on the 15th, from{' '}
              <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {DAYLIGHT_SOURCE.label}
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">The short answer</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you want the best weather, go in May: 23.3C average highs, only six rain days, nine hours of
              sunshine a day and over fourteen hours of daylight. If you want the best balance of weather and
              hassle, go in September: it is the only month of the year with no Italian public holiday and no
              fixed Vatican Museums closure date, so nothing on your itinerary hits a shut door.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If price is the deciding factor, go in the second half of January or in February. Rome empties
              once Epiphany has passed on 6 January and stays empty until the spring, and February adds an
              hour of daylight and a degree of warmth without adding much to the bill.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Two months carry traps worth knowing before you book. In August the Vatican Museums close on 14
              and 15 August, and with the Sunday that follows that becomes three consecutive days with no
              Sistine Chapel. In March, Easter Sunday falls on the 28th, which is also the last Sunday of the
              month, so the free Vatican opening is cancelled and the Museums are shut.
            </p>
          </section>

          {hubMonths.map((m) => {
            const c = romeClimate[m.key];
            return (
              <section key={m.key} id={m.key} className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900">Rome in {m.month}</h2>
                <p className="mt-2 text-sm text-gray-600">
                  {c.avgHighC}C average high, {c.avgLowC}C average low, {c.rainDays} rain days,{' '}
                  {c.daylight} of daylight mid-month.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">{m.capsule}</p>
                {m.hasPage ? (
                  <p className="mt-3">
                    <Link href={m.href} className="font-semibold text-blue-900 hover:underline">
                      Read the full guide to Rome in {m.month}
                    </Link>
                  </p>
                ) : (
                  <p className="mt-3 text-gray-600">
                    We publish full month guides for August through May. For {m.month}, the figures above and
                    the closure note are the essentials; the nearest full guides are{' '}
                    <Link href="/rome-in-may" className="text-blue-900 font-medium hover:underline">
                      Rome in May
                    </Link>{' '}
                    and{' '}
                    <Link href="/rome-in-august" className="text-blue-900 font-medium hover:underline">
                      Rome in August
                    </Link>
                    .
                  </p>
                )}
              </section>
            );
          })}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Where the numbers come from</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Temperature, rainfall, rain days, sunshine hours and sea temperature are the 1991 to 2020
              averages measured at Rome Ciampino, published by{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Climates to Travel
              </a>
              . Daylight is the length of day on the 15th of each month for Rome, read from the{' '}
              <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                timeanddate.com sunrise and sunset tables
              </a>
              . Vatican opening days, hours and closure dates come from the{' '}
              <a href={VATICAN_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Vatican Museums&apos; own days and hours page
              </a>
              , and the only official ticket seller is tickets.museivaticani.va.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Where we could not confirm something from an official source, we say so on the page rather than
              filling the gap. That currently applies to exact Colosseum opening hours and to the ticketing
              arrangements for papal liturgies at Christmas and in Holy Week.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Best time to visit Rome: FAQs</h2>
            <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((f) => (
                <div key={f.question} className="py-4">
                  <h3 className="font-semibold text-gray-900">{f.question}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm font-semibold text-gray-900">Ready to book?</p>
            <p className="mt-2 text-sm text-gray-600">
              Browse{' '}
              <Link href="/tours" className="text-blue-900 font-medium hover:underline">
                all Rome tours
              </Link>
              , the{' '}
              <Link href="/attractions" className="text-blue-900 font-medium hover:underline">
                Rome attractions
              </Link>{' '}
              guide, or our{' '}
              <Link href="/blog/top-10-tours" className="text-blue-900 font-medium hover:underline">
                top ten Rome tours
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
