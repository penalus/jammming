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
      <div className='header'>
        <div className='jammming'><p>JAMM<span className='m'>M</span>ING</p></div>
      </div>

      <div>
        <SearchBar />
      </div>

      <div className='wrapper'>
        <SearchResults />
        <Playlist />
      </div>
      
      <Track />
      <Tracklist />
    </div>
  )
}

export default App;
