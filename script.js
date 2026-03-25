"use strict";

/* ══════════════════════════════════════════════════════════
   BAZA PRODUKTÓW — edytuj tutaj
   ══════════════════════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: 1,
    name: "Carhartt Koszula Kurtka Granatowa L Workwear Vintage Streetwear",
    brand: "Carhartt",
    category: "bluzy",
    size: "L",
    style: ["streetwear", "vintage", "workwear"],
    price: 219.99,
    salePrice: null,
    condition: "Bardzo dobry",
    tags: ["vintage", "oversize", "carhartt"],
    badge: "new",
    sold: false,
    description: "Kultowa koszula-kurtka Carhartt w głębokim granatowym kolorze. Charakterystyczna łatka Carhartt na kieszeni piersiowej, guziki na całej długości, podwójne szwy znak rozpoznawczy marki.",
    images: [
      "https://imgur.com/7Orpi3s?w=800&q=80",
      "https://imgur.com/eupJPq6?w=800&q=80",
      "https://imgur.com/GazXrCi?w=800&q=80",
      "https://imgur.com/rzGVvsb?w=800&q=80"
    ],
    vinted_url: "https://www.vinted.pl/items/8478856334-carhartt-koszula-kurtka-granatowa-l-workwear-vintage-streetwear",
    added: "2026-03-25",
    views: 23,
  }
];

/* ══════════════════════════════════════════════════════════
   ADVANCED FILTER OPTIONS — edytuj tutaj
   ══════════════════════════════════════════════════════════ */
const BRANDS = ["Nike", "Adidas", "Champion", "The North Face", "Columbia", "Ralph Lauren", "Levi's", "Tommy Hilfiger", "Carhartt", "Stüssy", "Supreme", "Patagonia"];
const STYLES = ["streetwear", "vintage", "y2k", "gorpcore", "workwear", "casual", "outdoor", "grunge", "minimalist"];
const SIZES  = ["XS", "S", "M", "L", "XL", "XXL", "Oversize"];

/* ══════════════════════════════════════════════════════════
   OPINIE — edytuj tutaj
   ══════════════════════════════════════════════════════════

   Pola opinii:
   id        – unikalny numer
   name      – imię kupującego
   avatar    – URL zdjęcia profilowego
   stars     – ocena 1-5 (np. 4.5 dla pół gwiazdki)
   comment   – treść opinii
   date      – data w formacie "DD.MM.YYYY"
   likes     – liczba lajków
   ══════════════════════════════════════════════════════════ */
const REVIEWS = [
  {
    id: 1,
    name: "Perełkarnia",
    avatar: "perelkarnia1.png?w=100&q=80",
    stars: 5,
    comment: "Bądź naszą pierwszą opinią!",
    date: "23.03.2026",
    likes: 67,
  },
];

/* ══ COUNTDOWN TARGET (auto: najbliższy czwartek 18:00) ══ */
const NEXT_DROP_DATE = (() => {
  const d = new Date();
  const daysUntil = (6 - d.getDay() + 7) % 7 || 7;
  d.setDate(d.getDate() + daysUntil);
  d.setHours(18, 0, 0, 0);
  return d;
})();

/* ══ STATE ══ */
let activeFilter  = "all";
let activeSort    = "default";
let priceMin      = null;
let priceMax      = null;
let lbImages      = [];
let lbIndex       = 0;
let reviewLikes   = {}; // { id: count }

// Advanced filter state
let advBrands = new Set();
let advStyles = new Set();
let advSizes  = new Set();

/* ══════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════ */
function isSale(p) { return p.salePrice && p.salePrice > p.price && !p.sold; }

function getFiltered() {
  let list = PRODUCTS.filter(p => !p.sold).filter(p => {
    if (activeFilter === "sale")  return isSale(p);
    if (activeFilter !== "all")   return p.category === activeFilter;
    return true;
  }).filter(p => {
    if (priceMin !== null && p.price < priceMin) return false;
    if (priceMax !== null && p.price > priceMax) return false;
    return true;
  }).filter(p => {
    if (advBrands.size > 0 && !advBrands.has(p.brand)) return false;
    if (advSizes.size  > 0 && !advSizes.has(p.size))   return false;
    if (advStyles.size > 0) {
      const pStyles = p.style || [];
      if (!pStyles.some(s => advStyles.has(s))) return false;
    }
    return true;
  });

  switch (activeSort) {
    case "price-asc":  list.sort((a,b) => a.price - b.price); break;
    case "price-desc": list.sort((a,b) => b.price - a.price); break;
    case "newest":     list.sort((a,b) => b.added.localeCompare(a.added)); break;
    case "sale":       list = list.filter(isSale).concat(list.filter(p=>!isSale(p))); break;
  }
  return list;
}

