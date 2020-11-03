import React, { useState } from 'react';

function SignUp(props) {
  // setting state of email and password, and creating the setState functions for each 
  // useState is initializing the state to an empty string
  //useState does two things. It first gives this.state a property of email, with the initial value being an empty string. Then it reassigns the value of this.state.email to be the email that a user passes in.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //TODO: need to figure out how to get the password out of the form so it doesn't need to be passed into state 

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      email,
      password
    }
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      if (res.status === 200) props.handleLogIn();
      // set logged in state to true
    })
    .catch(err => console.log('error in fetch request', err));
    // props.handleLogIn();
  }
  // return:
  // a form with 
  // an input for email
  // an input for password
  return (
    <div id="sign-up">
      <div className="img-container">
          <img src="./images/Axolotl-Wallet.png" width="300px" height="300px"></img>
        </div>
      <h1 className="title">Axolota Articles</h1>
      <h2 className="tagline">The Official Internet Wallet</h2>
      <form onSubmit={handleSubmit}>
        <div><input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input></div>
        <div><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input></div>
        <div id="signup-pg-btn"><button>Sign Up</button></div>
      </form>
    </div>
  )

}

export default SignUp;