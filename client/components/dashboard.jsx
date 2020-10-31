import React from 'react';
import AddForm from './addForm.jsx';
import Top3list from './top3list.jsx';
import Dropdown from './dropdown.jsx'

function Dashboard() {
  return (
    <div className="dashboard">
      <AddForm />
      <Top3list />
      <Dropdown />
      {/* <Dropdown title="Medium Priority"/>
      <Dropdown title="Low Priority"/> */}
    </div>
  )
}

export default Dashboard;