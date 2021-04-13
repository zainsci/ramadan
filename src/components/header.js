import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h3 className="logo">zainsci</h3>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a
              href="https://www.github.com/zainsci/ramadan"
              target="_blank"
              rel="noreferrer"
              className="nav__link"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
