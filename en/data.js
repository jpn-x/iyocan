/* ============================================================
   IYOCAN GUIDE - English content
   Mirrors ../data.js structure exactly. Edit this file to update
   English copy without touching app.js (shared with the JP site).
   ============================================================ */

/* Shared context sentence prepended to every ChatGPT prompt */
const LOCATION_CONTEXT =
  "I'm staying at IYOCAN, a guesthouse in Kamimitani, Iyo City, Ehime, Japan. ";

/* Common "closing" sentences appended to prompts */
const TAIL = {
  gourmet:
    "Please recommend 3–5 places I can reach by car from here. Check whether they're currently open, and include approximate distance, opening hours, price range, recommended dishes, and review ratings if available.",
  spot:
    "Please recommend 3–5 places I can reach by car from here, including approximate travel time, opening hours, and review ratings if available.",
  onsen:
    "Please recommend 3–5 places I can reach by car from here, including price, opening hours, key features, and review ratings if available.",
  omiyage:
    "Please suggest 3–5 items, including where I can buy them (shops, roadside stations, the airport, etc.) and roughly how much they cost.",
  drive:
    "Please suggest a good route, including travel time, places to stop along the way, and anything I should know.",
};

/* ============================================================
   1) 🏠 How to Use IYOCAN (no AI — official info from the host)
   Same placeholder structure as the JP site until the host adds
   real content there; do not invent details on this side either.
   ============================================================ */
const FACILITIES = [
  { id: "key", emoji: "🔑", title: "Check-in / Key" },
  { id: "wifi", emoji: "📶", title: "Wi-Fi" },
  { id: "bath", emoji: "🛁", title: "Bath" },
  { id: "shower", emoji: "🚿", title: "Shower" },
  { id: "aircon", emoji: "❄️", title: "Air Conditioning" },
  { id: "tv", emoji: "📺", title: "TV" },
  { id: "kitchen", emoji: "🍳", title: "Kitchen" },
  { id: "laundry", emoji: "🧺", title: "Washing Machine" },
  { id: "trash", emoji: "🗑️", title: "Trash" },
  { id: "parking", emoji: "🚗", title: "Parking" },
  { id: "rules", emoji: "🚭", title: "House Rules" },
  { id: "checkout", emoji: "🚪", title: "Check-out" },
].map((f) => ({
  ...f,
  steps: ["Step ① coming soon", "Step ② coming soon", "Step ③ coming soon"],
  note: "",
}));

/* ============================================================
   2) 🤖 Explore Ehime (question chips for AI)
   ============================================================ */
