import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './DesktopNavbar.css'
import lightLogo from './images/NA.png'

const DesktopNavbar = () => {
    useEffect(() => {
        const navbar = document.getElementById("hero-foot")
        const correction = 40
        const stickPoint = navbar.offsetTop - correction 
        const nextSection = document.getElementsByClassName("main-content")[0]
        const stickTheNavbar = () => {
            if (window.pageYOffset >= stickPoint) {
                navbar.classList.add("sticky-top")
                nextSection.classList.add("sticky-space")
              } else {
                navbar.classList.remove("sticky-top")
                nextSection.classList.remove("sticky-space")
            }}

        window.onscroll = () => {stickTheNavbar()};
    }, [])
    
    return (              
      <div id='hero-foot' className="hero-foot navbar-fixed-desktop">
        <div className="hero-foot--wrapper">
          <div className="columns">
            <div className="column is-5 hero-menu-desktop has-text-centered">
              <ul>
                <li><Link className='NavigationLink' 
                  to='/About'>SomethingAboutMe</Link></li>
                <li><Link className='NavigationLink' 
                  to='/Projects'>Projects&Works</Link></li>
                <li><Link className='NavigationLink' 
                  to='/Services'>MyOffer</Link></li>
              </ul>
            </div>

            <div className='light-logo-shield main-logo column is-2'>
                <img className='NA-logo' src={lightLogo} alt=""/>
            </div>

            <div className="column is-5 hero-menu-desktop has-text-centered">
              <ul>
                <li><Link className='NavigationLink' 
                  to='/Resume'>HereForMyResume</Link></li>
                <li><Link className='NavigationLink' 
                  to='/ContactMe'>ContactMe</Link></li>
                <li><Link className='NavigationLink' 
                  to='/AboutThisPage'>AboutThisPage</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DesktopNavbar