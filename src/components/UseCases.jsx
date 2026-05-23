// UseCases.jsx — Section 9
// Two large cards: Budowa domu vs Remont, each with a phone mock + bullets.

import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader, IPhone } from "./shared.jsx";

export function UseCases() {
  const cases = [
    {
      tag: "Budowa domu",
      gradient: "var(--stg-blue)",
      title: "Od fundamentów po odbiory.",
      sub: "Cały plan od pierwszego dnia. 12 etapów, 80+ zadań, 30+ dokumentów do skompletowania.",
      bullets: [
        "Szablon budowy domu jednorodzinnego",
        "Pozwolenia, projekty, dziennik budowy",
        "Etapy: ziemne → fundamenty → SSO → wykończenie",
      ],
      slotId: "case-house",
      placeholder: "StagesView.png — Siatka 6 kart etapów dla scenariusza „Budowa domu”: Fundamenty (Deep Blue), Mury (Slate), Dach (Purple), Instalacje (Teal), Wykończenie (Terracotta), Elewacja (Rose). Status badge na każdej karcie.",
    },
    {
      tag: "Remont",
      gradient: "var(--stg-terracotta)",
      title: "Łazienka, kuchnia, generalny.",
      sub: "Twój remont pod kontrolą. Krótsze cykle, więcej ekip, mniej miejsca na chaos.",
      bullets: [
        "Szablony: kuchnia, łazienka, generalny",
        "Kontakty do ekip per pomieszczenie",
        "Albumy „przed / w trakcie / po”",
      ],
      slotId: "case-renovation",
      placeholder: "StagesView.png — Siatka 4 kart etapów dla scenariusza „Remont mieszkania”: Demontaż (Slate), Instalacje (Teal), Hydraulika (Green), Wykończenie (Terracotta). Krótsze cykle.",
    },
  ];

  return (
    <section className="section section--soft" id="dla-kogo">
      <div className="container">
        <SectionHeader
          eyebrow="Dla kogo"
          title="Dopasowany do Twojego scenariusza."
          sub="Niezależnie od tego, czy budujesz dom od zera, czy odświeżasz salon — homdu zna Twój flow."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }}
          className="cases-grid"
        >
          {cases.map((c, i) => (
            <Reveal key={c.tag} delay={i * 100}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 32,
                  padding: 36,
                  background: c.gradient,
                  overflow: "hidden",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: 28,
                  minHeight: 580,
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(70% 60% at 80% 0%, rgba(255,255,255,0.22) 0%, transparent 60%)",
                  pointerEvents: "none",
                }} />

                <div style={{ position: "relative" }}>
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
                    marginBottom: 18,
                    letterSpacing: "0.02em",
                  }}>
                    {c.tag === "Budowa domu" ? <Icon.House style={{ width: 13, height: 13 }} /> : <Icon.Hammer style={{ width: 13, height: 13 }} />}
                    {c.tag}
                  </div>
                  <h3 style={{
                    fontSize: "clamp(26px, 2.4vw, 34px)",
                    fontWeight: 600,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.08,
                    margin: 0,
                  }}>
                    {c.title}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.85)",
                    marginTop: 12,
                    marginBottom: 0,
                  }}>
                    {c.sub}
                  </p>
                </div>

                <ul style={{
                  position: "relative",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}>
                  {c.bullets.map((b) => (
                    <li key={b} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.95)",
                    }}>
                      <span style={{
                        width: 18, height: 18,
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.22)",
                        display: "grid", placeItems: "center",
                        flexShrink: 0,
                      }}>
                        <Icon.Check style={{ width: 11, height: 11 }} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{
                  position: "relative",
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}>
                  <IPhone size="sm" slotId={c.slotId} placeholder={c.placeholder} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
