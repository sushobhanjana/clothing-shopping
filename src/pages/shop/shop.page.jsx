import React, { Component } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import './shop.styles.scss';

export default class ShopPage extends Component {

  constructor(){
      super();
      this.state = {
          collections:SHOP_DATA
      }
  } 

  render() {
    const {collections}  = this.state;
    return (
      collections.map(({id,...othercollectionprops}) =>(
        <CollectionPreview key={id} {...othercollectionprops}/>
      ))
    );
  }
}

