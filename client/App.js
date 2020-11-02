import React, { Component } from 'react';
import Login from './components/login.jsx';
import SignUp from './components/signUp.jsx';
import Dashboard from './components/dashboard.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isSignedUp: true
    }
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogIn() {
    let { isLoggedIn, isSignedUp } = this.state;
    isSignedUp = true;
    this.setState({ isLoggedIn: !isLoggedIn, isSignedUp: isSignedUp });
  }

  handleSignUp() {
    let { isSignedUp } = this.state;
    this.setState({isSignedUp: !isSignedUp});
  }

  render() {
    const { isLoggedIn, isSignedUp } = this.state;
    if (isSignedUp && !isLoggedIn) {
      return (
        <div>
          <Login handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp} />
        </div>
      )
    } else if (isLoggedIn) {
      return (
        <div>
          <Dashboard />
        </div>
      )
    } else {
      return (
        <div>
          <SignUp handleLogIn={this.handleLogIn} />
        </div>)
    }
  }
}

export default App;