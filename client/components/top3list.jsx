import React, { useState, useEffect } from 'react';
import Article from './article.jsx';

function Top3list() {
  const [top3Articles, setTop3Articles] = useState([]);

  // fetch request that fetches top three articles
  useEffect(() => {
    fetch('/api/links/top3list')
    .then(res => res.json())
    .then(data => {
      setTop3Articles(data);
    })
    .catch(err => console.log(err));
  });
    
  const articles = top3Articles.map(article => {
      return <Article url={article.url} title={article.title} />;
  })
  
  return (
    <div id="top-list">
      <div id="top-articles-container">
      {articles}
      </div>
    </div>
  )
}


export default Top3list;