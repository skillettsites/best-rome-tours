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
  includesBasilica: boolean;
  skipTheLine: boolean;
  when: string;
  why: string;
  who: string;
};

// Live GetYourGuide figures checked 15 August 2026 (en-GB, currency=GBP).
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best all-round guided tour',
    gygTourId: '429439',
    name: 'Rome: Vatican Museums, Sistine Chapel & Basilica Tour',
    shortName: 'Museums, Sistine & Basilica tour',
    href: gygProduct('rome-vatican-museums-sistine-chapel-basilica-tour', '429439'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/a05866aaf07a1c1a7bd66074b53bebd7877ab261eefc1efd7b57e6b6b3c64714.jpg/148.jpg',
    imageAlt: 'Visitors on a guided Vatican Museums tour with St Peter’s Basilica dome beyond',
    gbpFrom: 63,
    duration: '2.5–3 hours',
    rating: 4.7,
    reviewCount: 17367,
    bestFor: 'First-time visitors',
    includesBasilica: true,
    skipTheLine: true,
    when: 'Morning and afternoon slots',
    why: 'The highest-rated full Vatican combo we compared: a live guide through the Museums and Sistine Chapel, with the internal route into St Peter’s so you do not rejoin the square security line.',
    who: 'First-timers who want the art explained and all three sites on one ticket, without planning a separate Basilica visit.',
  },
  {
    rank: 2,
    badge: 'Best value / most booked',
    gygTourId: '62214',
    name: 'Vatican: Museums & Sistine Chapel Entrance Ticket',
    shortName: 'Museums & Sistine ticket',
    href: gygProduct('skip-the-line-vatican-museums-sistine-chapel-ticket', '62214'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/5f16d60b18470.jpeg/148.jpg',
    imageAlt: 'Gallery ceiling inside the Vatican Museums leading toward the Sistine Chapel',
    gbpFrom: 28,
    duration: '1 day ticket',
    rating: 4.5,
    reviewCount: 154650,
    bestFor: 'Going at your own pace',
    includesBasilica: false,
    skipTheLine: true,
    when: 'Timed slot, year-round',
    why: 'This is the Vatican ticket people actually book: skip-the-ticket-line entry to the Museums and Sistine Chapel, no guide, no St Peter’s. It has more GetYourGuide reviews than any other Vatican product.',
    who: 'Independent travellers, repeat visitors, and anyone who wants the queue-jump without paying for a guided group.',
  },
  {
    rank: 3,
    badge: 'Best St Peter’s ticket',
    gygTourId: '799928',
    name: 'Rome: St. Peter’s Basilica, Dome Climb, and Underground Tour',
    shortName: 'St Peter’s dome & underground',
    href: gygProduct('rome-st-peter-s-basilica-dome-climb-and-underground-tour', '799928'),
    imageUrl: 'https://cdn.getyourguide.com/img/tour/3593302d0b51c6a3877c1d60b56df9b04c943f9bbfc1d9b2256271331f9b6a09.jpg/148.jpg',
    imageAlt: 'St Peter’s Basilica dome and colonnade on St Peter’s Square',
    gbpFrom: 28,
    duration: '2–3 hours',
    rating: 4.8,
    reviewCount: 5666,
    bestFor: 'The Basilica, dome and papal tombs',
    includesBasilica: true,
    skipTheLine: true,
    when: 'Year-round, dress code applies',
    why: 'St Peter’s is a separate site from the Museums. This is the St Peter’s ticket people book when they want the Basilica, the dome climb and the underground papal tombs with a guide, not another museum pass.',
    who: 'Anyone who has already done the Museums, or who cares more about the Basilica and the view from the dome than the Sistine Chapel.',
  },
];
