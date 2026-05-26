// CostsSection.jsx — Section 5
// Real Costs dashboard screenshot + bullets, with a donut chart accent.

import { Icon } from "./icons.jsx";
import { Reveal, Checklist } from "./shared.jsx";

export function CostsSection() {
  return (
    <section
      className="section section--soft"
      id="koszty"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1fr)",
            gap: 80,
            alignItems: "center",
          }}
          className="costs-grid"
        >
          {/* ── Left: phone with donut chart accent ── */}
          <Reveal delay={120}>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -40,
                  background: "radial-gradient(50% 50% at 50% 50%, rgba(216, 112, 62, 0.25) 0%, transparent 65%)",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />
              <div style={{
                position: "relative",
                zIndex: 1,
                width: 340,
                maxWidth: "100%",
                aspectRatio: "857 / 1759",
              }}>
                <img
                  src="/assets/costs-dashboard.png"
                  alt="Aplikacja homdu — ekran Koszty: budżet 900 000 zł, wydatki, wykorzystanie 27%."
                  width="857"
                  height="1759"
                  decoding="async"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              {/* floating donut card */}
              <div
                className="glass-strong donut-float"
                style={{
                  position: "absolute",
                  right: -20,
                  bottom: 32,
                  padding: 14,
                  borderRadius: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  animation: "float-y 7s ease-in-out infinite",
                  animationDelay: "0.8s",
                  zIndex: 2,
                }}
              >
                <div className="donut" style={{ width: 56, height: 56 }}>
                  <div className="donut__center">
                    <span className="v" style={{ fontSize: 12 }}>53%</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--ink-2)", fontWeight: 500, letterSpacing: "0.02em" }}>Budżet</div>
                  <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.015em", fontVariantNumeric: "tabular-nums" }}>
                    95&nbsp;000 zł
                  </div>
                  <div style={{ fontSize: 10, color: "var(--ink-3)", marginTop: 1 }}>z 180 000 zł</div>
                </div>
              </div>

              {/* OCR receipt chip */}
              <div
                className="float-chip"
                style={{
                  top: 60,
                  left: -60,
                  animationDelay: "1.6s",
                }}
              >
                <span className="float-chip__icon" style={{ background: "var(--stg-terracotta)" }}>
                  <Icon.Scan />
                </span>
                <div>
                  <div>Skan paragonu</div>
                  <div className="sub-line">OCR: 2 489,00 zł</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Right: copy ── */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="dot" />
                Koszty pod kontrolą
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="h-section" style={{ marginTop: 20, marginBottom: 20 }}>
                Żaden wydatek nie&nbsp;umknie.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="sub" style={{ marginBottom: 32, maxWidth: 520 }}>
                Zrób zdjęcie faktury — OCR wczyta kwotę automatycznie.
                Zawsze wiesz ile zostało z budżetu, do złotówki.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Checklist items={[
                { b: "Skanowanie paragonów", r: "z automatycznym rozpoznawaniem kwot" },
                { b: "Podział kosztów per etap", r: "z donut chartem i kategoriami" },
                { b: "Alert gdy przekroczysz", r: "90% budżetu — zanim będzie za późno" },
                { b: "Trend miesięczny i prognoza", r: "końcowa wartość inwestycji" },
              ]} />
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .costs-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .donut-float { right: 0 !important; bottom: -20px !important; }
        }
      `}</style>
    </section>
  );
}
