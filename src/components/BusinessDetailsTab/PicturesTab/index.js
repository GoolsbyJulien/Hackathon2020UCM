// import React from 'react';

import Business from '../../../classes/Business';
import pictureIcon from '../../../images/pictures.png';
import BusinessDetailsTab from '..';

import './index.css';

export const picturesTabName = 'Pictures';
export const picturesTabIcon = pictureIcon;

class PicturesTab extends BusinessDetailsTab {
  constructor(props) {
    super(props, pictureIcon, picturesTabName);
  }

  setDisplay = () => {
    const business = new Business(this.props.id, 'Home Depot');
    return business.getPicturesTab();
  }
}

export default PicturesTab;