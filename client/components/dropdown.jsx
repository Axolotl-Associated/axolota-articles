import React, { Component, useState } from 'react';
import Article from './article.jsx';

class Dropdown extends Component {
  constructor(props) {
      super(props);
      this.state = {
          textDisplay: true,
          articles: [],
      }
      this.ToggleButton = this.ToggleButton.bind(this);
  }
  // fetch request grabbing all articles based off priority level
  

  ToggleButton(event) {
    const priority = event.target.innerHTML.split(" ")[0].toLowerCase();
    
      this.setState((currentState) => ({
          textDisplay: !currentState.textDisplay, 
      }));

      fetch(`/api/getArticles/${priority}`)
      .then(res => res.json())
      .then(data => {
        this.setState({articles: data});
        })
        .catch(err => console.log(err));
  }

  render(){
    // push article components into array
    
    const links = this.state.articles;
    const articles = links.map(link => {
      return <Article url={link.url} title={link.title} />
    });
      return (
        <div className="dropdown">
            <button className="dropdown-btn" onClick={this.ToggleButton}>
                {this.props.text}
            </button>
            <div id="dropdown-articles-container">
            {!this.state.textDisplay && articles}
            </div>
        </div>
      )
  }
}

export default Dropdown;