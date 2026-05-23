// Nav.jsx — sticky glass top nav

import { Icon } from "./icons.jsx";
import { Logo } from "./shared.jsx";

export function Nav({ theme, setTheme }) {
  const links = [
    { href: "#funkcje", label: "Funkcje" },
    { href: "#etapy", label: "Etapy" },
    { href: "#koszty", label: "Koszty" },
    { href: "#poradniki", label: "Poradniki" },
    { href: "#dla-partnerow", label: "Dla partnerów", emphasis: true },
  ];

  return (
    <nav className="nav">
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
        <a href="#pobierz" className="btn btn--primary" style={{ padding: "10px 18px", fontSize: 14 }}>
          Pobierz
        </a>
      </div>
    </nav>
  );
}
