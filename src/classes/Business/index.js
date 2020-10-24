import React from 'react';

import defaultLogo from '../../images/defaultlogo.png';
import history from '../../history';

import './index.css';

class Business {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.logo = <img className='SearchResultLogoImg' src={defaultLogo} alt='Logo' />;
  }

  setLogo = (logo) => {
    this.logo = logo;
  }

  // changePage = (e) => {
  //   e.preventDefault();
  //   history.push(`/${this.id}/view`);
  // }

  getSearchResult = () => {
    return (
      <div className='SearchResult' key={this.id} onClick={this.changePage}>
        <div className='SearchResultLogo'>{this.logo}</div>
        <div className='SearchResultName'>{this.name}</div>
      </div>
    );
  }
}

export default Business;
