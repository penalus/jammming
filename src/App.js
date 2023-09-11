import './App.css';
import React, { useState } from 'react';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Tracklist from './components/Tracklist/Tracklist';
import Track from './components/Track/Track';


function App() {

  return (
    <div>
      <div className='header'>
        <div className='jammming'><p>JAMM<span className='m'>M</span>ING</p></div>
      </div>

      <SearchBar />

      <div className='wrapper'>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  )
}

export default App;
