import React from 'react';
import LawSection from './LawSection';
import {
  Link
} from 'react-router-dom'
import {poaaText1} from './poaaText1';
import {poaaText2} from './poaaText2';
import {poaaText3} from './poaaText3';

class POAA extends React.Component {
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
      <div className="poaa-text">
        <h1>Property Owners' Association Act</h1>
        <div className="search-form">
          <input value={searchText} onChange={this.updateSearchText} />
          <button onClick={this.scrollToNextMatch}>Search</button>
          {this.state.currentMatch} of {this.state.matches.length}
        </div>
        <div className="back-button">
          <Link to="/">&lt; Back</Link>
        </div>
        <h2>Article 1. General Provisions</h2>
        {poaaText1.map((section, index) => <LawSection headingText={section.title}
                                             bodyText={section.text}
                                             searchText={searchText}
                                             registerMatch={this.registerMatch}
                                             key={`section-${index}`}
                                           />)}
        <h2>Article 2. Disclosure Requirements; Authorized Fees</h2>
        {poaaText2.map((section, index) => <LawSection headingText={section.title}
                                             bodyText={section.text}
                                             searchText={searchText}
                                             registerMatch={this.registerMatch}
                                             key={`section-${index}`}
                                           />)}
        <h2>Article 3. Operation and Management of Association</h2>
        {poaaText3.map((section, index) => <LawSection headingText={section.title}
                                             bodyText={section.text}
                                             searchText={searchText}
                                             registerMatch={this.registerMatch}
                                             key={`section-${index}`}
                                           />)}
      </div>
    );
  }
}

export default POAA;
