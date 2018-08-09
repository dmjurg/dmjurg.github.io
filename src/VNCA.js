import React from 'react';
import LawSection from './LawSection';
import {
  Link
} from 'react-router-dom'
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
import {vncaText12} from './vncaText12';
import {vncaText13} from './vncaText13';
import {vncaText14} from './vncaText14';
import {vncaText15} from './vncaText15';
import {vncaText16} from './vncaText16';
import {vncaText17} from './vncaText17';
import {vncaText171} from './vncaText171';
import {vncaText18} from './vncaText18';

class VNCA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      matches: [],
      currentMatch: 0,
    };

    this.registerMatch = this.registerMatch.bind(this);
  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
      matches: [],
      currentMatch: 0,
    });
  }

  registerMatch(match) {
    if(match) {
      this.state.matches.push(match);
    }

    this.setState({
      matches: this.state.matches,
      currentMatch: 0
    })
  }

  nextMatch = () => {
    const {matches, currentMatch} = this.state;
    const nextMatch = (currentMatch % matches.length) + 1;
    this.setState({
      currentMatch: nextMatch,
    })
    return nextMatch;
  }

  scrollToNextMatch = () => {
    const {matches, currentMatch} = this.state;

    if(matches.length === 0) {
      return;
    }

    const nextMatch = this.nextMatch();
    matches[nextMatch - 1].scrollIntoView();
  }

  render() {
    const {searchText} = this.state;

    return (
      <div className="vnca-text">
        <h1>Virginia Nonstock Corporation Act</h1>
        <div className="search-form">
          <input value={searchText} onChange={this.updateSearchText} />
          <button onClick={this.scrollToNextMatch}>Next</button>
          {this.state.currentMatch} of {this.state.matches.length}
        </div>
        <div className="back-button">
          <Link to="/">Back</Link>
        </div>
        <h2>Article 1. General Provisions</h2>
        {vncaText1.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 2. Fees</h2>
        {vncaText2.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 3. Formation of Corporations</h2>
        {vncaText3.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 4. Purposes and Powers</h2>
        {vncaText4.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 5. Name</h2>
        {vncaText5.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 6. Office and Agent</h2>
        {vncaText6.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 7. Members and Meetings</h2>
        {vncaText7.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 7.1. Member or Director Agreements</h2>
        {vncaText71.map((section, index) => <LawSection headingText={section.title}
                                               bodyText={section.text}
                                               searchText={searchText}
                                               registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                             />)}
        <h2>Article 8. Directors and Officers</h2>
        {vncaText8.map((section, index) => <LawSection headingText={section.title}
                                               bodyText={section.text}
                                               searchText={searchText}
                                               registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                             />)}
        <h2>Article 9. Indemnification</h2>
        {vncaText9.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 10. Amendment of Articles of Incorporation and Bylaws</h2>
        {vncaText10.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 11. Merger</h2>
        {vncaText11.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 11.1. Domestication</h2>
        {vncaText111.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 12. Sale of Assets</h2>
        {vncaText12.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 13. Dissolution</h2>
        {vncaText13.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 14. Foreign Corporations</h2>
        {vncaText14.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 15. Records and Reports.</h2>
        {vncaText15.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 16. Transition Provisions</h2>
        {vncaText16.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 17. Conversion to a Stock Corporation</h2>
        {vncaText17.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 17.1. Conversion to a Limited Liability Company</h2>
        {vncaText171.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
        <h2>Article 18. Miscellaneous Provisions</h2>
        {vncaText18.map((section, index) => <LawSection headingText={section.title}
                                              bodyText={section.text}
                                              searchText={searchText}
                                              registerMatch={this.registerMatch}
                                              key={`section-${index}`}
                                            />)}
      </div>
    );
  }
}

export default VNCA;
