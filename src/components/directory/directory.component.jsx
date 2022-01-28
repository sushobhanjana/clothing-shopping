import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import sectionsdata from '../../redux/directory/directory-data';
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = ({sections}) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({id,...othermenuprops}) => (
                    <MenuItem key={id} {...othermenuprops} />
                ))
            }
        </div>
    );
}

const mapStateToProps =createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);