/* ============================================================
   IYOCAN GUIDE - コンテンツデータ
   ここを編集すれば、画面(app.js)を触らなくても内容を更新できます。
   ============================================================ */

/* トップページのヒーロー画像 */
const HOME_HERO_ICON = "assets/house-icon.png";

/* ChatGPTへ渡す質問文の「共通の前置き」 */
const LOCATION_CONTEXT =
  "愛媛県伊予市上三谷にある民泊『IYOCAN』に宿泊しています。";

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
   1) 🏠 IYOCANの使い方（AIを使わない・宿の正式情報）
   Phase1では「型」だけ用意。実際の文章・写真はオーナーが後から追加。
   ============================================================ */
const FACILITIES = [
  { id: "info", emoji: "ℹ️", title: "施設情報" },
  { id: "wifi", emoji: "📶", title: "Wi-Fi" },
  { id: "key", emoji: "🔑", title: "鍵・チェックイン" },
  { id: "bath", emoji: "🛁", title: "お風呂" },
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

const wifiFacility = FACILITIES.find((f) => f.id === "wifi");
wifiFacility.image = "assets/wifi-card.jpg";
wifiFacility.password = "71521725";
wifiFacility.note =
  "📶 画像のQRコードをスマホのカメラで読み取るだけで、かんたんにWi-Fiに接続できます！";

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
      { label: "🚗 IYOCANから行きやすい温泉", prompt: `${LOCATION_CONTEXT}宿から車でできるだけ近い、行きやすい温泉を教えてください。${TAIL.onsen}` },
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
      { label: "🚗 おすすめドライブコース", prompt: `${LOCATION_CONTEXT}IYOCANを起点にしたおすすめのドライブコースを教えてください。${TAIL.drive}` },
      { label: "🌄 絶景ドライブがしたい", prompt: `${LOCATION_CONTEXT}景色がきれいな絶景ドライブコースを教えてください。${TAIL.drive}` },
      { label: "🌊 海沿いドライブがしたい", prompt: `${LOCATION_CONTEXT}海沿いを走れるドライブコースを教えてください。${TAIL.drive}` },
      { label: "🕐 半日ドライブがしたい", prompt: `${LOCATION_CONTEXT}半日で回れるドライブコースを教えてください。${TAIL.drive}` },
      { label: "☀️ 1日ドライブがしたい", prompt: `${LOCATION_CONTEXT}1日かけて楽しめるドライブコースを教えてください。${TAIL.drive}` },
    ],
  },
];

/* ============================================================
   2.5) 🍊 愛媛を攻め尽くす！（いよ館を起点に、現実的に行ける範囲を深掘り）
   ============================================================ */
const CONQUER_CONTEXT =
  "愛媛県伊予市上三谷2293-1にある民泊「いよ館（IYOCAN）」に滞在しています。車があります。旅行者向けに、現在利用できる愛媛のおすすめを教えてください。";

