/* ============================================================
   いよ館 GUIDE - アプリ本体（ルーティング & 描画）
   ============================================================ */

const app = document.getElementById("app");
const CATEGORY_COLOR = { pink: "pink", orange: "orange", blue: "blue", yellow: "yellow" };

const todayAnswers = {
  time: TODAY_PLAN.fields[0].options[1],
  weather: TODAY_PLAN.fields[1].options[0],
  with: TODAY_PLAN.fields[2].options[2],
  car: TODAY_PLAN.fields[3].options[0],
  hours: TODAY_PLAN.fields[4].options[1],
  food: TODAY_PLAN.fields[5].options[4],
};

/* ---------- ルーティング ---------- */
function navigate(hash) {
  window.location.hash = hash;
}

function currentRoute() {
  return (window.location.hash || "#home").slice(1);
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

function render() {
  const route = currentRoute();
  const parts = route.split("/");
  window.scrollTo(0, 0);

  if (parts[0] === "home" || route === "") return renderHome();
  if (parts[0] === "house" && !parts[1]) return renderHouseList();
  if (parts[0] === "house" && parts[1]) return renderHouseDetail(parts[1]);
  if (parts[0] === "ehime" && !parts[1]) return renderEhimeGrid();
  if (parts[0] === "ehime" && parts[1]) return renderCategoryChips(parts[1]);
  if (parts[0] === "today") return renderTodayForm();
  if (parts[0] === "help") return renderHelp();
  return renderHome();
}

/* ---------- 共通パーツ ---------- */
function header({ back = null, title = null } = {}) {
  return `
    <div class="top-header">
      ${back ? `<button class="back-btn" onclick="navigate('${back}')">←</button>` : ""}
      <a class="logo-link" href="#home" onclick="event.preventDefault();navigate('home')">
        <span class="logo-emoji">🍊</span>${title ? "" : "いよ館 GUIDE"}
      </a>
      ${
        title
          ? `<a class="header-title" href="#home" onclick="event.preventDefault();navigate('home')">${title}</a>`
          : ""
      }
    </div>
  `;
}

function footerNav(current) {
  const items = [
    { id: "house", emoji: "🏠", label: "いよ館の使い方", cls: "fn-house" },
    { id: "ehime", emoji: "🤖", label: "愛媛を楽しむ", cls: "fn-ehime" },
    { id: "help", emoji: "🆘", label: "困ったとき", cls: "fn-help" },
  ];
  return `
    <div class="footer-nav">
      ${items
        .map(
          (it) => `
        <button class="footer-nav-card ${it.cls} ${it.id === current ? "fn-current" : ""}" onclick="navigate('${it.id}')">
          <span class="fn-emoji">${it.emoji}</span>
          <span class="fn-label">${it.label}</span>
        </button>`
        )
        .join("")}
    </div>
  `;
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 1800);
}

function openChatGPT(prompt) {
  const url = "https://chatgpt.com/?q=" + encodeURIComponent(prompt);
  window.open(url, "_blank", "noopener");
}

function copyText(text, btnEl) {
  const done = () => {
    toast("質問をコピーしました📋");
    if (btnEl) {
      btnEl.classList.add("copied");
      setTimeout(() => btnEl.classList.remove("copied"), 1200);
    }
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    done();
  } catch (e) {
    toast("コピーできませんでした");
  }
  document.body.removeChild(ta);
}

