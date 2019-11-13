import React, { Component } from 'react';
import Home from './components/home';
import ComingSoon from './components/coming-soon.js'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App-intro">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
