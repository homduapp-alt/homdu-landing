import { useEffect, useState } from "react";

const STORAGE_KEY = "homdu-theme";

// Auto-dark at night (Warsaw 22:00–05:00). Returns 'dark' or null.
export function autoNightTheme() {
  try {
    const h = parseInt(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Warsaw",
        hour: "numeric",
        hour12: false,
      }).format(new Date()),
      10
    );
    if (h >= 22 || h < 5) return "dark";
  } catch (e) {
    /* ignore */
  }
  return null;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Motyw początkowy ustawia inline-skrypt w <head> (atrybut data-theme),
    // żeby uniknąć migotania. Odczytujemy go, by React był spójny.
    if (typeof document !== "undefined") {
      const cur = document.documentElement.getAttribute("data-theme");
      if (cur === "light" || cur === "dark") return cur;
    }
    return autoNightTheme() || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  return [theme, setTheme];
}
