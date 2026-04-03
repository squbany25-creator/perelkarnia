"use strict";

/* ══════════════════════════════════════════════════════════
   BAZA PRODUKTÓW — edytuj tutaj
   ══════════════════════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: 1,
    name: "Carhartt Koszula-Kurtka Granatowa",
    brand: "Carhartt",
    category: "inne",
    size: "L",
    price: 188.99,
    salePrice: 219.99,
    condition: "Bardzo dobry",
    tags: ["vintage", "L", "carhartt"],
    badge: "new",
    sold: false,
    description: "Kultowa koszula-kurtka Carhartt w głębokim granatowym kolorze. Charakterystyczna łatka Carhartt na kieszeni piersiowej, guziki na całej długości, podwójne szwy znak rozpoznawczy marki.",
    images: [
      "photos/1-0.png?w=800&q=80",
      "photos/1-1.jpg?w=800&q=80",
      "photos/1-2.jpg?w=800&q=80",
      "photos/1-3.jpg?w=800&q=80",
      "photos/1-4.jpg?w=800&q=80",
      "photos/1-5.jpg?w=800&q=80",
    ],
    vinted_url: "https://www.vinted.pl/items/8478856334-carhartt-koszula-kurtka-granatowa-l-workwear-vintage-streetwear",
    added: "2026-03-25",
  },
  {
    id: 2,
    name: "Hugo Boss Bluza Granatowa",
    brand: "Hugo Boss",
    category: "bluzy",
    size: "XXL",
    price: 58.99,
    salePrice: 99.99,
    condition: "Bardzo dobry",
    tags: ["vintage", "XXL", "hugo boss"],
    badge: "new",
    sold: false,
    description: "Bluza Hugo Boss z dużym trójwymiarowym haftowanym logo BOSS na przodzie premium wykończenie charakterystyczne dla tej marki. Granatowy kolor, miękka bawełna, gruba gramatura.",
    images: [
      "photos/4-0.png?w=800&q=80",
      "photos/4-1.jpg?w=800&q=80",
      "photos/4-2.jpg?w=800&q=80",
      "photos/4-3.jpg?w=800&q=80",
      "photos/4-4.jpg?w=800&q=80",
      "photos/4-5.jpg?w=800&q=80",
    ],
    vinted_url: "https://www.vinted.pl/items/8478923498-hugo-boss-bluza-granatowa-haftowane-xxl-logo-premium-streetwear-vintage",
    added: "2026-03-25",
  },
  {
    id: 3,
    name: "4F Kurtka Różowa",
    brand: "4F",
    category: "kurtki",
    size: "XL",
    price: 78.99,
    salePrice: null,
    condition: "Bardzo dobry",
    tags: ["outdoor", "XL", "4f"],
    badge: "hot",
    sold: false,
    description: "Kurtka 4F w pięknym kolorze dusty rose / łososiowy róż odcień który jest teraz bardzo modny i świetnie komponuje się z neutralnymi stylizacjami. Miękki materiał softshell lekko wiatroszczelny, przyjemny w dotyku, oddychający.",
    images: [
      "photos/7-0.png?w=800&q=80",
      "photos/7-1.jpg?w=800&q=80",
      "photos/7-2.jpg?w=800&q=80",
      "photos/7-3.jpg?w=800&q=80",
      "photos/7-4.jpg?w=800&q=80",
      "photos/7-5.jpg?w=800&q=80",
      "photos/7-6.jpg?w=800&q=80",
    ],
    vinted_url: "https://www.vinted.pl/items/8504188461-4f-kurtka-softshell-rozowa-xl-dusty-rose-damska-kaptur-outdoor-wiosenna-sportowa",
    added: "2026-03-25",
  },
  {
    id: 4,
    name: "Sukienka Maxi Kwiatowa Biało-Granatowa",
    brand: "Inne",
    category: "inne",
    size: "XL",
    price: 48.99,
    salePrice: null,
    condition: "Bardzo dobry",
    tags: ["outdoor", "XL", "maxi"],
    badge: "new",
    sold: false,
    description: "Przepiękna sukienka maxi z motywem botanicznym w odcieniach bieli, granatu i błękitu. Trójpoziomowa spódnica, żółte przeszycia jako akcent, okrągły dekolt z rozcięciem.",
    images: [
      "photos/15-0.png?w=800&q=80",
      "photos/15-1.jpg?w=800&q=80",
      "photos/15-2.jpg?w=800&q=80",
      "photos/15-3.jpg?w=800&q=80"
    ],
    vinted_url: "https://www.vinted.pl/items/8504306074-sukienka-maxi-kwiatowa-biala-granatowa-xl-wzor-botaniczny-lato-elegant",
    added: "2026-03-25",
  },
  {
    id: 5,
    name: "Nike Air Max Bluza Szara",
    brand: "Nike",
    category: "bluzy",
    size: "M",
    price: 48.99,
    salePrice: 59.99,
    condition: "Bardzo dobry",
    tags: ["streetwear", "M", "nike"],
    badge: "new",
    sold: false,
    description: "Bluza Nike z haftowanym (nie drukowanym!) logo Air Max i Swoosh na piersi. Szary melanż, gruba bawełna, ściągacze na dole i rękawach. Haft zamiast nadruku = wyższa jakość i trwałość.",
    images: [
      "photos/8-0.png?w=800&q=80",
      "photos/8-1.jpg?w=800&q=80",
      "photos/8-2.jpg?w=800&q=80",
      "photos/8-3.jpg?w=800&q=80",
      "photos/8-4.jpg?w=800&q=80",
      "photos/8-5.jpg?w=800&q=80"
    ],
    vinted_url: "https://www.vinted.pl/items/8527440421-nike-air-max-bluza-crewneck-szara-haft-swoosh-m-streetwear-vintage",
    added: "2026-03-25",
  },
  {
    id: 6,
    name: "Adidas Koszulka Biała",
    brand: "Adidas",
    category: "koszulki",
    size: "XL",
    price: 38.99,
    salePrice: 49.99,
    condition: "Bardzo dobry",
    tags: ["streetwear", "XL", "adidas"],
    badge: "new",
    sold: false,
    description: "Klasyczny biały t-shirt Adidas z dużym czarnym box logo. Distressed / grunge efekt nadruku nadaje retro charakteru. Czysta bawełna, miękka w dotyku.",
    images: [
      "photos/12-0.png?w=800&q=80",
      "photos/12-1.jpg?w=800&q=80",
      "photos/12-2.jpg?w=800&q=80",
      "photos/12-3.jpg?w=800&q=80",
      "photos/12-4.jpg?w=800&q=80",
    ],
    vinted_url: "https://www.vinted.pl/items/8527511575-adidas-koszulka-t-shirt-biala-xl-box-logo-czarny-nadruk-vintage-streetwear",
    added: "2026-03-25",
  },
  {
    id: 7,
    name: "Tommy Jeans Bluza Bordowa-Czerwona",
    brand: "Tommy Jeans",
    category: "bluzy",
    size: "S",
    price: 48.99,
    salePrice: 59.99,
    condition: "Bardzo dobry",
    tags: ["streetwear", "M", "tommy jeans"],
    badge: "new",
    sold: false,
    description: "Bluza z kapturem Tommy Jeans w kolorze bordowym / malinowym. Biała taśma Tommy Jeans wzdłuż rękawów, małe logo TJ na piersi. Sznurek kaptura z logo.",
    images: [
      "photos/11-0.png?w=800&q=80",
      "photos/11-1.jpg?w=800&q=80",
      "photos/11-2.jpg?w=800&q=80",
      "photos/11-3.jpg?w=800&q=80",
      "photos/11-4.jpg?w=800&q=80",
      "photos/11-5.jpg?w=800&q=80",
      "photos/11-6.jpg?w=800&q=80",
      "photos/11-7.jpg?w=800&q=80"
    ],
    vinted_url: "https://www.vinted.pl/items/8527688422-tommy-jeans-hoodie-cropped-bordowa-czerwona-tasma-logo-damska-oversize",
    added: "2026-03-25",
  },
  {
    id: 8,
    name: "Lacoste Polo Granatowa",
    brand: "Lacoste",
    category: "koszulki",
    size: "XL",
    price: 48.99,
    salePrice: 59.99,
    condition: "Bardzo dobry",
    tags: ["workwear", "XL", "lacoste"],
    badge: "new",
    sold: false,
    description: "Kultowa koszulka polo Lacoste z ikonicznym haftowanym krokodylem na piersi. Głęboki granat, charakterystyczny splot piqué znak rozpoznawczy marki od 1933 roku.",
    images: [
      "photos/17-0.png?w=800&q=80",
      "photos/17-1.jpg?w=800&q=80",
      "photos/17-2.jpg?w=800&q=80",
      "photos/17-3.jpg?w=800&q=80",
      "photos/17-4.jpg?w=800&q=80",
    ],
    vinted_url: "https://www.vinted.pl/items/8527823136-lacoste-polo-granatowe-krokodyl-xl-haft-klasyczne-pique-vintage-preppy",
    added: "2026-03-25",
  },
  {
    id: 9,
    name: "Champion Track Jacket Błękitna",
    brand: "Champion",
    category: "bluzy",
    size: "M",
    price: 48.99,
    salePrice: 99.99,
    condition: "Bardzo dobry",
    tags: ["streetwear", "M", "champion"],
    badge: "new",
    sold: false,
    description: "Kultowa kurtka Champion w kolorze baby blue z czarnymi taśmami logo Champion na całej długości rękawów. Script logo Champion na piersi. Błyszczący materiał tracksuit typowy dla retro kolekcji Champion. Unikalna kolorystyka baby blue + czarne paski = jeden z najbardziej rozpoznawalnych wzorów marki.",
    images: [
      "photos/9-0.png?w=800&q=80",
      "photos/9-1.jpg?w=800&q=80",
      "photos/9-2.jpg?w=800&q=80",
      "photos/9-3.jpg?w=800&q=80",
      "photos/9-4.jpg?w=800&q=80",
      "photos/9-5.jpg?w=800&q=80",
      "photos/9-6.jpg?w=800&q=80",
    ],
    vinted_url: "https://www.vinted.pl/items/8534789422-champion-track-jacket-blekitna-tasma-logo-baby-blue-vintage-retro-streetwear",
    added: "2026-03-25",
  },
  {
    id: 10,
    name: "Hugo Boss Koszulka Polo Czarna",
    brand: "Hugo Boss",
    category: "koszulki",
    size: "S",
    price: 38.99,
    salePrice: 49.99,
    condition: "Bardzo dobry",
    tags: ["workwear", "S", "hugo boss"],
    badge: "new",
    sold: false,
    description: "Koszulka polo Hugo Boss z linii Pima Cotton widoczna metka PIMA COTTON / BOSS HUGO BOSS. Pima Cotton to wyjątkowo miękka, premium bawełna egipska wyższa jakość niż standardowe polo. Czarny/granatowy kolor, kołnierzyk polo, guziki przy dekolcie.",
    images: [
      "photos/16-0.png?w=800&q=80",
      "photos/16-1.jpg?w=800&q=80",
      "photos/16-2.jpg?w=800&q=80",
      "photos/16-3.jpg?w=800&q=80",
      "photos/16-4.jpg?w=800&q=80",
      "photos/16-5.jpg?w=800&q=80"
    ],
    vinted_url: "https://www.vinted.pl/items/8534848765-hugo-boss-polo-pima-cotton-czarne-premium-koszulka-polo-granatowa-meska",
    added: "2026-03-25",
  }
];

/* ══════════════════════════════════════════════════════════
   ADVANCED FILTER OPTIONS — edytuj tutaj
   ══════════════════════════════════════════════════════════ */
