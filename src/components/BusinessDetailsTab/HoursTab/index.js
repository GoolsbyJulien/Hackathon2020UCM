// import React from 'react';

import Business from '../../../classes/Business';
import homeIcon from '../../../images/homeicon.svg';
import BusinessDetailsTab from '../index';

import './index.css';

export const hoursTabName = 'Hours';
export const hoursTabIcon = homeIcon;

class HoursTab extends BusinessDetailsTab {
  constructor(props) {
    super(props, hoursTabIcon, hoursTabName);
  }

  setDisplay = () => {
    const business = new Business(this.props.id, 'Home Depot');
    return (business.getHoursTab());
  }
}

export default HoursTab;
