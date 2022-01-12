import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth,createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss';

export default class Signup extends Component {

  constructor(){
    super()

    this.state = {
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }
  handleSubmit = async event => {
      event.preventDefault();

      const {displayName,email,password,confirmPassword} = this.state;

      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }

      try{
        const { user } = await auth.createUserWithEmailAndPassword(email,password);

        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

      }catch(error){
        console.log(error.message);
      }
  }
  
  handleChange = event =>{
      const {name,value} = event.target;
      this.setState({[name]:value});
  }

  render() {
    const {displayName,email,password,confirmPassword} = this.state;
    return (
      <div className='sign-up'>
          <h1>I do not have an account</h1>
          <span>Sign up with fill the form</span> 
          <form onSubmit={this.handleSubmit}>
              <FormInput  
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={this.handleChange}
                    label='Full Name'
                    requied 
                     />

              <FormInput  
                    type='email'
                    name='email'
                    value={email}
                    handleChange={this.handleChange} 
                    label='Email'
                    requied 
                    />

              <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={this.handleChange} 
                    label='Password'
                    requied
                    />

              <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={this.handleChange} 
                    label='Confirm Password'
                    requied
                    />

                <div className='buttons'>
                    <CustomButton type='submit'>Sign up</CustomButton>
                </div>
          </form>
      </div>
    );
  }
}

