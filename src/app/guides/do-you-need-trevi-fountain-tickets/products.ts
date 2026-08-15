import { GYG_CAMPAIGN, GYG_PARTNER_ID } from '@/lib/constants';

const PARAMS = `partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher&cmp=${GYG_CAMPAIGN}`;

function gygProduct(slug: string, id: string): string {
  return `https://www.getyourguide.com/rome-l33/${slug}-t${id}/?${PARAMS}`;
}

export type RankedTicket = {
  rank: 1 | 2 | 3;
  badge: string;
  gygTourId: string;
  name: string;
  shortName: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  gbpFrom: number;
  duration: string;
  rating: number;
  reviewCount: number;
  bestFor: string;
  includesUnderground: boolean;
  isNight: boolean;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (en-GB, currency=GBP).
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'The only real Trevi ticket',
    gygTourId: '392231',
    name: 'Rome: Trevi Fountain and Underground Guided Tour',
    shortName: 'Trevi underground tour',
    href: gygProduct('trevi-fountain-underground-express-guided-tour', '392231'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/ce64fbd0e83f3a3c.jpeg/148.jpg',
    imageAlt: 'Trevi Fountain facade with Oceanus, tritons and sea-horses in daylight',
    gbpFrom: 27,
    duration: '40 minutes',
    rating: 4.3,
    reviewCount: 2030,
    bestFor: 'The aqueducts under the fountain',
    includesUnderground: true,
    isNight: false,
    when: 'Daytime slots, year-round',
    why: 'The fountain is free from the piazza. This is the ticketed site next door: a short guided visit to the archaeological rooms and the Aqua Virgo aqueduct that still feeds Trevi. It has more GetYourGuide reviews than any other dedicated Trevi product we compared.',
    who: 'Anyone who has already seen the fountain from the square and wants the underground "City of Water", not another historic-centre walk.',
  },
  {
    rank: 2,
    badge: 'Best night / sunset walk',
    gygTourId: '459815',
    name: 'Rome: Navona, Pantheon, Trevi & Spanish Steps – Sunset Tour',
    shortName: 'Trevi sunset walk',
    href: gygProduct('rome-by-night-piazza-di-spagna-trevi-navona-pantheon', '459815'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/4dc9be80468b7130eeb8bbe6e9701338fb924930729836eaab9fe4611407f45c.jpg/148.jpg',
    imageAlt: 'Evening walking group in Piazza Navona on the sunset tour that also stops at Trevi Fountain',
    gbpFrom: 33,
    duration: '2 hours',
    rating: 4.9,
    reviewCount: 766,
    bestFor: 'Trevi after dark',
    includesUnderground: false,
    isNight: true,
    when: 'Sunset and evening departures',
    why: 'The highest-rated evening walk on the live Trevi listing: Spanish Steps, Trevi, the Pantheon exterior and Piazza Navona once the marble is lit and the daytime crush has thinned. No fountain ticket, because none exists.',
    who: 'First-timers who want the historic centre explained after dark, and anyone who would rather see Trevi lit than stand in the midday crowd.',
  },
  {
    rank: 3,
    badge: 'Best historic-centre combo',
    gygTourId: '3099',
    name: 'Rome: Pantheon, Trevi Fountain & Spanish Steps Walking Tour',
    shortName: 'Trevi combo walk',
    href: gygProduct('rome-trevi-fountain-spanish-steps-pantheon-walking-tour', '3099'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/5a181efe5198c.jpeg/148.jpg',
    imageAlt: 'Guide with a walking group in front of Trevi Fountain on a historic-centre tour',
    gbpFrom: 17,
    duration: '2.5 hours',
    rating: 4.6,
    reviewCount: 374,
    bestFor: 'Trevi plus the Pantheon and Spanish Steps',
    includesUnderground: false,
    isNight: false,
    when: 'Daytime group walks',
    why: 'The value combo walk: a live guide through the Pantheon, Trevi Fountain, the piazzas and the Spanish Steps. You are paying for the route and the stories, not for a ticket to look at a free fountain.',
    who: 'First-timers who want Trevi as one stop on a historic-centre walk, not a standalone underground visit.',
  },
];