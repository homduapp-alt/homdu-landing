import { tr } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader } from "./shared.jsx";

// ChaosSection.jsx — "Przed i po" / asymmetric chaos→order comparison.
// Left card (chaos) is visually heavier and warmer; right card (homdu) is
// quieter, cooler, perfectly aligned — kontrast emocjonalny = kontrast wizualny.

export function ChaosSection() {
  const chaos = [
    { icon: <Icon.Note />,   label: tr("Notatki w telefonie", "Notes on your phone"),  meta: tr("47 notatek · gdzie był ten wymiar?", "47 notes · where was that measurement?") },
    { icon: <Icon.Photo />,  label: tr("Galerie zdjęć", "Photo galleries"),        meta: tr("iCloud · 12 albumów · które to przed?", "iCloud · 12 albums · which is the 'before'?") },
    { icon: <Icon.Mail />,   label: tr("Maile z wykonawcami", "Emails with contractors"),  meta: tr("Skrzynka · 312 · szukasz tej wyceny", "Inbox · 312 · hunting for that quote") },
    { icon: <Icon.Excel />,  label: tr("Excel z budżetem", "Budget spreadsheet"),     meta: tr("budzet_v9_FINAL.xlsx · czy na pewno final?", "budget_v9_FINAL.xlsx · final, really?") },
    { icon: <Icon.Folder />, label: tr("Foldery z plikami", "Folders of files"),    meta: tr("Drive · 8 folderów · w którym umowa?", "Drive · 8 folders · which one has the contract?") },
    { icon: <Icon.Phone />,  label: tr("Screeny z WhatsApp", "WhatsApp screenshots"),   meta: tr("182 wiadomości · scroll w nieskończoność", "182 messages · endless scrolling") },
  ];

  const system = [
    { icon: <Icon.Stages />,    label: tr("Etapy", "Stages"),      sub: tr("oś całej inwestycji", "the spine of the project"),         g: "var(--stg-blue)" },
    { icon: <Icon.Costs />,     label: tr("Budżet", "Budget"),     sub: tr("aktualny co do złotówki", "accurate to the penny"),      g: "var(--stg-terracotta)" },
    { icon: <Icon.Docs />,      label: tr("Dokumenty", "Documents"),  sub: tr("przy właściwym etapie", "with the right stage"),        g: "var(--stg-purple)" },
    { icon: <Icon.Photo />,     label: tr("Zdjęcia", "Photos"),    sub: tr("postęp w czasie", "progress over time"),              g: "var(--stg-rose)" },
    { icon: <Icon.Tasks />,     label: tr("Zadania", "Tasks"),     sub: tr("wiesz, co dalej", "you know what's next"),              g: "var(--stg-green)" },
    { icon: <Icon.Calendar />,  label: tr("Kalendarz", "Calendar"),  sub: tr("terminy bez stresu", "deadlines without stress"),           g: "var(--stg-teal)" },
  ];

  return (
    <section className="section" id="chaos">
      <div className="container">
        <SectionHeader
          title={tr("Jedna aplikacja zamiast chaosu.", "One app instead of chaos.")}
          sub={tr("Budowa i remont nie muszą oznaczać frustracji i wkurzenia. homdu porządkuje wszystko w jednym miejscu czyniąc Twój najważniejszy projekt życiowy prostym do ogarnięcia.", "Building and renovating don't have to mean frustration and stress. homdu brings everything together in one place, making the most important project of your life simple to manage.")}
          align="center"
        />

        <div className="chaos-grid">
          {/* ── LEFT: Chaos cluster ── */}
          <Reveal>
            <div className="chaos-card chaos-card--bad">
              {/* warmer noise wash */}
              <div aria-hidden className="chaos-card__noise" />

              <div className="chaos-card__head">
                <div className="chaos-card__badge chaos-card__badge--bad">
                  <Icon.X style={{ width: 12, height: 12 }} />
                  {tr("Tak teraz", "How it is now")}
                </div>
                <div className="chaos-card__metric chaos-card__metric--bad">{tr("6 narzędzi · 0 połączeń", "6 tools · 0 connections")}</div>
              </div>

              <div className="chaos-tiles chaos-tiles--bad">
                {chaos.map((c, i) => (
                  <div
                    key={c.label}
                    className="chaos-tile chaos-tile--bad"
                    style={{ "--rot": `${[-1.4, 1.1, -0.7, 1.4, -1.1, 0.8][i]}deg` }}
                  >
                    <span className="chaos-tile__icon chaos-tile__icon--bad">
                      {React.cloneElement(c.icon, { style: { width: 16, height: 16 } })}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div className="chaos-tile__label">{c.label}</div>
                      <div className="chaos-tile__meta chaos-tile__meta--bad">{c.meta}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chaos-card__foot">
                <b style={{ color: "var(--ink)" }}>{tr("Co tracisz:", "What you lose:")}</b> {tr("czas, kontrolę, kontekst. Decydujesz na podstawie wczorajszego screena.", "time, control, context. You decide based on yesterday's screenshot.")}
              </div>
            </div>
          </Reveal>

          {/* ── ARROW / DIVIDER ── */}
          <div className="chaos-arrow" aria-hidden>
            <div className="chaos-arrow__pill">
              <Icon.Arrow style={{ width: 22, height: 22 }} />
            </div>
          </div>

          {/* ── RIGHT: homdu system ── */}
          <Reveal delay={400}>
            <div className="chaos-card chaos-card--ok">
              <div aria-hidden className="chaos-card__wash" />

              <div className="chaos-card__head">
                <div className="chaos-card__badge chaos-card__badge--ok">
                  <Icon.Check style={{ width: 12, height: 12 }} />
                  {tr("Z homdu", "With homdu")}
                </div>
                <div className="chaos-card__metric chaos-card__metric--ok">{tr("1 aplikacja · 6 modułów", "1 app · 6 modules")}</div>
              </div>

              <div className="chaos-tiles chaos-tiles--ok">
                {system.map((s, i) => (
                  <div
                    key={s.label}
                    className="chaos-tile chaos-tile--ok"
                    style={{ "--idx": i }}
                  >
                    <span className="chaos-tile__icon chaos-tile__icon--ok" style={{ background: s.g }}>
                      {React.cloneElement(s.icon, { style: { width: 16, height: 16 } })}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div className="chaos-tile__label">{s.label}</div>
                      <div className="chaos-tile__meta chaos-tile__meta--ok">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chaos-card__foot">
                <b style={{ color: "var(--ink)" }}>{tr("Co zyskujesz:", "What you gain:")}</b> {tr("jeden kontekst, jedna decyzja. Każdy etap z\u00a0budżetem, dokumentem, zdjęciem i\u00a0zadaniem obok.", "one context, one decision. Every stage with its budget, document, photo and task right there.")}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
