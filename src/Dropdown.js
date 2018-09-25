import React, { Component } from 'react'

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }

  toggleState = (event) => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    console.log('isOpened', this.state.isOpened);
    const dropdownText = this.state.isOpened ?
      <div>Here is what is shown in dropdown</div> : ''
    return (
      <div onClick={this.toggleState}>
        Its dropdown baby
        {dropdownText}
      </div>
    )
  }
}
