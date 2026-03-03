import { useMemo, useState } from "react";
import Header from "../components/header";
import "../styles/projects.css";
import Footer from "../components/Footer";
import CursorParticles from "../components/CursorParticles";

export default function Projects() {
  const [filter, setFilter] = useState("all"); // all | real | fun | games

  const projects = useMemo(
    () => [
      {
        id: "goleador",
        category: "real",
        title: "Goleador — Commercial Football Store",
        imgs: [
          "Images/kelme1.png",
          "Images/kelme2.png",
          "Images/kelme3.png",
          "Images/kelme4.png",
        ],
        desc: (
          <>
            Goleador is a commercial online store specializing in professional
            football apparel and sports equipment. The platform presents Kelme
            collections and other high-quality gear for teams and individual
            players.
            <br />
            <br />
            ⚽ Official football kits and training wear. <br />
            🧤 Professional equipment and accessories. <br />
            🛒 Modern, responsive e-commerce interface. <br />
            <br />
            The website is designed with a clean layout, clear product
            presentation, and user-friendly navigation to ensure smooth shopping
            experience across all devices.
          </>
        ),
        link: "https://goleador.kz/",
      },

      {
        id: "gsc",
        category: "real",
        title: "Golden Students Club — Startup Platform",
        imgs: [
          "Images/gsc1.png",
          "Images/gsc2.png",
          "Images/gsc3.png",
          "Images/gsc4.png",
        ],
        desc: (
          <>
            Golden Students Club is my startup project designed to support
            ambitious students by connecting them with verified opportunities:
            scholarships, internships, events, and a community for growth.
            <br />
            <br />
            🏆 With this project, I won a startup battle that included{" "}
            <b>5 countries</b> and <b>120 teams</b>. <br />
            🚀 Product idea + UI/UX + implementation mindset. <br />
            📌 Built as a modern, responsive web experience.
          </>
        ),
        link: "https://golden-students-club.netlify.app/",
      },

      {
        id: "landing",
        category: "fun",
        title: "Short landing",
        imgs: [
          "Images/Снимок экрана 2025-06-20 084501.png",
          "Images/Снимок экрана 2025-06-20 084543.png",
          "Images/Снимок экрана 2025-06-20 084625.png",
          "Images/Снимок экрана 2025-06-20 084655.png",
        ],
        desc: (
          <>
            My pet-project, made for experience and to show my ability to create
            a landing page.
          </>
        ),
        link: "https://frolicking-semolina-de0ae3.netlify.app/",
      },

      {
        id: "hangman",
        category: "games",
        title: "Mini-game (Hangman)",
        imgs: [
          "Images/game1.png",
          "Images/game2.png",
          "Images/game3.png",
          "Images/game4.png",
        ],
        desc: <>A short mini game (Hangman / “Виселица”).</>,
        link: "https://timely-fox-75efdb.netlify.app/",
      },

      {
        id: "tictactoe",
        category: "games",
        title: "Tic-tac-toe",
        imgs: [
          "Images/image.png",
          "Images/image copy 2.png",
          "Images/image copy 3.png",
          "Images/image copy.png",
        ],
        desc: <>Classic tic-tac-toe mini game.</>,
        link: "https://polite-mermaid-22cba4.netlify.app/",
      },

      {
        id: "birthday",
        category: "fun",
        title: "Birthday website",
        imgs: [
          "Images/image copy 4.png",
          "Images/image copy 5.png",
          "Images/image copy 6.png",
          "Images/image copy 7.png",
        ],
        desc: <>A simple website made for my birthday.</>,
        link: "https://stalwart-kataifi-9dc8fb.netlify.app/",
      },

      {
        id: "todo",
        category: "fun",
        title: "To-do website :0",
        imgs: [
          "Images/image copy 8.png",
          "Images/image copy 11.png",
          "Images/image copy 10.png",
          "Images/image copy 9.png",
        ],
        desc: <>Minimalistic to-do planner for daily tasks.</>,
        link: "https://incandescent-starburst-447285.netlify.app/",
      },

      {
        id: "pomodoro",
        category: "fun",
        title: "Pomodoro Technique Timer",
        imgs: [
          "Images/image copy 12.png",
          "Images/image copy 15.png",
          "Images/image copy 14.png",
          "Images/image copy 13.png",
        ],
        desc: (
          <>
            Boost your focus. Beat procrastination. Work smarter — not harder.
            <br />⚡ 25-minute sprints • 🌿 5-minute breaks • 💡 long break
            after 4 rounds
          </>
        ),
        link: "https://majestic-frangollo-c8fcb8.netlify.app/",
      },
    ],
    [],
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
          <h1 className="filters">My Projects</h1>
          <div className="projects-filters">
            <button
              className={`filter-btn ${filter === "all" ? "is-active" : ""}`}
              onClick={() => setFilter("all")}>
              All <span className="filter-count">{counts.all}</span>
            </button>

            <button
              className={`filter-btn ${filter === "real" ? "is-active" : ""}`}
              onClick={() => setFilter("real")}>
              Real projects <span className="filter-count">{counts.real}</span>
            </button>

            <button
              className={`filter-btn ${filter === "fun" ? "is-active" : ""}`}
              onClick={() => setFilter("fun")}>
              For fun <span className="filter-count">{counts.fun}</span>
            </button>

            <button
              className={`filter-btn ${filter === "games" ? "is-active" : ""}`}
              onClick={() => setFilter("games")}>
              Online games <span className="filter-count">{counts.games}</span>
            </button>
          </div>

          {/* LIST */}
          {filtered.map((p) => (
            <div className="friendship-block" key={p.id}>
              <div className="photo-grid">
                {p.imgs.map((src, idx) => (
                  <img key={src} src={src} alt={`${p.title} — ${idx + 1}`} />
                ))}
              </div>

              <div className="friendship-text">
                <h2>{p.title}</h2>
                <p>
                  {p.desc}
                  <br />
                  <br />
                  <br />
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <button className="go_btn">Go to the page</button>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
