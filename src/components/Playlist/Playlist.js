import React, { useState } from 'react';
import styles from './Playlist.module.css';

function Playlist() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <input type='text' id={styles.playlistInput} placeholder='my playlist'></input>
                <hr className={styles.hr}/>
            </div>
            
        </div>
    )
}

export default Playlist;