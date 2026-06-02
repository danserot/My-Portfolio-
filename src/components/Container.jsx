import "../styles/container.css";
import FlipPhoto from "./FlipPhoto";
import { useLanguage } from "../languages";

export default function Container() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <div className="container">
      <FlipPhoto
        frontSrc="/Images/Main.jpg"
        backSrc="/Images/im.jpg"
        alt={home.heroAlt}
        size={320}
      />
      <div className="main texsts">
        <div className="main_text">
          <p className="bold_text">
            {home.titleLine} <br />
            <span className="bold_text_2">{home.titleAccent}</span>
          </p>
        </div>
        <div className="subtitle">
          <p>{home.subtitle}</p>
        </div>
      </div>
      <div className="buttons">
        <div>
          <a
            href="https://t.me/@Artem_Khloptsev"
            target="_blank"
            rel="noreferrer">
            <button className="button_1">{home.primaryAction}</button>
          </a>
        </div>
        <div>
          <a href="./Artem Khloptsev CV.pdf" download="Artem Khloptsev CV">
            <button className="button_2">{home.secondaryAction}</button>
          </a>
        </div>
      </div>
      <div className="experience">
        <p>{home.experienceTitle}</p>
      </div>
      <div className="icons">
        <div>
          <img className="icon" src="Images/javascript.png" alt="Javascript" />
        </div>
        <div>
          <img className="icon" src="Images/html.png" alt="html" />
        </div>
        <div>
          <img className="icon" src="Images/css.png" alt="css" />
        </div>
        <div>
          <img className="icon" src="Images/reactjs.png" alt="react" />
        </div>
      </div>
    </div>
  );
}
