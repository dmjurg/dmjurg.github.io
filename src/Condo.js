import React from 'react';
import LawSection from './LawSection';
import Search from './Search';
import {condoText1} from './condoText1';
import {condoText2} from './condoText2';
import {condoText3} from './condoText3';
import {condoText4} from './condoText4';

class Condo extends React.Component {
  render() {
    return (
      <div className="condo-text">
        <h1>Condominium Act</h1>
        <Search />
        <h2>Article 1. General Provisions</h2>
        {condoText1.map(section => <LawSection headingText={section.title}
                                               bodyText={section.text} />)}
        <h2>Article 2. Creation, Alteration and Termination of Condominiums</h2>
        {condoText2.map(section => <LawSection headingText={section.title}
                                               bodyText={section.text} />)}
        <h2>Article 3. Management of Condominium</h2>
        {condoText3.map(section => <LawSection headingText={section.title}
                                               bodyText={section.text} />)}
        <h2>Article 4. Administration of Chapter; Sale, Etc., of Condominium Units</h2>
        {condoText4.map(section => <LawSection headingText={section.title}
                                               bodyText={section.text} />)}
      </div>
    );
  }
}

export default Condo;
