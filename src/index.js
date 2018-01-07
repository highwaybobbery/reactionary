import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

const API_KEY = 'AIzaSyBqJJR04zp0Bt-QrMlsZzoowOSdH5D0r0Q';

// Create new component that produces html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], searchText: 'Cat', searchPostfix: 'Butt', selectedVideo: null };
    this.search = this.search.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
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
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    )
  }

  search(event) {
    event.preventDefault();
    const searchTerm = `${this.state.searchText} ${this.state.searchPostfix}`;
    YTSearch({key: API_KEY, term: searchTerm}, videos => {
      const selectedVideo = videos[0]
      this.setState({videos, selectedVideo})
    });
  }

  onSearchTextChange(searchText) {
    this.setState({searchText});
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }
}

// Render content to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
//ReactDOM.render(<Butt butt="big" />, document.querySelector('.butts'));
