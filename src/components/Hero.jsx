// Hero.jsx — Section 1
// Benefit-driven headline, dual CTA (App Store badge + B2B), real app screenshot.

import { useEffect, useRef } from "react";
import { Icon } from "./icons.jsx";
import { Reveal, FloatingChip, AppStoreBadge } from "./shared.jsx";

export function Hero() {
  // simple parallax for the floating chips
  const wrapRef = useRef(null);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.setProperty("--py", `${cx * -0.04}px`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="section"
      style={{
        paddingTop: 160,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ambient gradient blobs */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-10%", left: "8%",
          width: 620, height: 620, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,111,212,0.20) 0%, transparent 60%)",
          filter: "blur(20px)",
        }} />
        <div style={{
          position: "absolute", top: "18%", right: "-8%",
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(216,112,62,0.14) 0%, transparent 65%)",
          filter: "blur(20px)",
        }} />
        <div style={{
          position: "absolute", bottom: "-22%", left: "28%",
          width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(43,164,118,0.12) 0%, transparent 65%)",
          filter: "blur(20px)",
        }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left: copy ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <Reveal delay={100}>
              <h1 className="h-display">
                Budowa i&nbsp;remont pod&nbsp;kontrolą.<br />
                <span style={{
                  background: "var(--hdu-grad)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}>
                  W&nbsp;końcu.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="sub" style={{ maxWidth: 560 }}>
                Aplikacja homdu prowadzi Cię etap po&nbsp;etapie przez budowę domu
                lub remont mieszkania. Budżet, dokumenty, zdjęcia, zadania
                i&nbsp;kontakty — w&nbsp;jednej aplikacji, zamiast
                w&nbsp;dziesięciu miejscach.
              </p>
            </Reveal>

            {/* Dual CTA: B2C App Store badge + B2B */}
            <Reveal delay={320}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <AppStoreBadge size={56} />
                <a href="/partnerzy" className="btn btn--brand btn--lg">
                  <Icon.Briefcase style={{ width: 16, height: 16 }} />
                  Zostań partnerem homdu
                </a>
              </div>
            </Reveal>

            {/* Two-world split line */}
            <Reveal delay={400}>
              <div
                className="hero-twoworlds"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                  marginTop: 12,
                  paddingTop: 20,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <div style={{ paddingRight: 20, borderRight: "1px solid var(--line)" }}>
                  <div style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                    color: "var(--hdu)", textTransform: "uppercase", marginBottom: 6,
                  }}>
                    Dla inwestorów
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.45, color: "var(--ink-2)" }}>
                    Pełna kontrola nad budową i remontem od pierwszego dnia.
                  </div>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                    color: "var(--ink)", textTransform: "uppercase", marginBottom: 6,
                  }}>
                    Dla partnerów branżowych
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.45, color: "var(--ink-2)" }}>
                    Kontekstowy kanał dotarcia do inwestora w&nbsp;momencie decyzji.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: app screenshot + floating chips ── */}
          <div
            ref={wrapRef}
            style={{
              position: "relative",
              height: 680,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: 0,
              transform: "translateY(var(--py, 0))",
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            className="hero-phone-wrap"
          >
            <Reveal delay={200} style={{ position: "relative" }}>
              <div
                className="hero-screenshot"
                style={{
                  width: 320,
                  aspectRatio: "857 / 1759",
                  maxWidth: "100%",
                  position: "relative",
                }}
              >
                <img
                  src="/assets/hero-phone.webp"
                  alt="Aplikacja homdu — ekran Dziennik z inwestycją Wymarzony Dom"
                  width="857"
                  height="1759"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    imageRendering: "auto",
                  }}
                />
              </div>
            </Reveal>

            {/* Floating chips */}
            <div
              aria-hidden
              className="hero-chips"
              style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            >
              <Reveal delay={500}>
                <FloatingChip
                  icon={<Icon.Users />}
                  gradient="var(--stg-terracotta)"
                  title="Zarządzajcie wspólnie budową"
                  sub="Udostępnij inwestycję"
                  style={{ top: 60, left: -40 }}
                  anim={0}
                />
              </Reveal>
              <Reveal delay={650}>
                <FloatingChip
                  icon={<Icon.Bell />}
                  gradient="var(--stg-amber)"
                  title="Termin za 2 dni"
                  sub="Odbiór elektryczny"
                  style={{ top: 320, right: -56 }}
                  anim={1.2}
                />
              </Reveal>
              <Reveal delay={800}>
                <FloatingChip
                  icon={<Icon.Check />}
                  gradient="var(--stg-green)"
                  title="Etap ukończony"
                  sub="Fundamenty · 9/9 zadań"
                  style={{ bottom: 80, left: -32 }}
                  anim={2.4}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* mobile fallback */}
      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-phone-wrap { height: auto !important; padding: 24px 0; }
          .hero-chips { display: none !important; }
          .hero-twoworlds { grid-template-columns: 1fr !important; gap: 16px !important; }
          .hero-twoworlds > div:first-child { padding-right: 0 !important; border-right: none !important; padding-bottom: 16px; border-bottom: 1px solid var(--line); }
          .hero-twoworlds > div:last-child { padding-left: 0 !important; padding-top: 16px; }
        }
      `}</style>
    </section>
  );
}
