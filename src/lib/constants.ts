export const SITE_NAME = 'Best Rome Tours';
export const SITE_CITY = 'Rome';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.best-rome-tours.com';
export const SITE_DESCRIPTION = 'Discover the best tours, attractions, and experiences in Rome. Book skip-the-line tickets for the Colosseum, Vatican Museums, Sistine Chapel, St Peter’s Basilica, and more with instant confirmation and free cancellation.';
export const GYG_PARTNER_ID = 'LPT26IL';
export const GYG_CAMPAIGN = 'best_rome_tours';
export const GYG_LOCATION_ID = '33';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const CONTENT_DATE = '2026-07-08';

// Direct link to this city's full tour catalogue on GetYourGuide (partner-attributed).
// Used by the "browse all tours" CTAs to send traffic straight to GYG.
export const GYG_CITY_URL = `https://www.getyourguide.com/${SITE_CITY.toLowerCase().replace(/\s+/g, '-')}-l${GYG_LOCATION_ID}/?partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher&cmp=${GYG_CAMPAIGN}`;
