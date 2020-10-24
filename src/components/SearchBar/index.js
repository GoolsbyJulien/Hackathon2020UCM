import React from 'react';

import './index.css';

/**
 * Props:
 * value: holds the value of the search bar
 * sendValue: sends the value to the parent
 * placeholder: sets placeholder attribute of text input
 * isPassword: whether the input is a password or not; defaults to false
 */
class SearchBar extends React.Component {
  onChange = (e) => {
    e.preventDefault();
    this.props.sendValue(e.target.value);
  }

  render() {
    return (
      <div className={`SearchBar SearchBar${this.props.placeholder.replace(' ', '')}`}>
        <input
          type={this.props.isPassword ? 'password' : 'text'}
          className='SearchBarInput'
          value={this.props.value}
          onChange={this.onChange}
          placeholder={this.props.placeholder || ''}
        />
      </div>
    );
  }
}

export default SearchBar;
