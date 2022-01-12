import React, { Component } from 'react';

import sectionsdata from './directory-data';
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

export default class Directory extends Component {
  constructor(){
    super()

    this.state = {
        sections: sectionsdata
    }
  }
    

  render() { 
    return (
        <div className='directory-menu'>
            {
                this.state.sections.map(({id,...othermenuprops}) => (
                    <MenuItem key={id} {...othermenuprops} />
                ))
            }
        </div>
    );
  }
}

