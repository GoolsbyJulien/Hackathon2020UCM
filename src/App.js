import React from 'react';
import { Router, Route } from 'react-router-dom';
import './index.css';

import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage"
import BusinessDetailsPage from './pages/BusinessDetailsPage';
import Header from './components/Header';
import history from './history';
import AboutUSPage from './pages/AboutUSPage';
import SignupPage from './pages/SignupPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isConsumer: false,
      signedIn: false,
    };
  }

  setStateApp = (newState) => {
    this.setState(newState);
  }

  render() {
    return (
      <div className='App'>
        <Router history={history}>
          <Header email={this.state.email} signedIn={this.state.signedIn} setStateApp={this.setStateApp} />
          <Route path='/' component={HomePage} exact />
          <Route path='/login' render={() => {
            if (!this.state.signedIn) return <LoginPage setStateApp={this.setStateApp} />
            history.push('/');
          }} exact />
          <Route path='/signup' render={() => {
            if (!this.state.signedIn) return <SignupPage setStateApp={this.setStateApp} />;
            history.push('/');
          }} exact />
          <Route path='/aboutUS' component={AboutUSPage} exact />
          <Route path='/:id/view' component={BusinessDetailsPage} exact />
        </Router>
      </div>
    );
  }
}

export default App;
