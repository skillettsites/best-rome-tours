import { MonthContent } from '@/lib/season-types';

// August through December.
//
// Every closure date here comes from the Vatican Museums' own days-and-hours
// page. Every public holiday is a fixed Italian national holiday. Weekdays were
// calculated, not assumed. Nothing on the "could not verify" list (Colosseum
// opening hours, Colosseum night-tour season, state-museum free Sundays) is
// stated as fact anywhere on these pages.

export const august: MonthContent = {
  slug: 'rome-in-august',
  month: 'August',
  monthKey: 'august',
  yearOffset: 0,
  prevMonth: 'July',
  prevPath: '/best-time-to-visit-rome#july',
  nextMonth: 'September',
  nextPath: '/rome-in-september',
  metaDescription:
    'Rome in August: 31.4C average highs, two rain days and a three-day Vatican Museums closure on 14, 15 and 16 August. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'August is the hottest month in Rome, with average highs of 31.4C, lows of 19.8C and only two rainy days. It is also the one month when the Vatican Museums shut for three days running. Book indoor and evening slots and August works far better than its reputation suggests.',

  verdict: {
    capsule:
      'Yes, with one condition: you build the day around the heat rather than fighting it. Average highs hit 31.4C, the highest of the year, and the city runs at roughly half its normal working population. Museums and evening tours are comfortable. Midday walking tours of open archaeology are not.',
    body: [
      'August in Rome divides into two different cities. Before about 10:30 and after about 18:30 it is one of the best months of the year: the light is extraordinary, the queues are shorter than June, and the historic centre empties of Roman commuters. Between 11:00 and 17:00 it is a genuine endurance test, particularly on the Palatine Hill and the upper tiers of the Colosseum, where there is almost no shade and the travertine radiates heat back at you.',
      'The compensations are real. Rome gets an average of ten hours of sunshine a day in August and only two days of rain in the whole month, so almost nothing gets cancelled by weather. Hotel rates in the historic centre soften relative to the June and September shoulders, and the Tyrrhenian sea off Ostia reaches 26C, its annual peak, which makes a half day at the coast a genuine option rather than a compromise.',
      'The one thing you cannot plan around is the mid-month closure. The Vatican Museums close on 14 and 15 August every year, and this year the Sunday that follows is the third consecutive day the complex is shut. If the Sistine Chapel is the reason you are coming, do not arrive on the 13th for a four-night stay.',
    ],
  },

  weather: {
    capsule:
      'Expect 31.4C average highs and 19.8C lows, two days of rain across the whole month and around ten hours of sunshine a day. Daylight runs about 13 hours 52 minutes in mid-August, with sunset just after 20:10. Sea temperature off the Roman coast peaks at 26C.',
    body: [
      'The averages understate the afternoons. A 31.4C average high means a fair number of days above 35C, and Rome holds heat overnight because of the mass of stone in the centre; the 19.8C average low is measured at the airport, and the Campo Marzio backstreets do not get down there. Air conditioning is close to universal in hotels but far from universal in apartments, so check the listing rather than assuming.',
      'Rain is a non-issue statistically, at two days in the month, but the rain that does fall usually arrives as a short violent thunderstorm in the late afternoon rather than as drizzle. Cobbles get slick fast. If one catches you, it will normally have cleared inside an hour.',
      'The other seasonal factor is light. Mid-August still gives you nearly 14 hours of daylight, so a 19:00 tour start is genuinely a daylight tour, not a night tour. That window is the single most useful piece of scheduling information for an August trip.',
    ],
  },

  crowds: {
    capsule:
      'August is busy with visitors and empty of Romans. Queues at the Colosseum and the Vatican are long every morning, so timed entry is not optional. The Borghese Gallery admits nobody without a timed reservation in any month, and August is not an exception.',
    body: [
      'Book the Vatican Museums and anything Colosseum-related before you fly. Both run on timed entry, both sell out for the popular morning slots in August, and the queue you skip is an outdoor one in direct sun. The Borghese Gallery works differently again: it opens Tuesday to Sunday, 09:00 to 19:00, and turns away anyone without a booked time slot, so treat it as a fixed appointment in your itinerary rather than a maybe.',
      'The Roma Pass is worth a look but not for the reason most people assume. It costs 62.90 euros for 72 hours and 38.00 euros for 48 hours, and the official description makes no promise of skipping queues, so buy it for the transport and the included entries, not for line-jumping.',
      'Roman August has one quirk worth knowing. Around Ferragosto on 15 August a share of the city shuts for the long weekend. Inside the historic centre most restaurants stay open because they trade on visitors; move out into the residential quarters and roughly half of the neighbourhood places will have a handwritten sign on the shutter. Book dinner rather than wandering.',
    ],
  },

  tours: {
    capsule:
      'Our ten are ranked on verified GetYourGuide review volume, then re-ordered for August so that indoor, early and evening experiences sit above open-air midday ones. Prices, ratings and review counts below were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'Escaping the afternoon heat',
        why: 'Top of the list on review volume and top on sense for August: the galleries are indoors and climate controlled, which counts for more this month than any other. Just do not aim for 14, 15 or 16 August, when the complex is shut.',
      },
      {
        slug: 'colosseum-sunset-tour-with-entry',
        bestFor: 'Golden hour without the midday furnace',
        why: 'Ranked up sharply for August. The Colosseum has almost no shade on its upper tiers, and a sunset slot puts you there once the travertine has stopped throwing heat back at you.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'First-timers doing ancient Rome properly',
        why: 'The most-reviewed guided combination on this site. In August take the earliest departure on offer: the Forum and Palatine are open ground and the walk between them has no cover at all.',
      },
      {
        slug: 'colosseum-by-evening-guided-tour-with-optional-arena-access',
        bestFor: 'Couples and anyone heat-sensitive',
        why: 'Ranked up for the season. Reserved evening entry is the cleanest answer to an August afternoon, and the crowd inside thins once the day-trip coaches have left the city.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites in one visit',
        why: 'Worth the extra over a plain ticket in August specifically because the guided route uses the internal passage from the Sistine Chapel through to the Basilica, so you never rejoin the security queue out on St Peter\'s Square in the sun.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors who hate queues',
        why: 'The Vatican general queue is outdoors and largely unshaded, which makes skipping it worth materially more in August than the same ticket is worth in February.',
      },
      {
        slug: 'rome-pasta-and-tiramisu-class-with-fine-wine-by-the-vatican',
        bestFor: 'An indoor afternoon that is not a museum',
        why: 'Ranked up from the mid-table on reviews. It carries the highest rating of anything in our Rome list, and a seated indoor kitchen is a sane way to spend the 14:00 to 17:00 block in August.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'The arena floor is the one part of the Colosseum where the crowd flow is controlled, so the experience holds up in a busy month. Pick a morning slot and carry water; there is no shade down there.',
      },
      {
        slug: 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena',
        bestFor: 'Going at your own pace',
        why: 'The app format is the right one for August because you set the pace and can retreat into the Colosseum\'s covered corridors whenever you need to, rather than keeping up with a group.',
      },
      {
        slug: 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour',
        bestFor: 'One guided sweep of the whole Vatican',
        why: 'The single-visit option for people with limited time and limited tolerance for standing outside. One entry, one guide, three sites, and no second security line at the Basilica.',
      },
    ],
    note:
      'Both hop-on hop-off bus tours drop out of the August ten despite holding more than 29,000 reviews between them. Their selling point is the open top deck, and an open top deck in a Roman August afternoon is not a selling point. They return to the ranking in September.',
  },

  events: {
    capsule:
      'August in Rome is defined by one date: Ferragosto on 15 August, the Assumption, a national public holiday. The free last-Sunday opening at the Vatican Museums falls on 30 August. General audiences resume their normal Wednesday rhythm after the July pause.',
    rows: [
      { event: 'Ferragosto, Feast of the Assumption', dates: 'Saturday 15 August', where: 'Nationwide, churches and piazzas across Rome', free: 'Public holiday' },
      { event: 'Papal general audience', dates: 'Wednesdays 5, 12, 19 and 26 August', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 30 August, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
      { event: 'Necropolis of the Via Triumphalis reopens', dates: 'From 4 September, closed until 3 September', where: 'Vatican', free: 'Ticketed' },
    ],
    body: [
      'Ferragosto lands on a Saturday, which makes it a straightforward Saturday and Sunday long weekend rather than the awkward midweek ponte that empties the city for four or five days. That is good news for visitors. The Colosseum, the Roman Forum, the Palatine, the Ara Pacis, the state museums, the civic museums and the Borghese Gallery all keep normal hours through it.',
      'General audiences with the Pope are held on Wednesdays and tickets are free, requested through the Prefecture of the Papal Household. The month that gets suspended in the papal calendar is July, not August, so expect the normal Wednesday pattern all month. The Sunday Angelus is not suspended in July either; it simply relocates to Castel Gandolfo.',
      'Rome also runs a long summer arts programme across the riverbanks and the archaeological sites through the season. The line-up is published by the city rather than fixed to the same dates each year, so check the current programme when you arrive rather than planning a trip around it.',
    ],
  },

  closures: {
    capsule:
      'The Vatican Museums close on 14 and 15 August, and because the following day is a Sunday that becomes three consecutive days with no access to the Sistine Chapel. The Vatican Gardens and the Via Triumphalis Necropolis are closed on Sundays and public holidays in every month.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Friday 14, Saturday 15 and Sunday 16 August', note: 'Three consecutive days. 14 and 15 August are on the official annual closure list; 16 August is the standard Sunday closure.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Every other Sunday in August', note: 'Except Sunday 30 August, the free last-Sunday opening, 09:00 to 14:00 with last entry at 12:30.' },
      { site: 'Necropolis of the Via Triumphalis', closed: 'All August', note: 'Closed from 15 July to 3 September. Reopens 4 September.' },
      { site: 'Vatican Gardens', closed: 'Sundays and public holidays', note: 'A year-round rule, not an August one.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission at all without a timed reservation.' },
      { site: 'Restaurants outside the historic centre', closed: 'Around 15 August', note: 'Most places inside the centre trade through. In the residential quarters a large share close for the long weekend.' },
    ],
    body: [
      'The three-day gap in the middle of August is the single most useful planning fact on this page, and most Rome guides do not mention it. The Vatican Museums run Monday to Saturday, 08:00 to 20:00, with last entry at 18:00, and close on Sundays apart from the last Sunday of the month. Layer the fixed 14 and 15 August closures on top of the normal Sunday closure and you get Friday, Saturday and Sunday with the Sistine Chapel shut.',
      'The free last-Sunday opening on 30 August runs 09:00 to 14:00 with last entry at 12:30. Free is not the same as easy: it is the busiest morning of the month inside those galleries, and you cannot pre-book your way past the queue. If your trip is short, a paid timed slot on a weekday is the better use of the time.',
      'For the Colosseum, opening hours vary through the year and closing is earlier in the winter months. We do not publish specific times here because we could not verify them from the official source at the time of writing, so check the official Colosseum site before you commit to a late slot. Your booked tour time is the one that governs your entry.',
    ],
  },

  packing: {
    capsule:
      'Pack for 31.4C afternoons, marble floors and a strict Vatican dress code. Shoulders and knees must be covered to enter St Peter\'s Basilica and the Vatican Museums, which rules out the vest and shorts most people would otherwise wear in a Roman August.',
    body: [
      'The dress code is the trap. The Vatican enforces covered shoulders and knees on men and women, and being turned away at the security line after an hour in the sun is a miserable way to lose a morning. A light linen shirt and a scarf that can double as a shoulder cover solve it without cooking you.',
      'Everything else is about heat and stone. Rome is a walking city with uneven basalt cobbles, and thin-soled sandals will punish you by the second day. Public drinking fountains, the nasoni, run cold and free all over the centre, so a refillable bottle removes most of the need to buy water.',
    ],
    list: [
      'Shoulder and knee cover for the Vatican and St Peter\'s Basilica',
      'Refillable water bottle for the nasoni street fountains',
      'Proper walking shoes with a cushioned sole for cobbles',
      'Brimmed hat and high-factor sun cream for the Forum and Palatine',
      'A light layer for air-conditioned galleries and evening river breeze',
    ],
  },

  faqs: [
    {
      question: 'Are the Vatican Museums open in August?',
      answer: 'Yes, apart from three consecutive days. The Museums run Monday to Saturday, 08:00 to 20:00 with last entry at 18:00, and close on Sundays. They also close on 14 and 15 August every year, and because 16 August is a Sunday that makes three days in a row with no access. The free last-Sunday opening falls on 30 August, 09:00 to 14:00 with last entry at 12:30.',
    },
    {
      question: 'Does Rome shut down for Ferragosto?',
      answer: 'Far less than its reputation suggests, and less than usual this year because 15 August falls on a Saturday, making it a normal weekend rather than a midweek bridge. The Colosseum, Roman Forum, Palatine, Ara Pacis, state and civic museums and the Borghese Gallery all keep normal hours. Most restaurants in the historic centre stay open; outside the centre a large share close for the weekend.',
    },
    {
      question: 'How hot does Rome actually get in August?',
      answer: 'The 1991 to 2020 average high for August at Rome Ciampino is 31.4C and the average low is 19.8C, making it the hottest month of the year. There are only two days of rain on average and around ten hours of sunshine a day. Individual afternoons above 35C are common, and the stone of the historic centre holds heat well into the evening.',
    },
    {
      question: 'Are there papal audiences in August?',
      answer: 'Yes. The general audience is held on Wednesdays and the month that is suspended in the papal calendar is July, not August, so expect the normal Wednesday rhythm through the month. Tickets are free and requested through the Prefecture of the Papal Household. The Sunday Angelus continues through the summer, relocating to Castel Gandolfo rather than pausing.',
    },
    {
      question: 'What is the best time of day for tours in Rome in August?',
      answer: 'Before 10:30 or after 18:30. Mid-August gives around 13 hours 52 minutes of daylight with sunset just after 20:10, so a 19:00 tour is still a daylight tour. Save open archaeology such as the Roman Forum and Palatine Hill for the early slot, and use the middle of the day for the air-conditioned Vatican Museums or an indoor cookery class.',
    },
    {
      question: 'Is it cheaper to visit Rome in August?',
      answer: 'Accommodation in the historic centre is generally softer in August than in the June and September shoulder months, because the business and conference trade stops. Flights are not, since August is peak European holiday season. Tour prices themselves do not move much by month; what changes is availability, and the popular morning Colosseum and Vatican slots sell out well ahead.',
    },
  ],
};

