import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MobileNavbar.css'

const MobileNavbar = () => {
  const [isActive, setIsActive] = useState(false)
  const handleToggleBurgerMenu = () => {
    setIsActive(!isActive)
  }
  const handleClick = () => {
    window.scrollTo({top: window.outerHeight, behavior:'smooth'})
  }
    return (
      <nav onClick={handleToggleBurgerMenu} className="navbar is-transparent is-hidden-desktop">
        
        <div className="navbar-brand">
          <div className={`navbar-burger burger ${isActive ? "is-active" : ""}`} data-target="mobile-nav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div id="mobile-nav" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <div onClick={handleClick} className="navbar-item">
              <Link className="navbar-item" to="/About">SomethingAboutMe</Link>
            </div>
            <div onClick={handleClick} className="navbar-item">
              <Link className="navbar-item" to="/Services">MyOffer</Link>
            </div>
            <div onClick={handleClick} className="navbar-item">
              <Link className="navbar-item" to="/Resume">HereForMyResume</Link>
            </div>
            <div onClick={handleClick} className="navbar-item">
              <Link className="navbar-item" to="/ContactMe">ContactMe</Link>
            </div>
            <div onClick={handleClick} className="navbar-item">
              <Link className="navbar-item" to="/Projects">Projects&Works</Link>
            </div>
            <div onClick={handleClick} className="navbar-item">
              <Link className="navbar-item" to="/AboutThisPage">AboutThisPage</Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default MobileNavbar