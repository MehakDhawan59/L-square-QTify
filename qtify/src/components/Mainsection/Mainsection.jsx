import React from 'react'
import styles from './Mainsection.module.css';
import Album from '../Albums/Album';
import { fetchTopSongs, fetchNewSongs } from '../../api/api';
function Mainsection() {
    return (
        <div className={styles.mainsectioncontainer}>

            <Album dataSource={fetchTopSongs} title={"Top Albums"} />
            <Album dataSource={fetchNewSongs} title={"NewAlbums"} margin="32px" />
        </div>
    )
}

export default Mainsection