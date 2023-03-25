import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CarousalNavigation from './CarousalNavigation/CarousalNavigation';

function Carousal({ data, renderComponent }) {
    return (
        <div style={{ position: "relative" }}>
            <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} >
                <CarousalNavigation />
                {
                    data.map((ele) => (
                        <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousal