import React from 'react';

import SearchBar from '../../components/SearchBar';
import history from '../../history';

import './index.css';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      Description: '',
      CovidRules: '',
      other: '',
      hours: '',

    };
  }

  updateUsername = (username) => {
    this.setState({ username });
  }

  updatePassword = (password) => {
    this.setState({ password });
  }

  updateConfPassword = (confPassword) => {
    this.setState({ confPassword });
  }

  signUp = (e) => {
    e.preventDefault();

    // sign up
    history.push('/');
  }





  render() {
    return (
      <div className='SignupPage'>
        <h1 className="businessHeader">Business Signup page </h1>
        <SearchBar value={this.state.username} sendValue={this.updateUsername} placeholder='Name ' />

        <SearchBar value={this.state.username} sendValue={this.updateUsername} placeholder='Description' />
        <SearchBar isPassword={false} value={this.state.password} sendValue={this.updatePassword} placeholder='Covid Rules' />
        <SearchBar isPassword={false} value={this.state.confPassword} sendValue={this.updateConfPassword} placeholder='Hours' />
        <SearchBar isPassword={false} value={this.state.confPassword} sendValue={this.updateConfPassword} placeholder='Early bird hours' />
        <SearchBar isPassword={false} value={this.state.confPassword} sendValue={this.updateConfPassword} placeholder='Other' />

        <button className="signupButton" onClick={this.signUp}>Sign Up</button>
      </div>
    );
  }
}

export default SignupPage;
