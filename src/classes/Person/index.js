
import julienPicture from '../../images/julien.JPG';

import React from 'react';

import defaultLogos from '../../images/defaultlogo.png';
import history from '../../history';

import './index.css';

class Person {
  constructor(name, aboutMe, picture) {
    this.aboutMe = aboutMe;
    this.name = name;
    this.picture = picture;

    
  }


  

  build = () => {

    return (
      <div class="aboutUsCard">    
      <img className="personImage" src={this.picture}>
      
       </img>
          <h1 className = "name"> {this.name} </h1>

    <p className="aboutme"> {this.aboutMe}</p>
      </div>
    );
  }
}

export default Person;
