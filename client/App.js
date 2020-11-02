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
    this.handleLogIn = this.handleLogIn.bind(this);  // binding the functionality to the constructor
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogIn() {  
    let { isLoggedIn, isSignedUp } = this.state;
    isSignedUp = true;
    this.setState({ isLoggedIn: !isLoggedIn, isSignedUp: isSignedUp }); //setState changes the steate- if isLogged is true, it's changing it to false. And if isSignedUp is true, it's keeping its value as true?
  }

  handleSignUp() {
    let { isSignedUp } = this.state;
    this.setState({isSignedUp: !isSignedUp}); //changing the state to true or false depending on the current state
  }

  render() {
    const { isLoggedIn, isSignedUp } = this.state;
    if (isSignedUp && !isLoggedIn) {
      return (
        <div>
          {/* setting both of these as props- so we can call the methods in the children, which changes the state of the parent */}
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