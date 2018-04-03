import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return function(dispatch) {
    searchYouTube({
      key: YOUTUBE_API_KEY, 
      query: q,
    }, (err, res) => {
      return dispatch(
        changeVideo({type: 'CHANGE_VIDEO', payload: res}),
        changeVideoList({type: 'CHANGE_VIDEO_LIST', payload: res})
      );
    });
  };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