const CATEGORIES = [
  {
    id: "gourmet",
    emoji: "🍜",
    title: "Food",
    subtitle: "What should we eat?",
    color: "orange",
    questions: [
      { label: "🏆 Show me the most popular restaurants!", prompt: `${LOCATION_CONTEXT}Please show me the most popular restaurants I can reach by car from here. ${TAIL.gourmet}` },
      { label: "⭐ Which restaurants have great reviews?", prompt: `${LOCATION_CONTEXT}Please tell me which restaurants near here have great reviews. ${TAIL.gourmet}` },
      { label: "🍊 What food is Ehime famous for?", prompt: `${LOCATION_CONTEXT}Please tell me about local specialty dishes Ehime is famous for, and restaurants nearby where I can try them. ${TAIL.gourmet}` },
      { label: "🍜 I want to eat great ramen!", prompt: `${LOCATION_CONTEXT}Please recommend great ramen restaurants I can reach by car from here. ${TAIL.gourmet}` },
      { label: "🐟 Where can I get fresh seafood?", prompt: `${LOCATION_CONTEXT}Please recommend restaurants near here known for fresh seafood. ${TAIL.gourmet}` },
      { label: "🥩 Where can I get good yakiniku (BBQ)?", prompt: `${LOCATION_CONTEXT}Please recommend good yakiniku (Japanese BBQ) restaurants I can reach by car from here. ${TAIL.gourmet}` },
      { label: "☕ Any nice cafés nearby?", prompt: `${LOCATION_CONTEXT}Please recommend cafés with a nice atmosphere near here. ${TAIL.gourmet}` },
      { label: "💰 Where can I get great food on a budget?", prompt: `${LOCATION_CONTEXT}Please recommend restaurants near here with great food at a good price. ${TAIL.gourmet}` },
      { label: "🌙 Any restaurants open late?", prompt: `${LOCATION_CONTEXT}Please recommend restaurants near here that are open tonight. ${TAIL.gourmet}` },
    ],
  },
  {
    id: "onsen",
    emoji: "♨️",
    title: "Hot Springs",
    subtitle: "Time to warm up",
    color: "pink",
    questions: [
      { label: "🏆 What are the most popular hot springs?", prompt: `${LOCATION_CONTEXT}Please tell me the most popular hot springs I can reach by car from here. ${TAIL.onsen}` },
      { label: "⭐ Which hot springs have great reviews?", prompt: `${LOCATION_CONTEXT}Please tell me which hot springs near here have great reviews. ${TAIL.onsen}` },
      { label: "🚗 Which hot springs are easy to reach by car?", prompt: `${LOCATION_CONTEXT}Please recommend hot springs that are quick and easy to reach by car from here. ${TAIL.onsen}` },
      { label: "🌅 Which hot springs have the best views?", prompt: `${LOCATION_CONTEXT}Please recommend hot springs near here with beautiful views. ${TAIL.onsen}` },
      { label: "👨‍👩‍👧 Which hot springs are good for families?", prompt: `${LOCATION_CONTEXT}Please recommend hot springs near here that are easy to visit with small children. ${TAIL.onsen}` },
    ],
  },
  {
    id: "sightseeing",
    emoji: "🗺️",
    title: "Sightseeing",
    subtitle: "Where should we go?",
    color: "blue",
    questions: [
      { label: "🏆 Show me the top 5 attractions!", prompt: `${LOCATION_CONTEXT}Please show me the top 5 attractions I can reach by car from here. ${TAIL.spot}` },
      { label: "⭐ Which places have the best reviews?", prompt: `${LOCATION_CONTEXT}Please tell me which sightseeing spots near here have the best reviews. ${TAIL.spot}` },
      { label: "🔰 What should I see on my first trip to Ehime?", prompt: `${LOCATION_CONTEXT}This is my first time in Ehime. Please tell me the classic, must-see spots I should visit first. ${TAIL.spot}` },
      { label: "🚗 What can I visit by car from IYOCAN?", prompt: `${LOCATION_CONTEXT}Please tell me sightseeing spots that are quick and easy to reach by car from here. ${TAIL.spot}` },
      { label: "⏰ What can I see in about half a day?", prompt: `${LOCATION_CONTEXT}Please recommend sightseeing spots I can enjoy in about half a day. ${TAIL.spot}` },
      { label: "🌧️ What indoor places are good on a rainy day?", prompt: `${LOCATION_CONTEXT}Please recommend mostly-indoor sightseeing spots I can enjoy even on a rainy day. ${TAIL.spot}` },
    ],
  },
  {
    id: "nature",
    emoji: "🌊",
    title: "Nature & Fun",
    subtitle: "Let's play outside",
    color: "blue",
    questions: [
      { label: "🌊 Where can I enjoy the ocean?", prompt: `${LOCATION_CONTEXT}Please recommend beautiful ocean or seaside spots I can reach by car from here. ${TAIL.spot}` },
      { label: "🏞️ Any nice rivers for playing in the water?", prompt: `${LOCATION_CONTEXT}Please recommend rivers near here that are good for playing in the water. ${TAIL.spot}` },
      { label: "🌳 Any good parks nearby?", prompt: `${LOCATION_CONTEXT}Please recommend nice parks I can reach by car from here. ${TAIL.spot}` },
      { label: "🎮 What fun activities are nearby?", prompt: `${LOCATION_CONTEXT}Please recommend activities I can try near here, such as marine sports or cycling. ${TAIL.spot}` },
      { label: "👨‍👩‍👧 What outdoor places are great for families?", prompt: `${LOCATION_CONTEXT}Please recommend outdoor spots near here that are great for families with kids. ${TAIL.spot}` },
      { label: "🚗 Any nature spots good for a scenic drive?", prompt: `${LOCATION_CONTEXT}Please recommend beautiful nature spots I can enjoy while driving. ${TAIL.drive}` },
      { label: "🌄 Where can I see amazing views?", prompt: `${LOCATION_CONTEXT}Please recommend spots near here with amazing views. ${TAIL.spot}` },
      { label: "📸 Where are the best photo spots?", prompt: `${LOCATION_CONTEXT}Please recommend the most photogenic spots I can reach by car from here. ${TAIL.spot}` },
    ],
  },
  {
    id: "omiyage",
    emoji: "🛍️",
    title: "Souvenirs",
    subtitle: "What should we bring home?",
    color: "yellow",
    questions: [
      { label: "🏆 Show me the most popular Ehime souvenirs!", prompt: `${LOCATION_CONTEXT}Please show me a ranking of the most popular souvenirs to bring home from Ehime. ${TAIL.omiyage}` },
      { label: "🍊 What souvenirs is Ehime famous for?", prompt: `${LOCATION_CONTEXT}Please tell me the classic, iconic souvenirs that come to mind when people think of Ehime. ${TAIL.omiyage}` },
      { label: "🍊 What are the best mikan (orange) treats?", prompt: `${LOCATION_CONTEXT}Please recommend mikan (Ehime orange) flavored snacks and drinks. ${TAIL.omiyage}` },
      { label: "🎁 What souvenirs make good gifts?", prompt: `${LOCATION_CONTEXT}Please recommend Ehime souvenirs that make good gifts for coworkers or friends. ${TAIL.omiyage}` },
      { label: "🛒 What can I buy at a local supermarket?", prompt: `${LOCATION_CONTEXT}Please recommend Ehime souvenirs I can easily buy at a local supermarket. ${TAIL.omiyage}` },
      { label: "✈️ What can I buy at the airport or station?", prompt: `${LOCATION_CONTEXT}Please recommend Ehime souvenirs available around Matsuyama Airport or Matsuyama Station. ${TAIL.omiyage}` },
    ],
  },
  {
    id: "ranking",
    emoji: "🏆",
    title: "Popular & Reviews",
    subtitle: "What do people love here?",
    color: "yellow",
    questions: [
      { label: "🏆 Show me the most popular places in Ehime!", prompt: `${LOCATION_CONTEXT}Please show me currently popular sightseeing spots across Ehime prefecture. ${TAIL.spot}` },
      { label: "⭐ Show me places with great reviews!", prompt: `${LOCATION_CONTEXT}Please show me spots (sightseeing or food, either is fine) with great reviews on Google Maps or similar. ${TAIL.spot}` },
      { label: "📍 What's popular with locals, not just tourists?", prompt: `${LOCATION_CONTEXT}Please show me spots and restaurants that are popular with locals rather than tourists. ${TAIL.spot}` },
      { label: "💰 What are the best-value places?", prompt: `${LOCATION_CONTEXT}Please tell me the best spots if I'm choosing based on value for money. ${TAIL.spot}` },
    ],
  },
  {
    id: "rainy",
    emoji: "🌧️",
    title: "Rainy Day",
    subtitle: "We've got you covered",
    color: "blue",
    questions: [
      { label: "🌧️ What can I do in Ehime on a rainy day?", prompt: `${LOCATION_CONTEXT}It's raining today. Please recommend sightseeing spots I can still enjoy in the rain. ${TAIL.spot}` },
      { label: "👨‍👩‍👧 What can families do on a rainy day?", prompt: `${LOCATION_CONTEXT}It's raining today. Please recommend indoor spots that are great for families with kids. ${TAIL.spot}` },
      { label: "💑 Any good rainy-day date spots?", prompt: `${LOCATION_CONTEXT}It's raining today. Please recommend good date spots for a rainy day. ${TAIL.spot}` },
      { label: "🏠 Where can I go indoors?", prompt: `${LOCATION_CONTEXT}It's raining today. Please recommend indoor spots where I can relax and enjoy myself. ${TAIL.spot}` },
    ],
  },
  {
    id: "kids",
    emoji: "👨‍👩‍👧",
    title: "Family / With Kids",
    subtitle: "Fun for everyone",
    color: "pink",
    questions: [
      { label: "😊 What places will kids love?", prompt: `${LOCATION_CONTEXT}Please recommend spots I can reach by car from here that kids will love. ${TAIL.spot}` },
      { label: "🍽️ Which restaurants are easy with kids?", prompt: `${LOCATION_CONTEXT}Please recommend restaurants I can reach by car from here that are easy to visit with kids. ${TAIL.gourmet}` },
      { label: "🆓 Any free places to play with kids?", prompt: `${LOCATION_CONTEXT}Please recommend free places near here where I can play with my kids. ${TAIL.spot}` },
      { label: "🌧️ What can families do on a rainy day?", prompt: `${LOCATION_CONTEXT}It's raining today. Please recommend indoor spots that are great for families with kids. ${TAIL.spot}` },
    ],
  },
  {
    id: "drive",
    emoji: "🚗",
    title: "Road Trip",
    subtitle: "Let's hit the road",
    color: "orange",
    questions: [
      { label: "🚗 What's a good drive route from IYOCAN?", prompt: `${LOCATION_CONTEXT}Please recommend a good drive route starting from here. ${TAIL.drive}` },
      { label: "🌄 Where should I go for a scenic drive?", prompt: `${LOCATION_CONTEXT}Please recommend a scenic drive route with beautiful views. ${TAIL.drive}` },
      { label: "🌊 Show me a beautiful coastal drive!", prompt: `${LOCATION_CONTEXT}Please recommend a drive route along the coast. ${TAIL.drive}` },
      { label: "⏰ Where can I go for a half-day drive?", prompt: `${LOCATION_CONTEXT}Please recommend a drive route I can complete in about half a day. ${TAIL.drive}` },
      { label: "☀️ Where can I go for a full-day drive?", prompt: `${LOCATION_CONTEXT}Please recommend a drive route I can enjoy over a full day. ${TAIL.drive}` },
    ],
  },
];

