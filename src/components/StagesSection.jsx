// StagesSection.jsx — Section 4
// Stage gradients showcase + real StageDetails screenshot.

import { Reveal, Checklist } from "./shared.jsx";

export function StagesSection() {
  const stages = [
    { name: "Fundamenty", gradient: "var(--stg-blue)",       status: "Ukończony", tasks: "9/9" },
    { name: "Instalacje", gradient: "var(--stg-purple)",     status: "W trakcie",  tasks: "4/7" },
    { name: "Tynki",      gradient: "var(--stg-amber)",      status: "Planowany",  tasks: "0/5" },
    { name: "Elektryka",  gradient: "var(--stg-teal)",       status: "Planowany",  tasks: "0/8" },
    { name: "Wykończenie",gradient: "var(--stg-terracotta)", status: "Planowany",  tasks: "0/12" },
    { name: "Elewacja",   gradient: "var(--stg-rose)",       status: "Planowany",  tasks: "0/6" },
    { name: "Ogród",      gradient: "var(--stg-green)",      status: "Planowany",  tasks: "0/4" },
    { name: "Odbiory",    gradient: "var(--stg-slate)",      status: "Planowany",  tasks: "0/3" },
  ];

  return (
    <section className="section" id="etapy">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.9fr)",
            gap: 80,
            alignItems: "center",
          }}
          className="stages-grid"
        >
          {/* ── Left: copy + grid of stage cards ── */}
          <div>
            <Reveal delay={80}>
              <h2 className="h-section" style={{ marginTop: 20, marginBottom: 20 }}>
                Ogarniaj.<br />Etap po etapie.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="sub" style={{ marginBottom: 32, maxWidth: 520 }}>
                Gotowe szablony dla budowy domu, remontu i wykończenia deweloperskiego.
                Nic Cię nie zaskoczy.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Checklist items={[
                { b: "Gotowe szablony", r: "etapów dla budowy, remontu i wykończenia" },
                { b: "Zadania z terminami", r: "i powiadomieniami push na telefon" },
                { b: "Budżet, kontakty i pliki", r: "przypisane do każdego etapu" },
              ]} />
            </Reveal>

            <Reveal delay={360}>
              <div
                style={{
                  marginTop: 40,
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 12,
                }}
                className="stages-tiles"
              >
                {stages.map((s) => (
                  <div className="stage-card" key={s.name} style={{ background: s.gradient, minHeight: 110 }}>
                    <span className="pill">{s.status}</span>
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <h4 style={{ fontSize: 15 }}>{s.name}</h4>
                      <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>{s.tasks} zadań</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Right: phone screenshot ── */}
          <Reveal delay={200}>
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              {/* background gradient */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -40,
                  background: "radial-gradient(50% 50% at 50% 50%, rgba(130, 70, 214, 0.25) 0%, transparent 65%)",
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />
              <div style={{
                position: "relative",
                zIndex: 1,
                width: 340,
                maxWidth: "100%",
                aspectRatio: "857 / 1759",
              }}>
                <img
                  src="/assets/stages-detail.webp"
                  alt="Aplikacja homdu — szczegóły etapu Fundamenty: budżet etapu, wydatki i zadania."
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
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .stages-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .stages-tiles { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
