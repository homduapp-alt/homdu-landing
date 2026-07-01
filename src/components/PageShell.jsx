// PageShell.jsx — wspólny wrapper samodzielnych stron homdu (landingi, blog).
// Motyw jak w App.jsx (useTheme: auto-noc Warszawa 22–5, trwały, toggle w stopce),
// Nav + Footer z linkBase (kotwice na podstronach prowadzą na stronę główną).

import React from "react";
import { useTheme } from "../useTheme.js";
import { tr } from "../i18n.js";
import { Icon } from "./icons.jsx";
import { Nav } from "./Nav.jsx";
import { Footer } from "./Footer.jsx";
import { SectionHeader, Reveal, Checklist, IPhone, AppStoreBadge } from "./shared.jsx";

export function PageShell({ children, navVariant = "b2c", linkBase }) {
  const [theme, setTheme] = useTheme();

  // Na podstronach kotwice (#funkcje itd.) prowadzą do strony głównej/partnerów.
  const base = linkBase !== undefined ? linkBase : (navVariant === "b2b" ? "/partnerzy" : "/");

  return (
    <React.Fragment>
      <Nav variant={navVariant} linkBase={base} />
      <main>{children}</main>
      <Footer theme={theme} setTheme={setTheme} variant={navVariant} linkBase={base} />
    </React.Fragment>
  );
}

// ── Małe klocki współdzielone przez nowe strony ────────────────────────────

// Platform / free trust row — "Bezpłatna · iPhone, iPad, Mac, Apple Vision · bez Androida"
export function PlatformRow({ style, center = false }) {
  const items = [
    { icon: <Icon.Sparkle />, label: tr("Bezpłatna", "Free") },
    { icon: <Icon.Phone />, label: tr("iPhone · iPad · Mac · Apple Vision", "iPhone · iPad · Mac · Apple Vision") },
    { icon: <Icon.X />, label: tr("Bez wersji na Androida", "No Android version") },
  ];
  return (
    <div
      style={{
        display: "flex", flexWrap: "wrap", gap: 10,
        justifyContent: center ? "center" : "flex-start",
        ...style,
      }}>
      {items.map((it, i) => (
        <span
          key={i}
          style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            fontSize: 13, fontWeight: 500, color: "var(--ink-2)",
            padding: "7px 13px", borderRadius: 999,
            background: "var(--bg-panel)", border: "1px solid var(--line)",
            boxShadow: "var(--shadow-sm)",
          }}>
          <span style={{
            display: "grid", placeItems: "center",
            width: 16, height: 16,
            color: i === 2 ? "var(--status-alert)" : "var(--hdu)",
          }}>
            {React.cloneElement(it.icon, { style: { width: 15, height: 15 } })}
          </span>
          {it.label}
        </span>
      ))}
    </div>);
}

// Related / internal-link cards row (SEO internal linking).
export function RelatedLinks({ title, links }) {
  return (
    <section className="section section--tight section--soft">
      <div className="container">
        <SectionHeader eyebrow={tr("Zobacz też", "See also")} title={title} align="center" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16, maxWidth: 960, margin: "0 auto",
        }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} className="feature-card" style={{ display: "block" }}>
              <span className="feature-card__icon" style={{ background: l.gradient || "var(--hdu-grad)" }}>
                {React.cloneElement(l.icon, { style: { width: 22, height: 22 } })}
              </span>
              <div className="feature-card__orb" style={{ background: l.gradient || "var(--hdu-grad)" }} />
              <h3>{l.label}</h3>
              <p>{l.desc}</p>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                marginTop: 14, fontSize: 14, fontWeight: 600, color: "var(--hdu)",
              }}>
                {tr("Otwórz", "Open")} <Icon.Arrow style={{ width: 15, height: 15 }} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>);
}

// Final download CTA band — App Store + platform note. Reused across landings.
export function DownloadCTA({ title, sub }) {
  return (
    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div style={{
          position: "relative",
          borderRadius: "var(--r-xl)",
          padding: "clamp(40px, 6vw, 72px)",
          background: "linear-gradient(135deg, color-mix(in srgb, var(--hdu) 12%, var(--bg-panel)) 0%, var(--bg-panel) 100%)",
          border: "1px solid color-mix(in srgb, var(--hdu) 24%, var(--line))",
          boxShadow: "var(--shadow-lg)",
          textAlign: "center",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(60% 80% at 50% 0%, rgba(46,111,212,0.16) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative" }}>
            <h2 className="h-section" style={{ maxWidth: 720, margin: "0 auto 18px" }}>{title}</h2>
            <p className="sub" style={{ maxWidth: 560, margin: "0 auto 32px" }}>{sub}</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
              <AppStoreBadge size={56} placement="landing_cta" />
              <PlatformRow center />
            </div>
          </div>
        </div>
      </div>
    </section>);
}

// Alternating feature row: answer-first H2 + checklist on one side, iPhone on the other.
export function SplitFeature({ id, eyebrow, title, answer, points, slotId, placeholder, reverse = false, icon, grad = "var(--stg-blue)", soft = false }) {
  return (
    <section className={`section ${soft ? "section--soft" : ""}`} id={id}>
      <div className="container">
        <div className="split-feature" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
          direction: reverse ? "rtl" : "ltr",
        }}>
          <div style={{ direction: "ltr" }}>
            <Reveal>
              <span className="eyebrow">
                <span style={{ display: "grid", placeItems: "center", width: 16, height: 16, color: "var(--hdu)" }}>
                  {React.cloneElement(icon, { style: { width: 15, height: 15 } })}
                </span>
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="h-section" style={{ margin: "20px 0 0", fontSize: "clamp(30px, 3.6vw, 46px)" }}>{title}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="sub" style={{ margin: "20px 0 0", maxWidth: 520 }}>{answer}</p>
            </Reveal>
            {points && (
              <Reveal delay={220}>
                <div style={{ marginTop: 28 }}>
                  <Checklist items={points} />
                </div>
              </Reveal>
            )}
          </div>
          <Reveal delay={160} style={{ direction: "ltr", display: "flex", justifyContent: "center" }}>
            <IPhone size="md" slotId={slotId} placeholder={placeholder} />
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .split-feature { grid-template-columns: 1fr !important; direction: ltr !important; gap: 40px !important; }
        }
      `}</style>
    </section>);
}
