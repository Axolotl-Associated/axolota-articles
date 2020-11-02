import React, { useState } from "react";

function AddForm(){
  const[title, setTitle] = useState("");
  const[url, setUrl] = useState("");
  const[description, setDescription] = useState("");
  const[priority, setPriority] = useState("")
  
  const handleSubmit = (event) => {
    event.preventDefault();  //makes it so the page doesn't reload
    console.log('addForm button clicked');
    // fetch function goes here
    // const body = {
    //   title,
    //   url,
    //   description,
    //   priority
    // }
    // fetch('/api/placeholder.placeholder', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "Application/JSON"
    //   },
    //   body: JSON.stringify(body)
    // }).then(function(response) {
    //   return response.json();
    // });
  }
  
  
  return(
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
          </select>
          <button>Add</button>
      </form>
    </div>
  )
}


export default AddForm;