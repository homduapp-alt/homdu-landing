import { tr } from "../i18n.js";
import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader } from "./shared.jsx";

// DocsPhotosSection.jsx — Section 6
// Split layout: DocumentsView (left) + AlbumDetailView (right), with a hero headline above.

export function DocsPhotosSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title={tr("Koniec szukania w skrzynce mailowej.", "No more digging through your inbox.")}
          sub={tr("Umowy, projekty, pozwolenia — skategoryzowane i zawsze dostępne. A zdjęcia postępu trafiają prosto do albumu etapu — z notatkami i datą.", "Contracts, plans, permits — categorised and always to hand. And progress photos go straight into the stage album — with notes and a date.")}
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "stretch",
          }}
          className="dp-grid"
        >
          {/* ── Left: Documents ── */}
          <Reveal>
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                padding: "56px 32px 48px",
                background: "var(--stg-purple)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
                minHeight: 640,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(70% 50% at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              <div style={{ textAlign: "center", color: "white", maxWidth: 380, position: "relative" }}>
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
                  <Icon.Docs style={{ width: 13, height: 13 }} />
                  {tr("Dokumenty", "Documents")}
                </div>
                <h3 style={{
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  margin: 0,
                }}>
                  {tr("Skategoryzowane i\u00a0zawsze pod ręką", "Categorised and always to hand")}
                </h3>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.85)",
                  marginTop: 14,
                }}>
                  {tr("Umowa, projekt budowlany, pozwolenie na budowę. homdu podpowie, których dokumentów jeszcze brakuje.", "Contract, building plans, construction permit. homdu suggests which documents are still missing.")}
                </p>
              </div>
              <div style={{
                position: "relative",
                width: 260,
                maxWidth: "100%",
                aspectRatio: "857 / 1759",
              }}>
                <img
                  src="/assets/docs-list.webp"
                  alt={tr("Aplikacja homdu — ekran Dokumenty: kategorie i lista plików.", "homdu app — Documents screen: categories and file list.")}
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
            </div>
          </Reveal>

          {/* ── Right: Photos ── */}
          <Reveal delay={140}>
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                padding: "56px 32px 48px",
                background: "var(--stg-rose)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
                minHeight: 640,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(70% 50% at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              <div style={{ textAlign: "center", color: "white", maxWidth: 380, position: "relative" }}>
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
                  <Icon.Photo style={{ width: 13, height: 13 }} />
                  {tr("Zdjęcia", "Photos")}
                </div>
                <h3 style={{
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  margin: 0,
                }}>
                  {tr("Historia postępu Twojej budowy", "The progress story of your build")}
                </h3>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.85)",
                  marginTop: 14,
                }}>
                  {tr("Albumy postępu prac przypisane do etapu. Przeglądaj jak galerię — z możliwością zoom i notatką do każdego zdjęcia.", "Progress albums assigned to each stage. Browse them like a gallery — with zoom and a note on every photo.")}
                </p>
              </div>
              <div style={{
                position: "relative",
                width: 260,
                maxWidth: "100%",
                aspectRatio: "857 / 1759",
              }}>
                <img
                  src="/assets/album-grid.webp"
                  alt={tr("Aplikacja homdu — ekran Album: zdjęcia postępu budowy.", "homdu app — Album screen: build progress photos.")}
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
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .dp-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}
