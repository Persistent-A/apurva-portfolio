const Hamburger = () => {

    const toggleHamburger = () => {
      const hamIcon = document.querySelector('.hamburger-icon')
      const menu = document.querySelector('.menu')
      menu.className === 'menu' ? menu.className += ' menu-toggle' : menu.className = 'menu'
      hamIcon.className === 'hamburger-icon' ? hamIcon.className += ' cross' : hamIcon.className = 'hamburger-icon'
    }
  

  return (
    <div className="hamburger-icon" onClick={toggleHamburger}>
        <div className="bar-first"></div>
        <div className="bar-second"></div>
        <div className="bar-third"></div>
    </div>
  )
}

export default Hamburger
