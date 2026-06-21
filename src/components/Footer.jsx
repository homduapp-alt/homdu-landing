import { tr } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { Logo, AppStoreBadge } from "./shared.jsx";

// Footer.jsx — shared between the B2C (investors) and B2B (partners) pages.
// Layout is identical; columns + cross-link adapt to the audience via `variant`.

export function Footer({ theme, setTheme, variant = "b2c" }) {
  const isB2B = variant === "b2b";

  const blurb = isB2B
    ? tr("Kontekstowy kanał dotarcia do inwestora — w momencie, w którym planuje, kupuje i wykonuje. Made with care w Polsce.", "A contextual channel for reaching the homeowner — at the moment they plan, buy and build. Made with care in Poland.")
    : tr("Aplikacja do zarządzania inwestycjami budowlanymi i remontowymi. Polska, made with care.", "An app for managing building and renovation projects. Made with care in Poland.");

  const termsHref = tr("/warunki-korzystania", "/terms-of-use");
  const privacyHref = tr("/polityka-prywatnosci", "/privacy-policy");

  // Re-open the cookie-consent panel (defined in consent-banner.js).
  const openConsent = (e) => {
    e.preventDefault();
    if (window.homduConsent) window.homduConsent.open();
  };
  const cookieSettings = { label: tr("Ustawienia cookies", "Cookie settings"), href: "#", onClick: openConsent };

  const cols = isB2B
    ? [
        {
          title: tr("Współpraca", "Partnership"),
          links: [
            { label: tr("Dlaczego homdu", "Why homdu"), href: "#dlaczego" },
            { label: tr("Formaty współpracy", "Partnership formats"), href: "#formaty" },
            { label: tr("Dla kogo", "Who it's for"), href: "#dla-kogo" },
            { label: tr("Kontakt", "Contact"), href: "#partner-cta" },
          ],
        },
        {
          title: tr("Prawne", "Legal"),
          links: [
            { label: tr("Warunki korzystania", "Terms of Use"), href: termsHref },
            { label: tr("Polityka prywatności", "Privacy Policy"), href: privacyHref },
            { label: tr("RODO", "GDPR"), href: privacyHref + "#sec-17" },
            { label: tr("Cookies", "Cookies"), href: privacyHref + "#sec-14" },
            cookieSettings,
          ],
        },
      ]
    : [
        {
          title: tr("Aplikacja", "App"),
          links: [
            { label: tr("Funkcje", "Features"), href: "#funkcje" },
            { label: tr("Etapy", "Stages"), href: "#etapy" },
            { label: tr("Koszty", "Costs"), href: "#koszty" },
            { label: tr("Poradniki", "Guides"), href: "#poradniki" },
          ],
        },
        {
          title: tr("Firma", "Company"),
          links: [
            { label: tr("Kontakt", "Contact"), href: "mailto:homdu.app@gmail.com" },
          ],
        },
        {
          title: tr("Prawne", "Legal"),
          links: [
            { label: tr("Warunki korzystania", "Terms of Use"), href: termsHref },
            { label: tr("Polityka prywatności", "Privacy Policy"), href: privacyHref },
            { label: tr("RODO", "GDPR"), href: privacyHref + "#sec-17" },
            { label: tr("Cookies", "Cookies"), href: privacyHref + "#sec-14" },
            cookieSettings,
          ],
        },
      ];

  // Cross-link band leading the visitor to the other funnel.
  const cross = isB2B
    ? { lead: tr("Budujesz lub remontujesz?", "Building or renovating?"), cta: tr("Strona dla inwestorów", "For homeowners"), href: "/", icon: <Icon.House /> }
    : { lead: tr("Jesteś partnerem branżowym?", "Are you an industry partner?"), cta: tr("Przejdź do homdu dla partnerów", "Go to homdu for partners"), href: "/partnerzy", icon: <Icon.Briefcase /> };

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
                {tr("Umów rozmowę", "Book a call")}
              </a>
            ) : (
              <AppStoreBadge size={44} placement="footer" />
            )}
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => {
                  const lbl = typeof l === "string" ? l : l.label;
                  const href = typeof l === "string" ? "#" : l.href;
                  const isInternal = href === "#" || href.startsWith("#");
                  return (
                    <li key={lbl}>
                      <a
                        href={href}
                        onClick={l.onClick ? l.onClick : (href === "#" ? (e) => e.preventDefault() : undefined)}
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
          <div>© {new Date().getFullYear()} homdu. {tr("Wszystkie prawa zastrzeżone.", "All rights reserved.")}</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href={isB2B ? "mailto:homdu.app@gmail.com" : "mailto:homdu.app@gmail.com"}>
              {isB2B ? "homdu.app@gmail.com" : "homdu.app@gmail.com"}
            </a>
            <span style={{ color: "var(--line-2)" }}>·</span>
            <span>{tr("Polska", "Poland")}</span>
            <span style={{ color: "var(--line-2)" }}>·</span>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? tr("Tryb jasny", "Light mode") : tr("Tryb ciemny", "Dark mode")}
              title={theme === "dark" ? tr("Tryb jasny", "Light mode") : tr("Tryb ciemny", "Dark mode")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid var(--line-2)",
                color: "var(--ink-2)",
                borderRadius: 999,
                width: 36,
                height: 36,
                padding: 0,
                cursor: "pointer",
                font: "inherit",
                flexShrink: 0,
              }}
            >
              {theme === "dark" ? <Icon.Sun /> : <Icon.Moon />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
