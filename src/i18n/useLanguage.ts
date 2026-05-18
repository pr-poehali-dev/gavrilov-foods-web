import { useState, useEffect } from "react";
import { Lang, translations } from "./translations";

const STORAGE_KEY = "gf_lang";

// Map country codes → language
const COUNTRY_LANG: Record<string, Lang> = {
  RU: "ru", BY: "ru", KZ: "ru", UA: "ru", UZ: "ru",
  MX: "es", ES: "es", AR: "es", CO: "es", CL: "es",
  PE: "es", VE: "es", EC: "es", GT: "es", CU: "es",
  BO: "es", DO: "es", HN: "es", PY: "es", SV: "es",
  NI: "es", CR: "es", PA: "es", UY: "es",
};

async function detectLangByIP(): Promise<Lang> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    const country: string = data.country_code ?? "";
    return COUNTRY_LANG[country] ?? "en";
  } catch {
    return "en";
  }
}

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && ["en", "ru", "es"].includes(saved)) return saved;
    // Browser language quick-check while IP resolves
    const bl = navigator.language.slice(0, 2).toLowerCase();
    if (bl === "ru") return "ru";
    if (bl === "es") return "es";
    return "en";
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return; // user already chose manually
    detectLangByIP().then((detected) => {
      setLangState(detected);
    });
  }, []);

  const setLang = (l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  };

  const t = translations[lang];

  return { lang, setLang, t };
}
