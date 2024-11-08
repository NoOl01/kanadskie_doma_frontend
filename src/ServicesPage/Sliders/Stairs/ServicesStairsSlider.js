import './ServicesStairsSlider.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import stairs1 from './Images/stairs1.jpg';
import stairs2 from './Images/stairs2.jpg';
import stairs3 from './Images/stairs3.jpg';
import stairs4 from './Images/stairs4.jpg';
import stairs5 from './Images/stairs5.jpg';
import stairs6 from './Images/stairs6.jpg';
import stairs7 from './Images/stairs7.jpg';
import {Autoplay} from "swiper/modules";

const StairsSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true} // Включение бесконечного скролла
            modules={[Autoplay]} // Подключение модуля пагинации
            className="Stairs-slider" // Класс для стилизации
            autoplay={{
                delay: 2000, // Задержка между переключениями (в миллисекундах)
                disableOnInteraction: false // Не останавливать автопрокрутку при взаимодействии
            }}

        >

            <SwiperSlide className="stairs_sl"><img src={stairs1} alt=""/></SwiperSlide>
            <SwiperSlide className="stairs_sl"><img src={stairs2} alt=""/></SwiperSlide>
            <SwiperSlide className="stairs_sl"><img src={stairs3} alt=""/></SwiperSlide>
            <SwiperSlide className="stairs_sl"><img src={stairs4} alt=""/></SwiperSlide>
            <SwiperSlide className="stairs_sl"><img src={stairs5} alt=""/></SwiperSlide>
            <SwiperSlide className="stairs_sl"><img src={stairs6} alt=""/></SwiperSlide>
            <SwiperSlide className="stairs_sl"><img src={stairs7} alt=""/></SwiperSlide>
        </Swiper>
    );
};
export default StairsSlider ;