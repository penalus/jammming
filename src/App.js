import './App.css';
import React from 'react';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Track from './components/Track/Track';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  return (
    <div>
      <Playlist />
      <SearchBar />
      <SearchResults />
      <Track />
      <Tracklist />
    </div>
  )
}

export default App;