export const september: MonthContent = {
  slug: 'rome-in-september',
  month: 'September',
  monthKey: 'september',
  yearOffset: 0,
  prevMonth: 'August',
  prevPath: '/rome-in-august',
  nextMonth: 'October',
  nextPath: '/rome-in-october',
  metaDescription:
    'Rome in September: 26.5C highs, six rain days and no mid-month Vatican closure. Weather table, what is closed, dated events and ten tours ranked for the shoulder season.',
  heroCapsule:
    'September is the best all-round month to visit Rome. Average highs drop from the August peak to 26.5C, the sea is still 24.5C, and there is no equivalent of the mid-August closure. The trade is six days of rain instead of two, and the return of the Roman rush hour.',

  verdict: {
    capsule:
      'Yes, and it is the strongest month on this page. Highs fall almost five degrees from August to 26.5C while the sea holds 24.5C, so you get comfortable sightseeing and a usable coast in the same week. Rain days rise from two to six, which is the only real cost.',
    body: [
      'September is what people mean when they talk about Rome without saying so. Walking the Forum at midday becomes pleasant rather than punishing. Outdoor restaurant tables, which are miserable in August and unusable in November, are at their best. Twelve and a half hours of daylight in mid-month is enough for a full day of sights plus an evening walk.',
      'The city itself changes character in the first week. Romans come back from the coast, the shops reopen, and the neighbourhood restaurants that shuttered for Ferragosto lift their blinds. That is a net gain for a visitor: more of the city is actually operating in September than in August.',
      'The counterweight is competition. September is a heavy month for conferences and for the older-traveller market that deliberately avoids the summer, so hotel rates in the centre firm up and the best Vatican time slots go earlier. Book the fixed-time items first and build the rest of the trip around them.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 26.5C and lows of 16.1C, six rain days, around eight hours of sunshine a day. Daylight is about 12 hours 30 minutes in mid-September and falls fast, from roughly 13 hours 08 minutes on the 1st to 11 hours 48 minutes by the 30th. Sea temperature holds at 24.5C.',
    body: [
      'The month is really two halves. The first ten days behave like a cooler August: hot afternoons, reliable sun, warm evenings that still support dinner outdoors at 22:00. The last ten days behave like early autumn, with the first proper Atlantic fronts arriving and evenings that want a light jacket.',
      'Rainfall jumps from 30mm in August to 65mm in September, spread over six days. In practice that means the odd washed-out afternoon rather than a wet week. It is the first month of the year where an indoor fallback in the itinerary is genuinely useful rather than theoretical.',
      'The daylight loss is steeper than people expect. Rome sheds around an hour and twenty minutes of daylight across September alone, so an evening tour booked for the last week of the month is a very different experience from the same slot booked for the first week.',
    ],
  },

  crowds: {
    capsule:
      'September is busier than August in the museums and calmer in the streets. Vatican and Colosseum timed slots need booking well ahead; the Borghese Gallery still admits nobody without a reservation. Hotel prices in the centre are at or near their annual high.',
    body: [
      'Treat the Vatican Museums and any Colosseum ticket as fixed appointments to be booked before you travel. Both operate on timed entry and September is one of the two peak booking months of the year. The free last-Sunday opening on 27 September is the busiest morning of the month inside the Museums and cannot be pre-booked, so if your stay is short, pay for a weekday slot instead.',
      'For the rest, September is forgiving. Restaurants have reopened after the summer break, the queues at the Trevi Fountain and Pantheon thin out noticeably after 19:00, and the shorter evenings push the crowd home earlier than in July.',
      'One practical note on the Vatican: the Necropolis of the Via Triumphalis reopens on 4 September after its summer closure, which makes September the first month of the season in which the full Vatican site list is available again.',
    ],
  },

  tours: {
    capsule:
      'September restores the ranking closest to raw popularity, because almost nothing is ruled out by weather. The two open-top bus tours come back into the ten, and the St Peter\'s dome climb moves up now that the stairwell is no longer a furnace.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'The single must-do, done cheaply',
        why: 'The most-reviewed listing on this site by a wide margin, and September is the month it is easiest to get a good slot for without booking three months out.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'First-timers doing ancient Rome properly',
        why: 'This is the month the full three-site walk actually works end to end. In August the Palatine section defeats people; at 26.5C it is a pleasant ninety minutes.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites in one visit',
        why: 'Keeps its high placing on review volume alone. The internal route through to the Basilica saves you the second security queue, which is still long in September.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'Ranked up slightly on August. Arena floor slots are capped, and September demand is high enough that the early-morning departures go first.',
      },
      {
        slug: 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena',
        bestFor: 'Going at your own pace',
        why: 'The self-paced format suits a month with six rain days: you can pause under cover and pick the route back up rather than losing a guided group.',
      },
      {
        slug: 'rome-vatican-museums-sistine-chapel-and-basilica-tour',
        bestFor: 'A guided route with a curated selection',
        why: 'The highest-rated of the big-volume Vatican guided options. Worth the premium in a month where the galleries are full and a guide sets the pace through the bottlenecks.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors who hate queues',
        why: 'September queues at the Vatican are long but no longer brutal, so this is the month the plain skip-the-line ticket gives the best value against the guided alternatives.',
      },
      {
        slug: 'rome-city-sightseeing-hop-on-hop-off-bus-with-audioguide',
        bestFor: 'A first orientation lap of the city',
        why: 'Back in the ranking after being dropped for August. The open top deck is the whole point, and at 26.5C with eight hours of sun a day it is finally comfortable.',
      },
      {
        slug: 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour',
        bestFor: 'One guided sweep of the whole Vatican',
        why: 'The efficient option if you have a single Vatican morning and want the Museums, the Sistine Chapel and the Basilica covered without rejoining a queue in between.',
      },
      {
        slug: 'rome-st-peters-basilica-dome-climb-and-underground-tour',
        bestFor: 'The best view in Rome',
        why: 'Ranked up for the shoulder season. The dome stairwell is narrow, enclosed and unventilated, which makes it a September activity rather than an August one.',
      },
    ],
    note:
      'The Colosseum sunset and evening tours slip out of the top ten this month. They are still good, but sunset moves from just after 20:10 in August to around 18:53 by the end of September, so the golden-hour premium they carry in high summer shrinks fast.',
  },

  events: {
    capsule:
      'September has no national public holiday, which makes it the cleanest month of the ten for opening hours. The free last-Sunday opening at the Vatican Museums falls on 27 September, and the Via Triumphalis Necropolis reopens on 4 September after its summer closure.',
    rows: [
      { event: 'Necropolis of the Via Triumphalis reopens', dates: 'Friday 4 September', where: 'Vatican', free: 'Ticketed, reservation required' },
      { event: 'Papal general audience', dates: 'Wednesdays 2, 9, 16, 23 and 30 September', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 27 September, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
      { event: 'Autumn equinox', dates: 'Wednesday 23 September', where: 'Rome', free: 'Not applicable' },
    ],
    body: [
      'The absence of a public holiday is worth more than it sounds. Every other month in this ten-month window has at least one date on which something significant is shut. September has none, so the only closures to work around are the standing weekly ones.',
      'Rome runs an autumn cultural season that starts as the summer riverside programme winds down, and several museums schedule their major temporary exhibitions to open in late September. Programmes are announced by the individual institutions rather than on a fixed annual date, so check the venue when you are booking rather than planning around a rumour.',
      'If you want a papal general audience, September has five Wednesdays, the most of any month in this window apart from December and March. Tickets are free and requested through the Prefecture of the Papal Household.',
    ],
  },

  closures: {
    capsule:
      'September is the only month of the ten with no Italian public holiday and no fixed Vatican closure date. The Vatican Museums close on Sundays as usual, apart from the free last Sunday on 27 September. The Borghese Gallery closes on Mondays, as it does all year.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 6, 13 and 20 September', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Open Sunday 27 September', note: 'Free last-Sunday opening, 09:00 to 14:00, last entry 12:30.' },
      { site: 'Necropolis of the Via Triumphalis', closed: 'Until 3 September', note: 'Summer closure ends. Reopens 4 September. Also closed Sundays and public holidays year round.' },
      { site: 'Vatican Gardens', closed: 'Sundays and public holidays', note: 'A year-round rule.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
    ],
    body: [
      'This is the month to schedule anything you were nervous about elsewhere in the calendar. There is no Ferragosto gap, no Immacolata, no Easter, and nothing on the Vatican Museums\' fixed annual closure list falls in September.',
      'The one thing that does move is the Necropolis of the Via Triumphalis, which closes across the second half of the summer and reopens on 4 September. It runs on small guided groups with advance reservation, so if it is on your list, book it as soon as the September dates load.',
      'Colosseum opening hours change with the season and we do not publish specific times here, because we could not confirm them from the official source when this page was written. Your booked slot is what governs your entry; check the official Colosseum site if you are planning a late-afternoon visit in the last week of the month, when the light goes noticeably earlier.',
    ],
  },

  packing: {
    capsule:
      'Pack for a warm-day, cool-evening split and add one wet-weather item. Highs of 26.5C still call for summer clothing during the day, but six rain days and 16.1C nights mean a light jacket earns its place. The Vatican dress code applies in every month.',
    body: [
      'The single most useful addition to an August packing list is a compact folding umbrella. September storms in Rome arrive quickly, deliver a lot of water in half an hour and pass; an umbrella turns that into an inconvenience rather than a ruined afternoon.',
      'Otherwise the rules are unchanged. Covered shoulders and knees are required at St Peter\'s Basilica and in the Vatican Museums. Cobbles are still cobbles, and they are more slippery wet than dry, so the sole of your shoe matters more this month than last.',
    ],
    list: [
      'Compact folding umbrella for the six rain days',
      'Light jacket or overshirt for 16.1C evenings',
      'Shoulder and knee cover for the Vatican and St Peter\'s Basilica',
      'Grippy walking shoes, cobbles are slick when wet',
      'Swimwear if you are adding a coast day, the sea is still 24.5C',
    ],
  },

  faqs: [
    {
      question: 'Is September a good month to visit Rome?',
      answer: 'It is the strongest month in this ten-month window. Average highs fall to 26.5C from the August peak of 31.4C, the sea off the Roman coast still holds 24.5C, and there is no public holiday and no fixed Vatican closure date all month. The trade-off is six rain days instead of two and hotel rates at or near their annual high.',
    },
    {
      question: 'Is Rome still hot in September?',
      answer: 'Warm rather than hot, and the month divides in two. The first ten days behave like a cooler August with hot afternoons and warm late evenings. The last ten days are noticeably autumnal, with the first Atlantic fronts arriving and evenings that want a light layer. The monthly average high is 26.5C with lows of 16.1C.',
    },
    {
      question: 'How much rain falls in Rome in September?',
      answer: 'About 65mm across roughly six days, up from 30mm and two days in August. It usually arrives as short heavy downpours rather than persistent drizzle, so an indoor fallback in the itinerary is useful rather than essential. A compact umbrella handles most of it.',
    },
    {
      question: 'When is the free Vatican Museums Sunday in September?',
      answer: 'Sunday 27 September, from 09:00 to 14:00 with last entry at 12:30. Entry is free but cannot be pre-booked and it is the busiest morning of the month inside the galleries. If your stay is short, a paid timed slot on a weekday is the better use of your time.',
    },
    {
      question: 'Do I still need to book tours in advance for September?',
      answer: 'Yes, for anything with timed entry. September is one of the two peak booking months of the year for Rome, driven by conference traffic and travellers who deliberately avoid the summer. The Vatican Museums, all Colosseum tickets and the Borghese Gallery run on fixed time slots, and the Borghese admits nobody at all without a reservation.',
    },
    {
      question: 'How long are the days in Rome in September?',
      answer: 'Around 12 hours 30 minutes in mid-September, but the month loses daylight quickly. Rome goes from roughly 13 hours 08 minutes on 1 September to 11 hours 48 minutes on the 30th, and sunset moves from about 19:43 to about 18:53. An evening tour in the last week is a very different experience from the same slot in the first week.',
    },
  ],
};

