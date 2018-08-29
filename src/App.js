import React from 'react';
import Home from './Home';
import POAA from './sections/POAA';
import Condo from './sections/Condo';
import VNCA from './sections/VNCA';
import CICO from './sections/CICO';
import CIO from './sections/CIO';
import CICB from './sections/CICB';
import Contact from './Contact';
import Disclaimer from './Disclaimer';
import './App.css';
import logo from './images/logo.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <header className="app-header">
        <Link to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
      </header>

      <Route exact path="/" component={Home}/>

      <Route path="/poaa" component={POAA}/>
      <Route path="/condo" component={Condo}/>
      <Route path="/vnca" component={VNCA}/>
      <Route path="/cico" component={CICO}/>
      <Route path="/cio" component={CIO}/>
      <Route path="/cicb" component={CICB}/>

      <Route path="/contact" component={Contact}/>
      <Route path="/disclaimer" component={Disclaimer}/>
    </div>
  </Router>
)

export default App;
