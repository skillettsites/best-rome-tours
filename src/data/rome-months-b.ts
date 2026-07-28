import { MonthContent } from '@/lib/season-types';

// January through May.
//
// The Vatican Museums publish a closure calendar for each year. The fixed feast
// dates below (1 and 6 January, 11 February, 19 March, 1 May) appear on that
// list every year. The Easter-linked date moves, so it is flagged as expected
// rather than confirmed, with a pointer to the official calendar.

export const january: MonthContent = {
  slug: 'rome-in-january',
  month: 'January',
  monthKey: 'january',
  yearOffset: 1,
  prevMonth: 'December',
  prevPath: '/rome-in-december',
  nextMonth: 'February',
  nextPath: '/rome-in-february',
  metaDescription:
    'Rome in January: 11.9C highs, the coldest month, with Vatican Museums closures on 1 and 6 January. Weather table, closures, dated events and ten tours ranked for the quietest month.',
  heroCapsule:
    'January is the coldest and quietest month in Rome, with average highs of 11.9C, lows of 3.5C and seven rain days. Two public holidays close the Vatican Museums, on 1 January and 6 January. From the second week onwards the city is emptier than at any other point in the year.',

  verdict: {
    capsule:
      'Yes if you want the lowest prices and the shortest queues of the year, and you are content to spend a good share of the trip indoors. Average highs of 11.9C make it the coldest month, but rain days drop back to seven from December\'s nine and the sun returns to four and a half hours a day.',
    body: [
      'The first week of January is the tail of the Christmas season: the centre is still busy with Italian visitors, Epiphany on the 6th closes things again, and prices have not yet fallen. From about the 8th onwards, Rome empties. That second half of January is the emptiest the city gets, and if the queue-free Vatican and a table at any restaurant you fancy is the trip you want, this is the month.',
      'Weather-wise January is better than its reputation and better than November. Rainfall drops to 66mm across seven days, well down on November\'s 108mm over nine, and sunshine climbs back to four and a half hours a day. What you do get is genuine cold by Roman standards, with an average low of 3.5C and occasional sharp northerly winds.',
      'Daylight is already turning. Mid-January gives around nine hours 28 minutes, nearly twenty minutes more than mid-December, and by the 31st sunset has moved out to about 17:23. The month gets visibly better as it goes on, which is the opposite of October.',
    ],
  },

  weather: {
    capsule:
      'The coldest month: average highs of 11.9C and lows of 3.5C, with 66mm of rain over seven days and about four and a half hours of sunshine a day. Mid-January daylight is around nine hours 28 minutes and rising, with sunset moving from about 16:49 to about 17:23 across the month.',
    body: [
      'Rome\'s January is cold rather than freezing. The 3.5C average low is an airport figure and the stone of the centre holds a little more warmth than that, but early mornings can be genuinely raw, especially with the tramontana blowing down from the north.',
      'Rain is less of a problem than in the two preceding months. Seven rain days and 66mm puts January closer to a normal spring month than to November, and the days that are clear are often exceptionally clear, with the sort of hard blue winter sky that shows the Alban Hills from the Janiculum.',
      'The trend through the month matters. Rome gains about 47 minutes of daylight between 1 and 31 January, and almost all of that is at the evening end. A trip in the last week of January has a meaningfully longer usable day than one in the first.',
    ],
  },

  crowds: {
    capsule:
      'After the first week, January is the quietest month of the year. Vatican Museums slots are available at short notice, the Colosseum queue is minimal, and hotel rates in the historic centre are at their floor. The Borghese Gallery still admits nobody without a timed reservation.',
    body: [
      'Anything that is normally impossible becomes possible. The Sistine Chapel with room to stand still, the Pantheon without a security line at the door, and the Trevi Fountain with a clear view of the water are all realistic in the second half of January.',
      'That does not mean you should stop booking. The Vatican Museums queue is outdoors and January mornings are cold, so a timed ticket still earns its keep. The Borghese Gallery is unchanged by the season: Tuesday to Sunday, 09:00 to 19:00, and no admission at all without a reservation.',
      'January is also when Italy runs its winter sales, the saldi, which start in early January and run for several weeks. Exact start dates are set regionally each year, so check the Lazio dates rather than assuming. It makes the Via del Corso and the Tridente noticeably busier than the rest of the centre.',
    ],
  },

  tours: {
    capsule:
      'January\'s ten leans indoor but not as heavily as December, because rain days fall to seven and daylight is growing. This is the month when the cheapest guided Colosseum slots genuinely have availability, so a strong low-cost option enters the ranking.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'The Sistine Chapel with room to breathe',
        why: 'First on review volume, and January is the one month you can stand in the Sistine Chapel without being moved along. Avoid 1 and 6 January, when the Museums are closed.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'Ancient Rome without the crowd',
        why: 'Back near the top after being demoted through the wet months. Seven rain days is manageable, and the Forum in low winter sun with almost nobody in it is a different experience entirely.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites in one visit',
        why: 'The internal route to the Basilica keeps you out of a cold outdoor security queue, which is the specific January benefit over booking the two sites separately.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Skipping a cold outdoor queue',
        why: 'The queue is shorter in January than any other month, but it is still outdoors at 3.5C first thing. This is the cheapest way to not stand in it.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'Arena floor capacity is capped year round, so January is the month you can actually choose your slot rather than take whatever is left three weeks out.',
      },
      {
        slug: 'rome-vatican-museums-sistine-chapel-and-basilica-tour',
        bestFor: 'A guided route with a curated selection',
        why: 'The highest-rated of the high-volume Vatican guided tours. In January its better morning departures are bookable within days rather than months.',
      },
      {
        slug: 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour',
        bestFor: 'One guided sweep of the whole Vatican',
        why: 'Still the efficient option for a single Vatican morning, and with only nine and a half hours of daylight, efficiency is worth paying for.',
      },
      {
        slug: 'rome-pasta-and-tiramisu-class-with-fine-wine-by-the-vatican',
        bestFor: 'A warm indoor afternoon',
        why: 'Highest-rated experience in our Rome list and the right shape for a January afternoon: indoors, seated, hot food, and it fills the block after the light goes.',
      },
      {
        slug: 'rome-castel-santangelo-entry-ticket-and-digital-audioguide',
        bestFor: 'A compact indoor sight near the Vatican',
        why: 'The enclosed spiral ramp through Hadrian\'s mausoleum works in any weather, and the terrace at the top gives you the clearest winter views over the Tiber of the year.',
      },
      {
        slug: 'colosseum-guided-tour-with-roman-forum-and-palatine-hill',
        bestFor: 'The lowest-cost guided Colosseum route',
        why: 'New to the ten for January. It carries a strong rating at the lowest guided price point in our list, and January is the month when those cheap slots are actually available rather than sold out.',
      },
    ],
    note:
      'Both open-top bus tours stay out of the ranking in January. Rome gains daylight through the month but the top deck at an average high of 11.9C, with the wind that often comes with a clear winter day, is not where the value of that ticket lies.',
  },

  events: {
    capsule:
      'January opens with two public holidays that both close the Vatican Museums: New Year\'s Day on 1 January and Epiphany on 6 January. The free last-Sunday opening falls on 31 January. Italy\'s winter sales begin in the first half of the month.',
    rows: [
      { event: 'New Year\'s Day, Capodanno', dates: 'Friday 1 January', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Epiphany, La Befana', dates: 'Wednesday 6 January', where: 'Nationwide, Piazza Navona traditionally', free: 'Public holiday' },
      { event: 'Papal general audience', dates: 'Wednesdays 6, 13, 20 and 27 January', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 31 January, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
    ],
    body: [
      'Epiphany on 6 January is the real end of the Italian Christmas season and it is a full public holiday. The Befana market in Piazza Navona is the traditional focus, though its scale has varied considerably in recent years, so treat it as a thing to look for rather than a fixed attraction to plan around.',
      'Note that 6 January is a Wednesday this year, which is also the general audience day. We are not going to tell you whether an audience is held on that specific date, because that is set by the Prefecture of the Papal Household and published in its own calendar. Check the Prefecture before you plan around it.',
      'The winter sales are a genuine draw for some visitors. They begin in early January and run for several weeks, with the exact start date set at regional level, so confirm the Lazio dates rather than assuming a nationwide start.',
    ],
  },

  closures: {
    capsule:
      'Two fixed Vatican Museums closure dates fall in January: Friday 1 January and Wednesday 6 January, both national public holidays. Every Sunday is closed apart from the free last Sunday on 31 January. The Borghese Gallery closes Mondays, as it does all year.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Friday 1 January, New Year\'s Day', note: 'On the Vatican\'s fixed annual closure list.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Wednesday 6 January, Epiphany', note: 'On the fixed annual closure list. Takes out a midweek day.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 3, 10, 17 and 24 January', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Open Sunday 31 January', note: 'Free last-Sunday opening, 09:00 to 14:00, last entry 12:30.' },
      { site: 'Vatican Gardens and Via Triumphalis Necropolis', closed: 'Sundays and public holidays, including 1 and 6 January', note: 'A year-round rule. Both need advance reservation.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
    ],
    body: [
      'A short trip over the New Year loses two Vatican days out of a possible six. If you land on 31 December for five nights, your only Museums options are 2, 4 and 5 January, since the 3rd is a Sunday. Book early rather than assuming a quiet month means walk-up availability.',
      'The Vatican publishes its closure calendar year by year, and the fixed feast dates of 1 and 6 January appear on it every year. Confirm the current list on the official Vatican Museums site before booking anything close to a holiday.',
      'St Peter\'s Basilica is on winter dome hours throughout January, 07:30 to 17:00, with the Basilica itself opening from 07:00. The Colosseum runs shorter winter hours; we do not publish exact times here because we could not confirm them from the official source, so check the official Colosseum site if you are considering a late-afternoon slot.',
    ],
  },

  packing: {
    capsule:
      'January needs a proper winter coat, but not a heavy one. Highs of 11.9C and lows of 3.5C with seven rain days is British-autumn territory rather than continental winter. The wind is the variable that catches people out, and the Vatican dress code applies in every month.',
    body: [
      'A windproof outer layer does more work in a Roman January than an insulated one. The tramontana that follows a clear night drops the perceived temperature well below the measured one, and the open spaces, St Peter\'s Square, the Circus Maximus, the Forum, are where you feel it.',
      'Indoors is the other half of the problem. The great basilicas are unheated and you will be standing on stone; a warm base layer under a shirt you can wear to dinner is a better solution than carrying a second coat.',
    ],
    list: [
      'Windproof coat, more useful than a thick insulated one',
      'Warm base layer for unheated churches and marble galleries',
      'Waterproof shoes with grip, seven rain days and wet cobbles',
      'Shoulder and knee cover for the Vatican and St Peter\'s Basilica',
      'Gloves and a hat for 3.5C mornings and northerly wind',
    ],
  },

  faqs: [
    {
      question: 'Is January the cheapest month to visit Rome?',
      answer: 'The second half of it is. The first week is still Christmas trade, with Epiphany on 6 January closing things again and prices holding up. From about the 8th, Rome empties and hotel rates in the historic centre reach their annual floor, with same-week museum availability and no meaningful queues at the major sights.',
    },
    {
      question: 'How cold is Rome in January?',
      answer: 'It is the coldest month, with an average high of 11.9C and an average low of 3.5C. That is cool rather than freezing by northern European standards, and settling snow is rare. Rainfall drops to 66mm across seven days, well below November and December, and sunshine recovers to about four and a half hours a day.',
    },
    {
      question: 'Are the Vatican Museums closed on 1 and 6 January?',
      answer: 'Yes. Both dates are on the Vatican Museums\' fixed annual closure list, alongside the standard Sunday closure. This year 1 January is a Friday and 6 January a Wednesday, so both take out working days rather than hiding behind a weekend. The free last-Sunday opening falls on 31 January, 09:00 to 14:00 with last entry at 12:30.',
    },
    {
      question: 'How long are the days in Rome in January?',
      answer: 'Around nine hours 28 minutes in mid-January, and growing. Sunset moves from about 16:49 on the 1st to about 17:23 on the 31st, a gain of roughly 47 minutes of daylight across the month, almost all of it in the evening. A late-January trip has a noticeably longer usable day than an early-January one.',
    },
    {
      question: 'Is it worth booking tours in advance in January?',
      answer: 'Yes, though for comfort rather than availability. Most Vatican and Colosseum slots can be had within a few days in January, but the queue you avoid is outdoors in the coldest month of the year. The Borghese Gallery is the exception that never changes: it admits nobody without a timed reservation, in any month.',
    },
    {
      question: 'What is La Befana in Rome?',
      answer: 'La Befana is the Italian Epiphany tradition, marked on 6 January, a full national public holiday that closes the Vatican Museums. Piazza Navona is the traditional focus for the associated market, though its scale has varied a good deal in recent years, so treat it as something to look out for rather than a fixed attraction to build a trip around.',
    },
  ],
};

export const february: MonthContent = {
  slug: 'rome-in-february',
  month: 'February',
  monthKey: 'february',
  yearOffset: 1,
  prevMonth: 'January',
  prevPath: '/rome-in-january',
  nextMonth: 'March',
  nextPath: '/rome-in-march',
  metaDescription:
    'Rome in February: 13C highs, seven rain days, Carnival on 9 and 10 February and a Vatican Museums closure on 11 February. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'February is the shortest, cheapest and least crowded month with a proper spring feel at the end of it. Average highs reach 13C, rain days stay at seven, and daylight climbs from about ten hours to over eleven. The Vatican Museums close on 11 February.',

  verdict: {
    capsule:
      'Yes, and it is the best-value month of the ten. February carries almost all of January\'s low prices and empty galleries but adds an extra hour of daylight and a degree of warmth. The single closure to plan around is 11 February at the Vatican Museums.',
    body: [
      'February in Rome is a genuinely underrated proposition. Average highs edge up to 13C and lows to 3.8C, rain holds at seven days, and daylight goes from roughly ten hours on the 1st to over eleven hours by the 28th. Prices stay at winter levels because the market treats February as low season even when the weather does not behave like it.',
      'The city is quiet in a way it will not be again until November. You can walk into the Pantheon, get a Vatican slot for the same week, and eat where you want without booking. Almond blossom starts in the Borghese gardens and on the Aventine towards the end of the month, which is the first real signal of the Roman spring.',
      'Carnival is the seasonal event, on 9 and 10 February this year. Rome does not do Carnival on the scale of Venice or Viareggio, but the historic centre and Piazza del Popolo fill with costumed children and the pastry shops sell frappe and castagnole for the fortnight before Lent.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 13C and lows of 3.8C, with 63mm of rain over seven days and about five and a half hours of sunshine a day. Mid-February daylight is around ten hours 36 minutes, rising to about eleven hours 11 minutes by the 28th, with sunset moving out past 17:55.',
    body: [
      'February looks almost identical to January on paper and feels noticeably better in practice, because the extra sunshine hour and the later sunset change what you can fit into a day. Sunset moves from about 17:24 on the 1st to about 17:58 on the 28th.',
      'Rain is modest at 63mm over seven days, the second-driest month of the ten after May. When it does rain it is usually a front passing through in a few hours rather than a settled day, and February also produces the crispest clear days of the winter.',
      'The one thing to watch is wind. February is the month most likely to deliver a cold northerly, and Rome\'s wide open spaces amplify it. A 13C day with a tramontana blowing feels like 8C in St Peter\'s Square.',
    ],
  },

  crowds: {
    capsule:
      'February is the second-quietest month of the ten after January, and the last genuinely quiet month before spring demand arrives in March. Same-week Vatican availability is normal, hotel rates are still at winter levels, and the Borghese Gallery still refuses walk-ups.',
    body: [
      'This is the last month in this window where the major sights are comfortable without a strategy. From March onwards Easter demand, spring city breaks and school holidays start to bite, and by April the Vatican queue is a serious commitment again.',
      'The Roma Pass remains a transport-and-entries product rather than a queue-skipping one at 62.90 euros for 72 hours and 38.00 euros for 48. In a low month like February its value case rests entirely on how many paid entries you actually plan to use.',
      'Carnival week brings families into the centre in the afternoons, particularly around Piazza del Popolo, Piazza Navona and the Villa Borghese. It is a pleasant crowd rather than a difficult one, but the gelaterie and pastry shops are busy and museums are not.',
    ],
  },

  tours: {
    capsule:
      'February\'s ten sits between the winter and spring patterns: the Vatican and Colosseum keep the top places on volume, the indoor fillers stay in the bottom half, and the outdoor-only options are still out. The buses return in April, not yet.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'The Sistine Chapel while it is still quiet',
        why: 'The last month of the season where the Sistine Chapel is genuinely comfortable. From March the Easter build-up starts and the room fills. Closed on 11 February.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'Ancient Rome without the crowd',
        why: 'The most-reviewed guided route in Rome, and February gives you it at winter prices with daylight now stretching past 17:30 by month end.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites in one visit',
        why: 'The internal passage from the Sistine Chapel to the Basilica still saves you a second outdoor queue, and in February that queue is in wind rather than heat.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'Ranked up on January. Arena floor slots are capped year round, and February is the last month before Easter demand makes them hard to get at short notice.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors on a budget',
        why: 'The cheapest way past the Vatican queue. In February the queue is short, so the case for this over a guided tour is stronger than at any other point in the ten months.',
      },
      {
        slug: 'rome-vatican-museums-sistine-chapel-and-basilica-tour',
        bestFor: 'A guided route with a curated selection',
        why: 'The highest-rated of the big Vatican guided options, and still bookable within days in February rather than the weeks you need from March onwards.',
      },
      {
        slug: 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour',
        bestFor: 'One guided sweep of the whole Vatican',
        why: 'Ten and a half hours of daylight in mid-February makes a single combined Vatican visit more sensible than splitting the site across two short days.',
      },
      {
        slug: 'rome-castel-santangelo-entry-ticket-and-digital-audioguide',
        bestFor: 'A compact indoor sight with a terrace',
        why: 'Ranked up. February produces the clearest air of the winter, and the terrace over the Tiber is the best value viewpoint in the city at this price.',
      },
      {
        slug: 'rome-pasta-and-tiramisu-class-with-fine-wine-by-the-vatican',
        bestFor: 'A warm indoor afternoon',
        why: 'Highest-rated experience in our Rome list. It also lands well in Carnival fortnight, when Roman kitchens are turning out frappe and castagnole.',
      },
      {
        slug: 'trevi-fountain-subterranean-aqueducts-tour',
        bestFor: 'Something different in a quiet month',
        why: 'Kept in the ten for February for the same reason as the wet months: the substantive part of it is below street level, so the weather cannot spoil it.',
      },
    ],
    note:
      'The open-top bus tours stay out of the February ranking and the Colosseum evening tours do too. Sunset only passes 17:55 at the very end of the month, so an evening Colosseum slot is still a slot in the dark rather than a slot in the light.',
  },

  events: {
    capsule:
      'Carnival peaks on Shrove Tuesday, 9 February, with Ash Wednesday on 10 February and Lent beginning. The Vatican Museums close the following day, 11 February, one of their fixed annual closure dates. The free last-Sunday opening falls on 28 February.',
    rows: [
      { event: 'Carnival, Martedi Grasso', dates: 'Tuesday 9 February', where: 'Piazza del Popolo and the historic centre', free: 'Free to watch' },
      { event: 'Ash Wednesday, start of Lent', dates: 'Wednesday 10 February', where: 'Churches across Rome', free: 'Free' },
      { event: 'Vatican Museums closed', dates: 'Thursday 11 February', where: 'Vatican Museums', free: 'Closed all day' },
      { event: 'Papal general audience', dates: 'Wednesdays 3, 10, 17 and 24 February', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 28 February, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
    ],
    body: [
      'Carnival dates move with Easter, and this year Shrove Tuesday falls on 9 February with Ash Wednesday on the 10th. Rome\'s Carnival is a family affair rather than a spectacle, centred on costumed children in the main piazzas and on the seasonal pastries in every bar in the city for the fortnight before Lent.',
      'The 11 February closure at the Vatican Museums is a fixed annual date. It falls on a Thursday this year, so it removes a working day. Anyone with a short February trip should check it against their dates first, because it is the only Vatican closure in the month other than the Sundays.',
      'Late February is also when the almond and early cherry blossom appears in the Villa Borghese and on the Aventine, ahead of the better-known displays in March and April. It is not an event with a date, but it is the reason a late-February trip feels like a different month from an early-February one.',
    ],
  },

  closures: {
    capsule:
      'One fixed Vatican Museums closure this month, on Thursday 11 February, plus the usual Sundays. Sunday 28 February is open for the free last-Sunday morning. The Borghese Gallery closes Mondays and admits nobody without a timed reservation, as in every month.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Thursday 11 February', note: 'On the Vatican\'s fixed annual closure list. Removes a working day this year.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 7, 14 and 21 February', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Open Sunday 28 February', note: 'Free last-Sunday opening, 09:00 to 14:00, last entry 12:30.' },
      { site: 'Vatican Gardens and Via Triumphalis Necropolis', closed: 'Sundays and public holidays', note: 'A year-round rule. Both need advance reservation.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
    ],
    body: [
      'February is one of the easiest months of the ten to plan, with a single fixed closure to work around. It is worth noting that 11 February is not a national public holiday, so everything else in Rome operates normally that day; it is a Vatican-specific closure.',
      'St Peter\'s Basilica remains on winter dome hours all month, 07:30 to 17:00, with the Basilica opening from 07:00. Those winter hours run until 27 March, switching to summer on the daylight saving boundary rather than at the start of a month.',
      'For the Colosseum, winter closing is earlier than summer closing and we do not publish specific times because we could not confirm them from the official source when this page was written. Check the official Colosseum site if you want a late slot, and treat your booked entry time as the one that governs your visit.',
    ],
  },

  packing: {
    capsule:
      'Pack the same as January but expect to use less of it. Highs of 13C, lows of 3.8C and seven rain days call for a windproof coat, layers and shoes with grip. Late February afternoons can be warm enough to sit outside, so bring something you can strip back to.',
    body: [
      'The temperature range within a February day in Rome is wide. A sunny early afternoon in the last week can hit the high teens while the same evening drops to single figures within an hour of sunset. Layers you can shed and re-add matter more than raw insulation.',
      'The Vatican dress code applies regardless of the weather, and in February the practical effect is minor since most people are already covered. Be aware that a heavy coat has to come off for the security scanners and then be carried through several kilometres of galleries.',
    ],
    list: [
      'Windproof outer layer for the tramontana in open piazzas',
      'Layers you can strip back for warm late-February afternoons',
      'Shoes with grip for wet cobbles across seven rain days',
      'Shoulder and knee cover for the Vatican and St Peter\'s Basilica',
      'A packable bag, coats have to be carried through the Museums',
    ],
  },

  faqs: [
    {
      question: 'Is February a good time to visit Rome?',
      answer: 'It is the best-value month in this ten-month window. February keeps January\'s low prices and empty galleries but adds an extra hour of daylight and a degree of warmth, with average highs of 13C and seven rain days. The only date to plan around is 11 February, when the Vatican Museums close.',
    },
    {
      question: 'When is Carnival in Rome?',
      answer: 'Carnival moves with Easter. This year Shrove Tuesday, Martedi Grasso, falls on Tuesday 9 February, with Ash Wednesday and the start of Lent on Wednesday 10 February. Rome\'s Carnival is a family occasion centred on costumed children in the main piazzas rather than a large public spectacle, and every bar sells frappe and castagnole for the fortnight beforehand.',
    },
    {
      question: 'Why are the Vatican Museums closed on 11 February?',
      answer: 'It is one of the fixed dates on the Vatican Museums\' own annual closure list, which also includes 1 and 6 January, 19 March, 1 May, 29 June, 14 and 15 August, 1 November and 8, 25 and 26 December. It is not a national public holiday, so the rest of Rome operates normally that day. It falls on a Thursday this year.',
    },
    {
      question: 'How warm is Rome in February?',
      answer: 'Average highs of 13C and lows of 3.8C, with 63mm of rain over about seven days and five and a half hours of sunshine a day. It is the second-driest month in this window after May. Clear days can feel considerably warmer than the figures suggest, and windy ones considerably colder.',
    },
    {
      question: 'How much daylight does Rome get in February?',
      answer: 'Around ten hours 36 minutes in mid-February, rising to about eleven hours 11 minutes by the 28th. Sunset moves from roughly 17:24 on the 1st to about 17:58 on the 28th. That extra half hour in the evening is the main practical difference between a February and a January trip.',
    },
    {
      question: 'Do I need to book Rome tours in advance in February?',
      answer: 'Less than in any other month except January. Same-week Vatican Museums and Colosseum availability is normal through February, and it is the last month before the Easter build-up starts to tighten the calendar. The Borghese Gallery is the permanent exception: it admits nobody without a timed reservation regardless of season.',
    },
  ],
};

export const march: MonthContent = {
  slug: 'rome-in-march',
  month: 'March',
  monthKey: 'march',
  yearOffset: 1,
  prevMonth: 'February',
  prevPath: '/rome-in-february',
  nextMonth: 'April',
  nextPath: '/rome-in-april',
  metaDescription:
    'Rome in March: the whole of Holy Week falls in March this year, Easter Sunday is 28 March and the free Vatican Sunday is cancelled. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'March is the most complicated month of the ten and the most useful to plan properly. The entire of Holy Week falls in March this year, Easter Sunday is 28 March, the clocks go forward the same day, and the free last-Sunday opening at the Vatican Museums is cancelled as a result.',

  verdict: {
    capsule:
      'Yes, with the calendar open in front of you. Average highs climb to 15.7C with seven rain days, and daylight passes twelve hours. But Holy Week falls entirely inside March this year rather than spilling into April, so the last ten days are the busiest of the ten months at the Vatican.',
    body: [
      'Two separate things happen in March and they collide at the end of it. The first is spring: temperatures rise from a 15.7C average high, the wisteria comes out, and the daylight passes twelve hours around the equinox. The second is Easter, which this year is as early as it realistically gets, putting Palm Sunday on 21 March and Easter Sunday on 28 March.',
      'That matters more than any other single fact on this page. In a normal year Holy Week lands in April and March is a straightforward, cheap, pleasant shoulder month. This year the whole of Holy Week, Palm Sunday, Good Friday, Easter Sunday and Easter Monday, sits inside March. Pilgrim demand, hotel pricing and Vatican queueing all move a month earlier with it.',
      'The practical consequence is a sharply split month. Up to about 18 March, Rome is quiet, cheap and improving daily. From 19 March onwards it is peak season. If you have flexibility, the first three weeks of March are among the best-value dates in this entire ten-month window.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 15.7C and lows of 6C, with 59mm of rain over seven days, the driest month of the winter half. Sunshine reaches six hours a day. Daylight passes twelve hours at the equinox and jumps again when the clocks go forward on 28 March.',
    body: [
      'March is the driest month between October and May at 59mm, which is a useful thing to know if you are choosing between March and April for a walking-led trip. It is also the month with the widest day-to-day variation: a mid-March week can deliver 20C sunshine or 11C and rain, sometimes in the same week.',
      'The equinox falls on 20 March, when day and night are close to equal. What actually transforms the month is the clock change on 28 March: sunset jumps from about 18:16 in mid-March to about 19:34 by the 31st, which puts a full extra evening back into every day.',
      'Wind is still a factor early in the month, and the Roman spring often arrives in a rush rather than gradually. Do not pack for the average; pack for both ends of it.',
    ],
  },

  crowds: {
    capsule:
      'A month of two halves. Up to about 18 March, Rome is still in the low season with same-week museum availability. From 19 March onward, Holy Week demand takes over, and Vatican queues, hotel rates and restaurant bookings all move to peak-season conditions.',
    body: [
      'If your dates are fixed and they include Holy Week, book everything now. Vatican Museums entry, Colosseum tickets, the Borghese Gallery and restaurants in the centre all need advance commitment for the last ten days of the month, and the papal liturgies of Holy Week are ticketed separately through the Prefecture of the Papal Household with demand far exceeding supply.',
      'If your dates are flexible, the first three weeks of March are one of the genuine bargains of the year: spring weather, winter prices, and the museums still quiet. The only fixed closure in that window is 19 March.',
      'The Borghese Gallery is unaffected by any of this in the sense that it never admits anyone without a timed reservation, but its slots for the Easter period disappear a long way ahead. Book it before anything else if it is on your list.',
    ],
  },

  tours: {
    capsule:
      'March\'s ranking is shaped by Holy Week. Vatican and St Peter\'s options move up because that is where demand and the significant events are, and the low-cost pre-reserved Basilica ticket enters the ten for the same reason.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'The single essential Vatican ticket',
        why: 'Top on review volume and the item to book first this month. With Holy Week inside March, availability in the last ten days tightens more than in any other month here.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'Museums, Sistine Chapel and Basilica in one go',
        why: 'Ranked up for March. During Holy Week the security queue on St Peter\'s Square is at its longest of the year, and the guided internal route avoids rejoining it.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors in a peak-demand fortnight',
        why: 'Ranked up. The plain Vatican queue in Holy Week is the worst of the ten months, so the value of skipping it peaks here.',
      },
      {
        slug: 'vatican-sistine-chapel-and-st-peters-skip-the-line-tour',
        bestFor: 'One guided sweep of the whole Vatican',
        why: 'Ranked up sharply for March. If you are visiting in Holy Week, one guided entry covering all three sites is worth considerably more than three separate attempts.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'Ancient Rome in spring weather',
        why: 'The most-reviewed guided route in Rome. March\'s 59mm of rain makes it the driest month of the winter half, so the open sections of the walk hold up well.',
      },
      {
        slug: 'rome-vatican-museums-sistine-chapel-and-basilica-tour',
        bestFor: 'A guided route with a curated selection',
        why: 'Highest-rated of the high-volume Vatican guided tours. Book it for the first three weeks if you can, when slots are still available at short notice.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'Arena floor capacity is capped and Easter demand empties it fast. If your trip is in the last ten days of March, this is the second thing to book after the Vatican.',
      },
      {
        slug: 'st-peters-basilica-pre-reserved-ticket-pope-catacombs',
        bestFor: 'Holy Week at St Peter\'s on a budget',
        why: 'New to the ten for March. The lowest-priced listing in our Rome set, and it puts you inside the Basilica in the one month of the year when that building is the centre of everything.',
      },
      {
        slug: 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena',
        bestFor: 'Going at your own pace in a busy month',
        why: 'Self-paced entry is the right format when the city is full: you are not tied to a group\'s schedule in a fortnight when everything is running late.',
      },
      {
        slug: 'rome-st-peters-basilica-dome-climb-and-underground-tour',
        bestFor: 'The best view in Rome, back in season',
        why: 'Ranked in for March. The dome switches from winter to summer hours on 28 March, extending the climb window from 17:00 to 18:00 just as the evenings arrive.',
      },
    ],
    note:
      'The open-top bus tours are still out of the ten in March. They come back in April, when average highs pass 18C and the top deck stops being a novelty you regret. The Colosseum evening tours also stay out: sunset only moves past 19:30 in the final days of the month.',
  },

  events: {
    capsule:
      'The whole of Holy Week falls in March this year: Palm Sunday on 21 March, Good Friday on 26 March, Easter Sunday on 28 March and Easter Monday on 29 March. The clocks go forward on 28 March, and the free last-Sunday opening at the Vatican Museums is cancelled.',
    rows: [
      { event: 'Vatican Museums closed, Feast of St Joseph', dates: 'Friday 19 March', where: 'Vatican Museums', free: 'Closed all day' },
      { event: 'Spring equinox', dates: 'Saturday 20 March', where: 'Rome', free: 'Not applicable' },
      { event: 'Palm Sunday', dates: 'Sunday 21 March', where: 'St Peter\'s Square and churches across Rome', free: 'Free, ticket required for papal liturgy' },
      { event: 'Papal general audience', dates: 'Wednesdays 3, 10, 17, 24 and 31 March', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Good Friday', dates: 'Friday 26 March', where: 'Colosseum and St Peter\'s', free: 'Free to attend the public liturgy' },
      { event: 'Easter Sunday, clocks go forward', dates: 'Sunday 28 March', where: 'Nationwide', free: 'Free, ticket required for papal liturgy' },
      { event: 'Easter Monday, Pasquetta', dates: 'Monday 29 March', where: 'Nationwide', free: 'Public holiday' },
    ],
    body: [
      'Easter falling on 28 March is unusually early, and it puts the entire of Holy Week inside March rather than April. Anyone comparing March and April for a trip should understand that this year the crowd pattern is reversed from the norm: March is the Easter month and April is the calmer one.',
      'The papal liturgies of Holy Week, including Palm Sunday, the Good Friday Way of the Cross at the Colosseum and Easter Sunday mass, are free but ticketed through the Prefecture of the Papal Household, and demand is far greater than capacity. Apply directly and well in advance rather than relying on third-party offers.',
      'The clock change on 28 March is worth noting separately, because it lands on Easter Sunday. If you are trying to make an early service, remember the hour goes forward overnight.',
    ],
  },

  closures: {
    capsule:
      'March carries the single most important closure detail of the ten months. 28 March is simultaneously Easter Sunday and the last Sunday of the month, and the Vatican\'s own rule cancels the free last-Sunday opening when it coincides with Easter Sunday, so the Museums are closed that day.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Friday 19 March, Feast of St Joseph', note: 'On the Vatican\'s fixed annual closure list.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sunday 28 March, Easter Sunday', note: 'The free last-Sunday opening is explicitly cancelled when it falls on Easter Sunday, so the Museums are closed. This is the one to check before booking.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Monday 29 March, Easter Monday, expected', note: 'The Vatican\'s published list carried the equivalent Easter Monday date in the previous year. Confirm the current calendar on the official site before booking.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 7, 14 and 21 March', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Gardens and Via Triumphalis Necropolis', closed: 'Sundays and public holidays, including Easter Monday', note: 'A year-round rule. Both need advance reservation.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
    ],
    body: [
      'This is the detail almost every Rome guide gets wrong. Most sites list the last Sunday of the month as a free Vatican Museums morning without exception. The Vatican\'s own rule states that the free opening applies provided it does not coincide with Easter Sunday, 29 June, 25 December, 26 December or 31 December. This year the last Sunday of March is Easter Sunday, so it does not run and the Museums are shut.',
      'That leaves a tight Easter window. The Museums are open on Saturday 27 March, closed on Sunday 28 March, expected to be closed on Easter Monday 29 March, and open again from Tuesday 30 March. If your trip covers Easter weekend, book the Saturday or the Tuesday.',
      'St Peter\'s dome switches from winter to summer hours on 28 March, extending from 07:30 to 17:00 to 07:00 to 18:00. That change follows the daylight saving boundary rather than the calendar month. For the Colosseum, we could not verify the official hours or any Good Friday arrangements from a primary source, so check the official Colosseum site directly, particularly for 26 March.',
    ],
  },

  packing: {
    capsule:
      'March demands the widest wardrobe of the ten months. Highs average 15.7C but the range within a single week can run from 11C and wet to 20C and clear. Pack layers, a light waterproof, and something smart enough for a Holy Week church if that is why you are coming.',
    body: [
      'The Roman spring does not arrive on a schedule. A March trip can deliver shirt-sleeve afternoons in the Villa Borghese or a cold wet week that feels like February. Layers solve it; a single mid-weight coat does not.',
      'If you are attending Holy Week services, the Vatican dress code is enforced more, not less, strictly, and you may be standing outdoors in St Peter\'s Square for a long time before an event starts. Comfortable shoes and a layer you can sit on are worth more than an umbrella, which is often not permitted in ticketed areas.',
    ],
    list: [
      'Layers for a range that can run from 11C to 20C in one week',
      'Light waterproof for seven rain days',
      'Shoulder and knee cover, enforced strictly during Holy Week',
      'Comfortable shoes for long standing waits at ticketed liturgies',
      'Sunglasses, March sun is stronger than the temperature suggests',
    ],
  },

  faqs: [
    {
      question: 'When is Easter in Rome this year?',
      answer: 'Easter Sunday falls on 28 March, which is unusually early. That puts the whole of Holy Week inside March rather than April: Palm Sunday on 21 March, Good Friday on 26 March, Easter Sunday on 28 March and Easter Monday on 29 March. Anyone comparing March and April should know the usual crowd pattern is reversed this year.',
    },
    {
      question: 'Is the free Vatican Museums Sunday cancelled in March?',
      answer: 'Yes. The last Sunday of March is 28 March, which is Easter Sunday, and the Vatican\'s own rule states the free last-Sunday opening applies provided it does not coincide with Easter Sunday, 29 June, 25 December, 26 December or 31 December. The Museums are closed that day. Most Rome guides list this Sunday as a free opening and are wrong for this year.',
    },
    {
      question: 'Are the Vatican Museums open over Easter weekend?',
      answer: 'They are open on Saturday 27 March, closed on Easter Sunday 28 March, expected to be closed on Easter Monday 29 March, and open again from Tuesday 30 March. The Museums also close on Friday 19 March for the Feast of St Joseph, a fixed annual date. Confirm the published calendar on the official Vatican Museums site before booking.',
    },
    {
      question: 'When do the clocks change in Rome in March?',
      answer: 'Summer time starts on Sunday 28 March, which is also Easter Sunday this year, so remember the hour goes forward overnight if you are trying to make an early service. The effect on sightseeing is large: sunset moves from about 18:16 in mid-March to about 19:34 by the 31st.',
    },
    {
      question: 'What is the weather like in Rome in March?',
      answer: 'Average highs of 15.7C and lows of 6C, with 59mm of rain over about seven days. That makes March the driest month between October and May. Sunshine averages six hours a day. The day-to-day variation is the widest of the year: a single week can deliver 20C and clear or 11C and wet.',
    },
    {
      question: 'Should I visit Rome in March or April this year?',
      answer: 'March is cheaper and quieter for the first three weeks, then becomes the busiest fortnight of the ten months once Holy Week starts on 21 March. April is warmer, longer in daylight and, unusually for this year, calmer because Easter has already passed. If your dates are flexible, the first three weeks of March are among the best value in this whole window.',
    },
  ],
};

