import { useEffect, useState } from "react";

const STORAGE_KEY = "homdu-theme";

// Motyw jasny/ciemny z trwałością w localStorage. Domyślnie "light"
// (zgodnie z TWEAK_DEFAULTS z prototypu Claude Design).
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* localStorage niedostępny — używamy domyślnego */
    }
    return "light";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return [theme, setTheme];
}
