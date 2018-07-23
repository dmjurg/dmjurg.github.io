import React from 'react';
import phone from './phone-image.png';
import email from './email-image.png';
import map from './map-image.png';
import website from './website-image.png';

class Contact extends React.Component {
  render() {
    return (
      <ul className="contact-items">
        <li className="phone-number item">
          <img src={phone} className="phone-icon" alt="phone icon" />
          <span>(555) 555-5555</span>
        </li>
        <li className="email item">
          <img src={email} className="email-icon" alt="email icon" />
          <span>test@email.com</span>
        </li>
        <li className="address item">
          <img src={map} className="map-icon" alt="map icon" />
          <span>123 Test Street <br/>Test, CA 12345</span>
        </li>
        <li className="website item">
          <img src={website} className="website-icon" alt="website icon" />
          <span>www.website.com</span>
        </li>
      </ul>
    );
  }
}

export default Contact;
