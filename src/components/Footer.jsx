// Footer.jsx

import { Icon } from "./icons.jsx";
import { Logo, AppStoreBadge } from "./shared.jsx";

export function Footer({ theme, setTheme }) {
  const cols = [
    {
      title: "Aplikacja",
      links: ["Funkcje", "Etapy", "Koszty", "Poradniki", "Finanse"],
    },
    {
      title: "Dla partnerów",
      links: [
        { label: "Formaty współpracy", href: "#dla-partnerow" },
        { label: "Dla kogo", href: "#dla-partnerow" },
        { label: "Umów rozmowę", href: "#partner-cta" },
        { label: "Pobierz deck", href: "#partner-cta" },
        { label: "homdu.app@gmail.com", href: "mailto:homdu.app@gmail.com" },
      ],
    },
    {
      title: "Firma",
      links: ["O nas", "Blog", "Kariera", { label: "Kontakt", href: "mailto:homdu.app@gmail.com" }],
    },
    {
      title: "Prawne",
      links: [
        { label: "Warunki korzystania", href: "warunki-korzystania" },
        { label: "Polityka prywatności", href: "polityka-prywatnosci" },
        { label: "RODO", href: "polityka-prywatnosci#sec-17" },
        { label: "Cookies", href: "polityka-prywatnosci#sec-14" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
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
              Aplikacja do zarządzania inwestycjami budowlanymi i remontowymi.
              Polska, made with care.
            </p>
            <AppStoreBadge size={44} />
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => {
                  const lbl = typeof l === "string" ? l : l.label;
                  const href = typeof l === "string" ? "#" : l.href;
                  const isInternal = href.startsWith("#");
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
            <a href="mailto:homdu.app@gmail.com">homdu.app@gmail.com</a>
            <span style={{ color: "var(--line-2)" }}>·</span>
            <span>Polska</span>
            <span style={{ color: "var(--line-2)" }}>·</span>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}
              title={theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}
              style={{
                width: "auto",
                height: "auto",
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
              }}
            >
              {theme === "dark" ? <Icon.Sun /> : <Icon.Moon />}
              <span>{theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
