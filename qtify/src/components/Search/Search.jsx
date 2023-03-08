import React from 'react'
import styles from './Search.module.css';
import searchicon from '../../assets/searchicon.svg';
function Search({ placeholder }) {
    return (
        <div className={styles.searchbar}>
            <input className={styles.search}
                placeholder={placeholder}
            />
            <button className={styles.searchbutton}>
                <img src={searchicon} alt="search icon" />
            </button>
        </div>

    )
}

export default Search