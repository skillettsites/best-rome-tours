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
  includesGelato: boolean;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (en-GB, currency=GBP).
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best dedicated Trevi tour',
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
    bestFor: 'Fountain plus the aqueducts next door',
    includesUnderground: true,
    includesGelato: false,
    when: 'Daytime slots, year-round',
    why: 'The fountain is free from the piazza. This is the dedicated Trevi product people book: a short guided stop at the fountain, then the archaeological rooms and Aqua Virgo aqueduct next door. It has more GetYourGuide reviews than any other dedicated Trevi product we compared.',
    who: 'Anyone who has already seen the fountain from the square and wants the underground City of Water, not another historic-centre walk.',
  },
  {
    rank: 2,
    badge: 'Best small-group underground',
    gygTourId: '473883',
    name: 'Rome: Trevi Fountain Underground Small Group Tour',
    shortName: 'Trevi small-group underground',
    href: gygProduct('rome-trevi-fountain-underground-small-group-tour', '473883'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/64856f16e8b59.png/148.jpg',
    imageAlt: 'Stone steps into the water-filled aqueduct rooms of Vicus Caprarius under the Trevi district',
    gbpFrom: 64,
    duration: '45 minutes',
    rating: 4.1,
    reviewCount: 50,
    bestFor: 'A smaller group in Vicus Caprarius',
    includesUnderground: true,
    includesGelato: false,
    when: 'Daytime slots, limited places',
    why: 'Reserved small-group entry to Vicus Caprarius with a short fountain stop. You are paying for a tighter group in the aqueduct rooms, not a ticket to see the fountain. Live from-price is higher than the dedicated tour.',
    who: 'Travellers who want the underground site in a smaller group and will pay more for that, not the cheapest Trevi product.',
  },
  {
    rank: 3,
    badge: 'Best extra / gelato',
    gygTourId: '637255',
    name: 'Rome: Trevi Fountain District Underground Tour and Ice Cream',
    shortName: 'Trevi district tour and gelato',
    href: gygProduct('rome-trevi-fountain-district-underground-tour-and-ice-cream', '637255'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/0becee39e14ab15969ea8f010b7fd5de69ec8e1b99565c51977faf456ea41bea.jpg/148.jpg',
    imageAlt: 'Gelato cone held in front of Trevi Fountain on the district underground tour',
    gbpFrom: 31,
    duration: '1 hour',
    rating: 4.5,
    reviewCount: 663,
    bestFor: 'Underground plus gelato',
    includesUnderground: true,
    includesGelato: true,
    when: 'Daytime slots, gelato upgrade optional',
    why: 'The highest-rated of the well-reviewed Trevi extras: a slightly longer underground visit in the district, with an optional gelato. Some options include official inner-perimeter access. That is still not required just to see the fountain from the square.',
    who: 'Anyone who wants the underground rooms plus a gelato stop, not a standalone fountain ticket.',
  },
];