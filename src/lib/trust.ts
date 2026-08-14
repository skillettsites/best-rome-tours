import { tours } from '@/data/tours';
import { SITE_CURRENCY } from '@/lib/constants';

const totalReviews = tours.reduce((sum, t) => sum + t.reviewCount, 0);
const avgRating = tours.length
  ? tours.reduce((sum, t) => sum + t.rating, 0) / tours.length
  : 0;
const cheapest = tours.length
  ? tours.reduce((min, t) => (t.price < min.price ? t : min))
  : undefined;
const minPrice = cheapest?.price ?? 0;

export const trustStats = {
  totalTours: tours.length,
  avgRating: Number(avgRating.toFixed(2)),
  totalReviews,
  freeCancellationPct: 95,
  minPrice,
  minPriceCurrency: cheapest?.currency ?? SITE_CURRENCY,
};

export const TOP_CONVERTER_BY_DESTINATION: Record<string, { slug: string; activityId: string; reason: string }> = {};
