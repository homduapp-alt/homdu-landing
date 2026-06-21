import { tr } from "../i18n.js";
import React from "react";
import { Reveal, SectionHeader } from "./shared.jsx";

// FinalCTA.jsx — B2C conversion section (download). Single focused card.

export function FinalCTA() {
  return (
    <section className="section" id="pobierz" style={{ paddingBottom: 80 }}>
      <div className="container">
        <SectionHeader
          title={tr("Twoja inwestycja zaczyna się tutaj.", "Your project starts here.")}
          sub={tr("Bezpłatna aplikacja na iPhone'a. Dodaj pierwszą inwestycję, a homdu wygeneruje plan dzięki któremu bezproblemowo ogarniesz wszystkie prace.", "A free iPhone app. Add your first project and homdu builds a plan that helps you handle all the work without the stress.")}
          align="center"
        />

        <Reveal>
          <div className="final-card final-card--b2c" style={{ maxWidth: 880, margin: "0 auto" }}>
            <FinalAmbient variant="b2c" />

            <div style={{
              position: "relative", zIndex: 1,
              display: "flex", flexDirection: "column", alignItems: "center",
              textAlign: "center",
            }}>
              <h3 style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.04,
                margin: "0 0 16px", textWrap: "balance",
              }}>
                {tr("Pobierz homdu i\u00a0przejmij", "Download homdu and take")}{" "}
                <span style={{
                  background: "linear-gradient(180deg, #6CA4F0 0%, #3A7FE5 100%)",
                  WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
                }}>
                  {tr("kontrolę nad inwestycją.", "control of your project.")}
                </span>
              </h3>
              <p style={{
                fontSize: 16, lineHeight: 1.5,
                color: "rgba(245,244,240,0.7)",
                margin: 0, maxWidth: 480,
              }}>
                {tr("Wszystkie etapy, koszty, dokumenty i\u00a0zdjęcia w\u00a0jednej aplikacji — od pierwszego dnia budowy po odbiór.", "Every stage, cost, document and photo in one app — from day one of the build to final handover.")}
              </p>

              <div style={{
                marginTop: 36,
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 24, flexWrap: "wrap",
              }}>
                <a
                  className="appstore-badge"
                  href="https://apps.apple.com/us/app/homdu-budowa-i-remont/id6759539185"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-placement="final_cta"
                  style={{ filter: "invert(1)" }}
                  aria-label={tr("Pobierz w App Store", "Download on the App Store")}
                >
                  <img src={tr("/assets/appstore-badge.svg", "/assets/appstore-badge-en.svg")} alt={tr("Pobierz w App Store", "Download on the App Store")} style={{ height: 56 }} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .final-card {
          position: relative;
          border-radius: 32px;
          padding: 64px 48px;
          overflow: hidden;
          isolation: isolate;
          box-shadow: var(--shadow-lg);
        }
        .final-card--b2c {
          background: linear-gradient(160deg, #15171C 0%, #0B0C10 100%);
          color: #F5F4F0;
        }
        @media (max-width: 980px) {
          .final-card { padding: 44px 24px !important; border-radius: 24px !important; }
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
  const cells = React.useMemo(() => {
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
