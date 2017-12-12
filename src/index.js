import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import Butt from './components/butt'
import SearchBar from './components/search-bar'
import VideoList from './components/video-list'

const API_KEY = 'AIzaSyBqJJR04zp0Bt-QrMlsZzoowOSdH5D0r0Q';

// Create new component that produces html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], searchText: 'Cat', searchPostfix: 'Butt' };
    this.search = this.search.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  render() {
    return (
      <div className="app">
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          searchPostfix={this.state.searchPostfix}
          doSearch={this.search}
        />
        <VideoList videos={this.state.videos} />
        <div className="butts" />
      </div>
    )
  }

  search(event) {
    event.preventDefault();
    const searchTerm = `${this.state.searchText} ${this.state.searchPostfix}`;
    YTSearch({key: API_KEY, term: searchTerm}, videos => {
      this.setState({videos})
    });
  }

  onSearchTextChange(searchText) {
    this.setState({searchText});
  }
}

// Render content to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
//ReactDOM.render(<Butt butt="big" />, document.querySelector('.butts'));
