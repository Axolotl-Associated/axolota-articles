import React, { Component, useState } from 'react';
import Article from './article.jsx';

class Dropdown extends Component {
  constructor(props){
      super(props);
      this.state={
          textDisplay: false,
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
    articles.push(<Article />);

      return(
          <div>
              <button onClick={() => this.ToggleButton()}>
                High Priority List
              </button>
              {!this.state.textDisplay && articles}
          </div>
      )
  }
}

export default Dropdown;