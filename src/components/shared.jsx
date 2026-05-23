// shared.jsx — reusable UI primitives

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons.jsx";

// ── Reveal wrapper: CSS-driven entrance animation (auto-plays on mount).
// We deliberately don't gate this on scroll/IntersectionObserver — preview
// iframes don't run IO reliably and React re-renders can strip imperative
// class changes. Auto-playing animation is robust + good enough.
export function Reveal({ children, delay = 0, as: As = "div", className = "", style, ...rest }) {
  return (
    <As
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </As>
  );
}

// ── Logo wordmark ───────────────────────────────────────────────────────────
export function Logo({ size = "md" }) {
  return (
    <div className="nav__logo">
      <span className={`logo-mark ${size === "lg" ? "logo-mark--lg" : ""}`}>
        <Icon.Logo />
      </span>
      <span>homdu</span>
    </div>
  );
}

// ── App Store badge ─────────────────────────────────────────────────────────
export function AppStoreBadge({ size = 52 }) {
  return (
    <a
      className="appstore-badge"
      href="#"
      aria-label="Pobierz w App Store"
      onClick={(e) => e.preventDefault()}
    >
      <img src="/assets/appstore-badge.svg" alt="Pobierz w App Store" style={{ height: size }} />
    </a>
  );
}

// ── iPhone frame ────────────────────────────────────────────────────────────
// Use `slotId` + `placeholder` to wire up an image-slot inside the screen.
// The screen is just the bezel + dynamic island — the user's screenshot fills
// the rest (and will include its own status bar / chrome).
export function IPhone({ size = "md", slotId, placeholder, className = "", style }) {
  const sizeClass = size === "sm" ? "iphone--sm" : size === "lg" ? "iphone--lg" : "";
  return (
    <div className={`iphone ${sizeClass} iphone--bleed ${className}`} style={style}>
      <div className="iphone__screen">
        <div className="iphone__island" />
        <image-slot
          id={slotId}
          placeholder={placeholder || "Drop screenshot here"}
          shape="rect"
        />
      </div>
    </div>
  );
}

// ── Animated counter ────────────────────────────────────────────────────────
// Uses setInterval (which always ticks) rather than rAF so the count-up
// works even in preview iframes whose document timeline is frozen.
export function CountUp({ to, duration = 1600, suffix = "", className = "" }) {
  const [val, setVal] = useState(to);
  useEffect(() => {
    const start = Date.now();
    setVal(0);
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [to, duration]);

  return (
    <span className={className}>
      {val.toLocaleString("pl-PL")}{suffix}
    </span>
  );
}

// ── KPI pill row (glass) ────────────────────────────────────────────────────
export function KPIPillRow({ items }) {
  return (
    <div className="kpi-row">
      {items.map((it, i) => (
        <div className="kpi-pill" key={i}>
          <span className="v">{it.v}</span>
          <span className="l">{it.l}</span>
        </div>
      ))}
    </div>
  );
}

// ── Section header ──────────────────────────────────────────────────────────
export function SectionHeader({ eyebrow, title, sub, align = "left", maxWidth }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align === "center" ? "center" : "left",
        maxWidth: maxWidth || (align === "center" ? 760 : 720),
        marginLeft: align === "center" ? "auto" : 0,
        marginRight: align === "center" ? "auto" : 0,
        marginBottom: 64,
      }}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="dot" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="h-section">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={160}>
          <p className="sub" style={{ maxWidth: 640 }}>{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

// ── Checklist ───────────────────────────────────────────────────────────────
export function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((it, i) => (
        <li key={i}>
          <span className="ck"><Icon.Check /></span>
          <span>
            {typeof it === "string" ? it : <><b>{it.b}</b> {it.r}</>}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── Floating chip (for hero / showcase decoration) ──────────────────────────
export function FloatingChip({ icon, gradient, title, sub, style, anim = 0 }) {
  return (
    <div className="float-chip" style={{ ...style, animationDelay: `${anim}s` }}>
      <span className="float-chip__icon" style={{ background: gradient }}>
        {icon}
      </span>
      <div>
        <div>{title}</div>
        {sub && <div className="sub-line">{sub}</div>}
      </div>
    </div>
  );
}
