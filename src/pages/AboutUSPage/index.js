import React from 'react';

import SearchBar from '../../components/SearchBar';
import Title from '../../components/Title';
import Business from '../../classes/Business';

import './index.css';
import Person from '../../classes/Person';
import boPicture from '../../images/bo.JPG';

import jaredPicture from '../../images/jared.png'
import jeremiahPicture from '../../images/jeremiah.jpg'


import julienPicture from '../../images/julien.JPG';
class AboutUSPage extends React.Component {
  constructor(props) {
    super(props);

  }
  build = () => {
    // do stuff based off searchValue
    const results = [new Person('Julien Goolsby', 'I am a freshman studying Computer Science. During high school I was an intern at Cerner through the north land caps program  ', julienPicture), 
    new Person('Bo Varvil', 'Walmart', boPicture),
    new Person('Jared C', 'Walmart', jaredPicture),
    new Person('Jeremiah C', 'Walmart', jeremiahPicture),
    new Person('Nate', 'Walmart', jeremiahPicture)


  ];

    return results.map(person => person.build());
  }

  render() {
    return (
      <div className='aboutUSPage'>
        <h1 className="aboutUsHeader"> About Us </h1>
        <p className="aboutUsParagraph" >We are students from the University of Central Missouri</p>
        <center>{this.build()}</center>
      </div>
    );
  }
}

export default AboutUSPage;
