import React, { useState } from 'react';

// when user clicks update button, state is then changed to true and modal is shown
// modal is a form that takes in the information which will then send a post request to the database
// once submitted, form changes state back to false, closing the modal
// modal will have a separate button to exit out of modal without updating (changing state to false)

function UpdateModal(props) {
  const[title, setTitle] = useState("");
  const[url, setUrl] = useState("");
  const[description, setDescription] = useState("");
  const[priority, setPriority] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // put request function here with new info from form
    // fetch('/api/update', {
    //   method: 'PUT',
    //   headers : {
    //     "Content-Type": "Application/JSON"
    //   },
    //   body: JSON.stringify(body)
    // })
    // .then(res => {
    //   if (res.status === 200) props.handleUpdateClick();
    // })
    // .catch(err => console.log('error in fetch request', err));
    props.handleUpdateClick();
  };


  return (
  <div className="update-modal">
    <form onSubmit={handleSubmit}>
      <input className="input-update" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="input-update" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <input className="input-update" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <select className="update-priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      <button className="update-modal-btn">Update</button>
    </form>
  </div>
  )
}

export default UpdateModal;