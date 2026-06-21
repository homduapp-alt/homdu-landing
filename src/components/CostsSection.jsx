import { tr } from "../i18n.js";
import { Icon } from "./icons.jsx";
import { Reveal, Checklist } from "./shared.jsx";

// CostsSection.jsx — Section 5
// Phone mock (CostsDashboardView) + bullets, with a donut chart accent.

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
                  src="/assets/costs-dashboard.webp"
                  alt={tr("Aplikacja homdu — ekran Koszty: budżet 900 000 zł, wydatki, wykorzystanie 27%.", "homdu app — Costs screen: budget 900,000 zł, expenses, 27% used.")}
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
                  <div style={{ fontSize: 10, color: "var(--ink-2)", fontWeight: 500, letterSpacing: "0.02em" }}>{tr("Budżet", "Budget")}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.015em", fontVariantNumeric: "tabular-nums" }}>
                    95&nbsp;000 zł
                  </div>
                  <div style={{ fontSize: 10, color: "var(--ink-3)", marginTop: 1 }}>{tr("z 180 000 zł", "of 180,000 zł")}</div>
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
                  <div>{tr("Skan paragonu", "Receipt scan")}</div>
                  <div className="sub-line">{tr("OCR: 2 489,00 zł", "OCR: 2,489.00 zł")}</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Right: copy ── */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="dot" />
                {tr("Koszty pod kontrolą", "Costs under control")}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="h-section" style={{ marginTop: 20, marginBottom: 20 }}>
                {tr("Żaden wydatek nie\u00a0umknie.", "No expense slips through.")}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="sub" style={{ marginBottom: 32, maxWidth: 520 }}>
                {tr("Zrób zdjęcie faktury — OCR wczyta kwotę automatycznie. Zawsze wiesz ile zostało z budżetu, do złotówki.", "Snap a photo of an invoice — OCR reads the amount automatically. You always know how much budget is left, to the penny.")}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Checklist items={[
                { b: tr("Skanowanie paragonów", "Receipt scanning"), r: tr("z automatycznym rozpoznawaniem kwot", "with automatic amount recognition") },
                { b: tr("Podział kosztów per etap", "Cost breakdown per stage"), r: tr("z donut chartem i kategoriami", "with a donut chart and categories") },
                { b: tr("Alert gdy przekroczysz", "An alert when you pass"), r: tr("90% budżetu — zanim będzie za późno", "90% of budget — before it's too late") },
                { b: tr("Trend miesięczny i prognoza", "Monthly trend and forecast"), r: tr("końcowa wartość inwestycji", "of the final project cost") },
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
