import React, { useState, useEffect } from 'react'
import styles from './Album.module.css';
import Card from '../Card/Card';
import Carousal from '../Carousal/Carousal';


function Album({ dataSource, title, margin }) {

    const [cardsData, setCardsData] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);
    useEffect(() => {
        dataSource().then((data) => {
            setCardsData(data);
        })

    }, [])

    const handleToggle = () => {
        setIsShowAll((prevState) => !prevState);
    }

    return (
        <div className={styles.albumcontainer} style={{ marginTop: margin ? margin : "0" }}>
            <div className={styles.albumheading}>
                <div className={styles.albumheading1}>
                    <p>{title}</p>
                </div>
                <div className={styles.albumheading2} onClick={handleToggle}>
                    <p>{isShowAll ? "Collapse" : "Show All"}</p>
                </div>
            </div>
            {isShowAll ? (
                <div className={styles.displaycards}>
                    {cardsData.map((card, index) => (
                        <Card data={{ title: card.title, index: index, image: card.image, follows: card.follows }} />
                    ))}
                </div>
            ) : (
                <Carousal data={cardsData} renderComponent={(data) => <Card data={data} />} />
            )

            }

        </div>
    )
}

export default Album