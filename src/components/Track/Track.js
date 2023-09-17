import React, { useCallback } from 'react';
import styles from './Track.module.css';

function Track({track, name, artist, album, isRemoval, onAdd, onRemove }) {
    function addOrRemoveButton() {
        if(isRemoval) {
            return (<button className={styles.addButton} onClick={removeTrack}>-</button>);
        } else {
            return (<button className={styles.addButton} onClick={addTrack}>+</button>);
        }
    }

    const addTrack = useCallback(
        (event) => {
            onAdd(track);
        }, [onAdd, track]
    );

    const removeTrack = useCallback(
        (event) => {
            onRemove(track)
        }, [onRemove, track]
    );

    return (
        <div className={styles.tracklistWrapper}>
            <div className={styles.trackInformation}>
                <h3>{name}</h3>
                <p>- {artist} / {album}</p>
            </div>
            {addOrRemoveButton()}
        </div>
    )
}

export default Track;