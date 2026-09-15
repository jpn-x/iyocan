/* ============================================================
   IYOCAN GUIDE - 한국어 콘텐츠
   ../data.js와 구조가 완전히 동일합니다. 이 파일만 수정하면
   app.js(JP/EN/ZH/TH/KO 공용)를 건드리지 않고 한국어 내용을
   업데이트할 수 있습니다.
   ============================================================ */

const HOME_HERO_ICON = "../assets/house-icon.png";
const SITE_ICON = "../assets/icon-32.png";

const LOCATION_CONTEXT =
  "저는 일본 에히메현 이요시 카미미타니에 있는 게스트하우스 'IYOCAN'에 머물고 있습니다. ";

const TAIL = {
  gourmet:
    "여기서 차로 갈 수 있는 곳 중 3~5곳을 추천해 주세요. 지금 영업 중인지 확인해 주시고, 가능하면 거리, 영업시간, 가격대, 추천 메뉴, 리뷰 평점도 알려주세요.",
  spot:
    "여기서 차로 갈 수 있는 곳 중 3~5곳을 추천해 주세요. 가능하면 이동 시간, 영업시간, 리뷰 평점도 알려주세요.",
  onsen:
    "여기서 차로 갈 수 있는 곳 중 3~5곳을 추천해 주세요. 가능하면 요금, 영업시간, 온천 특징, 리뷰 평점도 알려주세요.",
  omiyage:
    "선물 3~5가지를 추천해 주세요. 어디서 살 수 있는지(가게, 휴게소, 공항 등)와 대략적인 가격도 알려주세요.",
  drive:
    "좋은 드라이브 코스를 추천해 주세요. 소요 시간, 중간에 들를 만한 곳, 주의할 점도 알려주세요.",
};

/* ============================================================
   1) 🏠 IYOCAN 이용 방법 (AI를 사용하지 않는, 호스트가 제공한 공식 정보)
   ============================================================ */
const FACILITIES = [
  { id: "key", emoji: "🔑", title: "열쇠・체크인" },
  { id: "wifi", emoji: "📶", title: "Wi-Fi" },
  { id: "bath", emoji: "🛁", title: "욕실" },
  { id: "shower", emoji: "🚿", title: "샤워실" },
  { id: "aircon", emoji: "❄️", title: "에어컨" },
  { id: "tv", emoji: "📺", title: "TV" },
  { id: "kitchen", emoji: "🍳", title: "주방" },
  { id: "laundry", emoji: "🧺", title: "세탁기" },
  { id: "trash", emoji: "🗑️", title: "쓰레기" },
  { id: "parking", emoji: "🚗", title: "주차장" },
  { id: "rules", emoji: "🚭", title: "이용 규칙" },
  { id: "checkout", emoji: "🚪", title: "체크아웃" },
].map((f) => ({
  ...f,
  steps: ["단계① 준비 중", "단계② 준비 중", "단계③ 준비 중"],
  note: "",
}));

const wifiFacility = FACILITIES.find((f) => f.id === "wifi");
wifiFacility.image = "../assets/wifi-card.jpg";
wifiFacility.password = "71521725";
wifiFacility.note =
  "📶 사진 속 QR코드를 휴대폰 카메라로 스캔하기만 하면 간단하게 Wi-Fi에 연결할 수 있어요!";

/* ============================================================
   2) 🤖 에히메 즐기기 (AI 질문 카드 모음)
   ============================================================ */