/* ============================================================
   3) 🌞 What Should I Do Today? (guided conditions -> one AI ask)
   ============================================================ */
const TODAY_PLAN = {
  emoji: "🌞",
  title: "Today's Plan",
  subtitle: "Pick your situation and we'll help you plan",
  fields: [
    {
      id: "time",
      label: "⏰ What time is it now?",
      options: ["🌅 Morning", "☀️ Afternoon", "🌆 Evening", "🌙 Night"],
    },
    {
      id: "weather",
      label: "🌈 What's the weather like?",
      options: ["☀️ Sunny", "☁️ Cloudy", "🌧️ Rainy"],
    },
    {
      id: "with",
      label: "👥 Who are you with?",
      options: ["👤 Alone", "💑 Couple", "👨‍👩‍👧 Family", "👯 Friends"],
    },
    {
      id: "car",
      label: "🚗 Do you have a car?",
      options: ["🚗 Yes", "🚶 No"],
    },
    {
      id: "hours",
      label: "🕐 How much time do you have?",
      options: ["1–2 hours", "Half a day", "A full day"],
    },
    {
      id: "food",
      label: "🍽️ What are you in the mood for?",
      options: ["🍜 Japanese food", "🍖 Something hearty", "☕ Something light", "🍊 Local Ehime food", "🤷 Anything"],
    },
  ],
};

