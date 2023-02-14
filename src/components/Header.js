// ICONS
import logo from "../image/self/apurva-logo.png"

import Hamburger from "./Hamburger"

const Header = () => {

  const toggleHamburger = () => {
    const hamIcon = document.querySelector('.hamburger-icon')
    const menu = document.querySelector('.menu')
    menu.className === 'menu' ? menu.className += ' menu-toggle' : menu.className = 'menu'
    hamIcon.className === 'hamburger-icon' ? hamIcon.className += ' cross' : hamIcon.className = 'hamburger-icon'
  }

  return (
    <nav className="header">
        <div>
        <a href="#main" rel="norefferal"><img className="logo" src={logo} alt=''/></a>
        </div>
        <Hamburger />
        <ul className="menu">
            <li onClick={toggleHamburger}><a href="#about-container" rel="norefferal">About</a></li>
            <li onClick={toggleHamburger}><a href="#projects" rel="norefferal">Project</a></li>
            <li onClick={toggleHamburger}><a href="https://github.com/Persistent-A/Resume/raw/main/Apurva_Resume_2023.pdf" rel="norefferal">Resume</a></li>
        </ul>
    </nav>
  )
}

export default Header
