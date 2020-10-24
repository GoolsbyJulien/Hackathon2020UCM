import React from 'react';

<<<<<<< HEAD
import LoginField from '../../components/Login/Username';
import Title from '../../components/Title';
import Business from '../../classes/Business';

=======
import SearchBar from '../../components/SearchBar';
import history from '../../history';
>>>>>>> development

import './index.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        password: "",
    };
<<<<<<< HEAD

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
    
=======
  }

  updateUsername = (username) => {
    this.setState({ username })
  }

  updatePassword = (password) => {
    this.setState({ password })
  }


  login = (e) => {
    e.preventDefault();
>>>>>>> development
    //if incorrect password
    //alert("incorrect password")

    //login stuff
    alert("Username: " + this.state.username + " Password:" + this.state.password);
<<<<<<< HEAD
    

  }

  

  render() {
    return (
      <div className='loginPage'>

        <h1 className ="loginHeader"> Login </h1>
        
        <LoginField onChange = {this.updateUsername} title = "username" type ="text"/> 
        <LoginField onChange = {this.updatePassword}title = "Password" type ="password"/> 
        <button className ="loginButton" onClick = {this.login}> Login</button>
        
      </div>
      
=======
    history.push('/');
  }

  render() {
    return (
      <div className='loginPage'>
        <SearchBar value={this.state.username} sendValue={this.updateUsername} placeholder='Username'/> 
        <SearchBar value={this.state.password} sendValue={this.updatePassword} placeholder='Password' /> 
        <button className ="loginButton" onClick={this.login}>Login</button>
      </div>
>>>>>>> development
    );
  }
}

export default LoginPage;
