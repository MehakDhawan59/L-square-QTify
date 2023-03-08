
import React from 'react'
import Logo from './Logo/Logo';
import styles from './Navbar.module.css';
import Button from './Button/Button';
import Search from './Search/Search';
function Navbar() {
    return (
        <div className={styles.navbar}>

            <Logo />
            <Search placeholder={"Search a song of your choice"} />
            <Button />
        </div>
    )
}

export default Navbar