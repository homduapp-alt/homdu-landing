// HowItWorks.jsx — Section 2
// 3-step explainer with real app screenshots.

import { Reveal, SectionHeader } from "./shared.jsx";

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Stwórz inwestycję",
      desc: "Wybierz typ — budowa, remont lub wykończenie. Odpowiedz na 5 prostych pytań.",
      img: "/assets/how-step-1.png",
      alt: "Konfiguracja inwestycji — wybór typu (Budowa domu / Remont / Wykończenie deweloperskie).",
      gradient: "var(--stg-blue)",
    },
    {
      n: "02",
      title: "Prowadź etap po etapie",
      desc: "Każdy etap ma własny budżet, listę zadań, zdjęcia, dokumenty i kontakty do ekip.",
      img: "/assets/how-step-2.png",
      alt: "Lista etapów inwestycji w aplikacji homdu — Wszystkie etapy.",
      gradient: "var(--stg-purple)",
    },
    {
      n: "03",
      title: "Liczy się każdy paragon.",
      desc: "Kontroluj każdy wydatek i całkowity koszt inwestycji.",
      img: "/assets/how-step-3.png",
      alt: "Ekran Koszty w aplikacji homdu — budżet, wydatki i wykorzystanie.",
      gradient: "var(--stg-teal)",
    },
  ];

  return (
    <section className="section" id="jak-to-dziala">
      <div className="container">
        <SectionHeader
          title="Bez kursu obsługi. Skonfigurowane w minutę."
          sub="Trzy kroki dzielą Cię od pełnej kontroli nad inwestycją."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
          className="hiw-grid"
        >
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 28,
                  position: "relative",
                }}
              >
                {/* gradient backdrop behind phone */}
                <div
                  style={{
                    position: "relative",
                    padding: "56px 28px 28px",
                    borderRadius: 32,
                    background: s.gradient,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  {/* highlight */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(70% 50% at 50% 0%, rgba(255,255,255,0.22) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />
                  <div style={{
                    position: "absolute",
                    top: 20, left: 24,
                    fontSize: 14, fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.02em",
                    fontFamily: "var(--font-mono)",
                  }}>
                    {s.n}
                  </div>
                  <div style={{
                    position: "relative",
                    width: 260,
                    maxWidth: "100%",
                    aspectRatio: "857 / 1759",
                  }}>
                    <img
                      src={s.img}
                      alt={s.alt}
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

                <div style={{ textAlign: "center", maxWidth: 320 }}>
                  <h3 className="h-card" style={{ marginBottom: 10 }}>{s.title}</h3>
                  <p className="lede" style={{ fontSize: 15 }}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hiw-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
