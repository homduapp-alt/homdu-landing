import { tr } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, Logo, AppStoreBadge, IPhone, SectionHeader, FloatingChip } from "./shared.jsx";
import { PlatformRow, RelatedLinks, DownloadCTA } from "./PageShell.jsx";
import { MiniFAQ, FAQLink } from "./FAQSection.jsx";

// SharingLanding.jsx — /wspoldzielenie-inwestycji
// homdu's flagship differentiator: sharing a project via Apple CloudKit.
// Roles: Właściciel Inwestycji (Owner) → invite → Współpracownik (Collaborator).

function SharingRoleFlow() {
  const steps = [
    {
      icon: <Icon.House />,
      grad: "var(--stg-blue)",
      role: tr("Właściciel Inwestycji", "Project Owner"),
      desc: tr(
        "Zakłada inwestycję w homdu — etapy, budżet, dokumenty i zdjęcia.",
        "Creates the project in homdu — stages, budget, documents and photos."
      ),
    },
    {
      icon: <Icon.Mail />,
      grad: "var(--stg-amber)",
      role: tr("Zaproszenie", "Invitation"),
      desc: tr(
        "Wysyła zaproszenie do współdzielenia — bezpiecznie przez Apple CloudKit.",
        "Sends a sharing invitation — securely, through Apple CloudKit."
      ),
    },
    {
      icon: <Icon.Users />,
      grad: "var(--stg-green)",
      role: tr("Współpracownik", "Collaborator"),
      desc: tr(
        "Dołącza i widzi tę samą inwestycję na swoim iPhonie, iPadzie lub Macu.",
        "Joins and sees the same project on their own iPhone, iPad or Mac."
      ),
    },
  ];
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 16,
    }}>
      {steps.map((s, i) => (
        <div key={i} className="feature-card" style={{ position: "relative" }}>
          <span className="feature-card__icon" style={{ background: s.grad }}>
            {React.cloneElement(s.icon, { style: { width: 22, height: 22 } })}
          </span>
          <div className="feature-card__orb" style={{ background: s.grad }} />
          <div style={{
            position: "absolute", top: 28, right: 28,
            fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600,
            color: "var(--ink-3)",
          }}>0{i + 1}</div>
          <h3>{s.role}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>);
}

export function SharingLanding() {
  const personas = [
    {
      icon: <Icon.Users />,
      grad: "var(--stg-rose)",
      title: tr("Małżeństwo budujące dom", "A couple building a house"),
      desc: tr(
        "Oboje na bieżąco widzą budżet, etapy i decyzje — koniec z „a mówiłeś, że zapłaciłeś za okna”. Każde z Was pracuje na swoim urządzeniu Apple.",
        "Both partners see the budget, stages and decisions in real time — no more “I thought you paid for the windows”. Each of you works from your own Apple device."
      ),
    },
    {
      icon: <Icon.Hammer />,
      grad: "var(--stg-teal)",
      title: tr("Inwestor i kierownik budowy", "Homeowner and site manager"),
      desc: tr(
        "Kierownik budowy dopisuje postępy i zdjęcia z placu, a Ty widzisz je od razu — bez telefonów i rozproszonych wiadomości. Nadajesz dostęp tylko do jednej inwestycji.",
        "The site manager logs progress and site photos, and you see them instantly — without phone calls and scattered messages. You grant access to a single project only."
      ),
    },
  ];

  const faq = [
    {
      q: tr("Czy Współpracownik potrzebuje urządzenia Apple?", "Does the Collaborator need an Apple device?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Czy Współpracownik potrzebuje Apple? Tak — współdzielenie działa przez Apple CloudKit, więc obie osoby korzystają z homdu na iPhonie, iPadzie lub Macu. Nie ma wersji na Androida ani w przeglądarce.",
        "Does the Collaborator need Apple? Yes — sharing works through Apple CloudKit, so both people use homdu on an iPhone, iPad or Mac. There is no Android or browser version."
      )}</p>,
    },
    {
      q: tr("Ile osób mogę zaprosić do inwestycji?", "How many people can I invite to a project?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Ile osób zaproszę? Współdzielisz inwestycję z osobami, które są przy niej naprawdę potrzebne — np. partnerem i kierownikiem budowy. Dostęp nadajesz i cofasz jako Właściciel Inwestycji.",
        "How many people? You share a project with the people who are genuinely involved — e.g. your partner and the site manager. You grant and revoke access as the Project Owner."
      )}</p>,
    },
    {
      q: tr("Czy to bezpieczne?", "Is it secure?"),
      a: <p style={{ margin: 0 }}>{tr(
        "Czy to bezpieczne? Dane współdzielone są przez prywatną przestrzeń Apple CloudKit powiązaną z kontami Apple uczestników. Więcej o przechowywaniu danych znajdziesz w ",
        "Is it secure? Shared data goes through the private Apple CloudKit space tied to participants’ Apple accounts. You can read more about data storage in the "
      )}<FAQLink href={tr("/polityka-prywatnosci#sec-7", "/privacy-policy#sec-7")}>{tr("polityce prywatności", "privacy policy")}</FAQLink>.</p>,
    },
  ];

  return (
    <React.Fragment>
      {/* HERO */}
      <section className="section" style={{ paddingTop: 148, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -80, right: "-10%", width: 600, height: 600,
          background: "var(--hdu-glow)", pointerEvents: "none", zIndex: 0,
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center",
          }} className="sharing-hero-grid">
            <div>
              <Reveal>
                <span className="eyebrow"><span className="dot" />{tr("Wyróżnik homdu", "The homdu difference")}</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="h-display" style={{ margin: "22px 0 0", fontSize: "clamp(40px, 5.6vw, 72px)" }}>
                  {tr("Współdziel inwestycję z partnerem lub kierownikiem budowy",
                     "Share your project with your partner or site manager")}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="sub" style={{ margin: "24px 0 0", maxWidth: 560 }}>
                  {tr(
                    "Budowa i remont to sport zespołowy. W homdu jedna osoba prowadzi inwestycję, a pozostałe widzą te same etapy, koszty i dokumenty — dzięki synchronizacji przez Apple CloudKit.",
                    "Building and renovating is a team sport. In homdu one person runs the project and the others see the same stages, costs and documents — thanks to Apple CloudKit sync."
                  )}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", margin: "32px 0 20px" }}>
                  <AppStoreBadge size={56} placement="sharing_hero" />
                  <a href="/aplikacja-budowa-domu" className="btn btn--ghost btn--lg">
                    {tr("Zobacz aplikację do budowy", "See the build app")}
                    <Icon.Arrow style={{ width: 16, height: 16 }} />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={320}><PlatformRow /></Reveal>
            </div>

            <Reveal delay={200} style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <IPhone
                size="lg"
                slotId="sharing-hero-phone"
                placeholder={tr("Ekran współdzielenia inwestycji", "Project sharing screen")} />
              <FloatingChip
                icon={<Icon.Users style={{ width: 16, height: 16 }} />}
                gradient="var(--stg-green)"
                title={tr("Współpracownik dołączył", "Collaborator joined")}
                sub={tr("Synchronizacja przez CloudKit", "Synced via CloudKit")}
                style={{ top: 90, left: -24 }} />
              <FloatingChip
                icon={<Icon.Costs style={{ width: 16, height: 16 }} />}
                gradient="var(--stg-blue)"
                title={tr("Budżet zaktualizowany", "Budget updated")}
                sub={tr("Widoczne u obu osób", "Visible to both")}
                style={{ bottom: 80, right: -20 }}
                anim={1.5} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--soft" id="jak-dziala">
        <div className="container">
          <SectionHeader
            eyebrow={tr("Jak to działa", "How it works")}
            title={tr("Jak działa współdzielenie inwestycji?", "How does project sharing work?")}
            sub={tr(
              "Jak działa współdzielenie inwestycji? Właściciel Inwestycji zakłada projekt i zaprasza Współpracownika, np. małżonka lub kierownika budowy. Dane synchronizują się przez Apple CloudKit, więc obie osoby pracują na tych samych etapach, kosztach i dokumentach — każde na swoim urządzeniu Apple, na bieżąco.",
              "How does project sharing work? The Project Owner creates the project and invites a Collaborator, e.g. a spouse or site manager. Data syncs through Apple CloudKit, so both people work on the same stages, costs and documents — each on their own Apple device, in real time."
            )}
            align="center"
            maxWidth={820} />
          <SharingRoleFlow />
        </div>
      </section>

      {/* WHO FOR */}
      <section className="section" id="dla-kogo">
        <div className="container">
          <SectionHeader
            eyebrow={tr("Dla kogo", "Who it's for")}
            title={tr("Dla kogo jest współdzielenie?", "Who is sharing for?")}
            sub={tr(
              "Dla kogo jest współdzielenie inwestycji? Dla wszystkich, którzy prowadzą budowę lub remont nie w pojedynkę. Najczęściej to małżeństwo budujące dom oraz inwestor współpracujący z kierownikiem budowy — każda z tych osób potrzebuje tego samego, aktualnego obrazu inwestycji.",
              "Who is project sharing for? For everyone who runs a build or renovation not on their own. Most often that's a couple building a house, and a homeowner working with a site manager — each of them needs the same, up-to-date picture of the project."
            )}
            maxWidth={820} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {personas.map((p, i) => (
              <div key={i} className="feature-card" style={{ padding: 32 }}>
                <span className="feature-card__icon" style={{ background: p.grad, width: 52, height: 52 }}>
                  {React.cloneElement(p.icon, { style: { width: 24, height: 24 } })}
                </span>
                <div className="feature-card__orb" style={{ background: p.grad }} />
                <h3 style={{ fontSize: 21 }}>{p.title}</h3>
                <p style={{ fontSize: 15.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="section section--soft">
        <div className="container">
          <SectionHeader
            eyebrow={tr("FAQ", "FAQ")}
            title={tr("Współdzielenie — szybkie pytania", "Sharing — quick questions")}
            align="center" />
          <MiniFAQ items={faq} />
        </div>
      </section>

      <RelatedLinks
        title={tr("Powiązane strony", "Related pages")}
        links={[
          { href: "/aplikacja-budowa-domu", icon: <Icon.House />, gradient: "var(--stg-blue)",
            label: tr("Aplikacja do budowy domu", "House-build app"),
            desc: tr("Prowadź budowę etapami, kontroluj budżet i dokumenty.", "Run the build in stages, control budget and documents.") },
          { href: "/aplikacja-remont", icon: <Icon.Hammer />, gradient: "var(--stg-amber)",
            label: tr("Aplikacja do remontu", "Renovation app"),
            desc: tr("Remont mieszkania pod kontrolą, pokój po pokoju.", "Flat renovation under control, room by room.") },
          { href: "/", icon: <Icon.Logo />, gradient: "var(--stg-green)",
            label: tr("Strona główna homdu", "homdu home"),
            desc: tr("Poznaj wszystkie funkcje aplikacji homdu.", "Discover everything the homdu app does.") },
        ]} />

      <DownloadCTA
        title={tr("Zacznij prowadzić inwestycję razem", "Start running your project together")}
        sub={tr(
          "Pobierz homdu bezpłatnie i zaproś partnera lub kierownika budowy do wspólnej inwestycji.",
          "Download homdu for free and invite your partner or site manager to a shared project."
        )} />

      <style>{`
        @media (max-width: 900px) {
          .sharing-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </React.Fragment>);
}
