import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = (state) => {
  return {
    video: state.video
  };
};

// Anything returned from this function will end up as props on the videoplayerContainer container

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

// Promote video list from a component to a container - it needs to know abotu this new dispatch method, selectBook. 
// Make it available as a prop.
export default connect(VideoPlayerContainer)(VideoPlayer);
