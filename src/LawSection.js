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
    const differentRegisterMatch = nextProps.registerMatch !== this.props.registerMatch;

    if (differentSearchText && nextProps.searchText.length === 0) {
      nextState.bodyVisible = false;
    }

    return differentVisibleState || differentText || differentSearchText || differentRegisterMatch;
  }

  render() {
    const {bodyText, searchText} = this.props;

    // don't search for short bits of text
    if (!searchText || searchText.length < 3) {
      return this.renderSection(bodyText.map((paragraph, i) => <p key={i}>{paragraph}</p>));
    }

    const els = [];
    bodyText.forEach((paragraphText, paragraphIndex) => {
      let regExp = new RegExp(`(${searchText})`, "i");
      const splitText = paragraphText.split(regExp);
      const innerEls = [];

      splitText.forEach((text, innerTextIndex) => {
        if (text.match(regExp)) {
          const match = <span className="highlight"
                              key={`text-match-${innerTextIndex}`}
                              ref={matchEl => this.props.registerMatch && this.props.registerMatch(matchEl)}>
                      {text}
                    </span>;
          innerEls.push(match);
        } else {
          innerEls.push(<span key={`text-${innerTextIndex}`}>{text}</span>);
        }

        if (innerTextIndex === splitText.length - 1) {
          return;
        }

        // there is at least one match!
        this.setState({bodyVisible: true});
      });

      els.push(<p key={paragraphIndex}>{innerEls}</p>);
    });

    return this.renderSection(els);
  }

  renderSection(text) {
    return (
      <section>
        <h3 className="law-section-heading" onClick={() => {
          this.setState({bodyVisible: !this.state.bodyVisible})
        }
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
