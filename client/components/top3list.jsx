import React, { useState } from 'react';
import Article from './article.jsx';

function Top3list(){
  // const [top3Articles, setTop3Articles] = useState([]);

  // fetch request that fetches top three articles
  // fetch('/api/top3list')
  //   .then(res => res.json())
  //   .then(data => {
  //     setTop3Articles(data);
  //   })
  //   .catch(err => console.log(err));
  // const articles = [];
  // data.map(article => {
  //   articles.push(<Article />)
  // })
  // const articles = [];
  // top3Articles.map((article) => {
  //   articles.push(<Article url="www.newyorktimes.com" title="New York Times" />);
  // });
  
  return (
    <div id="top-list">
      {/* {articles} */}
      <div id="top-articles-container">
      <Article url="http://www.newyorktimes.com" title="New York Times" />
      <Article url="http://www.google.com" title="Google" />
      </div>
    </div>
  )
}


export default Top3list;