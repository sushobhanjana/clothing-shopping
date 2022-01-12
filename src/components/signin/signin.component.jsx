import React, { Component } from 'react';

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
      event.PreventDefault();
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
      <div>
          <h1>Sign in</h1>
          <span>I already have an account</span> 
          <form onSubmit={this.handleSubmit}>
              <label>Email</label>
              <input name='email' 
                    type='email' 
                    placeholder='enter your email'
                    onChange={this.handleChange} />

              <label>Password</label>
              <input name='password'
                    type='password' 
                    placeholder='enter your password'
                    onChange={this.handleChange} />

              <input type='submit' value='Submit' />
          </form>
      </div>
    );
  }
}
