import React, { Component } from 'react';
//import './search-bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <form className='search-bar' onSubmit={this.props.doSearch}>
        <input
          onChange={this.onInputChange}
          value={this.props.searchText}
        />
        <span>&nbsp;{this.props.searchPostfix}&nbsp;</span>
        <input type="submit" value="Getz me dem!" />
      </form>
    );
  }

  onInputChange(event) {
    this.props.onSearchTextChange(event.target.value);
  }
}

export default SearchBar;
