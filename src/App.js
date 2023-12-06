// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
import MutualFundList from './components/MutualFundList';
import MutualFundDetails from './components/MutualFundDetails';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/details/:id" component={MutualFundDetails} />
          <Route path="/listing" component={MutualFundList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
