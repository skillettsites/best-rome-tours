import { SITE_CURRENCY } from '@/lib/constants';

// fallback = units of this currency per 1 SITE_CURRENCY (EUR).
export const CURRENCIES: Record<string, { symbol: string; fallback: number }> = {
  EUR: { symbol: '€', fallback: 1 },
  GBP: { symbol: '£', fallback: 0.85 },
  USD: { symbol: '$', fallback: 1.08 },
  CAD: { symbol: 'C$', fallback: 1.47 },
  AUD: { symbol: 'A$', fallback: 1.64 },
  NZD: { symbol: 'NZ$', fallback: 1.76 },
  CHF: { symbol: 'CHF ', fallback: 0.95 },
  SEK: { symbol: 'kr ', fallback: 11.4 },
  NOK: { symbol: 'kr ', fallback: 11.7 },
  DKK: { symbol: 'kr ', fallback: 7.46 },
  JPY: { symbol: '¥', fallback: 165 },
  MXN: { symbol: 'MX$', fallback: 19.5 },
  BRL: { symbol: 'R$', fallback: 5.85 },
  AED: { symbol: 'AED ', fallback: 3.95 },
  SGD: { symbol: 'S$', fallback: 1.45 },
  HKD: { symbol: 'HK$', fallback: 8.4 },
  INR: { symbol: '₹', fallback: 90 },
  ISK: { symbol: 'kr ', fallback: 148 },
  PLN: { symbol: 'zł ', fallback: 4.32 },
};

export const FALLBACK_RATES: Record<string, number> = Object.fromEntries(
  Object.entries(CURRENCIES).map(([code, meta]) => [code, meta.fallback]),
);

export function resolveCurrency(code?: string): string {
  return code && CURRENCIES[code] ? code : SITE_CURRENCY;
}

export function currencySymbol(code?: string): string {
  return CURRENCIES[resolveCurrency(code)].symbol;
}

// rates are units of that currency per 1 SITE_CURRENCY.
export function convertAmount(
  amount: number,
  fromCode: string,
  toCode: string,
  rates: Record<string, number>,
): number {
  const from = resolveCurrency(fromCode);
  const to = resolveCurrency(toCode);
  if (from === to) return Math.round(amount);
  const fromRate = from === SITE_CURRENCY ? 1 : rates[from];
  const toRate = to === SITE_CURRENCY ? 1 : rates[to];
  if (!fromRate || !toRate) return Math.round(amount);
  return Math.round((amount / fromRate) * toRate);
}

// Catalogue amount in the viewed-site currency (EUR on Rome). `fromCode` is the
// stored tour.currency, used only as the FX source, never as the display default.
export function formatPrice(
  amount: number,
  fromCode?: string,
  toCode: string = SITE_CURRENCY,
  rates: Record<string, number> = FALLBACK_RATES,
): string {
  const to = resolveCurrency(toCode);
  const value = convertAmount(amount, resolveCurrency(fromCode), to, rates);
  return `${currencySymbol(to)}${value.toLocaleString('en-GB')}`;
}

// Rewrite leftover catalogue £ amounts in copy so the viewed-site currency wins
// without changing stored tour.price / tour.currency fields.
export function displayCopy(text: string): string {
  return text
    .replace(/&pound;(\d+(?:,\d{3})*(?:\.\d+)?)/g, (_, raw) => formatPrice(Number(String(raw).replace(/,/g, '')), 'GBP'))
    .replace(/£(\d+(?:,\d{3})*(?:\.\d+)?)/g, (_, raw) => formatPrice(Number(String(raw).replace(/,/g, '')), 'GBP'));
}

export type DisplayTourCard = {
  slug: string;
  shortTitle: string;
  excerpt: string;
  price: number;
  currency?: string;
  duration: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  imageAlt: string;
  affiliateUrl: string;
  destination?: string;
};

// Convert leftover £ in FAQ copy at display time. Stored data is unchanged.
export function displayFaqs<T extends { question: string; answer: string }>(faqs: T[]): T[] {
  return faqs.map((faq) => ({
    ...faq,
    question: displayCopy(faq.question),
    answer: displayCopy(faq.answer),
  }));
}

// Slim tour for client cards: convert leftover £ in titles/excerpts and drop
// answerCapsule / faqs so stored £ prose is not serialized into the page.
export function displayTourCard(tour: DisplayTourCard): DisplayTourCard {
  return {
    slug: tour.slug,
    shortTitle: displayCopy(tour.shortTitle),
    excerpt: displayCopy(tour.excerpt),
    price: tour.price,
    currency: tour.currency,
    duration: tour.duration,
    rating: tour.rating,
    reviewCount: tour.reviewCount,
    imageUrl: tour.imageUrl,
    imageAlt: tour.imageAlt,
    affiliateUrl: tour.affiliateUrl,
    destination: tour.destination,
  };
}
