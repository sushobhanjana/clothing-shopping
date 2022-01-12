import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
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
  handleSubmit = async event => {
      event.preventDefault();
      const {email,password} = this.state;
      try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'', password:''})
      } catch(error){
          console.log('error with signin',error.message);
      }
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
                    value={email}
                    label='Email' 
                    handleChange={this.handleChange} />

              <FormInput name='password'
                    type='password'
                    value={password}
                    label='Password'
                    handleChange={this.handleChange} />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in wih Google
                    </CustomButton>
                </div>
          </form>
      </div>
    );
  }
}
