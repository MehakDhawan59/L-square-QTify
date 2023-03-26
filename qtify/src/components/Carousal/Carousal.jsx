import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import CarousalLeftNavigation from './CarousalNavigation/CarousalLeftNavigation';
import CarousalRightNavigation from './CarousalNavigation/CarousalRightNavigation';

const Controls = ({ data }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);

    return <></>;
};
function Carousal({ data, renderComponent }) {


    return (
        <div style={{ position: "relative" }}>
            <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
                initialSlide={0} >
                {/* <Controls data={data} /> */}
                <CarousalLeftNavigation />
                <CarousalRightNavigation />
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