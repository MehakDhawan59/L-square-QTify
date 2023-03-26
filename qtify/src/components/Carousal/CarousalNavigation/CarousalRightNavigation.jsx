import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSwiper } from 'swiper/react'
import arrowright from '../../../assets/arrowright.svg';
function CarousalRightNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsEnd(swiper.isEnd);
        })

    }, []);
    return (
        <div style={{ position: "absolute", top: "80px", right: "10px", color: "white", zIndex: 10, cursor: "pointer" }}>
            {!isEnd && <div onClick={() => { swiper.slideNext(); }}>
                <img src={arrowright} alt="arrowright" />
            </div>}
        </div>
    )
}

export default CarousalRightNavigation;