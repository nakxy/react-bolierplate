import { connect } from 'react-redux';
import React, { Component } from 'react';
import App from '../components/App';
import * as AppActions from '../actions/app';


function mapStateToProps(state, props) {
  return {
    app:state.app,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...AppActions,
    dispatch
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);