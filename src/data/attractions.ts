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
  // Decision posts surfaced on the attraction page. Attraction pages hold the
  // impression mass but had no links into the blog layer at all.
  relatedPostSlugs?: string[];
}

export const attractions: Attraction[] = [
  {
    slug: 'colosseum',
    name: 'Colosseum',
    title: 'Colosseum Tickets and Tours',
    metaTitle: 'Colosseum Tickets and Tours 2026',
    metaDescription: 'Book Colosseum tickets and tours in Rome. 9 top-rated options from £15, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Colosseum tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['colosseum-roman-forum-and-palatine-hill-guided-tour', 'colosseum-guided-tour-with-roman-forum-and-palatine-hill', 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour', 'colosseum-arena-forum-and-hill-tour-optional-underground', 'colosseum-sunset-tour-with-entry', 'colosseum-by-evening-guided-tour-with-optional-arena-access', 'rome-colosseum-forum-palatine-hill-entry-and-audio-guide', 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena', 'rome-colosseum-with-arena-floor-tours-and-ticket-options'],
    faqs: [
      { question: 'How much are Colosseum tickets?', answer: 'Colosseum tickets and tours in Rome start from around £15. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Colosseum tour?', answer: 'The top-rated option is the Colosseum, Roman Forum & Palatine Hill Guided Tour, rated 4.8 stars by 87,363 travellers, from £42.' },
      { question: 'Can I skip the line at Colosseum?', answer: 'Yes, many Colosseum options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['is-the-colosseum-tour-worth-it', 'best-colosseum-ticket-which-tour-to-book', 'colosseum-arena-floor-vs-underground-tour'],
  },
  {
    slug: 'vatican-museums',
    name: 'Vatican Museums',
    title: 'Vatican Museums Tickets and Tours',
    metaTitle: 'Vatican Museums Tickets and Tours 2026',
    metaDescription: 'Book Vatican Museums tickets and tours in Rome. 8 top-rated options from £16, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Vatican Museums tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['rome-vatican-museums-sistine-chapel-and-basilica-tour', 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour-69620', 'vatican-museums-and-sistine-chapel-tour-st-peters-basilica', 'vatican-museums-and-sistine-chapel-entrance-ticket', 'vatican-st-peters-basilica-dome-climb-and-papal-tombs-tour', 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour'],
    faqs: [
      { question: 'How much are Vatican Museums tickets?', answer: 'Vatican Museums tickets and tours in Rome start from around £16. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Vatican Museums tour?', answer: 'The top-rated option is the Rome: Vatican Museums, Sistine Chapel & Basilica Tour, rated 4.7 stars by 17,015 travellers, from £59. For skip-the-line entry without a guide, the Vatican Museums & Sistine Chapel Entrance Ticket starts from £28.' },
      { question: 'Can I skip the line at Vatican Museums?', answer: 'Yes, many Vatican Museums options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['is-a-vatican-museums-tour-worth-it', 'vatican-vs-st-peters-basilica-which-tour', 'colosseum-vs-vatican-which-to-do-first'],
  },
  {
    slug: 'sistine-chapel',
    name: 'Sistine Chapel',
    title: 'Sistine Chapel Tickets and Tours',
    metaTitle: 'Sistine Chapel Tickets and Tours 2026',
    metaDescription: 'Book Sistine Chapel tickets and tours in Rome. 7 top-rated options from £25, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Sistine Chapel tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['rome-vatican-museums-sistine-chapel-and-basilica-tour', 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour-69620', 'vatican-museums-and-sistine-chapel-tour-st-peters-basilica', 'vatican-museums-and-sistine-chapel-entrance-ticket', 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour'],
    faqs: [
      { question: 'How much are Sistine Chapel tickets?', answer: 'Sistine Chapel tickets and tours in Rome start from around £25. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Sistine Chapel tour?', answer: 'The top-rated option is Vatican Museums, Sistine Chapel & Basilica Tour, rated 4.7 stars by 17,015 travellers, from £59.' },
      { question: 'Can I skip the line at Sistine Chapel?', answer: 'Yes, many Sistine Chapel options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['is-a-vatican-museums-tour-worth-it', 'vatican-vs-st-peters-basilica-which-tour', 'how-to-skip-the-line-in-rome'],
  },
  {
    slug: 'st-peters-basilica',
    name: 'St Peter’s Basilica',
    title: 'St Peter’s Basilica Tickets and Tours',
    metaTitle: 'St Peter’s Basilica Tickets and Tours 2026',
    metaDescription: 'Book St Peter’s Basilica tickets and tours in Rome. 5 top-rated options from £10, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best St Peter’s Basilica tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['rome-st-peters-basilica-dome-climb-and-underground-tour', 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour-69620', 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour', 'st-peters-basilica-pre-reserved-ticket-pope-catacombs'],
    faqs: [
      { question: 'How much are St Peter’s Basilica tickets?', answer: 'St Peter’s Basilica tickets and tours in Rome start from around £10. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best St Peter’s Basilica tour?', answer: 'The top-rated option is the St Peter\'s Basilica, Dome Climb and Underground Tour, rated 4.8 stars by 5,531 travellers, from £28. For the papal tombs on a budget, the Dome Climb & Papal Tombs tour starts from £16 and a pre-reserved entry ticket from £10.' },
      { question: 'Can I skip the line at St Peter’s Basilica?', answer: 'Yes, many St Peter’s Basilica options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['vatican-vs-st-peters-basilica-which-tour', 'which-rome-catacombs-tour-is-worth-it', 'how-to-skip-the-line-in-rome'],
  },
  {
    slug: 'roman-forum',
    name: 'Roman Forum',
    title: 'Roman Forum Tickets and Tours',
    metaTitle: 'Roman Forum Tickets and Tours 2026',
    metaDescription: 'Book Roman Forum tickets and tours in Rome. 2 top-rated options from £15, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Roman Forum tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['colosseum-roman-forum-and-palatine-hill-guided-tour', 'colosseum-guided-tour-with-roman-forum-and-palatine-hill'],
    faqs: [
      { question: 'How much are Roman Forum tickets?', answer: 'Roman Forum tickets and tours in Rome start from around £15. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Roman Forum tour?', answer: 'The top-rated option is the Colosseum, Roman Forum & Palatine Hill Guided Tour, rated 4.8 stars by 87,363 travellers, from £42. The same ticket covers all three sites.' },
      { question: 'Can I skip the line at Roman Forum?', answer: 'Yes, many Roman Forum options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['is-the-colosseum-tour-worth-it', 'best-colosseum-ticket-which-tour-to-book', 'colosseum-vs-vatican-which-to-do-first'],
  },
  {
    slug: 'roman-catacombs',
    name: 'Roman Catacombs',
    title: 'Roman Catacombs Tickets and Tours',
    metaTitle: 'Roman Catacombs Tickets and Tours 2026',
    metaDescription: 'Roman catacombs tickets and tours compared. The Appian Way catacombs, the papal tombs under St Peter’s from £10, and the rest of underground Rome, with instant confirmation and free cancellation.',
    intro: 'Three different sites get sold as a Rome catacombs tour: the early Christian burial tunnels on the Appian Way, the papal tombs beneath St Peter’s Basilica, and the Capuchin bone crypt on Via Veneto. Below are the underground Rome tickets we rank, all bookable through GetYourGuide with instant confirmation and free cancellation on most options. If you specifically want the Appian Way tunnels, our catacombs guide explains what to look for.',
    tourSlugs: ['st-peters-basilica-pre-reserved-ticket-pope-catacombs', 'vatican-st-peters-basilica-dome-climb-and-papal-tombs-tour', 'rome-st-peters-basilica-dome-climb-and-underground-tour', 'trevi-fountain-subterranean-aqueducts-tour', 'colosseum-arena-forum-and-hill-tour-optional-underground'],
    faqs: [
      { question: 'How much are Roman catacombs tickets?', answer: 'The papal tombs beneath St Peter’s Basilica are the cheapest way underground in Rome, from £10 with a pre-reserved entry ticket or £16 on a guided tour that adds the dome climb. Entry to the Appian Way catacombs is inexpensive on its own, but tours out there are priced mostly on the guide and the transport.' },
      { question: 'What is the best Roman catacombs tour?', answer: 'For most visitors, the St Peter’s Basilica, Dome Climb & Papal Tombs tour, rated 4.5 stars by 3,444 travellers, from £16. It covers the Vatican Grottoes and the tombs of St Peter with a guide. The pre-reserved St Peter’s Basilica ticket, rated 4.3 by 1,150 travellers, does the same site from £10 without a guide.' },
      { question: 'Can you visit the Rome catacombs without a guide?', answer: 'Not on the Appian Way. San Callisto, San Sebastiano and Domitilla admit visitors only in guided groups led by an official site guide. The papal tombs under St Peter’s Basilica can be visited on a self-guided pre-reserved ticket from £10.' },
    ],
    relatedPostSlugs: ['which-rome-catacombs-tour-is-worth-it', 'vatican-vs-st-peters-basilica-which-tour', 'how-to-skip-the-line-in-rome'],
  },
  {
    slug: 'castel-santangelo',
    name: 'Castel Sant’Angelo',
    title: 'Castel Sant’Angelo Tickets and Tours',
    metaTitle: 'Castel Sant’Angelo Tickets and Tours 2026',
    metaDescription: 'Book Castel Sant’Angelo tickets and tours in Rome from £15, with skip-the-line where available, instant confirmation and free cancellation on most options.',
    intro: 'Compare the best Castel Sant’Angelo tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['rome-castel-santangelo-entry-ticket-and-digital-audioguide'],
    faqs: [
      { question: 'How much are Castel Sant’Angelo tickets?', answer: 'Castel Sant’Angelo tickets and tours in Rome start from around £15. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Castel Sant’Angelo tour?', answer: 'The top-rated option is Castel Sant\'Angelo Entry Ticket & Digital Audioguide, rated 4.6 stars by 8,141 travellers, from £15.' },
      { question: 'Can I skip the line at Castel Sant’Angelo?', answer: 'Yes. A pre-booked entry ticket skips the ticket desk, which is the main wait here. It is quieter than the Colosseum or the Vatican, but still worth booking ahead in summer.' },
    ],
    relatedPostSlugs: ['how-to-skip-the-line-in-rome', 'rome-skip-the-line-combo-tour-worth-it'],
  },
  {
    slug: 'trevi-fountain',
    name: 'Trevi Fountain',
    title: 'Trevi Fountain Tickets and Tours',
    metaTitle: 'Trevi Fountain Tickets and Tours 2026',
    metaDescription: 'Book Trevi Fountain tours in Rome from £22, including the subterranean aqueducts beneath the fountain. Instant confirmation and free cancellation on most options.',
    intro: 'Compare the best Trevi Fountain tickets and guided tours in Rome, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['trevi-fountain-subterranean-aqueducts-tour'],
    faqs: [
      { question: 'How much are Trevi Fountain tickets?', answer: 'Trevi Fountain tickets and tours in Rome start from around £22. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Trevi Fountain tour?', answer: 'The top-rated option is Trevi Fountain + Subterranean Aqueducts Tour, rated 4.1 stars by 292 travellers, from £22.' },
      { question: 'Can I skip the line at Trevi Fountain?', answer: 'The fountain itself is a free public square with no ticket. What you book here is the guided tour of the aqueducts beneath it, which has limited places, so reserve ahead in peak season.' },
    ],
    relatedPostSlugs: ['which-rome-catacombs-tour-is-worth-it', 'how-to-skip-the-line-in-rome'],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
