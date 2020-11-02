import React, { Component, useState } from 'react';
import Article from './article.jsx';

class Dropdown extends Component {
  constructor(props) {
      super(props);
      this.state = {
          textDisplay: true,
          articles: [],
      }
  }
  // fetch request grabbing all articles based off priority level
  

  ToggleButton(){
      this.setState((currentState) => ({
          textDisplay: !currentState.textDisplay, 
      }));
    //   fetch('/api/getArticles')
    //   .then(res => res.json())
    //   .then(data => {
    //     setState({articles: data});
    //     })
    //     .catch(err => console.log(err));
  }

  render(){
    // push article components into array
    const articles = [];
    articles.push(<Article url="www.google.com" title="Link to Google" />);

      return (
        <div className="dropdown">
            <button className="dropdown-btn" onClick={() => this.ToggleButton()}>
                {this.props.text}
            </button>
            {!this.state.textDisplay && articles}
        </div>
      )
  }
}

export default Dropdown;