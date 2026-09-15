/* ============================================================
   IYOCAN GUIDE - 中文内容
   结构与 ../data.js 完全一致。只需修改这个文件即可更新中文内容，
   无需改动 app.js（JP/EN/ZH 共用）。
   ============================================================ */

/* 附加在每个ChatGPT提问前的共同开头 */
const LOCATION_CONTEXT =
  "我正住在爱媛县伊予市上三谷的民宿『IYOCAN』。";

/* 常用的「结尾句」模板 */
const TAIL = {
  gourmet:
    "请推荐3-5家我从这里开车能到的店。请确认是否正在营业，并尽量提供距离、营业时间、价位、推荐菜品和口碑评价等信息。",
  spot:
    "请推荐3-5个我从这里开车能到的地方，并尽量说明所需时间、营业时间和口碑评价。",
  onsen:
    "请推荐3-5个我从这里开车能到的温泉，并尽量说明价格、营业时间、泉质特色和口碑评价。",
  omiyage:
    "请推荐3-5款伴手礼，并尽量说明可以在哪里买到（商店、休息站、机场等）以及大致价格。",
  drive:
    "请推荐一条好路线，并尽量说明所需时间、途中可以停靠的景点以及需要注意的事项。",
};

/* ============================================================
   1) 🏠 IYOCAN使用指南（不使用AI・房东提供的正式信息）
   ============================================================ */
const FACILITIES = [
  { id: "key", emoji: "🔑", title: "钥匙・入住" },
  { id: "wifi", emoji: "📶", title: "Wi-Fi" },
  { id: "bath", emoji: "🛁", title: "浴室" },
  { id: "shower", emoji: "🚿", title: "淋浴" },
  { id: "aircon", emoji: "❄️", title: "空调" },
  { id: "tv", emoji: "📺", title: "电视" },
  { id: "kitchen", emoji: "🍳", title: "厨房" },
  { id: "laundry", emoji: "🧺", title: "洗衣机" },
  { id: "trash", emoji: "🗑️", title: "垃圾" },
  { id: "parking", emoji: "🚗", title: "停车场" },
  { id: "rules", emoji: "🚭", title: "住宿须知" },
  { id: "checkout", emoji: "🚪", title: "退房" },
].map((f) => ({
  ...f,
  steps: ["步骤① 内容准备中", "步骤② 内容准备中", "步骤③ 内容准备中"],
  note: "",
}));

const wifiFacility = FACILITIES.find((f) => f.id === "wifi");
wifiFacility.image = "../assets/wifi-card.jpg";
wifiFacility.password = "71521725";
wifiFacility.note =
  "📶 只需用手机摄像头扫描图片中的QR码，就能轻松连接Wi-Fi！";

/* ============================================================
   2) 🤖 爱媛玩乐（AI提问卡片集）
   ============================================================ */
