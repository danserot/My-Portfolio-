import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
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
        <Link to="/projects">Projects</Link>{" "}
        <a href="https://wa.me/77752681150">Contact</a>
      </nav>
      <div className={`header_text${isOpen ? " open" : ""}`} id="header_text">
        <div className="headerblock">
          <Link to="/">Home</Link>{" "}
        </div>
        <div className="headerblock">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="headerblock">
          <a href="https://wa.me/77752681150" target="_blank" rel="noreferrer">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
