// FounderB2B.jsx — "O twórcy" for partners (B2B).
// Premium / corporate, founder-as-visionary. Self-contained dark block
// (independent of light/dark theme). Text left / portrait right.
// Rendered inside B2BSection, just before the #partner-cta block.
// `onSchedule` is passed down from B2BSection so it shares the Calendly popup.

import { Icon } from "./icons.jsx";
import { Reveal } from "./shared.jsx";

export function FounderB2B({ onSchedule }) {
  return (
    <div className="founder-b2b" id="o-tworcy-b2b">
      {/* grid + glow backdrop */}
      <div aria-hidden className="founder-b2b__bg" />
      <div aria-hidden className="founder-b2b__glow founder-b2b__glow--a" />
      <div aria-hidden className="founder-b2b__glow founder-b2b__glow--b" />

      <div className="founder-b2b__inner">
        {/* ── Text (left) ── */}
        <div className="founder-b2b__copy">
          <Reveal delay={80}>
            <h2 style={{
              fontSize: "clamp(28px, 3.4vw, 46px)",
              fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.06,
              margin: "20px 0 0", color: "#F5F4F0", textWrap: "balance",
            }}>
              Moje pomysły zmieniam{" "}
              <span style={{
                background: "linear-gradient(180deg, #6CA4F0 0%, #3A7FE5 100%)",
                WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
              }}>
                w&nbsp;aplikacje.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="founder-b2b__prose">
              <p>
                Jako twórca homdu buduję produkt, który odpowiada na&nbsp;realny problem
                rynku budowlanego: brak jednego, uporządkowanego miejsca, w&nbsp;którym
                inwestor prowadzi swoją budowę lub&nbsp;remont od&nbsp;pierwszej decyzji
                do&nbsp;zakończenia prac.
              </p>
              <p>
                Z&nbsp;wykształcenia projektant UX/UI z&nbsp;ponad 5-letnim doświadczeniem
                w&nbsp;branży finansowej — projektowałem procesy cyfrowe i&nbsp;aplikacje
                o&nbsp;dużej skali oraz design systemy budowane od&nbsp;podstaw. Równolegle
                zbudowałem społeczność 58&nbsp;tysięcy subskrybentów wokół treści
                technologicznych. To połączenie — głęboka wiedza produktowa i&nbsp;realna
                umiejętność dotarcia do&nbsp;odbiorcy — jest fundamentem homdu.
              </p>
              <p>
                homdu łączy technologię, wiedzę i&nbsp;praktyczne zarządzanie inwestycją.
                Dzięki temu może stać się naturalnym punktem styku między użytkownikami
                a&nbsp;markami, producentami, wykonawcami i&nbsp;ekspertami z&nbsp;branży.
              </p>
              <p>
                Szukam partnerów, którzy chcą być blisko inwestora dokładnie w&nbsp;momencie,
                w&nbsp;którym podejmuje decyzje zakupowe i&nbsp;projektowe.
              </p>
              <p style={{ color: "#F5F4F0", fontWeight: 500 }}>
                Jeżeli Twoja firma chce współtworzyć nowoczesny ekosystem budowy
                i&nbsp;remontu — porozmawiajmy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="founder-b2b__cta">
              <a
                href="#partner-cta"
                onClick={onSchedule}
                className="btn btn--lg"
                style={{
                  background: "#F5F4F0", color: "#0B0C10",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 8px 24px -8px rgba(0,0,0,0.4)",
                }}
              >
                <Icon.Calendar style={{ width: 16, height: 16 }} />
                Nawiąż współpracę z&nbsp;homdu
              </a>
              <a
                href="mailto:homdu.app@gmail.com"
                className="btn btn--lg founder-b2b__ghost"
              >
                <Icon.Mail style={{ width: 16, height: 16 }} />
                Porozmawiajmy o&nbsp;partnerstwie
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── Portrait (right) ── */}
        <Reveal delay={120}>
          <div className="founder-b2b__portrait-wrap">
            <div className="founder-b2b__portrait">
              <img
                src="/assets/founder-portrait.webp"
                alt="Jakub Matwiejczyk, founder homdu — studyjny portret na ciemnym tle"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="founder-b2b__namecard">
              <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>Jakub Matwiejczyk</div>
              <div style={{ fontSize: 13, color: "rgba(245,244,240,0.6)" }}>Founder &amp; Product Designer</div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .founder-b2b {
          position: relative;
          margin-top: 96px;
          border-radius: 36px;
          overflow: hidden;
          isolation: isolate;
          background: linear-gradient(160deg, #15171C 0%, #0B0C10 100%);
          box-shadow: var(--shadow-lg);
        }
        .founder-b2b__bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 75%);
          pointer-events: none;
        }
        .founder-b2b__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.5;
        }
        .founder-b2b__glow--a {
          width: 460px; height: 460px;
          top: -160px; right: -80px;
          background: radial-gradient(circle, rgba(58,127,229,0.55) 0%, transparent 70%);
        }
        .founder-b2b__glow--b {
          width: 420px; height: 420px;
          bottom: -180px; left: -60px;
          background: radial-gradient(circle, rgba(130,70,214,0.45) 0%, transparent 70%);
        }
        .founder-b2b__inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.85fr);
          gap: 56px;
          padding: 64px 56px;
          align-items: center;
        }
        .founder-b2b__eyebrow {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.16);
          color: rgba(255,255,255,0.9);
        }
        .founder-b2b__pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .founder-b2b__pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          font-size: 13px;
          font-weight: 500;
          color: rgba(245,244,240,0.92);
        }
        .founder-b2b__pill-icon {
          display: grid; place-items: center;
          color: #6CA4F0;
          flex-shrink: 0;
        }
        .founder-b2b__prose { margin-top: 28px; max-width: 600px; }
        .founder-b2b__prose p {
          font-size: 15.5px;
          line-height: 1.62;
          color: rgba(245,244,240,0.7);
          margin: 0 0 14px;
          text-wrap: pretty;
        }
        .founder-b2b__prose p:last-child { margin-bottom: 0; }
        .founder-b2b__cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }
        .founder-b2b__ghost {
          background: transparent;
          color: #F5F4F0;
          border: 1px solid rgba(255,255,255,0.22);
        }
        .founder-b2b__ghost:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.34); }
        .founder-b2b__portrait-wrap { position: relative; }
        .founder-b2b__portrait {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          aspect-ratio: 548 / 822;
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 30px 60px -24px rgba(0,0,0,0.7);
          background: #0B0C10;
        }
        .founder-b2b__portrait img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .founder-b2b__namecard {
          position: absolute;
          left: 16px; bottom: 16px;
          padding: 12px 16px;
          border-radius: 14px;
          background: rgba(11,12,16,0.62);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.14);
          color: #F5F4F0;
        }
        @media (max-width: 980px) {
          .founder-b2b__inner {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 44px 24px;
          }
          .founder-b2b__portrait-wrap { order: -1; max-width: 380px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </div>
  );
}
