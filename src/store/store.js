import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import videoList from '../data/exampleVideoData.js';

const initialState = {
  videoList: videoList,
  currentVideo: videoList[0],
};
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;

