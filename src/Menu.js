import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/dropdown'>Dropdown</Link>
        <Link to='/error'>Error</Link>
      </div>
    )
  }
}
