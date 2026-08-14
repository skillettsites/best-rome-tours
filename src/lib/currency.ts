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

export function currencySymbol(code?: string): string {
  const resolved = code && CURRENCIES[code] ? code : SITE_CURRENCY;
  return CURRENCIES[resolved].symbol;
}

// rates are units of that currency per 1 SITE_CURRENCY.
export function convertAmount(
  amount: number,
  fromCode: string,
  toCode: string,
  rates: Record<string, number>,
): number {
  if (fromCode === toCode) return Math.round(amount);
  const fromRate = fromCode === SITE_CURRENCY ? 1 : rates[fromCode];
  const toRate = toCode === SITE_CURRENCY ? 1 : rates[toCode];
  if (!fromRate || !toRate) return Math.round(amount);
  return Math.round((amount / fromRate) * toRate);
}
