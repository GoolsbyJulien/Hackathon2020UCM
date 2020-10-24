import React from 'react';

import HeaderLink from '../HeaderLink';

import './index.css';

/**
 * Props:
 * Based off of signed in and such
 */
class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <HeaderLink name='Logo' location='/' />
        <HeaderLink name='Home' location='/' />
        <HeaderLink name='Login' location='/login' />
        <HeaderLink name='Sign up' location='/signup' />
        <HeaderLink name='Settings' location='/settings' />
        <HeaderLink name='Help' location='/help' />
        <HeaderLink name='About us' location='/aboutus' />
      </div>
    );
  }
}

export default Header;
