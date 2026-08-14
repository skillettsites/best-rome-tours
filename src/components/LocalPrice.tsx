'use client';

import { useCurrency } from '@/components/CurrencyProvider';
import { SITE_CURRENCY } from '@/lib/constants';
import { convertAmount, currencySymbol, resolveCurrency } from '@/lib/currency';

// Renders a catalogue amount in the viewed-site currency by default (EUR on Rome).
// tour.currency is the FX source only. SSR and the first client paint convert with
// fallback rates so static HTML is never the stored £ amount. Tooltips never name
// the source currency, which is the Iceland leftover-title miss.
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
  const from = resolveCurrency(currency);
  const displayCode = ready ? resolveCurrency(code) : SITE_CURRENCY;
  const displaySymbol = ready ? info.symbol : currencySymbol(SITE_CURRENCY);
  const val = convertAmount(amount, from, displayCode, rates);
  const converted = from !== displayCode;
  const showApprox = converted && displayCode !== SITE_CURRENCY;

  if (!showApprox) {
    return (
      <span className={className}>
        {displaySymbol}{val.toLocaleString('en-GB')}
      </span>
    );
  }

  return (
    <span className={className} title="Approximate conversion. Exact price shown on GetYourGuide.">
      {'≈ '}{displaySymbol}{val.toLocaleString('en-GB')}
    </span>
  );
}
