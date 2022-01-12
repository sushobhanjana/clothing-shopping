import React, { Component } from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
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
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in wih Google
                    </CustomButton>
                </div>
          </form>
      </div>
    );
  }
}
