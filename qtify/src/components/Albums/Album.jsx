import React, { useState, useEffect } from 'react'
import styles from './Album.module.css';
import Card from '../Card/Card';
import axios from 'axios';

function Album() {

    const [topAlbums, setTopAlbums] = useState([]);

    const fetchTopAlbums = async () => {
        try {
            const res = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
            const data = res.data;
            console.log("data", data);
            setTopAlbums(data);
        }
        catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        fetchTopAlbums();
    }, []);
    return (
        <div className={styles.albumcontainer}>
            <div className={styles.albumheading}>
                <div className={styles.albumheading1}>
                    <p>Top Albums</p>
                </div>
                <div className={styles.albumheading2}>
                    <p>Show All</p>
                </div>
            </div>
            <div className={styles.albumcards}>
                <Card data={topAlbums} />
            </div>

        </div>
    )
}

export default Album