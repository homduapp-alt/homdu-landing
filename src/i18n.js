// i18n.js — prosty PL/EN. Język ustawia inline-skrypt w <head> (window.LANG),
// trwałość w localStorage('homdu-lang'); zmiana języka = reload (strona nie jest SPA).

export function getLang() {
  if (typeof window !== "undefined" && (window.LANG === "en" || window.LANG === "pl")) {
    return window.LANG;
  }
  try {
    const l = localStorage.getItem("homdu-lang");
    if (l === "en" || l === "pl") return l;
  } catch (e) {
    /* ignore */
  }
  return "pl";
}

// tr(pl, en) → zwraca wariant zależny od języka.
export function tr(pl, en) {
  return getLang() === "en" ? en : pl;
}

export function setLang(next) {
  if (next !== "en" && next !== "pl") return;
  try {
    localStorage.setItem("homdu-lang", next);
  } catch (e) {
    /* ignore */
  }
  if (typeof window !== "undefined") {
    window.LANG = next;
    window.location.reload();
  }
}
