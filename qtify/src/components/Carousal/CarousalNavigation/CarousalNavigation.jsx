import React from 'react'
import { useSwiper } from 'swiper/react'
import arrowleft from '../../../assets/arrowleft.svg';
import arrowright from '../../../assets/arrowright.svg';
function CarousalNavigation() {
    const swiper = useSwiper();
    return (
        <div>
            <div
                style={{ position: "absolute", top: "80px", left: "0", color: "white", zIndex: 10 }}
                onClick={() => { swiper.slidePrev(); }}>
                <img src={arrowleft} alt="arrowleft" />
            </div>
            <div
                style={{ position: "absolute", top: "80px", right: "0", color: "white", zIndex: 10 }}
                onClick={() => { swiper.slideNext(); }}>
                <img src={arrowright} alt="arrowright" />
            </div>

        </div>

    )
}

export default CarousalNavigation