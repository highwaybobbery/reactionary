import React, { Component } from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);
    this.video = props.video;
    this.title = this.video.snippet.title;
    this.description = this.video.snippet.description;
    this.imageUrl = this.video.snippet.thumbnails.default.url;
    this.onVideoSelect = props.onVideoSelect;
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.onVideoClick}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={this.imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {this.title}
            </div>
          </div>
        </div>
      </li>
    )
  }

  onVideoClick(e) {
    this.onVideoSelect(this.video)
  }
}

export default VideoListItem;

