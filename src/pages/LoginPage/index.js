import React from 'react';

import SearchBar from '../../components/SearchBar';
import history from '../../history';
import { signIn } from '../../functions/server';

import './index.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "",
    };

  }

  updateEmail = (email) => {
    this.setState({ email })
  }

  updatePassword = (password) => {
    this.setState({ password })
  }


  login = async (e) => {
    e.preventDefault();

    //login stuff
    // alert("Email: " + this.state.email + " Password:" + this.state.password);
    this.props.setStateApp({ signedIn: true, id: 222, email: this.state.email, isConsumer: false });
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
