import React from 'react';
import LawSection from './LawSection';
import Search from './Search';
import {cicbText} from './cicbText';

class CICB extends React.Component {
  render() {
    return (
      <div className="cicb-text">
        <h1>Common Interest Community Management Information Fund</h1>
        <Search />
        {cicbText.map(section => <LawSection headingText={section.title}
                                             bodyText={section.text} />)}
      </div>
    );
  }
}

export default CICB;
