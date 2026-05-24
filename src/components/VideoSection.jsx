// VideoSection.jsx — autoplaying YouTube preview placed under the Hero.

import { Reveal } from "./shared.jsx";

export function VideoSection() {
  return (
    <section
      className="section"
      style={{
        paddingTop: 24,
        paddingBottom: 96,
        position: "relative",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            <span className="eyebrow">
              <span className="dot" />
              Zobacz homdu w&nbsp;akcji
            </span>
            <h2 className="h-section" style={{ maxWidth: 760, margin: 0 }}>
              2 minuty, które pokażą, jak homdu ogarnia całą inwestycję.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="video-frame"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1120,
              margin: "0 auto",
              aspectRatio: "16 / 9",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid var(--line)",
              boxShadow:
                "0 1px 2px rgba(15,23,42,0.04), 0 30px 60px -20px rgba(15,23,42,0.18)",
              background: "var(--bg-2, #0b0b0c)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/tFSBNBmIm64?autoplay=1&mute=1&loop=1&playlist=tFSBNBmIm64&controls=1&rel=0&modestbranding=1&playsinline=1"
              title="homdu — wideo wprowadzające"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              frameBorder="0"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
