import React, { useState } from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';
import TrackObjects from '../TrackObjects/TrackObjects.json';

function Tracklist() {    
    return (
        <div>
            {TrackObjects.map((track) => 
                <Track 
                    key={track.id} 
                    track={track} 
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                />
            )}
        </div>
    )
}

export default Tracklist;