import React from 'react';
import LawSection from './LawSection';
import Search from './Search';
import {poaaText} from './poaaText';

class POAA extends React.Component {

  render() {
    return (
      <div className="poaa-text">
        <h1>Property Owners' Association Act</h1>
        <Search />
        {poaaText.map(section => <LawSection headingText={section.title}
                                             bodyText={section.text} />)}
      </div>
    );
  }
}

export default POAA;
