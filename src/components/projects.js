import "./App.css";
import React from "react";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="friendship-block">
          <div className="photo-grid">
            <img
              src="Images/Снимок экрана 2025-06-20 084501.png"
              alt="Фото 1"
            />
            <img
              src="Images/Снимок экрана 2025-06-20 084543.png"
              alt="Фото 2"
            />
            <img
              src="Images/Снимок экрана 2025-06-20 084625.png"
              alt="Фото 3"
            />
            <img
              src="Images/Снимок экрана 2025-06-20 084655.png"
              alt="Фото 4"
            />
          </div>
          <div className="friendship-text">
            <h2>Short landing</h2>
            <p>
              My pet-project, which I made for experience and to show my ability
              to create a landing page. <br />
              <br />
              <br />
              <a
                href="https://frolicking-semolina-de0ae3.netlify.app/"
                target="_blank"
                rel="noreferrer">
                <button className="go_btn">Go to the page</button>
              </a>
            </p>
          </div>
        </div>
        <div className="friendship-block">
          <div className="photo-grid">
            <img src="Images/game1.png" alt="Фото 1" />
            <img src="Images/game2.png" alt="Фото 2" />
            <img src="Images/game3.png" alt="Фото 3" />
            <img src="Images/game4.png" alt="Фото 4" />
          </div>
          <div className="friendship-text">
            <h2>Mini-game</h2>
            <p>
              Another project just a short mini game named in russian visilitsa
              <br />
              <br />
              <br />
              <a
                href="https://timely-fox-75efdb.netlify.app/"
                target="_blank"
                rel="noreferrer">
                <button className="go_btn">Go to the page</button>
              </a>
            </p>
          </div>
        </div>
        <div className="friendship-block">
          <div className="photo-grid">
            <img src="Images/image.png" alt="Фото 1" />
            <img src="Images/image copy 2.png" alt="Фото 2" />
            <img src="Images/image copy 3.png" alt="Фото 3" />
            <img src="Images/image copy.png" alt="Фото 4" />
          </div>
          <div className="friendship-text">
            <h2>Tic-tac-toe</h2>
            <p>
              Short minigame tic-tac-toe, which everyone knows.
              <br />
              <br />
              <br />
              <a
                href="https://polite-mermaid-22cba4.netlify.app/"
                target="_blank"
                rel="noreferrer">
                <button className="go_btn">Go to the page</button>
              </a>
            </p>
          </div>
        </div>
        <div className="friendship-block">
          <div className="photo-grid">
            <img src="Images/image copy 4.png" alt="Фото 1" />
            <img src="Images/image copy 5.png" alt="Фото 2" />
            <img src="Images/image copy 6.png" alt="Фото 3" />
            <img src="Images/image copy 7.png" alt="Фото 4" />
          </div>
          <div className="friendship-text">
            <h2>Birthday website</h2>
            <p>
              This masterpiece was made for my birthday, and it is quite simple.
              <br />
              <br />
              <br />
              <a
                href="https://stalwart-kataifi-9dc8fb.netlify.app/"
                target="_blank"
                rel="noreferrer">
                <button className="go_btn">Go to the page</button>
              </a>
            </p>
          </div>
        </div>
        <div className="friendship-block">
          <div className="photo-grid">
            <img src="Images/image copy 8.png" alt="Фото 1" />
            <img src="Images/image copy 11.png" alt="Фото 2" />
            <img src="Images/image copy 10.png" alt="Фото 3" />
            <img src="Images/image copy 9.png" alt="Фото 4" />
          </div>
          <div className="friendship-text">
            <h2>To-do website :0</h2>
            <p>
              Here you can planning your day, and obviously all website made in
              minimalistic style.
              <br />
              <br />
              <br />
              <a
                href="https://incandescent-starburst-447285.netlify.app/"
                target="_blank"
                rel="noreferrer">
                <button className="go_btn">Go to the page</button>
              </a>
            </p>
          </div>
        </div>
        <div className="friendship-block">
          <div className="photo-grid">
            <img src="Images/image copy 12.png" alt="Фото 1" />
            <img src="Images/image copy 15.png" alt="Фото 2" />
            <img src="Images/image copy 14.png" alt="Фото 3" />
            <img src="Images/image copy 13.png" alt="Фото 4" />
          </div>
          <div className="friendship-text">
            <h2>Pomodoro Technique Timer</h2>
            <p>
              Boost your focus. Beat procrastination. Work smarter — not harder.
              Welcome to your ultimate Pomodoro Timer — designed to help you
              stay productive and refreshed all day. <br />
              ⚡ Work in powerful 25-minute sprints. <br />
              🌿 Take 5-minute breathers. <br />
              💡 After 4 rounds, enjoy a well-earned long break. <br />
              Whether you're studying, coding, or creating — this method keeps
              your mind sharp and your goals in motion. Start your flow. Stay in
              control. Pomodoro your day.
              <br />
              <br />
              <br />
              <a
                href="https://majestic-frangollo-c8fcb8.netlify.app/"
                target="_blank"
                rel="noreferrer">
                <button className="go_btn">Go to the page</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
