import React from 'react';
import LawSection from '../LawSection';
import {
  Link
} from 'react-router-dom'
import {condoText1} from '../text/condoText1';
import {condoText2} from '../text/condoText2';
import {condoText3} from '../text/condoText3';
import {condoText4} from '../text/condoText4';

class Condo extends React.Component {
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
      <div className="condo-text">
        <h1>Condominium Act</h1>
        <div className="search-form">
          <input value={searchText} onChange={this.updateSearchText} />
          <button onClick={this.scrollToNextMatch}>Next</button>
          {this.state.currentMatch} of {this.state.matches.length}
        </div>
        <div className="back-button">
          <Link to="/">Back</Link>
        </div>
        <h2>Article 1. General Provisions</h2>
        {condoText1.map((section, index) => <LawSection headingText={section.title}
                                               bodyText={section.text}
                                               searchText={searchText}
                                               registerMatch={this.registerMatch}
                                               key={`section-${index}`}
                                             />)}
        <h2>Article 2. Creation, Alteration and Termination of Condominiums</h2>
        {condoText2.map((section, index) => <LawSection headingText={section.title}
                                               bodyText={section.text}
                                               searchText={searchText}
                                               registerMatch={this.registerMatch}
                                               key={`section-${index}`}
                                             />)}
        <h2>Article 3. Management of Condominium</h2>
        {condoText3.map((section, index) => <LawSection headingText={section.title}
                                               bodyText={section.text}
                                               searchText={searchText}
                                               registerMatch={this.registerMatch}
                                               key={`section-${index}`}
                                             />)}
        <h2>Article 4. Administration of Chapter; Sale, Etc., of Condominium Units</h2>
        {condoText4.map((section, index) => <LawSection headingText={section.title}
                                               bodyText={section.text}
                                               searchText={searchText}
                                               registerMatch={this.registerMatch}
                                               key={`section-${index}`}
                                             />)}
      </div>
    );
  }
}

export default Condo;
