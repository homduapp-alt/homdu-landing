import { tr } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { Reveal } from "./shared.jsx";
import { DownloadCTA } from "./PageShell.jsx";

// BlogIndex.jsx — /blog — article index with category filter.

const { useState: useStateBlog } = React;

const BLOG_CATS = [
  { key: "all", label: tr("Wszystkie", "All"), grad: "var(--hdu-grad)" },
  { key: "koszty", label: tr("Koszty i etapy", "Costs & stages"), grad: "var(--stg-blue)" },
  { key: "wykonawca", label: tr("Wybór wykonawcy", "Choosing a contractor"), grad: "var(--stg-amber)" },
  { key: "firmy", label: tr("Dla firm", "For businesses"), grad: "var(--stg-slate)" },
];

const BLOG_POSTS = [
  {
    cat: "koszty", icon: <Icon.Costs />, grad: "var(--stg-blue)",
    href: "/blog-artykul",
    date: "2026-06-14", read: 8,
    title: tr("Ile kosztuje budowa domu? Etapy i budżet krok po kroku",
              "How much does building a house cost? Stages and budget step by step"),
    excerpt: tr("Rozbij budowę na etapy i zaplanuj budżet, który się nie rozjedzie — od fundamentów po odbiór.",
                "Break the build into stages and plan a budget that won't spiral — from foundations to handover."),
  },
  {
    cat: "koszty", icon: <Icon.Stages />, grad: "var(--stg-blue)",
    href: "/blog-artykul",
    date: "2026-05-30", read: 6,
    title: tr("Remont mieszkania: kolejność prac, której warto się trzymać",
              "Renovating a flat: the order of works worth sticking to"),
    excerpt: tr("Od czego zacząć remont i jak ułożyć etapy, żeby nie robić dwa razy tego samego.",
                "Where to start a renovation and how to order the stages so you don't redo the same work twice."),
  },
  {
    cat: "wykonawca", icon: <Icon.Users />, grad: "var(--stg-amber)",
    href: "/blog-artykul",
    date: "2026-05-18", read: 7,
    title: tr("Jak wybrać wykonawcę i nie żałować — lista pytań",
              "How to choose a contractor you won't regret — a checklist of questions"),
    excerpt: tr("O co zapytać ekipę przed podpisaniem umowy i na co patrzeć w wycenie.",
                "What to ask a crew before signing a contract and what to look for in a quote."),
  },
  {
    cat: "wykonawca", icon: <Icon.Docs />, grad: "var(--stg-amber)",
    href: "/blog-artykul",
    date: "2026-04-27", read: 5,
    title: tr("Umowa z wykonawcą: co musi się w niej znaleźć",
              "Contract with a contractor: what it must include"),
    excerpt: tr("Zakres prac, terminy, płatności i gwarancja — elementy, których nie pomijaj.",
                "Scope, deadlines, payments and warranty — the parts you shouldn't skip."),
  },
  {
    cat: "firmy", icon: <Icon.Briefcase />, grad: "var(--stg-slate)",
    href: "/partnerzy",
    date: "2026-04-10", read: 6,
    title: tr("Jak dotrzeć do inwestora w trakcie budowy — dla partnerów",
              "How to reach homeowners mid-build — for partners"),
    excerpt: tr("Kontekstowe formaty współpracy dla producentów, banków i retailu.",
                "Contextual partnership formats for manufacturers, banks and retail."),
  },
  {
    cat: "koszty", icon: <Icon.Photo />, grad: "var(--stg-blue)",
    href: "/blog-artykul",
    date: "2026-03-22", read: 4,
    title: tr("Dokumentacja budowy zdjęciami — po co i jak robić to dobrze",
              "Documenting your build with photos — why and how to do it well"),
    excerpt: tr("Zdjęcia „przed i po” i fotki z placu, które ratują przy reklamacji.",
                "Before-and-after shots and site photos that save you when making a claim."),
  },
];

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(window.LANG === "en" ? "en-GB" : "pl-PL",
      { year: "numeric", month: "long", day: "numeric" });
  } catch (e) { return iso; }
}

