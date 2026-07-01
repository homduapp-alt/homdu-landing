import { tr } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, AppStoreBadge, IPhone, SectionHeader, FloatingChip } from "./shared.jsx";
import { PlatformRow, RelatedLinks, DownloadCTA, SplitFeature } from "./PageShell.jsx";
import { MiniFAQ, FAQLink } from "./FAQSection.jsx";

// RenovationLanding.jsx — /aplikacja-remont — H1 "Aplikacja do remontu mieszkania"

function RenoHero() {
  return (
    <section className="section" style={{ paddingTop: 148, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: "-10%", width: 600, height: 600, background: "var(--hdu-glow)", pointerEvents: "none", zIndex: 0 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="landing-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />{tr("Remont mieszkania", "Flat renovation")}</span></Reveal>
            <Reveal delay={80}>
              <h1 className="h-display" style={{ margin: "22px 0 0", fontSize: "clamp(42px, 6vw, 78px)" }}>
                {tr("Aplikacja do remontu mieszkania", "The app for renovating a flat")}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="sub" style={{ margin: "24px 0 0", maxWidth: 560 }}>
                {tr(
                  "Ogarnij remont mieszkania pokój po pokoju — etapy wykończenia, budżet, dokumenty, zdjęcia „przed i po” i kontakty do ekip. Bezpłatnie, w ekosystemie Apple.",
                  "Manage your flat renovation room by room — finishing stages, budget, documents, before-and-after photos and crew contacts. Free, in the Apple ecosystem."
                )}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", margin: "32px 0 20px" }}>
                <AppStoreBadge size={56} placement="reno_hero" />
                <a href="/aplikacja-budowa-domu" className="btn btn--ghost btn--lg">
                  {tr("Budujesz dom?", "Building a house?")}
                  <Icon.Arrow style={{ width: 16, height: 16 }} />
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}><PlatformRow /></Reveal>
          </div>
          <Reveal delay={200} style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <IPhone size="lg" slotId="reno-hero-phone" placeholder={tr("Ekran remontu mieszkania", "Flat renovation screen")} />
            <FloatingChip icon={<Icon.Hammer style={{ width: 16, height: 16 }} />} gradient="var(--stg-amber)"
              title={tr("Kuchnia: wykończenie", "Kitchen: finishing")} sub={tr("Płytki i armatura", "Tiles and fittings")} style={{ top: 90, left: -24 }} />
            <FloatingChip icon={<Icon.Photo style={{ width: 16, height: 16 }} />} gradient="var(--stg-rose)"
              title={tr("Zdjęcia przed i po", "Before & after photos")} sub={tr("Pokój po pokoju", "Room by room")} style={{ bottom: 80, right: -20 }} anim={1.5} />
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width: 900px){.landing-hero-grid{grid-template-columns:1fr !important;gap:40px !important}}`}</style>
    </section>);
}

export function RenovationLanding() {
  const faq = [
    {
      q: tr("Czy homdu nadaje się do remontu mieszkania?", "Is homdu suitable for renovating a flat?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Czy homdu nadaje się do remontu mieszkania? Tak — homdu prowadzi zarówno budowę domu, jak i remont mieszkania. Rozbijesz wykończenie na pomieszczenia i etapy, a budżet, zdjęcia i kontakty trzymasz w jednym miejscu.",
        "Is homdu suitable for renovating a flat? Yes — homdu handles both building a house and renovating a flat. You split the finishing into rooms and stages, and keep budget, photos and contacts in one place."
      )}</p>,
    },
    {
      q: tr("Czy aplikacja do remontu jest darmowa?", "Is the renovation app free?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Czy aplikacja do remontu jest darmowa? Tak — pobierzesz homdu i poprowadzisz remont bezpłatnie. Działa na iPhone, iPad, Mac i Apple Vision; obecnie nie ma wersji na Androida.",
        "Is the renovation app free? Yes — you download homdu and run your renovation at no cost. It works on iPhone, iPad, Mac and Apple Vision; there is currently no Android version."
      )}</p>,
    },
    {
      q: tr("Czy poprowadzę remont razem z drugą osobą?", "Can I run the renovation with someone else?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Czy poprowadzę remont z drugą osobą? Tak — jako Właściciel Inwestycji zapraszasz Współpracownika (np. partnera) przez Apple CloudKit. Więcej na stronie ",
        "Can I run it with someone else? Yes — as the Project Owner you invite a Collaborator (e.g. your partner) via Apple CloudKit. More on the "
      )}<FAQLink href="/wspoldzielenie-inwestycji">{tr("współdzielenie inwestycji", "sharing a project")}</FAQLink>.</p>,
    },
  ];

  return (
    <React.Fragment>
      <RenoHero />

      <SplitFeature
        id="etapy" eyebrow={tr("Etapy remontu", "Renovation stages")} icon={<Icon.Stages />} soft
        title={tr("Prowadź remont pokój po pokoju", "Run the renovation room by room")}
        answer={tr(
          "Jak ogarnąć remont mieszkania? Dzielisz remont na pomieszczenia i etapy wykończenia — od demontażu i instalacji, przez tynki i płytki, po malowanie i montaż mebli. Pod każdym etapem trzymasz zadania i terminy, więc wiesz, na czym stoisz.",
          "How do you manage a flat renovation? You split the works into rooms and finishing stages — from demolition and installations, through plaster and tiles, to painting and fitting furniture. Under each stage you keep tasks and deadlines, so you always know where you stand."
        )}
        points={[
          { b: tr("Pomieszczenia i etapy", "Rooms and stages"), r: tr("kuchnia, łazienka, salon…", "kitchen, bathroom, living room…") },
          { b: tr("Zadania i terminy", "Tasks and deadlines"), r: tr("dla każdego etapu wykończenia.", "for every finishing stage.") },
          { b: tr("Status prac", "Work status"), r: tr("zrobione, w toku, zaplanowane.", "done, in progress, planned.") },
        ]}
        slotId="reno-stages" placeholder={tr("Ekran etapów remontu", "Renovation stages screen")} />

      <SplitFeature
        id="koszty" eyebrow={tr("Koszty i budżet", "Costs and budget")} icon={<Icon.Costs />} grad="var(--stg-green)" reverse
        title={tr("Pilnuj budżetu wykończenia", "Keep the finishing budget in check")}
        answer={tr(
          "Jak pilnować budżetu remontu? Zapisujesz wydatki na materiały i robociznę i przypisujesz je do pomieszczeń, a homdu pokazuje, ile już poszło i ile zostało. Remonty lubią rosnąć — tu widzisz to, zanim budżet wymknie się spod kontroli.",
          "How do you keep a renovation budget in check? You record spending on materials and labour and assign it to rooms, and homdu shows how much has gone and how much is left. Renovations tend to grow — here you see it before the budget gets away from you."
        )}
        points={[
          { b: tr("Materiały i robocizna", "Materials and labour"), r: tr("wszystkie wydatki w jednym miejscu.", "all spending in one place.") },
          { b: tr("Podział na pokoje", "By room"), r: tr("zobacz, co pochłania najwięcej.", "see what costs the most.") },
          { b: tr("Zamiast Excela", "Instead of a spreadsheet"), r: tr("budżet zawsze aktualny.", "a budget that's always current.") },
        ]}
        slotId="reno-costs" placeholder={tr("Ekran kosztów remontu", "Renovation costs screen")} />

      <SplitFeature
        id="dokumenty" eyebrow={tr("Zdjęcia i dokumenty", "Photos and documents")} icon={<Icon.Photo />} grad="var(--stg-rose)" soft
        title={tr("Zapisuj zdjęcia „przed i po” oraz dokumenty", "Save before-and-after photos and documents")}
        answer={tr(
          "Gdzie trzymać zdjęcia i dokumenty z remontu? W homdu — robisz zdjęcia „przed i po” dla każdego pomieszczenia, a umowy, faktury i gwarancje zapisujesz przy właściwym etapie. Efekty i papiery masz w jednym miejscu, gotowe do pokazania czy reklamacji.",
          "Where do you keep renovation photos and documents? In homdu — you take before-and-after photos for each room, and save contracts, invoices and warranties next to the right stage. The results and the paperwork stay in one place, ready to show or to claim on."
        )}
        points={[
          { b: tr("Zdjęcia przed i po", "Before-and-after photos"), r: tr("dla każdego pomieszczenia.", "for every room.") },
          { b: tr("Umowy i gwarancje", "Contracts and warranties"), r: tr("faktury i pliki pod ręką.", "invoices and files at hand.") },
          { b: tr("Albumy", "Albums"), r: tr("uporządkowane po pokojach.", "organised by room.") },
        ]}
        slotId="reno-docs" placeholder={tr("Ekran zdjęć remontu", "Renovation photos screen")} />

      <SplitFeature
        id="kontakty" eyebrow={tr("Ekipy", "Crews")} icon={<Icon.Users />} grad="var(--stg-teal)" reverse
        title={tr("Miej kontakty do ekip pod ręką", "Keep crew contacts at hand")}
        answer={tr(
          "Jak nie pogubić kontaktów do ekip? W homdu zapisujesz fachowców przy remoncie — glazurnika, hydraulika, elektryka — z telefonem, zakresem prac i notatkami. Gdy trzeba coś poprawić albo domówić, masz właściwy numer od razu.",
          "How do you keep track of crew contacts? In homdu you save tradespeople next to the renovation — tiler, plumber, electrician — with phone, scope of work and notes. When something needs fixing or adding, you have the right number straight away."
        )}
        points={[
          { b: tr("Fachowcy i ekipy", "Tradespeople and crews"), r: tr("telefon, zakres, notatki.", "phone, scope, notes.") },
          { b: tr("Przy remoncie", "Next to the renovation"), r: tr("wiesz, kto co robił.", "know who did what.") },
          { b: tr("Szybki kontakt", "Quick contact"), r: tr("zadzwoń jednym dotknięciem.", "call in one tap.") },
        ]}
        slotId="reno-contacts" placeholder={tr("Ekran kontaktów", "Contacts screen")} />

      <section className="section section--soft">
        <div className="container">
          <SectionHeader eyebrow={tr("FAQ", "FAQ")} title={tr("Remont mieszkania — szybkie pytania", "Flat renovation — quick questions")} align="center" />
          <MiniFAQ items={faq} />
        </div>
      </section>

      <RelatedLinks
        title={tr("Powiązane strony", "Related pages")}
        links={[
          { href: "/aplikacja-budowa-domu", icon: <Icon.House />, gradient: "var(--stg-blue)",
            label: tr("Aplikacja do budowy domu", "House-build app"),
            desc: tr("To samo podejście, ale dla budowy domu.", "The same approach, but for building a house.") },
          { href: "/wspoldzielenie-inwestycji", icon: <Icon.Users />, gradient: "var(--stg-green)",
            label: tr("Współdzielenie inwestycji", "Sharing a project"),
            desc: tr("Prowadź remont razem z partnerem.", "Run the renovation together with your partner.") },
          { href: "/blog", icon: <Icon.Book />, gradient: "var(--stg-purple)",
            label: tr("Blog homdu", "homdu blog"),
            desc: tr("Poradniki o kosztach, etapach i wykonawcach.", "Guides on costs, stages and contractors.") },
        ]} />

      <DownloadCTA
        title={tr("Zacznij remont z homdu", "Start your renovation with homdu")}
        sub={tr("Pobierz bezpłatnie i prowadź remont mieszkania pokój po pokoju — z budżetem i zdjęciami pod kontrolą.",
                "Download for free and run your flat renovation room by room — with budget and photos under control.")} />
    </React.Fragment>);
}
