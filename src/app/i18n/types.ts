export const LANGUAGE_OPTIONS = ["ru", "en"] as const;
export const DEFAULT_LANGUAGE: Language = "en";
export const LANG_STORAGE_KEY = "artem-khloptsev-language";

export type Language = (typeof LANGUAGE_OPTIONS)[number];
export type AboutRowId =
  | "frontend"
  | "volleyball"
  | "hackathons"
  | "startup"
  | "university";
export type ProjectCategory = "real" | "fun" | "games";
export type ProjectFilter = "all" | ProjectCategory;
export type ProjectId =
  | "goleador"
  | "autoscout"
  | "gsc"
  | "landing"
  | "hangman"
  | "tictactoe"
  | "birthday"
  | "todo"
  | "pomodoro"
  | "monkey";

interface TranslationSection {
  header: {
    logoAlt: string;
    languageSwitcher: string;
    menuLabel: string;
    nav: {
      home: string;
      projects: string;
      about: string;
      resume: string;
      contact: string;
    };
  };
  home: {
    heroAlt: string;
    titleLine: string;
    titleAccent: string;
    subtitle: string;
    primaryAction: string;
    secondaryAction: string;
    experienceTitle: string;
  };
  resume: {
    title: string;
    subtitle: string;
    downloadAction: string;
    openAction: string;
    viewerTitle: string;
    fallback: string;
  };
  footer: {
    role: string;
    rights: string;
  };
  about: {
    title: string;
    subtitle: string;
    techTitle: string;
    techCards: Array<{ title: string; text: string }>;
    rows: Record<AboutRowId, { alt: string; title: string; text: string }>;
  };
  projects: {
    title: string;
    goToPage: string;
    imageAlt: string;
    filters: Record<ProjectFilter, string>;
    items: Record<ProjectId, { title: string; description: string[] }>;
  };
}

export type Translation = TranslationSection;

export function isLanguage(value: string | null): value is Language {
  return LANGUAGE_OPTIONS.some((language) => language === value);
}