export const october: MonthContent = {
  slug: 'rome-in-october',
  month: 'October',
  monthKey: 'october',
  yearOffset: 0,
  prevMonth: 'September',
  prevPath: '/rome-in-september',
  nextMonth: 'November',
  nextPath: '/rome-in-november',
  metaDescription:
    'Rome in October: 22C highs, 88mm of rain over seven days and the clocks going back on 25 October. Weather table, closures, dated events and ten tours ranked for autumn.',
  heroCapsule:
    'October is the value month. Average highs of 22C are ideal for walking, but 88mm of rain over seven days makes it the wettest month so far, and the clocks go back on 25 October, cutting sunset from about 18:51 at the start of the month to around 17:05 at the end.',

  verdict: {
    capsule:
      'Yes, if you accept that the evenings disappear. October gives 22C average highs, the best walking temperature of the ten months, and the crowds thin after the first fortnight. The cost is 88mm of rain across seven days and a sunset that moves nearly two hours earlier by the 31st.',
    body: [
      'For anyone whose Rome is museums, churches and long walks, October is arguably better than September. Twenty-two degrees is the temperature at which the Roman Forum, the Appian Way and the Trastevere backstreets are all genuinely enjoyable rather than endured. The light in the second half of the month is the best of the year for photographs.',
      'What October takes away is the evening. On 1 October the sun sets at about 18:51. On 31 October, after the clocks go back on the 25th, it sets at about 17:05. That is a structural change to how a day in Rome works: aperitivo happens in the dark, evening archaeology tours lose their appeal, and you need to front-load the outdoor part of the day.',
      'Rainfall is the other shift. Rome takes 88mm in October, more than any month so far in this window, spread over seven days. That is a wet-afternoon-in-three trip, which is entirely manageable if the itinerary has indoor options and a problem if it does not.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 22C and lows of 12.6C, seven rain days totalling 88mm, and around six and a half hours of sunshine a day. Daylight is about 11 hours 07 minutes in mid-October. Central European Summer Time ends on Sunday 25 October, when clocks go back an hour.',
    body: [
      'October in Rome is mild rather than cold. A 22C average high with 12.6C lows means shirt-sleeve afternoons and jacket evenings, and the sea off Ostia still reads 21.5C, warmer than the air on a wet day. Frost is not a consideration and heating is rarely switched on in the first half of the month.',
      'The rain is the defining number. At 88mm it is nearly three times August and up 35 per cent on September, and it tends to come in longer, greyer episodes than the sharp summer thunderstorms. Seven rain days in 31 means you should assume at least two of them land on your trip if you are staying a week.',
      'The clock change on 25 October matters more in Rome than in northern Europe, because so much of the sightseeing is outdoors and unlit. Plan the Forum, the Palatine, the Appian Way and any rooftop or terrace for the morning after that date.',
    ],
  },

  crowds: {
    capsule:
      'Crowds fall away through October. The first two weeks still carry September volumes; by the last week the queues at the Pantheon and Trevi Fountain are visibly shorter. Vatican and Colosseum timed slots still need booking, and the Borghese Gallery still refuses walk-ups.',
    body: [
      'October is the first month of the window where you have some chance of getting a decent Vatican Museums slot at short notice, particularly in the last ten days. That said, the Museums are the one Rome attraction where booking ahead pays in every month of the year, because the alternative queue is long and now often wet.',
      'Hotel rates in the historic centre drop through the month, with the sharpest fall after the first week. If you are flexible, the last ten days of October are among the best value of the whole year in Rome, combining low-season pricing with weather that is still comfortable.',
      'One structural note on the city\'s museums. The old universal free-first-Sunday arrangement at Rome\'s civic museums has changed and free access to Roma Capitale sites is now a benefit for residents of the Metropolitan Area rather than something visitors can claim. Four civic museums are free to everyone all year: the Museo della Repubblica Romana, the Museo di Casal de\' Pazzi, the Museo delle Mura and the Casa Museo Alberto Moravia.',
    ],
  },

  tours: {
    capsule:
      'October\'s ranking pulls indoor and compact experiences up and evening ones down, because sunset moves nearly two hours earlier across the month. Castel Sant\'Angelo enters the ten: it is the right size of sight for an afternoon with a chance of rain.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'A guaranteed indoor half-day',
        why: 'Holds first place on review volume and gains from the weather. With seven rain days in the month, the largest indoor attraction in Rome is the obvious anchor for the itinerary.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'Walking ancient Rome at the right temperature',
        why: 'Twenty-two degrees is the best walking temperature of the year for this three-site route. Take a morning slot in the last week of the month, when the light goes by 17:05.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites in one visit',
        why: 'The guided internal route to the Basilica keeps you inside and out of the weather between the Sistine Chapel and St Peter\'s, which is worth more in October than in the dry months.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'Arena floor access is genuinely more pleasant in autumn: the surface is uncovered, so the difference between a 22C October morning and a 31C August one is stark.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors who hate queues',
        why: 'Ranked up for October. The Vatican general queue is outdoors, and standing in it in the rain is the specific misery this ticket exists to prevent.',
      },
      {
        slug: 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena',
        bestFor: 'Going at your own pace',
        why: 'Self-paced entry is the flexible choice in a wetter month. You can sit out a shower under the Colosseum\'s covered arcades without losing your place in a guided group.',
      },
      {
        slug: 'rome-vatican-museums-sistine-chapel-and-basilica-tour',
        bestFor: 'A guided route with a curated selection',
        why: 'The highest-rated of the high-volume Vatican guided tours, and October is the first month of the season when its better slots are available at short notice.',
      },
      {
        slug: 'rome-castel-santangelo-entry-ticket-and-digital-audioguide',
        bestFor: 'A compact indoor sight with a rooftop finish',
        why: 'New to the ten this month. It is a tightly enclosed spiral route ending on a terrace over the Tiber, which makes it the ideal two-hour filler for an afternoon that might rain.',
      },
      {
        slug: 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour',
        bestFor: 'One guided sweep of the whole Vatican',
        why: 'Still the efficient single-morning option, and October demand is light enough that you can usually pick your start time rather than take what is left.',
      },
      {
        slug: 'rome-city-sightseeing-hop-on-hop-off-bus-with-audioguide',
        bestFor: 'Covering ground on a dry day',
        why: 'Holds its place, but with a caveat that does not apply in September: check the forecast on the morning. The value is in the open top deck, and that value disappears in rain.',
      },
    ],
    note:
      'The Colosseum sunset and evening tours are out of the October ten. After the clocks go back on 25 October, sunset is around 17:05, so an evening slot is a night slot, and the sweeping views over the Forum that justify the premium are simply not visible.',
  },

  events: {
    capsule:
      'October has no Italian public holiday. The two dates that matter are the end of summer time on Sunday 25 October, which is also the free last-Sunday opening at the Vatican Museums, and the switch of the St Peter\'s dome to its winter timetable from the 26th.',
    rows: [
      { event: 'Papal general audience', dates: 'Wednesdays 7, 14, 21 and 28 October', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Clocks go back, summer time ends', dates: 'Sunday 25 October', where: 'Italy and the EU', free: 'Not applicable' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 25 October, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
      { event: 'St Peter\'s dome switches to winter hours', dates: 'From Monday 26 October', where: 'St Peter\'s Basilica', free: 'Ticketed' },
    ],
    body: [
      'The 25th is a genuinely busy date: the clocks change overnight and the Vatican Museums hold their free opening the same morning. If you plan to go, remember your phone will have moved the hour but a hotel alarm clock may not have.',
      'The St Peter\'s dome timetable is worth flagging because it does not follow calendar months. The dome runs summer hours of 07:00 to 18:00 and winter hours of 07:30 to 17:00, and it switches on the daylight saving boundaries rather than on the 1st of a month. Summer hours run to 25 October and winter hours begin on 26 October.',
      'Rome hosts a major film festival in the autumn along with the start of the concert and opera season. Dates are set by the organisers each year rather than fixed to the same week, so check the current programme rather than assuming last year\'s dates repeat.',
    ],
  },

  closures: {
    capsule:
      'Nothing on the Vatican Museums\' fixed annual closure list falls in October, and Italy has no public holiday this month. The standing closures apply: Sundays at the Vatican Museums apart from the 25th, Mondays at the Borghese Gallery, and Sundays and holidays for the Vatican Gardens.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 4, 11 and 18 October', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Open Sunday 25 October', note: 'Free last-Sunday opening, 09:00 to 14:00, last entry 12:30.' },
      { site: 'Vatican Gardens and Via Triumphalis Necropolis', closed: 'Sundays and public holidays', note: 'A year-round rule. Both need advance reservation.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
      { site: 'St Peter\'s dome, summer timetable', closed: 'Ends 25 October', note: 'Winter hours of 07:30 to 17:00 apply from 26 October. The Basilica itself opens from 07:00.' },
    ],
    body: [
      'October is the second of only two months in this window with no fixed Vatican closure date and no national holiday, which makes it an unusually clean month to plan. The one thing to build around is the light rather than a shut door.',
      'The St Peter\'s dome climb comes in two forms, lift to the terrace then stairs, or all stairs, and both include access to the Basilica. From 26 October the last practical window closes an hour earlier than it did in summer, so a dome climb becomes a morning activity rather than an end-of-day one.',
      'On the Colosseum, winter closing is earlier than summer closing and we do not publish exact times here because they could not be confirmed from the official source when this page was written. Check the official Colosseum site before booking anything in the last hours of the day in the second half of the month.',
    ],
  },

  packing: {
    capsule:
      'October needs two wardrobes in one bag. Afternoons at 22C are shirt-sleeve weather; evenings at 12.6C after a 17:05 sunset are not. Add genuinely waterproof outerwear rather than a shower-resistant jacket, because 88mm of rain over seven days is real rain.',
    body: [
      'The mistake people make in a Roman October is packing for the average and getting caught by the range. There is nearly ten degrees between the average high and the average low, and the gap feels wider once the sun has gone at 17:05. Layers beat a single heavy coat.',
      'Footwear does more work this month than any other. Rome\'s basalt sampietrini cobbles become genuinely slippery in the rain, and the historic centre has very few flat surfaces. A shoe with a grippy sole and a waterproof upper is worth more than a stylish one.',
    ],
    list: [
      'Properly waterproof jacket, not just shower-resistant',
      'Layers for a ten-degree daily swing',
      'Grippy waterproof shoes for wet sampietrini cobbles',
      'Shoulder and knee cover for the Vatican and St Peter\'s Basilica',
      'A small torch or a charged phone for unlit streets after 17:05',
    ],
  },

  faqs: [
    {
      question: 'What is the weather like in Rome in October?',
      answer: 'Mild and increasingly wet. Average highs are 22C with lows of 12.6C, and Rome takes 88mm of rain across about seven days, the most of any month so far in the autumn. Sunshine averages around six and a half hours a day. The sea off the Roman coast is still 21.5C, often warmer than the air on a wet day.',
    },
    {
      question: 'When do the clocks change in Rome in October?',
      answer: 'Summer time ends on Sunday 25 October, when clocks go back an hour. The effect is dramatic for sightseeing: sunset moves from about 18:51 on 1 October to about 17:05 on the 31st. Schedule the Roman Forum, Palatine Hill, the Appian Way and any terrace or rooftop for the morning in the last week of the month.',
    },
    {
      question: 'Are Rome\'s civic museums free on the first Sunday of the month?',
      answer: 'No, not for visitors. The old universal free-first-Sunday arrangement has changed and free access to Roma Capitale sites is now a benefit for residents of the Metropolitan Area. Four civic museums remain free to everyone all year: the Museo della Repubblica Romana, the Museo di Casal de\' Pazzi, the Museo delle Mura and the Casa Museo Alberto Moravia.',
    },
    {
      question: 'When is the free Vatican Museums Sunday in October?',
      answer: 'Sunday 25 October, from 09:00 to 14:00 with last entry at 12:30. That is the same day the clocks go back, so check your alarm. Free entry cannot be pre-booked and the queue is the longest of the month, which is why a paid weekday slot is usually the better choice on a short trip.',
    },
    {
      question: 'Is October a cheap time to visit Rome?',
      answer: 'The last ten days are among the best value of the whole year. Rates in the historic centre fall through the month, with the sharpest drop after the first week, while daytime temperatures are still around 22C. You are trading evening daylight and a one-in-four chance of a wet afternoon for a materially lower hotel bill.',
    },
    {
      question: 'Can you still climb the St Peter\'s dome in October?',
      answer: 'Yes, but the timetable changes mid-month. The dome runs summer hours of 07:00 to 18:00 and winter hours of 07:30 to 17:00, and it switches on the daylight saving boundary rather than the 1st of a month, so summer hours run to 25 October and winter hours start on 26 October. Both the lift-to-terrace and all-stairs options include Basilica access.',
    },
  ],
};

