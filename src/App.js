import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import ContactPage from './pages/contact/contact.page';
import LoginregisterPage from './pages/login-register/login-register.page';

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
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

