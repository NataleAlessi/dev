import './About.css'
import { getDictionary } from '../../languages'
import pro_pic from './images/pro_pic_1.png'

import Skills from '../Skills/Skills'

const About = (props) => {
	let dictionary = getDictionary(props.language)
  dictionary = dictionary.aboutSection

  return (
 		<div className="About">      
      <div>
          <div className="container">

            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                {dictionary.title}
              </h1>
            </div>

            <div className="columns is-multiline">
              <div
                className="column is-8 has-vertically-aligned-content"
                data-aos="fade-right">

                <p className="is-larger section-subtitle">
                  {dictionary.subtitle}
                </p>

                <br />
                <p className="main-text">{dictionary.mainText}</p>
                <br />
                <div className='personal-claim-box'>
                  <p className="personal-claim">{dictionary.personalClaim}</p>
                </div>

                <div className="columns about-links">

                  <div className="column">
                    <p className="heading">{dictionary.phoneMe}</p>
                    <p className="subheading">{dictionary.phone}</p>
                  </div>

                  <div className="column">
                    <p className="heading">{dictionary.mailMe}</p>
                    <p className="subheading">{dictionary.mail}</p>
                  </div>

                </div>
              </div>

              <div className="column is-1"></div>
              <div className="column is-3" data-aos="fade-left">
                <img className="is-rounded image-centered" src={pro_pic} alt="" />
              </div>

            </div>
        </div>
      </div>
      <hr style={{marginTop: '20vmin'}} className='custom-hr'/>

      <Skills/>

		</div>
	);
}

export default About;