function BlogCard({ post }) {
  const catLabel = (BLOG_CATS.find((c) => c.key === post.cat) || {}).label;
  return (
    <a href={post.href} className="feature-card" style={{ display: "flex", flexDirection: "column", padding: 0, overflow: "hidden" }}>
      <div style={{
        height: 160, position: "relative",
        background: post.grad, display: "grid", placeItems: "center",
        color: "#fff",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 60% at 80% 0%, rgba(255,255,255,0.22) 0%, transparent 60%)" }} />
        {React.cloneElement(post.icon, { style: { width: 44, height: 44, opacity: 0.92, position: "relative" } })}
        <span style={{
          position: "absolute", top: 14, left: 14,
          fontSize: 11.5, fontWeight: 600, letterSpacing: "0.03em",
          padding: "5px 11px", borderRadius: 999,
          background: "rgba(255,255,255,0.92)", color: "var(--ink)",
        }}>{catLabel}</span>
      </div>
      <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 12.5, color: "var(--ink-3)", marginBottom: 12 }}>
          <span>{fmtDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.read} {tr("min czytania", "min read")}</span>
        </div>
        <h3 style={{ fontSize: 18.5, lineHeight: 1.28, letterSpacing: "-0.015em", margin: "0 0 10px" }}>{post.title}</h3>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{post.excerpt}</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, fontSize: 14, fontWeight: 600, color: "var(--hdu)" }}>
          {tr("Czytaj", "Read")} <Icon.Arrow style={{ width: 15, height: 15 }} />
        </span>
      </div>
    </a>);
}

export function BlogIndex() {
  const [cat, setCat] = useStateBlog("all");
  const posts = cat === "all" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.cat === cat);

  return (
    <React.Fragment>
      <section className="section" style={{ paddingTop: 148, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: "-10%", width: 560, height: 560, background: "var(--hdu-glow)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <Reveal><span className="eyebrow"><span className="dot" />{tr("Blog homdu", "homdu blog")}</span></Reveal>
          <Reveal delay={80}>
            <h1 className="h-display" style={{ margin: "22px 0 0", fontSize: "clamp(40px, 5.4vw, 68px)", maxWidth: 900 }}>
              {tr("Poradniki o budowie, remoncie i kosztach", "Guides on building, renovating and costs")}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="sub" style={{ margin: "22px 0 0", maxWidth: 640 }}>
              {tr(
                "Konkretne poradniki dla osób, które budują dom lub remontują mieszkanie — i dla firm, które chcą do nich dotrzeć. Wszystko od zespołu homdu.",
                "Practical guides for people building a house or renovating a flat — and for businesses that want to reach them. All from the homdu team."
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
            {BLOG_CATS.map((c) => {
              const active = cat === c.key;
              return (
                <button key={c.key} onClick={() => setCat(c.key)} aria-pressed={active}
                  style={{
                    cursor: "pointer", font: "inherit", fontSize: 14, fontWeight: 600,
                    padding: "10px 18px", borderRadius: 999,
                    border: `1px solid ${active ? "transparent" : "var(--line-2)"}`,
                    background: active ? "var(--ink)" : "transparent",
                    color: active ? "var(--bg)" : "var(--ink-2)",
                    transition: "background 0.18s, color 0.18s, border-color 0.18s",
                  }}>
                  {c.label}
                </button>);
            })}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {posts.map((p, i) => <BlogCard key={i} post={p} />)}
          </div>
        </div>
      </section>

      <DownloadCTA
        title={tr("Zamień poradniki w gotową inwestycję", "Turn the guides into a real project")}
        sub={tr("Pobierz homdu bezpłatnie i prowadź budowę lub remont od pierwszego etapu.",
                "Download homdu for free and run your build or renovation from the first stage.")} />
    </React.Fragment>);
}
