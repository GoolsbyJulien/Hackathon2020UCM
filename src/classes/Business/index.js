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

  changePage = (e) => {
    e.preventDefault();
    const path = `/${this.id}/view`;
    history.push(path);
  }

  getSearchResult = () => {
    return (
      <div className='SearchResult' key={this.id} onClick={this.changePage}>
        <div className='SearchResultLogo'>{this.logo}</div>
        <div className='SearchResultName'>{this.name}</div>
      </div>
    );
  }

  getHomeTab = () => {
    return (
      <div className={'BusinessDetailsTabHome'}>
        <div className='BusinessDetailsTabHomeFirstRow'>
          <div className='BusinessDetailsTabHomeLogo'>{this.logo}</div>
          <div className='BusinessDetailsTabHomeName'>{this.name}</div>
          <div className='BusinessDetailsTabHomeBookmark'>Bookmark</div>
        </div>
        {/* add more once we're reaching from the database */}
      </div>
    );
  }

  getPicturesTab = () => {
    return (
      <div className='BusinessDetailsTabPicture'>
        This is currently a test
      </div>
    )
  }
}

export default Business;
