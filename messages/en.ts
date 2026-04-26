import type { Messages } from "./types";
export const en: Messages = {
  nav: {
    home: "Home",
    aboutAlmaty: "About Almaty",
    news: "News",
    symbol: "Symbol",
    brand: "Brand",
    contact: "Contact",
  },
  header: {
    logoHome: "Go to home",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    brandWordmark: "ALMATY",
    slogan: "Kazakhstan’s cultural and business capital",
    navTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social media",
    phone: "+7 (727) 272-62-62",
    email: "info@almaty.kz",
    location: "Almaty, Kazakhstan",
    rightsReserved: "All rights reserved.",
    socialFacebook: "Facebook",
    socialInstagram: "Instagram",
    socialYoutube: "YouTube",
    socialTiktok: "TikTok",
  },
  hero: {
    titleHighlight: "ALMATY:",
    titleRest: "A THRILL IN EVERY MOMENT",
    subtitle:
      "Discover a rich history, vibrant culture, and breathtaking nature",
    hotlineTitle: "Tourist hotline",
    hotlinePhone: "+7 (727) 555-01-01",
    hotlineHours: "Daily: 09:00 – 21:00",
    picksTitle: "This week’s picks",
    pickEventsCaption: "Events (6–11 April)",
    pickMuseumsCaption: "Top 5 museums",
    moreDetails: "Learn more",
    sliderNavLabel: "Hero slider",
    slideButtonAria: "Slide {n} of {total}",
    slider: [
      {
        title: "Medeu",
        description: "The world’s highest mountain ice rink",
        alt: "Medeu ice rink in the mountains in winter",
      },
      {
        title: "Kok-Tobe",
        description: "City and mountain views from above",
        alt: "View of Almaty from Kok-Tobe",
      },
      {
        title: "Big Almaty Lake",
        description: "A mountain lake in a national park",
        alt: "Mountain lake among rocks",
      },
      {
        title: "Green Bazaar",
        description: "Flavour, colour, and city atmosphere",
        alt: "Green Bazaar market stalls",
      },
      {
        title: "28 Panfilov Guardsmen Park",
        description: "History, memory, and green space",
        alt: "Alley in the central park",
      },
    ],
  },
  peaks: {
    title: "Reach the peaks",
    subtitle: "Your guide to mountain routes",
    seeAll: "See all",
    moreDetails: "Learn more",
    cards: [
      {
        imageLabel: "Kok-Zhailau peak",
        title: "Kok-Zhailau",
        description:
          "The most scenic and accessible route with a panoramic view of the city.",
        alt: "Panorama of the Kok-Zhailau mountain trail",
      },
      {
        imageLabel: "Big Almaty Peak",
        title: "BAP",
        description:
          "A majestic pyramid rising above Big Almaty Lake.",
        alt: "Big Almaty Peak above the lake",
      },
      {
        imageLabel: "Shymbulak",
        title: "Ski resort",
        description:
          "A high-mountain resort with modern lifts and top service in the mountains.",
        alt: "Shymbulak ski resort",
      },
    ],
  },
  newsPreview: {
    title: "News",
    subtitle: "Latest city stories",
    seeAll: "More news",
    items: [
      {
        date: "12 April 2026",
        headline: "New cultural centre opens in Almaty",
        alt: "Wooden cultural centre building",
      },
      {
        date: "21 April 2026",
        headline: "Apple festival returns this May",
        alt: "Park with apple trees and greenery",
      },
      {
        date: "10 April 2026",
        headline: "Mountain trails updated in the Zailiysky Alatau",
        alt: "Mountain peaks and forest",
      },
    ],
  },
  gallery: {
    title: "Gallery (layout)",
    hint:
      "Replace URLs with local files: place images in public/landing/ and use /landing/filename.jpg.",
    alts: ["Office 1", "Office 2", "Team", "Meeting"],
  },
  cta: {
    title: "Discover Almaty",
    description:
      "Explore the symbols, culture, and history of a city that keeps inspiring",
    button: "City symbols",
  },
  contact: {
    title: "Contact",
    intro:
      "Demo form: connect a backend or service when you are ready to send messages.",
    responseTime: "Response time",
    responseHint: "Usually within one business day.",
    extra: "Phone, messengers, etc. — add from your contact block design.",
    name: "Name",
    namePh: "How should we address you?",
    email: "Email",
    message: "Message",
    messagePh: "Briefly describe your request",
    submit: "Send",
    sent: "Message saved (demo). Connect an API for real delivery.",
  },
  contactPage: {
    heroTitle: "Contact",
    heroSubtitle: "We welcome your questions and ideas",
    heroImageAlt: "Almaty: Kok-Tobe and the mountains",
    cardPhoneLabel: "Phone",
    phones: ["+7 (727) 272-62-62", "+7 (727) 272-66-22"],
    cardEmailLabel: "Email",
    email: "info@almaty.kz",
    cardAddressLabel: "Address",
    addressStreet: "Zhandosova 55",
    addressCity: "Almaty 050000",
    addressMapUrl:
      "https://www.google.com/maps/search/?api=1&query=Zhandosova+55%2C+Almaty",
    cardHoursLabel: "Opening hours",
    hours: "Mon–Fri: 9:00 – 18:00",
    socialSectionTitle: "Follow us",
    socialSectionSubtitle:
      "Stay up to date with city news and events on social media",
    socialCards: [
      { name: "Instagram", handle: "@myalmaty" },
      { name: "Facebook", handle: "/myalmaty" },
      { name: "YouTube", handle: "My Almaty" },
      { name: "TikTok", handle: "@myalmaty" },
    ],
    formTitle: "Write to us",
    formSubtitle:
      "Fill in the form below and we will get back to you shortly",
    formNamePh: "Your name",
    formEmailPh: "your@email.com",
    formMessagePh: "Your message…",
    formSubmit: "Send",
    formSent:
      "Message sent (demo). Connect an API for real delivery.",
    mapTitle: "How to find us",
    mapSubtitle: "Central office in the heart of the city",
    mapEmbedTitle: "Map: office at Zhandosova 55",
    newcomerTitle: "Must-haves for newcomers in Almaty",
    newcomerBlocks: [
      {
        title: "Transport",
        body: "Bus fares are paid via the Onay app (QR — 120 ₸; cash is not accepted). In the metro, use an Onay card, bank card, or token. Hours: buses 06:00–23:00, metro 06:20–00:00. For taxis, Yandex Go is convenient; for routes, use the 2GIS app.",
        slideAlts: ["Bus", "Onay card", "Metro train"],
      },
      {
        title: "Payments and money",
        body: "Cards and Apple/Google Pay work almost everywhere. Cash in tenge is mostly for markets and mountain trips; you can exchange currency at any city exchange office.",
        slideAlts: ["Bank cards", "Tenge", "Phone payment"],
      },
      {
        title: "Connectivity",
        body: "SIM cards (Izi, Tele2, Beeline) are sold in malls with your passport. The city has 5G; signal often drops in the mountains — download offline maps in advance.",
        slideAlts: ["Smartphone and Wi‑Fi", "SIM card", "5G"],
      },
      {
        title: "Local tip",
        body: "Almaty’s main landmark: the mountains are always to the south. “Up” means toward the mountains, “down” away from them; addresses and routes follow this logic.",
        slideAlts: ["Kok-Tobe", "Park", "Mountains"],
      },
    ],
  },
  aboutAlmatyPage: {
    heroTitle: "ABOUT ALMATY",
    heroSubtitle:
      "A city of apples, culture, and majestic mountains",
    heroImageAlt: "Panorama of Almaty with the Zailiysky Alatau mountains",
    geography: {
      title: "Geography",
      description:
        "Kazakhstan’s largest city in the south-east of the country",
    },
    population: {
      title: "Population",
      description:
        "Over two million residents and many cultures",
    },
    history: {
      title: "History",
      description: "Founded in 1854 as the Verny fortress",
    },
    nature: {
      title: "Nature",
      description: "Surrounded by the Zailiysky Alatau mountains",
    },
    sliderPrev: "Previous",
    sliderNext: "Next",
    sliderDotAria: "Slide {n} of {total}",
    storyBlocks: [
      {
        title: "Heart of the apple land",
        paragraphs: [
          "The name “Almaty” is linked to “alma” — apple. The city is rightly seen as a symbol of the apple region and a place that keeps the memory of wild apples and regional orchards.",
          "Parks and avenues grow varieties that are part of the cultural code: from spring blossom to autumn harvest — here the apple is not only fruit but an image of the city.",
        ],
        slideAlts: [
          "Apple trees in the mountains",
          "Ripe apples",
          "Panorama of mountains and valley",
        ],
      },
      {
        title: "At the foot of majestic peaks",
        paragraphs: [
          "Almaty lies on the northern slope of the Zailiysky Alatau: snowy summits are visible from almost anywhere, and mountain air sets the rhythm of walks and leisure.",
          "Nearby are Medeu and Shymbulak: mountain resorts and slopes people visit for fresh air, skiing, and views of the city and ridge.",
        ],
        slideAlts: [
          "Valley with yurts and horses",
          "Mountain meadows",
          "Mountain landscape",
        ],
      },
      {
        title: "A unique rhythm of life",
        paragraphs: [
          "In Almaty people navigate not only by compass points but by “up” — toward the mountains — and “down” — toward the centre and plain.",
          "“Up” and “down” sound in conversation and navigation as naturally as street names.",
          "This rhythm ties the city to the terrain and makes getting around clear for a visitor from day one.",
        ],
        slideAlts: [
          "View of Almaty and the mountains",
          "City at the foot of the ridge",
          "City panorama",
        ],
      },
    ],
  },
  symbolPage: {
    heroTitle: "SYMBOLS OF ALMATY",
    heroSubtitle:
      "Signs and images that define the southern capital",
    heroImageAlt: "Valley by the mountains with a yurt and rainbow",
    sliderPrev: "Previous",
    sliderNext: "Next",
    sliderDotAria: "Slide {n} of {total}",
    storyBlocks: [
      {
        title: "The majestic Zailiysky Alatau",
        paragraphs: [
          "The Zailiysky Alatau has always embraced Almaty like protective arms. They inspire adventure, shape our horizon, and remind us of nature’s grandeur.",
          "This powerful landscape shapes our character: bold, resilient, and always reaching for new heights.",
        ],
        slideAlts: [
          "Snowy peaks of the Zailiysky Alatau",
          "Conifer forest and mountain slopes",
          "Ridge panorama at sunset",
        ],
      },
      {
        title: "The Almaty aport apple",
        paragraphs: [
          "For centuries the Almaty valleys were covered with wild apple trees — Malus sieversii — ancestor of all modern cultivated apples. This natural heritage gave the city its name and part of its identity.",
          "The apple stands for more than our agricultural past: it is growth, nurturing innovation, and sharing our fruit with the world.",
        ],
        slideAlts: ["Ripe Almaty aport apples", "Apples on a branch"],
      },
      {
        title: "A hearth of unity — the yurt",
        paragraphs: [
          "The yurt is a symbol of our welcoming home under the open sky. Its round form recalls the sun, the dome the clear sky — a space where every guest feels cosy and protected.",
          "It reflects the soul of Almaty: our warmth, respect for tradition, and openness to the world. The yurt’s shanyrak unites us under one horizon, reminding us of family and home.",
        ],
        slideAlts: [
          "Yurt in the forest at dusk",
          "Traditional Kazakh yurt on the steppe",
          "Shanyrak and yurt frame details",
        ],
      },
    ],
    mountainSpiritTitle: "Mountain spirit — the snow leopard",
    mountainSpiritParagraphs: [
      "The snow leopard is Almaty’s unseen guardian, living on the line between land and sky. Its grace, quiet strength, and power to move across steep rock make it a true master of the Zailiysky Alatau.",
      "This noble symbol reflects the city’s inner energy: calm confidence, independence, and the ability to keep balance between the ancient rhythm of the mountains and the pace of modern life.",
    ],
    mountainSpiritImageAlt:
      "Snow leopard mascot Barys skating on an outdoor ice rink with mountains in the background",
  },
  brandPage: {
    heroTitle: "ALMATY BRAND",
    heroSubtitle:
      "The city’s visual identity reflecting its unique character and spirit",
    heroImageAlt: "Almaty at night: city lights and snowy mountains",
    identityTitle: "Identity",
    identityBody:
      "The Almaty brand reflects centuries of history, cultural richness, and natural beauty. Each element of the visual system carries deep meaning and tells the story of Kazakhstan’s southern capital.",
    logoConceptTitle: "Logo concept",
    logoConceptParagraphs: [
      "Triangular mountain shapes form an abstract “ALA”, standing for both Almaty and the mountain landscape that defines our silhouette.",
      "At the bottom, an apple shape anchors the mark — three overlapping circles form an organic composition reflecting our heritage as the homeland of apples.",
      "Stem and leaf add a natural accent while keeping geometric clarity. The design is bold, memorable, and works at any scale and use case.",
    ],
    logoLockupAlt: "Almaty mark: apple with mountain silhouette and ALMATY wordmark",
    iconLabelMountains: "MOUNTAINS",
    iconLabelApple: "APPLE",
    iconLabelYurt: "YURT",
    iconLabelAla: "ALMATY",
    mascotTitle: "City mascot — Barys",
    mascotIconAlt: "Barys the snow leopard mascot",
    mascotIntro:
      "Barys is a living symbol and the official mascot of Almaty. Chosen as the lead brand character, he helps make the city’s communication with residents and visitors warmer, more open, and more inclusive.",
    mascotOutro:
      "The mascot’s role: Barys appears as a friendly guide. He helps tell stories about city events, mountain safety rules, and green initiatives in language everyone can understand.",
    mascotImageAlts: [
      "Barys on a ski slope in the mountains",
      "Barys at the ice rink with visitors",
      "Barys at the Green Bazaar by a market stall",
      "Barys in a museum or gallery hall",
      "Barys with shopping bags by a modern building",
      "Barys high above the city with the Almaty skyline and mountains",
    ],
    paletteTitle: "Colour palette",
    colorHexLabel: "HEX",
    colorRgbLabel: "RGB",
    colors: [
      {
        name: "ALMATY BLUE",
        hex: "#0062D2",
        rgb: "(0, 98, 210)",
        role: "Primary Brand Color",
      },
      {
        name: "NATURE GREEN",
        hex: "#579C04",
        rgb: "(87, 156, 4)",
        role: "Secondary Brand Color",
      },
      {
        name: "SKY BLUE",
        hex: "#A0D9FF",
        rgb: "(160, 217, 255)",
        role: "Accent & Backgrounds",
      },
      {
        name: "SUNSHINE YELLOW",
        hex: "#FACC4F",
        rgb: "(250, 204, 79)",
        role: "Highlight & Energy",
      },
      {
        name: "APPLE RED",
        hex: "#DE2E06",
        rgb: "(222, 46, 6)",
        role: "Heritage & Passion",
      },
      {
        name: "EARTH BROWN",
        hex: "#A1782D",
        rgb: "(161, 120, 45)",
        role: "Warmth & Stability",
      },
    ],
    colorPairingsTitle: "Colour pairings",
    colorPairings: [
      {
        title: "PRIMARY PAIRING",
        subtitle: "Bold & Energetic",
        swatches: ["#0062D2", "#FACC4F"],
      },
      {
        title: "NATURE PAIRING",
        subtitle: "Fresh & Natural",
        swatches: ["#579C04", "#A0D9FF"],
      },
      {
        title: "HERITAGE PAIRING",
        subtitle: "Warm & Authentic",
        swatches: ["#DE2E06", "#A1782D"],
      },
      {
        title: "TRIADIC PAIRING",
        subtitle: "Dynamic & Vibrant",
        swatches: ["#0062D2", "#A0D9FF", "#579C04"],
      },
    ],
    typographyOverviewTitle: "Typography",
    typographyOverviewPrimaryBadge: "PRIMARY TYPEFACE",
    typographyOverviewSecondaryBadge: "SECONDARY TYPEFACE",
    typographyOverviewPrimaryDescription:
      "Use for headlines, large text blocks, and key statements. Delivers strong visual emphasis.",
    typographyOverviewSecondaryDescription:
      "Use for headlines, large text blocks, and key statements. Delivers strong visual emphasis.",
    typographyOverviewWeightsLabel: "Available weights:",
    typographyOverviewWeights: "Regular 400 • Medium 500 • Semibold 600 • Bold 700",
    typographyScaleTitle: "Type size scale",
    typographyScaleRows: [
      {
        usage: "Display",
        fontName: "Archivo Black",
        size: "96px",
        sample: "ALMATY",
        barColor: "#2563eb",
        tone: "brand",
      },
      {
        usage: "Headline 1",
        fontName: "Archivo Black",
        size: "64px",
        sample: "Where mountains meet",
        barColor: "#16a34a",
        tone: "brand",
      },
      {
        usage: "Headline 2",
        fontName: "Archivo Black",
        size: "48px",
        sample: "Kazakhstan’s cultural capital",
        barColor: "#ca8a04",
        tone: "brand",
        underline: true,
      },
      {
        usage: "Headline 3",
        fontName: "Archivo Black",
        size: "32px",
        sample: "Nature and city life",
        barColor: "#dc2626",
        tone: "brand",
      },
      {
        usage: "Body",
        fontName: "Inter",
        size: "18px",
        sample:
          "Almaty is a vibrant city at the foot of the Zailiysky Alatau. The brand reflects harmony between nature and the urban environment, freedom, energy, and the city’s historic identity as the homeland of apples.",
        barColor: "#a16207",
        tone: "body",
      },
      {
        usage: "Caption",
        fontName: "Inter",
        size: "14px",
        sample:
          "Supporting text and captions in Inter for better readability",
        barColor: "#38bdf8",
        tone: "caption",
      },
    ],
    iconographyTitle: "Iconography",
    iconographySubtitle:
      "A visual alphabet that tells Almaty’s story.",
    iconographyIcons: [
      { label: "Mountains" },
      { label: "Apple" },
      { label: "Sun" },
      { label: "Nature" },
      { label: "City" },
      { label: "Culture" },
      { label: "Community" },
      { label: "Navigation" },
      { label: "Tourism" },
      { label: "Art" },
      { label: "Social" },
      { label: "Energy" },
    ],
    iconGuidelinesTitle: "ICON GUIDELINES",
    iconGuidelines: [
      {
        title: "Stroke Weight",
        description: "Use 2.5px stroke for consistency",
      },
      {
        title: "Corner Radius",
        description: "Rounded ends (line-cap: round)",
      },
      {
        title: "Grid System",
        description: "24×24px base grid for all icons",
      },
    ],
    patternsTitle: "Patterns",
    patternsSubtitle: "Mountain rhythm and city geometry at the core of the style.",
    patternMountainLabel: "MOUNTAIN PATTERN",
    patternAlaLabel: "ALA PATTERN",
    merchTitle: "Merch collection",
    merchSubtitle: "A piece of the city you can take with you",
    merchItems: [
      { name: "Tote Bag", kind: "bag", imageSrc: "/conts/img_2.png" },
      { name: "T-Shirt", kind: "shirt", imageSrc: "/conts/img_3.png" },
      { name: "Cap", kind: "cap", imageSrc: "/conts/img_4.png" },
      { name: "Mug", kind: "mug", imageSrc: "/conts/img_5.png" },
      { name: "Thermos", kind: "thermos", imageSrc: "/conts/img_6.png" },
      { name: "Phone Case", kind: "case", imageSrc: "/conts/img_7.png" },
    ],
    mockupsTitle: "Mockups",
    mockupsSubtitle: "How Almaty’s new look comes alive in streets and public spaces.",
    mockupItems: [
      { name: "Metro citylight", kind: "metro", imageSrc: "/conts/m1.png" },
      { name: "Station poster", kind: "station", imageSrc: "/conts/m2.png" },
      { name: "Night billboard", kind: "billboard", imageSrc: "/conts/m3.png" },
      { name: "Bus stop", kind: "bus-stop", imageSrc: "/conts/m4.png" },
    ],
  },
  newsPage: {
    heroTitle: "NEWS",
    heroSubtitle: "Current city events and important announcements",
    heroImageAlt: "Panorama of Almaty with mountains",
    searchPlaceholder: "Search news…",
    searchAriaLabel: "Search news",
    categoriesToolbarAria: "Filter news by category",
    featuredTitle: "Featured news",
    emptyFiltered: "No news matches your filters. Try another category or search.",
    allNewsTitle: "All news",
    newsCountLabel: "{n} articles",
    readMore: "Read more",
    loadMore: "Load more",
    newsletterTitle: "Stay in the loop",
    newsletterSubtitle:
      "Subscribe to the newsletter and get important city updates first",
    newsletterPlaceholder: "your@mail.com",
    newsletterSubmit: "Subscribe",
    newsletterEmailAria: "Email for the newsletter",
    newsletterImageAlt: "Night view of the city",
    categories: [
      { id: "all", label: "All" },
      { id: "culture", label: "Culture" },
      { id: "events", label: "Events" },
      { id: "tourism", label: "Tourism" },
      { id: "sport", label: "Sport" },
      { id: "urban", label: "Urban development" },
    ],
    articles: [
      {
        categoryId: "culture",
        date: "12 April 2026",
        dateIso: "2026-04-12",
        title: "New cultural centre opens in Almaty",
        excerpt:
          "A downtown space for exhibitions, lectures, and meetings with craftspeople is opening. The first season programme is taking shape — watch for announcements.",
        imageAlt: "Wooden building in a traditional style",
      },
      {
        categoryId: "events",
        date: "10 April 2026",
        dateIso: "2026-04-10",
        title: "Apple festival returns this May",
        excerpt:
          "Expect tastings, a fair of local producers, and open-air concerts. The full programme will appear on the city website.",
        imageAlt: "Metal apple sculpture with the city in the background",
      },
      {
        categoryId: "sport",
        date: "1 April 2026",
        dateIso: "2026-04-01",
        title: "International marathon to welcome runners worldwide",
        excerpt:
          "The course runs along key streets; runners from dozens of countries are expected. Registration and distance classes are on the official race portal.",
        imageAlt: "Marathon runners at the city start line",
      },
      {
        categoryId: "urban",
        date: "5 April 2026",
        dateIso: "2026-04-05",
        title: "New metro line to open next year",
        excerpt:
          "Construction is in the final phase: stations get modern interchanges and accessible wayfinding. The commissioning schedule will be confirmed.",
        imageAlt: "Escalator and metro station",
      },
      {
        categoryId: "culture",
        date: "3 April 2026",
        dateIso: "2026-04-03",
        title: "Premiere of a new national ballet",
        excerpt:
          "The production blends classical dance with multimedia design. Tickets go on sale one month before the first performance.",
        imageAlt: "Ballet dancers on stage",
      },
      {
        categoryId: "tourism",
        date: "8 April 2026",
        dateIso: "2026-04-08",
        title: "New hiking routes at the foot of the Alatau",
        excerpt:
          "Safe trails are marked with signage and rest points. Maps are available in the Almaty guest app.",
        imageAlt: "Mountain trail and forest",
      },
      {
        categoryId: "urban",
        date: "1 April 2026",
        dateIso: "2026-04-01",
        title: "Embankment and lighting upgrade along the avenue",
        excerpt:
          "Work proceeds in phases; traffic lanes stay open. Completion is planned for late summer; any traffic pattern changes will be announced in advance.",
        imageAlt: "Modern buildings and city road",
      },
      {
        categoryId: "sport",
        date: "5 April 2026",
        dateIso: "2026-04-05",
        title: "City half marathon: registration open",
        excerpt:
          "Distances for different fitness levels, a family run, and a spectator support zone. Places are limited.",
        imageAlt: "Runners on a city course",
      },
      {
        categoryId: "culture",
        date: "28 March 2026",
        dateIso: "2026-03-28",
        title: "Summer stage in the park: classical and jazz programme",
        excerpt:
          "Free entry with prior registration. Children’s programme on weekend afternoons.",
        imageAlt: "Park with trees and a stage",
      },
      {
        categoryId: "events",
        date: "15 March 2026",
        dateIso: "2026-03-15",
        title: "Street food festival in the city centre",
        excerpt:
          "Chefs present cuisines of Kazakhstan and neighbouring regions. Free entry, rest areas, and a children’s programme at weekends.",
        imageAlt: "Street food and stalls in a square",
      },
      {
        categoryId: "tourism",
        date: "20 March 2026",
        dateIso: "2026-03-20",
        title: "Visitor centre: new tour languages",
        excerpt:
          "Audio guides and group tours added in English and Chinese. Book online or in the mobile app.",
        imageAlt: "Information desk and city map",
      },
      {
        categoryId: "sport",
        date: "25 March 2026",
        dateIso: "2026-03-25",
        title: "Medeu mountain rink season opening",
        excerpt:
          "Session schedule and spring passes are on the complex website. Ice planning follows the weather forecast.",
        imageAlt: "Ice rink in the mountains",
      },
      {
        categoryId: "urban",
        date: "18 March 2026",
        dateIso: "2026-03-18",
        title: "Greening neighbourhood pocket parks",
        excerpt:
          "Lit paths, children’s and sports areas are coming. Residents can take a survey on what to include.",
        imageAlt: "Alley in a city pocket park",
      },
      {
        categoryId: "culture",
        date: "22 March 2026",
        dateIso: "2026-03-22",
        title: "Open-air museum: new exhibition",
        excerpt:
          "Installations explore nomadic culture history. Guided tours at weekends; entry with a joint museum-day ticket.",
        imageAlt: "Outdoor sculptures",
      },
      {
        categoryId: "tourism",
        date: "30 March 2026",
        dateIso: "2026-03-30",
        title: "Tien Shan eco-trail: group size limits",
        excerpt:
          "Rules protect the landscape. Advance registration and a briefing at the zone entrance are required.",
        imageAlt: "Mountain trail and snowy peaks",
      },
    ],
  },
  subpages: {
    aboutAlmatyTitle: "About Almaty",
    newsTitle: "News",
    newsBody:
      "News feed — connect a CMS or static content when ready.",
    symbolTitle: "Symbol",
    symbolBody: "City symbolism page — content from your design.",
    brandTitle: "Brand",
    brandBody: "Guidelines and brand book — add assets from your design.",
  },
  a11y: {
    contrastHint: "Stronger contrast and reduced colour styling on the page.",
    contrastToggle: "Low vision mode: high-contrast black and white",
    panelTitle: "Accessibility settings",
    panelIntro:
      "Settings are saved in this browser and apply across the site.",
    panelOpen: "Open accessibility settings",
    panelClose: "Close settings panel",
    skipToContent: "Skip to main content",
    fontSizeLabel: "Text size",
    fontNormal: "Default",
    fontLarge: "Large",
    fontXLarge: "Extra large",
    spacingLabel: "Line spacing",
    spacingNormal: "Default",
    spacingRelaxed: "Relaxed",
    underlineLabel: "Underline links",
    underlineHint: "Links are always shown with an underline.",
    enhancedFocusLabel: "Keyboard navigation highlight",
    enhancedFocusHint:
      "A clear outline on buttons and links when moving with Tab.",
    contrastLabel: "Contrast mode",
    resetLabel: "Reset settings",
    prefsReset: "All accessibility preferences have been reset.",
  },
};
