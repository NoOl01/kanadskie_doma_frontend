import './SliderTechnologyStyle.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import paket from "./TechnologyImg/paket.png"
import sipplita from './TechnologyImg/sip-panel.png'
import osb from './TechnologyImg/OSB.png'
import vata from './TechnologyImg/vata.png'
import krovla from './TechnologyImg/kkrovla.png'
import gipsa from './TechnologyImg/gipsokarton.png'
import {Autoplay, Pagination} from "swiper/modules";

const SimpleSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }} // Включение кликабельной пагинации
            loop={true} // Включение бесконечного скролла
            modules={[Pagination, Autoplay]} // Подключение модуля пагинации
            className="mySwiper" // Класс для стилизации
            autoplay={{
                delay: 2000, // Задержка между переключениями (в миллисекундах)
                disableOnInteraction: false // Не останавливать автопрокрутку при взаимодействии
            }}

        >

            <SwiperSlide><img src={paket} alt=""/></SwiperSlide>
            <SwiperSlide><img src={sipplita} alt=""/></SwiperSlide>
            <SwiperSlide><img src={vata} alt=""/></SwiperSlide>
            <SwiperSlide><img src={osb} alt=""/></SwiperSlide>
            <SwiperSlide><img src={krovla} alt=""/></SwiperSlide>
            <SwiperSlide><img src={gipsa} alt=""/></SwiperSlide>
        </Swiper>
    );
};
export default SimpleSlider ;