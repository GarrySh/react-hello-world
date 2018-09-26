import React, { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    console.log(this.props.tracks);
    return (
      <div>
        <input type="text" />
        <button>Add track</button>
        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ul> 
      </div>
    )
  }
}

export default connect(
  state => ({
    tracks: state.tracks,
  }),
  dispatch => ({})
)(App);
