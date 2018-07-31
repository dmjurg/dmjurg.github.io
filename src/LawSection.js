import React from 'react';

class LawSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyVisible: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {

    const differentVisibleState = this.state.bodyVisible !== nextState.bodyVisible;
    const differentText = this.props.bodyText !== nextProps.bodyText;
    const differentSearchText = this.props.searchText !== nextProps.searchText;

    if (differentSearchText && nextProps.searchText.length === 0) {
      nextState.bodyVisible = false;
    }
    
    const differentRegisterMatch = nextProps.registerMatch !== this.props.registerMatch;
    return differentVisibleState || differentText || differentSearchText || differentRegisterMatch;
   }

  render() {
    const {bodyText, searchText} = this.props;

    // don't search for short bits of text
    if (!searchText || searchText.length < 3) {
      return this.renderSection(bodyText);
    }

    const splitText = bodyText.split(searchText);
    const els = [];

    splitText.forEach((text, index) => {
      els.push(<span key={`text-${index}`}>{text}</span>);
      if (index === splitText.length - 1) {
        return;
      }

      // there is a match!
      this.setState({bodyVisible: true});

      const match = <span className="highlight"
                          key={`text-match-${index}`}
                          ref={matchEl => this.props.registerMatch && this.props.registerMatch(matchEl)}>
                      {searchText}
                    </span>;
      els.push(match);
    })

    return this.renderSection(els);
  }

  renderSection(text) {
    return (
      <section>
        <h3 className="law-section-heading" onClick={() => {
          this.setState({bodyVisible: !this.state.bodyVisible})}
        }>
          {this.props.headingText}
        </h3>
        <div className="law-section-body" style={{display: this.state.bodyVisible ? 'block' : 'none'}}>
          {text}
        </div>
      </section>
    );
  }
}

export default LawSection;
