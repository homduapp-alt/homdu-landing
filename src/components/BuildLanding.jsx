import { tr } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, AppStoreBadge, IPhone, SectionHeader, FloatingChip } from "./shared.jsx";
import { PlatformRow, RelatedLinks, DownloadCTA, SplitFeature } from "./PageShell.jsx";
import { MiniFAQ, FAQLink } from "./FAQSection.jsx";

// BuildLanding.jsx — /aplikacja-budowa-domu — H1 "Aplikacja do budowy domu"

function BuildHero() {
  return (
    <section className="section" style={{ paddingTop: 148, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: "-10%", width: 600, height: 600, background: "var(--hdu-glow)", pointerEvents: "none", zIndex: 0 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="landing-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />{tr("Budowa domu", "House build")}</span></Reveal>
            <Reveal delay={80}>
              <h1 className="h-display" style={{ margin: "22px 0 0", fontSize: "clamp(42px, 6vw, 78px)" }}>
                {tr("Aplikacja do budowy domu", "The app for building a house")}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="sub" style={{ margin: "24px 0 0", maxWidth: 560 }}>
                {tr(
                  "Prowadź całą budowę domu w jednym miejscu — etapy, budżet, dokumenty, zdjęcia i kontakty do wykonawców. Bezpłatnie, w ekosystemie Apple.",
                  "Run your whole house build in one place — stages, budget, documents, photos and contractor contacts. Free, in the Apple ecosystem."
                )}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", margin: "32px 0 20px" }}>
                <AppStoreBadge size={56} placement="build_hero" />
                <a href="/wspoldzielenie-inwestycji" className="btn btn--ghost btn--lg">
                  {tr("Współdziel inwestycję", "Share the project")}
                  <Icon.Arrow style={{ width: 16, height: 16 }} />
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}><PlatformRow /></Reveal>
          </div>
          <Reveal delay={200} style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <IPhone size="lg" slotId="build-hero-phone" placeholder={tr("Ekran budowy domu", "House build screen")} />
            <FloatingChip icon={<Icon.Stages style={{ width: 16, height: 16 }} />} gradient="var(--stg-blue)"
              title={tr("Etap: stan surowy", "Stage: shell")} sub={tr("6 z 12 zadań", "6 of 12 tasks")} style={{ top: 90, left: -24 }} />
            <FloatingChip icon={<Icon.Costs style={{ width: 16, height: 16 }} />} gradient="var(--stg-green)"
              title={tr("Budżet w normie", "Budget on track")} sub={tr("Wydatki powiązane z etapem", "Expenses tied to stage")} style={{ bottom: 80, right: -20 }} anim={1.5} />
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width: 900px){.landing-hero-grid{grid-template-columns:1fr !important;gap:40px !important}}`}</style>
    </section>);
}

export function BuildLanding() {
  const faq = [
    {
      q: tr("Czy aplikacja do budowy domu jest darmowa?", "Is the house-build app free?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Czy aplikacja do budowy domu jest darmowa? Tak — homdu pobierzesz i poprowadzisz w niej budowę bez opłat. Działa na iPhone, iPad, Mac i Apple Vision; nie ma wersji na Androida.",
        "Is the house-build app free? Yes — you download homdu and run your build at no cost. It works on iPhone, iPad, Mac and Apple Vision; there is no Android version."
      )}</p>,
    },
    {
      q: tr("Czy poprowadzę budowę razem z kierownikiem budowy?", "Can I run the build with my site manager?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Czy poprowadzę budowę z kierownikiem? Tak — jako Właściciel Inwestycji zapraszasz Współpracownika przez Apple CloudKit. Szczegóły opisujemy na stronie ",
        "Can I run it with my site manager? Yes — as the Project Owner you invite a Collaborator via Apple CloudKit. We describe the details on the "
      )}<FAQLink href="/wspoldzielenie-inwestycji">{tr("współdzielenie inwestycji", "sharing a project")}</FAQLink>.</p>,
    },
    {
      q: tr("Czy homdu zastępuje kosztorys w Excelu?", "Does homdu replace a spreadsheet budget?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Czy homdu zastępuje Excel? W praktyce tak — budżet prowadzisz razem z etapami i wydatkami w jednym miejscu, bez rozjeżdżających się arkuszy. To nie profesjonalny kosztorys inwestorski, ale realna, codzienna kontrola kosztów.",
        "Does homdu replace Excel? In practice yes — you keep the budget together with stages and expenses in one place, without scattered sheets. It's not a professional cost estimate, but real day-to-day cost control."
      )}</p>,
    },
  ];

  return (
    <React.Fragment>
      <BuildHero />

      <SplitFeature
        id="etapy" eyebrow={tr("Etapy", "Stages")} icon={<Icon.Stages />} soft
        title={tr("Prowadź budowę etapami", "Run the build in stages")}
        answer={tr(
          "Jak prowadzić budowę etapami? Dzielisz budowę domu na etapy — od fundamentów, przez stan surowy, po wykończenie — i pod każdym trzymasz zadania, terminy i status. Widzisz od razu, co jest zrobione, co trwa, a co dopiero przed Tobą.",
          "How do you run a build in stages? You split the house build into stages — from foundations, through the shell, to finishing — and under each you keep tasks, deadlines and status. You instantly see what's done, what's in progress and what's still ahead."
        )}
        points={[
          { b: tr("Gotowe etapy", "Ready-made stages"), r: tr("od fundamentów po odbiór.", "from foundations to handover.") },
          { b: tr("Zadania i terminy", "Tasks and deadlines"), r: tr("przypisane do każdego etapu.", "assigned to each stage.") },
          { b: tr("Status na pierwszy rzut oka", "Status at a glance"), r: tr("zrobione, w toku, zaplanowane.", "done, in progress, planned.") },
        ]}
        slotId="build-stages" placeholder={tr("Ekran etapów budowy", "Build stages screen")} />

      <SplitFeature
        id="koszty" eyebrow={tr("Koszty i budżet", "Costs and budget")} icon={<Icon.Costs />} grad="var(--stg-green)" reverse
        title={tr("Kontroluj koszty i budżet", "Control costs and budget")}
        answer={tr(
          "Jak kontrolować budżet budowy? Zapisujesz wydatki i przypisujesz je do etapów, a homdu pokazuje, ile już wydano i ile zostało. Zamiast rozjeżdżających się arkuszy masz jeden, aktualny obraz kosztów całej inwestycji.",
          "How do you control a build budget? You record expenses and assign them to stages, and homdu shows how much has been spent and how much is left. Instead of scattered spreadsheets you get one, up-to-date picture of the whole project's costs."
        )}
        points={[
          { b: tr("Budżet i wydatki", "Budget and expenses"), r: tr("w jednym miejscu, powiązane z etapami.", "in one place, tied to stages.") },
          { b: tr("Podział kosztów", "Cost breakdown"), r: tr("zobacz, gdzie idą pieniądze.", "see where the money goes.") },
          { b: tr("Zastępuje Excel", "Replaces the spreadsheet"), r: tr("bez rozjeżdżających się arkuszy.", "no more scattered sheets.") },
        ]}
        slotId="build-costs" placeholder={tr("Ekran kosztów", "Costs screen")} />

      <SplitFeature
        id="dokumenty" eyebrow={tr("Dokumenty i zdjęcia", "Documents and photos")} icon={<Icon.Docs />} grad="var(--stg-purple)" soft
        title={tr("Trzymaj dokumenty i zdjęcia razem", "Keep documents and photos together")}
        answer={tr(
          "Gdzie trzymać dokumenty i zdjęcia z budowy? W homdu — pozwolenia, umowy, faktury i zdjęcia z placu budowy zapisujesz przy właściwej inwestycji i etapie. Wszystko jest pod ręką na telefonie, więc znajdziesz potrzebny plik dokładnie wtedy, gdy go potrzebujesz.",
          "Where do you keep build documents and photos? In homdu — permits, contracts, invoices and site photos are saved next to the right project and stage. Everything is at hand on your phone, so you find the file you need exactly when you need it."
        )}
        points={[
          { b: tr("Dokumenty i pliki", "Documents and files"), r: tr("pozwolenia, umowy, faktury.", "permits, contracts, invoices.") },
          { b: tr("Zdjęcia i albumy", "Photos and albums"), r: tr("dokumentuj postęp prac.", "document work progress.") },
          { b: tr("Przy właściwym etapie", "Next to the right stage"), r: tr("zawsze wiesz, czego dotyczą.", "always know what they belong to.") },
        ]}
        slotId="build-docs" placeholder={tr("Ekran dokumentów", "Documents screen")} />

      <SplitFeature
        id="kontakty" eyebrow={tr("Wykonawcy", "Contractors")} icon={<Icon.Users />} grad="var(--stg-amber)" reverse
        title={tr("Miej kontakty do wykonawców pod ręką", "Keep contractor contacts at hand")}
        answer={tr(
          "Jak ogarnąć kontakty do wykonawców? W homdu zapisujesz ekipy i fachowców przy inwestycji — telefon, zakres prac, notatki. Kiedy trzeba zadzwonić po hydraulika albo elektryka, masz właściwy numer od razu, bez szukania po wiadomościach.",
          "How do you manage contractor contacts? In homdu you save crews and tradespeople next to the project — phone, scope of work, notes. When you need to call the plumber or electrician, you have the right number straight away, without digging through messages."
        )}
        points={[
          { b: tr("Wykonawcy i ekipy", "Contractors and crews"), r: tr("telefon, zakres, notatki.", "phone, scope, notes.") },
          { b: tr("Przy inwestycji", "Next to the project"), r: tr("zawsze wiesz, kto za co odpowiada.", "always know who does what.") },
          { b: tr("Szybki kontakt", "Quick contact"), r: tr("zadzwoń jednym dotknięciem.", "call in one tap.") },
        ]}
        slotId="build-contacts" placeholder={tr("Ekran kontaktów", "Contacts screen")} />

      <section className="section section--soft">
        <div className="container">
          <SectionHeader eyebrow={tr("FAQ", "FAQ")} title={tr("Budowa domu — szybkie pytania", "House build — quick questions")} align="center" />
          <MiniFAQ items={faq} />
        </div>
      </section>

      <RelatedLinks
        title={tr("Powiązane strony", "Related pages")}
        links={[
          { href: "/aplikacja-remont", icon: <Icon.Hammer />, gradient: "var(--stg-amber)",
            label: tr("Aplikacja do remontu", "Renovation app"),
            desc: tr("To samo podejście, ale dla remontu mieszkania.", "The same approach, but for renovating a flat.") },
          { href: "/wspoldzielenie-inwestycji", icon: <Icon.Users />, gradient: "var(--stg-green)",
            label: tr("Współdzielenie inwestycji", "Sharing a project"),
            desc: tr("Prowadź budowę z partnerem lub kierownikiem budowy.", "Run the build with a partner or site manager.") },
          { href: "/blog", icon: <Icon.Book />, gradient: "var(--stg-purple)",
            label: tr("Blog homdu", "homdu blog"),
            desc: tr("Poradniki o kosztach, etapach i wyborze wykonawcy.", "Guides on costs, stages and choosing a contractor.") },
        ]} />

      <DownloadCTA
        title={tr("Zacznij prowadzić budowę w homdu", "Start running your build in homdu")}
        sub={tr("Pobierz bezpłatnie i zapanuj nad etapami, budżetem i dokumentami od pierwszego dnia.",
                "Download for free and take control of stages, budget and documents from day one.")} />
    </React.Fragment>);
}
