import './App.css';
import React, { useState, useCallback } from 'react';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';


function App() {
const [playlistName, setPlaylistName] = useState('Playlist 1');
const [searchResults, setSearchResults] = useState([
  {
    name: "Stripped Intro",
    artist: "Christina Aguilera",
    album: "Stripped",
    id: 4
  },
  {
    name: "Can\"t Hold Us Down (featuring Lil\" Kim)",
    artist: "Christina Aguilera",
    album: "Stripped",
    id: 5
  },
  {
    name: "Walk Away",
    artist: "Christina Aguilera",
    album: "Stripped",
    id: 6
  }

]);
const [playlistTracks, setPlaylistTracks] = useState([
  {
    name: "If Not for You",
    artist: "Bob Dylan",
    album: "New Morning",
    id: 7
  },
  {
    name: "Day of the Locusts",
    artist: "Bob Dylan",
    album: "New Morning",
    id: 8
  },
  {
    name: "Time Passes Slowly",
    artist: "Bob Dylan",
    album: "New Morning",
    id: 9
  }
]);

const addTrack = useCallback((track) => {
  if (!playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }
}, [playlistTracks]);
  
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => 
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = name => {
    setPlaylistName({playlistName: name});
  }

  return (
    <div>
      <div className='header'>
        <div className='jammming'><p>JAMM<span className='m'>M</span>ING</p></div>
      </div>

      <SearchBar />

      <div className='wrapper'>
        <SearchResults 
          searchResults={searchResults}
          onAdd={addTrack} />
        <Playlist 
          playlistTracks={playlistTracks} 
          playlistName={playlistName}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
        />
      </div>
    </div>
  )
}

export default App;
