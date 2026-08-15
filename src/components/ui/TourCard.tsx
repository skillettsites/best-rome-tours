import { displayTourCard } from '@/lib/currency';
import { Tour } from '@/lib/types';
import TourCardClient from './TourCardClient';

export default function TourCard({ tour }: { tour: Tour }) {
  return <TourCardClient tour={displayTourCard(tour)} />;
}
