import React, { useState } from 'react';

function SignUp(props) {
  // setting state of email and password, and creating the setState functions for each 
  // useState is initializing the state to an empty string
  //useState does two things. It first gives this.state a property of email, with the initial value being an empty string. Then it reassigns the value of this.state.email to be the email that a user passes in.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const body = {
    //   email,
    //   password
    // }
    // fetch('/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/JSON',
    //   },
    //   body: JSON.stringify(body)
    // }).then(res => {
    //   if (res.status === 200) loggedIn();
    //   // set is logged in state to true
    // });
    props.handleLogIn();
  }
  // return:
  // a form with 
  // an input for email
  // an input for password
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button>Sign Up</button>
      </form>
    </div>
  )

}

export default SignUp;