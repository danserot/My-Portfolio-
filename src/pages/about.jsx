import Header from "../components/header";
import Footer from "../components/Footer";
import CursorParticles from "../components/CursorParticles";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <CursorParticles />
      <Header />
      <section className="about" id="about">
        <div className="about__container">
          <header className="about__header">
            <h2 className="about__title">About me</h2>
            <p className="about__subtitle">
              Frontend developer • Student at Astana IT University • Volleyball
              player
            </p>
          </header>

          <div className="about__stack">
            {/* 1 */}
            <div className="about__row">
              <div className="about__media">
                <img src="/images/developer.jpg" alt="Developer" />
              </div>
              <div className="about__content">
                <h3>Frontend Development</h3>
                <p>
                  I build responsive interfaces using React and modern UI
                  principles. Clean code, structured components and
                  production-ready layout.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="about__row about__row--reverse">
              <div className="about__media">
                <img src="/images/volley.jpg" alt="Volleyball" />
              </div>
              <div className="about__content">
                <h3>Volleyball</h3>
                <p>
                  Competitive mindset, discipline and teamwork. Sport keeps my
                  focus sharp and my performance consistent.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="about__row">
              <div className="about__media">
                <img src="/images/hacaton.jpg" alt="Hackathon" />
              </div>
              <div className="about__content">
                <h3>Hackathons</h3>
                <p>
                  Participated in startup competitions and won a recent battle.
                  Fast execution and idea validation under pressure.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="about__row about__row--reverse">
              <div className="about__media">
                <img src="/Images/aword.jpg" alt="Award" />
              </div>
              <div className="about__content">
                <h3>Startup Battle Winner</h3>
                <p>
                  Recognition for product thinking and execution. Focus on
                  real-world value and scalable ideas.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="about__row ">
              <div className="about__media">
                <img src="/images/aitu.jpg" alt="Astana IT University campus" />
              </div>
              <div className="about__content">
                <h3>Astana IT University</h3>
                <p>
                  I am majoring in Software Engineering at Astana IT University,
                  one of the strongest IT programs in Kazakhstan. The program
                  provides a solid foundation in algorithms, data structures,
                  databases, and modern software development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