function badgeMarkup(p) {
  if (p.sold)    return `<span class="product-card__badge badge--sold">Sprzedane</span>`;
  if (isSale(p)) return `<span class="product-card__badge badge--sale">SALE</span>`;
  if (p.badge === "new") return `<span class="product-card__badge badge--new">Nowość</span>`;
  if (p.badge === "hot") return `<span class="product-card__badge badge--hot">🔥 Hot</span>`;
  return "";
}

function priceMarkup(p, large = false) {
  const cls = large ? "pdetail__price" : "product-card__price";
  const origCls = large ? "pdetail__price--original" : "product-card__price--original";
  const saleCls = large ? "pdetail__price--sale" : "product-card__price--sale";

  if (p.sold) {
    return `<div class="${large?"pdetail__prices":"product-card__prices"}">
      <span class="${cls} ${large?"":"product-card__price--sold"}">${p.price} zł</span>
    </div>`;
  }
  if (isSale(p)) {
    return `<div class="${large?"pdetail__prices":"product-card__prices"}">
      <span class="${cls} ${saleCls}">${p.price} zł</span>
      <span class="${origCls}">${p.salePrice} zł</span>
    </div>`;
  }
  return `<div class="${large?"pdetail__prices":"product-card__prices"}">
    <span class="${cls}">${p.price} zł</span>
  </div>`;
}

function starsMarkup(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '<span class="review-card__star full">★</span>';
    else if (rating >= i - 0.5) html += '<span class="review-card__star half">½</span>';
    else html += '<span class="review-card__star">★</span>';
  }
  return html;
}

/* ══════════════════════════════════════════════════════════
   HERO FLOATING CARDS
   ══════════════════════════════════════════════════════════ */
function initHeroFloatingCards() {
  const stack = document.getElementById("heroCardStack");
  if (!stack) return;
  const featured = PRODUCTS.filter(p => !p.sold && p.images[0]).slice(0, 3);
  if (!featured.length) return;

  const positions = [
    { top: "10%", left: "15%", rot: "-7deg", w: "200px", h: "270px", delay: "0s" },
    { top: "25%", right: "5%",  rot: "6deg",  w: "175px", h: "240px", delay: "0.4s" },
    { top: "55%", left: "5%",  rot: "3deg",  w: "160px", h: "215px", delay: "0.8s" },
  ];

  featured.forEach((p, i) => {
    const pos = positions[i];
    const card = document.createElement("div");
    card.className = "hero__float-card";
    Object.assign(card.style, {
      width: pos.w, height: pos.h,
      top: pos.top || "auto", bottom: pos.bottom || "auto",
      left: pos.left || "auto", right: pos.right || "auto",
      animationDelay: pos.delay,
    });
    card.innerHTML = `
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
      <div class="float-card__label">
        <div class="float-card__brand">${p.brand}</div>
        <div class="float-card__price">${p.price} zł</div>
      </div>
    `;
    stack.appendChild(card);
  });
}

/* ══════════════════════════════════════════════════════════
   RENDER PRODUCT GRID
   ══════════════════════════════════════════════════════════ */
