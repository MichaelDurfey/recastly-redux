import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var SearchContainer = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { handleSearchInputChange: (term) => dispatch(handleSearchChange(term)) };
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(SearchContainer, mapDispatchToProps)(Search);
