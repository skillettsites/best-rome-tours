import { displayTourCard, type DisplayTourCard } from '@/lib/currency';
import TourCardClient from './TourCardClient';

export default function TourCard({
  tour,
  priority = false,
  variant = 'default',
  section = 'tour-card-book',
  trackingVariant,
}: {
  tour: DisplayTourCard;
  priority?: boolean;
  variant?: 'default' | 'wide' | 'compact';
  section?: string;
  trackingVariant?: string;
}) {
  return (
    <TourCardClient
      tour={displayTourCard(tour)}
      priority={priority}
      variant={variant}
      section={section}
      trackingVariant={trackingVariant}
    />
  );
}
