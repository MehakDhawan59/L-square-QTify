import React from 'react'
import styles from './Mainsection.module.css';
import Album from '../Albums/Album';
import { fetchTopSongs, fetchNewSongs, fetchFilteredSource, fetchSongs } from '../../api/api';
import Faqs from '../Faqs/Faqs';
function Mainsection() {
    return (
        <div className={styles.mainsectioncontainer}>

            <Album dataSource={fetchTopSongs} title={"Top Albums"} type={"album"} />
            <Album dataSource={fetchNewSongs} title={"New Albums"} margin="32px" type={"album"} />
            <Album filterSource={fetchFilteredSource} title={"Songs"} dataSource={fetchSongs} margin="32px" type={"song"} />
            <Faqs />
        </div>
    )
}

export default Mainsection