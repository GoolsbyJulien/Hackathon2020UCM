import React from 'react';

import LoginField from '../../components/Login/Username';
import Title from '../../components/Title';
import Business from '../../classes/Business';


import './index.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
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
    
    //if incorrect password
    //alert("incorrect password")

    //login stuff
    alert("Username: " + this.state.username + " Password:" + this.state.password);
    

  }

  

  render() {
    return (
      <div className='loginPage'>

        <h1 className ="loginHeader"> Login </h1>
        
        <LoginField onChange = {this.updateUsername} title = "username" type ="text"/> 
        <LoginField onChange = {this.updatePassword}title = "Password" type ="password"/> 
        <button className ="loginButton" onClick = {this.login}> Login</button>
        
      </div>
      
    );
  }
}

export default LoginPage;
