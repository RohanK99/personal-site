import React, { Component } from 'react';
import Home from './components/home';
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App-intro">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
