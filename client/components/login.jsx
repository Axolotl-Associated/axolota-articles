import React, { useState } from "react";
// import { Link } from 'react-router-dom';

function Login(props) {
  // setting state of email and password, and creating the setState functions for each 
  // useState is initializing the state to an empty string
  //useState does two things. It first gives this.state a property of email, with the initial value being an empty string. Then it reassigns the value of this.state.email to be the email that a user passes in.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();  //makes it so the page doesn't reload
    // fetch request here
    // check if status is success
    // const body = {
    //   email,
    //   password
    // }
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/JSON',
    //   },
    //   body: JSON.stringify(body)
    // })
    // .then(res => {
    //   if (res.status === 200) props.handleLogIn();
    //   // set logged in state to true
    // })
    // .catch(err => console.log('error in fetch request', err));
    
    props.handleLogIn();
  }

  // return:
  // a form with 
  // an input for email
  // an input for password
  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <div><input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input></div>
        <div><input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input></div>
        <div id="login-btns">
        <button id="signup-btn" onClick={props.handleSignUp}>Sign Up</button>
        <button id="login-btn">Log In</button>
        </div>
      </form>
     </div>
  )

}

export default Login;
