/* ============================================================
   IYOCAN GUIDE - 한국어 콘텐츠
   ../data.js와 구조가 완전히 동일합니다. 이 파일만 수정하면
   app.js(JP/EN/ZH/TH/KO 공용)를 건드리지 않고 한국어 내용을
   업데이트할 수 있습니다.
   ============================================================ */

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
  lead: "이 가이드는 ChatGPT와 함께 사용하면 더 편리해요🍊<br/>「에히메 즐기기」나「고민 해결」의 질문을 탭하면, 질문 내용이 입력된 상태로 ChatGPT가 열려요.",
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
    contactSub: "무라카미 나오키에게 연락하기",
    footerNote: "QR코드로 이 페이지를 열어주신 당신께 🍊",
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
