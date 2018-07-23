import React from 'react';

class LawSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bodyVisible: false
    }
  }
  render() {
    return (
      <section>
        <h3 className="law-section-heading" onClick={() => {this.setState({bodyVisible: !this.state.bodyVisible})}}>
          {this.props.headingText}
        </h3>
        <div className="law-section-body" style={{display: this.state.bodyVisible ? 'block' : 'none'}}>
          {this.props.bodyText}
        </div>
      </section>
    );
  }
}

export default LawSection;
