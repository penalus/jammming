import React, { useState } from 'react';
import styles from './SearchBar.module.css';


function SearchBar() {
    return (
        <div>
            <div className={styles.searchContainer}>
                <div className={styles.search}>
                    <input type='text' id={styles.searchbarInput} placeholder='Search your music...'/>
                    <button className={styles.searchButton}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;