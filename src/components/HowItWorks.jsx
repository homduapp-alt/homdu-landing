// HowItWorks.jsx — Section 2
// 3-step explainer with mini phones for each step.

import { Reveal, SectionHeader, IPhone } from "./shared.jsx";

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Stwórz inwestycję",
      desc: "Wybierz typ — budowa, remont lub wykończenie. Odpowiedz na 5 prostych pytań.",
      placeholder: "OnboardingStep1.png — Wybór typu inwestycji: 3 karty „Budowa domu / Remont / Wykończenie deweloperskie” z wybraną opcją „Budowa domu” (border + checkmark)",
      slotId: "how-step-1",
      gradient: "var(--stg-blue)",
    },
    {
      n: "02",
      title: "Prowadź etap po etapie",
      desc: "Każdy etap ma własny budżet, listę zadań, zdjęcia, dokumenty i kontakty do ekip.",
      placeholder: "StageDetailsView.png — Etap „Instalacje elektryczne” z partnerem (logo), 3 zadania (2 done), album z 8 zdjęciami, budżet 15 000 / 20 000 zł",
      slotId: "how-step-2",
      gradient: "var(--stg-purple)",
    },
    {
      n: "03",
      title: "Miej wszystko pod kontrolą",
      desc: "Donut chart kosztów, alerty przy 90% budżetu, oś czasu wydarzeń i progres etapów.",
      placeholder: "CostsDashboardView.png — Donut chart kosztów per etap, łączny budżet 180 000 zł, wydane 95 000 zł, trend miesięczny, top 3 wydatki",
      slotId: "how-step-3",
      gradient: "var(--stg-teal)",
    },
  ];

  return (
    <section className="section" id="jak-to-dziala">
      <div className="container">
        <SectionHeader
          eyebrow="Jak to działa"
          title="Plan gotowy w 2 minuty."
          sub="Trzy kroki dzielą Cię od pełnej kontroli nad inwestycją. Bez konfiguracji, bez Excela."
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
                    padding: "56px 32px 32px",
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
                  <IPhone size="sm" slotId={s.slotId} placeholder={s.placeholder} />
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
