import React, { Component, useState } from 'react';
import Article from './article.jsx';

class Dropdown extends Component {
  constructor(props){
      super(props);
      this.state = {
          textDisplay: true,
      }
  }

  ToggleButton(){
      this.setState((currentState) => ({
          textDisplay: !currentState.textDisplay, 
      }));
  }

  render(){
    // push article components into array
    const articles = [];
    articles.push(<Article url="www.google.com" title="Link to Google" />);

      return(
          <div>
              <button onClick={() => this.ToggleButton()}>
                {this.props.text}
              </button>
              {!this.state.textDisplay && articles}
          </div>
      )
  }
}

export default Dropdown;