import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    console.log(this.props.items);
    return (
      <div>
        {this.props.items.map((item, index) => 
          <a href={item.link} key={index}>{item.label}</a>
        )}
      </div>
    )
  }
}
