import React from 'react';
import AddForm from './addForm.jsx';
import Top3list from './top3list.jsx';
import Dropdown from './dropdown.jsx'

function Dashboard() {
  return (
    <div id="dashboard">
      <AddForm />
      <Top3list />
      <div id="dropdown-container">
      <Dropdown text="High Priority" />
      {/* <Dropdown title="Medium Priority"/>
      <Dropdown title="Low Priority"/> */}
      </div>
    </div>
  )
}

export default Dashboard;