const BRANDS = ["Nike", "Adidas", "Lacoste", "Hugo boss", "4F", "Champion", "The North Face", "Columbia", "Ralph Lauren", "Levi's", "Tommy Hilfiger", "Carhartt", "Stüssy", "Supreme", "Patagonia"];
const STYLES = ["streetwear", "vintage", "y2k", "gorpcore", "workwear", "casual", "outdoor", "sportswear", "retro"];
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
   HERO SHOWCASE SLIDESHOW
   ══════════════════════════════════════════════════════════ */
let showcaseIndex = 0;
let showcaseItems = [];
let showcaseTimer = null;

function initHeroShowcase() {
  const wrap = document.getElementById("heroShowcase");
  if (!wrap) return;

  const available = PRODUCTS.filter(p => !p.sold && p.images && p.images[0]);
  if (!available.length) {
    const w = document.querySelector(".hero__showcase-wrap");
    if (w) w.style.display = "none";
    return;
  }

  const shuffled = [...available].sort(() => Math.random() - 0.5).slice(0, 5);
  showcaseItems = shuffled;
  wrap.innerHTML = '';

  shuffled.forEach((p, i) => {
    const slide = document.createElement("div");
    slide.className = "showcase__slide" + (i === 0 ? " active" : "");
    slide.dataset.id = p.id;
    slide.innerHTML = `
      <img class="showcase__img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
      <div class="showcase__fade-top"></div>
      <div class="showcase__fade-bottom"></div>
      <div class="showcase__info">
        <div class="showcase__brand">${p.brand}</div>
        <div class="showcase__name">${p.name}</div>
        <div class="showcase__price">${p.price} zł</div>
      </div>
    `;
    slide.addEventListener("click", () => openProductDetail(p.id));
    wrap.appendChild(slide);
  });

  const dots = document.getElementById("showcaseDots");
  if (dots) {
    dots.innerHTML = shuffled.map((_, i) =>
      `<button class="showcase__dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Slide ${i+1}"></button>`
    ).join('');
    dots.querySelectorAll(".showcase__dot").forEach(btn => {
      btn.addEventListener("click", e => { e.stopPropagation(); goToSlide(parseInt(btn.dataset.idx)); });
    });
  }

  startShowcaseTimer();
}

function goToSlide(idx) {
  document.querySelectorAll(".showcase__slide").forEach((s, i) => s.classList.toggle("active", i === idx));
  document.querySelectorAll(".showcase__dot").forEach((d, i) => d.classList.toggle("active", i === idx));
  showcaseIndex = idx;
  startShowcaseTimer();
}

function startShowcaseTimer() {
  if (showcaseTimer) clearInterval(showcaseTimer);
  if (!showcaseItems.length) return;
  showcaseTimer = setInterval(() => {
    goToSlide((showcaseIndex + 1) % showcaseItems.length);
  }, 3000);
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

    card.innerHTML = `
      <div class="product-card__img-wrap">
        <img class="product-card__img" src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        ${badgeMarkup(p)}
        <div class="product-card__zoom-hint" aria-hidden="true">⊕</div>
      </div>
      <div class="product-card__info">
        <div class="product-card__cat">${p.brand} · ${p.size}</div>
        <div class="product-card__name">${p.name}</div>
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
            <span class="pdetail__meta-val">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
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
  initHeroShowcase()
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
