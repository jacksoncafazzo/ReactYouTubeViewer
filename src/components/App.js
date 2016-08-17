import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Jackson from './Jackson';
import _ from 'lodash';

const API_KEY = 'AIzaSyCxj9IPD23Wsa9XRlx5z3z_qGkefRSDy1Q';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //this.setState({ videos: videos })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
    return (
      <div className='container'>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo }) }
          videos={this.state.videos}
        />
        <Jackson />
      </div>
    );
  }
}
