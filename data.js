/* ============================================================
   いよ館 GUIDE - コンテンツデータ
   ここを編集すれば、画面(app.js)を触らなくても内容を更新できます。
   ============================================================ */

/* ChatGPTへ渡す質問文の「共通の前置き」 */
const LOCATION_CONTEXT =
  "愛媛県伊予市上三谷にある民泊『いよ館』に宿泊しています。";

/* よく使う「締めの一文」テンプレート */
const TAIL = {
  gourmet:
    "現在営業しているか確認のうえ、車で行ける範囲で3〜5件、距離・営業時間・予算・おすすめメニュー・口コミ評価も分かる範囲で教えてください。",
  spot:
    "車で行ける範囲で3〜5件、所要時間・営業時間・口コミ評価も分かる範囲で教えてください。",
  onsen:
    "車で行ける範囲で3〜5件、料金・営業時間・泉質や特徴・口コミ評価も分かる範囲で教えてください。",
  omiyage:
    "3〜5個、購入できる場所（お店や道の駅、空港など）・値段の目安も分かる範囲で教えてください。",
  drive:
    "おすすめのルートと、所要時間・立ち寄りスポット・注意点も分かる範囲で教えてください。",
};

/* ============================================================
   1) 🏠 いよ館の使い方（AIを使わない・宿の正式情報）
   Phase1では「型」だけ用意。実際の文章・写真はオーナーが後から追加。
   ============================================================ */
const FACILITIES = [
  { id: "key", emoji: "🔑", title: "鍵・チェックイン" },
  { id: "wifi", emoji: "📶", title: "Wi-Fi" },
  { id: "bath", emoji: "🛁", title: "お風呂" },
  { id: "shower", emoji: "🚿", title: "シャワー" },
  { id: "aircon", emoji: "❄️", title: "エアコン" },
  { id: "tv", emoji: "📺", title: "テレビ" },
  { id: "kitchen", emoji: "🍳", title: "キッチン" },
  { id: "laundry", emoji: "🧺", title: "洗濯機" },
  { id: "trash", emoji: "🗑️", title: "ゴミ" },
  { id: "parking", emoji: "🚗", title: "駐車場" },
  { id: "rules", emoji: "🚭", title: "ハウスルール" },
  { id: "checkout", emoji: "🚪", title: "チェックアウト" },
].map((f) => ({
  ...f,
  // Phase1: 手順のひな形（オーナーが後で書き換える前提のプレースホルダー）
  steps: ["ここに手順①を入力", "ここに手順②を入力", "ここに手順③を入力"],
  note: "",
}));

/* ============================================================
   2) 🤖 愛媛を楽しむ（AIへの質問チップ集）
   ============================================================ */
