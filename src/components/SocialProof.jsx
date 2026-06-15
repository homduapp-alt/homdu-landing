// SocialProof.jsx — Section 8
// Compact App Store 5-star rating.

import { Icon } from "./icons.jsx";
import { Reveal } from "./shared.jsx";

export function SocialProof() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div
            className="glass-strong"
            style={{
              maxWidth: 480,
              margin: "0 auto",
              padding: "40px 48px",
              borderRadius: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", gap: 6, color: "#EAA721" }}>
              {[0, 1, 2, 3, 4].map((n) => (
                <Icon.Star key={n} style={{ width: 30, height: 30 }} />
              ))}
            </div>
            <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1 }}>
              5,0
            </div>
            <div style={{ fontSize: 15, color: "var(--ink-2)", fontWeight: 500 }}>
              Ocena w App Store
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
