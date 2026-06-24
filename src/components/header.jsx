import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LANGUAGE_OPTIONS, useLanguage } from "../languages";
import "../styles/header.css";

const getNavLinkClassName = ({ isActive }) =>
  `header__link${isActive ? " header__link--active" : ""}`;

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
            <span className="hamburger__icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <nav className={`nav${isOpen ? " active" : ""}`} id="nav">
          <NavLink to="/" end className={getNavLinkClassName} onClick={closeMenu}>
            {labels.home}
          </NavLink>
          <NavLink to="/projects" className={getNavLinkClassName} onClick={closeMenu}>
            {labels.projects}
          </NavLink>
          <NavLink to="/about" className={getNavLinkClassName} onClick={closeMenu}>
            {labels.about}
          </NavLink>
          <NavLink to="/resume" className={getNavLinkClassName} onClick={closeMenu}>
            {labels.resume}
          </NavLink>
          <a href="https://t.me/@Artem_Khloptsev" onClick={closeMenu}>{labels.contact}</a>
        </nav>

        <nav className="header_text" id="header_text">
          <div className="headerblock">
            <NavLink to="/" end className={getNavLinkClassName}>
              {labels.home}
            </NavLink>
          </div>
          <div className="headerblock">
            <NavLink to="/projects" className={getNavLinkClassName}>
              {labels.projects}
            </NavLink>
          </div>
          <div className="headerblock">
            <NavLink to="/about" className={getNavLinkClassName}>
              {labels.about}
            </NavLink>
          </div>
          <div className="headerblock">
            <NavLink to="/resume" className={getNavLinkClassName}>
              {labels.resume}
            </NavLink>
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
