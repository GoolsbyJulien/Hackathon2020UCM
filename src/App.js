import React from 'react';
import { Router, Route } from 'react-router-dom';
import './index.css';

import HomePage from './pages/HomePage';
import SamplePage2 from './pages/SamplePage2';
import Header from './components/Header';
import history from './history';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router history={history}>
          <Header />
          <Route path='/' component={HomePage} exact />
          <Route path='/otherpage' component={SamplePage2} exact />
        </Router>
      </div>
    );
  }
}

export default App;
