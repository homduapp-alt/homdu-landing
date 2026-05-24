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

  // ── Zdarzenia własne (delegacja klików, działa na wszystkich stronach) ──
  function ev(name, params) { if (typeof window.gtag === "function") window.gtag("event", name, params || {}); }
  document.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target.closest("a, button") : null;
    if (!el) return;
    if (el.classList && el.classList.contains("appstore-badge")) {
      ev("app_store_click", { page_location: location.pathname });
    } else if (el.matches && el.matches('a[href="#pobierz"]')) {
      ev("cta_download", { label: (el.textContent || "").trim().slice(0, 40) });
    } else if (el.matches && el.matches('a[href="#dla-partnerow"], a[href="#partner-cta"]')) {
      ev("partner_cta", { label: (el.textContent || "").trim().slice(0, 40) });
    } else if (el.classList && el.classList.contains("theme-toggle")) {
      ev("theme_toggle");
    }
  }, true);

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
