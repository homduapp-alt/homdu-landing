// FinalCTA.jsx — Dual conversion section: B2C (download) + B2B (partnership).
// Two parallel paths in one frame — same dark-glass aesthetic, signature blue glow.

import { useMemo } from "react";
import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader } from "./shared.jsx";

export function FinalCTA() {
  return (
    <section className="section" id="pobierz" style={{ paddingBottom: 80 }}>
      <div className="container">
        <SectionHeader
          eyebrow="Zaczynamy?"
          title="Dwie drogi. Jedna aplikacja."
          sub="Wybierz, kim jesteś — inwestor zacznie w 2 minuty, partner branżowy umówi rozmowę w 30."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            alignItems: "stretch",
          }}
          className="final-dual-grid"
        >
          {/* ── B2C side ───────────────────────────────────────────────── */}
          <Reveal>
            <div className="final-card final-card--b2c">
              <FinalAmbient variant="b2c" />

              <div style={{ position: "relative", zIndex: 1 }}>
                <span className="eyebrow" style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.9)",
                }}>
                  <span className="dot" style={{ background: "#3A7FE5", boxShadow: "0 0 0 3px rgba(58,127,229,0.22)" }} />
                  Dla inwestorów
                </span>
                <h3 style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02,
                  margin: "20px 0 16px", textWrap: "balance",
                }}>
                  Twoja inwestycja<br />
                  <span style={{
                    background: "linear-gradient(180deg, #6CA4F0 0%, #3A7FE5 100%)",
                    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
                  }}>
                    zaczyna się tutaj.
                  </span>
                </h3>
                <p style={{
                  fontSize: 16, lineHeight: 1.5,
                  color: "rgba(245,244,240,0.7)",
                  margin: 0, maxWidth: 440,
                }}>
                  Bezpłatna aplikacja na iPhone. Zacznij w&nbsp;2 minuty —
                  homdu wygeneruje plan, a&nbsp;Ty zaczniesz prowadzić budowę.
                </p>
              </div>

              <div style={{ position: "relative", zIndex: 1, marginTop: "auto", paddingTop: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <a
                    className="appstore-badge"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{ filter: "invert(1)" }}
                    aria-label="Pobierz w App Store"
                  >
                    <img src="/assets/appstore-badge.svg" alt="Pobierz w App Store" style={{ height: 56 }} />
                  </a>
                  <div style={{
                    width: 96, height: 96,
                    borderRadius: 14,
                    background: "white",
                    padding: 8,
                  }}>
                    <FakeQR />
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "rgba(245,244,240,0.5)", marginTop: 14 }}>
                  Wymaga iPhone z&nbsp;iOS 17 lub nowszym · Synchronizacja iCloud
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── B2B side ───────────────────────────────────────────────── */}
          <Reveal delay={120}>
            <div className="final-card final-card--b2b">
              <FinalAmbient variant="b2b" />

              <div style={{ position: "relative", zIndex: 1 }}>
                <span className="eyebrow" style={{
                  background: "rgba(46,111,212,0.12)",
                  borderColor: "rgba(46,111,212,0.28)",
                  color: "var(--hdu)",
                }}>
                  <span className="dot" style={{ background: "var(--hdu)" }} />
                  Dla partnerów branżowych
                </span>
                <h3 style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02,
                  margin: "20px 0 16px", textWrap: "balance",
                  color: "var(--ink)",
                }}>
                  Twoja marka<br />
                  <span style={{
                    background: "var(--hdu-grad)",
                    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
                  }}>
                    w&nbsp;etapie decyzji.
                  </span>
                </h3>
                <p className="sub" style={{
                  fontSize: 16, lineHeight: 1.5,
                  margin: 0, maxWidth: 440,
                }}>
                  Kontekstowy kanał dotarcia do inwestora. 30 minut rozmowy
                  i&nbsp;wstępny scenariusz współpracy dopasowany do Twojego celu.
                </p>
              </div>

              <div style={{ position: "relative", zIndex: 1, marginTop: "auto", paddingTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#partner-cta" className="btn btn--primary btn--lg">
                    <Icon.Calendar style={{ width: 16, height: 16 }} />
                    Umów rozmowę
                  </a>
                  <a href="#partner-cta" className="btn btn--ghost btn--lg">
                    <Icon.Download style={{ width: 16, height: 16 }} />
                    Pobierz deck
                  </a>
                </div>
                <div style={{
                  display: "flex", gap: 10, alignItems: "center",
                  fontSize: 13, color: "var(--ink-2)",
                  fontFamily: "var(--font-mono)",
                }}>
                  <Icon.Mail style={{ width: 14, height: 14, color: "var(--hdu)" }} />
                  <a href="mailto:homdu.app@gmail.com" style={{ color: "inherit" }}>homdu.app@gmail.com</a>&nbsp;· odpowiadamy w&nbsp;24h
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .final-card {
          position: relative;
          border-radius: 32px;
          padding: 56px 48px;
          overflow: hidden;
          isolation: isolate;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-lg);
        }
        .final-card--b2c {
          background: linear-gradient(160deg, #15171C 0%, #0B0C10 100%);
          color: #F5F4F0;
        }
        .final-card--b2b {
          background: linear-gradient(160deg, var(--bg-panel) 0%, var(--bg-soft) 100%);
          border: 1px solid var(--line);
          color: var(--ink);
        }
        @media (max-width: 980px) {
          .final-dual-grid { grid-template-columns: 1fr !important; }
          .final-card { padding: 40px 28px !important; min-height: 0 !important; border-radius: 24px !important; }
        }
      `}</style>
    </section>
  );
}

// ── Ambient backdrops ─────────────────────────────────────────────────────
function FinalAmbient({ variant }) {
  if (variant === "b2c") {
    return (
      <>
        <div aria-hidden style={{
          position: "absolute", top: "-25%", left: "-10%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,111,212,0.5) 0%, transparent 60%)",
          filter: "blur(40px)", zIndex: 0,
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: "-30%", right: "-10%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(216,112,62,0.32) 0%, transparent 60%)",
          filter: "blur(40px)", zIndex: 0,
        }} />
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(60% 60% at 50% 50%, black, transparent 90%)",
          WebkitMaskImage: "radial-gradient(60% 60% at 50% 50%, black, transparent 90%)",
          zIndex: 0,
        }} />
      </>
    );
  }
  // b2b
  return (
    <>
      <div aria-hidden style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(46,111,212,0.18) 0%, transparent 65%)",
        filter: "blur(40px)", zIndex: 0,
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: "-30%", left: "-10%",
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(130,70,214,0.12) 0%, transparent 65%)",
        filter: "blur(40px)", zIndex: 0,
      }} />
    </>
  );
}

// Decorative QR — looks the part without scanning to anything real.
function FakeQR() {
  const size = 21;
  const cells = useMemo(() => {
    const out = [];
    let seed = 1234567;
    const rng = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const inFinder = (cx, cy) => x >= cx && x < cx+7 && y >= cy && y < cy+7;
        const finderCell = (cx, cy) => {
          const lx = x - cx, ly = y - cy;
          const onBorder = lx === 0 || lx === 6 || ly === 0 || ly === 6;
          const inner = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
          return onBorder || inner;
        };
        if (inFinder(0, 0))            { if (finderCell(0, 0)) out.push([x, y]); continue; }
        if (inFinder(size-7, 0))       { if (finderCell(size-7, 0)) out.push([x, y]); continue; }
        if (inFinder(0, size-7))       { if (finderCell(0, size-7)) out.push([x, y]); continue; }
        if (rng() > 0.55) out.push([x, y]);
      }
    }
    return out;
  }, []);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%" shapeRendering="crispEdges">
      {cells.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="1" height="1" fill="#0B0C10" />
      ))}
    </svg>
  );
}
