import { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'skip-the-line',
    title: 'Skip-the-Line Tickets',
    metaTitle: 'Skip-the-Line Tickets in Rome 2026',
    metaDescription: 'Browse the best skip-the-line tickets in Rome. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best skip-the-line tickets in Rome, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated skip-the-line tickets in Rome, booked direct through GetYourGuide.',
    icon: '🎟️',
    tourSlugs: ['rome-colosseum-forum-palatine-hill-entry-and-audio-guide', 'vatican-museums-and-sistine-chapel-entrance-ticket', 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour', 'rome-colosseum-with-arena-floor-tours-and-ticket-options', 'colosseum-sunset-tour-with-entry', 'st-peters-basilica-pre-reserved-ticket-pope-catacombs', 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke', 'rome-castel-santangelo-entry-ticket-and-digital-audioguide'],
    faqs: [
      { question: 'How do I book skip-the-line tickets in Rome?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'guided-tours',
    title: 'Guided Tours',
    metaTitle: 'Guided Tours in Rome 2026',
    metaDescription: 'Browse the best guided tours in Rome. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best guided tours in Rome, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated guided tours in Rome, booked direct through GetYourGuide.',
    icon: '🧑‍🏫',
    tourSlugs: ['colosseum-roman-forum-and-palatine-hill-guided-tour', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour', 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour', 'rome-vatican-museums-sistine-chapel-and-basilica-tour', 'vatican-st-peters-basilica-dome-climb-and-papal-tombs-tour', 'colosseum-guided-tour-with-roman-forum-and-palatine-hill', 'colosseum-arena-forum-and-hill-tour-optional-underground', 'colosseum-by-evening-guided-tour-with-optional-arena-access', 'rome-st-peters-basilica-dome-climb-and-underground-tour', 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena', 'vatican-museums-and-sistine-chapel-tour-st-peters-basilica', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour-69620', 'trevi-fountain-subterranean-aqueducts-tour', 'rome-fiat-500-convertible-tour-with-photos', 'rome-city-sightseeing-hop-on-hop-off-bus-with-audioguide', 'rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour'],
    faqs: [
      { question: 'How do I book guided tours in Rome?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'food-drink',
    title: 'Food, Wine & Nightlife',
    metaTitle: 'Food, Wine & Nightlife in Rome 2026',
    metaDescription: 'Browse the best food, wine & nightlife in Rome. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best food, wine & nightlife in Rome, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated food, wine & nightlife in Rome, booked direct through GetYourGuide.',
    icon: '🍷',
    tourSlugs: ['rome-pasta-and-tiramisu-class-with-fine-wine-by-the-vatican'],
    faqs: [
      { question: 'How do I book food, wine & nightlife in Rome?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'top-attractions',
    title: 'Top Attractions',
    metaTitle: 'Top Attractions in Rome 2026',
    metaDescription: 'Browse the best top attractions in Rome. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best top attractions in Rome, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated top attractions in Rome, booked direct through GetYourGuide.',
    icon: '⭐',
    tourSlugs: ['rome-vip-private-golf-cart-experience'],
    faqs: [
      { question: 'How do I book top attractions in Rome?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