const CATEGORIES = [
  {
    id: "gourmet",
    emoji: "🍜",
    title: "グルメ",
    subtitle: "ごはん、どうする？",
    color: "orange",
    questions: [
      { label: "🏆 人気のお店ランキング", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、人気のお店ランキングを教えてください。${TAIL.gourmet}` },
      { label: "⭐ 口コミ評価が高い店は？", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、口コミ評価が高い飲食店を教えてください。${TAIL.gourmet}` },
      { label: "🍊 愛媛らしい料理が食べたい！", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、愛媛らしい郷土料理・名物料理が食べられるお店を教えてください。${TAIL.gourmet}` },
      { label: "🍜 美味しいラーメン食べたい！", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、美味しいラーメン店を教えてください。${TAIL.gourmet}` },
      { label: "🐟 海鮮が食べたい！", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、新鮮な海鮮が食べられるお店を教えてください。${TAIL.gourmet}` },
      { label: "🥩 焼肉が食べたい！", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、美味しい焼肉店を教えてください。${TAIL.gourmet}` },
      { label: "☕ ゆっくりカフェに行きたい", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、雰囲気のいいカフェを教えてください。${TAIL.gourmet}` },
      { label: "💰 コスパのいい店は？", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、コストパフォーマンスがいい飲食店を教えてください。${TAIL.gourmet}` },
      { label: "🌙 夜でも行ける店ある？", prompt: `${LOCATION_CONTEXT}今夜、車で行ける範囲で営業している飲食店を教えてください。${TAIL.gourmet}` },
    ],
  },
  {
    id: "onsen",
    emoji: "♨️",
    title: "温泉",
    subtitle: "ゆっくり温まろう",
    color: "pink",
    questions: [
      { label: "🏆 人気の温泉TOP5", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、人気の温泉TOP5を教えてください。${TAIL.onsen}` },
      { label: "⭐ 口コミ評価が高い温泉は？", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、口コミ評価が高い温泉を教えてください。${TAIL.onsen}` },
      { label: "🚗 いよ館から行きやすい温泉", prompt: `${LOCATION_CONTEXT}宿から車でできるだけ近い、行きやすい温泉を教えてください。${TAIL.onsen}` },
      { label: "🌅 景色がいい温泉に入りたい", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、景色がいい温泉を教えてください。${TAIL.onsen}` },
      { label: "👨‍👩‍👧 家族で入りやすい温泉", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、小さい子どもも一緒に家族で入りやすい温泉を教えてください。${TAIL.onsen}` },
    ],
  },
  {
    id: "sightseeing",
    emoji: "🗺️",
    title: "観光",
    subtitle: "どこ行こう？",
    color: "blue",
    questions: [
      { label: "🏆 人気の観光地TOP5", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、人気の観光地TOP5を教えてください。${TAIL.spot}` },
      { label: "⭐ 口コミ評価が高い観光地", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、口コミ評価が高い観光地を教えてください。${TAIL.spot}` },
      { label: "🔰 初めての愛媛ならここ！", prompt: `${LOCATION_CONTEXT}愛媛に来るのが初めてです。まず行くべき定番の観光地を教えてください。${TAIL.spot}` },
      { label: "🚗 伊予市から行きやすい観光地", prompt: `${LOCATION_CONTEXT}伊予市から車でできるだけ近い、行きやすい観光地を教えてください。${TAIL.spot}` },
      { label: "🕐 半日で楽しめる場所", prompt: `${LOCATION_CONTEXT}半日程度で楽しめる観光地を教えてください。${TAIL.spot}` },
      { label: "☔ 雨の日でも楽しめる場所", prompt: `${LOCATION_CONTEXT}雨の日でも楽しめる屋内中心の観光地を教えてください。${TAIL.spot}` },
    ],
  },
  {
    id: "nature",
    emoji: "🌊",
    title: "遊ぶ・自然",
    subtitle: "外で楽しもう",
    color: "blue",
    questions: [
      { label: "🌊 海で遊びたい", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、きれいな海や海辺のスポットを教えてください。${TAIL.spot}` },
      { label: "🏞️ 川で遊びたい", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、川遊びができるスポットを教えてください。${TAIL.spot}` },
      { label: "🌳 公園に行きたい", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、おすすめの公園を教えてください。${TAIL.spot}` },
      { label: "🚣 アクティビティを楽しみたい", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、体験できるアクティビティ（マリンスポーツ、サイクリングなど）を教えてください。${TAIL.spot}` },
      { label: "👨‍👩‍👧 子どもが楽しめる場所", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、子どもが楽しめる屋外スポットを教えてください。${TAIL.spot}` },
      { label: "🚗 ドライブしながら楽しみたい", prompt: `${LOCATION_CONTEXT}ドライブしながら楽しめる自然スポットを教えてください。${TAIL.drive}` },
      { label: "🌄 絶景が見たい！", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、絶景が見られるスポットを教えてください。${TAIL.spot}` },
      { label: "📸 写真映えする場所", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、写真映えするフォトスポットを教えてください。${TAIL.spot}` },
    ],
  },
  {
    id: "omiyage",
    emoji: "🛍️",
    title: "お土産",
    subtitle: "何を買って帰ろう？",
    color: "yellow",
    questions: [
      { label: "🏆 人気のお土産ランキング", prompt: `${LOCATION_CONTEXT}帰りに買って帰りたい、愛媛の人気お土産ランキングを教えてください。${TAIL.omiyage}` },
      { label: "🍊 愛媛といえばこれ！", prompt: `${LOCATION_CONTEXT}愛媛といえばこれ、という定番のお土産を教えてください。${TAIL.omiyage}` },
      { label: "🍊 みかん系のお土産", prompt: `${LOCATION_CONTEXT}みかんを使ったお菓子やドリンクなど、みかん系のお土産を教えてください。${TAIL.omiyage}` },
      { label: "🎁 喜ばれるお土産", prompt: `${LOCATION_CONTEXT}職場や友人に渡して喜ばれる愛媛のお土産を教えてください。${TAIL.omiyage}` },
      { label: "🛒 スーパーでも買える愛媛土産", prompt: `${LOCATION_CONTEXT}地元のスーパーでも手軽に買える愛媛土産を教えてください。${TAIL.omiyage}` },
      { label: "✈️ 空港・駅で買えるお土産", prompt: `${LOCATION_CONTEXT}松山空港や松山駅周辺で買える愛媛土産を教えてください。${TAIL.omiyage}` },
    ],
  },
  {
    id: "ranking",
    emoji: "🏆",
    title: "人気・口コミ",
    subtitle: "みんなが選ぶのは？",
    color: "yellow",
    questions: [
      { label: "🏆 愛媛全体の人気スポット", prompt: `${LOCATION_CONTEXT}愛媛県全体で今人気の観光スポットを教えてください。${TAIL.spot}` },
      { label: "⭐ 口コミ評価が高いスポット", prompt: `${LOCATION_CONTEXT}Googleマップなどの口コミ評価が高いスポット（観光・グルメ問わず）を教えてください。${TAIL.spot}` },
      { label: "📍 地元で人気の場所", prompt: `${LOCATION_CONTEXT}観光客より地元の人に人気のスポットやお店を教えてください。${TAIL.spot}` },
      { label: "💰 コスパで選ぶならここ", prompt: `${LOCATION_CONTEXT}コストパフォーマンスの良さで選ぶなら、どこがおすすめか教えてください。${TAIL.spot}` },
    ],
  },
  {
    id: "rainy",
    emoji: "🌧️",
    title: "雨の日",
    subtitle: "雨でも大丈夫！",
    color: "blue",
    questions: [
      { label: "☔ 雨でも楽しめる観光", prompt: `${LOCATION_CONTEXT}今日は雨です。雨でも楽しめる観光スポットを教えてください。${TAIL.spot}` },
      { label: "👨‍👩‍👧 雨の日の子連れスポット", prompt: `${LOCATION_CONTEXT}今日は雨です。子連れでも楽しめる屋内スポットを教えてください。${TAIL.spot}` },
      { label: "💑 雨の日のデートスポット", prompt: `${LOCATION_CONTEXT}今日は雨です。雨の日でも楽しめるデートスポットを教えてください。${TAIL.spot}` },
      { label: "🏢 屋内で楽しめる場所", prompt: `${LOCATION_CONTEXT}今日は雨です。屋内でゆっくり楽しめる場所を教えてください。${TAIL.spot}` },
    ],
  },
  {
    id: "kids",
    emoji: "👨‍👩‍👧",
    title: "子連れ",
    subtitle: "家族みんなで",
    color: "pink",
    questions: [
      { label: "😊 子どもが喜ぶ場所", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、子どもが喜ぶスポットを教えてください。${TAIL.spot}` },
      { label: "🍽️ 子連れで入りやすい店", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、子連れでも入りやすい飲食店を教えてください。${TAIL.gourmet}` },
      { label: "🆓 無料で遊べる場所", prompt: `${LOCATION_CONTEXT}今から車で行ける範囲で、無料で子どもと遊べる場所を教えてください。${TAIL.spot}` },
      { label: "☔ 雨の日の子連れスポット", prompt: `${LOCATION_CONTEXT}今日は雨です。子連れでも楽しめる屋内スポットを教えてください。${TAIL.spot}` },
    ],
  },
  {
    id: "drive",
    emoji: "🚗",
    title: "ドライブ",
    subtitle: "気持ちいい道を走ろう",
    color: "orange",
    questions: [
      { label: "🚗 おすすめドライブコース", prompt: `${LOCATION_CONTEXT}いよ館を起点にしたおすすめのドライブコースを教えてください。${TAIL.drive}` },
      { label: "🌄 絶景ドライブがしたい", prompt: `${LOCATION_CONTEXT}景色がきれいな絶景ドライブコースを教えてください。${TAIL.drive}` },
      { label: "🌊 海沿いドライブがしたい", prompt: `${LOCATION_CONTEXT}海沿いを走れるドライブコースを教えてください。${TAIL.drive}` },
      { label: "🕐 半日ドライブがしたい", prompt: `${LOCATION_CONTEXT}半日で回れるドライブコースを教えてください。${TAIL.drive}` },
      { label: "☀️ 1日ドライブがしたい", prompt: `${LOCATION_CONTEXT}1日かけて楽しめるドライブコースを教えてください。${TAIL.drive}` },
    ],
  },
];

/* ============================================================
   3) 🌞 今日どうする？（条件を選んでAIに相談する特別カテゴリー）
   ============================================================ */
const TODAY_PLAN = {
  emoji: "🌞",
  title: "今日どうする？",
  subtitle: "条件を選ぶだけで、プランを相談できます",
  fields: [
    {
      id: "time",
      label: "⏰ 今の時間帯は？",
      options: ["🌅 朝", "☀️ 昼", "🌆 夕方", "🌙 夜"],
    },
    {
      id: "weather",
      label: "🌈 今日の天気は？",
      options: ["☀️ 晴れ", "☁️ 曇り", "🌧️ 雨"],
    },
    {
      id: "with",
      label: "👥 誰と一緒？",
      options: ["👤 ひとり", "💑 カップル", "👨‍👩‍👧 家族", "👯 友達グループ"],
    },
    {
      id: "car",
      label: "🚗 車はある？",
      options: ["🚗 あり", "🚶 なし"],
    },
    {
      id: "hours",
      label: "🕐 使える時間は？",
      options: ["1〜2時間", "半日", "1日"],
    },
    {
      id: "food",
      label: "🍽️ 食べたい気分は？",
      options: ["🍜 和食", "🍖 がっつり", "☕ 軽め", "🍊 愛媛らしいもの", "🤷 なんでも"],
    },
  ],
};

function buildTodayPrompt(answers) {
  return (
    `${LOCATION_CONTEXT}今は${answers.time}で、天気は${answers.weather}です。` +
    `一緒にいるのは${answers.with}、車は${answers.car}、使える時間は${answers.hours}です。` +
    `食べたい気分は${answers.food}です。` +
    `この条件で楽しめる、愛媛でのおすすめの過ごし方・観光・グルメプランを具体的に提案してください。`
  );
}

/* ============================================================
   4) 🆘 困ったとき（AIに依存しない・すぐ使える情報）
   ============================================================ */
const HELP_ITEMS = [
  { id: "hospital", emoji: "🏥", title: "病院", mapQuery: "伊予市 上三谷 病院" },
  { id: "pharmacy", emoji: "💊", title: "薬局", mapQuery: "伊予市 上三谷 薬局" },
  { id: "supermarket", emoji: "🛒", title: "スーパー", mapQuery: "伊予市 上三谷 スーパー" },
  { id: "conveni", emoji: "🏪", title: "コンビニ", mapQuery: "伊予市 上三谷 コンビニ" },
  { id: "gas", emoji: "⛽", title: "ガソリンスタンド", mapQuery: "伊予市 上三谷 ガソリンスタンド" },
  { id: "taxi", emoji: "🚕", title: "タクシー", mapQuery: "伊予市 タクシー" },
  { id: "train", emoji: "🚃", title: "電車", mapQuery: "伊予市 駅" },
  { id: "bus", emoji: "🚌", title: "バス", mapQuery: "伊予市 バス停" },
  { id: "emergency", emoji: "📞", title: "緊急時", mapQuery: "" },
].map((h) => ({
  ...h,
  tel: "",
  address: "",
  hours: "",
  note: h.id === "emergency" ? "救急 119 ／ 警察 110" : "",
}));

/* ============================================================
   5) 📞 管理人に連絡
   ============================================================ */
const MANAGER = {
  photo: "assets/manager.png",
  message: "困った時は、いつでも連絡してね🍊",
  name: "村上 直樹（むらかみ なおき）",
  tel: "090-5044-7799",
  lineId: "murakaminaoki",
  lineUrl: "https://line.me/ti/p/Fu0w0Dlruk",
  lineQr: "assets/line-qr.jpg",
  sns: [
    { id: "x", emoji: "𝕏", label: "@cadillac600", url: "https://x.com/cadillac600" },
    { id: "instagram", emoji: "📷", label: "Instagram", url: "https://www.instagram.com/cadillac600/?hl=ja" },
  ],
};

const ISSHO_CARD = {
  url: "https://issho.jreco.net/",
  title: "いっしょに見る",
  description: "書類・ファイルやりとりBOX",
  note:
    "📱 LINEを使っていない方へ<br/>アプリ不要。ブラウザだけで写真・書類・メッセージを送れます。",
  image: "assets/issho-card.jpg",
};

/* ============================================================
   6) 画面まわりの共通文言（日本語版）
   app.js はこの STRINGS を参照するだけで、日英で完全に共有できます。
   ============================================================ */
const STRINGS = {
  siteName: "いよ館 GUIDE",
  langSwitch: { label: "🇬🇧 English", href: "en/" },

  home: {
    title: "いよ館 GUIDE",
    subtitle: "愛媛の旅、楽しもう！",
    mainBadge: "メイン",
    houseTitle: "いよ館の使い方",
    houseSub: "宿のことはこちら",
    ehimeTitle: "愛媛を楽しむ",
    ehimeSub: "気になることをAIに聞いてみよう！",
    helpTitle: "困ったとき",
    helpSub: "病院・薬局・交通など",
    contactTitle: "管理人に連絡",
    contactSub: "村上直樹に連絡してみる",
    footerNote: "QRコードからこのページを開いたあなたへ 🍊",
  },

  house: {
    pageTitle: "いよ館の使い方",
    heroTitle: "宿のことはこちら",
    heroSub: "気になる項目をタップしてね",
    photoPlaceholder: "📷 ここに写真を追加してください",
    ownerNote: "✏️ ここにオーナーが説明文・写真・注意点を追加できます",
  },

  ehime: {
    pageTitle: "愛媛を楽しむ",
    heroTitle: "愛媛、何しよう？",
    heroSub: "気になること、聞いてみよう。",
    categoryHeading: "カテゴリーから選ぶ",
  },

  chips: {
    copyTitle: "質問をコピー",
    footerNote: "タップすると ChatGPT が開きます。📋でコピーもできます。",
  },

  today: {
    ctaLabel: "💬 この条件でAIに相談する",
  },

  help: {
    pageTitle: "困ったとき",
    heroTitle: "困ったときはこちら",
    heroSub: "タップすると詳しく開きます",
    ownerPlaceholder: "✏️ 住所・電話番号・営業時間はオーナーがここに追加できます",
    mapLabel: "📍 地図で見る",
    aiLabel: "🤖 AIに聞く",
    aiPrompt: (title) =>
      `${LOCATION_CONTEXT}今から一番近い${title}を教えてください。距離・営業時間も分かる範囲で教えてください。`,
  },

  contact: {
    pageTitle: "管理人に連絡",
    namePlaceholder: "✏️ 管理人の名前をここに追加できます",
    telLabel: (tel) => `📞 ${tel} に電話する`,
    telPlaceholder: "✏️ ここに電話番号を追加できます",
    lineIdText: (id) => `LINE ID：<b>${id}</b>`,
    lineIdPlaceholder: "✏️ LINE IDをここに追加できます",
    lineSectionTitle: "💬 LINEで連絡する",
    lineCtaLabel: "💬 LINEで連絡する",
    lineHint: "📱 別のスマホやPCから読み取る場合はこちら",
    docSectionTitle: "📎 書類・データのやり取り",
    altManager: "管理人",
    altLineQr: "LINE QRコード",
  },

  nav: {
    house: "いよ館の使い方",
    ehime: "愛媛を楽しむ",
    help: "困ったとき",
    contact: "管理人に連絡",
  },

  toast: {
    copied: "質問をコピーしました📋",
    copyFailed: "コピーできませんでした",
  },
};
