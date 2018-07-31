import React from 'react';
import LawSection from './LawSection';
import Search from './Search';
import {cicoText} from './cicoText';

class CICO extends React.Component {
  render() {
    return (
      <div className="cico-text">
        <h1>CICO Regulations</h1>
        <Search />
        {cicoText.map(section => <LawSection headingText={section.title}
                                             bodyText={section.text} />)}
      </div>
    );
  }
}

export default CICO;
