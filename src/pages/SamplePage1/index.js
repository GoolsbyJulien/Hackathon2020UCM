import React from 'react';
import './index.css';

import PageButton from '../../components/PageButton';

class SamplePage1 extends React.Component {
  render() {
    return (
      <div className="SamplePage1">
        Sample Page 1
        <PageButton page='/otherpage' text='Go to the Other Page' />
      </div>
    );
  }
}

export default SamplePage1;
