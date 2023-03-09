import styles from './Hero.module.css';
import React from 'react'

function Hero() {
    return (
        <div className={styles.herosection}>
            <h5 className={styles.herotext}>
                100 Thousand Songs, ad-free <br />
                Over thousands podcast episodes
            </h5>
            <img src={require("../../assets/hero-image.png")} alt="hero-image" width={212} height={212} />
        </div>
    )
}

export default Hero