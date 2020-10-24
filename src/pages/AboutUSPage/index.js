import React from 'react';

import SearchBar from '../../components/SearchBar';
import Title from '../../components/Title';
import Business from '../../classes/Business';

import './index.css';
import Person from '../../classes/Person';

class AboutUSPage extends React.Component {
  constructor(props) {
    super(props);

  }
  build = () => {
    // do stuff based off searchValue
    const results = [new Person('Julien Goolsby', 'Home Depot'), new Person('Nate', 'Walmart')];
    return results.map(person => person.build());
  }
 
  render() {
    return (
      <div className='AboutUsPage'>
          <h1 className ="aboutUsHeader"> About Us </h1>
          <p className = "aboutUsParagraph" >We are students from the University of Central Missouri</p>
          <center>{this.build()}</center>
      </div>
    );
  }
}

export default AboutUSPage;
