import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import ContactPage from './pages/contact/contact.page';
import LoginregisterPage from './pages/login-register/login-register.page';

import { auth } from './firebase/firebase.utils';
import './App.css'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/login' component={LoginregisterPage} />
        </Switch>
      </div>
    )
  }
}

