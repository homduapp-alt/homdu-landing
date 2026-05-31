// Footer.jsx — shared between the B2C (investors) and B2B (partners) pages.
// Layout is identical; columns + cross-link adapt to the audience via `variant`.

import React from "react";
import { Icon } from "./icons.jsx";
import { Logo, AppStoreBadge } from "./shared.jsx";

export function Footer({ theme, setTheme, variant = "b2c" }) {
  const isB2B = variant === "b2b";

  const blurb = isB2B
    ? "Kontekstowy kanał dotarcia do inwestora — w momencie, w którym planuje, kupuje i wykonuje. Made with care w Polsce."
    : "Aplikacja do zarządzania inwestycjami budowlanymi i remontowymi. Polska, made with care.";

  const cols = isB2B
    ? [
        {
          title: "Współpraca",
          links: [
            { label: "Dlaczego homdu", href: "#dlaczego" },
            { label: "Formaty współpracy", href: "#formaty" },
            { label: "Dla kogo", href: "#dla-kogo" },
            { label: "Kontakt", href: "#partner-cta" },
          ],
        },
        {
          title: "Kontakt partnerski",
          links: [
            { label: "Umów rozmowę", href: "#partner-cta" },
            { label: "Pobierz deck", href: "#partner-cta" },
            { label: "partners@homdu.pl", href: "mailto:partners@homdu.pl" },
            { label: "homdu.app@gmail.com", href: "mailto:homdu.app@gmail.com" },
          ],
        },
        {
          title: "Prawne",
          links: [
            { label: "Warunki korzystania", href: "/warunki-korzystania" },
            { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
            { label: "RODO", href: "/polityka-prywatnosci#sec-17" },
            { label: "Cookies", href: "/polityka-prywatnosci#sec-14" },
          ],
        },
      ]
    : [
        {
          title: "Aplikacja",
          links: [
            { label: "Funkcje", href: "#funkcje" },
            { label: "Etapy", href: "#etapy" },
            { label: "Koszty", href: "#koszty" },
            { label: "Poradniki", href: "#poradniki" },
          ],
        },
        {
          title: "Firma",
          links: [
            "O nas",
            "Blog",
            "Kariera",
            { label: "Kontakt", href: "mailto:homdu.app@gmail.com" },
          ],
        },
        {
          title: "Prawne",
          links: [
            { label: "Warunki korzystania", href: "/warunki-korzystania" },
            { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
            { label: "RODO", href: "/polityka-prywatnosci#sec-17" },
            { label: "Cookies", href: "/polityka-prywatnosci#sec-14" },
          ],
        },
      ];

  // Cross-link band leading the visitor to the other funnel.
  const cross = isB2B
    ? { lead: "Budujesz lub remontujesz?", cta: "Strona dla inwestorów", href: "/", icon: <Icon.House /> }
    : { lead: "Jesteś partnerem branżowym?", cta: "Przejdź do homdu dla partnerów", href: "/partnerzy", icon: <Icon.Briefcase /> };

  return (
    <footer className="footer">
      <div className="container">
        {/* Cross-funnel band */}
        <a href={cross.href} className="footer__cross">
          <span className="footer__cross__icon">
            {React.cloneElement(cross.icon, { style: { width: 20, height: 20 } })}
          </span>
          <span className="footer__cross__lead">{cross.lead}</span>
          <span className="footer__cross__cta">
            {cross.cta}
            <Icon.Arrow style={{ width: 16, height: 16 }} />
          </span>
        </a>

        <div className="footer__grid">
          <div>
            <Logo />
            <p style={{
              fontSize: 14,
              lineHeight: 1.55,
              color: "var(--ink-2)",
              margin: "20px 0 24px",
              maxWidth: 320,
            }}>
              {blurb}
            </p>
            {isB2B ? (
              <a href="#partner-cta" className="btn btn--primary">
                <Icon.Calendar style={{ width: 16, height: 16 }} />
                Umów rozmowę
              </a>
            ) : (
              <AppStoreBadge size={44} />
            )}
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => {
                  const lbl = typeof l === "string" ? l : l.label;
                  const href = typeof l === "string" ? "#" : l.href;
                  const isInternal = href === "#";
                  return (
                    <li key={lbl}>
                      <a
                        href={href}
                        onClick={isInternal ? (e) => e.preventDefault() : undefined}
                      >
                        {lbl}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__btm">
          <div>© {new Date().getFullYear()} homdu. Wszystkie prawa zastrzeżone.</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href={isB2B ? "mailto:partners@homdu.pl" : "mailto:homdu.app@gmail.com"}>
              {isB2B ? "partners@homdu.pl" : "homdu.app@gmail.com"}
            </a>
            <span style={{ color: "var(--line-2)" }}>·</span>
            <span>Polska</span>
            <span style={{ color: "var(--line-2)" }}>·</span>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}
              title={theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                border: "1px solid var(--line-2)",
                color: "var(--ink-2)",
                borderRadius: 999,
                padding: "6px 12px",
                cursor: "pointer",
                font: "inherit",
                fontSize: 13,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {theme === "dark" ? <Icon.Sun /> : <Icon.Moon />}
              <span style={{ whiteSpace: "nowrap" }}>{theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
