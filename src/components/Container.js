import React from "react";

function container() {
  return (
    <div className="container">
      <img className="image" src="Images/Main.jpg" alt="My photo" />

      <div className="main texsts">
        <div className="main_text">
          <p className="bold_text">
            I do code and <br />
            <span className="bold_text_2">explore it!</span>
          </p>
        </div>
        <div className="subtitle">
          <p>
            Motivated and detail-oriented junior frontend developer with a
            foundational understanding of HTML, CSS, and JavaScript. Eager to
            grow and gain hands-on experience in building responsive,
            user-friendly web interfaces. Familiar with basic tools like Git,
            Figma, and browser developer tools. Quick learner with a passion for
            clean code and modern web design.
          </p>
        </div>
      </div>
      <div className="buttons">
        <div>
          <a href="https://wa.me/77752681150" target="_blank" rel="noreferrer">
            <button className="button_1">Get in Touch</button>
          </a>
        </div>
        <div>
          <a href="/ARTEM KHLOPTSEV.docx" download="Artem Khloptsev CV">
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
export default container;