const CATEGORIES = [
  {
    id: "gourmet",
    emoji: "🍜",
    title: "맛집",
    subtitle: "뭐 먹을까?",
    color: "orange",
    questions: [
      { label: "🏆 인기 맛집 랭킹", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는 인기 맛집 랭킹을 알려주세요. ${TAIL.gourmet}` },
      { label: "⭐ 리뷰 평점이 높은 맛집은?", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 리뷰 평점이 높은 맛집을 알려주세요. ${TAIL.gourmet}` },
      { label: "🍊 에히메다운 요리를 먹고 싶어요!", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 에히메 지역 향토 요리를 먹을 수 있는 맛집을 알려주세요. ${TAIL.gourmet}` },
      { label: "🍜 맛있는 라멘을 먹고 싶어요!", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는 맛있는 라멘집을 알려주세요. ${TAIL.gourmet}` },
      { label: "🐟 신선한 해산물을 먹고 싶어요!", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 신선한 해산물을 먹을 수 있는 맛집을 알려주세요. ${TAIL.gourmet}` },
      { label: "🥩 야키니쿠를 먹고 싶어요!", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는 맛있는 야키니쿠집을 알려주세요. ${TAIL.gourmet}` },
      { label: "☕ 여유롭게 카페에 가고 싶어요", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 분위기 좋은 카페를 알려주세요. ${TAIL.gourmet}` },
      { label: "💰 가성비 좋은 가게는?", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 가성비 좋은 맛집을 알려주세요. ${TAIL.gourmet}` },
      { label: "🌙 밤에도 갈 수 있는 가게 있나요?", prompt: `${LOCATION_CONTEXT}오늘 밤, 여기서 차로 갈 수 있고 영업 중인 맛집을 알려주세요. ${TAIL.gourmet}` },
    ],
  },
  {
    id: "onsen",
    emoji: "♨️",
    title: "온천",
    subtitle: "느긋하게 몸을 녹여요",
    color: "pink",
    questions: [
      { label: "🏆 인기 온천 TOP5", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는 인기 온천 TOP5를 알려주세요. ${TAIL.onsen}` },
      { label: "⭐ 리뷰 평점이 높은 온천은?", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 리뷰 평점이 높은 온천을 알려주세요. ${TAIL.onsen}` },
      { label: "🚗 IYOCAN에서 가기 편한 온천", prompt: `${LOCATION_CONTEXT}숙소에서 차로 되도록 가까운, 가기 편한 온천을 알려주세요. ${TAIL.onsen}` },
      { label: "🌅 전망 좋은 온천에 가고 싶어요", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 전망이 좋은 온천을 알려주세요. ${TAIL.onsen}` },
      { label: "👨‍👩‍👧 아이와 함께 가기 좋은 온천", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 어린 아이와 함께 가기 좋은 온천을 알려주세요. ${TAIL.onsen}` },
    ],
  },
  {
    id: "sightseeing",
    emoji: "🗺️",
    title: "관광",
    subtitle: "어디 갈까?",
    color: "blue",
    questions: [
      { label: "🏆 인기 관광지 TOP5", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는 인기 관광지 TOP5를 알려주세요. ${TAIL.spot}` },
      { label: "⭐ 리뷰 평점이 높은 관광지", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 리뷰 평점이 높은 관광지를 알려주세요. ${TAIL.spot}` },
      { label: "🔰 에히메가 처음이라면 여기!", prompt: `${LOCATION_CONTEXT}에히메에 온 것이 처음입니다. 먼저 가봐야 할 대표적인 관광지를 알려주세요. ${TAIL.spot}` },
      { label: "🚗 이요시에서 가기 편한 관광지", prompt: `${LOCATION_CONTEXT}이요시에서 차로 되도록 가까운, 가기 편한 관광지를 알려주세요. ${TAIL.spot}` },
      { label: "🕐 반나절에 즐길 수 있는 곳", prompt: `${LOCATION_CONTEXT}반나절 정도로 즐길 수 있는 관광지를 알려주세요. ${TAIL.spot}` },
      { label: "☔ 비 오는 날에도 즐길 수 있는 곳", prompt: `${LOCATION_CONTEXT}비가 와도 즐길 수 있는, 실내 중심의 관광지를 알려주세요. ${TAIL.spot}` },
    ],
  },
  {
    id: "nature",
    emoji: "🌊",
    title: "야외・자연",
    subtitle: "밖에서 신나게 놀아요",
    color: "blue",
    questions: [
      { label: "🌊 바다에서 놀고 싶어요", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 아름다운 바다나 해변 명소를 알려주세요. ${TAIL.spot}` },
      { label: "🏞️ 강에서 물놀이하고 싶어요", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 물놀이할 수 있는 강을 알려주세요. ${TAIL.spot}` },
      { label: "🌳 공원에 가고 싶어요", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는 추천 공원을 알려주세요. ${TAIL.spot}` },
      { label: "🚣 액티비티를 즐기고 싶어요", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 체험 가능한 액티비티(수상 스포츠, 자전거 등)를 알려주세요. ${TAIL.spot}` },
      { label: "👨‍👩‍👧 아이가 즐길 수 있는 야외 명소", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 아이가 즐길 수 있는 야외 명소를 알려주세요. ${TAIL.spot}` },
      { label: "🚗 드라이브하며 즐기고 싶어요", prompt: `${LOCATION_CONTEXT}드라이브하면서 즐길 수 있는 자연 명소를 알려주세요. ${TAIL.drive}` },
      { label: "🌄 멋진 절경을 보고 싶어요!", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 절경을 볼 수 있는 명소를 알려주세요. ${TAIL.spot}` },
      { label: "📸 사진이 예쁘게 나오는 곳", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 사진 찍기 좋은 포토 스팟을 알려주세요. ${TAIL.spot}` },
    ],
  },
  {
    id: "omiyage",
    emoji: "🛍️",
    title: "기념품",
    subtitle: "뭘 사서 돌아갈까?",
    color: "yellow",
    questions: [
      { label: "🏆 인기 기념품 랭킹", prompt: `${LOCATION_CONTEXT}돌아갈 때 사고 싶은, 에히메 인기 기념품 랭킹을 알려주세요. ${TAIL.omiyage}` },
      { label: "🍊 에히메라면 역시 이거!", prompt: `${LOCATION_CONTEXT}에히메라고 하면 떠오르는 대표적인 기념품을 알려주세요. ${TAIL.omiyage}` },
      { label: "🍊 미칸(귤) 관련 기념품", prompt: `${LOCATION_CONTEXT}미칸(에히메 귤)을 사용한 과자나 음료 등 미칸 관련 기념품을 알려주세요. ${TAIL.omiyage}` },
      { label: "🎁 선물하면 좋아할 기념품", prompt: `${LOCATION_CONTEXT}직장 동료나 친구에게 선물하면 좋아할 에히메 기념품을 알려주세요. ${TAIL.omiyage}` },
      { label: "🛒 슈퍼마켓에서도 살 수 있는 기념품", prompt: `${LOCATION_CONTEXT}현지 슈퍼마켓에서 쉽게 살 수 있는 에히메 기념품을 알려주세요. ${TAIL.omiyage}` },
      { label: "✈️ 공항・기차역에서 살 수 있는 기념품", prompt: `${LOCATION_CONTEXT}마쓰야마 공항이나 마쓰야마역 주변에서 살 수 있는 에히메 기념품을 알려주세요. ${TAIL.omiyage}` },
    ],
  },
  {
    id: "ranking",
    emoji: "🏆",
    title: "인기・리뷰",
    subtitle: "다들 어디로 갈까?",
    color: "yellow",
    questions: [
      { label: "🏆 에히메 전체의 인기 명소", prompt: `${LOCATION_CONTEXT}지금 에히메현 전체에서 인기 있는 관광 명소를 알려주세요. ${TAIL.spot}` },
      { label: "⭐ 리뷰 평점이 높은 명소", prompt: `${LOCATION_CONTEXT}구글맵 등에서 리뷰 평점이 높은 명소(관광이든 맛집이든 상관없이)를 알려주세요. ${TAIL.spot}` },
      { label: "📍 현지인들이 좋아하는 곳", prompt: `${LOCATION_CONTEXT}관광객보다 현지인들에게 인기 있는 명소나 가게를 알려주세요. ${TAIL.spot}` },
      { label: "💰 가성비로 고른다면?", prompt: `${LOCATION_CONTEXT}가성비를 기준으로 고른다면 어디가 좋을지 알려주세요. ${TAIL.spot}` },
    ],
  },
  {
    id: "rainy",
    emoji: "🌧️",
    title: "비 오는 날",
    subtitle: "비가 와도 괜찮아요!",
    color: "blue",
    questions: [
      { label: "☔ 비 오는 날에도 즐길 수 있는 관광지", prompt: `${LOCATION_CONTEXT}오늘은 비가 옵니다. 비가 와도 즐길 수 있는 관광지를 알려주세요. ${TAIL.spot}` },
      { label: "👨‍👩‍👧 비 오는 날 아이와 갈 만한 곳", prompt: `${LOCATION_CONTEXT}오늘은 비가 옵니다. 아이와 함께 즐길 수 있는 실내 명소를 알려주세요. ${TAIL.spot}` },
      { label: "💑 비 오는 날 데이트 스팟", prompt: `${LOCATION_CONTEXT}오늘은 비가 옵니다. 비 오는 날에도 즐길 수 있는 데이트 스팟을 알려주세요. ${TAIL.spot}` },
      { label: "🏢 실내에서 느긋하게 즐길 수 있는 곳", prompt: `${LOCATION_CONTEXT}오늘은 비가 옵니다. 실내에서 느긋하게 즐길 수 있는 곳을 알려주세요. ${TAIL.spot}` },
    ],
  },
  {
    id: "kids",
    emoji: "👨‍👩‍👧",
    title: "아이와 함께",
    subtitle: "가족 모두 즐겁게",
    color: "pink",
    questions: [
      { label: "😊 아이가 좋아할 만한 곳", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 아이가 좋아할 만한 명소를 알려주세요. ${TAIL.spot}` },
      { label: "🍽️ 아이와 함께 가기 편한 맛집", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 아이와 함께 가기 편한 맛집을 알려주세요. ${TAIL.gourmet}` },
      { label: "🆓 무료로 놀 수 있는 곳", prompt: `${LOCATION_CONTEXT}여기서 차로 갈 수 있는, 아이와 무료로 놀 수 있는 곳을 알려주세요. ${TAIL.spot}` },
      { label: "☔ 비 오는 날 아이와 갈 만한 곳", prompt: `${LOCATION_CONTEXT}오늘은 비가 옵니다. 아이와 함께 즐길 수 있는 실내 명소를 알려주세요. ${TAIL.spot}` },
    ],
  },
  {
    id: "drive",
    emoji: "🚗",
    title: "드라이브",
    subtitle: "기분 좋은 길을 달려요",
    color: "orange",
    questions: [
      { label: "🚗 추천 드라이브 코스", prompt: `${LOCATION_CONTEXT}IYOCAN을 출발점으로 한 추천 드라이브 코스를 알려주세요. ${TAIL.drive}` },
      { label: "🌄 절경 드라이브를 하고 싶어요", prompt: `${LOCATION_CONTEXT}경치가 아름다운 절경 드라이브 코스를 알려주세요. ${TAIL.drive}` },
      { label: "🌊 해안 드라이브를 하고 싶어요", prompt: `${LOCATION_CONTEXT}해안을 따라 달릴 수 있는 드라이브 코스를 알려주세요. ${TAIL.drive}` },
      { label: "🕐 반나절 드라이브를 하고 싶어요", prompt: `${LOCATION_CONTEXT}반나절 만에 돌 수 있는 드라이브 코스를 알려주세요. ${TAIL.drive}` },
      { label: "☀️ 하루 종일 드라이브를 하고 싶어요", prompt: `${LOCATION_CONTEXT}하루 종일 즐길 수 있는 드라이브 코스를 알려주세요. ${TAIL.drive}` },
    ],
  },
];

/* ============================================================
   2.5) 🍊 에히메 완전정복! (IYOCAN을 중심으로 더 깊이 파고들기)
   ============================================================ */
const CONQUER_CONTEXT =
  "저는 일본 에히메현 이요시 카미미타니 2293-1에 있는 게스트하우스 'IYOCAN'에 머물고 있습니다. 차가 있습니다. 여행자 입장에서 지금 실제로 이용할 수 있는 에히메의 추천 정보를 알려주세요. ";

const CONQUER_CATEGORIES = [
  {
    id: "eat",
    emoji: "🍴",
    title: "맛집",
    subtitle: "근처에서 맛있는 것 찾기",
    color: "orange",
    questions: [
      {
        label: "🐟 에히메의 맛있는 생선을 먹고 싶어요!",
        prompt: `${CONQUER_CONTEXT}IYOCAN에서 차로 현실적으로 갈 수 있는 범위(이요시, 마쓰마에, 마쓰야마, 도베, 도온 등)에서 에히메・세토나이카이 스타일의 생선 요리나 지역 생선 사시미, 해산물 요리를 먹을 수 있는, 체인점이 아닌 현지에서 이용되는 가게를 찾아주세요. 지금 영업 중인지, 영업시간, IYOCAN에서의 거리와 차로 가는 시간, 예산, 추천 메뉴, 리뷰 평점과 리뷰 수, 주차장 유무를 가능한 범위에서 알려주세요.`,
      },
      {
        label: "🍣 맛있는 스시를 먹고 싶어요!",
        prompt: `${CONQUER_CONTEXT}IYOCAN에서 차로 현실적으로 갈 수 있는 범위에서 맛있는 스시집을 찾아주세요. 에히메다운 생선을 쓰는지, 현지감, 스시집으로서의 평가, 가격대, 점심・저녁 중 어느 시간에 영업하는지, 예약이 필요한지, 당일에도 이용할 수 있을지를 중시하고, 고급점에만 편중되지 않게 알려주세요. 지금 영업 중인지, 영업시간, 거리, 소요 시간, 리뷰 평점/리뷰 수도 가능한 범위에서 알려주세요.`,
      },
      {
        label: "🐟 맛있는 사시미를 먹고 싶어요!",
        prompt: `${CONQUER_CONTEXT}스시가 아니라 지역 생선의 사시미를 가볍게 먹고 싶습니다. 이자카야나 해산물 식당도 후보에 넣어서, IYOCAN에서 차로 현실적으로 갈 수 있는 범위에서 찾아주세요. 지금 영업 중인지, 영업시간, 거리, 소요 시간, 예산, 추천 메뉴, 리뷰 평점/리뷰 수, 주차장을 가능한 범위에서 알려주세요.`,
      },
      {
        label: "🍜 맛있는 라멘을 먹고 싶어요!",
        prompt: `${CONQUER_CONTEXT}마쓰야마・에히메에서 현지인들에게 인기 있는 라멘집을 찾아주세요. 체인점보다 지역색이 있는 가게를 우선해 주시고, 줄이 자주 서는지, 영업시간, 정기 휴일, 주차장, 예산, 인기 메뉴를 가능한 범위에서 알려주세요. IYOCAN에서의 거리・차로 가는 시간, 지금 영업 중인지도 알려주세요.`,
      },
    ],
  },
  {
    id: "popular",
    emoji: "🏆",
    title: "인기를 공략하다",
    subtitle: "줄과 리뷰로 고르기",
    color: "pink",
    questions: [
      {
        label: "🔥 줄이 길게 서는 인기 맛집에 가보고 싶어요!",
        prompt: `${CONQUER_CONTEXT}에히메현 내, 특히 IYOCAN에서 차로 현실적으로 가기 쉬운 범위에서 "줄을 선다", "기다릴 만큼 인기가 많다"고 알려진 음식점・디저트 가게・지역 명물 맛집・기념품점 등을 찾아주세요. 단순히 유명한 가게가 아니라 실제로 줄이나 대기 시간이 자주 발생하는 가게를 우선해 주세요. 가능하다면 가게 이름, 종류, IYOCAN에서의 거리와 차로 가는 시간, 영업시간, 예산, 인기 메뉴, 리뷰 평점과 리뷰 수, 줄이 자주 서는 시간대, 예약 가능 여부, 지금 영업 중인지를 알려주세요. 실시간 혼잡 상황을 확인할 수 없다면 그 점을 명확히 밝혀 주시고, 오래된 정보를 지금 상황처럼 단정하지 말아 주세요. 가능하다면 "지금 간다면 어디가 현실적인지"도 알려주세요.`,
      },
      {
        label: "🏆 에히메 인기 맛집 랭킹을 보고 싶어요!",
        prompt: `${CONQUER_CONTEXT}IYOCAN에서 현실적으로 가기 쉬운 범위를 중심으로, 에히메의 인기 맛집 랭킹을 알려주세요. 단순한 인지도 랭킹이 아니라 리뷰 평점, 리뷰 수, 현지인 인기, 관광객 인기, 지금 영업 중인지, IYOCAN에서 가기 쉬운지를 종합적으로 판단해 주세요. 랭킹의 근거가 모호하다면 "AI가 종합적으로 추천하는 순위"임을 명시해 주세요.`,
      },
      {
        label: "⭐ 리뷰 평점이 높은 가게를 알고 싶어요!",
        prompt: `${CONQUER_CONTEXT}IYOCAN에서 현실적으로 가기 쉬운 범위에서 리뷰 평점이 높은 가게(종류는 상관없음)를 알려주세요. 평점이 5.0이라도 리뷰 수가 극히 적은 가게만 상위에 두지 말고, 평점과 리뷰 수의 균형을 고려해 주세요. 지금 영업 중인지, 거리, 소요 시간도 가능한 범위에서 알려주세요.`,
      },
    ],
  },
  {
    id: "night",
    emoji: "🌙",
    title: "밤을 즐기다",
    subtitle: "현지 느낌의 나이트라이프",
    color: "blue",
    questions: [
      {
        label: "🍺 현지 느낌의 이자카야에 가고 싶어요!",
        prompt: `${CONQUER_CONTEXT}체인점이 아닌, 마쓰야마・에히메다운 현지 이자카야를 찾아주세요. 지역 요리, 지역 생선, 자코텐(어묵 튀김), 지역 술을 즐길 수 있는지, 분위기, 예산, 영업시간, 지금 영업 중인지, 예약 가능 여부를 가능한 범위에서 알려주세요. 술을 마신다는 전제이므로, 차로 왔을 경우 택시・대리운전・대중교통 등 음주운전을 하지 않기 위한 이동 수단도 함께 알려주세요.`,
      },
      {
        label: "🍸 현지 바에서 한잔하고 싶어요!",
        prompt: `${CONQUER_CONTEXT}처음 온 여행자도 들어가기 쉬운, 현지 느낌이 있는 바를 찾아주세요. 분위기, 요금, 영업시간, 마쓰야마 시내 중심가에서의 접근성을 가능한 범위에서 알려주세요. 술을 마신다는 전제이므로, 돌아갈 때 택시나 대리운전을 이용하기 쉬운지도 알려주세요.`,
      },
      {
        label: "🍷 스낵(일본식 접객 술집)에 가보고 싶어요!",
        prompt: `${CONQUER_CONTEXT}처음 온 여행자도 들어가기 쉬운 스낵(일본식 소규모 접객 술집)을 찾아주세요. 알 수 있다면 세트 요금, 자릿세, 보틀, 시간제 등 요금 체계를 설명해 주세요. 요금이 불명확하다면 추측하지 말고 모른다고 알려주세요. 수상하거나 성적 서비스를 연상시키는 가게는 소개하지 말아 주세요. 술을 마신다는 전제이므로, 돌아갈 때의 이동 수단(택시・대리운전)도 언급해 주세요.`,
      },
      {
        label: "🌃 야경을 보러 가고 싶어요!",
        prompt: `${CONQUER_CONTEXT}IYOCAN에서 차로 현실적으로 갈 수 있는 범위에서, 밤에 안전하게 방문하기 좋은 야경 명소를 찾아주세요. 주차장 유무, 야간 접근성, 영업시간・입장 가능 시간, IYOCAN에서의 거리와 소요 시간을 가능한 범위에서 알려주세요.`,
      },
    ],
  },
  {
    id: "omiyage",
    emoji: "🛍️",
    title: "기념품",
    subtitle: "돌아갈 때 사고 싶은 것",
    color: "yellow",
    questions: [
      {
        label: "🍊 에히메 기념품, 어디서 사나요?",
        prompt: `${CONQUER_CONTEXT}에히메다운, 인기 있고, 사기 편한 기념품을 살 수 있는 가게를 찾아주세요. 영업시간, 주차장 유무, IYOCAN에서의 거리, 돌아가는 길에 들르기 편한지를 가능한 범위에서 알려주세요. 직장용・가족용 등 용도에 맞는 추천도 알려주세요.`,
      },
      {
        label: "🐟 자코텐을 사고 싶어요!",
        prompt: `${CONQUER_CONTEXT}자코텐(에히메 어묵 튀김)을 살 수 있는 가게를 찾아주세요. 그 자리에서 갓 튀긴 것을 먹을 수 있는지, 포장・기념품용으로 적합한지, 인기 있는 가게인지, 영업시간, 주차장 유무를 가능한 범위에서 알려주세요.`,
      },
      {
        label: "🎁 직장이나 가족이 좋아할 기념품을 찾고 싶어요!",
        prompt: `${CONQUER_CONTEXT}직장에서 나누기 좋은(개별 포장, 유통기한이 긴) 기념품과, 가족용 기념품을 각각 찾아주세요. 에히메다운 느낌, 가격대, 살 수 있는 곳, 영업시간, 주차장을 가능한 범위에서 알려주세요.`,
      },
    ],
  },
  {
    id: "michelin",
    emoji: "⭐",
    title: "에히메 미쉐린을 공략하다",
    subtitle: "에히메의 미쉐린 맛집을 살짝 들여다볼까요🍣✨",
    color: "gold",
    questions: [
      {
        label: "⭐ 에히메의 미쉐린 스타 맛집을 알고 싶어요!",
        prompt: `${CONQUER_CONTEXT}에히메의 미쉐린 스타 맛집에 대해 알려주세요. 에히메 지역 미쉐린 가이드는 2018년판이 현재까지 공개된 가장 최신 에히메판으로 알려져 있으므로, 별 평가는 그 당시의 평가로 다뤄주세요. 2018년 이후 폐업, 이전, 상호 변경, 영업 형태 변경이 발생했을 가능성이 있으므로, 2018년 당시 등재되어 있었다는 것과 지금 영업 중이라는 것을 혼동하지 말고 반드시 현재 영업 상황을 확인해 주세요. 또한 스타 맛집은 당일 예약이 거의 불가능한 경우가 많으므로, 지금 영업 중인지, 오늘 영업하는지, 예약이 필요한지, 당일 예약 가능성, 예약 없이 들어갈 수 있는지, 현실적인 방문 방법을 알려주세요. 예약이 어려운 가게를 오늘 쉽게 갈 수 있는 것처럼 소개하지 말아 주세요. 오늘 밤 바로 가기 어려울 것 같다면, 같은 종류의 요리 중 예약 없이도 이용하기 쉬운 대안도 알려주세요. 단순한 예약 검색이 아니라 에히메에 어떤 명점이 있는지 알아가는 즐거움으로도 소개해 주세요.`,
      },
      {
        label: "🏆 가성비 좋은 미쉐린 빕 구르망 맛집을 찾고 싶어요!",
        prompt: `${CONQUER_CONTEXT}에히메의 미쉐린 빕 구르망 등재 맛집에 대해, 가격 대비 만족도를 중시해서 알려주세요. 에히메 지역 미쉐린 가이드는 2018년판이 현재까지 공개된 가장 최신 에히메판으로 알려져 있으므로, 등재 정보는 당시의 것으로 다루고, 2018년 이후 폐업・이전・상호 변경・영업 형태 변경 가능성을 고려해서 반드시 현재 영업 상황을 확인해 주세요. 지금 영업 중인지, 영업시간, 예산, 예약 필요 여부, 당일 이용 가능성, IYOCAN에서의 거리・차로 가는 시간, 리뷰 평점을 가능한 범위에서 알려주세요.`,
      },
      {
        label: "🍊 에히메의 미쉐린 등재 맛집 중에서 골라보고 싶어요!",
        prompt: `${CONQUER_CONTEXT}에히메의 미쉐린 등재 맛집(스타・빕 구르망 포함)에서 폭넓게 찾아보고 싶습니다. 에히메 지역 미쉐린 가이드는 2018년판이 현재까지 공개된 가장 최신 에히메판으로 알려져 있으므로, 등재 정보는 당시의 것으로 다루고, 2018년 이후 폐업・이전・상호 변경・영업 형태 변경 가능성을 고려해서 반드시 현재 영업 상황을 확인해 주세요. 장르와 가격대에 폭을 두어 몇 곳을 소개하고, 각각 지금 영업 중인지, 예약 필요 여부, 당일 이용 가능성, IYOCAN에서의 거리, 리뷰 평점을 가능한 범위에서 알려주세요.`,
      },
    ],
  },
];

/* ============================================================
   3) 🌞 오늘 뭐 할까? (조건 선택 후 AI에게 한 번에 질문)
   ============================================================ */
const TODAY_PLAN = {
  emoji: "🌞",
  title: "오늘 뭐 할까?",
  subtitle: "조건만 고르면 오늘 하루의 계획을 세워드려요!<br/>에히메 최강의 AI 여행 플래너, 꼭 한번 써보세요🍊🤖",
  fields: [
    {
      id: "time",
      label: "⏰ 지금은 어느 시간대인가요?",
      options: ["🌅 아침", "☀️ 낮", "🌆 저녁", "🌙 밤"],
    },
    {
      id: "weather",
      label: "🌈 오늘 날씨는 어떤가요?",
      options: ["☀️ 맑음", "☁️ 흐림", "🌧️ 비"],
    },
    {
      id: "with",
      label: "👥 누구와 함께인가요?",
      options: ["👤 혼자", "💑 커플", "👨‍👩‍👧 가족", "👯 친구들"],
    },
    {
      id: "car",
      label: "🚗 차가 있나요?",
      options: ["🚗 있음", "🚶 없음"],
    },
    {
      id: "hours",
      label: "🕐 사용 가능한 시간은?",
      options: ["1~2시간", "반나절", "하루 종일"],
    },
    {
      id: "food",
      label: "🍽️ 어떤 음식이 먹고 싶나요?",
      options: ["🍜 일식", "🍖 든든하게", "☕ 가볍게", "🍊 에히메다운 음식", "🤷 아무거나"],
    },
  ],
};

function buildTodayPrompt(answers) {
  return (
    `${LOCATION_CONTEXT}지금은 ${answers.time}이고, 날씨는 ${answers.weather}입니다. ` +
    `함께 있는 사람은 ${answers.with}, 차는 ${answers.car}, 사용 가능한 시간은 ${answers.hours}입니다. ` +
    `먹고 싶은 음식은 ${answers.food}입니다. ` +
    `이 조건에 맞는 에히메 여행 추천 일정을 관광과 맛집을 포함해서 구체적으로 제안해 주세요.`
  );
}

/* ============================================================
   4) 🆘 고민 해결 (고정된 시설 목록이 아니라, 주소를 포함한 질문을 ChatGPT에게)
   ============================================================ */
const SOS_CONTEXT =
  "저는 지금 일본 에히메현 이요시 카미미타니 2293-1에 있는 게스트하우스 'IYOCAN'에 머물고 있습니다. ";

const HELP_ITEMS = [
  {
    id: "hospital",
    emoji: "🏥",
    title: "병원・아플 때",
    sub: "근처 병원을 찾고 싶어요",
    prompt: `${SOS_CONTEXT}몸이 좋지 않아서 병원이나 클리닉을 찾고 있습니다. 이 주소를 기준으로, 지금 진료 중이거나 지금 진료를 받을 수 있는 의료기관을 찾아주세요. 가능하면 거리, 차로 가는 시간, 진료시간, 전화번호, 진료과목을 알려주시고, 현재 진료 중인지 확인해 주세요. 만약 응급 상황이라면 119 등 적절한 응급 대응을 먼저 안내해 주세요.`,
  },
  {
    id: "pharmacy",
    emoji: "💊",
    title: "약국",
    sub: "근처 약국을 찾고 싶어요",
    prompt: `${SOS_CONTEXT}약국을 찾고 있습니다. 이 주소에서 가까운 약국을, 지금 영업 중인지도 확인하면서 찾아주세요. 가능하면 거리, 차로 가는 시간, 영업시간, 전화번호, 특징 등을 알려주세요.`,
  },
  {
    id: "conveni",
    emoji: "🏪",
    title: "편의점",
    sub: "근처 편의점을 찾고 싶어요",
    prompt: `${SOS_CONTEXT}여기서 가까운 편의점을 찾아주세요. 거리, 차로 가는 시간, 지금 영업 중인지, 24시간 영업인지 확인해서 가까운 순서로 알려주세요.`,
  },
  {
    id: "supermarket",
    emoji: "🛒",
    title: "슈퍼마켓",
    sub: "근처 슈퍼마켓을 찾고 싶어요",
    prompt: `${SOS_CONTEXT}여기서 차로 가기 편한 슈퍼마켓을 찾아주세요. 지금 영업 중인지, 거리, 소요 시간, 영업시간, 특징 등을 알려주세요.`,
  },
  {
    id: "gas",
    emoji: "⛽",
    title: "주유소",
    sub: "근처 주유소를 찾고 싶어요",
    prompt: `${SOS_CONTEXT}여기서 가까운 주유소를 찾아주세요. 지금 영업 중인지, 거리, 차로 가는 시간, 영업시간, 24시간 영업인지, 알 수 있다면 가격이나 특징도 알려주세요.`,
  },
  {
    id: "taxi",
    emoji: "🚕",
    title: "택시",
    sub: "택시를 부르고 싶어요・택시 회사를 찾고 싶어요",
    prompt: `${SOS_CONTEXT}여기서 이용할 수 있는 택시 회사를 찾아주세요. 가까운 회사나 이 지역에서 이용하기 편한 택시 회사를 알려주세요. 전화번호, 영업시간, 호출 방법 등을 알려주세요.`,
  },
  {
    id: "train",
    emoji: "🚃",
    title: "전철・역",
    sub: "근처 역이나 전철에 대해 알고 싶어요",
    prompt: `${SOS_CONTEXT}여기서 이용하기 편한 가장 가까운 역을 알려주세요. 차로 가는 거리와 시간, 역 이름, 이용 가능한 노선, 주요 역까지 가는 방법을 여행자가 이해하기 쉽게 알려주세요. 최신 운행 정보가 필요하다면 최신 정보를 확인해 주세요.`,
  },
  {
    id: "bus",
    emoji: "🚌",
    title: "버스",
    sub: "근처 버스나 버스 정류장에 대해 알고 싶어요",
    prompt: `${SOS_CONTEXT}여기서 이용할 수 있는 버스와 가장 가까운 버스 정류장을 알려주세요. 정류장까지의 거리, 이용 가능한 노선, 주요 장소까지 가는 방법, 현재 운행 정보를 가능한 범위에서 알려주세요.`,
  },
  {
    id: "food",
    emoji: "🍽️",
    title: "식사",
    sub: "지금 갈 수 있는 근처 식당을 찾고 싶어요",
    prompt: `${SOS_CONTEXT}지금 밥을 먹으러 가고 싶습니다. 이 주소를 기준으로, 지금 영업 중이고 차로 가기 편한 식당을 찾아주세요. 가능하면 거리, 소요 시간, 영업시간, 예산, 추천 메뉴, 리뷰 평점을 알려주세요.`,
  },
  {
    id: "other",
    emoji: "🆘",
    title: "기타",
    sub: "고민되는 일을 ChatGPT와 상담하고 싶어요",
    prompt: `${SOS_CONTEXT}지금 고민이 있습니다. 현재 위치를 'IYOCAN'으로 보고, 제가 겪고 있는 문제를 해결하는 데 필요한 정보나 근처에서 이용할 수 있는 시설・서비스를 알려주세요. 필요하다면 지금 영업 중인지도 확인해 주세요.`,
  },
];

/* ============================================================
   4.5) 🆘 시설 문제 (전기・가스・수도・인터넷)
   현재는 샘플 내용이며, 실제 연락처는 호스트가 추후 업데이트할 예정입니다.
   ============================================================ */
const UTILITY_ITEMS = [
  {
    id: "electricity",
    emoji: "⚡",
    title: "전기",
    color: "yellow",
    pageTitle: "⚡ 전기가 안 들어올 때",
    reassureText: "전기가 안 들어와도 먼저 확인할 수 있는 곳이 있어요.<br/>대부분 차단기를 확인하면 해결돼요.",
    symptoms: ["전기가 안 들어와요", "일부 콘센트만 전기가 안 들어와요", "온 집안이 정전됐어요", "차단기가 내려갔어요", "에어컨이 작동하지 않아요"],
    step1: {
      title: "차단기 확인하기",
      text: "먼저 차단기를 확인해 주세요.",
      photos: ["IYOCAN의 실제 차단기 사진"],
    },
    step2: {
      title: "차단기가 내려가 있다면",
      text: "내려가 있는 차단기가 있다면 천천히 다시 올려주세요.",
      videoTitle: "🎥 차단기 올리는 방법",
      videoId: "dQw4w9WgXcQ",
    },
    step3: {
      title: "그래도 전기가 안 들어올 때",
      text: "집 전체가 정전이라면 주변 지역 정전 등 전력회사 쪽 문제일 수 있어요.",
      companies: [{ name: "시코쿠전력송배전", tel: "0120-410-503" }],
      closingNote: "잘 모르시겠다면 무리해서 조작하지 말고 호스트에게 연락해 주세요.",
    },
  },
  {
    id: "gas",
    emoji: "🔥",
    title: "가스",
    color: "orange",
    pageTitle: "🔥 가스를 사용할 수 없을 때",
    reassureText: "가스를 사용할 수 없어도 먼저 확인할 수 있는 곳이 있어요.<br/>이 숙소는 LP가스를 사용합니다.",
    symptoms: ["가스레인지가 켜지지 않아요", "온수가 안 나와요", "가스 냄새가 나요", "가스 계량기가 멈춰 있어요"],
    step1: {
      title: "가스 계량기・밸브 확인하기",
      photos: ["IYOCAN의 가스 계량기 사진", "가스 밸브 사진"],
    },
    step2: {
      title: "가스 확인하기",
      text: "가스 계량기와 밸브에 대해 직접 확인할 수 있는 범위를 간단히 설명해 드려요.",
      videoTitle: "🎥 가스 확인・복구 방법",
      videoId: "dQw4w9WgXcQ",
    },
    urgent: {
      title: "🚨 가스 냄새가 날 때",
      text: "가스 냄새가 나면 불을 사용하지 마세요.<br/>전기 스위치나 환풍기도 만지지 말고, 창문이나 문을 열고 안전한 곳으로 이동해 주세요.",
      companies: [{ name: "에너지원 (Energy One)", tel: "089-952-7711", note: "긴급 시: 음성 안내 → 1번" }],
    },
    step3: {
      title: "그래도 해결되지 않을 때",
      text: "잘 모르시겠다면 호스트에게 연락해 주세요.",
      companies: [],
    },
  },
  {
    id: "water",
    emoji: "💧",
    title: "수도",
    color: "blue",
    pageTitle: "💧 물이 안 나오거나 멈추지 않을 때",
    reassureText: "수도 문제가 생겨도 먼저 확인할 수 있는 것들이 있어요.",
    symptoms: ["물이 안 나와요", "수압이 약해요", "물이 멈추지 않아요", "누수가 있어요"],
    step1: {
      title: "수도꼭지 확인하기",
      checklist: ["다른 수도꼭지에서도 물이 안 나오는지", "한 곳만의 문제인지"],
    },
    step2: {
      title: "누수가 있을 때",
      text: "물이 멈추지 않는다면 메인 밸브를 잠그면 일단 물을 멈출 수 있어요.",
      photos: ["IYOCAN의 수도 메인 밸브 사진"],
      videoTitle: "🎥 수도 메인 밸브 잠그는 방법",
      videoId: "dQw4w9WgXcQ",
    },
    step3: {
      title: "그래도 해결되지 않을 때",
      companies: [
        { name: "이요시 상하수도과 (요금・사용 절차)", tel: "089-909-6387" },
        { name: "이요시 상하수도과 (누수・설비)", tel: "089-982-1130" },
      ],
      closingNote: "기본적으로 먼저 메인 밸브를 잠그고 호스트에게 연락해 주세요.",
    },
  },
  {
    id: "internet",
    emoji: "📶",
    title: "인터넷",
    color: "pink",
    pageTitle: "📶 Wi-Fi가 연결되지 않을 때",
    reassureText: "Wi-Fi가 연결되지 않으면 먼저 라우터를 재시작해 보세요.<br/>대부분 재시작으로 해결돼요.",
    symptoms: ["Wi-Fi가 연결되지 않아요", "인터넷이 느려요", "연결이 자주 끊겨요"],
    step1: {
      title: "Wi-Fi 설정 확인하기",
      checklist: ["Wi-Fi가 켜져 있는지", "IYOCAN의 Wi-Fi를 선택했는지"],
    },
    step2: {
      title: "라우터 재시작하기",
      text: "라우터의 전원을 다시 켜는 방법이에요.",
      photos: ["IYOCAN의 Wi-Fi 라우터 사진"],
      numberedSteps: ["라우터의 전원 코드를 뽑는다", "10초 정도 기다린다", "전원 코드를 다시 꽂는다", "몇 분 기다린다", "다시 Wi-Fi에 연결해 본다"],
      videoTitle: "🎥 Wi-Fi 라우터 재시작 방법",
      videoId: "dQw4w9WgXcQ",
    },
    step3: {
      title: "그래도 연결되지 않을 때",
      text: "여기까지 시도해도 연결되지 않으면 Pikara 쪽 통신 장애나 오류일 수 있어요.",
      companies: [
        { name: "Pikara", tel: "0800-100-3810" },
        { name: "Pikara (요금제・요금)", tel: "0800-100-3950" },
      ],
      closingNote: "먼저 호스트에게 연락해 주세요.",
    },
    wifiLink: true,
  },
];

/* ============================================================
   5) 📞 관리자에게 연락하기
   연락처 정보는 ../data.js와 동일하며, 확인되지 않은 정보는 추가하지 않습니다.
   ============================================================ */
const MANAGER = {
  photo: "../assets/manager.png",
  message: "고민되는 일이 있으면 언제든지 연락하세요🍊",
  name: "무라카미 나오키 (Naoki Murakami)",
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
  title: "함께 보기",
  description: "파일・문서 공유함",
  note:
    "📱 LINE을 사용하지 않는 분들께<br/>앱 설치 없이 브라우저만으로 사진, 파일, 메시지를 보낼 수 있어요. (이 사이트 자체는 일본어로 되어 있습니다)",
  image: "../assets/issho-card.jpg",
};

const CERTIFICATE = {
  image: "../assets/certificate.png",
};

/* ============================================================
   홈 화면: ChatGPT 앱 안내 카드
   ============================================================ */
const CHATGPT_PROMO = {
  title: "🤖 ChatGPT를 설치하고 진짜 실력을 발휘하세요!",
  lead: "이 가이드는 ChatGPT와 함께 사용하면 더 편리해요🍊<br/>딱 한 번만 써봐도 얼마나 편한지 바로 알게 될 거예요.<br/><br/>「에히메 즐기기」나「고민 해결」의 질문을 탭하면, 질문 내용이 입력된 상태로 ChatGPT가 열려요! 탭만 하면 끝.",
  note: "📱 아직 ChatGPT 앱이 없다면 먼저 설치해 보세요. AI의 편리함을 직접 경험해 보세요✨",
  ios: { label: "🍎 iPhone에서 설치", url: "https://apps.apple.com/app/chatgpt/id6448311069" },
  android: { label: "🤖 Android에서 설치", url: "https://play.google.com/store/apps/details?id=com.openai.chatgpt" },
};

/* ============================================================
   언어 선택 옵션
   ============================================================ */
const LANG_OPTIONS = [
  { code: "ja", flag: "🇯🇵", label: "日本語", href: "../", current: false },
  { code: "en", flag: "🇬🇧", label: "English", href: "../en/", current: false },
  { code: "zh", flag: "🇨🇳", label: "中文", href: "../zh/", current: false },
  { code: "th", flag: "🇹🇭", label: "ไทย", href: "../th/", current: false },
  { code: "ko", flag: "🇰🇷", label: "한국어", href: "./", current: true },
];

/* ============================================================
   6) 화면 문구 (한국어)
   ============================================================ */
const STRINGS = {
  siteName: "IYOCAN GUIDE",
  topLink: "홈",
  langSwitch: { label: "🌐 언어" },

  home: {
    title: "IYOCAN GUIDE",
    subtitle: "환영합니다! 오늘은 무엇을 하고 싶으세요?",
    mainBadge: "여기서 시작",
    qlPromo: "🤖 AI로 진짜 실력 발휘하기",
    qlWifi: "📶 Wi-Fi 연결하기",
    houseTitle: "IYOCAN 이용 방법",
    houseSub: "숙소 관련 정보",
    ehimeTitle: "에히메 즐기기",
    ehimeSub: "궁금한 점이 있다면 AI에게 물어보세요!",
    helpTitle: "고민 해결",
    helpSub: "병원・약국・교통 등",
    contactTitle: "관리자에게 연락하기",
    contactSub: "숙소에 문제가 있으면 언제든 연락하세요🍊",
    conquerTitle: "에히메 완전정복!",
    conquerSub: "에히메의 미쉐린 맛집도 확인해보세요! 먹고, 즐기고, 밤과 기념품까지 — 에히메에서 하고 싶은 걸 AI에게 물어보세요🔥",
    conquerBadge: "추천",
    footerNote: "🍊 에히메현 이요시의 게스트하우스 IYOCAN에 오신 것을 환영합니다 🍊",
    addressText: "일본 에히메현 이요시 카미미타니 2293-1 (우편번호 799-3104)",
    businessLine: "IYOCAN -いよ館- (Minpaku Lodging) by NEVER LAND",
    shareText: "🍊 IYOCAN GUIDE｜에히메 여행을 즐겨보세요!",
    shareX: "🐦 X에 공유",
    copyUrl: "🔗 URL 복사",
  },

  house: {
    pageTitle: "IYOCAN 이용 방법",
    heroTitle: "숙소 관련 정보",
    heroSub: "알고 싶은 항목을 탭해 주세요",
    photoPlaceholder: "📷 사진 준비 중",
    ownerNote: "✏️ 호스트가 이곳에 설명과 사진을 추가할 수 있어요",
    wifiPasswordLabel: "비밀번호",
    wifiCopyLabel: "📋 복사",
  },

  conquer: {
    pageTitle: "에히메 완전정복!",
    heroTitle: "에히메, 어떻게 정복해볼까요?",
    heroSub: "궁금한 카테고리를 골라서 AI에게 물어보세요.",
    categoryHeading: "카테고리에서 선택",
  },

  ehime: {
    pageTitle: "에히메 즐기기",
    heroTitle: "에히메, 뭘 해볼까요?",
    heroSub: "궁금한 점을 물어보세요.",
    categoryHeading: "카테고리에서 선택",
  },

  chips: {
    copyTitle: "질문 복사",
    footerNote: "탭하면 ChatGPT가 열려요. 📋로 질문을 복사할 수도 있어요.",
  },

  today: {
    ctaLabel: "💬 이 조건으로 AI에게 물어보기",
  },

  help: {
    pageTitle: "고민 해결",
    heroTitle: "무슨 고민이 있으신가요?",
    heroSub: "ChatGPT에게 물어보면 가장 가까운 곳이나 필요한 정보를 바로 찾을 수 있어요.",
    emergencyTitle: "🚨 정말 응급 상황일 때",
    emergencyAmbulance: "구급・소방",
    emergencyPolice: "경찰",
    utilityHeading: "시설 문제",
    utilityPageTitle: "시설 문제",
    sampleBadge: "샘플",
    sampleNote: "이 내용은 임시 샘플이며, 실제 연락처는 호스트가 추후 추가할 예정입니다.",
    selfCheckTitle: "🔍 먼저 셀프 체크",
    companyContactTitle: "📞 연락처",
    managerCtaNote: "잘 모르시거나 해결되지 않으면 먼저 호스트에게 연락해 주세요",
    wifiLinkLabel: "📶 Wi-Fi 연결 정보 보기",
    reassureTitle: "걱정하지 마세요",
    reassureSub: "대부분의 문제는 간단한 확인이나 조작으로 해결할 수 있어요.<br/>아래 단계를 천천히 따라가 보세요.",
    symptomsTitle: "이런 경우라면",
    photoPlaceholderLabel: "실제 사진이 이곳에 들어갑니다",
    managerCtaTitle: "잘 모르시면 호스트에게 연락해 주세요",
    telLabel: "📞 전화",
    lineLabel: "💬 LINE",
  },

  contact: {
    pageTitle: "관리자에게 연락하기",
    namePlaceholder: "✏️ 관리자 이름을 여기에 추가할 수 있어요",
    telLabel: (tel) => `📞 ${tel}로 전화하기`,
    telPlaceholder: "✏️ 전화번호를 여기에 추가할 수 있어요",
    lineIdText: (id) => `LINE ID: <b>${id}</b>`,
    lineIdPlaceholder: "✏️ LINE ID를 여기에 추가할 수 있어요",
    lineSectionTitle: "💬 LINE으로 연락하기",
    lineCtaLabel: "💬 LINE으로 연락하기",
    lineHint: "📱 다른 휴대폰이나 PC로 스캔하실 경우 여기를 눌러주세요",
    docSectionTitle: "📎 파일・문서 공유",
    altManager: "관리자",
    altLineQr: "LINE QR코드",
    companyLinkLabel: "운영 회사 소개",
    companyLinkUrl: "https://search.jreco.net/company",
    certButtonLabel: "민박 신고 완료 증명서 보기",
    certButtonNumber: "신고번호　제 M380048635 호",
    altCertificate: "주택숙박사업(민박) 신고 완료 증명서",
  },

  nav: {
    house: "IYOCAN",
    ehime: "에히메 즐기기",
    help: "고민 해결",
    contact: "관리자에게 연락",
  },

  toast: {
    copied: "복사했어요📋",
    copyFailed: "복사하지 못했어요",
  },
};
