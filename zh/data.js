/* ============================================================
   IYOCAN GUIDE - 中文内容
   结构与 ../data.js 完全一致。只需修改这个文件即可更新中文内容，
   无需改动 app.js（JP/EN/ZH 共用）。
   ============================================================ */

/* 首页顶部的图标 */
const HOME_HERO_ICON = "../assets/house-icon.png";

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
   2.5) 🍊 玩转爱媛！（以IYOCAN为起点，深入挖掘）
   ============================================================ */
const CONQUER_CONTEXT =
  "我住在爱媛县伊予市上三谷2293-1的民宿「IYOCAN」，有车。请以旅行者的角度，推荐我现在实际可以利用的爱媛好去处。";

const CONQUER_CATEGORIES = [
  {
    id: "eat",
    emoji: "🍴",
    title: "吃",
    subtitle: "找点当地的美食",
    color: "orange",
    questions: [
      {
        label: "🐟 想吃爱媛好吃的鱼！",
        prompt: `${CONQUER_CONTEXT}请在从IYOCAN开车能现实到达的范围内（伊予市、松前町、松山市、砥部町、东温市等），寻找能吃到爱媛・濑户内风味鱼料理、生鱼片、海鲜料理的店，优先选择当地人常去的店而不是连锁店。请尽量告诉我是否正在营业、营业时间、离IYOCAN的距离和车程、预算、推荐菜品、口碑评价和评价数量，以及是否有停车场。`,
      },
      {
        label: "🍣 想吃好吃的寿司！",
        prompt: `${CONQUER_CONTEXT}请在从IYOCAN开车能现实到达的范围内，寻找好吃的寿司店。请综合考虑是否使用爱媛特色鱼类、当地感、作为寿司店的评价、价位、是午餐还是晚餐营业、是否需要预约、是否能当天光顾，不要只推荐高级店。请尽量告诉我是否正在营业、营业时间、距离、车程、口碑评价和评价数量。`,
      },
      {
        label: "🐟 想吃好吃的生鱼片！",
        prompt: `${CONQUER_CONTEXT}我不是想吃寿司，而是想轻松地吃到当地鱼的生鱼片，居酒屋、海鲜食堂也可以。请在从IYOCAN开车能现实到达的范围内寻找。请尽量告诉我是否正在营业、营业时间、距离、车程、预算、推荐菜品、口碑评价和评价数量，以及停车场情况。`,
      },
      {
        label: "🍜 想吃好吃的拉面！",
        prompt: `${CONQUER_CONTEXT}请寻找松山・爱媛当地人气的拉面店，优先选择有地方特色的店而不是连锁店。请尽量告诉我是否会排队、营业时间、休息日、停车场、预算、人气菜品，以及离IYOCAN的距离・车程、是否正在营业。`,
      },
    ],
  },
  {
    id: "popular",
    emoji: "🏆",
    title: "攻略人气",
    subtitle: "靠排队和口碑来选",
    color: "pink",
    questions: [
      {
        label: "🔥 想去要排队的人气店！",
        prompt: `${CONQUER_CONTEXT}请在爱媛县内，特别是从IYOCAN开车能现实到达的范围内，寻找以「会排队」「经常需要等待」而闻名的餐厅、甜品店、当地美食店、伴手礼店等，不要只是有名的店，而要优先选择实际容易排队等待的店。如果可以，请告诉我店名、类型、离IYOCAN的距离和车程、营业时间、预算、人气菜品、口碑评价和评价数量、容易排队的时间段、是否可以预约、是否正在营业。如果无法确认实时的拥挤情况，请明确说明这一点，不要把旧信息当作当前状况来断定。如果可以，也请告诉我「现在去的话哪家比较现实」。`,
      },
      {
        label: "🏆 想看爱媛人气店铺排行榜！",
        prompt: `${CONQUER_CONTEXT}请以从IYOCAN能现实到达的范围为中心，告诉我爱媛的人气店铺排行榜。不要只是单纯的知名度排名，请综合考虑口碑评价、评价数量、当地人气、游客人气、是否正在营业、从IYOCAN出发是否方便到达。如果排名依据不够明确，请说明这是「AI综合推荐的排序」。`,
      },
      {
        label: "⭐ 想知道口碑评价高的店！",
        prompt: `${CONQUER_CONTEXT}请在从IYOCAN能现实到达的范围内，告诉我口碑评价高的店（不限类型）。请不要只把评分5.0但评价数量极少的店排在最前面，要平衡考虑评分和评价数量。请尽量告诉我是否正在营业、距离、车程。`,
      },
    ],
  },
  {
    id: "night",
    emoji: "🌙",
    title: "享受夜晚",
    subtitle: "有当地感的夜生活",
    color: "blue",
    questions: [
      {
        label: "🍺 想去有当地感的居酒屋！",
        prompt: `${CONQUER_CONTEXT}请寻找有松山・爱媛当地特色的居酒屋，不要连锁店。请综合考虑是否能享用当地料理、当地鱼、じゃこ天（鱼饼）、当地酒，以及氛围、预算、营业时间、是否正在营业、是否可以预约。由于涉及饮酒，如果开车前来，请一并告诉我出租车、代driving服务或公共交通等避免酒驾的交通方式。`,
      },
      {
        label: "🍸 想在当地的酒吧喝一杯！",
        prompt: `${CONQUER_CONTEXT}请寻找即使是第一次来的游客也容易进去的、有当地感的酒吧。请尽量告诉我氛围、价格、营业时间、到松山市中心的交通方式。由于涉及饮酒，也请告诉我回程时出租车或代driving服务是否方便使用。`,
      },
      {
        label: "🍷 想去一次Snack（日式小酒馆）！",
        prompt: `${CONQUER_CONTEXT}请寻找即使是第一次来的游客也容易进去的Snack（日式小酒馆）。如果知道的话，请说明收费方式，比如套餐费用、开瓶费、洋酒瓶、按时间收费等。如果价格不明确，请如实说明不清楚，不要随意猜测。请不要推荐让人联想到色情服务的可疑店铺。由于涉及饮酒，也请提及回程的出租车或代driving选项。`,
      },
      {
        label: "🌃 想去看夜景！",
        prompt: `${CONQUER_CONTEXT}请在从IYOCAN开车能现实到达的范围内，寻找晚上可以安全前往的夜景景点。请尽量告诉我是否有停车场、夜间是否方便到达、营业时间・可入场时间，以及离IYOCAN的距离和所需时间。`,
      },
    ],
  },
  {
    id: "omiyage",
    emoji: "🛍️",
    title: "伴手礼",
    subtitle: "带点东西回去",
    color: "yellow",
    questions: [
      {
        label: "🍊 爱媛的伴手礼，去哪里买？",
        prompt: `${CONQUER_CONTEXT}请寻找能买到有爱媛特色、人气高、方便购买的伴手礼的店。请尽量告诉我营业时间、是否有停车场、离IYOCAN的距离、是否方便在回程路上顺便去。也请根据用途（送同事、送家人等）给出建议。`,
      },
      {
        label: "🐟 想买じゃこ天（鱼饼）！",
        prompt: `${CONQUER_CONTEXT}请寻找能买到じゃこ天（鱼饼）的店。请尽量告诉我是否能当场吃到刚炸好的、是否适合打包带走或作为伴手礼、是否是人气店、营业时间，以及是否有停车场。`,
      },
      {
        label: "🎁 想找送同事或家人会开心的伴手礼！",
        prompt: `${CONQUER_CONTEXT}请分别寻找适合在职场分发（独立包装、保质期长）的伴手礼，以及适合送给家人的伴手礼。请尽量告诉我爱媛特色、价位、购买地点、营业时间，以及停车场情况。`,
      },
    ],
  },
  {
    id: "michelin",
    emoji: "⭐",
    title: "攻略爱媛米其林",
    subtitle: "来看看爱媛的米其林餐厅吧🍣✨",
    color: "gold",
    questions: [
      {
        label: "⭐ 想知道爱媛的米其林星级餐厅！",
        prompt: `${CONQUER_CONTEXT}请告诉我爱媛的米其林星级餐厅。爱媛地区的米其林指南目前已知最新的是2018年版，因此星级评价请按当时的评定来看待。由于2018年以后可能发生了关店、搬迁、改名、营业形式变更等情况，请不要把「2018年当时有上榜」和「现在仍在营业」混为一谈，务必确认目前的营业状况。另外，星级餐厅往往几乎无法当天预约，所以请告诉我：是否正在营业、今天是否营业、是否需要预约、当天预约的可能性、是否可以不预约进店、以及现实可行的到访方式。请不要把难以预约的店介绍得好像今天就能轻松去一样——如果今晚去不太现实，也请提供同类型中不用预约也容易利用的替代选择。请不要只当作预约搜索来处理，也可以当作了解爱媛有哪些名店的一种乐趣来介绍。`,
      },
      {
        label: "🏆 想找性价比高的米其林必比登餐厅！",
        prompt: `${CONQUER_CONTEXT}请重点介绍性价比高的爱媛米其林必比登（Bib Gourmand）餐厅。爱媛地区的米其林指南目前已知最新的是2018年版，因此上榜信息请按当时的情况看待，并考虑到2018年以后可能已经关店、搬迁、改名或改变营业形式，务必确认目前的营业状况。请尽量告诉我是否正在营业、营业时间、预算、是否需要预约、当天利用的可能性、离IYOCAN的距离・车程，以及口碑评价。`,
      },
      {
        label: "🍊 想从爱媛的米其林上榜餐厅中挑选！",
        prompt: `${CONQUER_CONTEXT}我想从爱媛的米其林上榜餐厅（包括星级和必比登）中广泛挑选。爱媛地区的米其林指南目前已知最新的是2018年版，因此上榜信息请按当时的情况看待，并考虑到2018年以后可能已经关店、搬迁、改名或改变营业形式，务必确认目前的营业状况。请介绍几家不同类型、不同价位的餐厅，并尽量告诉我每家是否正在营业、是否需要预约、当天利用的可能性、离IYOCAN的距离，以及口碑评价。`,
      },
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
  lead: "搭配ChatGPT使用，这份指南会更好用🍊<br/>只要试一次，你就会立刻明白有多方便。<br/><br/>点击「爱媛玩乐」或「遇到困扰」里的问题，ChatGPT会直接带着问题内容打开！只需一点即可。",
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
  { code: "th", flag: "🇹🇭", label: "ไทย", href: "../th/", current: false },
  { code: "ko", flag: "🇰🇷", label: "한국어", href: "../ko/", current: false },
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
    contactSub: "住宿有任何问题都可以联系我们🍊",
    conquerTitle: "🍊 玩转爱媛！",
    conquerSub: "还能查看爱媛的米其林餐厅！吃喝玩乐到伴手礼，想做的事都能问AI🔥",
    conquerBadge: "精选",
    footerNote: "🍊 欢迎来到爱媛县伊予市的民宿IYOCAN 🍊",
    addressText: "日本爱媛县伊予市上三谷2293-1（邮编799-3104）",
    businessLine: "IYOCAN -いよ館- (民宿) by NEVER LAND",
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

  conquer: {
    pageTitle: "玩转爱媛！",
    heroTitle: "爱媛，想怎么玩？",
    heroSub: "选一个感兴趣的类别，问问AI吧。",
    categoryHeading: "按类别选择",
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
