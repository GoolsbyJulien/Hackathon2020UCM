// import React from 'react';

import Business from '../../../classes/Business';
import homeIcon from '../../../images/homeicon.svg';
import BusinessDetailsTab from '../index';

import './index.css';

export const homeTabName = 'Home';
export const homeTabIcon = homeIcon;

class HomeTab extends BusinessDetailsTab {
  constructor(props) {
    super(props, homeIcon, homeTabName);
  }

  setDisplay = () => {
    const business = new Business(this.props.id, 'Home Depot');
    return business.getHomeTab();
  }
}

export default HomeTab;
