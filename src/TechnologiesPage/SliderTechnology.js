import './SliderTechnologyStyle.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import paket from './TechnologyImg/sliderimg1/okno.webp'
import sipplita from './TechnologyImg/sliderimg1/sip.webp'
import brus from './TechnologyImg/sliderimg1/brus.webp'
import vata from './TechnologyImg/sliderimg1/vata.webp'
import gipsa from './TechnologyImg/sliderimg1/carton.webp'
import krovla from './TechnologyImg/sliderimg1/crovlya.webp'
import osb from './TechnologyImg/sliderimg1/osb.webp'

import {Autoplay, Pagination} from "swiper/modules";

const SimpleSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                clickable: true,
                el: '.custom-pagination', // Указываем элемент для пагинации
                renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet"></span>`; // Настройка стилей для буллетов
                },
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper1"
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className="slide1"><img src={brus} alt=""/></SwiperSlide>
            <SwiperSlide className="slide1"><img src={sipplita} alt=""/></SwiperSlide>
            <SwiperSlide className="slide1"><img src={vata} alt=""/></SwiperSlide>
            <SwiperSlide className="slide1"><img src={osb} alt=""/></SwiperSlide>
            <SwiperSlide className="slide1"><img src={krovla} alt=""/></SwiperSlide>
            <SwiperSlide className="slide1"><img src={gipsa} alt=""/></SwiperSlide>
            <SwiperSlide className="slide1"><img src={paket} alt=""/></SwiperSlide>

            {/* Элемент для пагинации */}
            <div className="custom-pagination"></div>
        </Swiper>
    );
};
export default SimpleSlider ;