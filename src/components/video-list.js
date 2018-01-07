import React, { Component } from 'react';
import VideoListItem from './video-list-item'

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.videos.length == 0) {
      return <h3>What kind of Butts do you like?</h3>;
    } else {
      const videoItems = this.props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect} />
      });
      return (
        <ul className="col-md-4 list-group">{videoItems}</ul>
      );
    }
  }
}

export default VideoList;