function renderProducts() {
  const grid  = document.getElementById("productsGrid");
  const empty = document.getElementById("productsEmpty");
  const list  = getFiltered();

  grid.innerHTML = "";

  if (!list.length) {
    grid.style.display  = "none";
    empty.style.display = "block";
    return;
  }
  grid.style.display  = "grid";
  empty.style.display = "none";

  list.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.animationDelay = `${i * 50}ms`;

    const tags = p.tags.slice(0,3).map(t => `<span class="product-card__tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="product-card__img-wrap">
        <img class="product-card__img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        ${badgeMarkup(p)}
        <div class="product-card__zoom-hint" aria-hidden="true">⊕</div>
      </div>
      <div class="product-card__info">
        <div class="product-card__cat">${p.brand} · ${p.size}</div>
        <div class="product-card__name">${p.name}</div>
        <div class="product-card__meta">${tags}</div>
        <div class="product-card__footer">
          ${priceMarkup(p)}
          <button class="product-card__btn" data-id="${p.id}" data-action="vinted">Kup na Vinted ↗</button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-action='vinted']")) {
        e.stopPropagation();
        window.open(p.vinted_url, "_blank", "noopener,noreferrer");
        return;
      }
      openProductDetail(p.id);
    });

    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════════════════
   SOLD SECTION
   ══════════════════════════════════════════════════════════ */
function soldCardHTML(p) {
  return `
    <div class="sold-card" data-id="${p.id}">
      <div class="sold-card__img-wrap">
        <img class="sold-card__img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        <div class="sold-card__overlay">
          <span class="sold-card__sold-badge">Sprzedane</span>
        </div>
      </div>
      <div class="sold-card__info">
        <div class="sold-card__name">${p.name}</div>
        <div class="sold-card__price">${p.price} zł</div>
      </div>
    </div>
  `;
}

function renderSold() {
  const sold = PRODUCTS.filter(p => p.sold);
  const grid = document.getElementById("soldGrid");
  const moreBtn = document.getElementById("soldMoreBtn");
  if (!grid || !sold.length) { document.getElementById("soldSection").style.display = "none"; return; }

  const preview = sold.slice(0, 3);
  grid.innerHTML = preview.map(soldCardHTML).join("");

  if (sold.length > 3) {
    moreBtn.style.display = "flex";
    moreBtn.addEventListener("click", openSoldModal);
  }

  // click any sold card → open detail
  grid.querySelectorAll(".sold-card").forEach(el => {
    el.addEventListener("click", () => openProductDetail(parseInt(el.dataset.id)));
  });
}

function openSoldModal() {
  const sold = PRODUCTS.filter(p => p.sold);
  document.getElementById("soldModalGrid").innerHTML = sold.map(soldCardHTML).join("");
  document.getElementById("soldModal").classList.add("open");
  document.body.style.overflow = "hidden";

  document.getElementById("soldModalGrid").querySelectorAll(".sold-card").forEach(el => {
    el.addEventListener("click", () => openProductDetail(parseInt(el.dataset.id)));
  });
}

function closeSoldModal() {
  document.getElementById("soldModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ══════════════════════════════════════════════════════════
   REVIEWS
   ══════════════════════════════════════════════════════════ */
function reviewCardHTML(r, compact = false) {
  const likes = reviewLikes[r.id] !== undefined ? reviewLikes[r.id] : r.likes;
  return `
    <div class="review-card" data-review-id="${r.id}">
      <div class="review-card__header">
        <div class="review-card__avatar">
          <img src="${r.avatar}" alt="${r.name}" loading="lazy" />
        </div>
        <div class="review-card__meta">
          <div class="review-card__name">${r.name}</div>
          <div class="review-card__date">${r.date}</div>
        </div>
      </div>
      <div class="review-card__stars">${starsMarkup(r.stars)}</div>
      <div class="review-card__text">${r.comment}</div>
      <div class="review-card__footer">
        <button class="review-card__likes${reviewLikes['liked_'+r.id] ? ' liked' : ''}" data-review-like="${r.id}">
          ♡ <span class="likes-count">${likes}</span>
        </button>
        <span class="review-card__badge-vinted">Vinted ✓</span>
      </div>
    </div>
  `;
}

function bindLikeButtons(container) {
  container.querySelectorAll("[data-review-like]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.reviewLike);
      const r  = REVIEWS.find(x => x.id === id);
      if (!r) return;
      const liked = reviewLikes['liked_'+id];
      if (liked) {
        reviewLikes[id] = (reviewLikes[id] ?? r.likes) - 1;
        reviewLikes['liked_'+id] = false;
        btn.classList.remove("liked");
      } else {
        reviewLikes[id] = (reviewLikes[id] ?? r.likes) + 1;
        reviewLikes['liked_'+id] = true;
        btn.classList.add("liked");
      }
      btn.querySelector(".likes-count").textContent = reviewLikes[id];
    });
  });
}

function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  const moreBtn = document.getElementById("reviewsMoreBtn");
  if (!grid || !REVIEWS.length) return;

  const preview = REVIEWS.slice(0, 3);
  grid.innerHTML = preview.map(r => reviewCardHTML(r)).join("");
  bindLikeButtons(grid);

  if (REVIEWS.length > 3) {
    moreBtn.style.display = "flex";
    moreBtn.addEventListener("click", openReviewsModal);
  }
}

function getSortedReviews(sort) {
  const copy = [...REVIEWS];
  if (sort === "stars-desc") copy.sort((a,b) => b.stars - a.stars);
  else if (sort === "stars-asc") copy.sort((a,b) => a.stars - b.stars);
  else if (sort === "likes") copy.sort((a,b) => (reviewLikes[b.id]??b.likes) - (reviewLikes[a.id]??a.likes));
  return copy;
}

function openReviewsModal(sort = "default") {
  const list = document.getElementById("reviewsModalList");
  const sorted = getSortedReviews(sort);
  list.innerHTML = sorted.map(r => `
    <div class="reviews-modal__item">
      <div class="review-card__avatar" style="width:44px;height:44px;border-radius:50%;overflow:hidden;flex-shrink:0;">
        <img src="${r.avatar}" alt="${r.name}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <div style="flex:1;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px;">
          <span style="font-size:0.9rem;font-weight:500;color:var(--white);">${r.name}</span>
          <span style="font-family:var(--font-mono);font-size:0.6rem;color:var(--gray-4);">${r.date}</span>
          <span style="margin-left:auto;font-family:var(--font-mono);font-size:0.58rem;color:var(--gray-3);background:var(--gray-2);padding:2px 7px;">Vinted ✓</span>
        </div>
        <div class="review-card__stars" style="margin-bottom:8px;">${starsMarkup(r.stars)}</div>
        <p style="font-size:0.88rem;color:var(--gray-4);line-height:1.7;margin-bottom:10px;">${r.comment}</p>
        <button class="review-card__likes${reviewLikes['liked_'+r.id]?' liked':''}" data-review-like="${r.id}">
          ♡ <span class="likes-count">${reviewLikes[r.id]??r.likes}</span>
        </button>
      </div>
    </div>
  `).join("");
  bindLikeButtons(list);
  document.getElementById("reviewsModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeReviewsModal() {
  document.getElementById("reviewsModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ══════════════════════════════════════════════════════════
   ADVANCED FILTER
   ══════════════════════════════════════════════════════════ */
function initAdvFilter() {
  // Build chips
  const brandEl = document.getElementById("brandChips");
  const styleEl = document.getElementById("styleChips");
  const sizeEl  = document.getElementById("sizeChips");

  function buildChips(container, items, activeSet, onChange) {
    items.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "adv-chip";
      btn.textContent = item;
      btn.addEventListener("click", () => {
        if (activeSet.has(item)) { activeSet.delete(item); btn.classList.remove("active"); }
        else { activeSet.add(item); btn.classList.add("active"); }
        updateAdvFilterCount();
        renderProducts();
      });
      container.appendChild(btn);
    });
  }

  buildChips(brandEl, BRANDS, advBrands);
  buildChips(styleEl, STYLES, advStyles);
  buildChips(sizeEl,  SIZES,  advSizes);

  // Toggle panel
  const toggle = document.getElementById("advFilterToggle");
  const panel  = document.getElementById("advFilterPanel");
  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    toggle.classList.toggle("open", open);
  });
  // Close on click outside
  document.addEventListener("click", (e) => {
    if (!document.getElementById("advFilter").contains(e.target)) {
      panel.classList.remove("open");
      toggle.classList.remove("open");
    }
  });

  // Clear
  document.getElementById("advFilterClear").addEventListener("click", () => {
    advBrands.clear(); advStyles.clear(); advSizes.clear();
    document.querySelectorAll(".adv-chip.active").forEach(c => c.classList.remove("active"));
    updateAdvFilterCount();
    renderProducts();
  });
}

function updateAdvFilterCount() {
  const total = advBrands.size + advStyles.size + advSizes.size;
  const el = document.getElementById("advFilterCount");
  el.textContent = total;
  el.classList.toggle("visible", total > 0);
}

/* ══════════════════════════════════════════════════════════
   PRODUCT DETAIL OVERLAY
   ══════════════════════════════════════════════════════════ */
function openProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const overlay = document.getElementById("pdetail");
  const inner   = document.getElementById("pdetailInner");

  const thumbsHTML = p.images.map((src, i) => `
    <div class="pdetail__thumb ${i===0?"active":""}" data-idx="${i}">
      <img src="${src}" alt="${p.name} — zdjęcie ${i+1}" loading="lazy" />
    </div>
  `).join("");

  const tags = p.tags.map(t => `<span class="pdetail__tag">${t}</span>`).join("");
  const saleBadge = isSale(p) ? `<span class="pdetail__sale-badge">-${Math.round((1-(p.price/p.salePrice))*100)}%</span>` : "";

  inner.innerHTML = `
    <button class="pdetail__back" id="pdetailBack">← Wróć do dropu</button>
    <div class="pdetail__layout">
      <div class="pdetail__gallery">
        <div class="pdetail__main-img" id="pdetailMainImg">
          <img id="pdetailMainImgEl" src="${p.images[0]}" alt="${p.name}" />
        </div>
        ${p.images.length > 1 ? `<div class="pdetail__thumbs" id="pdetailThumbs">${thumbsHTML}</div>` : ""}
      </div>
      <div class="pdetail__info">
        <div class="pdetail__brand">${p.brand} ${saleBadge}</div>
        <h1 class="pdetail__name">${p.name}</h1>
        ${priceMarkup(p, true)}
        <hr class="pdetail__divider" />
        <div class="pdetail__meta">
          <div class="pdetail__meta-item">
            <span class="pdetail__meta-key">Rozmiar</span>
            <span class="pdetail__meta-val">${p.size}</span>
          </div>
          <div class="pdetail__meta-item">
            <span class="pdetail__meta-key">Stan</span>
            <span class="pdetail__meta-val">${p.condition}</span>
          </div>
          <div class="pdetail__meta-item">
            <span class="pdetail__meta-key">Kategoria</span>
            <span class="pdetail__meta-val">${p.category}</span>
          </div>
          <div class="pdetail__meta-item">
            <span class="pdetail__meta-key">Status</span>
            <span class="pdetail__meta-val">${p.sold ? "Sprzedane" : "Dostępne"}</span>
          </div>
        </div>
        <div class="pdetail__tags">${tags}</div>
        <hr class="pdetail__divider" />
        <p class="pdetail__desc">${p.description}</p>
        <div class="pdetail__cta">
          ${p.sold
            ? `<button class="pdetail__btn pdetail__btn--sold" disabled>Sprzedane</button>`
            : `<a href="${p.vinted_url}" target="_blank" rel="noopener noreferrer" class="pdetail__btn">Kup na Vinted ↗</a>`
          }
          <p class="pdetail__bundle-note">🛍️ Kup 2+ sztuki z naszego profilu i zapłać <strong>5% mniej</strong></p>
        </div>
      </div>
    </div>
  `;

  inner.querySelectorAll(".pdetail__thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = parseInt(thumb.dataset.idx);
      document.getElementById("pdetailMainImgEl").src = p.images[idx];
      inner.querySelectorAll(".pdetail__thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  inner.querySelector("#pdetailMainImg").addEventListener("click", () => {
    const activeThumb = inner.querySelector(".pdetail__thumb.active");
    const idx = activeThumb ? parseInt(activeThumb.dataset.idx) : 0;
    openLightbox(p.images, idx);
  });

  inner.querySelector("#pdetailBack").addEventListener("click", closeProductDetail);

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  overlay.scrollTop = 0;
}

function closeProductDetail() {
  document.getElementById("pdetail").classList.remove("open");
  document.body.style.overflow = "";
}

/* ══════════════════════════════════════════════════════════
   LIGHTBOX
   ══════════════════════════════════════════════════════════ */
function openLightbox(images, startIndex = 0) {
  lbImages = Array.isArray(images) ? images : [images];
  lbIndex  = startIndex;
  updateLightboxImage();
  document.getElementById("lightbox").classList.add("open");
}

function updateLightboxImage() {
  const img = document.getElementById("lightboxImg");
  img.src = lbImages[lbIndex];
  document.getElementById("lbPrev").style.display = lbImages.length > 1 ? "flex" : "none";
  document.getElementById("lbNext").style.display = lbImages.length > 1 ? "flex" : "none";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

/* ══════════════════════════════════════════════════════════
   COUNTDOWN
   ══════════════════════════════════════════════════════════ */
function updateCountdown() {
  const diff = NEXT_DROP_DATE - new Date();
  if (diff <= 0) {
    ["cdDays","cdHours","cdMins","cdSecs"].forEach(id => document.getElementById(id).textContent = "00");
    return;
  }
  const pad = n => String(Math.floor(n)).padStart(2,"0");
  document.getElementById("cdDays").textContent  = pad(diff/86400000);
  document.getElementById("cdHours").textContent = pad((diff%86400000)/3600000);
  document.getElementById("cdMins").textContent  = pad((diff%3600000)/60000);
  document.getElementById("cdSecs").textContent  = pad((diff%60000)/1000);
}

/* ══════════════════════════════════════════════════════════
   STAT COUNTER ANIMATION
   ══════════════════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1600) {
  const start = performance.now();
  (function step(ts) {
    const p = Math.min((ts - start) / duration, 1);
    const e = 1 - Math.pow(1-p, 3);
    el.textContent = Math.round(e * target);
    if (p < 1) requestAnimationFrame(step);
  })(performance.now());
}

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════════════════ */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════════════════════
   NAV
   ══════════════════════════════════════════════════════════ */
function initNav() {
  const nav    = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const menu   = document.getElementById("mobileMenu");

  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 60), { passive: true });

  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll(".mm__link").forEach(l => l.addEventListener("click", () => {
    menu.classList.remove("open"); burger.classList.remove("open");
  }));
}

/* ══════════════════════════════════════════════════════════
   FILTERS, SORT, PRICE RANGE
   ══════════════════════════════════════════════════════════ */
function initControls() {
  document.querySelectorAll(".filter__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter__btn.active")?.classList.remove("active");
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  document.getElementById("sortSelect").addEventListener("change", e => {
    activeSort = e.target.value;
    if (activeSort === "sale") {
      document.querySelector(".filter__btn.active")?.classList.remove("active");
      document.querySelector("[data-filter='all']")?.classList.add("active");
      activeFilter = "all";
    }
    renderProducts();
  });

  document.getElementById("priceApply").addEventListener("click", () => {
    const minVal = document.getElementById("priceMin").value;
    const maxVal = document.getElementById("priceMax").value;
    priceMin = minVal !== "" ? parseFloat(minVal) : null;
    priceMax = maxVal !== "" ? parseFloat(maxVal) : null;
    renderProducts();
  });

  ["priceMin","priceMax"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => {
      if (e.key === "Enter") document.getElementById("priceApply").click();
    });
  });
}

/* ══════════════════════════════════════════════════════════
   STAT COUNTERS
   ══════════════════════════════════════════════════════════ */
function initStatCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, parseInt(e.target.dataset.target, 10));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".stat__num").forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initHeroFloatingCards();
  renderProducts();
  renderSold();
  renderReviews();
  initReveal();
  initNav();
  initControls();
  initAdvFilter();
  initStatCounters();
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Lightbox controls
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => {
    lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
    updateLightboxImage();
  });
  document.getElementById("lbNext").addEventListener("click", () => {
    lbIndex = (lbIndex + 1) % lbImages.length;
    updateLightboxImage();
  });
  document.getElementById("lightbox").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  // Product detail overlay
  document.getElementById("pdetail").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeProductDetail();
  });

  // Reviews modal
  document.getElementById("reviewsModalClose").addEventListener("click", closeReviewsModal);
  document.getElementById("reviewsModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeReviewsModal();
  });
  document.getElementById("reviewsModalSort").addEventListener("change", e => {
    openReviewsModal(e.target.value);
  });

  // Sold modal
  document.getElementById("soldModalClose").addEventListener("click", closeSoldModal);
  document.getElementById("soldModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeSoldModal();
  });

  // Keyboard
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (document.getElementById("lightbox").classList.contains("open"))      { closeLightbox(); return; }
      if (document.getElementById("pdetail").classList.contains("open"))       { closeProductDetail(); return; }
      if (document.getElementById("reviewsModal").classList.contains("open"))  { closeReviewsModal(); return; }
      if (document.getElementById("soldModal").classList.contains("open"))     { closeSoldModal(); return; }
    }
    if (document.getElementById("lightbox").classList.contains("open")) {
      if (e.key === "ArrowLeft")  { lbIndex = (lbIndex-1+lbImages.length)%lbImages.length; updateLightboxImage(); }
      if (e.key === "ArrowRight") { lbIndex = (lbIndex+1)%lbImages.length; updateLightboxImage(); }
    }
  });
});
