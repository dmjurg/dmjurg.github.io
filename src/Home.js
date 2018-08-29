import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <ul className="act-links">
          <li>
            <Link to="/poaa">Property Owners' Association Act</Link>
          </li>
          <li>
            <Link to="/condo">Condominium Act</Link>
          </li>
          <li>
            <Link to="/vnca">Virginia Nonstock Corporation Act</Link>
          </li>
          <li>
            <Link to="/cico">CICO Regulations</Link>
          </li>
          <li>
            <Link to="/cicb">CICB</Link>
          </li>
          <li>
            <Link to="/cio">CIC Ombudsman</Link>
          </li>
        </ul>
        <footer>
          <div className="contact-button">
            <p><Link to="/contact">Contact Us</Link></p>
          </div>
          <p className="disclaimer-link"><Link to="/disclaimer">Disclaimer</Link></p>
        </footer>
      </div>
    );
  }
}

export default Home;
