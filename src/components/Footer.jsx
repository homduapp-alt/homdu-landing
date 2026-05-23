// Footer.jsx

import { Logo, AppStoreBadge } from "./shared.jsx";

export function Footer() {
  const cols = [
    {
      title: "Aplikacja",
      links: ["Funkcje", "Etapy", "Koszty", "Poradniki", "Finanse"],
    },
    {
      title: "Dla partnerów",
      links: ["Formaty współpracy", "Dla kogo", "Umów rozmowę", "Pobierz deck", "partners@homdu.pl"],
    },
    {
      title: "Firma",
      links: ["O nas", "Blog", "Kariera", "Kontakt"],
    },
    {
      title: "Prawne",
      links: ["Regulamin", "Polityka prywatności", "RODO", "Cookies"],
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
                {c.links.map((l) => (
                  <li key={l}><a href="#" onClick={(e) => e.preventDefault()}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__btm">
          <div>© {new Date().getFullYear()} homdu. Wszystkie prawa zastrzeżone.</div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="mailto:hello@homdu.pl">hello@homdu.pl</a>
            <span style={{ color: "var(--line-2)" }}>·</span>
            <span>Polska</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
