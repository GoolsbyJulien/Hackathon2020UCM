import React from 'react';
import { Router, Route } from 'react-router-dom';
import './index.css';

import SamplePage1 from './pages/SamplePage1';
import SamplePage2 from './pages/SamplePage2';
import Header from './components/Header';
import history from './history';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Route path='/' component={SamplePage1} exact />
        <Route path='/otherpage' component={SamplePage2} exact />
      </Router>
    );
  }
}

export default App;
