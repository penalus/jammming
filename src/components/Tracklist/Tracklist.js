import React from 'react';
import Track from '../Track/Track';

function Tracklist({ tracks, isRemoval, onRemove, onAdd }) {    
    return (
        <div>
            {tracks &&
                tracks.map((track) => 
                <Track 
                    key={track.id} 
                    track={track} 
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isRemoval={isRemoval}
                />
            )}
        </div>
    )
}

export default Tracklist;