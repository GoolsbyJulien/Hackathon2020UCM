import React from 'react';

import './index.css';

class BusinessDetailsTabButton extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.setCurrTab(this.props.name);
  }

  render() {
    return (
      <div className='BusinessDetailsTabButton'>
        <img className='BusinessDetailsTabButtonImg' src={this.props.logo} alt={this.props.name} />
      </div>
    );
  }
}

export default BusinessDetailsTabButton;
