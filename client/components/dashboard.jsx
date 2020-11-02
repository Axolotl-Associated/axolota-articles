import React from 'react';
import AddForm from './addForm.jsx';
import Top3list from './top3list.jsx';
import Dropdown from './dropdown.jsx'

function Dashboard(props) {
  return (
    <div id="dashboard">
      <button id="logout-btn" onClick={() => props.handleLogIn()}>Log Out</button>
      <AddForm />
      <div id="top-outer-container">
      <Top3list />
      </div>
      <div id="dropdown-container">
      <Dropdown text="High Priority" />
      {/* <Dropdown title="Medium Priority"/>
      <Dropdown title="Low Priority"/> */}
      </div>
    </div>
  )
}

export default Dashboard;