import React from 'react';

import './index.css';

/**
 * Props:
 * value: holds the value of the search bar
 * sendValue: sends the value to the parent
 */
class SearchBar extends React.Component {
  onChange = (e) => {
    e.preventDefault();
    this.props.sendValue(e.target.value);
  }

  render() {
    return (
      <div className='SearchBar'>
        <input type='text' className='SearchBarInput' value={this.props.value} onChange={this.onChange} />
      </div>
    );
  }
}

export default SearchBar;
