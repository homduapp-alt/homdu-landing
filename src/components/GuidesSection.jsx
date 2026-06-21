import { tr } from "../i18n.js";
import { Icon } from "./icons.jsx";
import { Reveal, Checklist } from "./shared.jsx";

// GuidesSection.jsx — Section 7
// Phone (GuidesHomeView) + copy + floating "Dla Ciebie" card.

export function GuidesSection() {
  return (
    <section className="section section--soft" id="poradniki" style={{ overflow: "hidden" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.85fr)",
            gap: 80,
            alignItems: "center",
          }}
          className="guides-grid"
        >
          {/* ── Left: copy ── */}
          <div>
            <Reveal delay={80}>
              <h2 className="h-section" style={{ marginTop: 20, marginBottom: 20 }}>
                {tr("Poradniki z odpowiedziami na Twoje pytania.", "Guides with answers to your questions.")}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="sub" style={{ marginBottom: 32, maxWidth: 520 }}>
                {tr("Baza artykułów, wideo i shorts automatycznie filtrowana do Twojego aktualnego etapu prac. Wiedza dokładnie wtedy, gdy jej potrzebujesz — a nie chaos z Googla i grup na Facebooku.", "A library of articles, videos and shorts, automatically filtered to your current stage of work. Knowledge exactly when you need it — not chaos from Google and Facebook groups.")}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  marginBottom: 28,
                  maxWidth: 480,
                }}
                className="guide-chips"
              >
                {[
                  { l: tr("Fundamenty", "Foundations"), g: "var(--stg-blue)" },
                  { l: tr("Instalacje", "Utilities"), g: "var(--stg-purple)" },
                  { l: tr("Wykończenie", "Finishing"), g: "var(--stg-terracotta)" },
                  { l: tr("Elewacja", "Façade"), g: "var(--stg-rose)" },
                  { l: tr("Ogród", "Garden"), g: "var(--stg-green)" },
                  { l: tr("Odbiory", "Inspections"), g: "var(--stg-slate)" },
                ].map((c) => (
                  <div
                    key={c.l}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 12,
                      background: c.g,
                      color: "white",
                      fontSize: 13,
                      fontWeight: 500,
                      textAlign: "center",
                      boxShadow: "0 1px 0 rgba(255,255,255,0.18) inset, 0 4px 12px -4px rgba(0,0,0,0.2)",
                    }}
                  >
                    {c.l}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <Checklist items={[
                { b: tr("Sekcja „Dla Ciebie”", "A ‘For You’ section"), r: tr("z treściami dopasowanymi do Twojego etapu", "with content matched to your stage") },
                { b: tr("Shorts feed", "Shorts feed"), r: tr("krótkie wideo w stylu TikTok — od ekspertów branży", "short TikTok-style videos — from industry experts") },
                { b: tr("Pełna baza artykułów", "A full article library"), r: tr("od fundamentów po odbiory budowlane", "from foundations to final inspections") },
              ]} />
            </Reveal>
          </div>

          {/* ── Right: phone ── */}
          <Reveal delay={200}>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -40,
                  background: "radial-gradient(50% 50% at 50% 50%, rgba(234, 167, 33, 0.28) 0%, transparent 65%)",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />
              <div style={{
                position: "relative",
                zIndex: 1,
                width: 280,
                maxWidth: "100%",
                aspectRatio: "857 / 1759",
              }}>
                <img
                  src="/assets/guides-home.webp"
                  alt={tr("Aplikacja homdu — ekran Poradniki: baza artykułów, wideo i shorts.", "homdu app — Guides screen: library of articles, videos and shorts.")}
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

              {/* floating featured guide */}
              <div
                className="float-chip"
                style={{
                  top: 100,
                  right: -40,
                  animationDelay: "0.6s",
                  padding: "14px 18px",
                }}
              >
                <span className="float-chip__icon" style={{ background: "var(--stg-amber)" }}>
                  <Icon.PlayCircle />
                </span>
                <div>
                  <div>{tr("Dla Ciebie — Instalacje", "For You — Utilities")}</div>
                  <div className="sub-line">{tr("8 artykułów · 3 wideo", "8 articles · 3 videos")}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .guides-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .guide-chips { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