const CONQUER_CATEGORIES = [
  {
    id: "eat",
    emoji: "🍴",
    title: "食べる",
    subtitle: "地元の美味しいものを探そう",
    color: "orange",
    questions: [
      {
        label: "🐟 愛媛の美味しい魚を食べたい！",
        prompt: `${CONQUER_CONTEXT}いよ館から車で現実的に行ける範囲（伊予市・松前町・松山市・砥部町・東温市など）で、愛媛・瀬戸内らしい魚料理や地魚の刺身・海鮮料理が食べられる、チェーン店ではなく地元で利用されているお店を探してください。現在営業しているか、営業時間、いよ館からの距離、車での所要時間、予算、おすすめメニュー、口コミ評価、口コミ件数、駐車場の有無を分かる範囲で教えてください。`,
      },
      {
        label: "🍣 美味しいお寿司を食べたい！",
        prompt: `${CONQUER_CONTEXT}いよ館から車で現実的に行ける範囲で、美味しいお寿司が食べられるお店を探してください。愛媛らしい魚を使っているか、地元感、寿司店としての評価、価格帯、ランチ・夜どちらの営業か、予約が必要か、当日でも利用できそうかを重視し、高級店だけに偏らず幅広く教えてください。現在営業しているか、営業時間、距離、所要時間、口コミ評価、口コミ件数も分かる範囲で教えてください。`,
      },
      {
        label: "🐟 美味しい刺身を食べたい！",
        prompt: `${CONQUER_CONTEXT}お寿司ではなく、地魚の刺身を気軽に食べられるお店を探しています。居酒屋や海鮮食堂なども候補に含めて、いよ館から車で現実的に行ける範囲で探してください。現在営業しているか、営業時間、距離、所要時間、予算、おすすめメニュー、口コミ評価、口コミ件数、駐車場を分かる範囲で教えてください。`,
      },
      {
        label: "🍜 美味しいラーメン食べたい！",
        prompt: `${CONQUER_CONTEXT}松山・愛媛で地元で人気のラーメン店を探してください。チェーン店よりも地域性のある店を優先し、行列ができるかどうか、営業時間、定休日、駐車場、予算、人気メニューを分かる範囲で教えてください。いよ館からの距離・車での所要時間、現在営業しているかも教えてください。`,
      },
    ],
  },
  {
    id: "popular",
    emoji: "🏆",
    title: "人気を攻める",
    subtitle: "行列・口コミで選ぶ",
    color: "pink",
    questions: [
      {
        label: "🔥 行列ができる人気店に行ってみたい！",
        prompt: `${CONQUER_CONTEXT}愛媛県内、特にいよ館から車で現実的に行きやすい範囲で、「行列ができる」「待ち時間が発生するほど人気」と知られている飲食店・スイーツ店・ご当地グルメ店・土産店などを探してください。単に有名なだけの店ではなく、実際に行列や待ち時間が発生しやすい店を優先してください。可能なら、店名・ジャンル・いよ館からの距離・車での所要時間・営業時間・予算・人気メニュー・口コミ評価・口コミ件数・行列が発生しやすい時間帯・予約可否・現在営業しているかを教えてください。リアルタイムの混雑状況を確認できない場合は、そのことを明記してください。古い情報を現在の状況として断定しないでください。できれば「今から行くならどこが現実的か」も教えてください。`,
      },
      {
        label: "🏆 愛媛で人気のお店ランキングを見たい！",
        prompt: `${CONQUER_CONTEXT}いよ館から現実的に行きやすい範囲を中心に、愛媛で人気のお店ランキングを教えてください。単純な知名度ランキングではなく、口コミ評価・口コミ件数・地元人気・観光客人気・現在営業しているか・いよ館からの行きやすさを総合的に判断してください。ランキングの根拠が曖昧な場合は、「AIによる総合的なおすすめ順位」であることを明示してください。`,
      },
      {
        label: "⭐ 口コミ評価の高いお店を知りたい！",
        prompt: `${CONQUER_CONTEXT}いよ館から現実的に行きやすい範囲で、口コミ評価の高いお店（ジャンルは問いません）を教えてください。評価が5.0でも口コミ件数が極端に少ない店だけを上位にせず、評価と口コミ件数のバランスを考慮してください。現在営業しているか、距離、所要時間も分かる範囲で教えてください。`,
      },
    ],
  },
  {
    id: "night",
    emoji: "🌙",
    title: "夜を楽しむ",
    subtitle: "地元感のある夜遊び",
    color: "blue",
    questions: [
      {
        label: "🍺 地元っぽい居酒屋に行きたい！",
        prompt: `${CONQUER_CONTEXT}チェーン店ではなく、松山・愛媛らしい地元の居酒屋を探してください。地元料理・地魚・じゃこ天・地酒が楽しめるか、雰囲気、予算、営業時間、現在営業しているか、予約可否を分かる範囲で教えてください。お酒を飲む前提のため、車で来た場合はタクシー・運転代行・公共交通など飲酒運転をしないための移動手段も併せて教えてください。`,
      },
      {
        label: "🍸 地元のバーで飲みたい！",
        prompt: `${CONQUER_CONTEXT}初めての旅行者でも入りやすい、地元感のあるバーを探してください。雰囲気、料金、営業時間、松山市中心部へのアクセスを分かる範囲で教えてください。お酒を飲む前提のため、帰りのタクシーや運転代行の使いやすさも教えてください。`,
      },
      {
        label: "🍷 スナックに行ってみたい！",
        prompt: `${CONQUER_CONTEXT}初めての旅行者でも入りやすいスナックを探してください。セット料金・チャージ・ボトル・時間制など、分かる範囲で料金体系を教えてください。料金が不明な場合は推測せず、不明であることを伝えてください。怪しい店や性的サービスを連想させる店は紹介しないでください。お酒を飲む前提のため、帰りの移動手段（タクシー・運転代行）にも触れてください。`,
      },
      {
        label: "🌃 夜景を見に行きたい！",
        prompt: `${CONQUER_CONTEXT}いよ館から車で現実的に行ける範囲で、夜に安全に訪問しやすい夜景スポットを探してください。駐車場の有無、夜間のアクセスしやすさ、営業時間・入場可能時間、いよ館からの距離と所要時間を分かる範囲で教えてください。`,
      },
    ],
  },
  {
    id: "omiyage",
    emoji: "🛍️",
    title: "お土産",
    subtitle: "帰りに買って帰りたい",
    color: "yellow",
    questions: [
      {
        label: "🍊 愛媛のお土産、どこで買う？",
        prompt: `${CONQUER_CONTEXT}愛媛らしくて人気があり、買いやすいお土産が買えるお店を探してください。営業時間、駐車場の有無、いよ館からの距離、帰り道に寄りやすいかどうかを分かる範囲で教えてください。職場向け・家族向けなど用途に応じたおすすめも教えてください。`,
      },
      {
        label: "🐟 じゃこ天を買いたい！",
        prompt: `${CONQUER_CONTEXT}じゃこ天が買えるお店を探してください。揚げたてをその場で食べられるか、持ち帰り・お土産向きか、人気店かどうか、営業時間、駐車場の有無を分かる範囲で教えてください。`,
      },
      {
        label: "🎁 職場や家族に喜ばれるお土産を探したい！",
        prompt: `${CONQUER_CONTEXT}職場で配りやすい（個包装で日持ちする）お土産と、家族向けのお土産をそれぞれ探してください。愛媛らしさ、価格帯、買える場所、営業時間、駐車場を分かる範囲で教えてください。`,
      },
    ],
  },
  {
    id: "michelin",
    emoji: "⭐",
    title: "愛媛のミシュランを攻める",
    subtitle: "愛媛のミシュラン、ちょっと覗いてみよう🍣✨",
    color: "gold",
    questions: [
      {
        label: "⭐ 愛媛のミシュラン星付き店を知りたい！",
        prompt: `${CONQUER_CONTEXT}愛媛県のミシュラン星付き店について教えてください。愛媛版ミシュランは2018年版が現時点で公開されている最新の愛媛版として知られているため、星評価は当時の評価として扱ってください。2018年以降に閉店・移転・店名変更・営業形態の変更が発生している可能性があるため、2018年当時掲載されていたことと現在営業していることを混同せず、必ず現在の営業状況を確認してください。また、星付き店は当日予約がほぼ不可能な場合が多いため、現在営業しているか、今日営業しているか、予約が必要か、当日予約の可能性、予約なしで入れる可能性、現実的な訪問方法を教えてください。予約困難な店を当日利用できる店のように紹介しないでください。もし今夜すぐに利用するのが難しそうな場合は、同じジャンルで予約なしでも利用しやすい代替候補も教えてください。単なる予約検索ではなく、愛媛にどんな名店があるのかを知る楽しみとしても紹介してください。`,
      },
      {
        label: "🏆 コスパのいいミシュラン掲載店を探したい！",
        prompt: `${CONQUER_CONTEXT}愛媛県のミシュランビブグルマン掲載店について、コストパフォーマンスの良さを重視して教えてください。愛媛版ミシュランは2018年版が現時点で公開されている最新の愛媛版として知られているため、掲載情報は当時のものとして扱い、2018年以降の閉店・移転・店名変更・営業形態の変更の可能性を踏まえて、必ず現在の営業状況を確認してください。現在営業しているか、営業時間、予算、予約要否、当日利用できる可能性、いよ館からの距離・車での所要時間、口コミ評価も分かる範囲で教えてください。`,
      },
      {
        label: "🍊 愛媛のミシュラン掲載店から選びたい！",
        prompt: `${CONQUER_CONTEXT}愛媛県のミシュラン掲載店（星付き・ビブグルマンを含む）から、幅広くお店を探したいです。愛媛版ミシュランは2018年版が現時点で公開されている最新の愛媛版として知られているため、掲載情報は当時のものとして扱い、2018年以降の閉店・移転・店名変更・営業形態の変更の可能性を踏まえて、必ず現在の営業状況を確認してください。ジャンルや価格帯に幅を持たせて何軒か紹介し、それぞれ現在営業しているか、予約要否、当日利用できる可能性、いよ館からの距離、口コミ評価を分かる範囲で教えてください。`,
      },
    ],
  },
];

