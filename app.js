/* ============================================================
   いよ館 GUIDE - アプリ本体（ルーティング & 描画）
   日本語版・英語版で完全共有。文言は data.js の STRINGS / 各データに集約。
   ============================================================ */

const app = document.getElementById("app");

const todayAnswers = {
  time: TODAY_PLAN.fields[0].options[0],
  weather: TODAY_PLAN.fields[1].options[0],
  with: TODAY_PLAN.fields[2].options[0],
  car: TODAY_PLAN.fields[3].options[0],
  hours: TODAY_PLAN.fields[4].options[0],
  food: TODAY_PLAN.fields[5].options[0],
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
  if (parts[0] === "conquer" && !parts[1]) return renderConquerGrid();
  if (parts[0] === "conquer" && parts[1]) return renderConquerCategory(parts[1]);
  if (parts[0] === "today") return renderTodayForm();
  if (parts[0] === "help") return renderHelp();
  if (parts[0] === "contact") return renderContact();
  return renderHome();
}

/* ---------- 共通パーツ ---------- */
function header({ back = null, title = null } = {}) {
  return `
    <div class="top-header">
      ${back ? `<button class="back-btn" onclick="navigate('${back}')">←</button>` : ""}
      <a class="logo-link" href="#home" onclick="event.preventDefault();navigate('home')">
        <span class="logo-emoji">🍊</span>${title ? "" : STRINGS.siteName}
      </a>
      ${
        title
          ? `<a class="header-title" href="#home" onclick="event.preventDefault();navigate('home')">${title}</a>`
          : ""
      }
      <a class="top-link" href="#home" onclick="event.preventDefault();navigate('home')">${STRINGS.topLink}</a>
      <button class="lang-switch" onclick="openLangModal()">${STRINGS.langSwitch.label}</button>
    </div>
  `;
}

function footerNav(current) {
  const items = [
    { id: "house", emoji: "🏠", label: STRINGS.nav.house, cls: "fn-house" },
    { id: "ehime", emoji: "🤖", label: STRINGS.nav.ehime, cls: "fn-ehime" },
    { id: "help", emoji: "🆘", label: STRINGS.nav.help, cls: "fn-help" },
    { id: "contact", emoji: "📞", label: STRINGS.nav.contact, cls: "fn-contact" },
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

function getPromoModal() {
  let m = document.querySelector(".promo-modal");
  if (!m) {
    m = document.createElement("div");
    m.className = "promo-modal";
    m.innerHTML = `
      <div class="promo-modal-card">
        <div class="promo-title">${CHATGPT_PROMO.title}</div>
        <p class="promo-lead">${CHATGPT_PROMO.lead}</p>
        <p class="promo-note">${CHATGPT_PROMO.note}</p>
        <div class="promo-actions">
          <a class="promo-btn ios" href="${CHATGPT_PROMO.ios.url}" target="_blank" rel="noopener">${CHATGPT_PROMO.ios.label}</a>
          <a class="promo-btn android" href="${CHATGPT_PROMO.android.url}" target="_blank" rel="noopener">${CHATGPT_PROMO.android.label}</a>
        </div>
      </div>
    `;
    m.addEventListener("click", () => closePromoModal());
    document.body.appendChild(m);
  }
  return m;
}

function openPromoModal() {
  const m = getPromoModal();
  m.classList.add("show");
}

function closePromoModal() {
  const m = document.querySelector(".promo-modal");
  if (m) m.classList.remove("show");
}

function getLangModal() {
  let m = document.querySelector(".lang-modal");
  if (!m) {
    m = document.createElement("div");
    m.className = "lang-modal";
    m.innerHTML = `
      <div class="lang-modal-card">
        ${LANG_OPTIONS.map((o) =>
          o.current
            ? `<span class="lang-option current"><span class="lang-flag">${o.flag}</span><span class="lang-label">${o.label}</span><span class="lang-check">✓</span></span>`
            : `<a class="lang-option" href="${o.href}"><span class="lang-flag">${o.flag}</span><span class="lang-label">${o.label}</span></a>`
        ).join("")}
      </div>
    `;
    m.addEventListener("click", (e) => {
      if (e.target === m) closeLangModal();
    });
    document.body.appendChild(m);
  }
  return m;
}

function openLangModal() {
  const m = getLangModal();
  m.classList.add("show");
}

function closeLangModal() {
  const m = document.querySelector(".lang-modal");
  if (m) m.classList.remove("show");
}

function getLightbox() {
  let lb = document.querySelector(".lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `<button class="lightbox-close" onclick="closeLightbox()">✕</button><img class="lightbox-img" alt="" />`;
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLightbox();
    });
    document.body.appendChild(lb);
  }
  return lb;
}

