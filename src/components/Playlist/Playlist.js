import React, { useState } from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({ playlistTracks, onRemove, onNameChange }) {
    // Placeholder functionality
    let mockString = 'playlist mock name';
    const [placeholder, setPlaceholder] = useState(mockString);

    function clearPlaceholder(event){
        setPlaceholder(event.target.placeholder = "");
    }
    function addPlaceholderAgain(event) {
        setPlaceholder(event.target.placeholder = mockString);
    }

    // Playlistname event handler
    const handleNameChange = event => {
        onNameChange(event.target.value);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <input 
                    type='text' 
                    className={styles.playlistInput} 
                    placeholder={mockString} 
                    onFocus={clearPlaceholder}  
                    onBlur={addPlaceholderAgain} 
                    onChange={handleNameChange}           
                />
                <hr className={styles.hr}/>
            </div>
            <Tracklist 
                tracks={playlistTracks}
                isRemoval={true}
                onRemove={onRemove}
                />
            <div className={styles.addButtonWrapper}>
                <button className={styles.addToSpotify}>Save to spotify</button>
            </div>            
        </div>
    )
           
}

export default Playlist;