/* ---------- ホーム ---------- */
function renderHome() {
  app.innerHTML = `
    ${header()}
    <div class="view">
      <div class="hero">
        <span class="hero-emoji">🍊</span>
        <h1>いよ館 GUIDE</h1>
        <p>愛媛の旅、楽しもう！</p>
      </div>

      <div class="home-cards">
        <button class="home-card main" onclick="navigate('house')">
          <span class="card-badge">メイン</span>
          <span class="card-emoji">🏠</span>
          <span class="card-text">
            <span class="card-title">いよ館の使い方</span>
            <span class="card-sub">宿のことはこちら</span>
          </span>
          <span class="card-arrow">›</span>
        </button>

        <button class="home-card house" onclick="navigate('ehime')">
          <span class="card-emoji">🤖</span>
          <span class="card-text">
            <span class="card-title">愛媛を楽しむ</span>
            <span class="card-sub">気になることをAIに聞いてみよう！</span>
          </span>
          <span class="card-arrow">›</span>
        </button>

        <button class="home-card help" onclick="navigate('help')">
          <span class="card-emoji">🆘</span>
          <span class="card-text">
            <span class="card-title">困ったとき</span>
            <span class="card-sub">病院・薬局・交通など</span>
          </span>
          <span class="card-arrow">›</span>
        </button>
      </div>

      <p class="footer-note">QRコードからこのページを開いたあなたへ 🍊</p>
    </div>
  `;
}

/* ---------- 🏠 いよ館の使い方 ---------- */
function renderHouseList() {
  app.innerHTML = `
    ${header({ back: "home", title: "いよ館の使い方" })}
    <div class="view">
      <div class="hero" style="padding-top:6px;">
        <span class="hero-emoji">🏠</span>
        <h1 style="font-size:20px;">宿のことはこちら</h1>
        <p>気になる項目をタップしてね</p>
      </div>
      <div class="grid-2">
        ${FACILITIES.map(
          (f, i) => `
          <button class="tile ${["c-pink", "c-orange", "c-blue", "c-yellow"][i % 4]}" onclick="navigate('house/${f.id}')">
            <span class="tile-emoji">${f.emoji}</span>
            <span class="tile-title">${f.title}</span>
          </button>`
        ).join("")}
      </div>
      ${footerNav("house")}
    </div>
  `;
}

function renderHouseDetail(id) {
  const f = FACILITIES.find((x) => x.id === id);
  if (!f) return renderHouseList();
  app.innerHTML = `
    ${header({ back: "house", title: f.title })}
    <div class="view">
      <div class="detail-photo">📷 ここに写真を追加してください</div>
      <ol class="step-list" style="list-style:none;padding:0;">
        ${f.steps
          .map(
            (s, i) => `
          <li><span class="step-num">${i + 1}</span><span>${s}</span></li>`
          )
          .join("")}
      </ol>
      <div class="owner-note">✏️ ここにオーナーが説明文・写真・注意点を追加できます</div>
    </div>
  `;
}

/* ---------- 🤖 愛媛を楽しむ ---------- */
function renderEhimeGrid() {
  app.innerHTML = `
    ${header({ back: "home", title: "愛媛を楽しむ" })}
    <div class="view">
      <div class="hero" style="padding-top:6px;">
        <span class="hero-emoji">🤖</span>
        <h1 style="font-size:20px;">愛媛、何しよう？</h1>
        <p>気になること、聞いてみよう。</p>
      </div>

      <button class="today-card" onclick="navigate('today')">
        <span class="card-emoji">${TODAY_PLAN.emoji}</span>
        <span class="card-text">
          <span class="card-title">${TODAY_PLAN.title}</span><br/>
          <span class="card-sub">${TODAY_PLAN.subtitle}</span>
        </span>
        <span class="card-arrow" style="margin-left:auto;">›</span>
      </button>

      <div class="section-title">カテゴリーから選ぶ</div>
      <div class="grid-2">
        ${CATEGORIES.map(
          (c) => `
          <button class="tile c-${c.color}" onclick="navigate('ehime/${c.id}')">
            <span class="tile-emoji">${c.emoji}</span>
            <span class="tile-title">${c.title}</span>
          </button>`
        ).join("")}
      </div>
    </div>
  `;
}

function renderCategoryChips(catId) {
  const c = CATEGORIES.find((x) => x.id === catId);
  if (!c) return renderEhimeGrid();
  app.innerHTML = `
    ${header({ back: "ehime", title: c.title })}
    <div class="view">
      <div class="category-banner bg-${c.color}">
        <span class="banner-emoji">${c.emoji}</span>
        <div class="banner-title">${c.title}</div>
        <div class="banner-sub">${c.subtitle}</div>
      </div>

      <div class="chip-list">
        ${c.questions
          .map(
            (q, i) => `
          <div class="chip-card">
            <button class="chip-main" onclick='sendToChatGPT(${JSON.stringify(q.prompt)})'>${q.label}</button>
            <button class="chip-copy" title="質問をコピー" onclick='copyText(${JSON.stringify(q.prompt)}, this)'>📋</button>
          </div>`
          )
          .join("")}
      </div>
      <p class="footer-note">タップすると ChatGPT が開きます。📋でコピーもできます。</p>
    </div>
  `;
}

