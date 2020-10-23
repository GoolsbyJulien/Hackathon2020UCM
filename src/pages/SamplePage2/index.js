import React from 'react';
import './index.css';

import SampleComponent1 from '../../components/SampleComponent1';
import SampleComponent2 from '../../components/SampleComponent2';
import PageButton from '../../components/PageButton';

class SamplePage2 extends React.Component {
  render() {
    return (
      <div className="SamplePage2">
        Sample Page 2
        <SampleComponent1 />
        <SampleComponent2 />
        <PageButton />
      </div>
    );
  }
}

export default SamplePage2;
