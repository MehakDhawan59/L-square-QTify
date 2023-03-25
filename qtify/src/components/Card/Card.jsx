import React from 'react'
import styles from './Card.module.css';
function Card({ data }) {
    return (
        <>
            <div className={styles.cardsection}>
                <div className={styles.cardimage} key={data.index}>
                    <div>
                        <img src={data.image} alt="card" width={212} height={212} />
                    </div>
                    <div className={styles.cardfollowers}>
                        <p className={styles.cardfollowerstext}>{data.follows} Follows</p>
                    </div>
                    <div className={styles.cardtitle}>
                        <p>{data.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card