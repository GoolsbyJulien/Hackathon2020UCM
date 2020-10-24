import React from 'react';

import './index.css';

class BusinessDetailsTab extends React.Component {
  constructor(props, tabLogo, tabName) {
    super(props);

    this.tabLogo = tabLogo;
    this.tabName = tabName;
  }

  setDisplay = () => {
    return null;
  }

  render() {
    return (
        <div className={`BusinessDetailsTabs`}>
          {this.props.currTab === this.tabName ? this.setDisplay() : null}
        </div>
    );
  }
}

export default BusinessDetailsTab;