/* ============================================================
   3) 🌞 今日どうする？（条件を選んでAIに相談する特別カテゴリー）
   ============================================================ */
const TODAY_PLAN = {
  emoji: "🌞",
  title: "今日どうする？",
  subtitle: "条件を選ぶだけで、今日1日のプランが決められます！<br/>愛媛県最強のAI旅行プランナー、ぜひ使ってみてね🍊🤖",
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
   4) 🆘 困ったとき（施設を並べるのではなく、住所込みの質問をChatGPTに渡す）
   ============================================================ */
const SOS_CONTEXT =
  "私は現在、愛媛県伊予市上三谷2293-1にある『IYOCAN』に宿泊しています。";

const HELP_ITEMS = [
  {
    id: "hospital",
    emoji: "🏥",
    title: "病院・病気",
    sub: "近くの病院を探したい",
    prompt: `${SOS_CONTEXT}体調が悪く、病院・クリニックを探しています。この住所を起点に、現在診療している、または今から受診できる可能性がある医療機関を探してください。距離、車での所要時間、診療時間、電話番号、診療科などを分かる範囲で教えてください。現在営業・診療中かを確認してください。緊急性が高い場合は119など適切な緊急対応を優先してください。`,
  },
  {
    id: "pharmacy",
    emoji: "💊",
    title: "薬局",
    sub: "近くの薬局を探したい",
    prompt: `${SOS_CONTEXT}薬局を探しています。この住所から近い薬局を、現在営業しているかどうかも確認しながら探してください。距離、車での所要時間、営業時間、電話番号、特徴などを分かる範囲で教えてください。`,
  },
  {
    id: "conveni",
    emoji: "🏪",
    title: "コンビニ",
    sub: "近くのコンビニを探したい",
    prompt: `${SOS_CONTEXT}ここから近いコンビニを探してください。距離、車での所要時間、現在営業しているか、24時間営業かどうかを確認して、近い順に教えてください。`,
  },
  {
    id: "supermarket",
    emoji: "🛒",
    title: "スーパー",
    sub: "近くのスーパーを探したい",
    prompt: `${SOS_CONTEXT}ここから車で行きやすいスーパーを探してください。現在営業しているか、距離、所要時間、営業時間、特徴などを教えてください。`,
  },
  {
    id: "gas",
    emoji: "⛽",
    title: "ガソリンスタンド",
    sub: "近くのガソリンスタンドを探したい",
    prompt: `${SOS_CONTEXT}ここから近いガソリンスタンドを探してください。現在営業しているか、距離、車での所要時間、営業時間、24時間営業かどうか、分かれば価格や特徴も教えてください。`,
  },
  {
    id: "taxi",
    emoji: "🚕",
    title: "タクシー",
    sub: "タクシーを呼びたい・会社を探したい",
    prompt: `${SOS_CONTEXT}ここから利用できるタクシー会社を探してください。近い会社や、この地域で利用しやすいタクシー会社を教えてください。電話番号、営業時間、配車方法など分かる範囲で教えてください。`,
  },
  {
    id: "train",
    emoji: "🚃",
    title: "電車・駅",
    sub: "近くの駅や電車について知りたい",
    prompt: `${SOS_CONTEXT}ここから利用しやすい最寄り駅を教えてください。車での距離・所要時間、駅名、利用できる路線、主要駅へのアクセスなど、旅行者に分かりやすく教えてください。現在の交通情報が必要な場合は最新情報を確認してください。`,
  },
  {
    id: "bus",
    emoji: "🚌",
    title: "バス",
    sub: "近くのバス・バス停について知りたい",
    prompt: `${SOS_CONTEXT}ここから利用できるバスや最寄りのバス停を調べてください。バス停までの距離、利用できる路線、主要な場所への行き方、現在の運行情報などを分かる範囲で教えてください。`,
  },
  {
    id: "food",
    emoji: "🍽️",
    title: "食事",
    sub: "今から行ける近くの飲食店を探したい",
    prompt: `${SOS_CONTEXT}今から食事に行きたいです。この住所を起点に、現在営業していて車で行きやすい飲食店を探してください。距離、所要時間、営業時間、予算、おすすめメニュー、口コミ評価などを分かる範囲で教えてください。`,
  },
  {
    id: "other",
    emoji: "🆘",
    title: "その他",
    sub: "困っていることをChatGPTに相談したい",
    prompt: `${SOS_CONTEXT}今、困っていることがあります。現在地を『IYOCAN』として、私が困っている状況を解決するために必要な情報や、近くで利用できる施設・サービスを教えてください。必要に応じて現在営業中かどうかも確認してください。`,
  },
];

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
    { id: "tiktok", emoji: "🎵", label: "TikTok", url: "https://www.tiktok.com/@murayan800" },
    { id: "youtube", emoji: "▶️", label: "YouTube", url: "https://www.youtube.com/@cadillac600" },
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

