// Single build-time constant for the seasonal month pages.
//
// The month pages run August of SEASON_BASE_YEAR through May of the following
// year. The year is rendered in the <title> tag and in the events section
// heading only. It never appears in a URL or in an H1, so rolling the whole set
// forward is a one-line edit here plus a content refresh.
export const SEASON_BASE_YEAR = 2026;

// Article datePublished / dateModified for the seasonal set.
export const SEASON_PUBLISHED = '2026-07-28';
export const SEASON_UPDATED = '2026-07-28';

// Months from August of the base year carry offset 0, January onwards carry 1.
export function seasonYear(yearOffset: 0 | 1): number {
  return SEASON_BASE_YEAR + yearOffset;
}

export const HUB_PATH = '/best-time-to-visit-rome';

// Sources cited on every month page. Both were read directly for this build.
export const CLIMATE_SOURCE = {
  label: 'Climates to Travel, Rome (Ciampino) 1991 to 2020 averages',
  url: 'https://www.climatestotravel.com/climate/italy/rome',
};

export const DAYLIGHT_SOURCE = {
  label: 'timeanddate.com sunrise and sunset tables for Rome',
  url: 'https://www.timeanddate.com/sun/italy/rome',
};

export const VATICAN_SOURCE = {
  label: 'Vatican Museums official days and hours of closure',
  url: 'https://www.museivaticani.va/content/museivaticani/en/info/orari-musei-vaticani.html',
};
