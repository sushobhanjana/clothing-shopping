import React, { Component } from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './signin.styles.scss';

export default class Signin extends Component {
  constructor(){
      super()

      this.state = {
          email:'',
          password:''
      }
  }
  handleSubmit = event => {
      event.preventDefault();
      this.setState({
          email:'',
          password:''
      })
  }
  
  handleChange = event =>{
      const {name,value} = event.target;
      this.setState({[name]:value});
  }
  render() {
    const {email,password} = this.state;
    return (
      <div className='sign-in'>
          <h1>I already have an account</h1>
          <span>Sign in with email and password</span> 
          <form onSubmit={this.handleSubmit}>
              <FormInput name='email' 
                    type='email'
                    value={this.state.email}
                    label='Email' 
                    handleChange={this.handleChange} />

              <FormInput name='password'
                    type='password'
                    value={this.state.password}
                    label='Password'
                    handleChange={this.handleChange} />

              <CustomButton type='submit'>Sign in</CustomButton>
<<<<<<< HEAD
              <CustomButton onClick={signInWithGoogle}>Sign in wih Google</CustomButton>
=======
              <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
>>>>>>> ce05393da2d28041bb5a1620e29f98be52620cbf
          </form>
      </div>
    );
  }
}
