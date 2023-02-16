// ICONS
import { useState } from "react"
import logo from "../image/self/apurva-logo.png"

import Hamburger from "./Hamburger"

const Header = () => {

  const [lastScrollPosition, setLastPosition] = useState(window.scrollY)

  window.addEventListener('scroll', () => {
    var header = document.querySelector('.header')
    var currentScrollPosition = window.scrollY
    if (currentScrollPosition > lastScrollPosition) {
      header.className += ' moveUp'
      setLastPosition(currentScrollPosition)
    }
    else {
      header.className = 'header'
    }
  })

  const toggleHamburger = () => {
    const hamIcon = document.querySelector('.hamburger-icon')
    const menu = document.querySelector('.drawing-menu')
    menu.className === 'drawing-menu' ? menu.className += ' menu-toggle' : menu.className = 'drawing-menu'
    hamIcon.className === 'hamburger-icon' ? hamIcon.className += ' cross' : hamIcon.className = 'hamburger-icon'
  }

  return (
    <nav className="header">
        <div>
        <a href="#main" rel="norefferal"><img className="logo" src={logo} alt=''/></a>
        </div>
        <Hamburger />
        <div className="drawing-menu">
          <div className="translucent" onClick={toggleHamburger}></div>
          <ul className="menu">
            <li onClick={toggleHamburger}><a href="#about-container" rel="norefferal">About</a></li>
            <li onClick={toggleHamburger}><a href="#project-heading" rel="norefferal">Project</a></li>
            <li onClick={toggleHamburger}><a href="https://github.com/Persistent-A/Resume/raw/main/Apurva_Resume_2023.pdf" rel="norefferal">Resume</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Header
