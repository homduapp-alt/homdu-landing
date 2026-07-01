import { tr } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, Logo } from "./shared.jsx";
import { FounderB2B } from "./FounderB2B.jsx";

// B2BSection.jsx — Full B2B / Partners module
// Stays in homdu's design language: deep-blue accent, glass cards, gradient tiles,
// iPhone mock — but a darker, more "operacyjny" container so the section reads as
// a parallel world (investor ↔ partner) without breaking the aesthetic.
//
// Subsections:
//   A. Header / hook
//   B. Why brands choose homdu (4 reasons)
//   C. Collaboration formats (5 cards)
//   D. For whom (6 segments)
//   E. CTA block: "Umów rozmowę" + "Pobierz deck"

export function B2BSection() {
  const CALENDLY_URL = "https://calendly.com/homdu-app/30min?hide_gdpr_banner=1";
  const openCalendly = (e) => {
    if (e) e.preventDefault();
    // Meta Pixel: opening Calendly = Contact (initiation). Lead fires only on
    // the confirmed booking (calendly.event_scheduled), handled in analytics.js.
    if (window.homduAnalytics) window.homduAnalytics.contactCalendly("partner_cta");
    if (window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // fallback if the widget script hasn't loaded yet
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  };

  const why = [
    {
      icon: <Icon.Target />,
      g: "var(--stg-blue)",
      title: tr("Wysoka intencja zakupowa", "High purchase intent"),
      desc: tr("Inwestor w homdu nie przegląda — on właśnie planuje. Dachówka, okna, pustaki czy rodzaj ubezpieczenia. Tu jest decyzja, nie ciekawość.", "A homeowner in homdu isn't browsing — they're planning. Roof tiles, windows, blocks or the type of insurance. This is the decision, not idle curiosity."),
    },
    {
      icon: <Icon.Sliders />,
      g: "var(--stg-teal)",
      title: tr("Ekspozycja w kontekście etapu", "Exposure in the context of the stage"),
      desc: tr("Twoja marka pojawia się dokładnie wtedy, kiedy użytkownik jest na etapie, w którym Twój produkt ma sens. Nie wcześniej. Nie później.", "Your brand appears exactly when the user is at the stage where your product makes sense. Not earlier. Not later."),
    },
    {
      icon: <Icon.Book />,
      g: "var(--stg-amber)",
      title: tr("Wartościowy content, nie display", "Valuable content, not display ads"),
      desc: tr("Łączymy obecność marki z poradnikami, kalkulatorami i checklistami. Użytkownik zostaje — bo dostaje wartość, nie tylko kreację.", "We pair your brand presence with guides, calculators and checklists. Users stay — because they get value, not just a banner."),
    },
    {
      icon: <Icon.ChartLine />,
      g: "var(--stg-purple)",
      title: tr("Bliżej decyzji niż display", "Closer to the decision than display"),
      desc: tr("Pomijamy etap „buduję świadomość”. Stoimy obok decyzji zakupowej — tam gdzie klasyczna reklama nie dochodzi.", "We skip the 'building awareness' stage. We stand right beside the purchase decision — where classic advertising never reaches."),
    },
  ];

  const formats = [
    {
      tag: tr("Najwyższa ekspozycja", "Top exposure"),
      icon: <Icon.Trophy />,
      g: "var(--stg-blue)",
      title: tr("Główny partner etapu", "Lead stage partner"),
      desc: tr("Twoja marka jako oficjalny partner wybranego etapu — logo, opis, rekomendowane produkty. Maksymalna widoczność w realnym kontekście.", "Your brand as the official partner of a chosen stage — logo, description, recommended products. Maximum visibility in a real context."),
      bullets: [tr("Logo i CTA w nagłówku etapu", "Logo and CTA in the stage header"), tr("Lista rekomendowanych produktów", "List of recommended products"), tr("Karta partnera z opisem", "Partner card with a description")],
    },
    {
      tag: tr("Skala", "Scale"),
      icon: <Icon.Store />,
      g: "var(--stg-teal)",
      title: tr("Producenci w etapie", "Manufacturers in a stage"),
      desc: tr("Obecność wielu marek w katalogu etapu. Idealne dla producentów materiałów, narzędzi i wyposażenia.", "A presence for multiple brands in the stage catalogue. Ideal for manufacturers of materials, tools and equipment."),
      bullets: [tr("Karta producenta w katalogu", "Manufacturer card in the catalogue"), tr("Linki do kart produktów", "Links to product pages"), tr("Filtry per kategoria", "Filters per category")],
    },
    {
      tag: tr("Content", "Content"),
      icon: <Icon.Book />,
      g: "var(--stg-amber)",
      title: tr("Poradniki i treści eksperckie", "Guides and expert content"),
      desc: tr("Artykuły, wideo i shorts pod marką eksperta — czytane wtedy, kiedy są potrzebne. Bez bannerów, z merytoryką.", "Articles, videos and shorts under an expert's brand — read exactly when they're needed. No banners, all substance."),
      bullets: [tr("Artykuły z brandingiem", "Branded articles"), tr("Wideo i shorts feed", "Video and shorts feed"), tr("Pozycja eksperta w kategorii", "Expert positioning in a category")],
    },
    {
      tag: tr("Finanse", "Finance"),
      icon: <Icon.Bank />,
      g: "var(--stg-purple)",
      title: tr("Rekomendacje finansowe i ubezpieczeniowe", "Financial and insurance recommendations"),
      desc: tr("Oferty kredytowe, leasingowe i ubezpieczeniowe podane w momencie planowania budżetu inwestycji. Konwersja bliżej decyzji.", "Loan, leasing and insurance offers shown at the moment the project budget is being planned. Conversion closer to the decision."),
      bullets: [tr("Kalkulator kredytu i raty", "Loan and instalment calculator"), tr("Status ubezpieczenia inwestycji", "Project insurance status"), tr("Lead z kontekstem inwestycji", "Lead with project context")],
    },
    {
      tag: tr("Timing", "Timing"),
      icon: <Icon.Megaphone />,
      g: "var(--stg-rose)",
      title: tr("Obecność w momencie decyzji", "Presence at the moment of decision"),
      desc: tr("Niestandardowe formaty: powiadomienia push w odpowiednim etapie, eksperci podpinani do checklist, sponsorowane checklisty zakupowe.", "Custom formats: push notifications at the right stage, experts linked to checklists, sponsored shopping checklists."),
      bullets: [tr("Sponsorowane checklisty zakupowe", "Sponsored shopping checklists"), tr("Push w kontekście etapu", "Push in the context of a stage"), tr("Eksperci podpięci do zadań", "Experts linked to tasks")],
    },
    {
      tag: tr("Fast track", "Fast track"),
      icon: <Icon.Bolt />,
      g: "var(--stg-green)",
      title: tr("Hot leady", "Hot leads"),
      desc: tr("Dostajesz gotowe pliki i informacje potrzebne do przygotowania wyceny. Kontaktuj się z inwestorami w ramach ścieżki fast track.", "You get ready-made files and the information needed to prepare a quote. Reach homeowners through the fast-track path."),
      bullets: [tr("Komplet plików do wyceny", "A complete file set for a quote"), tr("Dane kontaktowe inwestora", "Homeowner contact details"), tr("Priorytetowa ścieżka fast track", "Priority fast-track path")],
    },
  ];

  const segments = [
    { icon: <Icon.Hammer />,    label: tr("Producenci materiałów", "Material manufacturers"),    desc: tr("Dachówki, pompy ciepła, fotowoltaika, okna, drzwi", "Roof tiles, heat pumps, solar PV, windows, doors") },
    { icon: <Icon.Sliders />,   label: tr("Wyposażenie i instalacje", "Fittings and utilities"), desc: tr("AGD, hydraulika, oświetlenie, klima", "Appliances, plumbing, lighting, air-con") },
    { icon: <Icon.Bank />,      label: tr("Banki i finansowanie", "Banks and financing"),     desc: tr("Kredyty i pożyczki", "Loans and credit") },
    { icon: <Icon.Shield />,    label: tr("Ubezpieczyciele", "Insurers"),          desc: tr("Ubezpieczenie budowy, domu i mieszkania", "Build, home and flat insurance") },
    { icon: <Icon.Store />,     label: tr("Retailerzy i marketplace", "Retailers and marketplaces"), desc: tr("Sieci budowlane, e-commerce DIY", "Builders' merchants, DIY e-commerce") },
    { icon: <Icon.Briefcase />, label: tr("Usługodawcy", "Service providers"),     desc: tr("Ekipy, dystrybutorzy, biura projektowe", "Crews, distributors, design studios") },
  ];

  return (
    <section
      className="section b2b-section"
      id="dla-partnerow"
      style={{ position: "relative", overflow: "hidden", paddingTop: 120, paddingBottom: 120 }}
    >
      {/* Section-wide ambient backdrop, deep-blue tonal so it reads as "the partner side of homdu" */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-10%", right: "-10%",
          width: 720, height: 720, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,111,212,0.16) 0%, transparent 60%)",
          filter: "blur(20px)",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-10%",
          width: 620, height: 620, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(130,70,214,0.10) 0%, transparent 65%)",
          filter: "blur(20px)",
        }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── A. Header / Hook ───────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: 64,
            alignItems: "center",
            marginBottom: 96,
          }}
          className="b2b-hero"
        >
          <div>
            <Reveal delay={100}>
              <h1 className="h-section" style={{ marginTop: 0, marginBottom: 20 }}>
                {tr("Twoja marka tam, gdzie\u00a0zapada", "Your brand where the")}{" "}
                <span style={{
                  background: "var(--hdu-grad)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}>
                  {tr("decyzja inwestycyjna.", "investment decision is made.")}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="sub" style={{ marginBottom: 28, maxWidth: 560 }}>
                {tr("homdu to kontekstowy kanał dotarcia do inwestora — wtedy, kiedy planuje, kupuje i\u00a0wykonuje. Obecność marki osadzona w\u00a0realnym etapie budowy lub remontu, nie w\u00a0banerze obok artykułu.", "homdu is a contextual channel for reaching the homeowner — when they're planning, buying and building. Brand presence embedded in a real stage of the build or renovation, not in a banner next to an article.")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#partner-cta" className="btn btn--primary btn--lg" onClick={openCalendly}>
                  <Icon.Calendar style={{ width: 16, height: 16 }} />
                  {tr("Umów rozmowę", "Book a call")}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: phone with partner-context screen */}
          <Reveal delay={200}>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute", inset: -40,
                  background: "radial-gradient(50% 50% at 50% 50%, rgba(46,111,212,0.28) 0%, transparent 65%)",
                  filter: "blur(20px)", zIndex: 0,
                }}
              />
              <img
                src="/assets/partner-fundamenty.webp"
                alt={tr("Aplikacja homdu — etap Fundamenty: główny partner etapu, inni producenci etapu i budżet etapu (5000 / 45 000 zł).", "homdu app — Foundations stage: lead stage partner, other manufacturers in the stage and the stage budget (5,000 / 45,000 zł).")}
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: 320,
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.35))",
                }}
              />

              {/* Brand chip */}
              <div
                className="float-chip"
                style={{ top: 80, left: -60, animationDelay: "0.4s" }}
              >
                <span className="float-chip__icon" style={{ background: "var(--stg-blue)" }}>
                  <Icon.Briefcase />
                </span>
                <div>
                  <div>{tr("Partner etapu", "Stage partner")}</div>
                  <div className="sub-line">{tr("Marka X · Instalacje", "Brand X · Utilities")}</div>
                </div>
              </div>

              {/* Conversion chip */}
              <div
                className="float-chip"
                style={{ bottom: 70, right: -50, animationDelay: "1.4s" }}
              >
                <span className="float-chip__icon" style={{ background: "var(--stg-green)" }}>
                  <Icon.ChartLine />
                </span>
                <div>
                  <div>{tr("Lead z kontekstem", "Lead with context")}</div>
                  <div className="sub-line">{tr("Etap · Budżet · Lokalizacja", "Stage · Budget · Location")}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── B. Why partners choose homdu ───────────────────────────────── */}
        <Reveal>
          <div id="dlaczego" style={{ marginBottom: 32, maxWidth: 760, scrollMarginTop: 96 }}>
            <h3 style={{
              fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 600,
              letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0,
              textWrap: "balance",
            }}>
              {tr("Dlaczego marki wybierają homdu", "Why brands choose homdu")}
            </h3>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 96,
          }}
          className="b2b-why-grid"
        >
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 70} style={{ height: "100%" }}>
              <div className="feature-card" style={{ minHeight: 240, height: "100%" }}>
                <div className="feature-card__orb" style={{ background: w.g }} />
                <div className="feature-card__icon" style={{ background: w.g }}>
                  {w.icon}
                </div>
                <h3 style={{ fontSize: 18 }}>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── C. Collaboration formats ───────────────────────────────────── */}
        <Reveal>
          <div id="formaty" style={{ marginBottom: 32, maxWidth: 760, scrollMarginTop: 96 }}>
            <div style={{
              fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
              color: "var(--hdu)", textTransform: "uppercase", marginBottom: 12,
            }}>
              {tr("Formaty współpracy", "Partnership formats")}
            </div>
            <h3 style={{
              fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 600,
              letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0,
              textWrap: "balance",
            }}>
              {tr("Sześć sposobów obecności w\u00a0inwestycji.", "Six ways to be present in a project.")}
            </h3>
            <p className="sub" style={{ marginTop: 14, maxWidth: 620 }}>
              {tr("Od głównego partnera etapu, przez producenta w\u00a0katalogu, po sponsorowane poradniki i\u00a0oferty finansowe. Dobieramy format pod cel kampanii.", "From lead stage partner, through manufacturer in the catalogue, to sponsored guides and financial offers. We match the format to your campaign goal.")}
            </p>
          </div>
        </Reveal>

        <div className="b2b-formats">
          {formats.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="b2b-format-card">
                <div
                  className="b2b-format-card__viz"
                  style={{ background: f.g }}
                  aria-hidden
                >
                  <div className="b2b-format-card__viz-glow" />
                  <span className="b2b-format-card__icon">
                    {React.cloneElement(f.icon, { style: { width: 26, height: 26 } })}
                  </span>
                  <span className="b2b-format-card__tag">{f.tag}</span>
                </div>
                <div className="b2b-format-card__body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                  <ul>
                    {f.bullets.map((b) => (
                      <li key={b}>
                        <span className="ck-mini"><Icon.Check style={{ width: 10, height: 10 }} /></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── D. For whom ────────────────────────────────────────────────── */}
        <div id="dla-kogo" style={{ marginTop: 96, marginBottom: 32, maxWidth: 760, scrollMarginTop: 96 }}>
          <Reveal>
            <h3 style={{
              fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 600,
              letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0,
              textWrap: "balance",
            }}>
              {tr("Dla kogo jest współpraca z\u00a0homdu?", "Who is a homdu partnership for?")}
            </h3>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            marginBottom: 96,
          }}
          className="b2b-segments"
        >
          {segments.map((s, i) => (
            <Reveal key={s.label} delay={i * 50}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 22px",
                  borderRadius: 18,
                  background: "var(--bg-panel)",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s",
                }}
                className="b2b-seg"
              >
                <span style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(46,111,212,0.08)",
                  border: "1px solid rgba(46,111,212,0.18)",
                  display: "grid", placeItems: "center",
                  color: "var(--hdu)",
                  flexShrink: 0,
                }}>
                  {React.cloneElement(s.icon, { style: { width: 20, height: 20 } })}
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 2 }}>
                    {s.desc}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── E. Founder (premium, dark) ─────────────────────────────────── */}
        <FounderB2B onSchedule={openCalendly} />

        {/* ── F. CTA block ───────────────────────────────────────────────── */}
        <Reveal>
          <div
            id="partner-cta"
            style={{
              position: "relative",
              marginTop: 28,
              borderRadius: 36,
              padding: "64px 56px",
              background: "linear-gradient(160deg, #15171C 0%, #0B0C10 100%)",
              color: "#F5F4F0",
              overflow: "hidden",
              isolation: "isolate",
              boxShadow: "var(--shadow-lg)",
              scrollMarginTop: 96,
            }}
            className="b2b-cta-card"
          >
            <div aria-hidden style={{
              position: "absolute", top: "-30%", left: "-15%",
              width: 600, height: 600, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(46,111,212,0.5) 0%, transparent 60%)",
              filter: "blur(40px)", zIndex: -1,
            }} />
            <div aria-hidden style={{
              position: "absolute", bottom: "-30%", right: "-15%",
              width: 600, height: 600, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(130,70,214,0.32) 0%, transparent 60%)",
              filter: "blur(40px)", zIndex: -1,
            }} />
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(60% 60% at 50% 50%, black, transparent 90%)",
              WebkitMaskImage: "radial-gradient(60% 60% at 50% 50%, black, transparent 90%)",
              zIndex: -1,
            }} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
                gap: 48,
                alignItems: "center",
              }}
              className="b2b-cta-grid"
            >
              <div>
                <h3 style={{
                  fontSize: "clamp(32px, 4.4vw, 56px)",
                  fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02,
                  margin: "0 0 18px", textWrap: "balance",
                }}>
                  {tr("Reklamuj się na\u00a0odpowiednim", "Advertise at the right")}{" "}
                  <span style={{
                    background: "linear-gradient(180deg, #6CA4F0 0%, #3A7FE5 100%)",
                    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
                  }}>
                    {tr("etapie inwestycji.", "stage of the project.")}
                  </span>
                </h3>
                <p style={{
                  fontSize: 17, lineHeight: 1.5,
                  color: "rgba(245,244,240,0.7)",
                  margin: 0, maxWidth: 520,
                }}>
                  {tr("30 minut rozmowy. Pokażemy realne miejsca w\u00a0aplikacji, dobierzemy format pod Twój cel i\u00a0zaproponujemy wstępny scenariusz współpracy.", "A 30-minute call. We'll show you real placements in the app, match a format to your goal and propose an initial outline for working together.")}
                </p>
                <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href="#"
                    onClick={openCalendly}
                    className="btn btn--lg"
                    style={{
                      background: "#F5F4F0",
                      color: "#0B0C10",
                      boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 8px 24px -8px rgba(0,0,0,0.4)",
                    }}
                  >
                    <Icon.Calendar style={{ width: 16, height: 16 }} />
                    {tr("Umów rozmowę", "Book a call")}
                  </a>
                </div>
              </div>

              {/* Right: contact / proof panel */}
              <div
                className="glass-strong"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.14)",
                  padding: 28,
                  borderRadius: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  color: "#F5F4F0",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(245,244,240,0.55)" }}>
                  {tr("Kontakt partnerski", "Partner contact")}
                </div>
                <a
                  href="mailto:homdu.app@gmail.com"
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    width: "100%", textAlign: "left",
                    padding: "14px 16px", borderRadius: 14,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "#F5F4F0", cursor: "pointer",
                    textDecoration: "none",
                    transition: "background 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.24)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "var(--hdu-grad)",
                    display: "grid", placeItems: "center",
                    color: "white",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.25) inset",
                    flexShrink: 0,
                  }}>
                    <Icon.Mail style={{ width: 22, height: 22 }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 11, color: "rgba(245,244,240,0.55)" }}>{tr("E-mail", "Email")}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                      homdu.app@gmail.com
                    </div>
                  </div>
                  <Icon.Arrow style={{ width: 18, height: 18, marginLeft: "auto", flexShrink: 0, opacity: 0.7 }} />
                </a>
                <button
                  onClick={openCalendly}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    width: "100%", textAlign: "left",
                    padding: "14px 16px", borderRadius: 14,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "#F5F4F0", cursor: "pointer",
                    font: "inherit",
                    transition: "background 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.24)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "var(--stg-blue)",
                    display: "grid", placeItems: "center",
                    color: "white",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.25) inset",
                    flexShrink: 0,
                  }}>
                    <Icon.Calendar style={{ width: 22, height: 22 }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 11, color: "rgba(245,244,240,0.55)" }}>{tr("Kalendarz online", "Online calendar")}</div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>
                      {tr("Wybierz termin rozmowy", "Pick a time to talk")}
                    </div>
                  </div>
                  <Icon.Arrow style={{ width: 18, height: 18, marginLeft: "auto", flexShrink: 0, opacity: 0.7 }} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        /* B2B grids */
        .b2b-why-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 1100px) { .b2b-why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 620px)  { .b2b-why-grid { grid-template-columns: 1fr !important; } }

        .b2b-formats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .b2b-formats > .reveal:nth-child(1),
        .b2b-formats > .reveal:nth-child(2) {
          grid-column: span 1;
        }
        @media (max-width: 1100px) { .b2b-formats { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 700px)  { .b2b-formats { grid-template-columns: 1fr; } }

        .b2b-format-card {
          position: relative;
          border-radius: var(--r-lg);
          background: var(--bg-panel);
          border: 1px solid var(--line);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s;
          height: 100%;
        }
        .b2b-format-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }

        .b2b-format-card__viz {
          position: relative;
          height: 130px;
          overflow: hidden;
          color: white;
          padding: 18px 22px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .b2b-format-card__viz-glow {
          position: absolute; inset: 0;
          background: radial-gradient(70% 60% at 100% 0%, rgba(255,255,255,0.22) 0%, transparent 65%);
          pointer-events: none;
        }
        .b2b-format-card__icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.24);
          backdrop-filter: blur(12px);
          display: grid; place-items: center;
          color: white;
          position: relative;
        }
        .b2b-format-card__tag {
          position: relative;
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(10px);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .b2b-format-card__body {
          padding: 22px 24px 24px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .b2b-format-card__body h4 {
          margin: 0;
          font-size: 19px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .b2b-format-card__body p {
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          color: var(--ink-2);
        }
        .b2b-format-card__body ul {
          list-style: none;
          padding: 0;
          margin: 8px 0 0;
          display: flex; flex-direction: column; gap: 8px;
        }
        .b2b-format-card__body li {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px;
          color: var(--ink);
        }
        .ck-mini {
          width: 18px; height: 18px; border-radius: 999px;
          background: var(--hdu-grad);
          color: white;
          display: grid; place-items: center;
          box-shadow: 0 3px 8px -2px rgba(46,111,212,0.4);
          flex-shrink: 0;
        }

        .b2b-seg:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
        @media (max-width: 880px) { .b2b-segments { grid-template-columns: 1fr !important; } }

        @media (max-width: 980px) {
          .b2b-hero { grid-template-columns: 1fr !important; gap: 48px !important; }
          .b2b-cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .b2b-cta-card { padding: 48px 28px !important; border-radius: 24px !important; }
        }
      `}</style>
    </section>
  );
}
