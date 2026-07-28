import { MonthContent } from '@/lib/season-types';
import { august, september, october, november, december } from './rome-months-a';
import { january, february, march, april, may } from './rome-months-b';

export const monthPages: MonthContent[] = [
  august, september, october, november, december,
  january, february, march, april, may,
];

export function getMonthBySlug(slug: string): MonthContent | undefined {
  return monthPages.find((m) => m.slug === slug);
}

/** Footer month strip order, chronological across the season. */
export const monthStrip = monthPages.map((m) => ({ month: m.month, href: `/${m.slug}` }));

export interface HubMonth {
  /** Anchor id and climate key */
  key: string;
  month: string;
  /** Path to the month page, or a hub anchor where no page exists. */
  href: string;
  hasPage: boolean;
  /** 40 to 60 words, standalone, at least one hard number, no links inside. */
  capsule: string;
  verdict: string;
}

// Twelve capsules, calendar order. June and July have no dedicated page in this
// build, so they link to their own section on this hub.
export const hubMonths: HubMonth[] = [
  {
    key: 'january',
    month: 'January',
    href: '/rome-in-january',
    hasPage: true,
    verdict: 'Cheapest and quietest',
    capsule:
      'The coldest month, with average highs of 11.9C and lows of 3.5C, but only seven rain days and returning sunshine. After the first week Rome empties completely and hotel rates hit their annual floor. The Vatican Museums close on 1 and 6 January for New Year and Epiphany.',
  },
  {
    key: 'february',
    month: 'February',
    href: '/rome-in-february',
    hasPage: true,
    verdict: 'Best value of the year',
    capsule:
      'Almost January prices with an extra hour of daylight and 13C average highs. Rain holds at seven days and the sun climbs to five and a half hours a day. Carnival peaks on 9 February and the Vatican Museums close on 11 February, the only closure in the month.',
  },
  {
    key: 'march',
    month: 'March',
    href: '/rome-in-march',
    hasPage: true,
    verdict: 'Holy Week falls here this year',
    capsule:
      'The driest month of the winter half at 59mm over seven days, with 15.7C highs. But Easter Sunday is 28 March this year, so the whole of Holy Week sits in March. The free last-Sunday Vatican opening is cancelled as a result, and the clocks go forward the same day.',
  },
  {
    key: 'april',
    month: 'April',
    href: '/rome-in-april',
    hasPage: true,
    verdict: 'Unusually calm this year',
    capsule:
      'Average highs of 18.8C, over thirteen hours of daylight and, because Easter already passed in March, none of the Holy Week pressure that normally defines the month. Natale di Roma on 21 April opens the city\'s civic museums free to everyone. No fixed Vatican closure falls in April.',
  },
  {
    key: 'may',
    month: 'May',
    href: '/rome-in-may',
    hasPage: true,
    verdict: 'Best weather of the ten',
    capsule:
      'The strongest month on the numbers: 23.3C highs, only six rain days, nine hours of sunshine a day and over fourteen hours of daylight. The costs are crowds and price, both at spring peaks. The Vatican Museums close on 1 May for Labour Day, the month\'s only fixed closure.',
  },
  {
    key: 'june',
    month: 'June',
    href: '/best-time-to-visit-rome#june',
    hasPage: false,
    verdict: 'Long days, rising heat',
    capsule:
      'The longest days of the year, around fifteen hours twelve minutes in mid-June, with average highs of 28C and just three rain days. The sea reaches 22C, so the coast becomes a real option. The Vatican Museums close on 29 June for Saints Peter and Paul, Rome\'s patronal feast.',
  },
  {
    key: 'july',
    month: 'July',
    href: '/best-time-to-visit-rome#july',
    hasPage: false,
    verdict: 'Hot, dry and audience-free',
    capsule:
      'The driest month of the year at 20mm across two days, with 31C average highs and eleven hours of sunshine a day. July, not August, is the month papal general audiences pause; the Sunday Angelus continues from Castel Gandolfo. The Via Triumphalis Necropolis closes for the summer from 15 July.',
  },
  {
    key: 'august',
    month: 'August',
    href: '/rome-in-august',
    hasPage: true,
    verdict: 'Hottest, with a three-day Vatican gap',
    capsule:
      'The hottest month at 31.4C average highs, with only two rain days and the sea at its annual peak of 26C. The planning trap is mid-month: the Vatican Museums close on 14 and 15 August, and with the following Sunday that makes three consecutive days shut.',
  },
  {
    key: 'september',
    month: 'September',
    href: '/rome-in-september',
    hasPage: true,
    verdict: 'Best all-round month',
    capsule:
      'Highs drop nearly five degrees from August to 26.5C while the sea holds 24.5C. It is the only month of the ten with no Italian public holiday and no fixed Vatican closure date at all. Rain rises to six days, and Rome loses about eighty minutes of daylight across the month.',
  },
  {
    key: 'october',
    month: 'October',
    href: '/rome-in-october',
    hasPage: true,
    verdict: 'Great walking, short evenings',
    capsule:
      'Average highs of 22C make it the best walking temperature of the year, but 88mm of rain over seven days and the clocks going back on 25 October cut sunset from about 18:51 to about 17:05 across the month. The last ten days are exceptional value.',
  },
  {
    key: 'november',
    month: 'November',
    href: '/rome-in-november',
    hasPage: true,
    verdict: 'Wettest, quietest, cheapest',
    capsule:
      'The wettest month of the Roman year at 108mm over nine days, with 16.8C highs and under ten hours of daylight. In exchange you get the Pantheon almost to yourself and the lowest hotel rates of the autumn. All Saints on 1 November closes the Vatican Museums.',
  },
  {
    key: 'december',
    month: 'December',
    href: '/rome-in-december',
    hasPage: true,
    verdict: 'Shortest days, three closures',
    capsule:
      'The shortest days of the year at around nine hours nine minutes, with 12.8C highs and nine rain days. Three separate Vatican Museums closures fall this month, on 8, 25 and 26 December, more than any other. The free last-Sunday opening still runs, on 27 December.',
  },
];
