import { displayTourCard } from '@/lib/currency';
import { Tour } from '@/lib/types';
import InlineTourCTAClient from './InlineTourCTAClient';

export default function InlineTourCTA({ tours }: { tours: Tour[] }) {
  return <InlineTourCTAClient tours={tours.map(displayTourCard)} />;
}
