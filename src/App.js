import React from 'react';
import logo from './logo.svg';
import {Route,BrowserRouter as Router,Link} from 'react-router-dom'
import './App.css';
import TVcomp from './Components/TvComp';
import Mobile from './Components/MobileComp';
import Speaker from './Components/SpeakerComp';
import AcComp from './Components/AcComp';
import HomeComponent from './Components/HomeComponent';
import ContentComponent from './Components/ContentComponent'

function App() {
  return (
    <div className="App">
    
    <Router>
      <Route exact path='/' component={HomeComponent}></Route>
      <Route exact path='/Content' component={ContentComponent}/>
      <Route exact path='/Tv' component={TVcomp}></Route>
      <Route exact path='/Mobile' component={Mobile}></Route>
      <Route exact path ="/Ac" component={AcComp}></Route>
      <Route exact path ="/Speaker" component={Speaker}></Route>
      
      
    </Router>
    
      
    </div>
  );
}

export default App;
