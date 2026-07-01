import { tr } from "../i18n.js";
import React from "react";
import { Icon } from "./icons.jsx";
import { RelatedLinks, DownloadCTA } from "./PageShell.jsx";

// BlogArticle.jsx — single-article template (/blog-artykul). Real exemplar
// content: "Ile kosztuje budowa domu — etapy i budżet". TOC + byline + related.

export function BlogArticle() {
  const toc = [
    { id: "wstep", label: tr("Zanim policzysz koszty", "Before you count the costs") },
    { id: "etapy", label: tr("Etapy budowy a budżet", "Build stages and the budget") },
    { id: "rezerwa", label: tr("Rezerwa i nieprzewidziane", "Reserve and the unexpected") },
    { id: "kontrola", label: tr("Jak nie stracić kontroli", "How not to lose control") },
    { id: "podsumowanie", label: tr("Podsumowanie", "In summary") },
  ];

  return (
    <React.Fragment>
      <article>
        {/* Article hero */}
        <section style={{ paddingTop: 132, paddingBottom: 8, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, right: "-8%", width: 480, height: 480, background: "var(--hdu-glow)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", maxWidth: 860 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, marginBottom: 20 }}>
              <a href="/blog" style={{ color: "var(--hdu)", fontWeight: 600 }}>{tr("Blog", "Blog")}</a>
              <span style={{ color: "var(--ink-3)" }}>/</span>
              <span style={{ color: "var(--ink-2)" }}>{tr("Koszty i etapy", "Costs & stages")}</span>
            </div>
            <h1 className="h-section" style={{ fontSize: "clamp(32px, 4.4vw, 54px)", maxWidth: 820 }}>
              {tr("Ile kosztuje budowa domu? Etapy i budżet krok po kroku",
                  "How much does building a house cost? Stages and budget step by step")}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img src="/assets/logo-homdu-icon.webp" alt="" aria-hidden="true"
                  style={{ width: 40, height: 40, borderRadius: 10, boxShadow: "var(--shadow-sm)" }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{tr("Zespół homdu", "The homdu team")}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)" }}>
                    {tr("14 czerwca 2026", "14 June 2026")} · {tr("8 min czytania", "8 min read")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container article-wrap">
          {/* TOC */}
          <aside className="article-toc" aria-label={tr("Spis treści", "Contents")}>
            <p className="article-toc__title">{tr("Spis treści", "On this page")}</p>
            <ul>
              {toc.map((t) => (
                <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>
              ))}
            </ul>
          </aside>

          {/* Body */}
          <div className="article-prose">
            <p className="article-lead">
              {tr(
                "Ile kosztuje budowa domu? Nie ma jednej liczby — koszt zależy od metrażu, standardu i regionu, ale największą różnicę robi to, czy prowadzisz budżet etapami, czy „na oko”. Poniżej pokazujemy, jak rozłożyć koszty na etapy i trzymać je pod kontrolą od pierwszego dnia.",
                "How much does building a house cost? There's no single number — it depends on floor area, standard and region, but the biggest difference comes from whether you budget by stage or by guesswork. Below we show how to split costs across stages and keep them under control from day one."
              )}
            </p>

            <h2 id="wstep">{tr("Zanim policzysz koszty", "Before you count the costs")}</h2>
            <p>{tr(
              "Od czego zacząć liczenie budżetu? Zacznij od zakresu: co dokładnie budujesz, w jakim standardzie i co robisz systemem gospodarczym, a co zlecasz. Im wcześniej rozpiszesz zakres na etapy, tym mniej niespodzianek później — bo każdą pozycję możesz przypisać do konkretnego momentu budowy.",
              "Where do you start estimating the budget? Start with scope: what exactly you're building, to what standard, and what you do yourself versus outsource. The sooner you break scope into stages, the fewer surprises later — because you can tie every item to a specific point in the build."
            )}</p>
            <p>{tr(
              "W homdu każdy etap ma własny budżet i listę wydatków, więc od początku widzisz koszt całości jako sumę mniejszych, zrozumiałych części — zamiast jednej wielkiej, przerażającej liczby.",
              "In homdu each stage has its own budget and expense list, so from the start you see the total cost as a sum of smaller, understandable parts — instead of one big, scary number."
            )}</p>

            <h2 id="etapy">{tr("Etapy budowy a budżet", "Build stages and the budget")}</h2>
            <p>{tr(
              "Jak rozłożyć koszty na etapy? Podziel budowę na naturalne fazy i przypisz do nich wydatki. Dzięki temu w każdej chwili wiesz, ile pochłonął stan surowy, a ile zostało na wykończenie — i gdzie realnie przekraczasz plan.",
              "How do you split costs across stages? Divide the build into natural phases and assign expenses to them. That way you always know how much the shell consumed and how much is left for finishing — and where you're actually over plan."
            )}</p>
            <ul>
              <li>{tr("Stan zerowy — fundamenty, przyłącza, prace ziemne.", "Groundworks — foundations, connections, earthworks.")}</li>
              <li>{tr("Stan surowy — ściany, strop, dach.", "Shell — walls, ceiling, roof.")}</li>
              <li>{tr("Stan surowy zamknięty — okna, drzwi zewnętrzne.", "Weathertight shell — windows, external doors.")}</li>
              <li>{tr("Instalacje — elektryka, hydraulika, ogrzewanie.", "Installations — electrics, plumbing, heating.")}</li>
              <li>{tr("Wykończenie — tynki, podłogi, biały montaż.", "Finishing — plaster, floors, fittings.")}</li>
            </ul>

            <div className="article-callout">
              <div className="article-callout__icon"><Icon.Sparkle style={{ width: 18, height: 18 }} /></div>
              <p style={{ margin: 0 }}>{tr(
                "Wskazówka: przypisuj każdą fakturę do etapu od razu po zakupie. Po kilku tygodniach nikt nie pamięta, czy 4 000 zł poszło na cement, czy na zaliczkę dla dekarza.",
                "Tip: assign each invoice to a stage right after purchase. After a few weeks nobody remembers whether that 4,000 went on cement or a deposit for the roofer."
              )}</p>
            </div>

            <h2 id="rezerwa">{tr("Rezerwa i nieprzewidziane", "Reserve and the unexpected")}</h2>
            <p>{tr(
              "Ile odłożyć na nieprzewidziane? Przyjmij rozsądną rezerwę na wydatki, których nie da się przewidzieć — od warunków gruntowych po zmiany cen materiałów. Rezerwa to nie luksus, tylko część budżetu: lepiej ją zaplanować, niż w połowie budowy szukać oszczędności na wykończeniu.",
              "How much should you set aside for the unexpected? Assume a sensible reserve for costs you can't foresee — from ground conditions to material price changes. A reserve isn't a luxury, it's part of the budget: better to plan it than to hunt for savings on finishing halfway through."
            )}</p>

            <h2 id="kontrola">{tr("Jak nie stracić kontroli", "How not to lose control")}</h2>
            <p>{tr(
              "Jak utrzymać budżet pod kontrolą? Aktualizuj wydatki na bieżąco i trzymaj je w jednym miejscu razem z dokumentami i zdjęciami. Kiedy dane są rozsypane po arkuszach, mailach i paragonach, kontrola kosztów zawsze przegrywa z tempem budowy.",
              "How do you keep the budget under control? Update expenses as you go and keep them in one place, together with documents and photos. When data is scattered across sheets, emails and receipts, cost control always loses to the pace of the build."
            )}</p>
            <p>{tr(
              "To jest dokładnie to, do czego powstało homdu — i działa jeszcze lepiej, gdy ",
              "This is exactly what homdu was built for — and it works even better when you "
            )}
            <a href="/wspoldzielenie-inwestycji">{tr("współdzielisz inwestycję", "share the project")}</a>
            {tr(" z partnerem lub kierownikiem budowy.", " with your partner or site manager.")}</p>

            <h2 id="podsumowanie">{tr("Podsumowanie", "In summary")}</h2>
            <p>{tr(
              "Koszt budowy domu najłatwiej ogarnąć, gdy rozbijesz go na etapy, przypiszesz do nich wydatki i dołożysz rezerwę. Reszta to konsekwencja: aktualizuj dane na bieżąco i trzymaj wszystko w jednym miejscu.",
              "The cost of building a house is easiest to manage when you break it into stages, assign expenses to them and add a reserve. The rest is consistency: keep data current and everything in one place."
            )}</p>
          </div>
        </div>
      </article>

      {/* Related */}
      <RelatedLinks
        title={tr("Powiązane artykuły", "Related articles")}
        links={[
          { href: "/blog-artykul", icon: <Icon.Stages />, gradient: "var(--stg-blue)",
            label: tr("Remont: kolejność prac", "Renovation: order of works"),
            desc: tr("Jak ułożyć etapy, żeby nie robić dwa razy tego samego.", "How to order stages so you don't redo work.") },
          { href: "/blog-artykul", icon: <Icon.Users />, gradient: "var(--stg-amber)",
            label: tr("Jak wybrać wykonawcę", "How to choose a contractor"),
            desc: tr("Lista pytań przed podpisaniem umowy.", "A checklist of questions before you sign.") },
          { href: "/aplikacja-budowa-domu", icon: <Icon.House />, gradient: "var(--stg-green)",
            label: tr("Aplikacja do budowy domu", "House-build app"),
            desc: tr("Zamień poradnik w realną kontrolę budżetu.", "Turn the guide into real budget control.") },
        ]} />

      <DownloadCTA
        title={tr("Policz i prowadź budowę w homdu", "Budget and run your build in homdu")}
        sub={tr("Pobierz bezpłatnie i przypisuj koszty do etapów od pierwszego dnia budowy.",
                "Download for free and assign costs to stages from the first day of the build.")} />

      <style>{`
        .article-wrap {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 56px;
          align-items: start;
          max-width: 1100px;
          padding-top: 40px;
          padding-bottom: 8px;
        }
        .article-toc {
          position: sticky;
          top: 96px;
        }
        .article-toc__title {
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ink-3); margin: 0 0 14px; padding-left: 14px;
        }
        .article-toc ul { list-style: none; padding: 0; margin: 0; border-left: 1px solid var(--line); }
        .article-toc a {
          display: block; padding: 8px 14px; margin-left: -1px;
          border-left: 2px solid transparent;
          font-size: 14px; line-height: 1.4; color: var(--ink-2);
          transition: color 0.15s, border-color 0.15s;
        }
        .article-toc a:hover { color: var(--hdu); border-left-color: var(--hdu); }
        .article-prose { max-width: 720px; }
        .article-prose .article-lead {
          font-size: 20px; line-height: 1.55; color: var(--ink);
          font-weight: 500; margin: 0 0 32px;
        }
        .article-prose h2 {
          font-size: clamp(24px, 2.6vw, 30px); line-height: 1.2; letter-spacing: -0.02em;
          font-weight: 600; margin: 40px 0 14px; scroll-margin-top: 96px;
        }
        .article-prose p { font-size: 17px; line-height: 1.7; color: var(--ink-2); margin: 0 0 16px; }
        .article-prose a { color: var(--hdu); font-weight: 600; border-bottom: 1px solid color-mix(in srgb, var(--hdu) 35%, transparent); }
        .article-prose ul { margin: 0 0 20px; padding-left: 22px; }
        .article-prose li { font-size: 17px; line-height: 1.6; color: var(--ink-2); margin: 8px 0; }
        .article-prose li::marker { color: var(--hdu); }
        .article-callout {
          display: grid; grid-template-columns: 40px 1fr; gap: 14px; align-items: start;
          padding: 20px 22px; margin: 24px 0 28px; border-radius: var(--r-lg);
          background: color-mix(in srgb, var(--hdu) 7%, var(--bg-panel));
          border: 1px solid color-mix(in srgb, var(--hdu) 22%, var(--line));
        }
        .article-callout__icon {
          width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center;
          background: var(--hdu-grad); color: #fff;
        }
        .article-callout p { font-size: 15.5px; line-height: 1.6; color: var(--ink); }
        @media (max-width: 900px) {
          .article-wrap { grid-template-columns: 1fr; gap: 8px; }
          .article-toc { display: none; }
        }
      `}</style>
    </React.Fragment>);
}
