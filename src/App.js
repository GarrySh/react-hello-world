import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';
class App extends Component {
  state = {
    inputValue: '',
    searchValue: '',
  };

  addTrack = (event) => {
    this.props.onAddTrack(this.state.inputValue);
  };

  findTrack = (event) => {
    console.log('find value', this.state.searchValue);
    this.props.onFindTrack(this.state.searchValue);
  }

  handleInputValue = (event) => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  }

  handleSearchValue = (event) => {
    console.log(this.props);
    const { value } = event.target;
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputValue} />
          <button onClick={this.addTrack}>Add track</button>
        </div>
        <div>
          <input type="text" value={this.state.searchValue} onChange={this.handleSearchValue} />
          <button onClick={this.findTrack}>Find track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>
        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track.name}</li>
          )}
        </ul> 
      </div>
    )
  }
}

export default connect(
  state => ({
    tracks: state.tracks,
    // tracks: state.tracks.filter(track => track.name.includes(state.searchValue)),
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      const payload = {
        id: Date.now().toString(),
        name: trackName,
      };
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (name) => {
      dispatch({ type: 'FIND_TRACK', payload: name })
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(App);