function openLightbox(src, alt) {
  const lb = getLightbox();
  const img = lb.querySelector(".lightbox-img");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("show");
}

function closeLightbox() {
  const lb = document.querySelector(".lightbox");
  if (lb) lb.classList.remove("show");
}

function copyText(text, btnEl) {
  const done = () => {
    toast(STRINGS.toast.copied);
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
    toast(STRINGS.toast.copyFailed);
  }
  document.body.removeChild(ta);
}

/* ---------- ホーム ---------- */
function renderHome() {
  app.innerHTML = `
    ${header()}
    <div class="view">
      <div class="hero">
        <img class="hero-icon" src="${HOME_HERO_ICON}" alt="IYOCAN" />
        <h1>${STRINGS.home.title}</h1>
        <p>${STRINGS.home.subtitle}</p>
      </div>

      <div class="quick-links-row">
        <button class="quick-link-btn ql-promo" onclick="openPromoModal()">${STRINGS.home.qlPromo}</button>
        <button class="quick-link-btn ql-wifi" onclick="navigate('house/wifi')">${STRINGS.home.qlWifi}</button>
      </div>

      <div class="home-cards">
        <button class="home-card main" onclick="navigate('today')">
          <span class="card-badge">${STRINGS.home.mainBadge}</span>
          <span class="card-emoji">${TODAY_PLAN.emoji}</span>
          <span class="card-text">
            <span class="card-title">${TODAY_PLAN.title}</span>
            <span class="card-sub">${TODAY_PLAN.subtitle}</span>
          </span>
          <span class="card-arrow">›</span>
        </button>

        <button class="conquer-card" onclick="navigate('conquer')">
          <span class="card-badge">${STRINGS.home.conquerBadge}</span>
          <span class="card-emoji">🍊</span>
          <span class="card-text">
            <span class="card-title">${STRINGS.home.conquerTitle}</span>
            <span class="card-sub">${STRINGS.home.conquerSub}</span>
          </span>
          <span class="card-arrow">›</span>
        </button>

        <button class="home-card house" onclick="navigate('house')">
          <span class="card-emoji">🏠</span>
          <span class="card-text">
            <span class="card-title">${STRINGS.home.houseTitle}</span>
            <span class="card-sub">${STRINGS.home.houseSub}</span>
          </span>
          <span class="card-arrow">›</span>
        </button>

        <button class="home-card ehime" onclick="navigate('ehime')">
          <span class="card-emoji">🤖</span>
          <span class="card-text">
            <span class="card-title">${STRINGS.home.ehimeTitle}</span>
            <span class="card-sub">${STRINGS.home.ehimeSub}</span>
          </span>
          <span class="card-arrow">›</span>
        </button>

        <button class="home-card help" onclick="navigate('help')">
          <span class="card-emoji">🆘</span>
          <span class="card-text">
            <span class="card-title">${STRINGS.home.helpTitle}</span>
            <span class="card-sub">${STRINGS.home.helpSub}</span>
          </span>
          <span class="card-arrow">›</span>
        </button>
      </div>

      <div class="promo-card">
        <div class="promo-title">${CHATGPT_PROMO.title}</div>
        <p class="promo-lead">${CHATGPT_PROMO.lead}</p>
        <p class="promo-note">${CHATGPT_PROMO.note}</p>
        <div class="promo-actions">
          <a class="promo-btn ios" href="${CHATGPT_PROMO.ios.url}" target="_blank" rel="noopener">${CHATGPT_PROMO.ios.label}</a>
          <a class="promo-btn android" href="${CHATGPT_PROMO.android.url}" target="_blank" rel="noopener">${CHATGPT_PROMO.android.label}</a>
        </div>
      </div>

      <div class="home-cards home-cards-bottom">
        <button class="home-card contact" onclick="navigate('contact')">
          <span class="card-emoji">📞</span>
          <span class="card-text">
            <span class="card-title">${STRINGS.home.contactTitle}</span>
            <span class="card-sub">${STRINGS.home.contactSub}</span>
          </span>
          <span class="card-arrow">›</span>
        </button>
      </div>

      <a class="footer-note" href="#home" onclick="event.preventDefault();window.scrollTo({top:0,behavior:'smooth'})">${STRINGS.home.footerNote}</a>
      <a class="company-link" href="https://maps.app.goo.gl/n9Fxooypt67uuJhM7" target="_blank" rel="noopener">${STRINGS.home.addressText}</a>
      <p class="footer-credit">${STRINGS.home.businessLine}</p>

      <div class="share-row">
        <a class="share-chip" href="https://twitter.com/intent/tweet?url=${encodeURIComponent(location.origin + location.pathname)}&text=${encodeURIComponent(STRINGS.home.shareText)}" target="_blank" rel="noopener">${STRINGS.home.shareX}</a>
        <button class="share-chip" onclick='copyText(location.origin + location.pathname, this)'>${STRINGS.home.copyUrl}</button>
      </div>
    </div>
  `;
}

