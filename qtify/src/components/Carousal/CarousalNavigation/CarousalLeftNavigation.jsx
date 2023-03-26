import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSwiper } from 'swiper/react'
import arrowleft from '../../../assets/arrowleft.svg';
function CarousalLeftNavigation() {
    const swiper = useSwiper();
    const [isBegin, setIsBegin] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsBegin(swiper.isBeginning);
        })

    }, []);
    return (
        <div style={{ position: "absolute", top: "80px", left: "10px", color: "white", zIndex: 10, cursor: "pointer" }}>
            {!isBegin && <div

                onClick={() => { swiper.slidePrev(); }}>
                <img src={arrowleft} alt="arrowleft" />
            </div>}
        </div>
    )
}

export default CarousalLeftNavigation