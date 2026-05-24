import { createContext, useContext, useState, useEffect } from "react";
import { type Language, translations, type Translations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

function resolveLang(raw: string | null): Language | null {
  if (raw === "uz" || raw === "ru" || raw === "en") {
    return raw;
  }
  return null;
}

function safeGetStoredLang(): Language | null {
  try {
    return resolveLang(localStorage.getItem("fba_lang"));
  } catch {
    return null;
  }
}

function safeSetStoredLang(lang: Language) {
  try {
    localStorage.setItem("fba_lang", lang);
  } catch {
    // Ignore storage errors on restricted/private mobile browsers.
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const fromUrl = resolveLang(new URLSearchParams(window.location.search).get("lang"));
    if (fromUrl) {
      safeSetStoredLang(fromUrl);
      return fromUrl;
    }

    const stored = safeGetStoredLang();
    return stored || "en";
  });

  const setLang = (l: Language) => {
    safeSetStoredLang(l);
    setLangState(l);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (l === "en") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", l);
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onPopState = () => {
      const fromUrl = resolveLang(new URLSearchParams(window.location.search).get("lang"));
      if (fromUrl) {
        setLangState(fromUrl);
        safeSetStoredLang(fromUrl);
        return;
      }

      const stored = safeGetStoredLang();
      if (stored) {
        setLangState(stored);
      }
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
