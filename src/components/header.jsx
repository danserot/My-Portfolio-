import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LANGUAGE_OPTIONS, useLanguage } from "../languages";
import "../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const labels = t.header.nav;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const languageSwitch = (
    <div className="language-switch" aria-label={t.header.languageSwitcher}>
      {LANGUAGE_OPTIONS.map((option) => (
        <button
          type="button"
          key={option}
          className={language === option ? "active" : ""}
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}>
          {option.toUpperCase()}
        </button>
      ))}
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
              alt={t.header.logoAlt}
            />
          </Link>
        </div>

        <div className="header_actions">
          {languageSwitch}
          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-label={t.header.menuLabel}
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
