import React, { Component } from 'react';
import './app.css';
import RegistrationForm from './RegistrationForm';

const menu = [
  {
    link: '/articles',
    label: 'Articles',
  },
  {
    link: '/contacts',
    label: 'Contacts',
  },
  {
    link: '/posts',
    label: 'Posts',
  }
];


export default class App extends Component {
  render() {
    return (
      <div>
        <RegistrationForm />
      </div>
    )
  }
}
