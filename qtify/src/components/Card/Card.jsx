import React from 'react'
import styles from './Card.module.css';
import { Tooltip } from '@mui/material';
function Card({ data, type }) {

    const getCard = (type) => {
        switch (type) {
            case 'album': {
                const { title, image, follows, songs } = data;
                return (
                    <>
                        <Tooltip title={`${songs.length} songs`} placement='top' arrow>
                            <div className={styles.cardsection}>
                                <div className={styles.cardimage} key={data.index}>
                                    <div>
                                        <img src={image} alt="card" width={212} height={212} />
                                    </div>
                                    <div className={styles.cardfollowers}>
                                        <p className={styles.cardfollowerstext}>{follows} Follows</p>
                                    </div>
                                    <div className={styles.cardtitle}>
                                        <p>{title}</p>
                                    </div>
                                </div>
                            </div>
                        </Tooltip>
                    </>
                )
            }
            case 'song': {
                const { title, image, likes } = data;
                return (
                    <>

                        <div className={styles.cardsection}>
                            <div className={styles.cardimage} key={data.index}>
                                <div>
                                    <img src={image} alt="card" width={212} height={212} />
                                </div>
                                <div className={styles.cardfollowers}>
                                    <p className={styles.cardfollowerstext}>{likes} Likes</p>
                                </div>
                                <div className={styles.cardtitle}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            default:
                return <></>;
        }
    }
    return getCard(type);
}

export default Card