import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'

import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch'
import HomeButton from './components/HomeButton/HomeButton'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ContactMe from './components/ContactMe/ContactMe'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import AboutThisPage from './components/AboutThisPage/AboutThisPage'
import WorkInProgress from './components/WorkInProgress/WorkInProgress'


function App() {
  const [userLanguage, setUserLanguage] = useState('en')

  return (
    <div className="App">
      <HomeButton/>
    
      <BrowserRouter>
        <div className="header-wrapper" id="home">
          <Hero language={userLanguage}/>
        </div>
    
        <div className="main-content">
            <Switch>
              {/* <Route path='/About'><About language={userLanguage}/></Route> */}
              <Route path='/Resume'><Resume language={userLanguage}/></Route>
              <Route path='/Services'><Services language={userLanguage}/></Route>
              {/* <Route path='/Projects'><Projects language={userLanguage}/></Route> */}
              <Route path='/Projects'><WorkInProgress/></Route>
              <Route path='/AboutThisPage'><AboutThisPage language={userLanguage}/></Route>
              <Route path='/ContactMe'><ContactMe language={userLanguage}/></Route>
              <Route path='/'><About language={userLanguage}/></Route>
            </Switch>
        </div>
      </BrowserRouter>

      <LanguageSwitch 
        userLanguage={userLanguage} 
        setUserLanguage={setUserLanguage} />
    </div>
  );
}

export default App;