function sendToChatGPT(prompt) {
  openChatGPT(prompt);
}

/* ---------- 🌞 今日どうする？ ---------- */
function renderTodayForm() {
  app.innerHTML = `
    ${header({ back: "ehime", title: TODAY_PLAN.title })}
    <div class="view">
      <div class="category-banner bg-orange">
        <span class="banner-emoji">${TODAY_PLAN.emoji}</span>
        <div class="banner-title">${TODAY_PLAN.title}</div>
        <div class="banner-sub">${TODAY_PLAN.subtitle}</div>
      </div>

      ${TODAY_PLAN.fields
        .map(
          (field) => `
        <div class="field-block">
          <div class="field-label">${field.label}</div>
          <div class="option-row">
            ${field.options
              .map(
                (opt) => `
              <button class="option-btn ${todayAnswers[field.id] === opt ? "selected" : ""}"
                onclick='selectTodayOption(${JSON.stringify(field.id)}, ${JSON.stringify(opt)}, this)'>${opt}</button>`
              )
              .join("")}
          </div>
        </div>`
        )
        .join("")}

      <div class="sticky-cta">
        <button class="cta-btn" onclick="submitTodayForm()">💬 この条件でAIに相談する</button>
      </div>
    </div>
  `;
}

function selectTodayOption(fieldId, value, btnEl) {
  todayAnswers[fieldId] = value;
  const row = btnEl.parentElement;
  [...row.children].forEach((b) => b.classList.remove("selected"));
  btnEl.classList.add("selected");
}

function submitTodayForm() {
  const prompt = buildTodayPrompt(todayAnswers);
  openChatGPT(prompt);
}

/* ---------- 🆘 困ったとき ---------- */
function renderHelp() {
  app.innerHTML = `
    ${header({ back: "home", title: "困ったとき" })}
    <div class="view">
      <div class="hero" style="padding-top:6px;">
        <span class="hero-emoji">🆘</span>
        <h1 style="font-size:20px;">困ったときはこちら</h1>
        <p>タップすると詳しく開きます</p>
      </div>

      <div class="help-list">
        ${HELP_ITEMS.map(
          (h, i) => `
          <div class="help-item" id="help-${h.id}">
            <button class="help-head" onclick="toggleHelp('${h.id}')">
              <span class="help-emoji">${h.emoji}</span>
              <span class="help-title">${h.title}</span>
              <span class="chevron">›</span>
            </button>
            <div class="help-body">
              ${
                h.note
                  ? `<div class="help-note">${h.note}</div>`
                  : `<div class="help-note">✏️ 住所・電話番号・営業時間はオーナーがここに追加できます</div>`
              }
              <div class="help-actions">
                ${
                  h.mapQuery
                    ? `<a class="pill-btn map" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        h.mapQuery
                      )}">📍 地図で見る</a>`
                    : ""
                }
                ${
                  h.id !== "emergency"
                    ? `<button class="pill-btn ai" onclick='sendToChatGPT(${JSON.stringify(
                        `${LOCATION_CONTEXT}今から一番近い${h.title}を教えてください。距離・営業時間も分かる範囲で教えてください。`
                      )})'>🤖 AIに聞く</button>`
                    : ""
                }
              </div>
            </div>
          </div>`
        ).join("")}
      </div>
      ${footerNav("help")}
    </div>
  `;
}

function toggleHelp(id) {
  const el = document.getElementById("help-" + id);
  const wasOpen = el.classList.contains("open");
  document.querySelectorAll(".help-item.open").forEach((x) => x.classList.remove("open"));
  if (!wasOpen) el.classList.add("open");
}