function buildTodayPrompt(answers) {
  return (
    `${LOCATION_CONTEXT}Right now it's ${answers.time}, and the weather is ${answers.weather}. ` +
    `I'm with: ${answers.with}. Car: ${answers.car}. Time available: ${answers.hours}. ` +
    `I feel like eating: ${answers.food}. ` +
    `Based on these conditions, please suggest a specific plan for enjoying Ehime — sightseeing, food, and things to do.`
  );
}

/* ============================================================
   4) 🆘 Need Help? (no facility database — address-aware AI questions)
   ============================================================ */
const SOS_CONTEXT =
  "I'm currently staying at IYOCAN, a guesthouse at 2293-1 Kamimitani, Iyo City, Ehime, Japan. ";

const HELP_ITEMS = [
  {
    id: "hospital",
    emoji: "🏥",
    title: "Hospital",
    sub: "Find a nearby hospital",
    prompt: `${SOS_CONTEXT}I'm not feeling well and need to find a hospital or clinic. Based on this address, please find medical facilities that are currently open or could see me now. Include distance, driving time, hours, phone number, and department/specialty if available, and confirm whether each is currently open. If this could be a medical emergency, tell me to call 119 (ambulance) first instead.`,
  },
  {
    id: "pharmacy",
    emoji: "💊",
    title: "Pharmacy",
    sub: "Find a nearby pharmacy",
    prompt: `${SOS_CONTEXT}I need to find a pharmacy. Based on this address, please find nearby pharmacies, checking whether each is currently open. Include distance, driving time, hours, phone number, and any notable features if available.`,
  },
  {
    id: "conveni",
    emoji: "🏪",
    title: "Convenience Store",
    sub: "Find a nearby convenience store",
    prompt: `${SOS_CONTEXT}Please find convenience stores near this address, ordered by distance. Include driving time, whether each is currently open, and whether it's open 24 hours.`,
  },
  {
    id: "supermarket",
    emoji: "🛒",
    title: "Supermarket",
    sub: "Find a nearby supermarket",
    prompt: `${SOS_CONTEXT}Please find supermarkets that are easy to reach by car from this address. Include whether each is currently open, distance, driving time, hours, and any notable features.`,
  },
  {
    id: "gas",
    emoji: "⛽",
    title: "Gas Station",
    sub: "Find a nearby gas station",
    prompt: `${SOS_CONTEXT}Please find gas stations near this address. Include whether each is currently open, distance, driving time, hours, whether it's open 24 hours, and price or features if known.`,
  },
  {
    id: "taxi",
    emoji: "🚕",
    title: "Taxi",
    sub: "Call a taxi or find a company",
    prompt: `${SOS_CONTEXT}Please find taxi companies that serve this address or area. Include phone number, hours, and how to book if available.`,
  },
  {
    id: "train",
    emoji: "🚃",
    title: "Train / Station",
    sub: "Find the nearest station",
    prompt: `${SOS_CONTEXT}Please tell me the most convenient nearby train station. Include driving distance and time, the station name, which lines it serves, and how to reach major stations — explained clearly for a traveler. If current schedule/service info matters, please check the latest information.`,
  },
  {
    id: "bus",
    emoji: "🚌",
    title: "Bus",
    sub: "Find nearby bus stops & routes",
    prompt: `${SOS_CONTEXT}Please find bus stops and routes I can use near this address. Include distance to the stop, which routes are available, how to reach major destinations, and current service information if available.`,
  },
  {
    id: "food",
    emoji: "🍽️",
    title: "Food",
    sub: "Find a restaurant open right now",
    prompt: `${SOS_CONTEXT}I'd like to get food right now. Based on this address, please find restaurants that are currently open and easy to reach by car. Include distance, driving time, hours, budget, recommended dishes, and review ratings if available.`,
  },
  {
    id: "other",
    emoji: "🆘",
    title: "Other Help",
    sub: "Ask ChatGPT about anything else",
    prompt: `${SOS_CONTEXT}I have a problem right now and need help. Treat IYOCAN as my current location, and tell me what information or nearby facilities/services could help solve my situation. Please check whether anything you recommend is currently open, if relevant.`,
  },
];

