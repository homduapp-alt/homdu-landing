/* analytics.js — homdu Meta Pixel (consent-gated) + GA4 mirror.
 * Plain JS (no build step). Loaded on every page AFTER the GA4 gtag base.
 *
 * Hard gating: the Pixel script (fbevents.js) is NOT injected and NO request
 * hits connect.facebook.net until marketing consent === true. GA4 (gtag) is
 * loaded in <head> in Consent Mode and only sets cookies after the same
 * consent. Triggers are registered via DELEGATED document listeners, so they
 * work for React-rendered elements too — every dispatch goes through track(),
 * which no-ops (Pixel) / relies on Consent Mode (GA4) unless tracking enabled.
 *
 * Public API (window.homduAnalytics):
 *   track(event, params, custom)   low-level (custom=true → trackCustom)
 *   contactCalendly(placement)     fire Contact for a Calendly popup open
 *   _enable() / _disable()         called by the consent layer
 */
(function () {
  "use strict";

  var PIXEL_ID = "5352313280007477";

  var state = {
    loaded: false,    // fbevents.js injected
    enabled: false,   // marketing consent granted
    pvSent: false,    // PageView fired this load
    vcQualified: false,
    vcSent: false,
    lastAsb: 0,       // dedup timestamp for AppStoreClick
  };

  function lang() {
    var l = (document.documentElement.lang || (window.LANG || "")).toLowerCase();
    return l === "en" ? "en" : "pl";
  }

  function pageType() {
    var p = (location.pathname || "").toLowerCase();
    if (p.indexOf("partnerzy") > -1) return "b2b";
    if (p.indexOf("polityka-prywatnosci") > -1 || p.indexOf("warunki-korzystania") > -1 ||
        p.indexOf("privacy-policy") > -1 || p.indexOf("terms-of-use") > -1) return "legal";
    return "b2c";
  }

  // ── GA4 mirror — fire the same conversions to Google Analytics (gtag) ──────
  // Names mapped to GA4 snake_case. PageView is omitted (GA4 config fires
  // page_view automatically once analytics_storage is granted).
  var GA4_MAP = {
    ViewContent: "view_content",
    AppStoreClick: "app_store_click",
    Contact: "contact",
    Lead: "calendly_booked",
    VideoEngaged: "video_engaged",
  };
  function gtagMirror(ev, params) {
    if (typeof window.gtag !== "function") return;
    var name = GA4_MAP[ev];
    if (!name) return;
    window.gtag("event", name, params || {});
    if (ev === "Lead") window.gtag("event", "generate_lead", params || {});
  }

  // ── Pixel loader (only ever runs after consent) ──────────────────────────
  function injectPixel() {
    if (state.loaded) return;
    state.loaded = true;
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    /* eslint-enable */
    window.fbq("init", PIXEL_ID);
  }

  function track(ev, params, custom) {
    gtagMirror(ev, params); // GA4 side (gated by Consent Mode)
    if (!state.enabled || !window.fbq) return;
    window.fbq(custom ? "trackCustom" : "track", ev, params || {});
  }

  function pageView() {
    if (state.pvSent) return;
    state.pvSent = true;
    track("PageView", { page_type: pageType(), lang: lang() });
  }

  function viewContent() {
    if (state.vcSent) return;
    var pt = pageType();
    if (pt === "legal") return; // legal pages carry no offer → no ViewContent
    state.vcSent = true;
    track(
      "ViewContent",
      pt === "b2b"
        ? { content_name: "partner_offer", content_category: "b2b", lang: lang() }
        : { content_name: "b2c_landing", content_category: "product", lang: lang() }
    );
  }

  function markQualified() {
    if (state.vcQualified) return;
    state.vcQualified = true;
    if (state.enabled) viewContent();
  }

  // ── consent transitions ──────────────────────────────────────────────────
  function enable() {
    state.enabled = true;
    injectPixel();
    pageView();
    if (state.vcQualified && !state.vcSent) viewContent();
  }

  function disable() {
    state.enabled = false;
    if (window.fbq) { try { window.fbq("consent", "revoke"); } catch (e) {} }
  }

  // ── engagement (ViewContent qualifier): scroll ≥50% OR active ≥20s ────────
  function setupEngagement() {
    if (pageType() === "legal") return;
    setTimeout(markQualified, 20000);
    function onScroll() {
      var h = document.documentElement;
      var sc = h.scrollTop || document.body.scrollTop || 0;
      var max = h.scrollHeight - h.clientHeight;
      if (max > 0 && sc / max >= 0.5) {
        markQualified();
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ── delegated click triggers (work for React-rendered nodes) ─────────────
  document.addEventListener("click", function (e) {
    var t = e.target;
    var a = t && t.closest ? t.closest("a") : null;
    if (!a) return;

    if (a.matches("a.appstore-badge")) {
      var now = Date.now();
      if (now - state.lastAsb < 1000) return; // dedup rapid double-clicks
      state.lastAsb = now;
      track("AppStoreClick", {
        placement: a.getAttribute("data-placement") || "unknown",
        lang: lang(),
      }, true);
    } else if (a.getAttribute("href") && a.getAttribute("href").indexOf("mailto:") === 0) {
      track("Contact", {
        method: "email",
        placement: a.getAttribute("data-placement") || "mailto",
        lang: lang(),
      });
    }
  }, true);

  // ── Calendly confirmed booking → Lead ────────────────────────────────────
  window.addEventListener("message", function (e) {
    if (e && e.data && e.data.event === "calendly.event_scheduled") {
      track("Lead", { content_category: "partner_call", lang: lang() });
    }
  });

  // ── public API ───────────────────────────────────────────────────────────
  window.homduAnalytics = {
    track: track,
    contactCalendly: function (placement) {
      track("Contact", { method: "calendly", placement: placement || "calendly", lang: lang() });
    },
    _enable: enable,
    _disable: disable,
  };

  // ── boot from stored consent ─────────────────────────────────────────────
  (function boot() {
    var c = null;
    try { c = JSON.parse(localStorage.getItem("homdu-consent")); } catch (e) {}
    if (c && c.marketing === true) enable();
    setupEngagement();
  })();

  // consent layer dispatches this whenever the decision changes
  window.addEventListener("homdu-consent-change", function (e) {
    if (e && e.detail && e.detail.marketing) enable();
    else disable();
  });
})();
