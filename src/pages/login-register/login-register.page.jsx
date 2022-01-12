import React, { Component } from 'react';

import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

import './login-register.styles.scss'

export default class LoginregisterPage extends Component {
  render() {
    return (
      <div className='sign-in-and-sign-up'>
        <Signin />
        <Signup />
      </div>
    );
  }
}