export const april: MonthContent = {
  slug: 'rome-in-april',
  month: 'April',
  monthKey: 'april',
  yearOffset: 1,
  prevMonth: 'March',
  prevPath: '/rome-in-march',
  nextMonth: 'May',
  nextPath: '/rome-in-may',
  metaDescription:
    'Rome in April: 18.8C highs, 13 hours of daylight and, unusually, no Easter because it fell in March. Natale di Roma on 21 April. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'April is unusually good this year because Easter has already been and gone in March. Average highs of 18.8C, over thirteen hours of daylight and no Holy Week crowds make it the strongest spring month in this window. Natale di Roma on 21 April brings free entry at the city\'s civic museums.',

  verdict: {
    capsule:
      'Yes, and this year more than most. April normally carries Easter and the crowds that come with it. This year Easter fell on 28 March, so April keeps the 18.8C highs, the thirteen-hour days and the wisteria without the Holy Week pressure on hotels and Vatican slots.',
    body: [
      'April is Rome at its prettiest. The wisteria on the Via Margutta and the roses starting in the Aventine gardens, the orange trees in the Giardino degli Aranci, the Spanish Steps banked with azaleas, all of it arrives in April. Average highs of 18.8C and lows of 8.8C mean full days of walking without heat management.',
      'The calendar quirk is the real story. In most years, Easter is somewhere in April and drives peak pricing, peak queueing and a fortnight of pilgrim demand. This year it happened in March. April therefore behaves like a high-quality shoulder month rather than a peak one, which is a genuine and temporary advantage.',
      'Two Roman dates give April its character instead: Natale di Roma on 21 April, the city\'s traditional birthday, when Rome\'s civic museums open free to everyone, and Liberation Day on 25 April, a national public holiday which this year also happens to be the last Sunday of the month and therefore the free Vatican Museums morning.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 18.8C and lows of 8.8C, with 69mm of rain over seven days and about seven hours of sunshine a day. Mid-April daylight is around thirteen hours 20 minutes, with sunset near 19:50 and moving out past 20:05 by the end of the month.',
    body: [
      'April is warm without being hot, which is exactly the right condition for a city where most of the sightseeing involves walking on stone in open sun. Eighteen point eight degrees is comfortable in the Forum at midday in a way that 31.4C in August is emphatically not.',
      'Rain is slightly up on March at 69mm across seven days, and April showers in Rome behave like April showers anywhere: short, sharp and followed by clear skies. It is not a month that needs an indoor backup plan built into every day.',
      'The daylight is transformative. Over thirteen hours in mid-April, with sunset past 19:50, means you can do a full day of sights and still have a proper Roman evening. The sea is only 15.5C, so this is not yet a swimming month whatever the air temperature suggests.',
    ],
  },

  crowds: {
    capsule:
      'Busy but not peak, and this year notably calmer than usual because Easter fell in March. Book the Vatican Museums and Colosseum ahead but not months ahead. The Borghese Gallery admits nobody without a timed reservation, and its April slots go early.',
    body: [
      'The normal April advice is to book everything three months out because of Easter. That does not apply this year. What does apply is the general spring city-break surge, which builds through the month and does not let up until the autumn.',
      'Two dates concentrate crowds. Natale di Roma on 21 April fills the civic museums, because entry is free to everyone that day, and Liberation Day on 25 April is a national holiday falling on a Sunday, so the centre is busy with Roman families rather than tourists.',
      'Hotel rates rise steadily through April and are materially higher by the end of the month than at the start. If you are choosing dates within April, the first ten days are the better value.',
    ],
  },

  tours: {
    capsule:
      'April is the month the outdoor options come back. Both open-top bus tours return to the ten and the vintage car experiences enter it, because 18.8C and thirteen hours of daylight finally make open-air sightseeing the right choice rather than an endurance test.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'The one Vatican ticket everyone needs',
        why: 'First on review volume in every month. April is easier than usual this year because Easter demand has already passed, but book ahead: spring city-break traffic builds through the month.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'Ancient Rome at its best',
        why: 'The most-reviewed guided route on this site, and April is the month it works best of all. The Palatine gardens are in flower and 18.8C is the right temperature for two and a half hours on open ground.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites in one visit',
        why: 'Holds its position on volume. The internal route to the Basilica is less critical now that the Holy Week queue has gone, but it still saves you a second security line.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'Arena floor slots are capped and April demand is real. Book earlier than you would in February, later than you would have needed for Holy Week in March.',
      },
      {
        slug: 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena',
        bestFor: 'Going at your own pace',
        why: 'With over thirteen hours of daylight you can spread the Colosseum, Forum and Palatine across a whole day rather than rushing them, which is exactly what the self-paced format is for.',
      },
      {
        slug: 'rome-city-sightseeing-hop-on-hop-off-bus-with-audioguide',
        bestFor: 'A first orientation lap in good weather',
        why: 'Back in the ranking after being dropped through the winter. The open top deck at 18.8C with seven hours of sun a day is finally the thing you are paying for.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors who hate queues',
        why: 'The queue lengthens through April as the spring surge builds. This is the cheapest way past it if you do not want a guide.',
      },
      {
        slug: 'rome-fiat-500-convertible-tour-with-photos',
        bestFor: 'Something different on a clear spring day',
        why: 'New to the ten for April. It is the highest-rated listing in our whole Rome set, and it is an open convertible, which makes it an April to June proposition rather than a year-round one.',
      },
      {
        slug: 'rome-vatican-museums-sistine-chapel-and-basilica-tour',
        bestFor: 'A guided route with a curated selection',
        why: 'The highest-rated of the high-volume Vatican guided tours. Its slots are still obtainable in April in a way they will not be from May onwards.',
      },
      {
        slug: 'rome-vip-private-golf-cart-experience',
        bestFor: 'Covering the centre without walking it',
        why: 'Ranked in for April. It is open-sided, so it needs decent weather, and April is the first month of the year that reliably delivers it without the heat that makes the same trip uncomfortable in July.',
      },
    ],
    note:
      'The indoor winter fillers, the cookery class and Castel Sant\'Angelo, drop out of the April ten. They are still excellent and both remain among the highest-rated listings in our set, but in a month with thirteen hours of daylight and 18.8C highs, the ranking should point outdoors.',
  },

  events: {
    capsule:
      'Easter has already passed this year, so April\'s calendar is Roman rather than religious. Natale di Roma on 21 April brings free entry to the city\'s civic museums, and Liberation Day on 25 April is a national holiday which also happens to be the free Vatican Museums Sunday.',
    rows: [
      { event: 'Papal general audience', dates: 'Wednesdays 7, 14, 21 and 28 April', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Natale di Roma, the city\'s birthday', dates: 'Wednesday 21 April', where: 'Across Rome, civic museums citywide', free: 'Free entry at Rome\'s civic museums' },
      { event: 'Liberation Day, Festa della Liberazione', dates: 'Sunday 25 April', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 25 April, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
    ],
    body: [
      'Natale di Roma marks the traditional founding of the city and falls on 21 April every year, a Wednesday this year. The free entry that day applies to Rome\'s civic museums, the Musei in Comune network, not to state-run sites and not to the Vatican. Associated parades and re-enactments are organised annually and the details are published close to the date, so check the city\'s own programme rather than assuming last year\'s arrangements repeat.',
      'The 25th does double duty this year. It is Liberation Day, a full national public holiday, and it is also the last Sunday of the month, so the free Vatican Museums morning runs from 09:00 to 14:00 with last entry at 12:30. Liberation Day is not on the Vatican\'s closure list, so the free opening is unaffected.',
      'The Spanish Steps azalea display is an April fixture, with the flowers brought in and banked up the steps for several weeks. Like the Natale di Roma programme, the exact dates are set each year.',
    ],
  },

  closures: {
    capsule:
      'April is unusually clean this year because Easter fell in March. Nothing on the Vatican Museums\' fixed annual closure list falls in April this year, so the only closures are the standard Sundays, and Sunday 25 April is open and free.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 4, 11 and 18 April', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Open Sunday 25 April', note: 'Free last-Sunday opening, 09:00 to 14:00, last entry 12:30. Liberation Day is not one of the Vatican\'s exception dates, so it runs.' },
      { site: 'Vatican Gardens and Via Triumphalis Necropolis', closed: 'Sundays and public holidays, including 25 April', note: 'A year-round rule. Both need advance reservation.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
      { site: 'Shops, banks and some services', closed: 'Sunday 25 April', note: 'National public holiday. Major museums and sights generally keep normal hours.' },
    ],
    body: [
      'In a normal year Easter Monday would sit in April and appear on the Vatican closure list. This year it fell on 29 March, so April is left with no fixed Vatican closure at all, which makes it one of the two easiest months of the ten to plan around alongside September and October.',
      'Rome\'s civic museums are free to everyone on 21 April for Natale di Roma. Outside that date, be aware that the old universal free-first-Sunday arrangement at the civic museums has changed and free access is now a residents\' benefit rather than a visitor one. Four civic museums are free to everyone all year: the Museo della Repubblica Romana, the Museo di Casal de\' Pazzi, the Museo delle Mura and the Casa Museo Alberto Moravia.',
      'St Peter\'s dome is on summer hours throughout April, 07:00 to 18:00, having switched on 28 March. The Basilica itself opens from 07:00. For the Colosseum, we could not verify official hours from a primary source, so check the official site before booking anything late in the day.',
    ],
  },

  packing: {
    capsule:
      'April is the easiest packing month of the ten. Highs of 18.8C and lows of 8.8C mean daytime shirt-sleeves and an evening layer, with a light waterproof for seven showery days. The Vatican dress code is easier to meet in April than in the summer months.',
    body: [
      'The main April error is underestimating the evenings. Nearly ten degrees separates the average high from the average low, and with sunset past 19:50 you will be outdoors after dark far more than in the winter months. A packable jacket covers it.',
      'Sun protection matters more than the temperature implies. April sun in Rome is strong, the Forum and Palatine have no shade, and a 19C day with clear skies will burn you as effectively as a 30C one.',
    ],
    list: [
      'Light waterproof or packable shell for April showers',
      'An evening layer, nearly ten degrees between high and low',
      'Sun cream and sunglasses, April sun is stronger than it feels',
      'Shoulder and knee cover for the Vatican and St Peter\'s Basilica',
      'Comfortable walking shoes, this is the month to walk everywhere',
    ],
  },

  faqs: [
    {
      question: 'Is April a good time to visit Rome?',
      answer: 'It is the strongest spring month in this window, and better than usual this year because Easter fell on 28 March rather than in April. That removes the Holy Week crowds that normally define the month while leaving the 18.8C average highs, seven hours of sunshine a day and over thirteen hours of daylight in place.',
    },
    {
      question: 'Is Easter in April this year?',
      answer: 'No. Easter Sunday fell on 28 March, which is unusually early, so the whole of Holy Week sat inside March. The practical effect is that the usual March and April crowd pattern is reversed: March carried the Easter peak and April is calmer, cheaper and easier to book than it normally would be.',
    },
    {
      question: 'What is Natale di Roma?',
      answer: 'It is the traditional birthday of the city, marked on 21 April every year and falling on a Wednesday this year. Rome\'s civic museums, the Musei in Comune network, open free to everyone that day. That free entry does not extend to state-run sites or to the Vatican. Parades and re-enactments are organised annually and the details are published close to the date.',
    },
    {
      question: 'Is anything closed in Rome on 25 April?',
      answer: 'Liberation Day is a full national public holiday, so expect shops, banks and some services to close and public transport to run a holiday timetable. Major museums and sights generally keep normal hours. The Vatican Museums are open that day, and because 25 April is also the last Sunday of the month, they run the free 09:00 to 14:00 opening with last entry at 12:30.',
    },
    {
      question: 'How warm is Rome in April?',
      answer: 'Average highs of 18.8C and lows of 8.8C, with 69mm of rain across about seven days and seven hours of sunshine a day. It is warm enough to walk all day without heat management and cool enough that the Forum and Palatine, which have no shade, are comfortable at midday. The sea is only 15.5C, so it is not yet a swimming month.',
    },
    {
      question: 'Do the Vatican Museums close at all in April this year?',
      answer: 'Only on the usual Sundays, and not even all of those. Because Easter Monday fell on 29 March this year, none of the Vatican Museums\' fixed annual closure dates land in April, which makes it one of the cleanest months of the ten to plan. Sunday 25 April is open for the free last-Sunday morning.',
    },
  ],
};

