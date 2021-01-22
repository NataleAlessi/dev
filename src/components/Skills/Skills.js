import './Skills.css'

const Skills = () => {
    return (
        <div className="container Skills">
          <div className="columns is-multiline" 
              data-aos="fade-in"
              data-aos-easing="linear">
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">Skills</h1>
            </div>
            <div className="column is-6">
              <h1 className='skill-label'>React</h1>
              <progress className="progress" value="85" max="100" />
              <h1 className='skill-label'>Flask</h1>
              <progress className="progress" value="70" max="100" />
              <h1 className='skill-label'>Django</h1>
              <progress className="progress" value="65" max="100" />
              <h1 className='skill-label'>Laravel</h1>
              <progress className="progress" value="75" max="100" />
              <h1 className='skill-label'>Selenium</h1>
              <progress className="progress" value="70" max="100" />
            </div>
            <div
              className="column is-6"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1 className='skill-label'>MySQL/SQLite</h1>
              <progress className="progress" value="65" max="100" />
              <h1 className='skill-label'>MongoDB</h1>
              <progress className="progress" value="60" max="100" />
              <h1 className='skill-label'>Git</h1>
              <progress className="progress" value="85" max="100" />
              <h1 className='skill-label'>Solidity/Truffle</h1>
              <progress className="progress" value="60" max="100" />
              <h1 className='skill-label'>Test Driven Development</h1>
              <progress className="progress" value="60" max="100" />
            </div>
          </div>
        </div>
    )
}

export default Skills