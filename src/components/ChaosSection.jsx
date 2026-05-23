// ChaosSection.jsx — "Zamiast chaosu masz jeden system"
// Split layout: messy chaos cluster (left) → clean homdu system (right),
// connected by a subtle arrow / divider.

import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader } from "./shared.jsx";

export function ChaosSection() {
  const chaos = [
    { icon: <Icon.Note />,   label: "Notatki w telefonie",  meta: "47 notek, 3 listy"  },
    { icon: <Icon.Photo />,  label: "Galerie zdjęć",        meta: "iCloud · 12 albumów" },
    { icon: <Icon.Mail />,   label: "Maile z wykonawcami",  meta: "Skrzynka · 312"     },
    { icon: <Icon.Excel />,  label: "Excel z budżetem",     meta: "budzet_v9_FINAL.xlsx" },
    { icon: <Icon.Folder />, label: "Foldery z plikami",    meta: "Drive · 8 folderów"  },
    { icon: <Icon.Phone />,  label: "Screeny z WhatsApp",   meta: "182 wiadomości"      },
  ];

  const system = [
    { icon: <Icon.Stages />,    label: "Etapy",      g: "var(--stg-blue)" },
    { icon: <Icon.Costs />,     label: "Budżet",     g: "var(--stg-terracotta)" },
    { icon: <Icon.Docs />,      label: "Dokumenty",  g: "var(--stg-purple)" },
    { icon: <Icon.Photo />,     label: "Zdjęcia",    g: "var(--stg-rose)" },
    { icon: <Icon.Tasks />,     label: "Zadania",    g: "var(--stg-green)" },
    { icon: <Icon.Calendar />,  label: "Kalendarz",  g: "var(--stg-teal)" },
  ];

  return (
    <section className="section" id="chaos">
      <div className="container">
        <SectionHeader
          eyebrow="Zamiast chaosu"
          title="Jedna inwestycja. Jeden system."
          sub="Większość inwestorów prowadzi budowę w sześciu miejscach naraz. homdu zbiera wszystko w jednym, spójnym widoku — żeby decyzje były szybsze, a koszty pod kontrolą."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 24,
            alignItems: "stretch",
          }}
          className="chaos-grid"
        >
          {/* ── LEFT: Chaos cluster ── */}
          <Reveal>
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                padding: "32px 28px 28px",
                background: "var(--bg-panel)",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-sm)",
                minHeight: 420,
                overflow: "hidden",
              }}
              className="chaos-side"
            >
              {/* subtle noise / wash so it FEELS messy */}
              <div aria-hidden style={{
                position: "absolute", inset: 0,
                background: "repeating-linear-gradient(45deg, rgba(212,74,47,0.03) 0px, rgba(212,74,47,0.03) 2px, transparent 2px, transparent 10px)",
                pointerEvents: "none",
              }} />

              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "5px 10px", borderRadius: 999,
                  background: "rgba(212,74,47,0.10)",
                  color: "var(--status-alert)",
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}>
                  <Icon.X style={{ width: 12, height: 12 }} />
                  Tak teraz
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-3)" }}>6 narzędzi · 0 spójności</div>
              </div>

              <div style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}>
                {chaos.map((c, i) => (
                  <div
                    key={c.label}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 14px",
                      borderRadius: 14,
                      background: "var(--bg-soft)",
                      border: "1px solid var(--line)",
                      transform: `rotate(${(i % 2 === 0 ? -0.7 : 0.6)}deg)`,
                    }}
                  >
                    <span style={{
                      width: 32, height: 32, borderRadius: 9,
                      background: "var(--bg-elev)",
                      border: "1px solid var(--line)",
                      display: "grid", placeItems: "center",
                      color: "var(--ink-2)",
                      flexShrink: 0,
                    }}>
                      {React.cloneElement(c.icon, { style: { width: 16, height: 16 } })}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.005em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--ink-3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {c.meta}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 24,
                paddingTop: 18,
                borderTop: "1px dashed var(--line-2)",
                fontSize: 13,
                color: "var(--ink-2)",
                lineHeight: 1.5,
              }}>
                <b style={{ color: "var(--ink)" }}>Co tracisz:</b> czas, kontrolę, kontekst. Decyzje na podstawie wczorajszego screena.
              </div>
            </div>
          </Reveal>

          {/* ── ARROW / DIVIDER ── */}
          <div
            className="chaos-arrow"
            aria-hidden
            style={{
              display: "grid",
              placeItems: "center",
              padding: "0 6px",
            }}
          >
            <div style={{
              width: 56, height: 56, borderRadius: 999,
              background: "var(--hdu-grad)",
              display: "grid", placeItems: "center",
              color: "white",
              boxShadow: "0 1px 0 rgba(255,255,255,0.25) inset, 0 12px 28px -10px rgba(46,111,212,0.5)",
            }}>
              <Icon.Arrow style={{ width: 22, height: 22 }} />
            </div>
          </div>

          {/* ── RIGHT: homdu system ── */}
          <Reveal delay={120}>
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                padding: "32px 28px 28px",
                background: "linear-gradient(160deg, rgba(46,111,212,0.06) 0%, rgba(46,111,212,0.02) 100%)",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-md)",
                minHeight: 420,
                overflow: "hidden",
              }}
              className="chaos-side chaos-side--ok"
            >
              <div aria-hidden style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(60% 50% at 100% 0%, rgba(46,111,212,0.12) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />

              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "5px 10px", borderRadius: 999,
                  background: "rgba(30,157,99,0.12)",
                  color: "var(--status-done)",
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}>
                  <Icon.Check style={{ width: 12, height: 12 }} />
                  Z homdu
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-2)", fontWeight: 500 }}>1 aplikacja · 6 modułów</div>
              </div>

              <div style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}>
                {system.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 14px",
                      borderRadius: 14,
                      background: "var(--bg-panel)",
                      border: "1px solid var(--line)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <span style={{
                      width: 32, height: 32, borderRadius: 9,
                      background: s.g,
                      display: "grid", placeItems: "center",
                      color: "white",
                      flexShrink: 0,
                      boxShadow: "0 1px 0 rgba(255,255,255,0.25) inset",
                    }}>
                      {React.cloneElement(s.icon, { style: { width: 16, height: 16 } })}
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.005em" }}>
                        {s.label}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--ink-2)" }}>
                        spięte z etapem
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 24,
                paddingTop: 18,
                borderTop: "1px dashed var(--line-2)",
                fontSize: 13,
                color: "var(--ink-2)",
                lineHeight: 1.5,
              }}>
                <b style={{ color: "var(--ink)" }}>Co zyskujesz:</b> jeden kontekst, jedna decyzja. Każdy etap z budżetem, dokumentem, zdjęciem i&nbsp;zadaniem obok.
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .chaos-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .chaos-arrow { padding: 4px 0 !important; transform: rotate(90deg); }
        }
      `}</style>
    </section>
  );
}
