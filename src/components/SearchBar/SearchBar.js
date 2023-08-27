import React, { useState } from 'react';
import styles from './SearchBar.module.css';


function SearchBar() {
    return (
        <div>
            <div className={styles.searchContainer}>
                <div className={styles.search}>
                    <input type='text' id={styles.searchbarInput} placeholder='Search for...'/>
                    <button className={styles.searchButton}></button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;