/* ---------- 🏠 いよ館の使い方 ---------- */
function renderHouseList() {
  app.innerHTML = `
    ${header({ back: "home", title: STRINGS.house.pageTitle })}
    <div class="view">
      ${footerNav("house")}
      <div class="house-hero-video">
        <video class="house-hero-video-el" autoplay loop muted playsinline>
          <source src="assets/house-loop.mp4" type="video/mp4" />
        </video>
        <div class="house-hero-video-overlay"></div>
        <div class="house-hero-video-text">
          <h1 style="font-size:20px;">${STRINGS.house.heroTitle}</h1>
          <p>${STRINGS.house.heroSub}</p>
        </div>
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

  const bodyHtml = f.image
    ? `
      <img src="${f.image}" alt="${f.title}" class="facility-photo" />
      ${f.note ? `<p class="facility-note">${f.note}</p>` : ""}
      ${
        f.password
          ? `
        <div class="wifi-password-row">
          <span class="wifi-password-label">${STRINGS.house.wifiPasswordLabel}</span>
          <span class="wifi-password-value">${f.password}</span>
          <button class="wifi-password-copy" onclick='copyText(${JSON.stringify(f.password)}, this)'>${STRINGS.house.wifiCopyLabel}</button>
        </div>`
          : ""
      }`
    : `
      <div class="detail-photo">${STRINGS.house.photoPlaceholder}</div>
      <ol class="step-list" style="list-style:none;padding:0;">
        ${f.steps
          .map(
            (s, i) => `
          <li><span class="step-num">${i + 1}</span><span>${s}</span></li>`
          )
          .join("")}
      </ol>
      <div class="owner-note">${STRINGS.house.ownerNote}</div>`;

  app.innerHTML = `
    ${header({ back: "house", title: f.title })}
    <div class="view">
      ${bodyHtml}
    </div>
  `;
}

/* ---------- 🤖 愛媛を楽しむ ---------- */
function renderEhimeGrid() {
  app.innerHTML = `
    ${header({ back: "home", title: STRINGS.ehime.pageTitle })}
    <div class="view">
      ${footerNav("ehime")}
      <div class="hero" style="padding-top:6px;">
        <span class="hero-emoji">🤖</span>
        <h1 style="font-size:20px;">${STRINGS.ehime.heroTitle}</h1>
        <p>${STRINGS.ehime.heroSub}</p>
      </div>

      <button class="today-card" onclick="navigate('today')">
        <span class="card-emoji">${TODAY_PLAN.emoji}</span>
        <span class="card-text">
          <span class="card-title">${TODAY_PLAN.title}</span><br/>
          <span class="card-sub">${TODAY_PLAN.subtitle}</span>
        </span>
        <span class="card-arrow" style="margin-left:auto;">›</span>
      </button>

      <div class="section-title">${STRINGS.ehime.categoryHeading}</div>
      <div class="grid-2">
        ${CATEGORIES.map(
          (c) => `
          <button class="tile c-${c.color}" onclick="navigate('ehime/${c.id}')">
            <span class="tile-emoji">${c.emoji}</span>
            <span class="tile-title">${c.title}</span>
          </button>`
        ).join("")}
      </div>
      ${footerNav("ehime")}
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
            <button class="chip-copy" title="${STRINGS.chips.copyTitle}" onclick='copyText(${JSON.stringify(q.prompt)}, this)'>📋</button>
          </div>`
          )
          .join("")}
      </div>
      <p class="footer-note">${STRINGS.chips.footerNote}</p>
    </div>
  `;
}