const CATEGORIES = [
  {
    id: "gourmet",
    emoji: "🍜",
    title: "美食",
    subtitle: "吃点什么好呢？",
    color: "orange",
    questions: [
      { label: "🏆 人气餐厅排行榜", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到的人气餐厅排行榜。${TAIL.gourmet}` },
      { label: "⭐ 口碑评价高的餐厅？", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、口碑评价很高的餐厅。${TAIL.gourmet}` },
      { label: "🍊 想吃爱媛特色料理！", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、可以吃到爱媛乡土特色料理的餐厅。${TAIL.gourmet}` },
      { label: "🍜 想吃好吃的拉面！", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到的好吃的拉面店。${TAIL.gourmet}` },
      { label: "🐟 想吃新鲜海鲜！", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、可以吃到新鲜海鲜的餐厅。${TAIL.gourmet}` },
      { label: "🥩 想吃烤肉！", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到的好吃的烤肉店。${TAIL.gourmet}` },
      { label: "☕ 想悠闲地去咖啡厅", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、气氛不错的咖啡厅。${TAIL.gourmet}` },
      { label: "💰 有没有性价比高的店？", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、性价比高的餐厅。${TAIL.gourmet}` },
      { label: "🌙 晚上也能去的店？", prompt: `${LOCATION_CONTEXT}请告诉我今晚从这里开车能到、还在营业的餐厅。${TAIL.gourmet}` },
    ],
  },
  {
    id: "onsen",
    emoji: "♨️",
    title: "温泉",
    subtitle: "好好放松泡个汤",
    color: "pink",
    questions: [
      { label: "🏆 人气温泉TOP5", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到的人气温泉TOP5。${TAIL.onsen}` },
      { label: "⭐ 口碑评价高的温泉？", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、口碑评价很高的温泉。${TAIL.onsen}` },
      { label: "🚗 从IYOCAN方便去的温泉", prompt: `${LOCATION_CONTEXT}请告诉我从住宿地开车尽量近、方便前往的温泉。${TAIL.onsen}` },
      { label: "🌅 想去风景好的温泉", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、风景优美的温泉。${TAIL.onsen}` },
      { label: "👨‍👩‍👧 适合带小孩的温泉", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、适合带小孩一起泡的温泉。${TAIL.onsen}` },
    ],
  },
  {
    id: "sightseeing",
    emoji: "🗺️",
    title: "观光",
    subtitle: "去哪里逛逛？",
    color: "blue",
    questions: [
      { label: "🏆 人气观光地TOP5", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到的人气观光地TOP5。${TAIL.spot}` },
      { label: "⭐ 口碑评价高的观光地", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、口碑评价很高的观光地。${TAIL.spot}` },
      { label: "🔰 第一次来爱媛必去这里！", prompt: `${LOCATION_CONTEXT}这是我第一次来爱媛。请告诉我一定要先去的经典观光地。${TAIL.spot}` },
      { label: "🚗 从伊予市方便去的观光地", prompt: `${LOCATION_CONTEXT}请告诉我从伊予市开车尽量近、方便前往的观光地。${TAIL.spot}` },
      { label: "🕐 半天就能玩的地方", prompt: `${LOCATION_CONTEXT}请告诉我半天左右就能玩的观光地。${TAIL.spot}` },
      { label: "☔ 下雨天也能玩的地方", prompt: `${LOCATION_CONTEXT}请告诉我即使下雨天也能玩、以室内为主的观光地。${TAIL.spot}` },
    ],
  },
  {
    id: "nature",
    emoji: "🌊",
    title: "户外・自然",
    subtitle: "到外面玩个够",
    color: "blue",
    questions: [
      { label: "🌊 想去海边玩", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到的漂亮海边或海滨景点。${TAIL.spot}` },
      { label: "🏞️ 想去河边玩水", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、可以玩水的河边景点。${TAIL.spot}` },
      { label: "🌳 想去公园", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到的推荐公园。${TAIL.spot}` },
      { label: "🚣 想体验户外活动", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、可以体验的户外活动（水上运动、骑行等）。${TAIL.spot}` },
      { label: "👨‍👩‍👧 适合带小孩玩的地方", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、适合带小孩玩的户外景点。${TAIL.spot}` },
      { label: "🚗 想一边开车一边享受风景", prompt: `${LOCATION_CONTEXT}请告诉我开车途中就能享受的自然景点。${TAIL.drive}` },
      { label: "🌄 想看绝美风景！", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、可以看到绝美风景的景点。${TAIL.spot}` },
      { label: "📸 适合拍照的地方", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、适合拍照打卡的景点。${TAIL.spot}` },
    ],
  },
  {
    id: "omiyage",
    emoji: "🛍️",
    title: "伴手礼",
    subtitle: "该带点什么回去？",
    color: "yellow",
    questions: [
      { label: "🏆 人气伴手礼排行榜", prompt: `${LOCATION_CONTEXT}请告诉我回程时想买的、爱媛人气伴手礼排行榜。${TAIL.omiyage}` },
      { label: "🍊 说到爱媛就是这个！", prompt: `${LOCATION_CONTEXT}请告诉我说到爱媛就会想到的经典伴手礼。${TAIL.omiyage}` },
      { label: "🍊 蜜柑相关的伴手礼", prompt: `${LOCATION_CONTEXT}请告诉我用蜜柑做的点心、饮料等蜜柑系伴手礼。${TAIL.omiyage}` },
      { label: "🎁 送人会开心的伴手礼", prompt: `${LOCATION_CONTEXT}请告诉我送给同事或朋友会开心的爱媛伴手礼。${TAIL.omiyage}` },
      { label: "🛒 在超市也能买到的爱媛伴手礼", prompt: `${LOCATION_CONTEXT}请告诉我在当地超市就能轻松买到的爱媛伴手礼。${TAIL.omiyage}` },
      { label: "✈️ 在机场・车站能买到的伴手礼", prompt: `${LOCATION_CONTEXT}请告诉我在松山机场或松山站附近能买到的爱媛伴手礼。${TAIL.omiyage}` },
    ],
  },
  {
    id: "ranking",
    emoji: "🏆",
    title: "人气・口碑",
    subtitle: "大家都选哪里？",
    color: "yellow",
    questions: [
      { label: "🏆 爱媛全県的人气景点", prompt: `${LOCATION_CONTEXT}请告诉我爱媛县内现在人气很高的观光景点。${TAIL.spot}` },
      { label: "⭐ 口碑评价高的景点", prompt: `${LOCATION_CONTEXT}请告诉我Google地图等平台上口碑评价很高的景点（观光或美食都可以）。${TAIL.spot}` },
      { label: "📍 当地人喜欢去的地方", prompt: `${LOCATION_CONTEXT}请告诉我比起游客、更受当地人喜爱的景点或店铺。${TAIL.spot}` },
      { label: "💰 按性价比来选的话？", prompt: `${LOCATION_CONTEXT}如果按性价比来选，请告诉我推荐哪里。${TAIL.spot}` },
    ],
  },
  {
    id: "rainy",
    emoji: "🌧️",
    title: "雨天",
    subtitle: "下雨也没问题！",
    color: "blue",
    questions: [
      { label: "☔ 雨天也能玩的观光地", prompt: `${LOCATION_CONTEXT}今天下雨。请告诉我即使下雨也能玩的观光地。${TAIL.spot}` },
      { label: "👨‍👩‍👧 雨天适合带小孩去的地方", prompt: `${LOCATION_CONTEXT}今天下雨。请告诉我适合带小孩一起玩的室内景点。${TAIL.spot}` },
      { label: "💑 雨天适合约会的地方", prompt: `${LOCATION_CONTEXT}今天下雨。请告诉我雨天也适合约会的景点。${TAIL.spot}` },
      { label: "🏢 可以在室内悠闲玩的地方", prompt: `${LOCATION_CONTEXT}今天下雨。请告诉我可以在室内悠闲享受的地方。${TAIL.spot}` },
    ],
  },
  {
    id: "kids",
    emoji: "👨‍👩‍👧",
    title: "亲子出游",
    subtitle: "全家一起开心玩",
    color: "pink",
    questions: [
      { label: "😊 小孩会喜欢的地方", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、小孩会喜欢的景点。${TAIL.spot}` },
      { label: "🍽️ 适合带小孩的餐厅", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、适合带小孩一起用餐的餐厅。${TAIL.gourmet}` },
      { label: "🆓 可以免费玩的地方", prompt: `${LOCATION_CONTEXT}请告诉我从这里开车能到、可以免费和小孩一起玩的地方。${TAIL.spot}` },
      { label: "☔ 雨天适合带小孩去的地方", prompt: `${LOCATION_CONTEXT}今天下雨。请告诉我适合带小孩一起玩的室内景点。${TAIL.spot}` },
    ],
  },
  {
    id: "drive",
    emoji: "🚗",
    title: "兜风",
    subtitle: "开着车享受好风景",
    color: "orange",
    questions: [
      { label: "🚗 推荐的兜风路线", prompt: `${LOCATION_CONTEXT}请告诉我以IYOCAN为起点、推荐的兜风路线。${TAIL.drive}` },
      { label: "🌄 想来一场绝景兜风", prompt: `${LOCATION_CONTEXT}请告诉我风景优美的绝景兜风路线。${TAIL.drive}` },
      { label: "🌊 想沿着海边兜风", prompt: `${LOCATION_CONTEXT}请告诉我可以沿着海边行驶的兜风路线。${TAIL.drive}` },
      { label: "🕐 想来半天的兜风", prompt: `${LOCATION_CONTEXT}请告诉我半天就能走完的兜风路线。${TAIL.drive}` },
      { label: "☀️ 想来一整天的兜风", prompt: `${LOCATION_CONTEXT}请告诉我可以玩上一整天的兜风路线。${TAIL.drive}` },
    ],
  },
];

/* ============================================================
   3) 🌞 今天怎么安排？（选择条件后一次性问AI）
   ============================================================ */
const TODAY_PLAN = {
  emoji: "🌞",
  title: "今天怎么安排？",
  subtitle: "只需选择条件，就能为您规划今天一天的行程！<br/>爱媛最强AI旅行规划师，一定要试试看🍊🤖",
  fields: [
    {
      id: "time",
      label: "⏰ 现在是什么时段？",
      options: ["🌅 早上", "☀️ 中午", "🌆 傍晚", "🌙 晚上"],
    },
    {
      id: "weather",
      label: "🌈 今天天气怎么样？",
      options: ["☀️ 晴天", "☁️ 多云", "🌧️ 雨天"],
    },
    {
      id: "with",
      label: "👥 和谁一起？",
      options: ["👤 一个人", "💑 情侣", "👨‍👩‍👧 一家人", "👯 朋友们"],
    },
    {
      id: "car",
      label: "🚗 有车吗？",
      options: ["🚗 有", "🚶 没有"],
    },
    {
      id: "hours",
      label: "🕐 有多少时间？",
      options: ["1〜2小时", "半天", "一整天"],
    },
    {
      id: "food",
      label: "🍽️ 想吃点什么？",
      options: ["🍜 日式料理", "🍖 想吃饱一点", "☕ 简单吃点", "🍊 爱媛特色美食", "🤷 都可以"],
    },
  ],
};

function buildTodayPrompt(answers) {
  return (
    `${LOCATION_CONTEXT}现在是${answers.time}，天气是${answers.weather}。` +
    `一起同行的是${answers.with}，车的情况是${answers.car}，可以用的时间是${answers.hours}。` +
    `想吃的感觉是${answers.food}。` +
    `请根据这些条件，具体推荐一个在爱媛度过愉快时光的方案，包括观光和美食。`
  );
}

/* ============================================================
   4) 🆘 遇到困扰（不列举固定设施，而是把带地址的问题交给ChatGPT）
   ============================================================ */
const SOS_CONTEXT =
  "我目前正住在爱媛县伊予市上三谷2293-1的民宿『IYOCAN』。";

const HELP_ITEMS = [
  {
    id: "hospital",
    emoji: "🏥",
    title: "医院・生病",
    sub: "想找附近的医院",
    prompt: `${SOS_CONTEXT}我身体不舒服，想找医院或诊所。请以这个地址为起点，帮我找现在有在诊疗、或者现在可以去看诊的医疗机构。请尽量告诉我距离、开车所需时间、诊疗时间、电话号码、诊疗科室等信息，并确认是否正在营业诊疗。如果情况紧急，请优先建议拨打119等紧急联络方式。`,
  },
  {
    id: "pharmacy",
    emoji: "💊",
    title: "药店",
    sub: "想找附近的药店",
    prompt: `${SOS_CONTEXT}我想找药店。请帮我找离这个地址近的药店，并确认是否正在营业。请尽量告诉我距离、开车所需时间、营业时间、电话号码及其他特点等信息。`,
  },
  {
    id: "conveni",
    emoji: "🏪",
    title: "便利店",
    sub: "想找附近的便利店",
    prompt: `${SOS_CONTEXT}请帮我找离这里近的便利店。请确认距离、开车所需时间、是否正在营业、是否24小时营业，并按距离由近到远告诉我。`,
  },
  {
    id: "supermarket",
    emoji: "🛒",
    title: "超市",
    sub: "想找附近的超市",
    prompt: `${SOS_CONTEXT}请帮我找从这里开车方便到达的超市。请告诉我是否正在营业、距离、所需时间、营业时间及其他特点。`,
  },
  {
    id: "gas",
    emoji: "⛽",
    title: "加油站",
    sub: "想找附近的加油站",
    prompt: `${SOS_CONTEXT}请帮我找离这里近的加油站。请告诉我是否正在营业、距离、开车所需时间、营业时间、是否24小时营业，如果知道的话也请告诉我价格或特点。`,
  },
  {
    id: "taxi",
    emoji: "🚕",
    title: "出租车",
    sub: "想叫出租车・找出租车公司",
    prompt: `${SOS_CONTEXT}请帮我找可以从这里叫车的出租车公司。请告诉我附近或这个地区方便使用的出租车公司，包括电话号码、营业时间、叫车方式等信息。`,
  },
  {
    id: "train",
    emoji: "🚃",
    title: "电车・车站",
    sub: "想了解附近的车站和电车",
    prompt: `${SOS_CONTEXT}请告诉我从这里方便使用的最近车站。请用简单易懂的方式告诉旅行者开车的距离和所需时间、车站名称、可以使用的路线，以及前往主要车站的方式。如果需要最新的运行信息，请确认最新情况。`,
  },
  {
    id: "bus",
    emoji: "🚌",
    title: "巴士",
    sub: "想了解附近的巴士和站点",
    prompt: `${SOS_CONTEXT}请帮我查从这里可以使用的巴士和最近的巴士站。请尽量告诉我到巴士站的距离、可以使用的路线、前往主要地点的方法，以及目前的运行信息。`,
  },
  {
    id: "food",
    emoji: "🍽️",
    title: "用餐",
    sub: "想找现在能去的附近餐厅",
    prompt: `${SOS_CONTEXT}我现在想去吃饭。请以这个地址为起点，帮我找现在正在营业、开车方便到达的餐厅。请尽量告诉我距离、所需时间、营业时间、预算、推荐菜品和口碑评价等信息。`,
  },
  {
    id: "other",
    emoji: "🆘",
    title: "其他",
    sub: "有困扰想和ChatGPT商量",
    prompt: `${SOS_CONTEXT}我现在遇到了一些困扰。请把我现在的位置当作『IYOCAN』，告诉我为了解决我遇到的问题所需要的信息，或者附近可以利用的设施・服务。如有需要，也请确认是否正在营业。`,
  },
];

/* ============================================================
   5) 📞 联系管理员
   联系方式与 ../data.js 一致，不新增未确认过的信息。
   ============================================================ */
const MANAGER = {
  photo: "../assets/manager.png",
  message: "遇到任何困扰，随时联系我哦🍊",
  name: "村上直树（Murakami Naoki）",
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
  title: "一起查看",
  description: "文件收发箱",
  note:
    "📱 没有用LINE的朋友<br/>无需下载App，用浏览器就能发送照片、文件和消息。（该网站本身为日文页面）",
  image: "../assets/issho-card.jpg",
};

const CERTIFICATE = {
  image: "../assets/certificate.png",
};

/* ============================================================
   首页：ChatGPT App 推荐卡片
   ============================================================ */
const CHATGPT_PROMO = {
  title: "🤖 装上ChatGPT，体验全部功能！",
  lead: "搭配ChatGPT使用，这份指南会更好用🍊<br/>点击「爱媛玩乐」或「遇到困扰」里的问题，ChatGPT会直接带着问题内容打开。",
  note: "📱 还没安装ChatGPT App的朋友，请先安装一下。这是体验AI便利性的好机会✨",
  ios: { label: "🍎 iPhone安装", url: "https://apps.apple.com/app/chatgpt/id6448311069" },
  android: { label: "🤖 Android安装", url: "https://play.google.com/store/apps/details?id=com.openai.chatgpt" },
};

/* ============================================================
   语言切换选项
   ============================================================ */
const LANG_OPTIONS = [
  { code: "ja", flag: "🇯🇵", label: "日本語", href: "../", current: false },
  { code: "en", flag: "🇬🇧", label: "English", href: "../en/", current: false },
  { code: "zh", flag: "🇨🇳", label: "中文", href: "./", current: true },
];

/* ============================================================
   6) 界面文案（中文）
   ============================================================ */
const STRINGS = {
  siteName: "IYOCAN GUIDE",
  topLink: "首页",
  langSwitch: { label: "🌐 语言" },

  home: {
    title: "IYOCAN GUIDE",
    subtitle: "欢迎光临！今天想做什么？",
    mainBadge: "从这里开始",
    qlPromo: "🤖 用AI体验全部功能",
    qlWifi: "📶 连接Wi-Fi",
    houseTitle: "IYOCAN使用指南",
    houseSub: "住宿相关信息",
    ehimeTitle: "爱媛玩乐",
    ehimeSub: "有什么好奇的，问问AI吧！",
    helpTitle: "遇到困扰",
    helpSub: "医院・药店・交通等",
    contactTitle: "联系管理员",
    contactSub: "联系村上直树",
    footerNote: "献给扫描二维码打开这个页面的你 🍊",
  },

  house: {
    pageTitle: "IYOCAN使用指南",
    heroTitle: "住宿相关信息",
    heroSub: "点击想了解的项目",
    photoPlaceholder: "📷 照片准备中",
    ownerNote: "✏️ 房东会在这里补充说明文字和照片",
    wifiPasswordLabel: "密码",
    wifiCopyLabel: "📋 复制",
  },

  ehime: {
    pageTitle: "爱媛玩乐",
    heroTitle: "爱媛，想做什么呢？",
    heroSub: "有什么好奇的，问问看吧。",
    categoryHeading: "按分类选择",
  },

  chips: {
    copyTitle: "复制问题",
    footerNote: "点击即可打开ChatGPT。也可以用📋复制问题。",
  },

  today: {
    ctaLabel: "💬 用这些条件问问AI",
  },

  help: {
    pageTitle: "遇到困扰",
    heroTitle: "遇到什么困扰了吗？",
    heroSub: "问问ChatGPT，马上找到最近的地方或需要的信息。",
    emergencyTitle: "🚨 真正紧急的时候",
    emergencyAmbulance: "急救・消防",
    emergencyPolice: "警察",
  },

  contact: {
    pageTitle: "联系管理员",
    namePlaceholder: "✏️ 可以在这里添加管理员姓名",
    telLabel: (tel) => `📞 打电话给 ${tel}`,
    telPlaceholder: "✏️ 可以在这里添加电话号码",
    lineIdText: (id) => `LINE ID：<b>${id}</b>`,
    lineIdPlaceholder: "✏️ 可以在这里添加LINE ID",
    lineSectionTitle: "💬 用LINE联系",
    lineCtaLabel: "💬 用LINE联系",
    lineHint: "📱 用其他手机或电脑扫码请点这里",
    docSectionTitle: "📎 文件・资料收发",
    altManager: "管理员",
    altLineQr: "LINE二维码",
    companyLinkLabel: "关于运营公司",
    companyLinkUrl: "https://search.jreco.net/company",
    certButtonLabel: "查看住宅出租备案证明",
    certButtonNumber: "备案编号　第 M380048635 号",
    altCertificate: "住宅住宿事业（民宿）备案证明",
  },

  nav: {
    house: "IYOCAN",
    ehime: "爱媛玩乐",
    help: "遇到困扰",
    contact: "联系管理员",
  },

  toast: {
    copied: "已复制📋",
    copyFailed: "复制失败",
  },
};
