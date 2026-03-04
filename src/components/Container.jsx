import "../styles/container.css";
import FlipPhoto from "./FlipPhoto";

export default function container() {
  return (
    <div className="container">
      <FlipPhoto
        frontSrc="/Images/Main.jpg"
        backSrc="/Images/im.jpg" // поставь свою вторую фотку
        alt="Main banner"
        size={320}
      />
      <div className="main texsts">
        <div className="main_text">
          <p className="bold_text">
            I do code and <br />
            <span className="bold_text_2">explore it!</span>
          </p>
        </div>
        <div className="subtitle">
          <p>
            Frontend developer with strong proficiency in HTML5, CSS3,
            JavaScript (ES6+), and React. Experienced in building scalable,
            component-based interfaces, working with REST APIs and Supabase for
            backend integration. Solid foundation in backend fundamentals and
            object-oriented programming, with hands-on experience developing
            Java applications using core OOP principles. Focused on clean
            architecture, performance, and high-quality user experience.
          </p>
        </div>
      </div>
      <div className="buttons">
        <div>
          <a
            href="https://t.me/@Artem_Khloptsev"
            target="_blank"
            rel="noreferrer">
            <button className="button_1">Get in Touch</button>
          </a>
        </div>
        <div>
          <a href="./Artem Khloptsev CV.pdf" download="Artem Khloptsev CV">
            <button className="button_2">Download CV</button>
          </a>
        </div>
      </div>
      <div className="experience">
        <p>EXPERIENCE WITH</p>
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
