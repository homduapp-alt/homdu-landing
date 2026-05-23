// RealFlowSection.jsx — "Jak wygląda realny flow"
// 7 steps connected: onboarding → inwestycja → etap → koszt → zdjęcie → dokument → poradnik

import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader } from "./shared.jsx";

export function RealFlowSection() {
  const flow = [
    {
      n: "01",
      g: "var(--stg-blue)",
      icon: <Icon.Sparkle />,
      title: "Onboarding",
      action: "Odpowiadasz na 5 pytań",
      detail: "Typ inwestycji, lokalizacja, harmonogram. homdu generuje plan z 15+ szablonów.",
    },
    {
      n: "02",
      g: "var(--stg-purple)",
      icon: <Icon.House />,
      title: "Inwestycja",
      action: "Tworzysz dom lub mieszkanie",
      detail: "Cover photo, lokalizacja, budżet całkowity. 60 sekund — i masz dashboard.",
    },
    {
      n: "03",
      g: "var(--stg-teal)",
      icon: <Icon.Stages />,
      title: "Etap",
      action: "Wchodzisz w „Instalacje”",
      detail: "Lista zadań, partner etapu, kontakty ekipy, pasek budżetu — wszystko w jednym widoku.",
    },
    {
      n: "04",
      g: "var(--stg-terracotta)",
      icon: <Icon.Scan />,
      title: "Koszt",
      action: "Skanujesz paragon",
      detail: "OCR czyta 2 489 zł, przypisuje do etapu, aktualizuje pasek budżetu i donut chart.",
    },
    {
      n: "05",
      g: "var(--stg-rose)",
      icon: <Icon.Photo />,
      title: "Zdjęcie",
      action: "Dodajesz foto z placu",
      detail: "Trafia do albumu etapu z datą i notatką. Pełnoekranowy podgląd dla rodziny i ekipy.",
    },
    {
      n: "06",
      g: "var(--stg-amber)",
      icon: <Icon.Docs />,
      title: "Dokument",
      action: "Wgrywasz pozwolenie",
      detail: "homdu sprawdza checklistę — „Brakuje zgłoszenia zakończenia”. Nic Ci nie umknie.",
    },
    {
      n: "07",
      g: "var(--stg-green)",
      icon: <Icon.Book />,
      title: "Poradnik",
      action: "Czytasz „Odbiór elektryczny”",
      detail: "Artykuł podpowiedziany kontekstowo — bo akurat masz etap „Instalacje” w trakcie.",
    },
  ];

  return (
    <section className="section section--soft" id="flow" style={{ overflow: "hidden" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Realny flow"
          title="Tak wygląda Twój dzień z homdu."
          sub="Siedem ruchów, które dzielą Cię od pełnej kontroli nad inwestycją. Każdy krok zaprojektowany jak interakcja w aplikacji Apple — szybki, oczywisty, dopracowany."
          align="center"
        />

        <Reveal>
          <div className="flow-rail">
            {flow.map((s, i) => (
              <React.Fragment key={s.n}>
                <div className="flow-card">
                  <div className="flow-card__head">
                    <span className="flow-card__icon" style={{ background: s.g }}>
                      {React.cloneElement(s.icon, { style: { width: 18, height: 18 } })}
                    </span>
                    <span className="flow-card__n">{s.n}</span>
                  </div>
                  <div className="flow-card__title">{s.title}</div>
                  <div className="flow-card__action">{s.action}</div>
                  <div className="flow-card__detail">{s.detail}</div>
                </div>
                {i < flow.length - 1 && (
                  <div className="flow-connector" aria-hidden>
                    <Icon.Arrow style={{ width: 14, height: 14 }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .flow-rail {
          display: flex;
          flex-wrap: nowrap;
          align-items: stretch;
          gap: 0;
          padding: 8px 8px 16px;
          margin: 0 -8px;
          overflow-x: auto;
          scrollbar-width: thin;
        }
        .flow-card {
          flex: 1 1 0;
          min-width: 180px;
          background: var(--bg-panel);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 18px;
          box-shadow: var(--shadow-sm);
          display: flex; flex-direction: column; gap: 8px;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s;
        }
        .flow-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
        .flow-card__head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 6px;
        }
        .flow-card__icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: grid; place-items: center;
          color: white;
          box-shadow: 0 1px 0 rgba(255,255,255,0.25) inset, 0 4px 12px -4px rgba(0,0,0,0.25);
        }
        .flow-card__n {
          font-family: var(--font-mono);
          font-size: 11px; font-weight: 600;
          color: var(--ink-3);
          letter-spacing: 0.04em;
        }
        .flow-card__title {
          font-size: 16px; font-weight: 600; letter-spacing: -0.015em;
          color: var(--ink);
        }
        .flow-card__action {
          font-size: 13px; font-weight: 500;
          color: var(--hdu);
        }
        .flow-card__detail {
          font-size: 12.5px; line-height: 1.45;
          color: var(--ink-2);
        }
        .flow-connector {
          flex: 0 0 auto;
          display: grid; place-items: center;
          color: var(--ink-3);
          padding: 0 6px;
          align-self: center;
        }
        @media (max-width: 1180px) {
          .flow-card { flex: 0 0 200px; }
        }
        @media (max-width: 720px) {
          .flow-rail { padding-bottom: 12px; }
          .flow-card { flex: 0 0 180px; }
          .flow-connector { padding: 0 4px; }
        }
      `}</style>
    </section>
  );
}
