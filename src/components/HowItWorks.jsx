import { tr } from "../i18n.js";
import { Reveal, SectionHeader } from "./shared.jsx";

// HowItWorks.jsx — Section 2
// 3-step explainer with mini phones for each step.

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: tr("Stwórz inwestycję", "Create your project"),
      desc: tr("Wybierz typ — budowa, remont lub wykończenie. Odpowiedz na 5 prostych pytań.", "Choose the type — build, renovation or fit-out. Answer 5 simple questions."),
      img: "/assets/how-step-1.webp",
      alt: tr("Konfiguracja inwestycji — wybór typu (Budowa domu / Remont / Wykończenie deweloperskie).", "Project setup — choosing the type (House build / Renovation / Developer fit-out)."),
      gradient: "var(--stg-blue)",
    },
    {
      n: "02",
      title: tr("Prowadź etap po etapie", "Run it stage by stage"),
      desc: tr("Każdy etap ma własny budżet, listę zadań, zdjęcia, dokumenty i kontakty do ekip.", "Each stage has its own budget, task list, photos, documents and contractor contacts."),
      img: "/assets/how-step-2.webp",
      alt: tr("Lista etapów inwestycji w aplikacji homdu — Wszystkie etapy.", "List of project stages in the homdu app — All stages."),
      gradient: "var(--stg-purple)",
    },
    {
      n: "03",
      title: tr("Liczy się każdy paragon.", "Every receipt counts."),
      desc: tr("Kontroluj każdy wydatek i całkowity koszt inwestycji.", "Track every expense and the total cost of your project."),
      img: "/assets/how-step-3.webp",
      alt: tr("Ekran Koszty w aplikacji homdu — budżet, wydatki i wykorzystanie.", "Costs screen in the homdu app — budget, expenses and usage."),
      gradient: "var(--stg-teal)",
    },
  ];

  return (
    <section className="section" id="jak-to-dziala">
      <div className="container">
        <SectionHeader
          title={tr("Bez kursu obsługi. Skonfigurowane w minutę.", "No manual needed. Set up in a minute.")}
          sub={tr("Trzy kroki dzielą Cię od pełnej kontroli nad inwestycją.", "Three steps stand between you and full control of your project.")}
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
