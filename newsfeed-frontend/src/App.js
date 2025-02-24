import React from 'react';
import './App.css';
import NewsList from './components/NewsList';
import AddNews from './components/AddNews';

const App = () => {
  return (
    <div className="App">
      <h1>Newsfeed API</h1>
      <AddNews />
      <NewsList />
    </div>
  );
};

export default App;
