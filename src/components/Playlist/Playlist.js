import React, { useState } from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist() {
    const playlistMockTracks = [
        {
            name: "...Baby One More Time",
            artist: "Britney Spears",
            album: "...Baby One More Time",
            id: 1
        },
        {
            name: "(You Make Me) Crazy",
            artist: "Britney Spears",
            album: "...Baby One More Time",
            id: 2
        },
        {
            name: "Sometimes",
            artist: "Britney Spears",
            album: "...Baby One More Time",
            id: 3
        }

    ]
    let mockString = 'playlist mock name';
    const [placeholder, setPlaceholder] = useState(mockString);
    const [playlistName, setPlaylistName] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState(playlistMockTracks);

    function clearPlaceholder(event){
        setPlaceholder(event.target.placeholder = "");
    }
    function addPlaceholderAgain(event) {
        setPlaceholder(event.target.placeholder = mockString);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <input 
                    type='text' 
                    className={styles.playlistInput} 
                    placeholder={mockString} 
                    onFocus={clearPlaceholder}  
                    onBlur={addPlaceholderAgain}             />
                <hr className={styles.hr}/>
            </div>
            
            <div className={styles.addButtonWrapper}>
                <button className={styles.addToSpotify}>Add to spotify</button>
            </div>            
        </div>
    )
           
}

export default Playlist;