function sendToChatGPT(prompt) {
  openChatGPT(prompt);
}

/* ---------- 🍊 愛媛を攻め尽くす！ ---------- */
function renderConquerGrid() {
  app.innerHTML = `
    ${header({ back: "home", title: STRINGS.conquer.pageTitle })}
    <div class="view">
      <div class="hero" style="padding-top:6px;">
        <span class="hero-emoji">🍊</span>
        <h1 style="font-size:20px;">${STRINGS.conquer.heroTitle}</h1>
        <p>${STRINGS.conquer.heroSub}</p>
      </div>

      <div class="section-title">${STRINGS.conquer.categoryHeading}</div>
      <div class="grid-2">
        ${[...CONQUER_CATEGORIES]
          .sort((a, b) => (a.id === "michelin" ? -1 : b.id === "michelin" ? 1 : 0))
          .map(
            (c) => `
          <button class="tile c-${c.color}" onclick="navigate('conquer/${c.id}')">
            <span class="tile-emoji">${c.emoji}</span>
            <span class="tile-title">${c.title}</span>
          </button>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderConquerCategory(catId) {
  const c = CONQUER_CATEGORIES.find((x) => x.id === catId);
  if (!c) return renderConquerGrid();
  app.innerHTML = `
    ${header({ back: "conquer", title: c.title })}
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
            <button class="chip-copy" title="${STRINGS.chips.copyTitle}" onclick='copyText(${JSON.stringify(q.prompt)}, this)'>📋</button>
          </div>`
          )
          .join("")}
      </div>
      <p class="footer-note">${STRINGS.chips.footerNote}</p>
    </div>
  `;
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
        <button class="cta-btn" onclick="submitTodayForm()">${STRINGS.today.ctaLabel}</button>
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
    ${header({ back: "home", title: STRINGS.help.pageTitle })}
    <div class="view">
      ${footerNav("help")}
      <div class="hero" style="padding-top:6px;">
        <span class="hero-emoji">🆘</span>
        <h1 style="font-size:20px;">${STRINGS.help.heroTitle}</h1>
        <p>${STRINGS.help.heroSub}</p>
      </div>

      <div class="emergency-banner">
        <div class="emergency-banner-title">${STRINGS.help.emergencyTitle}</div>
        <div class="emergency-actions">
          <a class="emergency-btn" href="tel:119">
            <span>🚑 ${STRINGS.help.emergencyAmbulance}</span>
            <span class="emergency-num">119</span>
          </a>
          <a class="emergency-btn" href="tel:110">
            <span>🚓 ${STRINGS.help.emergencyPolice}</span>
            <span class="emergency-num">110</span>
          </a>
        </div>
      </div>

      <div class="chip-list">
        ${HELP_ITEMS.map(
          (h) => `
          <div class="chip-card">
            <button class="chip-main sos-chip-main" onclick='sendToChatGPT(${JSON.stringify(h.prompt)})'>
              <span class="sos-emoji">${h.emoji}</span>
              <span class="sos-text">
                <span class="sos-title">${h.title}</span>
                <span class="sos-sub">${h.sub}</span>
              </span>
            </button>
            <button class="chip-copy" title="${STRINGS.chips.copyTitle}" onclick='copyText(${JSON.stringify(h.prompt)}, this)'>📋</button>
          </div>`
        ).join("")}
      </div>
      <p class="footer-note">${STRINGS.chips.footerNote}</p>
      ${footerNav("help")}
    </div>
  `;
}

