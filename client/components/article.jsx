import React, { Component } from 'react';
import UpdateModal from './updateModal.jsx'

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {   // create a state that keeps track of whether Modal is shown
      openModal: false // initialize to false
    }
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleUpdateClick() {
    let { openModal } = this.state;
    this.setState({openModal : !openModal});
  }

  handleDeleteClick(event) {
    event.preventDefault();
    // delete request
    // fetch('/api/delete', {
    //   method: 'DELETE',
    //   headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //   }
    // })
    console.log('deleted!')
  }
  
  
  
  
// needs title, url, update button, delete button
// update button needs a handle click function
// delete button needs a handle click function
  render() {
  return (
    <div>
      {this.state.openModal ? (<UpdateModal handleUpdateClick={this.handleUpdateClick} />) : null}
      <a href={this.props.url} target="_blank">{this.props.title}</a>
      <button onClick={this.handleUpdateClick}>Update</button>
      <button onClick={this.handleDeleteClick}>Delete</button>
    </div>
    )
  }
}

export default Article;