import React from 'react';

import './index.css';

class BusinessDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.id;
  }

  render() {
    return (
      <div className='BusinessDetailsPage'>
        {this.id}
      </div>
    )
  }
}

export default BusinessDetailsPage;
