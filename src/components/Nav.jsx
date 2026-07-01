import { tr, setLang } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { Logo, AppStoreBadge } from "./shared.jsx";

// Nav.jsx — sticky glass top nav with mobile hamburger sheet + PL/EN switch

const { useState: useStateNav, useEffect: useEffectNav } = React;

// ── Language switch (PL / EN) — persists via window.setLang + reload ──────────
function LangSwitch({ style }) {
  const cur = (typeof window !== "undefined" && window.LANG) || "pl";
  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    gap: 2,
    padding: 3,
    borderRadius: 999,
    border: "1px solid var(--line-2)",
    background: "transparent",
    flexShrink: 0,
    ...style,
  };
  const btn = (active) => ({
    border: "none",
    cursor: "pointer",
    font: "inherit",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.03em",
    lineHeight: 1,
    padding: "6px 10px",
    borderRadius: 999,
    background: active ? "var(--hdu)" : "transparent",
    color: active ? "#fff" : "var(--ink-2)",
    transition: "background 0.18s, color 0.18s",
  });
  return (
    <div style={wrap} role="group" aria-label={tr("Wybór języka", "Language")}>
      <button type="button" style={btn(cur === "pl")} aria-pressed={cur === "pl"} onClick={() => window.setLang("pl")}>PL</button>
      <button type="button" style={btn(cur === "en")} aria-pressed={cur === "en"} onClick={() => window.setLang("en")}>EN</button>
    </div>
  );
}

export function Nav({ variant = "b2c", linkBase = "" }) {
  // Na podstronach (landingi/blog) kotwice (#funkcje itd.) prowadzą na stronę
  // główną/partnerów przez linkBase; na stronie głównej linkBase="" → zwykłe #.
  const hb = (href) => (href && href.charAt(0) === "#" ? linkBase + href : href);
  const links =
    variant === "b2b"
      ? [
          { href: hb("#dlaczego"), label: tr("Dlaczego homdu", "Why homdu") },
          { href: hb("#formaty"), label: tr("Formaty współpracy", "Partnership formats") },
          { href: hb("#dla-kogo"), label: tr("Dla kogo", "Who it's for") },
          { href: hb("#partner-cta"), label: tr("Kontakt", "Contact") },
          { href: "/", label: tr("Strona dla inwestorów", "For homeowners"), emphasis: true },
        ]
      : [
          { href: hb("#funkcje"), label: tr("Funkcje", "Features") },
          { href: hb("#etapy"), label: tr("Etapy", "Stages") },
          { href: hb("#koszty"), label: tr("Koszty", "Costs") },
          { href: hb("#poradniki"), label: tr("Poradniki", "Guides") },
          { href: "/partnerzy", label: tr("Dla partnerów", "For partners"), emphasis: true },
        ];

  const [open, setOpen] = useStateNav(false);

  // body scroll lock + Escape
  useEffectNav(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <React.Fragment>
      <nav className="nav" aria-label={tr("Główna nawigacja", "Main navigation")} style={{ fontFamily: "Geist", fontSize: "16px", fontWeight: "600" }}>
        <Logo />
        <ul className="nav__links">
          {links.map((l) =>
          <li key={l.href}>
              <a
              href={l.href}
              style={{ ...(l.emphasis ? { color: "var(--hdu)", fontWeight: 500 } : undefined), fontWeight: "600" }}>
              
                {l.label}
              </a>
            </li>
          )}
        </ul>
        <div className="nav__cta">
          <a
            href="https://www.instagram.com/homdu_app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram homdu"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 999, color: "var(--ink-2)", flexShrink: 0, transition: "color 0.18s, background 0.18s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--hdu)"; e.currentTarget.style.background = "var(--glass-bg-2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink-2)"; e.currentTarget.style.background = "transparent"; }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }} aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <LangSwitch />
          {variant === "b2b" ? (
            <a href="#partner-cta" className="btn btn--primary nav__cta-btn" style={{ padding: "10px 18px", fontSize: 14 }}>
              <Icon.Calendar style={{ width: 15, height: 15 }} />
              {tr("Umów rozmowę", "Book a call")}
            </a>
          ) : (
            <AppStoreBadge size={40} />
          )}
          <button
            className="nav__hamburger"
            aria-label={open ? tr("Zamknij menu", "Close menu") : tr("Otwórz menu", "Open menu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}>
            
            <span className={`nav__hamburger__icon ${open ? "is-open" : ""}`} aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`nav__sheet ${open ? "is-open" : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={tr("Menu mobilne", "Mobile menu")}
        aria-hidden={!open}>
        
        <button className="nav__sheet__scrim" aria-label={tr("Zamknij menu", "Close menu")} onClick={close} tabIndex={open ? 0 : -1}></button>
        <div className="nav__sheet__panel" role="document">
          <div className="nav__sheet__head">
            <Logo />
            <button className="nav__sheet__close" aria-label={tr("Zamknij menu", "Close menu")} onClick={close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <ul className="nav__sheet__links" role="list">
            {links.map((l) =>
            <li key={l.href}>
                <a
                href={l.href}
                onClick={close}
                style={l.emphasis ? { color: "var(--hdu)" } : undefined}>
                
                  <span>{l.label}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </li>
            )}
          </ul>

          <div className="nav__sheet__foot">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <LangSwitch />
              <a
                href="https://www.instagram.com/homdu_app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram homdu"
                onClick={close}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 999, color: "var(--ink-2)", border: "1px solid var(--line-2)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }} aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {variant === "b2b" ? (
                <a href="#partner-cta" onClick={close} className="btn btn--primary btn--lg">
                  <Icon.Calendar style={{ width: 16, height: 16 }} />
                  {tr("Umów rozmowę", "Book a call")}
                </a>
              ) : (
                <AppStoreBadge size={56} />
              )}
            </div>
            <div className="nav__sheet__foot__row">
              <a href={tr("/polityka-prywatnosci", "/privacy-policy")} onClick={close}>{tr("Polityka prywatności", "Privacy Policy")}</a>
              <span aria-hidden="true">·</span>
              <a href={tr("/warunki-korzystania", "/terms-of-use")} onClick={close}>{tr("Warunki", "Terms")}</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>);

}
