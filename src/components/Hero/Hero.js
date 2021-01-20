import './Hero.css'

import MobileNavbar from '../MobileNavbar/MobileNavbar'
import DesktopNavbar from '../DesktopNavbar/DesktopNavbar'

import { getDictionary } from '../../languages'

const Hero = (props) => {
  let dictionary = getDictionary(props.language)
  dictionary = dictionary.heroSection

  return (
    <section className="hero is-large">  
      <MobileNavbar/>      
    
        <div className="hero-body">
          <div className="container has-text-centered columns">
            <div className='up-on-desktop column is-7'>
            <h1 className="subtitle">{dictionary.subtitle}</h1>
            <h2 className="title">{dictionary.title}</h2>
            </div>
            <div className='down-on-desktop column is-5'>
            <h1 className="subtitle profession">{dictionary.profession}</h1>
            <h3 className="subtitle welcome">{dictionary.welcome}</h3>
            </div>
          </div>
        </div>
        
      <DesktopNavbar/>
    </section>
  )
}

export default Hero