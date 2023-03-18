import React from 'react'
import styles from './Card.module.css';
function Card({ data }) {
    return (
        <>

            {
                data.map((item, index) => (
                    <div className={styles.cardsection}>
                        <div className={styles.cardimage} key={index}>
                            <div>
                                <img src={item.image} alt="card" width={212} height={212} />
                            </div>
                            <div className={styles.cardfollowers}>
                                <p className={styles.cardfollowerstext}>100M Follows</p>
                            </div>
                            <div className={styles.cardtitle}>
                                <p>New Bollywood</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Card