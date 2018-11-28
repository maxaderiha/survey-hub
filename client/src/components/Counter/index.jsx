import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementCounter } from 'containers/App/actions';

class Counter extends Component {
  render() {
    return (
      <div onClick={this.props.incrementCounter}>
        {`Press button to increment counter: ${this.props.currentValue}`}
      </div>
      // <a href="/auth/google">Sign in with Google</a>
    );
  }
}

export default connect(
  (state) => ({
    currentValue: state.getIn(['app', 'currentValue']),
  }),
  {
    incrementCounter,
  }
)(Counter);
