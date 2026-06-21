/* consent-banner.js — homdu cookie-consent UI (marketing: Meta Pixel + Google Analytics).
 * Plain JS. Loaded on every page, AFTER the GA4 gtag base + analytics.js.
 *
 * Principles (no dark patterns):
 *  - "Accept" and "Reject" have EQUAL visual weight.
 *  - Nothing is tracked before a decision; Pixel only loads on Accept, GA4 stays
 *    in Consent Mode (denied) until Accept.
 *  - Decision is reversible anytime via window.homduConsent.openSettings()
 *    (wired to the footer "Cookie settings" link).
 *  - Respects window.LANG / <html lang> (PL/EN).
 *
 * Storage: localStorage["homdu-consent"] = {"marketing":bool,"ts":<ms>,"v":1}
 * Emits:   window dispatchEvent CustomEvent("homdu-consent-change",{detail:{marketing}})
 *          + gtag consent update (GA4 Consent Mode v2).
 */
(function () {
  "use strict";

  var KEY = "homdu-consent";

  function isEN() {
    var l = (document.documentElement.lang || (window.LANG || "")).toLowerCase();
    return l === "en";
  }
  function T(pl, en) { return isEN() ? en : pl; }
  function privacyHref() {
    return (isEN() ? "/privacy-policy" : "/polityka-prywatnosci") + "#sec-14";
  }

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function save(marketing) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ marketing: !!marketing, ts: Date.now(), v: 1 }));
    } catch (e) {}
    // GA4 Consent Mode v2 — analytics + ads gated by the same decision.
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: marketing ? "granted" : "denied",
        ad_storage: marketing ? "granted" : "denied",
        ad_user_data: marketing ? "granted" : "denied",
        ad_personalization: marketing ? "granted" : "denied",
      });
    }
    // Meta Pixel layer (analytics.js) reacts to this.
    window.dispatchEvent(new CustomEvent("homdu-consent-change", { detail: { marketing: !!marketing } }));
  }

  // ── styles (layout only; colours come from styles.css tokens) ────────────
  function injectStyles() {
    if (document.getElementById("homdu-consent-styles")) return;
    var css =
      ".hdu-cc{position:fixed;left:24px;bottom:24px;z-index:9000;width:min(420px,calc(100vw - 32px));" +
      "background:var(--bg-elev,#fff);color:var(--ink,#15171c);border:1px solid var(--line,rgba(20,22,28,.1));" +
      "border-radius:var(--r-lg,18px);box-shadow:0 12px 40px -12px rgba(20,22,28,.32),0 2px 8px -2px rgba(20,22,28,.12);" +
      "padding:22px 22px 18px;font-family:var(--font-sans,'Geist',system-ui,sans-serif);" +
      "opacity:0;transform:translateY(12px);transition:opacity .28s ease,transform .28s ease}" +
      ".hdu-cc.is-in{opacity:1;transform:translateY(0)}" +
      "@media(max-width:560px){.hdu-cc{left:12px;right:12px;bottom:12px;width:auto}}" +
      ".hdu-cc__t{font-size:15px;font-weight:600;letter-spacing:-.01em;margin:0 0 8px;color:var(--ink,#15171c)}" +
      ".hdu-cc__p{font-size:13px;line-height:1.55;color:var(--ink-2,#4a4e58);margin:0 0 16px}" +
      ".hdu-cc__p a{color:var(--hdu,#0088ff);text-decoration:underline;text-underline-offset:2px}" +
      ".hdu-cc__row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}" +
      ".hdu-cc__btn{flex:1 1 0;min-width:120px;appearance:none;cursor:pointer;font:inherit;font-size:13.5px;" +
      "font-weight:600;padding:10px 14px;border-radius:999px;border:1px solid transparent;transition:filter .15s,background .15s}" +
      ".hdu-cc__btn--accept{background:var(--hdu,#0088ff);color:#fff}" +
      ".hdu-cc__btn--reject{background:var(--ink,#15171c);color:var(--bg,#fff)}" +
      ".hdu-cc__btn--accept:hover,.hdu-cc__btn--reject:hover{filter:brightness(1.08)}" +
      ".hdu-cc__link{appearance:none;background:none;border:none;cursor:pointer;font:inherit;font-size:12.5px;" +
      "font-weight:500;color:var(--ink-2,#4a4e58);padding:6px 4px;margin-top:6px;text-decoration:underline;text-underline-offset:2px}" +
      ".hdu-cc__link:hover{color:var(--ink,#15171c)}" +
      ".hdu-cc__opts{margin:0 0 16px;display:flex;flex-direction:column;gap:10px}" +
      ".hdu-cc__opt{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--ink-2,#4a4e58);line-height:1.45}" +
      ".hdu-cc__opt b{color:var(--ink,#15171c);font-weight:600}" +
      ".hdu-cc__sw{position:relative;flex:0 0 auto;width:38px;height:22px;margin-top:1px}" +
      ".hdu-cc__sw input{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer}" +
      ".hdu-cc__sw span{position:absolute;inset:0;border-radius:999px;background:var(--line-2,rgba(20,22,28,.18));transition:background .18s}" +
      ".hdu-cc__sw span::after{content:'';position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:999px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .18s}" +
      ".hdu-cc__sw input:checked + span{background:var(--hdu,#0088ff)}" +
      ".hdu-cc__sw input:checked + span::after{transform:translateX(16px)}" +
      ".hdu-cc__sw input:disabled + span{opacity:.55}";
    var s = document.createElement("style");
    s.id = "homdu-consent-styles";
    s.textContent = css;
    document.head.appendChild(s);
  }

  var el = null;

  function close() {
    if (!el) return;
    el.classList.remove("is-in");
    var node = el; el = null;
    setTimeout(function () { if (node && node.parentNode) node.parentNode.removeChild(node); }, 300);
  }

  function render(settingsOpen) {
    injectStyles();
    if (el) { if (el.parentNode) el.parentNode.removeChild(el); el = null; }

    var stored = read();
    var marketingChecked = stored ? !!stored.marketing : false;

    el = document.createElement("div");
    el.className = "hdu-cc";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-live", "polite");
    el.setAttribute("aria-label", T("Zgoda na pliki cookies", "Cookie consent"));

    if (!settingsOpen) {
      el.innerHTML =
        '<p class="hdu-cc__t">' + T("Cookies, analityka i Meta Pixel", "Cookies, analytics & Meta Pixel") + "</p>" +
        '<p class="hdu-cc__p">' +
        T(
          "Używamy plików cookies niezbędnych do działania strony. Za Twoją zgodą włączamy też cookies analityczne i marketingowe (Google Analytics, Meta Pixel), które mierzą skuteczność reklam i pozwalają na ich personalizację. ",
          "We use cookies necessary for the site to work. With your consent we also enable analytics and marketing cookies (Google Analytics, Meta Pixel), which measure ad performance and allow personalisation. "
        ) +
        '<a href="' + privacyHref() + '">' + T("Dowiedz się więcej", "Learn more") + "</a></p>" +
        '<div class="hdu-cc__row">' +
        '<button class="hdu-cc__btn hdu-cc__btn--reject" data-act="reject">' + T("Odrzucam", "Reject") + "</button>" +
        '<button class="hdu-cc__btn hdu-cc__btn--accept" data-act="accept">' + T("Akceptuję", "Accept") + "</button>" +
        "</div>" +
        '<button class="hdu-cc__link" data-act="settings">' + T("Ustawienia", "Settings") + "</button>";
    } else {
      el.innerHTML =
        '<p class="hdu-cc__t">' + T("Ustawienia cookies", "Cookie settings") + "</p>" +
        '<div class="hdu-cc__opts">' +
          '<div class="hdu-cc__opt">' +
            '<label class="hdu-cc__sw"><input type="checkbox" checked disabled /><span></span></label>' +
            "<div><b>" + T("Niezbędne", "Necessary") + "</b><br>" +
            T("Wymagane do działania strony. Zawsze aktywne.", "Required for the site to work. Always on.") + "</div>" +
          "</div>" +
          '<div class="hdu-cc__opt">' +
            '<label class="hdu-cc__sw"><input type="checkbox" id="hdu-cc-mkt"' + (marketingChecked ? " checked" : "") + ' /><span></span></label>' +
            "<div><b>" + T("Analityczne i marketingowe", "Analytics & marketing") + "</b><br>" +
            T("Google Analytics i Meta Pixel — pomiar konwersji i personalizacja reklam.", "Google Analytics and Meta Pixel — conversion measurement and ad personalisation.") + "</div>" +
          "</div>" +
        "</div>" +
        '<div class="hdu-cc__row">' +
        '<button class="hdu-cc__btn hdu-cc__btn--reject" data-act="reject">' + T("Odrzuć wszystko", "Reject all") + "</button>" +
        '<button class="hdu-cc__btn hdu-cc__btn--accept" data-act="save">' + T("Zapisz wybór", "Save choice") + "</button>" +
        "</div>";
    }

    el.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-act]");
      if (!b) return;
      var act = b.getAttribute("data-act");
      if (act === "accept") { save(true); close(); }
      else if (act === "reject") { save(false); close(); }
      else if (act === "settings") { render(true); }
      else if (act === "save") {
        var cb = document.getElementById("hdu-cc-mkt");
        save(cb ? cb.checked : false);
        close();
      }
    });

    document.body.appendChild(el);
    requestAnimationFrame(function () { if (el) el.classList.add("is-in"); });
  }

  // ── public API + auto-show on first visit ────────────────────────────────
  window.homduConsent = {
    open: function () { render(false); },
    openSettings: function () { render(true); },
    accept: function () { save(true); close(); },
    reject: function () { save(false); close(); },
    get: read,
  };

  if (!read()) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () { render(false); });
    } else {
      render(false);
    }
  }
})();
