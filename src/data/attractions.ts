import { FAQ } from '@/lib/types';

export interface Attraction {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tourSlugs: string[];
  faqs: FAQ[];
}

export const attractions: Attraction[] = [
  {
    slug: 'colosseum',
    name: 'Colosseum',
    title: 'Colosseum Tickets and Tours',
    metaTitle: 'Colosseum Tickets and Tours 2026',
    metaDescription: 'Book Colosseum tickets and tours in Rome. 9 top-rated options from £21, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Colosseum tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['colosseum-roman-forum-and-palatine-hill-guided-tour', 'colosseum-guided-tour-with-roman-forum-and-palatine-hill', 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour', 'colosseum-arena-forum-and-hill-tour-optional-underground', 'colosseum-sunset-tour-with-entry', 'colosseum-by-evening-guided-tour-with-optional-arena-access', 'rome-colosseum-forum-palatine-hill-entry-and-audio-guide', 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena', 'rome-colosseum-with-arena-floor-tours-and-ticket-options'],
    faqs: [
      { question: 'How much are Colosseum tickets?', answer: 'Colosseum tickets and tours in Rome start from around £21. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Colosseum tour?', answer: 'The top-rated option is Colosseum, rated 4.8 stars by 85,952 travellers, from £42.' },
      { question: 'Can I skip the line at Colosseum?', answer: 'Yes, many Colosseum options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'vatican-museums',
    name: 'Vatican Museums',
    title: 'Vatican Museums Tickets and Tours',
    metaTitle: 'Vatican Museums Tickets and Tours 2026',
    metaDescription: 'Book Vatican Museums tickets and tours in Rome. 9 top-rated options from £16, with skip-the-line where available, instant confirmation and free cancellatio',
    intro: 'Compare the best Vatican Museums tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['rome-pasta-and-tiramisu-class-with-fine-wine-by-the-vatican', 'rome-vatican-museums-sistine-chapel-and-basilica-tour', 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour-69620', 'vatican-museums-and-sistine-chapel-tour-st-peters-basilica', 'vatican-museums-and-sistine-chapel-entrance-ticket', 'vatican-st-peters-basilica-dome-climb-and-papal-tombs-tour', 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour'],
    faqs: [
      { question: 'How much are Vatican Museums tickets?', answer: 'Vatican Museums tickets and tours in Rome start from around £16. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Vatican Museums tour?', answer: 'The top-rated option is Pasta & Tiramisu Class with Fine Wine by the Vatican, rated 4.9 stars by 6,906 travellers, from £29.' },
      { question: 'Can I skip the line at Vatican Museums?', answer: 'Yes, many Vatican Museums options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'sistine-chapel',
    name: 'Sistine Chapel',
    title: 'Sistine Chapel Tickets and Tours',
    metaTitle: 'Sistine Chapel Tickets and Tours 2026',
    metaDescription: 'Book Sistine Chapel tickets and tours in Rome. 7 top-rated options from £25, with skip-the-line where available, instant confirmation and free cancellation',
    intro: 'Compare the best Sistine Chapel tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['rome-vatican-museums-sistine-chapel-and-basilica-tour', 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour-69620', 'vatican-museums-and-sistine-chapel-tour-st-peters-basilica', 'vatican-museums-and-sistine-chapel-entrance-ticket', 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour'],
    faqs: [
      { question: 'How much are Sistine Chapel tickets?', answer: 'Sistine Chapel tickets and tours in Rome start from around £25. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Sistine Chapel tour?', answer: 'The top-rated option is Vatican Museums, Sistine Chapel & Basilica Tour, rated 4.7 stars by 16,540 travellers, from £64.' },
      { question: 'Can I skip the line at Sistine Chapel?', answer: 'Yes, many Sistine Chapel options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'st-peters-basilica',
    name: 'St Peter’s Basilica',
    title: 'St Peter’s Basilica Tickets and Tours',
    metaTitle: 'St Peter’s Basilica Tickets and Tours 2026',
    metaDescription: 'Book St Peter’s Basilica tickets and tours in Rome. 5 top-rated options from £10, with skip-the-line where available, instant confirmation and free cancell',
    intro: 'Compare the best St Peter’s Basilica tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['rome-st-peters-basilica-dome-climb-and-underground-tour', 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour-69620', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour', 'st-peters-basilica-pre-reserved-ticket-pope-catacombs'],
    faqs: [
      { question: 'How much are St Peter’s Basilica tickets?', answer: 'St Peter’s Basilica tickets and tours in Rome start from around £10. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best St Peter’s Basilica tour?', answer: 'The top-rated option is St. Peter\'s Basilica, Dome Climb, and Underground, rated 4.7 stars by 5,369 travellers, from £28.' },
      { question: 'Can I skip the line at St Peter’s Basilica?', answer: 'Yes, many St Peter’s Basilica options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'roman-forum',
    name: 'Roman Forum',
    title: 'Roman Forum Tickets and Tours',
    metaTitle: 'Roman Forum Tickets and Tours 2026',
    metaDescription: 'Book Roman Forum tickets and tours in Rome. 2 top-rated options from £21, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Roman Forum tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['colosseum-roman-forum-and-palatine-hill-guided-tour', 'colosseum-guided-tour-with-roman-forum-and-palatine-hill'],
    faqs: [
      { question: 'How much are Roman Forum tickets?', answer: 'Roman Forum tickets and tours in Rome start from around £21. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Roman Forum tour?', answer: 'The top-rated option is Colosseum, rated 4.8 stars by 85,952 travellers, from £42.' },
      { question: 'Can I skip the line at Roman Forum?', answer: 'Yes, many Roman Forum options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'roman-catacombs',
    name: 'Roman Catacombs',
    title: 'Roman Catacombs Tickets and Tours',
    metaTitle: 'Roman Catacombs Tickets and Tours 2026',
    metaDescription: 'Book Roman Catacombs tickets and tours in Rome. 1 top-rated options from £10, with skip-the-line where available, instant confirmation and free cancellatio',
    intro: 'Compare the best Roman Catacombs tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['st-peters-basilica-pre-reserved-ticket-pope-catacombs'],
    faqs: [
      { question: 'How much are Roman Catacombs tickets?', answer: 'Roman Catacombs tickets and tours in Rome start from around £10. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Roman Catacombs tour?', answer: 'The top-rated option is St. Peter’s Basilica Pre, rated 4.3 stars by 1,106 travellers, from £10.' },
      { question: 'Can I skip the line at Roman Catacombs?', answer: 'Yes, many Roman Catacombs options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'castel-santangelo',
    name: 'Castel Sant’Angelo',
    title: 'Castel Sant’Angelo Tickets and Tours',
    metaTitle: 'Castel Sant’Angelo Tickets and Tours 2026',
    metaDescription: 'Book Castel Sant’Angelo tickets and tours in Rome. 1 top-rated options from £15, with skip-the-line where available, instant confirmation and free cancella',
    intro: 'Compare the best Castel Sant’Angelo tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['rome-castel-santangelo-entry-ticket-and-digital-audioguide'],
    faqs: [
      { question: 'How much are Castel Sant’Angelo tickets?', answer: 'Castel Sant’Angelo tickets and tours in Rome start from around £15. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Castel Sant’Angelo tour?', answer: 'The top-rated option is Castel Sant\'Angelo Entry Ticket & Digital Audioguide, rated 4.6 stars by 7,897 travellers, from £15.' },
      { question: 'Can I skip the line at Castel Sant’Angelo?', answer: 'Yes, many Castel Sant’Angelo options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'trevi-fountain',
    name: 'Trevi Fountain',
    title: 'Trevi Fountain Tickets and Tours',
    metaTitle: 'Trevi Fountain Tickets and Tours 2026',
    metaDescription: 'Book Trevi Fountain tickets and tours in Rome. 1 top-rated options from £21, with skip-the-line where available, instant confirmation and free cancellation',
    intro: 'Compare the best Trevi Fountain tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['trevi-fountain-subterranean-aqueducts-tour'],
    faqs: [
      { question: 'How much are Trevi Fountain tickets?', answer: 'Trevi Fountain tickets and tours in Rome start from around £21. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Trevi Fountain tour?', answer: 'The top-rated option is Trevi Fountain + Subterranean Aqueducts Tour, rated 4.1 stars by 239 travellers, from £21.' },
      { question: 'Can I skip the line at Trevi Fountain?', answer: 'Yes, many Trevi Fountain options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
