
import defaultLogo from '../../images/defaultlogo.png';

import React from 'react';

import defaultLogos from '../../images/defaultlogo.png';
import history from '../../history';

import './index.css';

class Person {
  constructor(name, aboutMe) {
    this.aboutMe = aboutMe;
    this.name = name;
    this.logo = <img className='SearchResultLogoImg' src={defaultLogo} alt='Logo' />;
  }

  setLogo = (logo) => {
    this.logo = logo;
  }

  

  build = () => {

    return (
      <div class="aboutUsCard">    
      <img className="personImage" src={defaultLogos}>
      
       </img>
          <h1 className = "name"> {this.name} </h1>
      </div>
    );
  }
}

export default Person;