const CERTIFICATE = {
  image: "assets/certificate.png",
};

/* ============================================================
   トップページ：ChatGPTアプリ案内カード
   ============================================================ */
const CHATGPT_PROMO = {
  title: "🤖 ChatGPTを入れて、本領発揮！",
  lead: "このGUIDEは、ChatGPTと一緒に使うともっと便利です🍊<br/>1回だけでも試すと便利の意味がすべてわかるよ。<br/><br/>「愛媛を楽しむ」や「困ったとき」の質問をタップすると、質問内容がセットされた状態でChatGPTが開く！タップするのみ。",
  note: "📱 まだChatGPTアプリを入れていない方は、先に入れておいてね。せっかくなのでAIの便利さを体験してみてください✨",
  ios: { label: "🍎 iPhoneで入れる", url: "https://apps.apple.com/app/chatgpt/id6448311069" },
  android: { label: "🤖 Androidで入れる", url: "https://play.google.com/store/apps/details?id=com.openai.chatgpt" },
};

/* ============================================================
   施設情報ポップアップ（ヘッダーの「施設」チップから起動）
   ※ 使い方ページの「施設情報」カードとは別の、独立したミニポップアップ
   ============================================================ */
const FACILITY_INFO = {
  name: "IYOCAN",
  subtitle: "-いよ館-（民泊宿）",
  certLabel: "届出情報　第 M380048635 号",
  addressText: "〒799-3104 愛媛県伊予市上三谷2293-1",
  addressCopy: "愛媛県伊予市上三谷2293-1",
  mapsUrl: "https://maps.app.goo.gl/87zv9unWTfdiuVfo9",
  mapsLabel: "📍 Google Mapsで見る",
  instagramUrl: "https://www.instagram.com/iiyo_can/",
  instagramLabel: "📷 Instagram",
  tel: "090-5044-7799",
  managerLabel: "責任者",
  managerName: "村上 直樹",
  contactLinkLabel: "📞 管理人に連絡する →",
  closeLabel: "閉じる",
};

