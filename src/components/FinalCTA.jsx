// FinalCTA.jsx — B2C conversion section (download). Single focused card.

import { Reveal, SectionHeader } from "./shared.jsx";

const APP_STORE_URL = "https://apps.apple.com/us/app/homdu-budowa-i-remont/id6759539185";

export function FinalCTA() {
  return (
    <section className="section" id="pobierz" style={{ paddingBottom: 80 }}>
      <div className="container">
        <SectionHeader
          title="Twoja inwestycja zaczyna się tutaj."
          sub="Bezpłatna aplikacja na iPhone'a. Dodaj pierwszą inwestycję, a homdu wygeneruje plan dzięki któremu bezproblemowo ogarniesz wszystkie prace."
          align="center"
        />

        <Reveal>
          <div className="final-card final-card--b2c" style={{ maxWidth: 880, margin: "0 auto" }}>
            <FinalAmbient />

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
                Pobierz homdu i&nbsp;przejmij{" "}
                <span style={{
                  background: "linear-gradient(180deg, #6CA4F0 0%, #3A7FE5 100%)",
                  WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
                }}>
                  kontrolę nad inwestycją.
                </span>
              </h3>
              <p style={{
                fontSize: 16, lineHeight: 1.5,
                color: "rgba(245,244,240,0.7)",
                margin: 0, maxWidth: 480,
              }}>
                Wszystkie etapy, koszty, dokumenty i&nbsp;zdjęcia w&nbsp;jednej aplikacji —
                od pierwszego dnia budowy po odbiór.
              </p>

              <div style={{
                marginTop: 36,
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 24, flexWrap: "wrap",
              }}>
                <a
                  className="appstore-badge"
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ filter: "invert(1)" }}
                  aria-label="Pobierz w App Store"
                >
                  <img src="/assets/appstore-badge.svg" alt="Pobierz w App Store" style={{ height: 56 }} />
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

// ── Ambient backdrop ──────────────────────────────────────────────────────
function FinalAmbient() {
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