/* ============================================================
   5) 📞 Contact the Host
   Real contact details mirrored from ../data.js — do not invent
   anything that isn't filled in on the JP side.
   ============================================================ */
const MANAGER = {
  photo: "../assets/manager.png",
  message: "If you need anything, feel free to contact us! 🍊",
  name: "Naoki Murakami",
  tel: "090-5044-7799",
  lineId: "murakaminaoki",
  lineUrl: "https://line.me/ti/p/Fu0w0Dlruk",
  lineQr: "../assets/line-qr.jpg",
  sns: [
    { id: "x", emoji: "𝕏", label: "@cadillac600", url: "https://x.com/cadillac600" },
    { id: "instagram", emoji: "📷", label: "Instagram", url: "https://www.instagram.com/cadillac600/?hl=ja" },
  ],
};

const ISSHO_CARD = {
  url: "https://issho.jreco.net/",
  title: "Issho ni Miru",
  description: "Share files without an app",
  note:
    "📱 Not using LINE?<br/>No app needed — just share photos, files, and messages from your browser. (The site itself is in Japanese.)",
  image: "../assets/issho-card.jpg",
};

const CERTIFICATE = {
  image: "../assets/certificate.png",
};

/* ============================================================
   6) Screen copy (English)
   ============================================================ */
