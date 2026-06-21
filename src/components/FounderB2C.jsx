import { tr } from "../i18n.js";
import { Icon } from "./icons.jsx";
import { Reveal } from "./shared.jsx";

// FounderB2C.jsx — "O twórcy" for investors (B2C).
// Warm, personal, human. Photo left / text right; stacks on mobile.
// Lives on index.html, just before SocialProof.

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
                alt={tr("Jakub Matwiejczyk, twórca homdu, przy fundamentach budowanego domu — ujęcie z drona, las w tle", "Jakub Matwiejczyk, founder of homdu, by the foundations of his house under construction — drone shot, forest behind")}
                loading="lazy"
                decoding="async"
              />
              <div className="founder-b2c-chip">
                <span className="float-chip__icon" style={{ background: "var(--stg-blue)" }}>
                  <Icon.House />
                </span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>{tr("Budowa domu", "House build")}</div>
                  <div className="sub-line" style={{ whiteSpace: "nowrap" }}>{tr("Mazowsze", "Mazovia")}</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Copy ── */}
          <div className="founder-b2c-copy">
            <Reveal delay={80}>
              <h2 className="h-section" style={{ marginTop: 0, marginBottom: 22 }}>
                {tr("Stworzyłem homdu, bo sam wiem, jak łatwo zgubić kontrolę nad\u00a0budową.", "I built homdu because I know first-hand how easily you can lose control of a build.")}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="founder-b2c-prose">
                <p>
                  {tr("Nazywam się Jakub Matwiejczyk i\u00a0stworzyłem homdu z\u00a0bardzo prostego powodu — budowa domu albo remont nie powinny opierać się na\u00a0chaosie w\u00a0notatkach, zdjęciach, plikach PDF, wiadomościach od\u00a0ekip i\u00a0dziesiątkach otwartych kart w\u00a0Google.", "My name is Jakub Matwiejczyk, and I built homdu for a very simple reason — building or renovating a home shouldn't rest on chaos spread across notes, photos, PDFs, messages from crews and dozens of open Google tabs.")}
                </p>
                <p>
                  {tr("homdu powstało z\u00a0realnej potrzeby: uporządkować cały proces inwestycji w\u00a0jednym miejscu. Etapy, dokumenty, budżet, decyzje, wykonawcy i\u00a0ważne informacje są zawsze pod\u00a0ręką — dokładnie wtedy, kiedy ich potrzebujesz.", "homdu came from a real need: to bring the whole project into one place. Stages, documents, budget, decisions, contractors and key information are always to hand — exactly when you need them.")}
                </p>
                <p>
                  {tr("To aplikacja dla osób, które chcą budować spokojniej, mądrzej i\u00a0z\u00a0większą kontrolą.", "It's an app for people who want to build more calmly, more wisely and with greater control.")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="founder-b2c-sign">
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>
                    Jakub Matwiejczyk
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-2)" }}>{tr("twórca homdu", "founder of homdu")}</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 14, lineHeight: 1.5 }}>
                {tr("Projektant produktów cyfrowych · twórca treści technologicznych · buduję własny dom", "Digital product designer · technology content creator · building my own house")}
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
