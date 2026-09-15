/* ============================================================
   IYOCAN GUIDE - English content
   Mirrors ../data.js structure exactly. Edit this file to update
   English copy without touching app.js (shared with the JP site).
   ============================================================ */

/* Hero image on the home page */
const HOME_HERO_ICON = "../assets/house-icon.png";

/* Logo icon in the top-left of the header */
const SITE_ICON = "../assets/icon-32.png";

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

const wifiFacility = FACILITIES.find((f) => f.id === "wifi");
wifiFacility.image = "../assets/wifi-card.jpg";
wifiFacility.password = "71521725";
wifiFacility.note =
  "📶 Just scan the QR code in the image with your phone's camera to connect instantly!";

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
   2.5) 🍊 Explore Ehime! (deeper dive, centered on IYOCAN)
   ============================================================ */
const CONQUER_CONTEXT =
  "I'm staying at IYOCAN, a guesthouse at 2293-1 Kamimitani, Iyo City, Ehime, Japan. I have a car. Please recommend things I can actually do in Ehime right now, as a traveler. ";

const CONQUER_CATEGORIES = [
  {
    id: "eat",
    emoji: "🍴",
    title: "Food",
    subtitle: "Find something delicious nearby",
    color: "orange",
    questions: [
      {
        label: "🐟 I want fresh Ehime seafood!",
        prompt: `${CONQUER_CONTEXT}Please find restaurants within a realistic driving distance from IYOCAN (Iyo City, Matsumae, Matsuyama, Tobe, Toon, etc.) that serve Ehime/Seto Inland Sea-style seafood, sashimi, or local fish dishes — ideally places used by locals rather than chains. Include whether it's currently open, opening hours, distance and driving time from IYOCAN, budget, recommended dishes, review rating and review count, and parking availability where possible.`,
      },
      {
        label: "🍣 I want great sushi!",
        prompt: `${CONQUER_CONTEXT}Please find great sushi restaurants within a realistic driving distance from IYOCAN. Consider whether they use Ehime-style fish, how local the spot feels, its reputation as a sushi restaurant, price range, whether it's open for lunch or dinner, whether a reservation is needed, and whether it could realistically be visited same-day — don't focus only on high-end places. Include whether it's currently open, hours, distance, travel time, and review rating/count where possible.`,
      },
      {
        label: "🐟 I want fresh sashimi!",
        prompt: `${CONQUER_CONTEXT}I'd like casual, fresh local-fish sashimi rather than sushi — izakaya and seafood diners are fine too. Please search within a realistic driving distance from IYOCAN. Include whether it's currently open, hours, distance, travel time, budget, recommended dishes, review rating/count, and parking where possible.`,
      },
      {
        label: "🍜 I want great ramen!",
        prompt: `${CONQUER_CONTEXT}Please find ramen shops that are locally popular in Matsuyama/Ehime. Prefer shops with local character over chains. Include whether there's usually a line, opening hours, closed days, parking, budget, and popular menu items where possible, along with distance/travel time from IYOCAN and whether it's currently open.`,
      },
    ],
  },
  {
    id: "popular",
    emoji: "🏆",
    title: "Chase What's Popular",
    subtitle: "Go by lines and reviews",
    color: "pink",
    questions: [
      {
        label: "🔥 I want to try a place with a line out the door!",
        prompt: `${CONQUER_CONTEXT}Within Ehime, especially within a realistic driving distance from IYOCAN, please find restaurants, dessert shops, local specialty food spots, or souvenir shops known for having lines or noticeable wait times — not just famous places, but ones that actually tend to have a queue. If possible, include: name, type of food, distance and driving time from IYOCAN, opening hours, budget, popular menu items, review rating and review count, the time of day lines tend to form, whether reservations are possible, and whether it's currently open. If you can't check real-time crowd levels, say so clearly, and don't present old information as current. If possible, also tell me which one is realistic to go to right now.`,
      },
      {
        label: "🏆 Show me Ehime's most popular restaurant ranking!",
        prompt: `${CONQUER_CONTEXT}Please give me a ranking of popular restaurants in Ehime, focused on places realistically reachable from IYOCAN. Rather than a simple fame-based ranking, weigh review rating, review count, popularity with locals, popularity with tourists, whether it's currently open, and how easy it is to reach from IYOCAN. If the ranking basis is fuzzy, make clear it's "an AI's overall recommended ranking."`,
      },
      {
        label: "⭐ I want to know which places have great reviews!",
        prompt: `${CONQUER_CONTEXT}Please show me places (any type — food or sightseeing) with great reviews, within a realistic distance from IYOCAN. Don't just rank a 5.0 rating with barely any reviews at the top — balance the rating against the review count. Include whether it's currently open, distance, and travel time where possible.`,
      },
    ],
  },
  {
    id: "night",
    emoji: "🌙",
    title: "Enjoy the Night",
    subtitle: "Local-feeling nightlife",
    color: "blue",
    questions: [
      {
        label: "🍺 I want a local-feeling izakaya!",
        prompt: `${CONQUER_CONTEXT}Please find an izakaya with real Matsuyama/Ehime local character — not a chain. Consider whether it serves local dishes, local fish, jakoten (fish cake), and local sake, along with atmosphere, budget, opening hours, whether it's currently open, and whether reservations are needed. Since this involves drinking, please also mention taxis, designated-driver services, or public transport for getting back safely without driving.`,
      },
      {
        label: "🍸 I want to drink at a local bar!",
        prompt: `${CONQUER_CONTEXT}Please find a bar with local character that's still easy for a first-time visitor to walk into. Include atmosphere, pricing, opening hours, and how accessible it is from central Matsuyama. Since this involves drinking, please also mention how easy it is to get a taxi or designated-driver service back.`,
      },
      {
        label: "🍷 I want to try a snack bar (Japanese-style hostess bar)!",
        prompt: `${CONQUER_CONTEXT}Please find a "snack" bar (a small Japanese-style hostess bar) that's easy for a first-time visitor to walk into. If known, explain the pricing structure — set fee, cover charge, bottle service, or time-based pricing. If pricing is unclear, say so rather than guessing. Please don't recommend anything that suggests a shady or sexual-service-oriented establishment. Since this involves drinking, please also mention taxi or designated-driver options for getting back.`,
      },
      {
        label: "🌃 I want to see a night view!",
        prompt: `${CONQUER_CONTEXT}Please find a night-view spot that's realistically reachable by car from IYOCAN and safe to visit at night. Include parking availability, how easy it is to access at night, opening/visiting hours, and distance and travel time from IYOCAN where possible.`,
      },
    ],
  },
  {
    id: "omiyage",
    emoji: "🛍️",
    title: "Souvenirs",
    subtitle: "Something to bring home",
    color: "yellow",
    questions: [
      {
        label: "🍊 Where should I buy Ehime souvenirs?",
        prompt: `${CONQUER_CONTEXT}Please find a shop that sells popular, easy-to-buy, distinctly-Ehime souvenirs. Include opening hours, parking availability, distance from IYOCAN, and whether it's easy to stop by on the way back. Please also suggest options suited for coworkers versus family, depending on the use case.`,
      },
      {
        label: "🐟 I want to buy jakoten (fish cake)!",
        prompt: `${CONQUER_CONTEXT}Please find a shop that sells jakoten (Ehime fish cake). Include whether you can eat it freshly fried on the spot, whether it's suited for takeout or as a souvenir, whether it's a popular shop, its opening hours, and parking availability where possible.`,
      },
      {
        label: "🎁 I want a gift that coworkers or family will love!",
        prompt: `${CONQUER_CONTEXT}Please find a good gift for coworkers (something individually wrapped and long-lasting, easy to share at work) and a separate gift idea for family. Include how distinctly Ehime it feels, price range, where to buy it, opening hours, and parking where possible.`,
      },
    ],
  },
  {
    id: "michelin",
    emoji: "⭐",
    title: "Chase Ehime's Michelin Guide",
    subtitle: "Take a peek at Ehime's Michelin-listed restaurants 🍣✨",
    color: "gold",
    questions: [
      {
        label: "⭐ I want to know Ehime's Michelin-starred restaurants!",
        prompt: `${CONQUER_CONTEXT}Please tell me about Ehime's Michelin-starred restaurants. The 2018 edition is the most recently published Ehime-region Michelin guide, so treat star ratings as reflecting that 2018 assessment. Since a restaurant may have closed, moved, changed its name, or changed its business format since 2018, don't assume that being listed in 2018 means it's still operating today — always verify current operating status. Starred restaurants are often nearly impossible to book same-day, so please tell me: whether it's currently operating, whether it's open today, whether a reservation is required, the likelihood of getting a same-day reservation, whether walk-ins are possible, and a realistic way to actually visit. Don't present a hard-to-book restaurant as if it were easy to visit today — if visiting tonight seems unrealistic, please also suggest an easier-to-access alternative in the same style of cuisine. Treat this as more than just a booking search — it's also a fun way to discover what kind of notable restaurants exist in Ehime.`,
      },
      {
        label: "🏆 I want to find a good-value Michelin Bib Gourmand pick!",
        prompt: `${CONQUER_CONTEXT}Please tell me about Ehime's Michelin Bib Gourmand restaurants, focused on great value for money. The 2018 edition is the most recently published Ehime-region Michelin guide, so treat the listing as reflecting that 2018 assessment, and given the chance a restaurant has closed, moved, changed its name, or changed its business format since then, always verify current operating status. Include whether it's currently open, opening hours, budget, whether a reservation is needed, how realistic same-day access is, distance and driving time from IYOCAN, and review rating where possible.`,
      },
      {
        label: "🍊 I want to browse Ehime's Michelin-listed restaurants!",
        prompt: `${CONQUER_CONTEXT}I'd like to broadly explore Ehime's Michelin-listed restaurants (starred and Bib Gourmand included). The 2018 edition is the most recently published Ehime-region Michelin guide, so treat the listing as reflecting that 2018 assessment, and given the chance a restaurant has closed, moved, changed its name, or changed its business format since then, always verify current operating status. Please introduce a few across a range of cuisines and price points, and for each one include whether it's currently open, whether a reservation is needed, how realistic same-day access is, distance from IYOCAN, and review rating where possible.`,
      },
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
    { id: "tiktok", emoji: "🎵", label: "TikTok", url: "https://www.tiktok.com/@murayan800" },
    { id: "youtube", emoji: "▶️", label: "YouTube", url: "https://www.youtube.com/@cadillac600" },
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
   Home page: ChatGPT app promo card
   ============================================================ */
const CHATGPT_PROMO = {
  title: "🤖 Get ChatGPT and unlock the full experience!",
  lead: "This guide works even better together with ChatGPT.<br/>Try it just once, and you'll immediately get why it's so handy.<br/><br/>Tap any question in \"Explore Ehime\" or \"Need Help?\" and ChatGPT opens with your question already filled in — just tap and go.",
  note: "📱 Don't have the app yet? Grab it first, then come back and give it a try ✨",
  ios: { label: "🍎 Get it on iPhone", url: "https://apps.apple.com/app/chatgpt/id6448311069" },
  android: { label: "🤖 Get it on Android", url: "https://play.google.com/store/apps/details?id=com.openai.chatgpt" },
};

/* ============================================================
   6) Screen copy (English)
   ============================================================ */
const LANG_OPTIONS = [
  { code: "ja", flag: "🇯🇵", label: "日本語", href: "../", current: false },
  { code: "en", flag: "🇬🇧", label: "English", href: "./", current: true },
  { code: "zh", flag: "🇨🇳", label: "中文", href: "../zh/", current: false },
  { code: "th", flag: "🇹🇭", label: "ไทย", href: "../th/", current: false },
  { code: "ko", flag: "🇰🇷", label: "한국어", href: "../ko/", current: false },
];

const STRINGS = {
  siteName: "IYOCAN GUIDE",
  topLink: "Top",
  langSwitch: { label: "🌐 Language" },

  home: {
    title: "IYOCAN GUIDE",
    subtitle: "Welcome! What would you like to do?",
    mainBadge: "Start Here",
    qlPromo: "🤖 Unlock Full Power with AI",
    qlWifi: "📶 Connect Wi-Fi",
    houseTitle: "How to Use IYOCAN",
    houseSub: "Everything about your stay",
    ehimeTitle: "Explore Ehime",
    ehimeSub: "Ask AI about anything you're curious about!",
    helpTitle: "Need Help?",
    helpSub: "Hospital, pharmacy, transport & more",
    contactTitle: "Contact the Host",
    contactSub: "If anything's wrong with the stay, just reach out 🍊",
    conquerTitle: "🍊 Conquer Ehime!",
    conquerSub: "Check out Ehime's Michelin-listed restaurants too! From food and nightlife to souvenirs — ask AI anything you want to do in Ehime 🔥",
    conquerBadge: "Featured",
    footerNote: "🍊 Welcome to IYOCAN, a guesthouse in Iyo City, Ehime 🍊",
    addressText: "2293-1 Kamimitani, Iyo City, Ehime 799-3104, Japan",
    businessLine: "IYOCAN -いよ館- (Minpaku Lodging) by NEVER LAND",
    shareText: "🍊 IYOCAN GUIDE — Enjoy your trip to Ehime!",
    shareX: "🐦 Share on X",
    copyUrl: "🔗 Copy URL",
  },

  house: {
    pageTitle: "How to Use IYOCAN",
    heroTitle: "Everything about your stay",
    heroSub: "Tap what you'd like to know",
    photoPlaceholder: "📷 Photo coming soon",
    ownerNote: "✏️ The host will add details and photos here",
    wifiPasswordLabel: "Password",
    wifiCopyLabel: "📋 Copy",
  },

  ehime: {
    pageTitle: "Explore Ehime",
    heroTitle: "What should we do?",
    heroSub: "Tap anything you're curious about.",
    categoryHeading: "Browse by category",
  },

  conquer: {
    pageTitle: "Conquer Ehime!",
    heroTitle: "What do you want to conquer?",
    heroSub: "Pick a category and ask AI anything you're curious about.",
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
    moreContactsLabel: "⚠️ Not sure whether it's an emergency? Contacts to ask first",
    localContactsTitle: "🏢 Local Police & Fire Station",
    localContacts: [
      { emoji: "🚓", label: "Iyo Police Station", tel: "089-982-0110" },
      { emoji: "🚒", label: "Iyo Fire Station", tel: "089-982-0119" },
    ],
    consultTitle: "☎️ Not sure whether to call 110/119?",
    consultLines: [
      { emoji: "🚑", label: "Not sure if you need an ambulance? (24h)", tel: "#7119" },
      { emoji: "👶", label: "Child illness/injury advice (nights & holidays)", tel: "#8000" },
      { emoji: "👮", label: "Non-emergency police consultation", tel: "#9110" },
    ],
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
    copied: "Copied 📋",
    copyFailed: "Couldn't copy",
  },
};
