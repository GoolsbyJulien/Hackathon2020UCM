import React from 'react';

import history from '../../history';

import logo from '../../images/logo.png'


import './index.css';


/**
 * Props:
 * 
 * name - String; name of link
 * representative - anything; what's representing the string; defaults to name
 * location - String; location link will take user
 * clickable - boolean; whether the link can be clicked or not; true by default
 */
class HeaderLink extends React.Component {
  changePath = (e) => {
    e.preventDefault();
    history.push(this.props.location);
  }

  render() {
    return (
     <div className="logo">
        <img className="logoImage" src={logo}>
      
       </img>
      </div>
    );
  }
}

export default HeaderLink;
