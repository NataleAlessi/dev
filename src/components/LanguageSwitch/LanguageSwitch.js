import './LanguageSwitch.css'

import itFlag from './images/it-flag.png'
import ukFlag from './images/uk-flag.png'

const LanguageSwitch = (props) => {  
  const handleSwitch = () => {
    switch (props.userLanguage) {
      case 'en':
        props.setUserLanguage('it')
        break;
      case 'it':
        props.setUserLanguage('en')
        break;
      default:
        props.setUserLanguage('en')
        break;
    }
  }

  return (
    <div className='LanguageSwitch'>
      <button className='SwitchButton button' 
        onClick={handleSwitch}>
          {props.userLanguage==='en' ? 
          <img src={itFlag} alt='IT'/> : 
          <img src={ukFlag} alt='EN'/>
          } 
          </button>
    </div>
  )
}

export default LanguageSwitch