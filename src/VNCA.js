import React from 'react';
import LawSection from './LawSection';
import Search from './Search';
import {vncaText1} from './vncaText1';
import {vncaText2} from './vncaText2';
import {vncaText3} from './vncaText3';
import {vncaText4} from './vncaText4';
import {vncaText5} from './vncaText5';
import {vncaText6} from './vncaText6';
import {vncaText7} from './vncaText7';
import {vncaText71} from './vncaText71';
import {vncaText8} from './vncaText8';
import {vncaText9} from './vncaText9';
import {vncaText10} from './vncaText10';
import {vncaText11} from './vncaText11';
import {vncaText111} from './vncaText111';

class VNCA extends React.Component {
  render() {
    return (
      <div class="vnca-text">
        <h1>Virginia Nonstock Corporation Act</h1>
        <Search />
        <h2>Article 1. General Provisions</h2>
        {vncaText1.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 2. Fees</h2>
        {vncaText2.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 3. Formation of Corporations</h2>
        {vncaText3.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 4. Purposes and Powers</h2>
        {vncaText4.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 5. Name</h2>
        {vncaText5.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 6. Office and Agent</h2>
        {vncaText6.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 7. Members and Meetings</h2>
        {vncaText7.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 7.1. Member or Director Agreements</h2>
        {vncaText71.map(section => <LawSection headingText={section.title}
                                               bodyText={section.text} />)}
        <h2>Article 8. Directors and Officers</h2>
        {vncaText8.map(section => <LawSection headingText={section.title}
                                               bodyText={section.text} />)}
        <h2>Article 9. Indemnification</h2>
        {vncaText9.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 10. Amendment of Articles of Incorporation and Bylaws</h2>
        {vncaText10.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 11. Merger</h2>
        {vncaText11.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
        <h2>Article 11.1. Domestication</h2>
        {vncaText111.map(section => <LawSection headingText={section.title}
                                              bodyText={section.text} />)}
      </div>
    );
  }
}

export default VNCA;
