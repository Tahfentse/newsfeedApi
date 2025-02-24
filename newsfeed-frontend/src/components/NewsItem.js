import React from 'react';

const NewsItem = ({ news, onDelete }) => {
  return (
    <div className="news-item">
      <h3>{news.heading}</h3>
      <p><strong>Date:</strong> {new Date(news.date).toLocaleDateString()}</p>
      <p>{news.story}</p>
      <button onClick={() => onDelete(news._id)}>Delete</button>
    </div>
  );
};

export default NewsItem;

