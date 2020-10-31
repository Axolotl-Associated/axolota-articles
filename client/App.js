import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login.jsx';
import SignUp from './components/signUp.jsx';
import Dashboard from './components/dashboard.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;