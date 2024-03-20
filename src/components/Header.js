// ICONS
import { useState } from "react";
import logo from "../image/self/apurva-logo.png";

import Hamburger from "./Hamburger";

const Header = () => {
  const [lastScrollPosition, setLastPosition] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    var header = document.querySelector(".header");
    var currentScrollPosition = window.scrollY;
    if (currentScrollPosition > lastScrollPosition) {
      header.className += " moveUp";
      setLastPosition(currentScrollPosition);
    } else {
      header.className = "header";
    }
  });

  const toggleHamburger = () => {
    const hamIcon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".drawing-menu");
    menu.className === "drawing-menu"
      ? (menu.className += " menu-toggle")
      : (menu.className = "drawing-menu");
    hamIcon.className === "hamburger-icon"
      ? (hamIcon.className += " cross")
      : (hamIcon.className = "hamburger-icon");
  };

  return (
    <nav className="header">
      <div>
        <a href="#main" rel="norefferal">
          <img className="logo" src={logo} alt="" />
        </a>
      </div>
      <Hamburger />
      <div className="drawing-menu">
        <div className="translucent" onClick={toggleHamburger}></div>
        <ul className="menu">
          <li onClick={toggleHamburger}>
            <a href="#about-container" rel="norefferal">
              <span>01.</span>
              <span>About</span>
            </a>
          </li>
          <li onClick={toggleHamburger}>
            <a href="#experience-heading" rel="norefferal">
              <span>02.</span>
              <span>Experience</span>
            </a>
          </li>
          <li onClick={toggleHamburger}>
            <a href="#project-heading" rel="norefferal">
              <span>03.</span>
              <span>Work</span>
            </a>
          </li>
          <li onClick={toggleHamburger}>
            <a href="#contact-heading" rel="norefferal">
              <span>04.</span>
              <span>Contact</span>
            </a>
          </li>
          <li onClick={toggleHamburger}>
            <a
              href="https://drive.google.com/file/d/1b66GHIvmXYXadbyQhKALzTJLSCHmSNxL/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
