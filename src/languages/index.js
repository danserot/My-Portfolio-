import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { en } from "./en";
import { ru } from "./ru";

export const LANG_STORAGE_KEY = "artem-khloptsev-language";
export const LANGUAGE_OPTIONS = ["ru", "en"];
export const DEFAULT_LANGUAGE = "en";

const translations = {
  en,
  ru,
};

const LanguageContext = createContext(null);

function normalizeLanguage(language) {
  return LANGUAGE_OPTIONS.includes(language) ? language : DEFAULT_LANGUAGE;
}

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (LANGUAGE_OPTIONS.includes(savedLanguage)) {
    return savedLanguage;
  }

  return window.navigator.language?.toLowerCase().startsWith("ru")
    ? "ru"
    : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setCurrentLanguage] = useState(getInitialLanguage);

  const setLanguage = (nextLanguage) => {
    const safeLanguage = normalizeLanguage(nextLanguage);

    setCurrentLanguage(safeLanguage);
    window.localStorage.setItem(LANG_STORAGE_KEY, safeLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
