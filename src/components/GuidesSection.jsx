// GuidesSection.jsx — Section 7
// Phone (GuidesHomeView) + copy + floating "Dla Ciebie" card.

import { Icon } from "./icons.jsx";
import { Reveal, Checklist, IPhone } from "./shared.jsx";

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
            <Reveal>
              <span className="eyebrow">
                <span className="dot" />
                Wiedza w kontekście
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="h-section" style={{ marginTop: 20, marginBottom: 20 }}>
                Odpowiedź zanim zadasz pytanie.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="sub" style={{ marginBottom: 32, maxWidth: 520 }}>
                Baza artykułów, wideo i shorts automatycznie filtrowana
                do Twojego aktualnego etapu prac. Wiedza dokładnie wtedy,
                gdy jej potrzebujesz — nie chaos z dziesięciu zakładek przeglądarki.
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
                  { l: "Fundamenty", g: "var(--stg-blue)" },
                  { l: "Instalacje", g: "var(--stg-purple)" },
                  { l: "Wykończenie", g: "var(--stg-terracotta)" },
                  { l: "Elewacja", g: "var(--stg-rose)" },
                  { l: "Ogród", g: "var(--stg-green)" },
                  { l: "Odbiory", g: "var(--stg-slate)" },
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
                { b: "Sekcja „Dla Ciebie”", r: "z treściami dopasowanymi do Twojego etapu" },
                { b: "Shorts feed", r: "krótkie wideo w stylu TikTok — od ekspertów branży" },
                { b: "Pełna baza artykułów", r: "od fundamentów po odbiory budowlane" },
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
              <IPhone
                size="md"
                slotId="guides-home"
                placeholder="GuidesHomeView.png — Header „Poradniki”, pasek wyszukiwania, category chips (Fundamenty / Instalacje / Wykończenie / Elewacja); sekcja „Dla Ciebie” z 2 kartami wideo (z miniaturami i czasami trwania); poniżej 3 karty artykułów z miniaturami i tytułami w stylu „Jak przygotować się do odbioru elektrycznego”"
              />

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
                  <div>Dla Ciebie — Instalacje</div>
                  <div className="sub-line">8 artykułów · 3 wideo</div>
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
