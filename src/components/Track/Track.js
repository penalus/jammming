import React, { useState } from 'react';
import styles from './Track.module.css';

function Track(props) {

    return (
        <div className={styles.tracklistWrapper}>
            <div className={styles.trackInformation}>
                <h3>{props.name}</h3>
                <p>- {props.artist} / {props.album}</p>
            </div>
        </div>
    )
}

export default Track;