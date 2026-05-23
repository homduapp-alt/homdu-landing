// FeatureGrid.jsx — Section: 8 modules in a 4×2 grid.

import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader } from "./shared.jsx";

export function FeatureGrid() {
  const features = [
    {
      icon: <Icon.Stages />,
      gradient: "var(--stg-blue)",
      title: "Etapy",
      desc: "Inwestycja podzielona na fazy. Każdy etap zna swój budżet, zadania, ekipy i pliki.",
    },
    {
      icon: <Icon.Costs />,
      gradient: "var(--stg-terracotta)",
      title: "Budżet",
      desc: "Skanuj paragony — OCR wczyta kwotę. Alert przy 90% budżetu. Trend i prognoza końcowa.",
    },
    {
      icon: <Icon.Tasks />,
      gradient: "var(--stg-green)",
      title: "Zadania",
      desc: "Lista zadań per etap, z terminami i powiadomieniami push. Bez Trello, bez kartek.",
    },
    {
      icon: <Icon.Calendar />,
      gradient: "var(--stg-teal)",
      title: "Kalendarz",
      desc: "Oś czasu inwestycji. Odbiory, dostawy, terminy — w jednym widoku, nie w pięciu apkach.",
    },
    {
      icon: <Icon.Docs />,
      gradient: "var(--stg-purple)",
      title: "Dokumenty",
      desc: "Umowy, pozwolenia, projekty — pod ręką, nie w skrzynce mailowej. homdu podpowie czego brakuje.",
    },
    {
      icon: <Icon.Photo />,
      gradient: "var(--stg-rose)",
      title: "Zdjęcia",
      desc: "Albumy postępu per etap. Z notatkami, datą i pełnoekranowym podglądem — jak galeria zawodowa.",
    },
    {
      icon: <Icon.Book />,
      gradient: "var(--stg-amber)",
      title: "Poradniki",
      desc: "Artykuły i wideo dopasowane do Twojego aktualnego etapu prac — nie random treści z Google.",
    },
    {
      icon: <Icon.Bank />,
      gradient: "var(--stg-slate)",
      title: "Finanse i&nbsp;rekomendacje",
      desc: "Kalkulator finansowania, oferty kredytowe i ubezpieczeniowe partnerów — w odpowiednim etapie.",
    },
  ];

  return (
    <section className="section section--soft" id="funkcje">
      <div className="container">
        <SectionHeader
          eyebrow="Wszystko w jednym miejscu"
          title="Osiem modułów. Jedna aplikacja. Twoja inwestycja od A do Z."
          sub="Każdy moduł zaprojektowany pod realny flow polskiej inwestycji budowlanej. Nic czego nie potrzebujesz — wszystko czego potrzebujesz."
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
