import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <div className="search-field">
        <input type="text"></input>
        <input type="submit" value="Search"></input>
      </div>
    );
  }
}

export default Search;