export const may: MonthContent = {
  slug: 'rome-in-may',
  month: 'May',
  monthKey: 'may',
  yearOffset: 1,
  prevMonth: 'April',
  prevPath: '/rome-in-april',
  nextMonth: 'June',
  nextPath: '/best-time-to-visit-rome#june',
  metaDescription:
    'Rome in May: 23.3C highs, only six rain days and over fourteen hours of daylight. The Vatican Museums close on 1 May. Weather table, closures, dated events and ten ranked tours.',
  heroCapsule:
    'May has the best weather-to-crowd ratio of the ten months: 23.3C average highs, only six rain days, the fewest of any month here, and over fourteen hours of daylight. The one closure to plan around is 1 May, when the Vatican Museums shut for Labour Day.',

  verdict: {
    capsule:
      'Yes. On the numbers May is the best month on this page: 23.3C highs, six rain days, nine hours of sunshine and fourteen and a half hours of daylight. The only reasons to choose another month are price and crowds, both of which are at spring peaks.',
    body: [
      'May is what most people are actually imagining when they picture Rome. Warm enough to eat outside every evening, cool enough to spend three hours in the Forum at midday, and long enough in the day that you can do both without choosing. The roses in the Roseto Comunale on the Aventine open in May and the garden is only open to the public for a short season around them.',
      'The catch is that everyone else has worked this out. May is one of the two heaviest booking months of the year for Rome alongside September, and hotel rates in the historic centre reflect it. Vatican Museums and Colosseum slots need booking weeks rather than days ahead, and the Borghese Gallery needs longer still.',
      'The evenings come back properly in May. Sunset passes 20:20 by mid-month and 20:35 by the end, which puts the Colosseum sunset tours back into the ranking and makes an after-dinner walk through the lit centre part of the day rather than an afterthought.',
    ],
  },

  weather: {
    capsule:
      'Average highs of 23.3C and lows of 12.6C, with just 57mm of rain over six days, the fewest of the ten months, and nine hours of sunshine a day. Mid-May daylight runs about fourteen hours 33 minutes, with sunset around 20:23 and pushing past 20:35 by the 31st.',
    body: [
      'Six rain days and 57mm makes May the driest month in this window, marginally ahead of March. Combined with nine hours of sunshine a day it is the most reliable month of the ten for anything that depends on the weather.',
      'The temperature sits in the useful band. Highs of 23.3C mean you can walk the Appian Way or spend a morning on the Palatine without the heat management that August demands, while lows of 12.6C keep the evenings comfortable rather than cold.',
      'The sea reaches 18.5C, which is swimmable for the hardy but not for most people. If a beach day matters, that number does not really work until June.',
    ],
  },

  crowds: {
    capsule:
      'May is peak spring. Expect long Vatican queues, Colosseum slots booked out weeks ahead and hotel rates near their annual high. Book the Borghese Gallery first, since it never admits anyone without a timed reservation and May fills earliest.',
    body: [
      'The practical rule for May is that anything with a fixed time slot needs booking before you travel, and anything with a cap needs booking well before that. That covers the Vatican Museums, every Colosseum product, the Borghese Gallery, the Vatican Gardens and the Via Triumphalis Necropolis.',
      'The free last-Sunday opening on 30 May is the busiest Vatican morning of the month and cannot be pre-booked. In a low month that is a fair trade; in May it is not, and a paid weekday slot is a materially better use of your time.',
      'One consolation: the days are long enough that you can genuinely use the shoulders. The Trevi Fountain and Pantheon before 08:00 or after 21:00 in May are a fraction as busy as at midday, and both are worth seeing at those hours anyway.',
    ],
  },

  tours: {
    capsule:
      'May\'s ranking is the most outdoor of the ten. Both open-top options are in, the St Peter\'s dome climb moves up on the long daylight, and the Colosseum sunset tour returns now that sunset has moved past 20:20.',
    picks: [
      {
        slug: 'vatican-museums-and-sistine-chapel-entrance-ticket',
        bestFor: 'The one ticket to book first',
        why: 'First on review volume, and in May it is also the item with the longest lead time. Book it before you book flights if your dates are tight. Closed on 1 May.',
      },
      {
        slug: 'colosseum-roman-forum-and-palatine-hill-guided-tour',
        bestFor: 'Ancient Rome at the best temperature of the year',
        why: 'The most-reviewed guided route on this site. At 23.3C with nine hours of sunshine a day, the full three-site walk is as good as it gets in Rome.',
      },
      {
        slug: 'vatican-museums-sistine-chapel-and-st-peters-basilica-tour',
        bestFor: 'All three Vatican sites in one visit',
        why: 'Worth the premium again in May, because the outdoor security queue on St Peter\'s Square is back to serious lengths and the internal route avoids it.',
      },
      {
        slug: 'rome-colosseum-arena-floor-palatine-and-forum-guided-tour',
        bestFor: 'Standing on the arena floor',
        why: 'Capped capacity plus peak demand means May arena floor slots go weeks ahead. If it matters to you, book it second after the Vatican.',
      },
      {
        slug: 'rome-city-sightseeing-hop-on-hop-off-bus-with-audioguide',
        bestFor: 'A first orientation lap',
        why: 'Ranked up on April. With only six rain days in the month, the open top deck is a near-certain bet rather than a forecast-dependent one.',
      },
      {
        slug: 'rome-colosseum-and-forum-with-audio-guide-app-optional-arena',
        bestFor: 'Going at your own pace',
        why: 'Fourteen and a half hours of daylight is what makes this format shine. You can do the Colosseum in the morning, break for four hours, and still finish the Forum in good light.',
      },
      {
        slug: 'rome-st-peters-basilica-dome-climb-and-underground-tour',
        bestFor: 'The best view in Rome',
        why: 'Ranked up for May. The dome is on summer hours to 18:00, the air is clear, and the stairwell has not yet become the sweatbox it turns into in July and August.',
      },
      {
        slug: 'vatican-museums-and-sistine-chapel-skip-the-line-entry-ticke',
        bestFor: 'Independent visitors who hate queues',
        why: 'The Vatican queue in May is one of the two worst of the year, so the value of skipping it is near its peak. Book the earliest slot you can get.',
      },
      {
        slug: 'colosseum-sunset-tour-with-entry',
        bestFor: 'Golden hour over the Forum',
        why: 'Back in the ten for the first time since August. Sunset passes 20:23 by mid-May, so a late slot is genuinely a golden-hour slot rather than a visit in the dark.',
      },
      {
        slug: 'rome-big-bus-hop-on-hop-off-open-top-sightseeing-tour',
        bestFor: 'A second open-top option',
        why: 'The second bus tour returns to the ten in the driest month of the ten. Between them the two operators cover slightly different stops, so compare routes rather than price alone.',
      },
    ],
    note:
      'The indoor winter picks are all out of the May ten: the cookery class, Castel Sant\'Angelo and the Trevi aqueducts tour. All three are strong listings and two of them carry higher ratings than several tours above, but a month with six rain days and fourteen and a half hours of daylight should be spent outdoors.',
  },

  events: {
    capsule:
      'May opens on a public holiday: Labour Day on Saturday 1 May, which is also a fixed Vatican Museums closure date. The free last-Sunday opening falls on 30 May. The rest of the month is the start of Rome\'s outdoor cultural season.',
    rows: [
      { event: 'Labour Day, Festa dei Lavoratori', dates: 'Saturday 1 May', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Vatican Museums closed', dates: 'Saturday 1 May', where: 'Vatican Museums', free: 'Closed all day' },
      { event: 'Papal general audience', dates: 'Wednesdays 5, 12, 19 and 26 May', where: 'Vatican', free: 'Free, ticket required' },
      { event: 'Free last-Sunday opening, Vatican Museums', dates: 'Sunday 30 May, 09:00 to 14:00, last entry 12:30', where: 'Vatican Museums', free: 'Free entry' },
    ],
    body: [
      'The 1 May closure is the only fixed Vatican date in the month and it falls on a Saturday this year, which softens the blow: you lose a weekend day rather than a working one, and the Museums would still have been closed on the Sunday.',
      'Rome traditionally holds a large free open-air concert on 1 May. The venue and line-up are announced each year rather than being fixed, and the location has moved in recent years, so check the current announcement instead of relying on an older guide.',
      'May is also when Rome\'s outdoor cultural season starts, including the museum-night and museum-week initiatives that recur most years but on dates set annually. Check the individual institutions when you book rather than planning a trip around a date you read somewhere.',
    ],
  },

  closures: {
    capsule:
      'One fixed Vatican Museums closure in May, on Saturday 1 May for Labour Day, plus the usual Sundays. Sunday 30 May is open for the free last-Sunday morning. The Borghese Gallery closes Mondays and admits nobody without a timed reservation.',
    rows: [
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Saturday 1 May, Labour Day', note: 'On the Vatican\'s fixed annual closure list. Falls on a Saturday this year.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Sundays 2, 9, 16 and 23 May', note: 'Standard Sunday closure. Open Monday to Saturday, 08:00 to 20:00, last entry 18:00.' },
      { site: 'Vatican Museums and Sistine Chapel', closed: 'Open Sunday 30 May', note: 'Free last-Sunday opening, 09:00 to 14:00, last entry 12:30.' },
      { site: 'Vatican Gardens and Via Triumphalis Necropolis', closed: 'Sundays and public holidays, including 1 May', note: 'A year-round rule. Both need advance reservation.' },
      { site: 'Borghese Gallery', closed: 'Mondays', note: 'Open Tuesday to Sunday, 09:00 to 19:00. No admission without a timed reservation.' },
      { site: 'Shops, banks and some services', closed: 'Saturday 1 May', note: 'National public holiday. Major museums and sights other than the Vatican generally open.' },
    ],
    body: [
      'The Labour Day closure catches people because it is a Vatican closure and a national holiday at the same time. The rest of Rome largely operates, but public transport runs a holiday timetable and many shops are shut. It is a good day for the Colosseum and the Forum, and a bad day for the Sistine Chapel.',
      'The Vatican Gardens and the Via Triumphalis Necropolis follow the same rule as always, closing on Sundays and every public holiday, which in May means 1 May and every Sunday including the 30th. Both need advance reservation regardless.',
      'St Peter\'s Basilica switches to its longest hours of the year from 1 June, opening 07:00 to 20:00. Through May the dome runs summer hours of 07:00 to 18:00. For the Colosseum we could not verify official hours from a primary source, so check the official site before committing to an evening slot.',
    ],
  },

  packing: {
    capsule:
      'May is straightforward: summer clothing for the day, one layer for the evening, and sun protection that you actually use. Highs of 23.3C and only six rain days mean you can leave the heavy waterproof at home. The Vatican dress code is the one constraint.',
    body: [
      'The dress code becomes a real problem again in May, because 23.3C is the point where people start dressing for the heat. Covered shoulders and knees are enforced at St Peter\'s and in the Vatican Museums, and a light scarf or overshirt in the day bag solves it without cooking you.',
      'Sun is the other May issue. Nine hours of sunshine a day and no shade on the Forum, Palatine or Circus Maximus means burn time is short, and the sea breeze off the coast masks how strong it is.',
    ],
    list: [
      'Scarf or light overshirt for the Vatican dress code',
      'High-factor sun cream, nine hours of sun a day and no shade',
      'A single evening layer for 12.6C nights',
      'Refillable water bottle for the nasoni street fountains',
      'Comfortable walking shoes, May is the month you will walk furthest',
    ],
  },

  faqs: [
    {
      question: 'Is May the best month to visit Rome?',
      answer: 'On weather alone, yes. May has average highs of 23.3C, only six rain days, the fewest of the ten months here, nine hours of sunshine a day and over fourteen hours of daylight. The only arguments against it are price and crowds: May is one of the two heaviest booking months of the year alongside September.',
    },
    {
      question: 'Are the Vatican Museums closed on 1 May?',
      answer: 'Yes. 1 May is on the Vatican Museums\' fixed annual closure list along with 1 and 6 January, 11 February, 19 March, 29 June, 14 and 15 August, 1 November and 8, 25 and 26 December. It is also a national public holiday. This year it falls on a Saturday, so it costs a weekend day rather than a working one.',
    },
    {
      question: 'How far ahead should I book Rome tours for May?',
      answer: 'Weeks rather than days for anything with a fixed time slot, and longer for capped experiences. That covers the Vatican Museums, every Colosseum product including arena floor access, the Vatican Gardens and the Via Triumphalis Necropolis. The Borghese Gallery fills earliest of all and admits nobody without a timed reservation.',
    },
    {
      question: 'Can you swim near Rome in May?',
      answer: 'Only if you are hardy. The sea off the Roman coast averages 18.5C in May, which is a long way below the 24.5C to 26C it reaches from August to September. Air temperatures of 23.3C make a beach day pleasant for sitting on, but the water does not really become comfortable until June.',
    },
    {
      question: 'How late is it light in Rome in May?',
      answer: 'Sunset is around 20:23 in mid-May and pushes past 20:35 by the 31st, giving about fourteen hours 33 minutes of daylight mid-month. That is what brings the Colosseum sunset tours back into our ranking for the first time since August, and it is why an evening walk through the lit centre becomes part of the day rather than an afterthought.',
    },
    {
      question: 'Is the free Vatican Museums Sunday worth it in May?',
      answer: 'Less so than in the quiet months. The free opening on Sunday 30 May runs 09:00 to 14:00 with last entry at 12:30, it cannot be pre-booked, and in peak season it produces the longest queue of the month. On a short May trip a paid timed slot on a weekday is a materially better use of your time.',
    },
  ],
};
