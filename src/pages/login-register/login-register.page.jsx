import React, { Component } from 'react';

import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

import './login-register.styles.scss'

export default class LoginregisterPage extends Component {
  render() {
    return (
      <div> 
        <h1>LoginregisterPage</h1> 
        <Signin />
        <Signup />
      </div>
    );
  }
}
