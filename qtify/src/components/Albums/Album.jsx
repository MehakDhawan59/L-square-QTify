import React, { useState, useEffect } from 'react'
import styles from './Album.module.css';
import Card from '../Card/Card';
import Carousal from '../Carousal/Carousal';
import Filters from '../../components/Filters/Filters';

function Album({ dataSource, title, margin, filterSource, type }) {

    const [cardsData, setCardsData] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);
    const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
    const [filterIndex, setFilterIndex] = useState(0);
    useEffect(() => {
        dataSource().then((data) => {
            setCardsData(data);
        })
        if (filterSource) {
            filterSource().then((res) => {
                const { data } = res;
                console.log("filterred", res);
                setFilters([...filters, ...data]);
            })
        }
    }, [])

    const handleToggle = () => {
        setIsShowAll((prevState) => !prevState);
    }
    const showFilters = filters.length > 1;
    const cardsToRender = cardsData.filter((card) =>
        showFilters && filterIndex !== 0
            ? card.genre.key === filters[filterIndex].key
            : card
    );

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
            {filters.length > 1 && <Filters data={filters} filterIndex={filterIndex} setFilterIndex={setFilterIndex} />}
            <div>
                {isShowAll ? (
                    <div className={styles.displaycards}>
                        {cardsToRender.map((card, index) => (

                            <Card data={card} type={type} />
                        ))}
                    </div>
                ) : (
                    <Carousal data={cardsToRender} renderComponent={(data) => <Card data={data} type={type} />} />
                )

                }
            </div>


        </div>
    )
}

export default Album