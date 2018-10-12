import React, { Component } from 'react';
import { connect } from 'react-redux';

class Track extends Component {  
  render() {
    // console.log(this.props.track.name)
    return (
      <div>
        Track
        {this.props.track.name}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps in tracks', ownProps, 'state', state);
  return {
    track: state.tracks.find(track => track.id === Number(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps)(Track);
