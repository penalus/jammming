import React, { useState } from 'react';
import styles from './SearchResults.module.css';

function SearchResults() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h3 className={styles.h3}>Results</h3>
                <hr className={styles.hr}/>
            </div>
        </div>
    )
}

export default SearchResults;