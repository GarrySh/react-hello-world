import React, { Component } from 'react'

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submited')
  }

  handleEmailChange = (event) => {
    // console.log(event.target.value);
    this.setState({ email: event.target.value });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='container'>
        <input
          type='text'
          placeholder='E-mail'
          value={this.state.email}
          onChange={this.handleEmailChange}
        /> 
        <button>Save</button>
      </form>
    )
  }
}
