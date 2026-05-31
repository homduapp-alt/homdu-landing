// FounderB2C.jsx — "O twórcy" for investors (B2C).
// Warm, personal, human. Photo left / text right; stacks on mobile.
// Lives on index.html, just before SocialProof.

import { Icon } from "./icons.jsx";
import { Reveal } from "./shared.jsx";

export function FounderB2C() {
  return (
    <section className="section" id="o-tworcy">
      <div className="container">
        <div className="founder-b2c-grid">
          {/* ── Photo ── */}
          <Reveal>
            <div className="founder-b2c-photo">
              <img
                src="/assets/founder-site.webp"
                alt="Jakub Matwiejczyk, twórca homdu, przy fundamentach budowanego domu — ujęcie z drona, las w tle"
                loading="lazy"
                decoding="async"
              />
              <div className="founder-b2c-chip">
                <span className="float-chip__icon" style={{ background: "var(--stg-blue)" }}>
                  <Icon.House />
                </span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>Budowa domu</div>
                  <div className="sub-line" style={{ whiteSpace: "nowrap" }}>Mazowsze</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Copy ── */}
          <div className="founder-b2c-copy">
            <Reveal delay={80}>
              <h2 className="h-section" style={{ marginTop: 0, marginBottom: 22 }}>
                Stworzyłem homdu, bo sam wiem, jak łatwo zgubić kontrolę nad&nbsp;budową.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="founder-b2c-prose">
                <p>
                  Nazywam się Jakub Matwiejczyk i&nbsp;stworzyłem homdu z&nbsp;bardzo prostego
                  powodu — budowa domu albo remont nie powinny opierać się na&nbsp;chaosie
                  w&nbsp;notatkach, zdjęciach, plikach PDF, wiadomościach od&nbsp;ekip
                  i&nbsp;dziesiątkach otwartych kart w&nbsp;Google.
                </p>
                <p>
                  homdu powstało z&nbsp;realnej potrzeby: uporządkować cały proces inwestycji
                  w&nbsp;jednym miejscu. Etapy, dokumenty, budżet, decyzje, wykonawcy i&nbsp;ważne
                  informacje są zawsze pod&nbsp;ręką — dokładnie wtedy, kiedy ich potrzebujesz.
                </p>
                <p>
                  To aplikacja dla osób, które chcą budować spokojniej, mądrzej
                  i&nbsp;z&nbsp;większą kontrolą.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="founder-b2c-sign">
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>
                    Jakub Matwiejczyk
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-2)" }}>twórca homdu</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 14, lineHeight: 1.5 }}>
                Projektant produktów cyfrowych · twórca treści technologicznych · buduję własny dom
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .founder-b2c-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
        }
        .founder-b2c-photo {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          background: var(--bg-soft);
          border: 1px solid var(--glass-border);
          box-shadow: var(--shadow-lg);
        }
        .founder-b2c-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          display: block;
        }
        .founder-b2c-chip {
          position: absolute;
          left: 18px;
          bottom: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 14px;
          background: var(--glass-bg-2);
          backdrop-filter: blur(36px) saturate(190%);
          -webkit-backdrop-filter: blur(36px) saturate(190%);
          border: 1px solid var(--glass-border);
          box-shadow: var(--shadow-md);
        }
        .founder-b2c-chip .sub-line { font-size: 11px; color: var(--ink-2); }
        .founder-b2c-prose p {
          font-size: 17px;
          line-height: 1.62;
          color: var(--ink-2);
          margin: 0 0 16px;
          max-width: 560px;
          text-wrap: pretty;
        }
        .founder-b2c-prose p:last-child { margin-bottom: 0; }
        .founder-b2c-sign {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
        }
        .founder-b2c-cta {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        @media (max-width: 980px) {
          .founder-b2c-grid { grid-template-columns: 1fr; gap: 36px; }
          .founder-b2c-photo { max-width: 460px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  );
}
