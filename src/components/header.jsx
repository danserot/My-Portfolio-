import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="header">
        <div className="headerblock">
          <a href="Index.html">
            <img
              className="header_logo"
              src="Images/sign-removebg-preview.png"
              alt="Header_logo"
            />
          </a>
        </div>
        <nav
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}>
          ☰
        </nav>

        <nav className={`nav${isOpen ? " active" : ""}`} id="nav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <a href="https://t.me/@Artem_Khloptsev">Contact</a>
        </nav>
        <div className={`header_text${isOpen ? " open" : ""}`} id="header_text">
          <div className="headerblock">
            <Link to="/">Home</Link>{" "}
          </div>
          <div className="headerblock">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="headerblock">
            <Link to="/about">About</Link>
          </div>
          <div className="headerblock">
            <a
              href="https://t.me/@Artem_Khloptsev"
              target="_blank"
              rel="noreferrer">
              Contact
            </a>
          </div>
        </div>
      </div>
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>} ;
    </>
  );
}
