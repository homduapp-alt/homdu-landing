// DocsPhotosSection.jsx — Section 6
// Split layout: DocumentsView (left) + AlbumDetailView (right), with a hero headline above.

import { Icon } from "./icons.jsx";
import { Reveal, SectionHeader, IPhone } from "./shared.jsx";

export function DocsPhotosSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Dokumenty i zdjęcia"
          title="Koniec szukania w skrzynce mailowej."
          sub="Umowy, projekty, pozwolenia — skategoryzowane i zawsze dostępne. A zdjęcia postępu trafiają prosto do albumu etapu — z notatkami i datą."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "stretch",
          }}
          className="dp-grid"
        >
          {/* ── Left: Documents ── */}
          <Reveal>
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                padding: "56px 32px 0",
                background: "var(--stg-purple)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
                minHeight: 640,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(70% 50% at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              <div style={{ textAlign: "center", color: "white", maxWidth: 380, position: "relative" }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center", gap: 8,
                  padding: "6px 12px",
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 500,
                  marginBottom: 16,
                  letterSpacing: "0.02em",
                }}>
                  <Icon.Docs style={{ width: 13, height: 13 }} />
                  Dokumenty
                </div>
                <h3 style={{
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  margin: 0,
                }}>
                  Skategoryzowane i&nbsp;zawsze pod ręką
                </h3>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.85)",
                  marginTop: 14,
                }}>
                  Umowa, projekt budowlany, pozwolenie na budowę. homdu podpowie,
                  których dokumentów jeszcze brakuje.
                </p>
              </div>
              <IPhone
                size="sm"
                slotId="docs-list"
                placeholder="DocumentsView.png — Pasek progresu „7/12 dokumentów”, lista kategorii: Umowy (3/3 ✓), Projekt budowlany (1/2), Pozwolenia (1/3 ⚠ podpowiedź „Brakuje: zgłoszenie zakończenia”), Faktury (2/4); quick add: Skanuj / Z pliku"
              />
            </div>
          </Reveal>

          {/* ── Right: Photos ── */}
          <Reveal delay={140}>
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                padding: "56px 32px 0",
                background: "var(--stg-rose)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 32,
                minHeight: 640,
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(70% 50% at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />
              <div style={{ textAlign: "center", color: "white", maxWidth: 380, position: "relative" }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center", gap: 8,
                  padding: "6px 12px",
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 500,
                  marginBottom: 16,
                  letterSpacing: "0.02em",
                }}>
                  <Icon.Photo style={{ width: 13, height: 13 }} />
                  Zdjęcia
                </div>
                <h3 style={{
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  margin: 0,
                }}>
                  Historia postępu Twojej budowy
                </h3>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.85)",
                  marginTop: 14,
                }}>
                  Albumy postępu prac przypisane do etapu. Przeglądaj jak galerię
                  — z możliwością zoom i notatką do każdego zdjęcia.
                </p>
              </div>
              <IPhone
                size="sm"
                slotId="album-grid"
                placeholder="AlbumDetailView.png — Album „Postęp prac — czerwiec 2025”, siatka 3-kolumnowa z 12 zdjęciami budowy (beton, mury, więźba dachowa, instalacje), data nad każdym, toolbar dolny: „+ Dodaj”, „Wybierz”, „Album”"
              />
            </div>
          </Reveal>
        </div>

        {/* full-screen viewer teaser */}
        <Reveal delay={200}>
          <div
            className="glass-strong"
            style={{
              marginTop: 60,
              padding: 32,
              borderRadius: 24,
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
              gap: 40,
              alignItems: "center",
            }}
            id="docs-photos-viewer-row"
          >
            <div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", fontWeight: 500, marginBottom: 10, letterSpacing: "0.02em" }}>
                Pełnoekranowy podgląd
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.025em", margin: 0, lineHeight: 1.1 }}>
                Zdjęcie z kontekstem.
                <span style={{ color: "var(--ink-2)" }}> Nie tylko piksele.</span>
              </h3>
              <p className="lede" style={{ marginTop: 14, maxWidth: 480 }}>
                Pinch-to-zoom, double-tap, gesture pan. Glass overlay pokazuje datę
                i Twoją notatkę — kto wykonał, co i kiedy.
              </p>
            </div>
            <div style={{
              position: "relative",
              borderRadius: 18,
              overflow: "hidden",
              aspectRatio: "16 / 10",
              background: "#0c0d11",
              boxShadow: "var(--shadow-md)",
            }}>
              <image-slot
                id="photo-viewer"
                placeholder="StagePhotoViewerView.png — Pełnoekranowe zdjęcie wylewania betonu fundamentów; w dolnym lewym rogu glass overlay z notatką: „Beton wylany 12.05, ekipa Kowalski” i datą; w prawym górnym rogu glass dismiss button"
                shape="rect"
                style={{ width: "100%", height: "100%", display: "block" }}
              />
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .dp-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          #docs-photos-viewer-row { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
