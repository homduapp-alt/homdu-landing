/* homdu.pl — baner zgody na cookies (RODO) + Google Consent Mode v2 + zdarzenia.
   Ładowany na każdej podstronie (homepage React + statyczne strony prawne).
   Tag GA4 i domyślny consent ('denied') ustawia inline snippet w <head>. */
(function () {
  var KEY = "homdu-consent";

  function gtag() { (window.dataLayer = window.dataLayer || []).push(arguments); }
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function grant() {
    gtag("consent", "update", { analytics_storage: "granted" });
    store("granted");
  }
  function deny() {
    // analytics_storage pozostaje 'denied' (Consent Mode = pingi bez cookies)
    store("denied");
  }

  // ── Zdarzenia własne (delegacja klików, działa na obu stronach) ──
  // Lejek (b2c = strona główna / inwestorzy, b2b = /partnerzy) dołączany do
  // każdego zdarzenia, żeby raporty GA4 segmentowały po grupie odbiorców.
  function funnel() {
    return location.pathname.indexOf("/partnerzy") === 0 ? "b2b" : "b2c";
  }
  function ev(name, params) {
    if (typeof window.gtag !== "function") return;
    var p = { funnel: funnel(), page_path: location.pathname };
    if (params) for (var k in params) p[k] = params[k];
    window.gtag("event", name, p);
  }

  document.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target.closest("a, button") : null;
    if (!el) return;
    var href = (el.getAttribute && el.getAttribute("href")) || "";
    var txt = (el.textContent || "").trim();
    var lc = txt.toLowerCase();
    var label = txt.slice(0, 60);

    if (el.classList && el.classList.contains("appstore-badge")) {
      // Pobranie aplikacji — kliknięcie badge App Store (B2C).
      ev("app_store_click", { label: label });
    } else if (lc.indexOf("umów rozmow") >= 0 || lc.indexOf("nawiąż współprac") >= 0) {
      // Intencja umówienia rozmowy partnerskiej (otwiera Calendly lub przewija do CTA).
      ev("schedule_call_click", { label: label });
    } else if (lc.indexOf("pobierz deck") >= 0) {
      ev("deck_click", { label: label });
    } else if (href === "/partnerzy" || href.indexOf("/partnerzy") === 0) {
      // Przejście inwestor → partnerzy (nawigacja / hero / pasek krzyżowy).
      ev("go_to_partners", { label: label });
    } else if (el.classList && el.classList.contains("footer__cross") && href === "/") {
      // Przejście partner → strona dla inwestorów.
      ev("go_to_investors", { label: label });
    } else if (href.indexOf("mailto:") === 0) {
      ev("email_click", { email: href.replace("mailto:", "").slice(0, 60) });
    } else if (el.classList && el.classList.contains("theme-toggle")) {
      ev("theme_toggle");
    }
  }, true);

  // ── Realna konwersja: rezerwacja rozmowy w Calendly ───────────────────────
  // Calendly w popupie wysyła window.postMessage przy zaplanowaniu spotkania.
  window.addEventListener("message", function (e) {
    if (e && e.data && typeof e.data.event === "string" &&
        e.data.event.indexOf("calendly.") === 0) {
      if (e.data.event === "calendly.event_scheduled") {
        ev("calendly_booked", {});   // partner zarezerwował rozmowę — lead
      }
    }
  });

  // ── Baner zgody ──
  function renderBanner() {
    if (saved()) return; // wybór już dokonany

    var style = document.createElement("style");
    style.textContent =
      ".hd-cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;" +
      "max-width:760px;margin:0 auto;display:flex;gap:16px;align-items:center;flex-wrap:wrap;" +
      "justify-content:space-between;padding:16px 20px;border-radius:16px;" +
      "background:var(--glass-bg-2,rgba(255,255,255,0.92));color:var(--ink,#15171C);" +
      "border:1px solid var(--glass-border,rgba(20,22,28,0.1));" +
      "box-shadow:0 12px 40px rgba(20,22,28,0.18);" +
      "backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);" +
      "font:14px/1.45 var(--font-sans,system-ui,-apple-system,sans-serif)}" +
      ".hd-cc__t{flex:1;min-width:220px;color:var(--ink-2,#5A5E68)}" +
      ".hd-cc__t a{color:var(--hdu,#2E6FD4);text-decoration:underline;text-underline-offset:2px}" +
      ".hd-cc__b{display:flex;gap:10px;flex-shrink:0}" +
      ".hd-cc__btn{appearance:none;border:0;cursor:pointer;border-radius:999px;padding:10px 18px;font:inherit;font-weight:600}" +
      ".hd-cc__btn--ok{background:var(--ink,#15171C);color:var(--bg,#fff)}" +
      ".hd-cc__btn--no{background:transparent;color:var(--ink,#15171C);border:1px solid var(--line-2,rgba(20,22,28,0.14))}" +
      "@media(max-width:560px){.hd-cc{flex-direction:column;align-items:stretch}.hd-cc__b{justify-content:flex-end}}";
    document.head.appendChild(style);

    var bar = document.createElement("div");
    bar.className = "hd-cc";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Zgoda na pliki cookie");
    bar.innerHTML =
      '<div class="hd-cc__t">Używamy plików cookie do analizy ruchu (Google Analytics), ' +
      "aby ulepszać homdu. Szczegóły w " +
      '<a href="/polityka-prywatnosci#sec-14">Polityce cookies</a>.</div>' +
      '<div class="hd-cc__b">' +
      '<button class="hd-cc__btn hd-cc__btn--no" type="button">Odrzuć</button>' +
      '<button class="hd-cc__btn hd-cc__btn--ok" type="button">Akceptuję</button>' +
      "</div>";

    var btns = bar.querySelectorAll("button");
    btns[0].addEventListener("click", function () { deny(); bar.remove(); });
    btns[1].addEventListener("click", function () { grant(); bar.remove(); });
    document.body.appendChild(bar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderBanner);
  } else {
    renderBanner();
  }
})();
