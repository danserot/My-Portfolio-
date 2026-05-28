import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const LANG_STORAGE_KEY = "artem-khloptsev-language";

const NAV_LABELS = {
  en: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  ru: {
    home: "Главная",
    projects: "Проекты",
    about: "Обо мне",
    contact: "Контакты",
  },
};

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";

  const savedLanguage = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (savedLanguage === "ru" || savedLanguage === "en") {
    return savedLanguage;
  }

  return window.navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(getInitialLanguage);
  const labels = NAV_LABELS[language];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem(LANG_STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const languageSwitch = (
    <div className="language-switch" aria-label="Language switcher">
      <button
        type="button"
        className={language === "ru" ? "active" : ""}
        onClick={() => changeLanguage("ru")}
        aria-pressed={language === "ru"}>
        RU
      </button>
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
        aria-pressed={language === "en"}>
        EN
      </button>
    </div>
  );

  return (
    <>
      <div className="header">
        <div className="headerblock">
          <Link to="/" onClick={closeMenu}>
            <img
              className="header_logo"
              src="Images/sign-removebg-preview.png"
              alt="Artem Khloptsev logo"
            />
          </Link>
        </div>

        <div className="header_actions">
          {languageSwitch}
          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}>
            ☰
          </button>
        </div>

        <nav className={`nav${isOpen ? " active" : ""}`} id="nav">
          <Link to="/" onClick={closeMenu}>{labels.home}</Link>
          <Link to="/projects" onClick={closeMenu}>{labels.projects}</Link>
          <Link to="/about" onClick={closeMenu}>{labels.about}</Link>
          <a href="https://t.me/@Artem_Khloptsev" onClick={closeMenu}>{labels.contact}</a>
        </nav>

        <nav className="header_text" id="header_text">
          <div className="headerblock">
            <Link to="/">{labels.home}</Link>
          </div>
          <div className="headerblock">
            <Link to="/projects">{labels.projects}</Link>
          </div>
          <div className="headerblock">
            <Link to="/about">{labels.about}</Link>
          </div>
          <div className="headerblock">
            <a
              href="https://t.me/@Artem_Khloptsev"
              target="_blank"
              rel="noreferrer">
              {labels.contact}
            </a>
          </div>
        </nav>
      </div>
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
}
