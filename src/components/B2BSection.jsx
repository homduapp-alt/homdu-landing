// B2BSection.jsx — Full B2B / Partners module
// Subsections: A. Header/hook · B. Why brands choose homdu · C. Collaboration
// formats · D. For whom · E. CTA block ("Umów rozmowę" + "Pobierz deck").

import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, IPhone } from "./shared.jsx";

export function B2BSection() {
  const why = [
    {
      icon: <Icon.Target />,
      g: "var(--stg-blue)",
      title: "Wysoka intencja zakupowa",
      desc: "Inwestor w homdu nie przegląda — on właśnie kupuje. Beton, projekt, kredyt, ubezpieczenie. Tu jest decyzja, nie ciekawość.",
    },
    {
      icon: <Icon.Sliders />,
      g: "var(--stg-teal)",
      title: "Ekspozycja w kontekście etapu",
      desc: "Twoja marka pojawia się dokładnie wtedy, kiedy użytkownik jest na etapie, w którym Twój produkt ma sens. Nie wcześniej. Nie później.",
    },
    {
      icon: <Icon.Book />,
      g: "var(--stg-amber)",
      title: "Wartościowy content, nie display",
      desc: "Łączymy obecność marki z poradnikami, kalkulatorami i checklistami. Użytkownik zostaje — bo dostaje wartość, nie tylko kreację.",
    },
    {
      icon: <Icon.ChartLine />,
      g: "var(--stg-purple)",
      title: "Bliżej decyzji niż display",
      desc: "Pomijamy etap „buduję świadomość”. Stoimy obok decyzji zakupowej — tam gdzie klasyczna reklama nie dochodzi.",
    },
  ];

  const formats = [
    {
      tag: "Najwyższa ekspozycja",
      icon: <Icon.Trophy />,
      g: "var(--stg-blue)",
      title: "Główny partner etapu",
      desc: "Twoja marka jako oficjalny partner wybranego etapu — logo, opis, rekomendowane produkty. Maksymalna widoczność w realnym kontekście.",
      bullets: ["Logo i CTA w nagłówku etapu", "Lista rekomendowanych produktów", "Karta partnera z opisem"],
    },
    {
      tag: "Skala",
      icon: <Icon.Store />,
      g: "var(--stg-teal)",
      title: "Producenci w etapie",
      desc: "Obecność wielu marek w katalogu etapu. Idealne dla producentów materiałów, narzędzi i wyposażenia.",
      bullets: ["Karta producenta w katalogu", "Linki do kart produktów", "Filtry per kategoria"],
    },
    {
      tag: "Content",
      icon: <Icon.Book />,
      g: "var(--stg-amber)",
      title: "Poradniki i treści eksperckie",
      desc: "Artykuły, wideo i shorts pod marką eksperta — czytane wtedy, kiedy są potrzebne. Bez bannerów, z merytoryką.",
      bullets: ["Artykuły z brandingiem", "Wideo i shorts feed", "Pozycja eksperta w kategorii"],
    },
    {
      tag: "Finanse",
      icon: <Icon.Bank />,
      g: "var(--stg-purple)",
      title: "Rekomendacje finansowe i ubezpieczeniowe",
      desc: "Oferty kredytowe, leasingowe i ubezpieczeniowe podane w momencie planowania budżetu inwestycji. Konwersja bliżej decyzji.",
      bullets: ["Kalkulator kredytu i raty", "Status ubezpieczenia inwestycji", "Lead z kontekstem inwestycji"],
    },
    {
      tag: "Timing",
      icon: <Icon.Megaphone />,
      g: "var(--stg-rose)",
      title: "Obecność w momencie decyzji",
      desc: "Niestandardowe formaty: powiadomienia push w odpowiednim etapie, eksperci podpinani do checklist, sponsorowane checklisty zakupowe.",
      bullets: ["Sponsorowane checklisty zakupowe", "Push w kontekście etapu", "Eksperci podpięci do zadań"],
    },
  ];

  const segments = [
    { icon: <Icon.Hammer />,    label: "Producenci materiałów",    desc: "Beton, drewno, izolacje, stolarka" },
    { icon: <Icon.Sliders />,   label: "Wyposażenie i instalacje", desc: "AGD, hydraulika, oświetlenie, klima" },
    { icon: <Icon.Bank />,      label: "Banki i finansowanie",     desc: "Kredyty hipoteczne, leasing, BNPL" },
    { icon: <Icon.Shield />,    label: "Ubezpieczyciele",          desc: "OC inwestora, ubezpieczenie domu" },
    { icon: <Icon.Store />,     label: "Retailerzy i marketplace", desc: "Sieci budowlane, e-commerce DIY" },
    { icon: <Icon.Briefcase />, label: "Usługi i deweloperzy",     desc: "Ekipy, dystrybutorzy, biura projektowe" },
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
            <Reveal>
              <span
                className="eyebrow"
                style={{
                  background: "rgba(46,111,212,0.10)",
                  borderColor: "rgba(46,111,212,0.25)",
                  color: "var(--hdu)",
                }}
              >
                <span className="dot" style={{ background: "var(--hdu)" }} />
                Dla partnerów branżowych
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="h-section" style={{ marginTop: 20, marginBottom: 20 }}>
                Twoja marka tam, gdzie&nbsp;zapada{" "}
                <span style={{
                  background: "var(--hdu-grad)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}>
                  decyzja inwestycyjna.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="sub" style={{ marginBottom: 28, maxWidth: 560 }}>
                homdu to kontekstowy kanał dotarcia do inwestora — wtedy, kiedy
                planuje, kupuje i&nbsp;wykonuje. Obecność marki osadzona w&nbsp;realnym
                etapie budowy lub remontu, nie w&nbsp;banerze obok artykułu.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#partner-cta" className="btn btn--primary btn--lg">
                  <Icon.Calendar style={{ width: 16, height: 16 }} />
                  Umów rozmowę
                </a>
                <a href="#partner-cta" className="btn btn--ghost btn--lg">
                  <Icon.Download style={{ width: 16, height: 16 }} />
                  Pobierz deck współpracy
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
              <IPhone
                size="md"
                slotId="b2b-partner-stage"
                placeholder="StageDetailsView z partnerem.png — Etap „Instalacje” z headerem partnera (logo + nazwa producenta), karta „Rekomendowane produkty” (3 produkty z cenami), sekcja „Poradnik partnera” (artykuł + wideo), pasek budżetu 15 000 / 20 000 zł, lista 4 zadań etapu"
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
                  <div>Partner etapu</div>
                  <div className="sub-line">Marka X · Instalacje</div>
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
                  <div>Lead z kontekstem</div>
                  <div className="sub-line">Etap · Budżet · Lokalizacja</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── B. Why partners choose homdu ───────────────────────────────── */}
        <Reveal>
          <div style={{ marginBottom: 32, maxWidth: 760 }}>
            <div style={{
              fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
              color: "var(--hdu)", textTransform: "uppercase", marginBottom: 12,
            }}>
              Dlaczego marki wybierają homdu
            </div>
            <h3 style={{
              fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 600,
              letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0,
              textWrap: "balance",
            }}>
              Cztery powody, których nie da Ci żaden display.
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
            <Reveal key={w.title} delay={i * 70}>
              <div className="feature-card" style={{ minHeight: 240 }}>
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
          <div style={{ marginBottom: 32, maxWidth: 760 }}>
            <div style={{
              fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
              color: "var(--hdu)", textTransform: "uppercase", marginBottom: 12,
            }}>
              Formaty współpracy
            </div>
            <h3 style={{
              fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 600,
              letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0,
              textWrap: "balance",
            }}>
              Pięć sposobów obecności w&nbsp;inwestycji.
            </h3>
            <p className="sub" style={{ marginTop: 14, maxWidth: 620 }}>
              Od głównego partnera etapu, przez producenta w&nbsp;katalogu, po sponsorowane
              poradniki i&nbsp;oferty finansowe. Dobieramy format pod cel kampanii.
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
        <div style={{ marginTop: 96, marginBottom: 32, maxWidth: 760 }}>
          <Reveal>
            <div style={{
              fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
              color: "var(--hdu)", textTransform: "uppercase", marginBottom: 12,
            }}>
              Dla kogo jest współpraca
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h3 style={{
              fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 600,
              letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0,
              textWrap: "balance",
            }}>
              Sześć segmentów, jeden punkt styku z&nbsp;inwestorem.
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

        {/* ── E. CTA block ───────────────────────────────────────────────── */}
        <Reveal>
          <div
            id="partner-cta"
            style={{
              position: "relative",
              borderRadius: 36,
              padding: "64px 56px",
              background: "linear-gradient(160deg, #15171C 0%, #0B0C10 100%)",
              color: "#F5F4F0",
              overflow: "hidden",
              isolation: "isolate",
              boxShadow: "var(--shadow-lg)",
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
                <span className="eyebrow" style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.9)",
                }}>
                  <span className="dot" style={{ background: "#3A7FE5", boxShadow: "0 0 0 3px rgba(58,127,229,0.22)" }} />
                  Rozmowa partnerska
                </span>
                <h3 style={{
                  fontSize: "clamp(32px, 4.4vw, 56px)",
                  fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02,
                  margin: "20px 0 18px", textWrap: "balance",
                }}>
                  Pokaż swoją markę w&nbsp;odpowiednim{" "}
                  <span style={{
                    background: "linear-gradient(180deg, #6CA4F0 0%, #3A7FE5 100%)",
                    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
                  }}>
                    etapie inwestycji.
                  </span>
                </h3>
                <p style={{
                  fontSize: 17, lineHeight: 1.5,
                  color: "rgba(245,244,240,0.7)",
                  margin: 0, maxWidth: 520,
                }}>
                  30 minut rozmowy. Pokażemy realne miejsca w&nbsp;aplikacji, dobierzemy
                  format pod Twój cel i&nbsp;zaproponujemy wstępny scenariusz współpracy.
                </p>
                <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn--lg"
                    style={{
                      background: "#F5F4F0",
                      color: "#0B0C10",
                      boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset, 0 8px 24px -8px rgba(0,0,0,0.4)",
                    }}
                  >
                    <Icon.Calendar style={{ width: 16, height: 16 }} />
                    Umów rozmowę
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn--lg"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "#F5F4F0",
                      border: "1px solid rgba(255,255,255,0.18)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <Icon.Download style={{ width: 16, height: 16 }} />
                    Pobierz deck współpracy
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
                  Kontakt partnerski
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: 14,
                  paddingBottom: 18, borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "var(--hdu-grad)",
                    display: "grid", placeItems: "center",
                    color: "white",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.25) inset",
                  }}>
                    <Icon.Mail style={{ width: 22, height: 22 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(245,244,240,0.55)" }}>E-mail</div>
                    <div style={{ fontSize: 15, fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                      partners@homdu.pl
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "var(--stg-purple)",
                    display: "grid", placeItems: "center",
                    color: "white",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.25) inset",
                  }}>
                    <Icon.Briefcase style={{ width: 22, height: 22 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(245,244,240,0.55)" }}>Partnership Lead</div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>
                      Zespół homdu Partners
                    </div>
                  </div>
                </div>
                <div style={{
                  marginTop: 4, padding: 14, borderRadius: 14,
                  background: "rgba(46,111,212,0.14)",
                  border: "1px solid rgba(46,111,212,0.28)",
                  fontSize: 13, lineHeight: 1.5,
                  color: "rgba(245,244,240,0.92)",
                }}>
                  <b style={{ color: "#fff" }}>Odpowiadamy w&nbsp;24h</b><br />
                  Dla zapytań partnerskich z&nbsp;branży budowlanej, finansowej i&nbsp;retail.
                </div>
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