const STRINGS = {
  siteName: "IYOCAN GUIDE",
  langSwitch: { label: "🇯🇵 日本語", href: "../" },

  home: {
    title: "IYOCAN GUIDE",
    subtitle: "Welcome! What would you like to do?",
    mainBadge: "Start Here",
    houseTitle: "How to Use IYOCAN",
    houseSub: "Everything about your stay",
    ehimeTitle: "Explore Ehime",
    ehimeSub: "Ask AI about anything you're curious about!",
    helpTitle: "Need Help?",
    helpSub: "Hospital, pharmacy, transport & more",
    contactTitle: "Contact the Host",
    contactSub: "Get in touch with Naoki",
    footerNote: "For guests who scanned the QR code 🍊",
  },

  house: {
    pageTitle: "How to Use IYOCAN",
    heroTitle: "Everything about your stay",
    heroSub: "Tap what you'd like to know",
    photoPlaceholder: "📷 Photo coming soon",
    ownerNote: "✏️ The host will add details and photos here",
  },

  ehime: {
    pageTitle: "Explore Ehime",
    heroTitle: "What should we do?",
    heroSub: "Tap anything you're curious about.",
    categoryHeading: "Browse by category",
  },

  chips: {
    copyTitle: "Copy question",
    footerNote: "Tap to open ChatGPT. Use 📋 to copy the question instead.",
  },

  today: {
    ctaLabel: "💬 Ask ChatGPT with these details",
  },

  help: {
    pageTitle: "Need Help?",
    heroTitle: "Need something right now?",
    heroSub: "Find the nearest place or the info you need — just ask ChatGPT.",
    emergencyTitle: "🚨 In a real emergency",
    emergencyAmbulance: "Ambulance / Fire",
    emergencyPolice: "Police",
  },

  contact: {
    pageTitle: "Contact the Host",
    namePlaceholder: "✏️ Host name coming soon",
    telLabel: (tel) => `📞 Call ${tel}`,
    telPlaceholder: "✏️ Phone number coming soon",
    lineIdText: (id) => `LINE ID: <b>${id}</b>`,
    lineIdPlaceholder: "✏️ LINE ID coming soon",
    lineSectionTitle: "💬 Message us on LINE",
    lineCtaLabel: "💬 Message on LINE",
    lineHint: "📱 On another phone or a computer? Scan this QR code instead",
    docSectionTitle: "📎 Sharing Files & Documents",
    altManager: "Host",
    altLineQr: "LINE QR code",
    companyLinkLabel: "About the operating company",
    companyLinkUrl: "https://search.jreco.net/company",
    certButtonLabel: "View Lodging Business Certificate",
    certButtonNumber: "Notification No. M380048635",
    altCertificate: "Certified Private Lodging Business notification",
  },

  nav: {
    house: "IYOCAN",
    ehime: "Explore Ehime",
    help: "Need Help?",
    contact: "Contact Host",
  },

  toast: {
    copied: "Question copied 📋",
    copyFailed: "Couldn't copy",
  },
};
