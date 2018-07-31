import React from 'react';
import LawSection from './LawSection';
import Search from './Search';
import {cioText} from './cioText';

class CIO extends React.Component {
  render() {
    return (
      <div class="cio-text">
        <h1>Common Interest Communities</h1>
        <Search />
        {cioText.map(section => <LawSection headingText={section.title}
                                             bodyText={section.text} />)}
      </div>
    );
  }
}

export default CIO;
