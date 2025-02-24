import React, { useState } from 'react';
import { addNews } from '../api';

const AddNews = () => {
  const [heading, setHeading] = useState('');
  const [story, setStory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!heading || !story) {
      alert("Please fill all fields");
      return;
    }

    try {
      const newNews = { heading, story };
      await addNews(newNews);
      setHeading('');
      setStory('');
      alert('News added successfully');
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news");
    }
  };

  return (
    <div className="add-news">
      <h2>Add News</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea
          placeholder="Story"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <button type="submit">Add News</button>
      </form>
    </div>
  );
};

export default AddNews;
