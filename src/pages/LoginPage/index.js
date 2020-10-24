import React from 'react';

import SearchBar from '../../components/SearchBar';
import history from '../../history';

import './index.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        password: "",
    };
  }

  updateUsername = (username) => {
    this.setState({ username })
  }

  updatePassword = (password) => {
    this.setState({ password })
  }


  login = (e) => {
    e.preventDefault();
    //if incorrect password
    //alert("incorrect password")

    //login stuff
    alert("Username: " + this.state.username + " Password:" + this.state.password);
    history.push('/');
  }

  render() {
    return (
      <div className='loginPage'>
        <SearchBar value={this.state.username} sendValue={this.updateUsername} placeholder='Username'/> 
        <SearchBar value={this.state.password} sendValue={this.updatePassword} placeholder='Password' /> 
        <button className ="loginButton" onClick={this.login}>Submit</button>
      </div>
    );
  }
}

export default LoginPage;
