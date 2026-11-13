import type {
  ProjectCategory,
  ProjectFilter,
  ProjectId,
} from "../i18n/types";

export interface ProjectDefinition {
  id: ProjectId;
  category: ProjectCategory;
  images: readonly string[];
  liveUrl?: string;
  sourceUrl?: string;
  stack: readonly string[];
  hasCaseStudy?: boolean;
}

function githubProject(
  id: ProjectId,
  category: ProjectCategory,
  repository: string,
  stack: readonly string[],
): ProjectDefinition {
  return {
    id,
    category,
    images: [],
    sourceUrl: `https://github.com/danserot/${repository}`,
    stack,
    hasCaseStudy: false,
  };
}

export const PROJECTS: readonly ProjectDefinition[] = [
  githubProject("plannaer", "real", "Planear", ["React", "TypeScript", "Fastify", "SQLite", "PostgreSQL"]),
  githubProject("secureguard", "real", "Secure-guard-landing", ["React", "TypeScript", "Vite", "Google Apps Script"]),
  githubProject("resort", "real", "The-website-development", ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Flatpickr"]),
  githubProject("supplyai", "ai", "AI-Search", ["React", "FastAPI", "Python", "PostgreSQL", "pgvector", "Docker"]),
  githubProject("readdocument", "ai", "Normalization_Of_CP", ["React", "TypeScript", "Python", "LLM API", "Docker"]),
  githubProject("procurement", "ai", "solution_vectorization", ["React", "TypeScript", "Node.js", "Hash Embeddings", "Cosine Similarity"]),
  githubProject("schedule", "fun", "Schedual", ["React", "JavaScript", "CSS3", "Local Storage"]),
  githubProject("tanstack-todo", "fun", "To-do-list-", ["React", "TypeScript", "TanStack Router", "TanStack Query", "Chakra UI"]),
  githubProject("furniture-store", "fun", "Online-shop", ["React", "JavaScript", "CSS3", "Shopping Cart"]),
  githubProject("rentocar", "study", "Web-Technology-Midterm", ["HTML5", "CSS3", "Bootstrap 5"]),
  githubProject("web-basics", "study", "First-assigment-Web-Technologies", ["HTML5", "CSS3", "Responsive UI"]),
  githubProject("flexbox-grid", "study", "2_Assigment_Web-Technology", ["HTML5", "CSS3", "Flexbox", "CSS Grid"]),
  githubProject("forms-validation", "study", "4-Assigment-Web-technology", ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"]),
  githubProject("javascript-basics", "study", "5-Assigment-Web-Technology", ["HTML5", "CSS3", "JavaScript", "DOM API"]),
  githubProject("builder-pattern", "study", "Software_Design_Patterns_Assigment_1", ["Java", "Builder Pattern", "OOP"]),
  githubProject("divide-conquer", "study", "Design_Analysis_Algorithms_Assigment_1", ["Java", "Maven", "JUnit 5", "Benchmarking"]),
  githubProject("workload-engine", "study", "DAA_Second_Assigment", ["Java 17", "Maven", "Data Structures", "Benchmarking"]),
  githubProject("game-statistics", "study", "-ITP_Final_project", ["Python", "OOP", "JSON", "CSV", "unittest"]),
  githubProject("hacknu", "hackathons", "HackNU", ["React", "JavaScript", "Framer Motion", "Web Speech API"]),
  {
    id: "goleador",
    category: "real",
    images: ["/Images/goleador-1.webp", "/Images/goleador-2.webp", "/Images/goleador-3.webp", "/Images/goleador-4.webp"],
    liveUrl: "https://goleador.kz/",
    stack: ["React", "JavaScript", "CSS3", "Responsive UI", "E-commerce"],
  },
  {
    id: "autoscout",
    category: "real",
    images: [
      "/Images/autoscout-1.webp",
      "/Images/autoscout-2.webp",
      "/Images/autoscout-3.webp",
      "/Images/autoscout-4.webp",
    ],
    liveUrl: "https://autoscout-kz.netlify.app/",
    stack: ["React", "JavaScript", "REST API", "Responsive UI"],
  },
  {
    id: "gsc",
    category: "real",
    images: ["/Images/golden-students-club-1.webp", "/Images/golden-students-club-2.webp", "/Images/golden-students-club-3.webp", "/Images/golden-students-club-4.webp"],
    liveUrl: "https://golden-students-club.netlify.app/",
    sourceUrl: "https://github.com/danserot/Students-platform",
    stack: ["React", "JavaScript", "Product Design", "Responsive UI"],
  },
  {
    id: "landing",
    category: "fun",
    images: [
      "/Images/landing-1.webp",
      "/Images/landing-2.webp",
      "/Images/landing-3.webp",
      "/Images/landing-4.webp",
    ],
    liveUrl: "https://frolicking-semolina-de0ae3.netlify.app/",
    sourceUrl: "https://github.com/danserot/Simple-landing",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
  },
  {
    id: "hangman",
    category: "games",
    images: ["/Images/hangman-1.webp", "/Images/hangman-2.webp", "/Images/hangman-3.webp", "/Images/hangman-4.webp"],
    liveUrl: "https://timely-fox-75efdb.netlify.app/",
    sourceUrl: "https://github.com/danserot/Hangman-Game-on-js",
    stack: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
  },
  {
    id: "tictactoe",
    category: "games",
    images: [
      "/Images/tic-tac-toe-1.webp",
      "/Images/tic-tac-toe-2.webp",
      "/Images/tic-tac-toe-3.webp",
      "/Images/tic-tac-toe-4.webp",
    ],
    liveUrl: "https://polite-mermaid-22cba4.netlify.app/",
    sourceUrl: "https://github.com/danserot/Tic-tac-toe",
    stack: ["JavaScript", "HTML5", "CSS3", "Game State"],
  },
  {
    id: "birthday",
    category: "fun",
    images: [
      "/Images/birthday-1.webp",
      "/Images/birthday-2.webp",
      "/Images/birthday-3.webp",
      "/Images/birthday-4.webp",
    ],
    liveUrl: "https://stalwart-kataifi-9dc8fb.netlify.app/",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
  },
  {
    id: "todo",
    category: "fun",
    images: [
      "/Images/todo-1.webp",
      "/Images/todo-2.webp",
      "/Images/todo-3.webp",
      "/Images/todo-4.webp",
    ],
    liveUrl: "https://incandescent-starburst-447285.netlify.app/",
    sourceUrl: "https://github.com/danserot/To-Do-List",
    stack: ["React", "JavaScript", "CSS3", "Local Storage", "Supabase"],
  },
  {
    id: "pomodoro",
    category: "fun",
    images: [
      "/Images/pomodoro-1.webp",
      "/Images/pomodoro-2.webp",
      "/Images/pomodoro-3.webp",
      "/Images/pomodoro-4.webp",
    ],
    liveUrl: "https://majestic-frangollo-c8fcb8.netlify.app/",
    sourceUrl: "https://github.com/danserot/Pomidoro-timer",
    stack: ["JavaScript", "Timer API", "CSS3", "Local State"],
  },
  {
    id: "monkey",
    category: "games",
    images: [],
    sourceUrl: "https://github.com/danserot/Monket-Bounce",
    stack: ["JavaScript", "Canvas API", "Game Loop", "CSS3"],
  },
];

export const PROJECT_FILTERS: readonly ProjectFilter[] = [
  "all",
  "real",
  "ai",
  "study",
  "hackathons",
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
