import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = (state) => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return { handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)) };
  //take all actions and pass them to all the reducers in applications
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect(VideoListContainer, mapDispatchToProps)(VideoList);
