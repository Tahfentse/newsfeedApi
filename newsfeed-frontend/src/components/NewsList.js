import React, { useEffect, useState } from 'react';
import { getNews, deleteNews } from '../api';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteNews(id);
      setNews(news.filter(item => item._id !== id));  // Remove deleted news from state
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <div className="news-list">
      <h2>Newsfeed</h2>
      {news.map((item) => (
        <NewsItem key={item._id} news={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NewsList;
