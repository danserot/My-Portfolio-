import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { en } from "./en";
import { ru } from "./ru";
import {
  DEFAULT_LANGUAGE,
  isLanguage,
  LANG_STORAGE_KEY,
  type Language,
  type Translation,
} from "./types";

const translations: Record<Language, Translation> = {
  en,
  ru,
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  const savedLanguage = window.localStorage.getItem(LANG_STORAGE_KEY);

  if (isLanguage(savedLanguage)) {
    return savedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith("ru")
    ? "ru"
    : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setCurrentLanguage(nextLanguage);
    window.localStorage.setItem(LANG_STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
