// Rome monthly climate.
//
// Temperature, rainfall, rain days and sunshine: Climates to Travel, Rome,
// measured at Ciampino airport, 1991 to 2020 reference period.
// https://www.climatestotravel.com/climate/italy/rome
//
// Daylight: length of day on the 15th of each month for Rome, read from the
// timeanddate.com sunrise and sunset tables.
// https://www.timeanddate.com/sun/italy/rome
//
// Sea temperature is the Tyrrhenian coast at Rome (Lido di Ostia, Fiumicino),
// same Climates to Travel page. Nothing here is estimated.

export interface ClimateRow {
  month: string;
  avgHighC: number;
  avgLowC: number;
  rainDays: number;
  rainMm: number;
  sunHoursPerDay: number;
  seaTempC: number;
  /** Length of day on the 15th, formatted. */
  daylight: string;
}

export const romeClimate: Record<string, ClimateRow> = {
  january: { month: 'January', avgHighC: 11.9, avgLowC: 3.5, rainDays: 7, rainMm: 66, sunHoursPerDay: 4.5, seaTempC: 15, daylight: '9h 28m' },
  february: { month: 'February', avgHighC: 13.0, avgLowC: 3.8, rainDays: 7, rainMm: 63, sunHoursPerDay: 5.5, seaTempC: 14, daylight: '10h 36m' },
  march: { month: 'March', avgHighC: 15.7, avgLowC: 6.0, rainDays: 7, rainMm: 59, sunHoursPerDay: 6, seaTempC: 14.5, daylight: '11h 54m' },
  april: { month: 'April', avgHighC: 18.8, avgLowC: 8.8, rainDays: 7, rainMm: 69, sunHoursPerDay: 7, seaTempC: 15.5, daylight: '13h 20m' },
  may: { month: 'May', avgHighC: 23.3, avgLowC: 12.6, rainDays: 6, rainMm: 57, sunHoursPerDay: 9, seaTempC: 18.5, daylight: '14h 33m' },
  june: { month: 'June', avgHighC: 28.0, avgLowC: 16.8, rainDays: 3, rainMm: 30, sunHoursPerDay: 10, seaTempC: 22, daylight: '15h 12m' },
  july: { month: 'July', avgHighC: 31.0, avgLowC: 19.4, rainDays: 2, rainMm: 20, sunHoursPerDay: 11, seaTempC: 25, daylight: '14h 55m' },
  august: { month: 'August', avgHighC: 31.4, avgLowC: 19.8, rainDays: 2, rainMm: 30, sunHoursPerDay: 10, seaTempC: 26, daylight: '13h 52m' },
  september: { month: 'September', avgHighC: 26.5, avgLowC: 16.1, rainDays: 6, rainMm: 65, sunHoursPerDay: 8, seaTempC: 24.5, daylight: '12h 30m' },
  october: { month: 'October', avgHighC: 22.0, avgLowC: 12.6, rainDays: 7, rainMm: 88, sunHoursPerDay: 6.5, seaTempC: 21.5, daylight: '11h 07m' },
  november: { month: 'November', avgHighC: 16.8, avgLowC: 8.6, rainDays: 9, rainMm: 108, sunHoursPerDay: 4.5, seaTempC: 19, daylight: '9h 50m' },
  december: { month: 'December', avgHighC: 12.8, avgLowC: 4.7, rainDays: 9, rainMm: 98, sunHoursPerDay: 4, seaTempC: 16.5, daylight: '9h 09m' },
};

export const MONTH_ORDER = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const;
