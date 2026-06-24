import type {
  ProjectCategory,
  ProjectFilter,
  ProjectId,
} from "../i18n/types";

export interface ProjectDefinition {
  id: ProjectId;
  category: ProjectCategory;
  images: readonly string[];
  liveUrl: string;
  sourceUrl: string;
  stack: readonly string[];
}

export const PROJECTS: readonly ProjectDefinition[] = [
  {
    id: "goleador",
    category: "real",
    images: ["/Images/kelme1.png", "/Images/kelme2.png", "/Images/kelme3.png", "/Images/kelme4.png"],
    liveUrl: "https://goleador.kz/",
    sourceUrl: "https://github.com/danserot",
    stack: ["React", "JavaScript", "CSS3", "Responsive UI", "E-commerce"],
  },
  {
    id: "autoscout",
    category: "real",
    images: [
      "/Images/AutoScout(1).png",
      "/Images/AutoScout(2).png",
      "/Images/AutoScout(3).png",
      "/Images/AutoScout(4).png",
    ],
    liveUrl: "https://autoscout-kz.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["React", "JavaScript", "REST API", "Responsive UI"],
  },
  {
    id: "gsc",
    category: "real",
    images: ["/Images/gsc1.png", "/Images/gsc2.png", "/Images/gsc3.png", "/Images/gsc4.png"],
    liveUrl: "https://golden-students-club.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["React", "JavaScript", "Product Design", "Responsive UI"],
  },
  {
    id: "landing",
    category: "fun",
    images: [
      "/Images/Снимок экрана 2025-06-20 084501.png",
      "/Images/Снимок экрана 2025-06-20 084543.png",
      "/Images/Снимок экрана 2025-06-20 084625.png",
      "/Images/Снимок экрана 2025-06-20 084655.png",
    ],
    liveUrl: "https://frolicking-semolina-de0ae3.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
  },
  {
    id: "hangman",
    category: "games",
    images: ["/Images/game1.png", "/Images/game2.png", "/Images/game3.png", "/Images/game4.png"],
    liveUrl: "https://timely-fox-75efdb.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
  },
  {
    id: "tictactoe",
    category: "games",
    images: [
      "/Images/image.png",
      "/Images/image copy 2.png",
      "/Images/image copy 3.png",
      "/Images/image copy.png",
    ],
    liveUrl: "https://polite-mermaid-22cba4.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["JavaScript", "HTML5", "CSS3", "Game State"],
  },
  {
    id: "birthday",
    category: "fun",
    images: [
      "/Images/image copy 4.png",
      "/Images/image copy 5.png",
      "/Images/image copy 6.png",
      "/Images/image copy 7.png",
    ],
    liveUrl: "https://stalwart-kataifi-9dc8fb.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
  },
  {
    id: "todo",
    category: "fun",
    images: [
      "/Images/image copy 8.png",
      "/Images/image copy 11.png",
      "/Images/image copy 10.png",
      "/Images/image copy 9.png",
    ],
    liveUrl: "https://incandescent-starburst-447285.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["JavaScript", "CSS3", "Local State", "Responsive UI"],
  },
  {
    id: "pomodoro",
    category: "fun",
    images: [
      "/Images/image copy 12.png",
      "/Images/image copy 15.png",
      "/Images/image copy 14.png",
      "/Images/image copy 13.png",
    ],
    liveUrl: "https://majestic-frangollo-c8fcb8.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["JavaScript", "Timer API", "CSS3", "Local State"],
  },
  {
    id: "monkey",
    category: "fun",
    images: [
      "/Images/image copy 12.png",
      "/Images/image copy 15.png",
      "/Images/image copy 14.png",
      "/Images/image copy 13.png",
    ],
    liveUrl: "https://majestic-frangollo-c8fcb8.netlify.app/",
    sourceUrl: "https://github.com/danserot",
    stack: ["JavaScript", "Canvas API", "Game Loop", "CSS3"],
  },
];

export const PROJECT_FILTERS: readonly ProjectFilter[] = [
  "all",
  "real",
  "fun",
  "games",
];

const PROJECT_IDS = new Set<ProjectId>(PROJECTS.map((project) => project.id));

export function isProjectId(value: string | undefined): value is ProjectId {
  return Boolean(value && PROJECT_IDS.has(value as ProjectId));
}

export function getProjectById(id: ProjectId): ProjectDefinition {
  const project = PROJECTS.find((item) => item.id === id);

  if (!project) {
    throw new Error(`Project not found: ${id}`);
  }

  return project;
}
