import React from 'react';

import SearchBar from '../../components/SearchBar';
import history from '../../history';

import './index.css';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confPassword: '',
      consumerChecked: false,
      businessChecked: false,
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

    const { username, password, confPassword, businessChecked, consumerChecked } = this.state;

    if (username === '' || password === '' || confPassword === '' ||
      (!businessChecked && !consumerChecked)) alert('Error: All of the fields are required.');
    else if (password !== confPassword) alert('Error: The password and confirm password fields do not match.');
    else {
      if (this.state.businessChecked) history.push('/signup/business');
      else {
        // sign up
        history.push('/');
      }
    }
  }

  selectConsumer = () => {
    this.setState({ consumerChecked: true, businessChecked: false });
  }

  selectBusiness = () => {
    this.setState({ businessChecked: true, consumerChecked: false });
  }

  render() {
    return (
      <div className='SignupPage'>
        <SearchBar value={this.state.username} sendValue={this.updateUsername} placeholder='Username' />
        <SearchBar isPassword={true} value={this.state.password} sendValue={this.updatePassword} placeholder='Password' />
        <SearchBar isPassword={true} value={this.state.confPassword} sendValue={this.updateConfPassword} placeholder='Confirm Password' />
        <div className='SignupPageConBis'>
          <div className='SignupPageRadioContainer'>
            <input onChange={this.selectConsumer} className='SignupPageRadio' id='consumerRadio' type='radio' name='conOrBis' value='consumer' checked={this.state.consumerChecked} />
            <label className='SignupPageLabel' htmlFor='consumerRadio'>I am a consumer</label>
          </div>
          <div className='SignupPageRadioContainer'>
            <input onChange={this.selectBusiness} className='SignupPageRadio' id='businessRadio' type='radio' name='conOrBis' value='business' checked={this.state.businessChecked} />
            <label className='SignupPageLabel' htmlFor='businessRadio'>I am a business</label>
          </div>
        </div>
        <button className="signupButton" onClick={this.signUp}>Sign Up</button>
      </div>
    );
  }
}

export default SignupPage;
