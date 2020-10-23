import React from 'react';
import './index.css';

import history from '../../history';

class PageButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: props.page || '/',
      text: props.text || 'Home',
    };
  }

  changePage = (e) => {
    e.preventDefault();
    history.push(this.state.page);
  }

  render() {
    return (
      <div className="PageButton">
        <button className='PageButton-button' onClick={this.changePage}>{this.state.text}</button>
      </div>
    );
  }
}

export default PageButton;