/* ============================================================
   6) 画面まわりの共通文言（日本語版）
   app.js はこの STRINGS を参照するだけで、日英で完全に共有できます。
   ============================================================ */
const LANG_OPTIONS = [
  { code: "ja", flag: "🇯🇵", label: "日本語", href: "./", current: true },
  { code: "en", flag: "🇬🇧", label: "English", href: "en/", current: false },
  { code: "zh", flag: "🇨🇳", label: "中文", href: "zh/", current: false },
  { code: "th", flag: "🇹🇭", label: "ไทย", href: "th/", current: false },
  { code: "ko", flag: "🇰🇷", label: "한국어", href: "ko/", current: false },
];

const STRINGS = {
  siteName: "いよ館 ガイド",
  topLink: "トップ",
  facilityChip: "ℹ️ 施設",
  langSwitch: { label: "🌐 言語" },

  home: {
    title: "IYOCAN GUIDE",
    subtitle: "愛媛の旅、楽しもう！",
    mainBadge: "メイン",
    qlPromo: "🤖 AIで本領発揮する",
    qlWifi: "📶 Wi-Fiを接続",
    houseTitle: "IYOCANの使い方",
    houseSub: "宿のことはこちら",
    ehimeTitle: "愛媛を楽しむ",
    ehimeSub: "気になることをAIに聞いてみよう！",
    helpTitle: "困ったとき",
    helpSub: "病院・薬局・交通など",
    contactTitle: "管理人に連絡",
    contactSub: "お宿の事で困ったら連絡してね🍊",
    conquerTitle: "🍊 愛媛を攻め尽くす！",
    conquerSub: "愛媛のミシュラン掲載店もチェック！食べる・遊ぶ・夜・お土産まで、愛媛でやりたいことをAIに聞いてみよう🔥",
    conquerBadge: "注目",
    footerNote: "🍊 ようこそ愛媛・伊予市 お宿IYOCANへ 🍊",
    addressText: "〒799-3104 愛媛県伊予市上三谷2293-1",
    businessLine: "IYOCAN -いよ館- (民泊宿) by NEVER LAND",
    shareText: "🍊 IYOCAN GUIDE｜愛媛の旅、楽しもう！",
    shareX: "🐦 Xでシェア",
    copyUrl: "🔗 URLコピー",
  },

  house: {
    pageTitle: "IYOCANの使い方",
    heroTitle: "宿のことはこちら",
    heroSub: "気になる項目をタップしてね",
    photoPlaceholder: "📷 ここに写真を追加してください",
    ownerNote: "✏️ ここにオーナーが説明文・写真・注意点を追加できます",
    wifiPasswordLabel: "パスワード",
    wifiCopyLabel: "📋 コピー",
  },

  ehime: {
    pageTitle: "愛媛を楽しむ",
    heroTitle: "愛媛、何しよう？",
    heroSub: "気になること、聞いてみよう。",
    categoryHeading: "カテゴリーから選ぶ",
  },

  conquer: {
    pageTitle: "愛媛を攻め尽くす！",
    heroTitle: "愛媛、何して攻める？",
    heroSub: "気になるジャンルを選んで、AIに聞いてみよう。",
    categoryHeading: "ジャンルから選ぶ",
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
    heroTitle: "何か困った？",
    heroSub: "ここから一番近い場所や、今すぐ必要な情報をChatGPTに聞いてみよう。",
    emergencyTitle: "🚨 本当に緊急のときは",
    emergencyAmbulance: "救急・消防",
    emergencyPolice: "警察",
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
    companyLinkLabel: "運営会社について",
    companyLinkUrl: "https://search.jreco.net/company",
    certButtonLabel: "民泊届出済証明書を見る",
    certButtonNumber: "届出番号　第 M380048635 号",
    altCertificate: "住宅宿泊事業（民泊）届出済証明書",
  },

  nav: {
    house: "IYOCANの使い方",
    ehime: "愛媛を楽しむ",
    help: "困ったとき",
    contact: "管理人に連絡",
  },

  toast: {
    copied: "コピーしました📋",
    copyFailed: "コピーできませんでした",
  },
};
