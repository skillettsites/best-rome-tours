'use client';

import { useCurrency } from '@/components/CurrencyProvider';
import { SITE_CURRENCY } from '@/lib/constants';
import { convertAmount, currencySymbol } from '@/lib/currency';

// Renders a catalogue amount in the visitor's currency (approx). Source currency is
// tour.currency when provided, otherwise the site default. During SSR and before the
// client resolves currency, it renders the source amount so static HTML stays stable.
export default function LocalPrice({
  amount,
  currency,
  className,
}: {
  amount: number;
  currency?: string;
  className?: string;
}) {
  const { code, info, ready, rates } = useCurrency();
  const from = currency && currency.length > 0 ? currency : SITE_CURRENCY;
  const fromSymbol = currencySymbol(from);
  if (!ready || code === from) {
    return <span className={className}>{fromSymbol}{amount}</span>;
  }
  const val = convertAmount(amount, from, code, rates);
  return (
    <span className={className} title={`Approx, from ${fromSymbol}${amount}. Exact price shown on GetYourGuide.`}>
      {'≈ '}{info.symbol}{val.toLocaleString('en-GB')}
    </span>
  );
}
