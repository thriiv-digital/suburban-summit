// data.js — content for Sub Summit landing page
window.SUB = (function () {
  const locations = [
    {
      id: "northern-beaches",
      city: "Northern Beaches",
      region: "Sydney, NSW",
      date: "Tue 30 June 2026",
      dateShort: "30 Jun",
      venue: "Warriewood Community Centre",
      address: "Vuko Pl, Warriewood NSW 2102",
      hours: "8:30am – 5:00pm",
      capacity: 520,
      sold: 287,
      tag: "Next up · 2026 season opener",
      headline: "Where local ambition meets the coast.",
      blurb: "Our 2026 season opens on the Northern Beaches — panels on the past, present and future of the region, trades & collaboration, AI for business, charity collaboration, and a relaxed after-function at Collaroy Theatre. Tickets are on sale now.",
      partners: ["Redefine Finance", "Service NSW", "Charity Collaboration", "Fair Play Entertainment"],
      imgs: [
        "images/northern-beaches-warriewood-exterior.png",
        "images/northern-beaches-warriewood-interior.png"
      ],
      img: "images/northern-beaches-warriewood-exterior.png"
    },
    {
      id: "illawarra",
      city: "Illawarra",
      region: "Wollongong, NSW",
      date: "Wed 06 May 2026",
      dateShort: "06 May",
      venue: "WIN Entertainment Centre",
      address: "Crown St, Wollongong",
      hours: "8:30am – 5:00pm",
      capacity: 600,
      sold: 142,
      tag: "Upcoming 2026",
      headline: "Big ideas meet big industry.",
      blurb: "The Illawarra edition brings the same one-day SUB format south — practical sessions for trades, professional services, hospitality and community leaders, with a regional flavour and local speakers on the program.",
      partners: ["Local partners to be announced"],
      img: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1200&auto=format&fit=crop&q=80"
    },
    {
      id: "hornsby",
      city: "Hornsby",
      region: "Sydney, NSW",
      date: "Tue 18 August 2026",
      dateShort: "18 Aug",
      venue: "Hornsby RSL Club",
      address: "4 High St, Hornsby",
      hours: "8:30am – 5:00pm",
      capacity: 480,
      sold: 96,
      tag: "Returning home · 2026",
      headline: "Back where it all started.",
      blurb: "Hornsby is where SUB began. We're returning in 2026 with a bigger floor, more local partners and the same practical, no-hype format that filled the room the first time round.",
      partners: ["Local partners to be announced"],
      img: "https://images.unsplash.com/photo-1564503942137-4d22b3a8c39d?w=1200&auto=format&fit=crop&q=80"
    },
    {
      id: "central-coast",
      city: "Central Coast",
      region: "Gosford, NSW",
      date: "Thu 22 October 2026",
      dateShort: "22 Oct",
      venue: "Mingara Recreation Club",
      address: "Mingara Dr, Tumbi Umbi",
      hours: "8:30am – 5:00pm",
      capacity: 540,
      sold: 64,
      tag: "Recently held",
      headline: "Where we proved the model.",
      blurb: "Our most recent Summit before the 2026 season. The Coast edition drew owners from trades, hospitality, professional services and community organisations — the same mix that has come to define a SUB day.",
      partners: ["Past local partners"],
      img: "https://images.unsplash.com/photo-1502209524164-acea936639a2?w=1200&auto=format&fit=crop&q=80"
    }
  ];

  const features = [
    { title: "Keynotes", line: "Plain-talking founders & operators on the main stage. No buzzword bingo.", icon: "mic" },
    { title: "Masterclasses", line: "90-minute working sessions you leave with a finished thing in hand.", icon: "tool" },
    { title: "Speed Networking", line: "Twelve targeted intros in 45 minutes. Brought to you by a stopwatch.", icon: "watch" },
    { title: "Local Spotlight", line: "Five suburban businesses pitch to a panel of buyers, investors and council reps.", icon: "spot" },
    { title: "Expo Floor", line: "50+ booths from accountants to AI tools — the suppliers your business actually needs.", icon: "grid" },
    { title: "After Hours", line: "Drinks, dumplings and DJ sets on the floor until 9pm. Lanyards stay on.", icon: "moon" }
  ];

  const speakers = [
    { name: "Mira Tanaka", role: "Co-founder", company: "Verbena & Co.", topic: "Building a $4m hospitality group in a town of 12,000", tag: "Keynote", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&q=80" },
    { name: "Daniel Okafor", role: "Managing Director", company: "Okafor & Sons Roofing", topic: "Trades aren't going digital. Digital is going trades.", tag: "Main Stage", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&auto=format&fit=crop&q=80" },
    { name: "Priya Raman", role: "Founder", company: "Loop Local", topic: "Suburb-level marketing that actually compounds", tag: "Masterclass", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&auto=format&fit=crop&q=80" },
    { name: "Tom Whitfield", role: "Partner", company: "Halverson Bell Accountants", topic: "What 600 BAS lodgements taught us about how SMEs really fail", tag: "Panel", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=700&auto=format&fit=crop&q=80" },
    { name: "Zahra Ali", role: "CEO", company: "Northcote Logistics", topic: "Last-mile delivery from a single van to forty", tag: "Main Stage", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&auto=format&fit=crop&q=80" },
    { name: "Brendan Cole", role: "Owner-Operator", company: "Cole Family Butchery (est. 1971)", topic: "Inheriting a family business without burning it down", tag: "Fireside", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=80" },
    { name: "Aisha Kapoor", role: "Founder", company: "Kapoor Legal", topic: "The five contracts every local business is missing", tag: "Masterclass", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&auto=format&fit=crop&q=80" },
    { name: "Mark Sweeney", role: "Head of SME", company: "Mutual Bank of NSW", topic: "Getting a business loan in 2026", tag: "Workshop", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&auto=format&fit=crop&q=80" },
    { name: "Lucia Ferraro", role: "Creative Director", company: "Ferraro Studio", topic: "Branding a suburban business without going corporate", tag: "Main Stage", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=80" },
    { name: "Sam Goh", role: "Founder", company: "Mantra Coffee Roasters", topic: "Wholesale, retail and the long game", tag: "Panel", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&auto=format&fit=crop&q=80" },
    { name: "Rebecca Lin", role: "Owner", company: "Lin Physio Network", topic: "Multi-clinic ops without losing the personal touch", tag: "Workshop", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&auto=format&fit=crop&q=80" },
    { name: "Jordan Pace", role: "Founder", company: "Pace Group", topic: "From subcontractor to head contractor in 36 months", tag: "Keynote", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700&auto=format&fit=crop&q=80" }
  ];

  // Northern Beaches 2026 event program — updated 27/05/26 2:40pm
  const schedule = [
    {
      time: "8:30am",
      stream: "Expo",
      title: "Expo Open · Registration & Coffee",
      lede: "Arrive, grab a coffee and start networking with local businesses and exhibitors.",
      room: "Main Floor"
    },
    {
      time: "9:20am",
      stream: "Main",
      title: "Opening & Northern Beaches Focus",
      room: "Main Stage",
      items: [
        { kind: "Opening", title: "Official Opening & Acknowledgement of Country" },
        { kind: "Panel 1", title: "Past, Present & Future of the Northern Beaches", who: "Insights on where the region is heading for business." },
        { kind: "Spotlight", title: "Caterer Highlight", who: "Discover a local supplier." }
      ]
    },
    {
      time: "10:30am",
      stream: "Expo",
      title: "Morning Tea · Expo Engagement",
      lede: "Refreshments plus time to meet exhibitors and continue conversations.",
      room: "Main Floor"
    },
    {
      time: "11:00am",
      stream: "Stream",
      title: "Trades & Collaboration",
      room: "Main Stage",
      items: [
        { kind: "Talk", title: "Trades For Trades Association", who: "Making money in challenging environments." },
        { kind: "Talk", title: "Tradie Success Stories — Hire a Hubby", who: "Real-world growth stories." },
        { kind: "Panel 2", title: "Outsourcing", who: "How to scale your business through collaboration." },
        { kind: "Talk", title: "The Control Room", who: "Practical ideas for taking more control of your business." }
      ]
    },
    {
      time: "12:05pm",
      stream: "Stream",
      title: "Inspiration & Community Impact",
      room: "Main Stage",
      items: [
        { kind: "Speaker", title: "Entertainment Speaker", who: "Northern Beaches entertainment and community projects." },
        { kind: "Speaker", title: "Inspirational Speaker", who: "Motivation and mindset." },
        { kind: "Panel 3", title: "Charity Collaboration", who: "How business + community partnerships create impact." }
      ]
    },
    {
      time: "1:00pm",
      stream: "Break",
      title: "Lunch & Networking",
      lede: "Branded lunch experience, exhibitor engagement and time to build relationships.",
      room: "Main Floor"
    },
    {
      time: "2:00pm",
      stream: "Stream",
      title: "Future-focused Business",
      room: "Main Stage",
      items: [
        { kind: "Panel 4", title: "AI Focus for Business", who: "Practical ways to use AI in your business." },
        { kind: "Ambassador", title: "Spinning Axis", who: "Venue \u201Csuper powers\u201D and inspirational youth initiatives." },
        { kind: "Panel 5", title: "Business Allies", who: "How to build strong support networks around your business." },
        { kind: "Charity Draw", title: "Charity Draw", who: "Prizes donated by local businesses." }
      ]
    },
    {
      time: "3:30pm",
      stream: "Main",
      title: "Closing Session",
      lede: "Key learnings and takeaways you can apply after the event.",
      room: "Main Stage"
    },
    {
      time: "4:00pm",
      stream: "Move",
      title: "Move to Collaroy Theatre",
      lede: "Transition to the after-function venue.",
      room: ""
    },
    {
      time: "4:30–7:00pm",
      stream: "After",
      title: "After Function @ Collaroy Theatre",
      lede: "Relaxed networking, activity and entertainment.",
      room: "Collaroy Theatre"
    }
  ];

  const tiers = [
    {
      id: "early-bird",
      name: "Early Bird",
      price: 68.20,
      tag: "Nearly gone",
      tagline: "Limited release for the early movers.",
      includes: [
        "Full-day Summit access",
        "Tea, coffee & morning tea",
        "Fresh local lunch",
        "Networking drinks",
        "Exciting giveaways",
        "$5 raffle entry supporting local charity"
      ],
      excludes: []
    },
    {
      id: "general",
      name: "General Admission",
      price: 95.70,
      tag: "Most popular",
      tagline: "The standard pass — everything you need.",
      includes: [
        "Full-day Summit access",
        "Tea, coffee & morning tea",
        "Fresh local lunch",
        "Networking drinks",
        "Exciting giveaways",
        "$5 raffle entry supporting local charity"
      ],
      excludes: [],
      popular: true
    },
    {
      id: "vip",
      name: "VIP Experience",
      price: 330,
      tag: "Limited",
      tagline: "Front-row access, the after-party and a voice in what comes next.",
      vip: true,
      includes: [
        "Reserved premium seating",
        "Full after-party access",
        "1× cocktail at the after-function",
        "Commemorative tote bag — event legacy partners",
        "Stakeholder & support event access",
        "Exclusive networking opportunities",
        "Voice on the 2027 program",
        "VIP at Post Review day"
      ],
      excludes: []
    },
    {
      id: "student",
      name: "Student / Youth",
      price: 49.50,
      tag: "Concession rate",
      tagline: "For students & young people in business.",
      includes: [
        "Full-day Summit access",
        "Tea, coffee & morning tea",
        "Access to all sessions"
      ],
      excludes: []
    }
  ];

  // Exhibitor / sponsor packages \u2014 published Humanitix booking types
  const sponsorPackages = [
    {
      id: "expo",
      name: "Expo Booth",
      price: 850,
      gst: true,
      tag: "Working booth",
      tagline: "Get on the floor and into the room.",
      includes: [
        "Exhibitor booth on the main floor",
        "Listing on the event page & program",
        "Networking access across the day",
        "1\u00d7 exhibitor pass per booth"
      ]
    },
    {
      id: "silver",
      name: "Silver Package",
      price: 5500,
      gst: true,
      tag: "Headline level",
      tagline: "Premium presence across the day.",
      includes: [
        "Premium expo booth placement",
        "Logo across event collateral",
        "Speaking / panel opportunity (subject to fit)",
        "Acknowledgement from the stage",
        "Complimentary General Admission tickets",
        "Inclusion in pre/post-event marketing"
      ]
    }
  ];

  // Confirmed trusted supporters + ecosystem partners for the 30 June event
  const trustedSupporters = [
    { name: "Redefine Finance", note: "Finance partner" },
    { name: "Service NSW", note: "Government & small-business support" },
    { name: "Charity Collaboration", note: "Community partnerships" },
    { name: "Fair Play Entertainment", note: "Entertainment & culture" }
  ];

  const exhibitors = [
    "Redefine Finance", "Service NSW", "Charity Collaboration", "Fair Play Entertainment",
    "Hire a Hubby", "Trades For Trades Association", "Spinning Axis", "The Control Room",
    "Mutual Bank of NSW", "Halverson Bell", "Loop Local", "Mantra Coffee",
    "Kapoor Legal", "Northcote Logistics", "Verbena & Co.", "Pace Group",
    "Lin Physio", "Ferraro Studio", "Okafor & Sons", "Cole Family Butchery",
    "Coastal Print Co.", "Sub Mortgage", "Hill & Hill Insurance", "Bayview HR"
  ];

  const gallery = [
    { label: "Main Stage — Hornsby 2025", h: 380, kind: "stage" },
    { label: "Speed Networking", h: 280, kind: "people" },
    { label: "Expo Floor at lunch", h: 320, kind: "crowd" },
    { label: "Masterclass — small group", h: 420, kind: "workshop" },
    { label: "After Hours", h: 280, kind: "evening" },
    { label: "Local Spotlight winner", h: 340, kind: "pitch" }
  ];

  const images = {
    hero:    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&auto=format&fit=crop&q=80",
    about1:  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop&q=80",
    about2:  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1400&auto=format&fit=crop&q=80"
    ]
  };

  // Placeholder slots — pull real testimonials from subsummit.com.au and replace `quote`/`who`/`role` below.
  const testimonials = [
    {
      paras: [
        "Recently the Central Coast Small Business Networking Group (SBNG) participated in the Suburban Business Summit in Gosford. What an awesome day! Many local business owners attended, giving us a fantastic opportunity to connect, share what SBNG is all about, and highlight the real value our community offers. The response was overwhelmingly positive, with plenty of great conversations and new connections made.",
        "The Summit also had a variety of excellent speakers and discussion panels throughout the day, providing us with new ideas and perspectives on business and the Central Coast region.",
        "It was a very positive day for us, and we're already looking forward to this event next year."
      ],
      who: "Bill Murch",
      role: "President, SBNG"
    },
    {
      paras: [
        "The Gosford suburban summit was a surprising day of great information & networking. With a wide range of local business and charities, it provided a real chance to see where others see the opportunities in the Gosford region lie and to share the challenges they have experienced, learn about their journey so far and hear about the aspirations they see ahead. A great selection of inspiring speakers, well hosted Q&A sessions and well supported event.",
        "I would definitely recommend going next year. If you are a small business, sole trader or thinking of starting up, this is a great opportunity to get a feel for the local opportunities that await!"
      ],
      who: "Julian Bowker",
      role: "Umina resident"
    },
    {
      paras: [
        "We held a Suburban Business Summit in Hornsby Shire towards the back end of 2025 and what a great success. It provided real solutions and real stories for businesses, and showed how they can implement these into their own operations and benefit from that — and that's really, really important.",
        "It stands out for how professionally well run it is and the quality of the people involved, and I really wanted to support this. What a terrific difference it made to economic development, particularly for regional activities.",
        "Replicating what they did and the success in Hornsby and the Central Coast is a terrific opportunity, and I really encourage you to get involved in the Suburban Business Summit for the Central Coast."
      ],
      who: "Nathan Tilbury",
      role: "Independent Councillor, Hornsby Council"
    }
  ];

  const faqs = [
    { q: "Who actually shows up to Sub Summit?", a: "Owners and senior people at local businesses doing $200k–$15m a year. Trades, professional services, hospitality, retail, health, charity. Most attendees come from within an hour's drive of the host venue." },
    { q: "What's the dress code?", a: "There isn't one. Most attendees land somewhere between 'good jeans' and 'business casual'. Wear what you'd wear to a meeting with a respected client." },
    { q: "Is parking included?", a: "Yes — every venue we've chosen has free on-site parking. Public transport details are emailed to ticket holders two weeks out." },
    { q: "Can I bring my team?", a: "Please do. Operator and Patron tickets bought in groups of 3+ receive a 15% rebate post-event." },
    { q: "I run a charity / community org. Is there a rate for me?", a: "Yes. Email community@subsummit.com.au from your org email and we'll send a 50%-off code." },
    { q: "What if my plans change?", a: "Tickets are transferable to any future Sub Summit in the same season, or to a colleague. Full refund up to 30 days out." },
    { q: "Are sessions recorded?", a: "Main stage keynotes only, released to ticket holders 4 weeks after the event. Masterclasses and panels are intentionally not recorded to keep the conversation honest." }
  ];

  const founders = [
    { name: "Luke Griffin",  role: "Co-Founder" },
    { name: "Andrew",        role: "Co-Founder" },
    { name: "Isuru",         role: "Co-Founder" },
    { name: "Alex Quinn",    role: "Co-Founder" },
    { name: "Libby Salmon",  role: "Co-Founder" }
  ];

  const framework = [
    { icon: "build", title: "Local government venue",   line: "Every event is held in a community-owned space — accessible, familiar and embedded in the suburb it serves." },
    { icon: "mic",   title: "35+ local voices",         line: "Speakers, panellists and contributors come from the region. Real people with real context, not imported keynotes." },
    { icon: "grid",  title: "Five themed panels",       line: "The same five-panel structure runs at every SUB — consistent, deliberate, designed to cover every dimension of local business." },
    { icon: "spot",  title: "Charity on stage",         line: "Local charities aren't just guests — they have a voice on stage and a share of the raffle proceeds." },
    { icon: "tool",  title: "Local businesses first",   line: "Exhibitors, caterers and suppliers are drawn from the host region wherever possible." },
    { icon: "watch", title: "Genuine networking",       line: "Built into the program — before the first session, through lunch and well into the after-function." },
    { icon: "arrow", title: "Replicable by design",     line: "The model is built to scale. Every location runs the same framework, adapted to its community." }
  ];

  const panels = [
    { num: "01", title: "Past · Present · Future",  sub: null,                                                              line: "A regional lens on where the area has been, where it stands today, and where business is heading." },
    { num: "02", title: "Outsource",                sub: "Getting Grey but Remaining Relevant",                             line: "How to scale through smart collaboration — without growing your headcount." },
    { num: "03", title: "Charity Panel",             sub: null,                                                              line: "Local causes, community impact and the role business plays in giving back." },
    { num: "04", title: "Regional Spotlight",        sub: null,                                                              line: "Celebrating the businesses, projects and people defining the host region." },
    { num: "05", title: "Business Allies",           sub: "Local Government · Chambers · Service NSW · Community Leaders",  line: "The ecosystem that backs local business — and how to work with it." }
  ];

  const journey = [
    { step: "Pre-Event",       line: "Community promotion, stakeholder briefings and early-bird momentum building." },
    { step: "Promotion Day",   line: "Awareness events in the community to prime the audience before the main event." },
    { step: "Stakeholder Day", line: "Dedicated sessions for local government, charities and key partners ahead of the summit." },
    { step: "Pre Day",         line: "Final preparation and arrival for exhibitors, speakers and partners." },
    { step: "Hero Day",        line: "The main event — panels, keynotes, expo floor, networking and the after-function." },
    { step: "Post-Event",      line: "Review, reconnect and carry forward the relationships and momentum." }
  ];

  const charities = [
    "Hornsby Connect", "Central Coast Women's Shelter", "The Bikers Hand",
    "Ronald McDonald House", "Mongrels Men", "Headspace",
    "For the Love of Dogs Academy", "MoWaNa"
  ];

  const difference = [
    { num: "01", title: "Community over conference",   line: "SUB is built around the people who actually run the area — not polished keynotes flown in for the day." },
    { num: "02", title: "Surprise activations",        line: "Events like Paris Major and Roundabout Circus keep the energy alive and make the day genuinely memorable." },
    { num: "03", title: "Intentional disruption",      line: "We're respectful of traditional business events — and deliberately different where it matters most." },
    { num: "04", title: "Relationships that last",     line: "The conversations that start on the floor and carry through to the after-function are the entire point." }
  ];

  const futureRegions = [
    { city: "Canberra",    region: "ACT",           note: "2027" },
    { city: "Geelong",     region: "VIC",           note: "2027" },
    { city: "Ryde",        region: "Sydney, NSW",   note: "2027" },
    { city: "Parramatta",  region: "Sydney, NSW",   note: "2027" }
  ];

  return { locations, features, speakers, schedule, tiers, sponsorPackages, exhibitors, trustedSupporters, testimonials, gallery, faqs, images, founders, framework, panels, journey, charities, difference, futureRegions };
})();