export const november: MonthContent = {
  slug: 'rome-in-november',
  month: 'November',
  monthKey: 'november',
  yearOffset: 0,
  prevMonth: 'October',
  prevPath: '/rome-in-october',
  nextMonth: 'December',
  nextPath: '/rome-in-december',
  metaDescription:
    'Rome in November: the wettest month at 108mm over nine days, 16.8C highs and All Saints on 1 November. Weather table, closures, events and ten tours ranked for an indoor month.',
  heroCapsule:
    'November is the wettest month in Rome, with 108mm of rain across nine days and only nine hours 50 minutes of daylight in mid-month. It is also the quietest and cheapest of the autumn. Build the trip around indoor sights and November rewards you; treat it as a walking holiday and it will not.',

  verdict: {
    capsule:
      'Yes for museums and churches, no for a walking-led trip. November brings 108mm of rain over nine days, the wettest month of the year in Rome, with average highs of 16.8C. In exchange you get the shortest queues and the lowest hotel prices of the autumn.',
    body: [
      'November is the month Rome belongs to Romans again. The Pantheon at 10:00 on a wet Tuesday, with maybe twenty people inside and rain falling through the oculus onto the drained floor, is one of the great free experiences in Europe, and you will not get it in May. The same is true of the major basilicas, which in high season are conveyor belts and in November are churches.',
      'The weather is the price. Nine rain days out of thirty is close to a one-in-three chance on any given day, and unlike the summer thunderstorms, November rain settles in. Highs of 16.8C with lows of 8.6C are not cold by northern European standards, but Roman buildings are built to shed heat rather than hold it, and unheated churches feel colder than the thermometer suggests.',
      'The economics are strongly in your favour. This is the cheapest month of the ten for accommodation in the historic centre, and it is the easiest month in which to walk up to a good restaurant without a booking. If your Rome is art, food and architecture rather than piazza-sitting, November is a serious proposition.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 16.8C and lows of 8.6C, with 108mm of rain over nine days, the wettest month of the year. Sunshine falls to about four and a half hours a day and daylight to around nine hours 50 minutes in mid-November, with sunset near 16:49.',
    body: [
      'The headline number is the rain: 108mm is more than three times August and 23 per cent up on October. It arrives in longer episodes and is often accompanied by the sirocco, which can push humidity high enough that a 16C day feels heavier than the figure implies.',
      'Daylight is the second constraint. By mid-November the sun is up at about 06:59 and down at about 16:49, giving under ten hours. That is workable if you start early, and unworkable if you are the sort of traveller who breakfasts at 10:30.',
      'Flooding is not a general risk in the centre but standing water on the cobbles is, and the Tiber runs high and fast. The riverside walkways below the embankments are the first thing to close after heavy rain, so do not build an itinerary that depends on them.',
    ],
  },

  crowds: {
    capsule:
      'November is the quietest month of the ten. Same-week Vatican Museums slots are usually available, the Colosseum queue is short, and hotel rates in the historic centre are at their annual low. The Borghese Gallery still admits nobody without a timed reservation.',
    body: [
      'This is the month when advance booking stops being about availability and starts being about comfort. You can often get a Vatican slot for tomorrow, but you still want one, because the alternative is standing outside in Rome\'s wettest month.',
      'The Roma Pass is worth reconsidering in a low month. At 62.90 euros for 72 hours and 38.00 euros for 48 hours, it makes sense mainly for the transport and included entries; the official description makes no queue-skipping promise, and in November there is very little queue to skip anyway.',
      'One thing that does not get quieter is the Borghese Gallery. It runs on a hard-capped timed entry system all year, Tuesday to Sunday, 09:00 to 19:00, and turns away anyone without a reservation regardless of how empty the rest of the city is.',
    ],
  },

  tours: {
    capsule:
      'The November ranking is unapologetically indoor. Nine rain days and under ten hours of daylight push the Vatican options to the top, bring the cookery class and Castel Sant\'Angelo into the ten, and drop both open-top bus tours out of it entirely.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'A guaranteed dry half-day',
        why: 'First on reviews and first on logic. Seven kilometres of indoor galleries in the wettest month of the Roman year is exactly the right shape of attraction.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites without going outside',
        why: 'Ranked up for November. The guided internal passage from the Sistine Chapel to the Basilica means you never cross St Peter\'s Square in the rain to rejoin a security queue.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors avoiding a wet queue',
        why: 'Ranked up. The queue this ticket skips is entirely outdoors and uncovered, which is a very different proposition in November than it is in June.',
      },
      {
        slug: 'rome-vatican-museums-sistine-chapel-and-basilica-tour',
        bestFor: 'A guided route with a curated selection',
        why: 'The highest-rated of the big Vatican guided options and easy to book at short notice this month, so you can pick a slot the morning after you see the forecast.',
      },
      {
        slug: 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour',
        bestFor: 'One guided sweep of the whole Vatican',
        why: 'Ranked up. In a month with nine rain days, doing the Museums, the Sistine Chapel and the Basilica in one continuous indoor visit is worth more than doing them across three days.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'Ancient Rome, weather permitting',
        why: 'Still the most-reviewed guided route in Rome, but demoted for November because the Forum and Palatine sections are entirely open ground with no shelter of any kind.',
      },
      {
        slug: 'rome-pasta-and-tiramisu-class-with-fine-wine-by-the-vatican',
        bestFor: 'Turning a washed-out afternoon into the best part of the trip',
        why: 'Ranked up hard for November. It is indoors, seated and hands-on, and it holds the highest rating of anything in our Rome list. Precisely the right thing to have booked when the forecast breaks.',
      },
      {
        slug: 'rome-castel-santangelo-entry-ticket-and-digital-audioguide',
        bestFor: 'A compact indoor sight near the Vatican',
        why: 'Ranked up. The spiral ramp through Hadrian\'s mausoleum is enclosed the whole way, and it pairs naturally with a Vatican morning without a long walk between them.',
      },
      {
        slug: 'trevi-fountain-subterranean-aqueducts-tour',
        bestFor: 'A sight that rain cannot touch',
        why: 'Its lowest review count in our list, but ranked into the November ten for one specific reason: most of it happens below street level, where the weather is irrelevant.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'Kept in the ten because arena floor access is capped and worth having, but book a morning slot: by mid-November the light is gone by about 16:49.',
      },
    ],
    note:
      'Both hop-on hop-off bus tours are out of the November ranking, for the opposite reason to August. In the wettest month of the year, an open top deck is a liability rather than a feature, and the covered lower deck removes the point of the ticket.',
  },

  events: {
    capsule:
      'November opens on a public holiday. All Saints falls on Sunday 1 November, a national holiday and one of the Vatican Museums\' fixed annual closure dates. The free last-Sunday opening falls on 29 November, and the Christmas season starts building in the final week.',
    rows: [
      { event: 'All Saints, Ognissanti', dates: 'Sunday 1 November', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Papal general audience', dates: 'Wednesdays 4, 11, 18 and 25 November', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 29 November, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
      { event: 'Christmas lights and market build-up begins', dates: 'Final week of November', where: 'Via del Corso, Piazza Navona and the centre', free: 'Free to walk' },
    ],
    body: [
      'All Saints falling on a Sunday is convenient rather than disruptive: the Vatican Museums would have been closed on that Sunday anyway, so the fixed 1 November closure costs you nothing extra this year. It is still a national holiday, so expect reduced public transport and some shops closed.',
      'The last week of November is when the centre starts to look like Christmas, with lights going up along the main shopping streets and the first market stalls appearing. The exact switch-on dates are set by the city each year, so treat the final week as indicative rather than fixed.',
      'The Vatican Christmas tree and nativity scene in St Peter\'s Square are erected during the second half of the month and formally unveiled in December. If you are visiting in late November you will usually see the work in progress rather than the finished square.',
    ],
  },

  closures: {
    capsule:
      'The Vatican Museums close on 1 November for All Saints, which this year falls on a Sunday when they would already have been shut. Every other Sunday is closed except the free last Sunday on 29 November. The Borghese Gallery closes Mondays as it does all year.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sunday 1 November, All Saints', note: 'On the Vatican\'s fixed annual closure list. This year it coincides with the usual Sunday closure.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 8, 15 and 22 November', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Open Sunday 29 November', note: 'Free last-Sunday opening, 09:00 to 14:00, last entry 12:30.' },
      { site: 'Vatican Gardens and Via Triumphalis Necropolis', closed: 'Sundays and public holidays, including 1 November', note: 'A year-round rule. Both need advance reservation.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
      { site: 'Public transport and shops', closed: 'Reduced service on Sunday 1 November', note: 'National public holiday. Museums and major sights other than the Vatican generally open.' },
    ],
    body: [
      'The lucky alignment this year is that the one fixed Vatican closure in November lands on a Sunday, so you lose no weekday access at all. In a year where 1 November falls midweek, that same date removes a full working day from a short trip.',
      'St Peter\'s Basilica is on its winter dome timetable throughout November, 07:30 to 17:00, having switched on 26 October. The Basilica itself opens from 07:00. That 17:00 dome closing is roughly the same time as sunset by the end of the month, so a dome climb is firmly a morning plan.',
      'The Colosseum runs shorter hours in winter than in summer. We do not publish specific times because we could not confirm them from the official source when this page was written; check the official Colosseum site before booking a late slot, and treat your booked entry time as the one that counts.',
    ],
  },

  packing: {
    capsule:
      'November is the month to pack properly. Nine rain days, 108mm of water and 8.6C nights mean a waterproof coat, waterproof shoes and a warm layer, not an optimistic jumper. Unheated churches and marble museum floors make it feel colder indoors than out.',
    body: [
      'Two items make the difference between a good and a bad Roman November: shoes that stay dry and an outer layer with a hood. Umbrellas are useful but the historic centre funnels wind between buildings, and a hood is more reliable than a folding frame.',
      'Indoors is colder than visitors expect. The great basilicas are stone boxes with high ceilings and minimal heating, and a museum visit is two hours of standing on marble. A thermal base layer weighs nothing and changes the experience of a long gallery day.',
    ],
    list: [
      'Waterproof coat with a hood, for wind-funnelled streets',
      'Waterproof shoes with a grippy sole, not fabric trainers',
      'Warm base layer for unheated churches and marble galleries',
      'Shoulder and knee cover for the Vatican and St Peter\'s Basilica',
      'Small dry bag or pouch for phone and tickets',
    ],
  },

  faqs: [
    {
      question: 'Is November a bad time to visit Rome?',
      answer: 'Only if your trip depends on being outdoors. November is the wettest month of the Roman year at 108mm across about nine days, with average highs of 16.8C and under ten hours of daylight. It is also the quietest and cheapest month of the autumn, with same-week museum availability and short queues at sights that are unbearable in summer.',
    },
    {
      question: 'How much does it rain in Rome in November?',
      answer: 'About 108mm across roughly nine days, the wettest month of the year. That is more than three times the August figure and around a one-in-three chance of rain on any given day. Unlike the short summer thunderstorms it tends to settle in for hours, so an itinerary with indoor options built in is essential rather than optional.',
    },
    {
      question: 'Is anything closed in Rome on 1 November?',
      answer: 'All Saints is a national public holiday and one of the Vatican Museums\' fixed annual closure dates. This year 1 November falls on a Sunday, when the Museums would have been closed anyway, so no weekday access is lost. Expect reduced public transport and some shops shut. Most other major sights keep normal hours.',
    },
    {
      question: 'When is the free Vatican Museums Sunday in November?',
      answer: 'Sunday 29 November, from 09:00 to 14:00 with last entry at 12:30. Entry is free and cannot be pre-booked. Because November queues are short by Roman standards, this is one of the few months in which the free Sunday is a reasonable option rather than a false economy.',
    },
    {
      question: 'How dark is it in Rome in November?',
      answer: 'Mid-November gives around nine hours 50 minutes of daylight, with the sun up at about 06:59 and down at about 16:49. By the end of the month sunset is around 16:40. Anything you want to see in daylight, including the Roman Forum, Palatine Hill and the St Peter\'s dome, needs to be a morning or early-afternoon plan.',
    },
    {
      question: 'Are Rome hotels cheaper in November?',
      answer: 'Yes, and it is the cheapest month of this ten-month window for accommodation in the historic centre. Restaurant tables are available without booking, museum slots can usually be had for the same week, and the crowd at the Pantheon and Trevi Fountain is a fraction of the May or September figure.',
    },
  ],
};

