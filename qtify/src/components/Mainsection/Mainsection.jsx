import React from 'react'
import styles from './Mainsection.module.css';
import Album from '../Albums/Album';
function Mainsection() {
    return (
        <div className={styles.mainsectioncontainer}>

            <Album />
        </div>
    )
}

export default Mainsection