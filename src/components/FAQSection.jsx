// FAQSection.jsx — answer-first accordion FAQ. Wpięty na stronie B2C i B2B
// (variant zmienia dodatkowe pytania). Każda odpowiedź zaczyna się od powtórzenia
// pytania, potem odpowiada wprost (dobre pod SEO/GEO).

import React from "react";
import { tr } from "../i18n.js";
import { AppStoreBadge, SectionHeader } from "./shared.jsx";

const { useState: useStateFAQ } = React;

export function FAQItem({ q, children, open, onToggle, index }) {
  return (
    <div
      style={{
        borderRadius: "var(--r-lg)",
        border: `1px solid ${open ? "color-mix(in srgb, var(--hdu) 32%, var(--line))" : "var(--line)"}`,
        background: "var(--bg-panel)",
        boxShadow: open ? "var(--shadow-md)" : "var(--shadow-sm)",
        overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}>
      <h3 style={{ margin: 0 }}>
        <button
          onClick={onToggle}
          aria-expanded={open}
          style={{
            width: "100%", cursor: "pointer", background: "transparent", border: "none",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18,
            padding: "22px 24px", textAlign: "left",
            font: "inherit", fontSize: "clamp(16px, 1.5vw, 18px)", fontWeight: 600,
            letterSpacing: "-0.01em", color: "var(--ink)",
          }}>
          <span>{q}</span>
          <span style={{
            flexShrink: 0, width: 30, height: 30, borderRadius: 999,
            display: "grid", placeItems: "center",
            background: open ? "var(--hdu-grad)" : "var(--bg-soft)",
            color: open ? "#fff" : "var(--ink-2)",
            transition: "background 0.25s, transform 0.25s",
            transform: open ? "rotate(45deg)" : "none",
          }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div style={{
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows 0.28s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{
            padding: "0 24px 24px",
            fontSize: 15.5, lineHeight: 1.62, color: "var(--ink-2)",
            maxWidth: "68ch",
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>);
}

export function FAQLink({ href, children }) {
  return (
    <a href={href} style={{
      color: "var(--hdu)", fontWeight: 600,
      borderBottom: "1px solid color-mix(in srgb, var(--hdu) 35%, transparent)",
    }}>{children}</a>);
}

export function FAQSection({ variant = "b2c" }) {
  const [open, setOpen] = useStateFAQ(0);

  const common = [
    {
      q: tr("Czy homdu jest darmowe?", "Is homdu free?"),
      a: (
        <React.Fragment>
          <p style={{ margin: "0 0 12px" }}>
            {tr(
              "Czy homdu jest darmowe? Tak — homdu pobierzesz i używasz bezpłatnie. Prowadzenie inwestycji, etapy, budżet, dokumenty, zdjęcia i kontakty do wykonawców są dostępne bez opłat i bez abonamentu. Aplikację wydaje AppSoft Studio, a pobierzesz ją w App Store.",
              "Is homdu free? Yes — you download and use homdu at no cost. Running your project, stages, budget, documents, photos and contractor contacts are all available with no fees and no subscription. The app is published by AppSoft Studio and available on the App Store."
            )}
          </p>
          <AppStoreBadge size={44} placement="faq" />
        </React.Fragment>
      ),
    },
    {
      q: tr("Na jakich urządzeniach działa homdu?", "Which devices does homdu run on?"),
      a: (
        <p style={{ margin: 0 }}>
          {tr(
            "Na jakich urządzeniach działa homdu? homdu działa w ekosystemie Apple — na iPhone, iPad, Mac oraz Apple Vision, z synchronizacją między Twoimi urządzeniami. Obecnie nie ma wersji na Androida ani wersji przeglądarkowej, więc do korzystania potrzebujesz urządzenia Apple z aktualnym systemem.",
            "Which devices does homdu run on? homdu runs across the Apple ecosystem — iPhone, iPad, Mac and Apple Vision, syncing between your own devices. There is currently no Android version and no web version, so you need an Apple device on a current OS to use it."
          )}
        </p>
      ),
    },
    {
      q: tr("Jak współdzielić inwestycję z inną osobą?", "How do I share a project with another person?"),
      a: (
        <p style={{ margin: 0 }}>
          {tr(
            "Jak współdzielić inwestycję? Jako Właściciel Inwestycji zapraszasz Współpracownika (np. małżonka lub kierownika budowy), a dane synchronizują się przez Apple CloudKit. Obie osoby widzą te same etapy, koszty i dokumenty na swoich urządzeniach Apple. Więcej opisujemy na stronie ",
            "How do I share a project? As the Project Owner you invite a Collaborator (e.g. your spouse or site manager) and the data syncs via Apple CloudKit. Both people see the same stages, costs and documents on their Apple devices. We explain more on the "
          )}
          <FAQLink href="/wspoldzielenie-inwestycji">
            {tr("współdzielenie inwestycji", "sharing a project")}
          </FAQLink>{tr(".", " page.")}
        </p>
      ),
    },
    {
      q: tr("Czy homdu nadaje się do remontu mieszkania?", "Is homdu suitable for renovating a flat?"),
      a: (
        <p style={{ margin: 0 }}>
          {tr(
            "Czy homdu nadaje się do remontu mieszkania? Tak — homdu prowadzi zarówno budowę domu, jak i remont mieszkania. Rozbijesz wykończenie na etapy i pomieszczenia, zapiszesz budżet, zdjęcia „przed i po” oraz kontakty do ekip. Zobacz stronę ",
            "Is homdu suitable for renovating a flat? Yes — homdu handles both building a house and renovating a flat. You break the works into stages and rooms, record the budget, before-and-after photos and contractor contacts. See the "
          )}
          <FAQLink href="/aplikacja-remont">{tr("aplikacja do remontu", "renovation app")}</FAQLink>
          {tr(" oraz ", " and ")}
          <FAQLink href="/aplikacja-budowa-domu">{tr("aplikacja do budowy domu", "house-build app")}</FAQLink>.
        </p>
      ),
    },
    {
      q: tr("Czy homdu zastępuje kosztorys w Excelu?", "Does homdu replace a spreadsheet budget?"),
      a: (
        <p style={{ margin: 0 }}>
          {tr(
            "Czy homdu zastępuje kosztorys w Excelu? W praktyce tak — zamiast rozjeżdżających się arkuszy prowadzisz budżet powiązany z etapami i wydatkami w jednym miejscu, razem z dokumentami i zdjęciami. Nie zastępuje profesjonalnego kosztorysu inwestorskiego, ale porządkuje codzienną kontrolę kosztów.",
            "Does homdu replace a spreadsheet budget? In practice yes — instead of scattered sheets you keep a budget tied to stages and expenses in one place, alongside documents and photos. It doesn't replace a professional cost estimate, but it does organise your day-to-day cost control."
          )}
        </p>
      ),
    },
  ];

  const b2bExtra = [
    {
      q: tr("Czym homdu jest dla partnera biznesowego?", "What is homdu for a business partner?"),
      a: (
        <p style={{ margin: 0 }}>
          {tr(
            "Czym homdu jest dla partnera? To kontekstowy kanał dotarcia do inwestora w trakcie budowy i remontu — w momencie, w którym planuje, kupuje i wykonuje. Formaty współpracy dla producentów, banków, ubezpieczycieli i retailu opisujemy na stronie ",
            "What is homdu for a partner? It's a contextual channel to reach homeowners while they build and renovate — at the moment they plan, buy and build. Partnership formats for manufacturers, banks, insurers and retail are described on the "
          )}
          <FAQLink href="/partnerzy">{tr("homdu dla partnerów", "homdu for partners")}</FAQLink>.
        </p>
      ),
    },
  ];

  const items = variant === "b2b" ? [...common.slice(0, 3), ...b2bExtra] : common;

  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeader
          eyebrow={tr("FAQ", "FAQ")}
          title={tr("Najczęstsze pytania", "Frequently asked questions")}
          sub={tr(
            "Krótkie, konkretne odpowiedzi o homdu — bezpłatnej aplikacji do budowy domu i remontu mieszkania w ekosystemie Apple.",
            "Short, direct answers about homdu — the free app for building a house and renovating a flat in the Apple ecosystem."
          )}
          align="center" />
        <div style={{
          maxWidth: 860, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          {items.map((it, i) => (
            <FAQItem
              key={i}
              q={it.q}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}>
              {it.a}
            </FAQItem>
          ))}
        </div>
      </div>
    </section>);
}

// MiniFAQ — compact accordion for landing pages (page-specific questions).
export function MiniFAQ({ items, title }) {
  const [open, setOpen] = useStateFAQ(0);
  return (
    <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((it, i) => (
        <FAQItem key={i} q={it.q} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)}>
          {it.a}
        </FAQItem>
      ))}
    </div>);
}
