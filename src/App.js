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
import BusinessSignUpPage from './pages/BusinessSignUpPage';
import HelpPage from './pages/HelpPage';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router history={history}>
          <Header />
          <Route path='/' component={HomePage} exact />
          <Route path='/login' component={LoginPage} exact />
          <Route path='/aboutUS' component={AboutUSPage} exact />
          <Route path='/help' component={HelpPage} exact />

          <Route path='/signup' component={SignupPage} exact />
          <Route path='/signup/business' component={BusinessSignUpPage} exact />

          <Route path='/:id/view' component={BusinessDetailsPage} exact />
        </Router>
      </div>
    );
  }
}

export default App;
