import React from 'react'
import styles from './Card.module.css';
function Card() {
    return (
        <div className={styles.cardsection}>
            <div className={styles.card}>
                <div className={styles.cardimage}>
                    <img src={require("../../assets/cardimage.png")} alt="card" width={212} height={212} />
                    <div className={styles.cardfollowers}>
                        <span className={styles.cardfollowerstext}>100M Follows</span>

                    </div>
                </div>
                <div className={styles.cardtitle}>
                    New Bollywood
                </div>
            </div>

        </div>
    )
}

export default Card