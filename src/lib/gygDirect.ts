import { tours } from '@/data/tours';
import { GYG_CAMPAIGN, GYG_PARTNER_ID } from '@/lib/constants';

// Maps guide search strings and catalogue titles to verified GetYourGuide
// activity IDs from src/data/tours.ts so CTAs deep-link to the exact tour.
const SEARCH_TO_ID: Record<string, string> = {};
for (const tour of tours) {
  if (!tour.gygTourId) continue;
  if (!SEARCH_TO_ID[tour.title]) SEARCH_TO_ID[tour.title] = tour.gygTourId;
  if (!SEARCH_TO_ID[tour.shortTitle]) SEARCH_TO_ID[tour.shortTitle] = tour.gygTourId;
}

const PARAMS = `partner_id=${GYG_PARTNER_ID}&utm_medium=travel_agent&cmp=${GYG_CAMPAIGN}`;

// Returns a direct GetYourGuide activity URL for a known tour title or short title.
// Falls back to a GYG search URL only if the string is not mapped.
export function directGygUrl(search: string): string {
  const id = SEARCH_TO_ID[search];
  if (id) return `https://www.getyourguide.com/activity/-t${id}/?${PARAMS}`;
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(search)}&${PARAMS}`;
}
