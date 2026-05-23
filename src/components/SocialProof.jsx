// SocialProof.jsx — Section 8
// Stats (animated counters) + 3 testimonials + referral program teaser.

import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader, CountUp } from "./shared.jsx";

export function SocialProof() {
  const stats = [
    { v: 2400, suffix: "+", l: "Aktywnych inwestycji" },
    { v: 84,   suffix: " tys.", l: "Zeskanowanych paragonów" },
    { v: 18,   suffix: " M zł", l: "Śledzonych budżetów" },
    { v: 96,   suffix: "%",     l: "Trafia plan w 2 minuty" },
  ];

  const testimonials = [
    {
      quote:
        "Wreszcie mam wszystko w jednym miejscu. Faktury w albumie, zadania w kalendarzu, a ekipy mają swoją zakładkę. Excel poszedł do kosza.",
      who: "Marta K.",
      ctx: "Budowa domu pod Warszawą",
      gradient: "var(--stg-blue)",
      slotId: "avatar-marta",
      placeholder: "Avatar — kobieta, 35-45 lat, naturalne ujęcie, neutralne tło",
    },
    {
      quote:
        "Zrobiłem zdjęcie paragonu jadąc z marketu — kwota pojawiła się sama. Po pół roku wiem co do złotówki, ile mnie kosztował remont kuchni.",
      who: "Tomasz W.",
      ctx: "Remont mieszkania w Krakowie",
      gradient: "var(--stg-terracotta)",
      slotId: "avatar-tomasz",
      placeholder: "Avatar — mężczyzna, 30-45 lat, naturalne ujęcie, neutralne tło",
    },
    {
      quote:
        "Najpierw bałem się że to kolejna „aplikacja do checklisty”. Po pierwszym etapie zrozumiałem — to mój centrum dowodzenia inwestycją.",
      who: "Krzysztof P.",
      ctx: "Wykończenie deweloperskie, Gdańsk",
      gradient: "var(--stg-purple)",
      slotId: "avatar-krzysztof",
      placeholder: "Avatar — mężczyzna, 28-40 lat, naturalne ujęcie, neutralne tło",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Społeczność"
          title="Dołącz do budujących razem z homdu."
          sub="Tysiące inwestorów już zaczęło prowadzić swoje projekty w jednej, spójnej aplikacji."
          align="center"
        />

        {/* ── Stats ── */}
        <Reveal>
          <div
            className="glass-strong"
            style={{
              padding: "32px 40px",
              borderRadius: 24,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
              marginBottom: 60,
            }}
            id="stats-row"
          >
            {stats.map((s) => (
              <div key={s.l} className="stat">
                <span className="stat__v">
                  <CountUp to={s.v} suffix={s.suffix} />
                </span>
                <span className="stat__l">{s.l}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* tiny note that stats are illustrative */}
        <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: -48, marginBottom: 60, textAlign: "center" }}>
          ⓘ Wartości ilustracyjne — zaktualizuj realnymi danymi po publikacji.
        </div>

        {/* ── Testimonials ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 80,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.who} delay={i * 90}>
              <div
                className="feature-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 320,
                  padding: 28,
                  position: "relative",
                }}
              >
                <Icon.Quote style={{
                  width: 28, height: 28,
                  color: "var(--hdu)",
                  opacity: 0.7,
                  marginBottom: 18,
                }} />
                <p style={{
                  fontSize: 16,
                  lineHeight: 1.5,
                  margin: 0,
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                  color: "var(--ink)",
                  flex: 1,
                }}>
                  "{t.quote}"
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: "1px solid var(--line)",
                }}>
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: 999,
                    overflow: "hidden",
                    flexShrink: 0,
                    background: t.gradient,
                    boxShadow: "0 1px 0 rgba(255,255,255,0.2) inset",
                  }}>
                    <image-slot
                      id={t.slotId}
                      placeholder={t.placeholder}
                      shape="circle"
                      style={{ width: 44, height: 44, display: "block" }}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{t.who}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-2)" }}>{t.ctx}</div>
                  </div>
                  <div style={{ marginLeft: "auto", display: "flex", gap: 2, color: "#EAA721" }}>
                    {[0,1,2,3,4].map(n => <Icon.Star key={n} style={{ width: 14, height: 14 }} />)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Referral program teaser ── */}
        <Reveal>
          <div
            style={{
              position: "relative",
              borderRadius: 32,
              padding: 48,
              background: "var(--stg-blue)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
              gap: 48,
              alignItems: "center",
              color: "white",
              boxShadow: "var(--shadow-lg)",
            }}
            className="referral-card"
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(60% 80% at 80% 0%, rgba(255,255,255,0.18) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center", gap: 8,
                padding: "6px 12px",
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 500,
                marginBottom: 16,
                letterSpacing: "0.02em",
              }}>
                <Icon.Trophy style={{ width: 13, height: 13 }} />
                Program poleceń
              </div>
              <h3 style={{
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                margin: 0,
              }}>
                Polecaj. Zdobywaj poziomy.<br />
                Buduj razem z homdu.
              </h3>
              <p style={{
                fontSize: 16,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.85)",
                marginTop: 14,
                marginBottom: 24,
                maxWidth: 440,
              }}>
                6 poziomów, dziesiątki odznak. Unikalny kod polecający dla każdego użytkownika.
              </p>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 18px",
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
                borderRadius: 14,
                fontFamily: "var(--font-mono)",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}>
                <span style={{ opacity: 0.7, fontSize: 12 }}>Twój kod:</span>
                JAKUB25
              </div>
            </div>

            {/* level + badges visual */}
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="glass-strong" style={{
                padding: 20,
                borderRadius: 18,
                color: "var(--ink)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}>
                <div style={{
                  width: 52, height: 52,
                  borderRadius: 14,
                  background: "var(--stg-amber)",
                  display: "grid", placeItems: "center",
                  color: "white",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.25) inset",
                }}>
                  <Icon.Trophy style={{ width: 24, height: 24 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: "var(--ink-2)", fontWeight: 500 }}>Poziom 3 / 6</div>
                  <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em" }}>Pomocnik inwestora</div>
                  <div style={{
                    marginTop: 8,
                    height: 6,
                    borderRadius: 999,
                    background: "var(--line-2)",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      width: "62%",
                      height: "100%",
                      background: "var(--stg-amber)",
                      borderRadius: 999,
                    }} />
                  </div>
                </div>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 10,
              }}>
                {[
                  { g: "var(--stg-blue)",       i: <Icon.House /> },
                  { g: "var(--stg-green)",      i: <Icon.Check /> },
                  { g: "var(--stg-terracotta)", i: <Icon.Hammer /> },
                  { g: "var(--stg-purple)",     i: <Icon.Sparkle /> },
                  { g: "var(--stg-amber)",      i: <Icon.Trophy /> },
                  { g: "var(--stg-teal)",       i: <Icon.Photo /> },
                  { g: "var(--stg-rose)",       i: <Icon.Mail /> },
                  { g: "rgba(255,255,255,0.15)", i: null },
                ].map((b, i) => (
                  <div key={i} style={{
                    aspectRatio: "1",
                    borderRadius: 12,
                    background: b.g,
                    display: "grid", placeItems: "center",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.18)",
                    boxShadow: b.i ? "0 1px 0 rgba(255,255,255,0.25) inset" : "none",
                    opacity: b.i ? 1 : 0.5,
                  }}>
                    {b.i && React.cloneElement(b.i, { style: { width: 18, height: 18 } })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 980px) {
          #stats-row { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .referral-card { grid-template-columns: 1fr !important; padding: 32px !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