export const december: MonthContent = {
  slug: 'rome-in-december',
  month: 'December',
  monthKey: 'december',
  yearOffset: 0,
  prevMonth: 'November',
  prevPath: '/rome-in-november',
  nextMonth: 'January',
  nextPath: '/rome-in-january',
  metaDescription:
    'Rome in December: 12.8C highs, nine rain days and three Vatican Museums closure dates on 8, 25 and 26 December. Weather table, closures, dated events and ten tours ranked for winter.',
  heroCapsule:
    'December has the shortest days of the year in Rome, around nine hours nine minutes in mid-month, with average highs of 12.8C and nine rain days. It also has three separate Vatican Museums closure dates, on 8, 25 and 26 December, which is more than any other month in this window.',

  verdict: {
    capsule:
      'Yes, if you want Rome at its most atmospheric and you plan around three closure dates. Highs of 12.8C and nine rain days make it a winter city break rather than a sightseeing marathon, but the centre in December, lit and busy with Romans rather than tour groups, is a genuine draw.',
    body: [
      'December splits into a quiet first fortnight and a busy second one. Up to about the 15th the city is in low season: cheap, empty and cold. From roughly the 18th the Christmas trade arrives, hotel rates climb steeply, and the centre fills with Italian domestic visitors rather than international ones, which changes the feel of the streets entirely.',
      'The closure calendar is the thing to get right. The Vatican Museums close on 8 December for the Immaculate Conception, and again on 25 and 26 December. That is three separate dates in one month, and 8 December is a Tuesday this year, so it takes out a working day rather than hiding behind a weekend.',
      'What December gives you in return is the version of Rome that most visitors never see. Nativity scenes in dozens of churches, the tree and crib in St Peter\'s Square, lights the length of Via del Corso, and basilicas that are being used rather than toured. If that is what you came for, the 12.8C and the rain are a fair trade.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 12.8C and lows of 4.7C, with 98mm of rain over nine days and only about four hours of sunshine a day. Mid-December daylight is around nine hours nine minutes, the shortest of the year, with sunset near 16:39. Snow in the city is rare.',
    body: [
      'Rome in December is damp and grey more often than it is cold. The 4.7C average low is measured at the airport; the centre rarely freezes, and snow that settles is a once-in-several-years event rather than an annual one. What you should expect is nine days of rain and about 98mm of water.',
      'The daylight floor is reached in the third week. From roughly 9 to 22 December the day is close to nine hours and nine minutes, sunrise around 07:30 and sunset around 16:39. Sunset actually starts creeping later before Christmas even though sunrise keeps getting later, which is why the shortest sunset of the year is in early December rather than at the solstice.',
      'Four hours of sunshine a day is the lowest figure of the year, so plan photography for late morning. The good news is that Rome\'s winter light, when it appears, is very low and very warm, which is why December produces some of the best photographs of the Forum of any month.',
    ],
  },

  crowds: {
    capsule:
      'Two Decembers in one month. Before about 15 December, queues and prices are at winter lows. From around 18 December to the New Year, hotel rates in the centre roughly double and the Christmas markets and main shopping streets are genuinely crowded with Italian visitors.',
    body: [
      'If you have any flexibility, the first two weeks are the value window: the lights are up from late November, the nativity scenes are being installed, and you get all of that at November prices. Book the second half of the month and you are paying peak rates for shorter days.',
      'The Vatican is the exception to the quiet-first-fortnight rule, because 8 December is a major feast day. Expect St Peter\'s Square to be busy that day and the Museums to be shut. Book Vatican Museums entry for a different day and use the 8th for the Basilica, the nativity scenes and the churches.',
      'Restaurant booking becomes necessary again from about the 18th, especially at weekends, as Roman families and the domestic Christmas trade take the tables that were empty in November.',
    ],
  },

  tours: {
    capsule:
      'December\'s ranking is built for short daylight and nine rain days. Indoor Vatican options dominate the top five, the low-cost St Peter\'s Basilica ticket moves up for the Christmas season, and the underground and enclosed sights fill the bottom of the ten.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'The best use of a short winter day',
        why: 'First on review volume and the obvious anchor for a December itinerary. Book any day other than 8, 25 or 26 December, when the Museums are closed.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites without a second queue',
        why: 'Ranked up. With daylight down to about nine hours nine minutes, doing the Museums, the Sistine Chapel and the Basilica in one continuous visit is the difference between seeing them and running out of day.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors avoiding a cold queue',
        why: 'Ranked up. The Vatican queue is outdoors and unsheltered, and standing in it at 8C for an hour costs you a meaningful share of a nine-hour day.',
      },
      {
        slug: 'rome-vatican-museums-sistine-chapel-and-basilica-tour',
        bestFor: 'A guided route with a curated selection',
        why: 'Highest-rated of the high-volume Vatican guided tours and readily bookable at short notice in the first half of the month, so you can move it if the weather turns.',
      },
      {
        slug: 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour',
        bestFor: 'One guided sweep of the whole Vatican',
        why: 'The efficient single-morning Vatican option, which matters more in the month with the least daylight than in any other.',
      },
      {
        slug: 'st-peters-basilica-pre-reserved-ticket-pope-catacombs',
        bestFor: 'The Christmas basilica, cheaply',
        why: 'Ranked up for December. It is the lowest-priced listing in our Rome set and it puts you inside the Basilica in the month when the nativity scene and the tree are in the square outside.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'Ancient Rome on a clear morning',
        why: 'Still the most-reviewed guided route in Rome, but demoted for December: the Forum and Palatine are open ground, and the light is gone shortly after 16:39.',
      },
      {
        slug: 'rome-pasta-and-tiramisu-class-with-fine-wine-by-the-vatican',
        bestFor: 'A warm indoor afternoon',
        why: 'Ranked up. Highest-rated experience in our Rome list, indoors and seated, and it fills the dark 15:00 to 18:00 block that December otherwise wastes.',
      },
      {
        slug: 'rome-castel-santangelo-entry-ticket-and-digital-audioguide',
        bestFor: 'A compact indoor sight near the Vatican',
        why: 'Ranked up. Two enclosed hours with a terrace over the Tiber at the end, and it sits a short walk from St Peter\'s so it pairs with a Vatican morning.',
      },
      {
        slug: 'trevi-fountain-subterranean-aqueducts-tour',
        bestFor: 'A sight the weather cannot spoil',
        why: 'The smallest review count in our list, ranked in for December because the substantive part of it is underground and completely unaffected by rain or early darkness.',
      },
    ],
    note:
      'Both hop-on hop-off bus tours and both Colosseum evening tours are out of the December ranking. With sunset at about 16:39 an evening tour is a night tour, and an open top deck in a month with 98mm of rain and 4.7C lows is not where you want to be.',
  },

  events: {
    capsule:
      'December has three Italian public holidays and three Vatican Museums closure dates: 8 December for the Immaculate Conception, then 25 and 26 December. The free last-Sunday opening still runs, on 27 December, because that date is not on the Vatican\'s exclusion list.',
    rows: [
      { event: 'Immacolata, Feast of the Immaculate Conception', dates: 'Tuesday 8 December', where: 'Nationwide, Piazza di Spagna', free: 'Public holiday' },
      { event: 'Papal general audience', dates: 'Wednesdays 2, 9, 16, 23 and 30 December', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Christmas Day', dates: 'Friday 25 December', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Santo Stefano, St Stephen\'s Day', dates: 'Saturday 26 December', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 27 December, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
      { event: 'Winter solstice, shortest day', dates: 'Monday 21 December', where: 'Rome', free: 'Not applicable' },
    ],
    body: [
      'The 8 December feast is the one visitors underestimate. It is a full national holiday, the Vatican Museums are closed, and it is traditionally the day Rome considers the Christmas season open, so the centre is busy. It falls on a Tuesday this year, so it removes a working day from the week rather than extending a weekend.',
      'The free last-Sunday opening survives in December. The Vatican\'s own rule excludes the last Sunday only when it coincides with Easter Sunday, 29 June, 25 December, 26 December or 31 December. This year the last Sunday is 27 December, none of those, so the free morning goes ahead.',
      'Christmas services at St Peter\'s, including the midnight mass, are ticketed through the Prefecture of the Papal Household and demand vastly exceeds supply. We could not verify the current ticketing process from a primary source when this page was written, so apply through the Prefecture well in advance and do not rely on third-party claims about availability.',
    ],
  },

  closures: {
    capsule:
      'Three Vatican Museums closure dates fall in December: Tuesday 8 December, Friday 25 December and Saturday 26 December, plus the usual Sundays. That is the densest closure month of the ten. Sunday 27 December is open and free, 09:00 to 14:00.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Tuesday 8 December, Immaculate Conception', note: 'On the Vatican\'s fixed annual closure list. Takes out a full working day this year.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Friday 25 and Saturday 26 December', note: 'Both on the fixed annual closure list. Combined with Sunday 27 being a short free morning only, the Christmas window is very tight.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 6, 13 and 20 December', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Open Sunday 27 December', note: 'Free last-Sunday opening, 09:00 to 14:00, last entry 12:30. Not excluded, because 27 December is not one of the Vatican\'s named exception dates.' },
      { site: 'Vatican Gardens and Via Triumphalis Necropolis', closed: 'Sundays and public holidays, including 8, 25 and 26 December', note: 'A year-round rule. Both need advance reservation.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
    ],
    body: [
      'If your trip covers Christmas itself, the Vatican Museums are effectively unavailable from Friday 25 December to the end of Saturday 26 December, with only a short free window on Sunday 27 December between 09:00 and 14:00. Anyone arriving on the 24th for a four-night stay should book Museums entry for the 24th or the 28th.',
      'The other closures are the standing ones. The Vatican Gardens and the Via Triumphalis Necropolis close on Sundays and on every public holiday, which in December means three extra dates on top of the Sundays. Both need advance reservation in any case.',
      'St Peter\'s Basilica is on its winter dome timetable all month, 07:30 to 17:00, with the Basilica itself opening from 07:00. We could not verify whether the dome closes in bad weather from an official source, so if the forecast is poor, have a fallback rather than counting on the climb.',
    ],
  },

  packing: {
    capsule:
      'Pack for damp cold rather than hard cold. Highs of 12.8C and lows of 4.7C with 98mm of rain mean a warm waterproof coat, not a ski jacket. Churches and museums are stone-cold indoors, so layers matter more than a single heavy outer.',
    body: [
      'The Roman winter is a wet cold. It rarely freezes and snow that settles is a rare event, but nine rain days and low sun mean things stay damp, and standing on marble in an unheated basilica for twenty minutes gets into you in a way that 12C outdoors does not.',
      'Evenings are longer than the daylight suggests, because the sightseeing day effectively ends at about 16:39 and the eating and walking day carries on for another six hours. A warm layer you are happy to wear in a restaurant is more useful than technical outdoor gear.',
    ],
    list: [
      'Warm waterproof coat for 98mm of rain across nine days',
      'Layers for unheated churches and marble museum floors',
      'Waterproof shoes with grip for wet cobbles after dark',
      'Shoulder and knee cover for the Vatican and St Peter\'s Basilica',
      'Gloves and a hat for early-morning starts at 4.7C',
    ],
  },

  faqs: [
    {
      question: 'Are the Vatican Museums open at Christmas?',
      answer: 'Not on the main dates. The Museums close on 8 December for the Immaculate Conception and again on 25 and 26 December, all three of which are on their fixed annual closure list. Sunday 27 December is open, but only for the free last-Sunday morning, 09:00 to 14:00 with last entry at 12:30. Plan Museums entry for the 24th or the 28th.',
    },
    {
      question: 'Is the free last-Sunday opening cancelled in December?',
      answer: 'Not this year. The Vatican excludes the free last Sunday only when it falls on Easter Sunday, 29 June, 25 December, 26 December or 31 December. This year the last Sunday of December is the 27th, which is none of those, so the free 09:00 to 14:00 opening goes ahead with last entry at 12:30.',
    },
    {
      question: 'How cold does Rome get in December?',
      answer: 'Cool and damp rather than genuinely cold. The average high is 12.8C and the average low 4.7C, with 98mm of rain over about nine days and only four hours of sunshine a day. The centre rarely freezes and settling snow is a rare event. Unheated churches and marble museum floors feel colder than the outdoor figures suggest.',
    },
    {
      question: 'How short are the days in Rome in December?',
      answer: 'About nine hours nine minutes in mid-December, the shortest of the year, with sunrise around 07:30 and sunset around 16:39. The earliest sunsets actually happen in the first half of the month rather than at the solstice on 21 December. Anything outdoors needs to be scheduled before mid-afternoon.',
    },
    {
      question: 'Is Rome expensive at Christmas?',
      answer: 'It depends which December you book. Up to about 15 December, rates in the historic centre are at winter lows while the lights and nativity scenes are already up. From roughly 18 December to New Year, rates climb steeply as Italian domestic visitors arrive, and restaurant tables need booking again, particularly at weekends.',
    },
    {
      question: 'Can I get tickets for midnight mass at St Peter\'s?',
      answer: 'Tickets for papal liturgies including Christmas services are issued free by the Prefecture of the Papal Household, and demand greatly exceeds the number of places. We could not verify the current process from a primary source when this page was written, so apply directly through the Prefecture well in advance and treat any third-party guarantee of tickets with suspicion.',
    },
  ],
};
