import React from 'react';

import LoginField from '../../components/Login/Username';
import Title from '../../components/Title';
import Business from '../../classes/Business';

import SearchBar from '../../components/SearchBar';
import history from '../../history';

import './index.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "",
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login = this.login.bind(this);

  }

  updateUsername(e) {
    this.setState({username: e.target.value})

  }

  updatePassword(e) {
    this.setState({password : e.target.value})
  }


  login(e) {
    
  }

  updateEmail = (email) => {
    this.setState({ email })
  }

  updatePassword = (password) => {
    this.setState({ password })
  }


  login = (e) => {
    e.preventDefault();
    //if incorrect password
    //alert("incorrect password")

    //login stuff
    // alert("Email: " + this.state.email + " Password:" + this.state.password);
    this.props.setStateApp({ signedIn: true, email: this.state.email, password: this.state.password, isConsumer: true });
    history.push('/');
  }

  render() {
    return (
      <form className='loginPage' onSubmit={this.login}>
        <SearchBar required={true} isEmail={true} value={this.state.email} sendValue={this.updateEmail} placeholder='Email'/> 
        <SearchBar required={true} isPassword={true} value={this.state.password} sendValue={this.updatePassword} placeholder='Password' /> 
        <button type='submit' className ="loginButton">Login</button>
      </form>
    );
  }
}

export default LoginPage;
