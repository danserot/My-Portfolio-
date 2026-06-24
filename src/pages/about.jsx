import Header from "../components/header";
import Footer from "../components/Footer";
import CursorParticles from "../components/CursorParticles";
import { useLanguage } from "../languages";
import "../styles/about.css";

const ABOUT_MEDIA = [
  { id: "frontend", src: "/Images/developer.jpg" },
  { id: "volleyball", src: "/Images/volley.jpg", reverse: true },
  { id: "hackathons", src: "/Images/hacaton.jpg" },
  { id: "startup", src: "/Images/aword.jpg", reverse: true },
  { id: "university", src: "/Images/aitu.jpg" },
];

export default function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <>
      <CursorParticles />
      <Header />

      <section className="about" id="about">
        <div className="about__container">
          <header className="about__header">
            <h2 className="about__title">{about.title}</h2>
            <p className="about__subtitle">{about.subtitle}</p>
          </header>

          <div className="about__stackBlock">
            <h3 className="about__stackTitle">{about.techTitle}</h3>

            <div className="about__techGrid">
              {about.techCards.map((card) => (
                <div className="techCard" key={card.title}>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about__stack">
            {ABOUT_MEDIA.map((item) => {
              const row = about.rows[item.id];

              return (
                <div
                  className={`about__row${item.reverse ? " about__row--reverse" : ""}`}
                  key={item.id}>
                  <div className="about__media">
                    <img src={item.src} alt={row.alt} />
                  </div>
                  <div className="about__content">
                    <h3>{row.title}</h3>
                    <p>{row.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
