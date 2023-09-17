import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ searchResults, onAdd }) {   
     
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h3 className={styles.h3}>Results</h3>
                <hr className={styles.hr}/>
            </div>
            <Tracklist 
                tracks={searchResults}
                onAdd={onAdd}
                isRemoval={false}/>
        </div>
    )
}

export default SearchResults;