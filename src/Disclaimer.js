import React from 'react';

class Disclaimer extends React.Component {
  render() {
    return (
      <div className="disclaimer-text">
        <h1>Disclaimer</h1>
        <p>Attorney Advertising. This mobile application and its content contains a selection of statutes that may or may not be relevant to community association issues in Virginia. It is designed for general information only and not intended to reflect an exhaustive compilation of every statute that may apply to any given association issue. Moreover, the Virginia General Assembly routinely modifies, amends, or replaces existing statutes from time-to-time. While we intend to keep the content of this application up to date, it is encouraged that you also refer to the current version of the Code of Virginia that is located online at https://law.lis.virginia.gov/vacode. The information presented on this application should not be construed to be formal legal advice nor the formation of an attorney-client relationship. If you have any questions regarding the content of this application, please consider consulting with your attorney or contacting our office.</p>
      </div>
    );
  }
}

export default Disclaimer;
