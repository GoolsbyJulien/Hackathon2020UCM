import React from 'react';

import SearchBar from '../../components/SearchBar';
import history from '../../history';

import './index.css';
import { Link } from 'react-router-dom';

class HelpPage extends React.Component {
  constructor(props) {
    super(props);

  }







  render() {
    return (
      <div class="helpPage">
        <h1 className="helpHeader"> Help page </h1>

        <div className="helpBox">
          <h2> Problem explanation:</h2>
          <p>Covd changes day by day, and sometimes communication between business and consumer can be lost.</p>
        </div>

        <div className="helpBox">
          <h2>How to use:</h2>


        <p> On the <Link to="/">homepage</Link> search for a business and </p>
        </div>

        <div className="helpBox">
          <h2>How to add your business:</h2>
          <p>Covd changes day by day, and sometimes communication between business and consumer can be lost.</p>
        </div>
      </div>
    );
  }
}

export default HelpPage;
