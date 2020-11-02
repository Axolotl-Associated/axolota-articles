import React from 'react';
import AddForm from './addForm.jsx';
import Top3list from './top3list.jsx';
import Dropdown from './dropdown.jsx'

function Dashboard(props) {
  return (
    <div id="dashboard">
      <div id="logout-container">
      <button id="logout-btn" onClick={() => props.handleLogIn()}>Log Out</button>
      </div>
      <div className="img-container">
          <img src="./images/Axolotl-Wallet.png" width="200px" height="200px"></img>
        </div>
      <h1 className="title">Axolota Articles</h1>
      <AddForm />
      <div id="top-outer-container">
      <Top3list />
      </div>
      <div id="dropdown-container">
      <Dropdown text="High Priority" />
      <Dropdown text="Medium Priority"/>
      <Dropdown text="Low Priority"/>
      </div>
    </div>
  )
}

export default Dashboard;