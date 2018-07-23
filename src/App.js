import React from 'react';
import Home from './Home';
import POAA from './POAA';
import Condo from './Condo';
import VNCA from './VNCA';
import CICO from './CICO';
import CIO from './CIO';
import CICB from './CICB';
import Contact from './Contact';
import Disclaimer from './Disclaimer';
import './App.css';
import logo from './logo.png';
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
