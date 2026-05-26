// ChaosSection.jsx — "Przed i po" / asymmetric chaos→order comparison.
// Left card (chaos) is visually heavier and warmer; right card (homdu) is
// quieter, cooler, perfectly aligned — kontrast emocjonalny = kontrast wizualny.

import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader } from "./shared.jsx";

export function ChaosSection() {
  const chaos = [
    { icon: <Icon.Note />,   label: "Notatki w telefonie",  meta: "47 notatek · gdzie był ten wymiar?" },
    { icon: <Icon.Photo />,  label: "Galerie zdjęć",        meta: "iCloud · 12 albumów · które to przed?" },
    { icon: <Icon.Mail />,   label: "Maile z wykonawcami",  meta: "Skrzynka · 312 · szukasz tej wyceny" },
    { icon: <Icon.Excel />,  label: "Excel z budżetem",     meta: "budzet_v9_FINAL.xlsx · czy na pewno final?" },
    { icon: <Icon.Folder />, label: "Foldery z plikami",    meta: "Drive · 8 folderów · w którym umowa?" },
    { icon: <Icon.Phone />,  label: "Screeny z WhatsApp",   meta: "182 wiadomości · scroll w nieskończoność" },
  ];

  const system = [
    { icon: <Icon.Stages />,    label: "Etapy",      sub: "oś całej inwestycji",         g: "var(--stg-blue)" },
    { icon: <Icon.Costs />,     label: "Budżet",     sub: "aktualny co do złotówki",      g: "var(--stg-terracotta)" },
    { icon: <Icon.Docs />,      label: "Dokumenty",  sub: "przy właściwym etapie",        g: "var(--stg-purple)" },
    { icon: <Icon.Photo />,     label: "Zdjęcia",    sub: "postęp w czasie",              g: "var(--stg-rose)" },
    { icon: <Icon.Tasks />,     label: "Zadania",    sub: "wiesz, co dalej",              g: "var(--stg-green)" },
    { icon: <Icon.Calendar />,  label: "Kalendarz",  sub: "terminy bez stresu",           g: "var(--stg-teal)" },
  ];

  return (
    <section className="section" id="chaos">
      <div className="container">
        <SectionHeader
          title="Jedna aplikacja zamiast chaosu."
          sub="Budowa i remont nie muszą oznaczać frustracji i wkurzenia. homdu porządkuje wszystko w jednym miejscu czyniąc Twój najważniejszy projekt życiowy prostym do ogarnięcia."
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
                  Tak teraz
                </div>
                <div className="chaos-card__metric chaos-card__metric--bad">6 narzędzi · 0 połączeń</div>
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
                <b style={{ color: "var(--ink)" }}>Co tracisz:</b> czas, kontrolę, kontekst. Decydujesz na podstawie wczorajszego screena.
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
                  Z homdu
                </div>
                <div className="chaos-card__metric chaos-card__metric--ok">1 aplikacja · 6 modułów</div>
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
                <b style={{ color: "var(--ink)" }}>Co zyskujesz:</b> jeden kontekst, jedna decyzja. Każdy etap z&nbsp;budżetem, dokumentem, zdjęciem i&nbsp;zadaniem obok.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
