import { Fragment, useMemo, useState } from "react";
import Header from "../components/header";
import "../styles/projects.css";
import Footer from "../components/Footer";
import CursorParticles from "../components/CursorParticles";
import { useLanguage } from "../languages";

const PROJECTS = [
  {
    id: "goleador",
    category: "real",
    imgs: [
      "Images/kelme1.png",
      "Images/kelme2.png",
      "Images/kelme3.png",
      "Images/kelme4.png",
    ],
    link: "https://goleador.kz/",
  },
  {
    id: "autoscout",
    category: "real",
    imgs: [
      "Images/AutoScout(1).png",
      "Images/AutoScout(2).png",
      "Images/AutoScout(3).png",
      "Images/AutoScout(4).png",
    ],
    link: "https://autoscout-kz.netlify.app/",
  },
  {
    id: "gsc",
    category: "real",
    imgs: ["Images/gsc1.png", "Images/gsc2.png", "Images/gsc3.png", "Images/gsc4.png"],
    link: "https://golden-students-club.netlify.app/",
  },
  {
    id: "landing",
    category: "fun",
    imgs: [
      "Images/Снимок экрана 2025-06-20 084501.png",
      "Images/Снимок экрана 2025-06-20 084543.png",
      "Images/Снимок экрана 2025-06-20 084625.png",
      "Images/Снимок экрана 2025-06-20 084655.png",
    ],
    link: "https://frolicking-semolina-de0ae3.netlify.app/",
  },
  {
    id: "hangman",
    category: "games",
    imgs: ["Images/game1.png", "Images/game2.png", "Images/game3.png", "Images/game4.png"],
    link: "https://timely-fox-75efdb.netlify.app/",
  },
  {
    id: "tictactoe",
    category: "games",
    imgs: [
      "Images/image.png",
      "Images/image copy 2.png",
      "Images/image copy 3.png",
      "Images/image copy.png",
    ],
    link: "https://polite-mermaid-22cba4.netlify.app/",
  },
  {
    id: "birthday",
    category: "fun",
    imgs: [
      "Images/image copy 4.png",
      "Images/image copy 5.png",
      "Images/image copy 6.png",
      "Images/image copy 7.png",
    ],
    link: "https://stalwart-kataifi-9dc8fb.netlify.app/",
  },
  {
    id: "todo",
    category: "fun",
    imgs: [
      "Images/image copy 8.png",
      "Images/image copy 11.png",
      "Images/image copy 10.png",
      "Images/image copy 9.png",
    ],
    link: "https://incandescent-starburst-447285.netlify.app/",
  },
  {
    id: "pomodoro",
    category: "fun",
    imgs: [
      "Images/image copy 12.png",
      "Images/image copy 15.png",
      "Images/image copy 14.png",
      "Images/image copy 13.png",
    ],
    link: "https://majestic-frangollo-c8fcb8.netlify.app/",
  },
  {
    id: "monkey",
    category: "fun",
    imgs: [
      "Images/image copy 12.png",
      "Images/image copy 15.png",
      "Images/image copy 14.png",
      "Images/image copy 13.png",
    ],
    link: "https://majestic-frangollo-c8fcb8.netlify.app/",
  },
];

const FILTERS = ["all", "real", "fun", "games"];

function ProjectDescription({ paragraphs }) {
  return (
    <div className="project-description">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>
          {paragraph.split("\n").map((line, index, lines) => (
            <Fragment key={`${line}-${index}`}>
              {line}
              {index < lines.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
      ))}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all"); // all | real | fun | games
  const { t } = useLanguage();
  const projectText = t.projects.items;

  const projects = useMemo(
    () =>
      PROJECTS.map((project) => ({
        ...project,
        ...projectText[project.id],
      })),
    [projectText],
  );

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  const counts = useMemo(() => {
    const c = { all: projects.length, real: 0, fun: 0, games: 0 };
    projects.forEach((p) => (c[p.category] += 1));
    return c;
  }, [projects]);

  return (
    <>
      <CursorParticles />
      <div className="App">
        <Header />

        <div className="container">
          {/* FILTER BAR */}
          <h1 className="filters">{t.projects.title}</h1>
          <div className="projects-filters">
            {FILTERS.map((name) => (
              <button
                className={`filter-btn ${filter === name ? "is-active" : ""}`}
                key={name}
                onClick={() => setFilter(name)}>
                {t.projects.filters[name]}{" "}
                <span className="filter-count">{counts[name]}</span>
              </button>
            ))}
          </div>

          {/* LIST */}
          {filtered.map((p) => (
            <div className="friendship-block" key={p.id}>
              <div className="photo-grid">
                {p.imgs.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${p.title} — ${t.projects.imageAlt} ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="friendship-text">
                <h2>{p.title}</h2>
                <ProjectDescription paragraphs={p.description} />
                <a className="go_btn" href={p.link} target="_blank" rel="noreferrer">
                  {t.projects.goToPage}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