/* ---------- 📞 管理人に連絡 ---------- */
function renderContact() {
  const nameHtml = MANAGER.name
    ? `<div class="contact-name">${MANAGER.name}</div>`
    : `<div class="contact-name is-placeholder">${STRINGS.contact.namePlaceholder}</div>`;

  const telHtml = MANAGER.tel
    ? `<a class="cta-btn contact-tel-btn" href="tel:${MANAGER.tel}">${STRINGS.contact.telLabel(MANAGER.tel)}</a>`
    : `<div class="owner-note">${STRINGS.contact.telPlaceholder}</div>`;

  const lineIdHtml = MANAGER.lineId
    ? `<div class="line-id">${STRINGS.contact.lineIdText(MANAGER.lineId)}</div>`
    : `<div class="line-id is-placeholder">${STRINGS.contact.lineIdPlaceholder}</div>`;

  const lineCtaHtml = MANAGER.lineUrl
    ? `<a class="cta-btn line-cta-btn" href="${MANAGER.lineUrl}" target="_blank" rel="noopener">${STRINGS.contact.lineCtaLabel}</a>`
    : "";

  app.innerHTML = `
    ${header({ back: "home", title: STRINGS.contact.pageTitle })}
    <div class="view">
      ${footerNav("contact")}
      <div class="contact-hero">
        <img src="${MANAGER.photo}" alt="${STRINGS.contact.altManager}" class="contact-photo" onclick="this.classList.toggle('zoomed')" />
        <p class="contact-message">${MANAGER.message}</p>
      </div>

      <div class="contact-card">
        ${nameHtml}
        ${telHtml}
        ${
          MANAGER.sns && MANAGER.sns.length
            ? `<div class="sns-row">
                ${MANAGER.sns
                  .map(
                    (s) => `
                  <a class="sns-btn" href="${s.url}" target="_blank" rel="noopener">
                    <span class="sns-emoji">${s.emoji}</span>
                    <span>${s.label}</span>
                  </a>`
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>

      <div class="section-title">${STRINGS.contact.lineSectionTitle}</div>
      <div class="line-card">
        ${lineCtaHtml}
        ${lineIdHtml}
        <div class="qr-secondary">
          <p class="line-hint">${STRINGS.contact.lineHint}</p>
          <img src="${MANAGER.lineQr}" alt="${STRINGS.contact.altLineQr}" class="line-qr-img is-secondary" />
        </div>
      </div>

      <button class="cert-btn" onclick='openLightbox(${JSON.stringify(CERTIFICATE.image)}, ${JSON.stringify(STRINGS.contact.altCertificate)})'>
        <span class="cert-btn-emoji">📄</span>
        <span class="cert-btn-text">
          <span class="cert-btn-label">${STRINGS.contact.certButtonLabel}</span>
          <span class="cert-btn-number">${STRINGS.contact.certButtonNumber}</span>
        </span>
      </button>

      <div class="section-title">${STRINGS.contact.docSectionTitle}</div>
      <p class="section-desc">${ISSHO_CARD.note}</p>
      <a class="link-card" href="${ISSHO_CARD.url}" target="_blank" rel="noopener">
        <img src="${ISSHO_CARD.image}" alt="${ISSHO_CARD.title}" class="link-card-img" />
        <div class="link-card-body">
          <div class="link-card-title">${ISSHO_CARD.title}</div>
          <div class="link-card-desc">${ISSHO_CARD.description}</div>
          <div class="link-card-url">🔗 issho.jreco.net</div>
        </div>
      </a>
      ${footerNav("contact")}
      <a class="company-link" href="${STRINGS.contact.companyLinkUrl}" target="_blank" rel="noopener">${STRINGS.contact.companyLinkLabel}</a>
    </div>
  `;
}
