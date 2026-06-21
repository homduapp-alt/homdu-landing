import { tr } from "../i18n.js";
import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader } from "./shared.jsx";

// FeatureGrid.jsx — Section: 8 modules in a 4×2 grid.
// Sharper, result-driven copy. No filler.

export function FeatureGrid() {
  const features = [
    {
      icon: <Icon.Stages />,
      gradient: "var(--stg-blue)",
      title: tr("Etapy", "Stages"),
      desc: tr("Inwestycja podzielona na fazy. Każdy etap zna swój budżet, zadania, ekipy i pliki.", "Your project split into phases. Each stage knows its budget, tasks, crews and files."),
    },
    {
      icon: <Icon.Costs />,
      gradient: "var(--stg-terracotta)",
      title: tr("Budżet", "Budget"),
      desc: tr("Skanuj paragony — OCR wczyta kwotę. Alert przy 90% budżetu. Trend i prognoza końcowa.", "Scan receipts — OCR reads the amount. Alert at 90% of budget. Trend and final forecast."),
    },
    {
      icon: <Icon.Tasks />,
      gradient: "var(--stg-green)",
      title: tr("Zadania", "Tasks"),
      desc: tr("Lista zadań per etap, z terminami i powiadomieniami push. Bez Trello, bez kartek.", "A task list per stage, with deadlines and push notifications. No Trello, no sticky notes."),
    },
    {
      icon: <Icon.Calendar />,
      gradient: "var(--stg-teal)",
      title: tr("Kalendarz", "Calendar"),
      desc: tr("Oś czasu inwestycji. Odbiory, dostawy, terminy — w jednym widoku, nie w pięciu apkach.", "Your project timeline. Inspections, deliveries, deadlines — in one view, not five apps."),
    },
    {
      icon: <Icon.Docs />,
      gradient: "var(--stg-purple)",
      title: tr("Dokumenty", "Documents"),
      desc: tr("Umowy, pozwolenia, projekty — pod ręką, nie w skrzynce mailowej. homdu podpowie czego brakuje.", "Contracts, permits, plans — to hand, not buried in your inbox. homdu flags what's missing."),
    },
    {
      icon: <Icon.Photo />,
      gradient: "var(--stg-rose)",
      title: tr("Zdjęcia", "Photos"),
      desc: tr("Albumy ze zdjęciami z każdego etapu. Dodaj do każdego zdjęcia swoje notatki i potrzebne w przyszłości uwagi.", "Photo albums for every stage. Add your own notes to each photo, plus remarks you'll need later."),
    },
    {
      icon: <Icon.Book />,
      gradient: "var(--stg-amber)",
      title: tr("Poradniki", "Guides"),
      desc: tr("Artykuły i wideo dopasowane do Twojego aktualnego etapu prac — nie chaos z dziesięciu zakładek przeglądarki.", "Articles and videos matched to your current stage of work — not chaos across ten browser tabs."),
    },
    {
      icon: <Icon.Bank />,
      gradient: "var(--stg-slate)",
      title: tr("Finanse i&nbsp;rekomendacje", "Finance &amp; recommendations"),
      desc: tr("Kalkulator finansowania, oferty kredytowe i ubezpieczeniowe partnerów — w odpowiednim etapie.", "A financing calculator, partner loan and insurance offers — at the right stage."),
    },
  ];

  return (
    <section className="section section--soft" id="funkcje">
      <div className="container">
        <SectionHeader
          title={tr("Wszystko w jednym miejscu. Serio, od A do Z.", "Everything in one place. Honestly, from A to Z.")}
          sub={tr("Każdy moduł zaprojektowany pod realny flow polskiej inwestycji budowlanej. Nic czego nie potrzebujesz — wszystko czego potrzebujesz.", "Every module designed around the real flow of a building project. Nothing you don't need — everything you do.")}
          align="center"
        />

        <div className="feature-grid feature-grid--4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 50}>
              <div className="feature-card">
                <div className="feature-card__orb" style={{ background: f.gradient }} />
                <div className="feature-card__icon" style={{ background: f.gradient }}>
                  {f.icon}
                </div>
                <h3 dangerouslySetInnerHTML={{ __html: f.title }} />
                <p dangerouslySetInnerHTML={{ __html: f.desc }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .feature-grid--4 { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 1100px) { .feature-grid--4 { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 880px)  { .feature-grid--4 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px)  { .feature-grid--4 { grid-template-columns: 1fr !important; } }
        .feature-grid--4 .feature-card { padding: 24px !important; }
        .feature-grid--4 .feature-card h3 { font-size: 17px !important; }
        .feature-grid--4 .feature-card p { font-size: 14px !important; }
      `}</style>
    </section>
  );
}
