// Nav.jsx — sticky glass top nav with mobile hamburger sheet

import { useState, useEffect } from "react";
import { Icon } from "./icons.jsx";
import { Logo, AppStoreBadge } from "./shared.jsx";

export function Nav({ theme, setTheme }) {
  const links = [
    { href: "#funkcje", label: "Funkcje" },
    { href: "#etapy", label: "Etapy" },
    { href: "#koszty", label: "Koszty" },
    { href: "#poradniki", label: "Poradniki" },
    { href: "#dla-partnerow", label: "Dla partnerów", emphasis: true },
  ];

  const [open, setOpen] = useState(false);

  // body scroll lock + Escape
  useEffect(() => {
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
    <>
      <nav className="nav" aria-label="Główna nawigacja">
        <Logo />
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={l.emphasis ? { color: "var(--hdu)", fontWeight: 500 } : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__cta">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}
            title={theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}
          >
            {theme === "dark" ? <Icon.Sun /> : <Icon.Moon />}
          </button>
          <AppStoreBadge size={40} />
          <button
            className="nav__hamburger"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
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
        aria-label="Menu mobilne"
        aria-hidden={!open}
      >
        <button className="nav__sheet__scrim" aria-label="Zamknij menu" onClick={close} tabIndex={open ? 0 : -1}></button>
        <div className="nav__sheet__panel" role="document">
          <div className="nav__sheet__head">
            <Logo />
            <button className="nav__sheet__close" aria-label="Zamknij menu" onClick={close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <ul className="nav__sheet__links" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  style={l.emphasis ? { color: "var(--hdu)" } : undefined}
                >
                  <span>{l.label}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__sheet__foot">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AppStoreBadge size={56} />
            </div>
            <div className="nav__sheet__foot__row">
              <a href="/polityka-prywatnosci" onClick={close}>Polityka prywatności</a>
              <span aria-hidden="true">·</span>
              <a href="/warunki-korzystania" onClick={close}>Warunki</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
