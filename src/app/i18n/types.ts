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
    experience: {
      title: string;
      subtitle: string;
      role: string;
      company: string;
      period: string;
      location: string;
      achievements: string[];
    };
    techCards: Array<{ title: string; text: string }>;
    rows: Record<AboutRowId, { alt: string; title: string; text: string }>;
  };
  projects: {
    title: string;
    goToPage: string;
    viewDetails: string;
    imageAlt: string;
    detail: {
      backToProjects: string;
      liveDemo: string;
      sourceCode: string;
      roleTitle: string;
      stackTitle: string;
      overviewTitle: string;
      challengeTitle: string;
      approachTitle: string;
      resultTitle: string;
      galleryTitle: string;
      notFoundTitle: string;
      notFoundText: string;
      byCategory: Record<
        ProjectCategory,
        { role: string; challenge: string; approach: string; result: string }
      >;
    };
    filters: Record<ProjectFilter, string>;
    items: Record<ProjectId, { title: string; description: string[] }>;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitAction: string;
    privacyNote: string;
    successTitle: string;
    successText: string;
    backHome: string;
  };
  seo: {
    home: { title: string; description: string };
    projects: { title: string; description: string };
    about: { title: string; description: string };
    resume: { title: string; description: string };
    contact: { title: string; description: string };
  };
}

export type Translation = TranslationSection;

export function isLanguage(value: string | null): value is Language {
  return LANGUAGE_OPTIONS.some((language) => language === value);
}
